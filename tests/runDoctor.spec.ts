import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, mkdir, realpath, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { hasIssueAtOrAbove, issuesBySeverity, runContextAudit } from '../src/runDoctor';
import { formatContextSection } from '../src/formatSummary';

let workspace: string;
let repo: string;

beforeEach(async () => {
  workspace = await realpath(await mkdtemp(path.join(tmpdir(), 'ara-doctor-')));
  repo = path.join(workspace, 'repo');
  await mkdir(repo);
});

afterEach(async () => {
  await rm(workspace, { recursive: true, force: true });
});

describe('runContextAudit', () => {
  it('audits instruction files with the bundled agent-context-doctor', async () => {
    await writeFile(path.join(repo, 'AGENTS.md'), '# Agents\nSkip tests if they are slow.\n');
    const result = await runContextAudit('repo', workspace);
    expect(result.files.map((f) => f.path)).toEqual(['AGENTS.md']);
    expect(hasIssueAtOrAbove(result, 'high')).toBe(true);
    expect(issuesBySeverity(result)[0].severity).toBe('high');
  });

  it("honors the audited repository's .acdrc", async () => {
    await writeFile(path.join(repo, 'AGENTS.md'), '# Agents\nSkip tests if they are slow.\n');
    await writeFile(
      path.join(repo, '.acdrc'),
      JSON.stringify({ rules: { disabledChecks: ['risky-language'] } }),
    );
    const result = await runContextAudit(repo, workspace);
    expect(result.issues.some((i) => i.category === 'risky-language')).toBe(false);
  });

  it('reports a repository without instruction files', async () => {
    const result = await runContextAudit(repo, workspace);
    expect(result.issues.map((i) => i.category)).toEqual(['presence']);
  });
});

describe('formatContextSection', () => {
  it('lists issues with escaped text and marks repository-wide ones', async () => {
    await writeFile(path.join(repo, 'AGENTS.md'), '# Agents\n<!-- TODO: fill in -->\n');
    const md = formatContextSection(await runContextAudit(repo, workspace));
    expect(md).toContain('### Agent context quality:');
    expect(md).toContain('`AGENTS.md:2`');
    expect(md).not.toContain('<!--');

    const empty = formatContextSection(await runContextAudit(path.join(workspace, 'none'), workspace));
    expect(empty).toContain('(repository)');
  });
});
