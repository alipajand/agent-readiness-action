import { constants } from 'node:fs';
import { lstat, mkdir, open } from 'node:fs/promises';
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

// O_NOFOLLOW is undefined on Windows runners; the lstat check covers them.
const WRITE_FLAGS =
  constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | (constants.O_NOFOLLOW ?? 0);

async function writeReportNoFollow(filePath: string, content: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const existing = await lstat(filePath).catch(() => null);
  if (existing?.isSymbolicLink()) {
    throw new Error(`Refusing to write the report through a symbolic link: ${filePath}`);
  }
  const handle = await open(filePath, WRITE_FLAGS, 0o666);
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
