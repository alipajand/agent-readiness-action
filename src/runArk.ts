import { constants } from 'node:fs';
import { lstat, mkdir, open } from 'node:fs/promises';
import type { FileHandle } from 'node:fs/promises';
import * as path from 'node:path';
import { auditRepo } from '../vendor/agent-readiness-kit/src/audit/auditRepo.js';
import { formatMarkdownReport } from '../vendor/agent-readiness-kit/src/report/markdownReport.js';
import { resolveOutputPath } from '../vendor/agent-readiness-kit/src/fs/resolveOutputPath.js';
import type {
  AuditResult,
  CategoryResult,
  Finding,
  FindingStatus,
} from '../vendor/agent-readiness-kit/src/types.js';

export type { AuditResult, FindingStatus };
export type AuditCategory = CategoryResult;
export type AuditFinding = Finding;

export interface RunArkOptions {
  repoPath: string;
  output?: string;
  /** Base for a relative `repoPath`. Defaults to GITHUB_WORKSPACE, then the cwd. */
  workspace?: string;
}

export interface RunArkResult {
  result: AuditResult;
  /** Absolute path of the Markdown report, when `output` was set. */
  reportPath?: string;
}

// O_NOFOLLOW and O_NONBLOCK are undefined on Windows runners. There, the check
// after opening an existing file still refuses symlinks.
const NO_FOLLOW = constants.O_NOFOLLOW ?? 0;
// O_EXCL fails when anything, including a dangling symlink, is already there.
const CREATE_FLAGS = constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | NO_FOLLOW;
// No O_CREAT or O_TRUNC: nothing changes until the opened file is verified.
const EXISTING_FLAGS = constants.O_WRONLY | NO_FOLLOW | (constants.O_NONBLOCK ?? 0);

function symlinkError(filePath: string): Error {
  return new Error(`Refusing to write the report through a symbolic link: ${filePath}`);
}

function errorCode(error: unknown): string | undefined {
  return (error as NodeJS.ErrnoException).code;
}

/**
 * Write the report without following a symlink at the final component and
 * without a gap between a check and the write. A new file is created
 * exclusively; an existing one is truncated only after confirming the path
 * still names that same regular file.
 */
async function writeReportNoFollow(filePath: string, content: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });

  let handle: FileHandle;
  try {
    handle = await open(filePath, CREATE_FLAGS, 0o666);
  } catch (err) {
    if (errorCode(err) !== 'EEXIST') throw err;
    try {
      handle = await open(filePath, EXISTING_FLAGS);
    } catch (existingErr) {
      if (errorCode(existingErr) === 'ELOOP') throw symlinkError(filePath);
      throw existingErr;
    }
    try {
      const opened = await handle.stat();
      const named = await lstat(filePath);
      if (named.isSymbolicLink() || opened.ino !== named.ino || opened.dev !== named.dev) {
        throw symlinkError(filePath);
      }
      if (!opened.isFile()) throw new Error(`The report path is not a regular file: ${filePath}`);
      await handle.truncate(0);
    } catch (verifyErr) {
      await handle.close();
      throw verifyErr;
    }
  }

  try {
    await handle.writeFile(content, 'utf8');
  } finally {
    await handle.close();
  }
}

/**
 * Audits `repoPath` with the agent-readiness-kit engine bundled into this
 * action (pinned by the `vendor/agent-readiness-kit` submodule), so nothing is
 * downloaded or executed from a package registry at run time. When `output`
 * is set, a Markdown report is written inside the audited repository.
 */
export async function runArk(options: RunArkOptions): Promise<RunArkResult> {
  const workspace = path.resolve(
    options.workspace ?? process.env.GITHUB_WORKSPACE ?? process.cwd(),
  );
  const repoPath = path.resolve(workspace, options.repoPath);

  const result = await auditRepo(repoPath);

  if (!options.output) return { result };

  let reportPath: string;
  try {
    reportPath = resolveOutputPath(repoPath, options.output);
  } catch {
    throw new Error(
      `The output input must resolve to a path inside repo-path (${repoPath}); got "${options.output}".`,
    );
  }
  await writeReportNoFollow(reportPath, formatMarkdownReport(result));
  return { result, reportPath };
}
