import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, mkdir, readFile, realpath, rm, symlink, writeFile, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { runArk } from '../src/runArk';

let workspace: string;
let repo: string;

beforeEach(async () => {
  workspace = await realpath(await mkdtemp(path.join(tmpdir(), 'ara-runark-')));
  repo = path.join(workspace, 'repo');
  await mkdir(repo);
  await writeFile(
    path.join(repo, 'AGENTS.md'),
    '# Agents\n\nRun `pnpm test` before finishing. Ask before auth changes.\n',
  );
  await writeFile(
    path.join(repo, 'package.json'),
    JSON.stringify({ name: 'fixture', scripts: { test: 'vitest run' } }),
  );
});

afterEach(async () => {
  await rm(workspace, { recursive: true, force: true });
});

describe('runArk', () => {
  it('audits the repository with the bundled engine', async () => {
    const { result, reportPath } = await runArk({ repoPath: repo });

    expect(result.repoPath).toBe(repo);
    expect(result.score).toBeGreaterThan(0);
    expect(result.score).toBeLessThanOrEqual(100);
    expect(result.categories.map((c) => c.id)).toContain('agent-instructions');
    expect(reportPath).toBeUndefined();
  });

  it('resolves a relative repo path against the workspace', async () => {
    const { result } = await runArk({ repoPath: 'repo', workspace });
    expect(result.repoPath).toBe(repo);
  });

  it('writes a Markdown report inside the audited repository', async () => {
    const { reportPath } = await runArk({ repoPath: repo, output: 'docs/report.md' });

    expect(reportPath).toBe(path.join(repo, 'docs', 'report.md'));
    const report = await readFile(path.join(repo, 'docs', 'report.md'), 'utf8');
    expect(report).toContain('# Agent Readiness Report');
  });

  it('rejects a report path that escapes the repository', async () => {
    await expect(runArk({ repoPath: repo, output: '../escape.md' })).rejects.toThrow(
      /must resolve to a path inside repo-path/,
    );
    await expect(access(path.join(workspace, 'escape.md'))).rejects.toThrow();
  });

  it('rejects an absolute report path outside the repository', async () => {
    await expect(
      runArk({ repoPath: repo, output: path.join(workspace, 'escape.md') }),
    ).rejects.toThrow(/must resolve to a path inside repo-path/);
  });

  it('refuses to write the report through a symlink', async () => {
    const target = path.join(workspace, 'target.md');
    await writeFile(target, 'keep');
    await symlink(target, path.join(repo, 'report.md'));

    await expect(runArk({ repoPath: repo, output: 'report.md' })).rejects.toThrow(
      /symbolic link/,
    );
    expect(await readFile(target, 'utf8')).toBe('keep');
  });

  it('does not write score history into the audited repository', async () => {
    await runArk({ repoPath: repo });
    await expect(access(path.join(repo, '.ark-history.json'))).rejects.toThrow();
  });
});
