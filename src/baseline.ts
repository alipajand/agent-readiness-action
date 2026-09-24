import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { runArk } from './runArk';

export class BaselineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BaselineError';
  }
}

function git(args: string[], cwd: string): string {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

/** A ref such as `--output=x` must never reach git as an option. */
export function assertSafeRef(ref: string): void {
  if (!ref.trim() || ref.startsWith('-') || /[\u0000-\u001f\u007f]/.test(ref)) {
    throw new BaselineError(`baseline-ref must be a git ref, got "${ref}"`);
  }
}

/**
 * Audit `repoPath` as it was at `ref` and return the score. The audit runs in
 * a temporary detached worktree, so the checkout used by the rest of the job
 * is never modified, and the worktree is removed afterwards.
 */
export async function auditAtRef(
  repoPath: string,
  ref: string,
  tempRoot: string = os.tmpdir(),
): Promise<number> {
  assertSafeRef(ref);
  const absRepo = path.resolve(repoPath);

  let top: string;
  try {
    top = git(['rev-parse', '--show-toplevel'], absRepo);
  } catch {
    throw new BaselineError(`${absRepo} is not inside a git checkout; baseline-ref needs one.`);
  }

  try {
    git(['rev-parse', '--verify', '--quiet', '--end-of-options', `${ref}^{commit}`], top);
  } catch {
    throw new BaselineError(
      `baseline-ref "${ref}" is not available in this checkout. Fetch it first, for example with actions/checkout and fetch-depth: 0.`,
    );
  }

  const dir = mkdtempSync(path.join(tempRoot, 'agent-readiness-baseline-'));
  const worktree = path.join(dir, 'tree');
  try {
    git(['worktree', 'add', '--detach', worktree, ref], top);
    const { result } = await runArk({
      repoPath: path.join(worktree, path.relative(top, absRepo)),
    });
    return result.score;
  } finally {
    try {
      git(['worktree', 'remove', '--force', worktree], top);
    } catch {
      // Fall through to deleting the directory and pruning the reference.
    }
    rmSync(dir, { recursive: true, force: true });
    try {
      git(['worktree', 'prune'], top);
    } catch {
      // Nothing left to clean up.
    }
  }
}
