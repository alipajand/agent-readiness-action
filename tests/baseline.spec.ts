import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readdir, realpath, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { assertSafeRef, auditAtRef, BaselineError } from '../src/baseline';
import { runArk } from '../src/runArk';

function git(args: string[], cwd: string): string {
  return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
}

let root: string;
let repo: string;
let temp: string;

beforeEach(async () => {
  root = await realpath(await mkdtemp(path.join(tmpdir(), 'ara-baseline-')));
  repo = path.join(root, 'repo');
  temp = path.join(root, 'tmp');
  await mkdir(repo);
  await mkdir(temp);
  git(['init', '-q', '-b', 'main'], repo);
  git(['config', 'user.email', 'ci@example.com'], repo);
  git(['config', 'user.name', 'CI'], repo);
  git(['config', 'commit.gpgsign', 'false'], repo);
  await writeFile(path.join(repo, 'README.md'), '# Project\n');
  git(['add', '-A'], repo);
  git(['commit', '-q', '-m', 'base'], repo);
});

afterEach(async () => {
  await rm(root, { recursive: true, force: true });
});

describe('auditAtRef', () => {
  it('audits the repository as it was at the ref', async () => {
    const baseSha = git(['rev-parse', 'HEAD'], repo);
    await writeFile(path.join(repo, 'AGENTS.md'), '# Agents\nRun the tests.\n');
    git(['add', '-A'], repo);
    git(['commit', '-q', '-m', 'add agents'], repo);

    const now = (await runArk({ repoPath: repo })).result.score;
    const before = await auditAtRef(repo, baseSha, temp);
    expect(before).toBeLessThan(now);
  });

  it('removes the temporary worktree afterwards', async () => {
    await auditAtRef(repo, 'HEAD', temp);
    expect(await readdir(temp)).toEqual([]);
    expect(git(['worktree', 'list', '--porcelain'], repo).match(/^worktree /gm)).toHaveLength(1);
  });

  it('audits a subdirectory at the same relative path', async () => {
    await mkdir(path.join(repo, 'packages', 'web'), { recursive: true });
    await writeFile(path.join(repo, 'packages', 'web', 'AGENTS.md'), '# Web agents\n');
    git(['add', '-A'], repo);
    git(['commit', '-q', '-m', 'web'], repo);
    const score = await auditAtRef(path.join(repo, 'packages', 'web'), 'HEAD', temp);
    expect(score).toBeGreaterThan(0);
  });

  it('explains a ref that is not in the checkout', async () => {
    await expect(auditAtRef(repo, 'does-not-exist', temp)).rejects.toThrow(
      /not available in this checkout/,
    );
  });

  it('rejects a directory outside any git repository', async () => {
    await expect(auditAtRef(temp, 'HEAD', temp)).rejects.toThrow(BaselineError);
  });
});

describe('assertSafeRef', () => {
  it.each(['--output=x', '-b', '', ' ', 'main\nx'])('rejects %j', (ref) => {
    expect(() => assertSafeRef(ref)).toThrow(BaselineError);
  });

  it('accepts ordinary refs', () => {
    expect(() => assertSafeRef('origin/main')).not.toThrow();
    expect(() => assertSafeRef('3f1c2ab')).not.toThrow();
  });
});
