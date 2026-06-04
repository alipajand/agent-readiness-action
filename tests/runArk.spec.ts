import { vi, describe, it, expect, beforeEach } from 'vitest';
import type { AuditResult } from '../src/runArk';

vi.mock('@actions/exec', () => ({
  exec: vi.fn(),
}));

import * as execModule from '@actions/exec';
import { runArk } from '../src/runArk';

const MOCK_RESULT: AuditResult = {
  repoPath: '/some/repo',
  score: 72,
  categories: [
    {
      id: 'agent-instructions',
      label: 'Agent instructions',
      score: 14,
      maxScore: 20,
      findings: [{ status: 'pass', message: 'AGENTS.md found' }],
    },
    {
      id: 'architecture',
      label: 'Architecture',
      score: 12,
      maxScore: 15,
      findings: [{ status: 'warn', message: 'docs/ARCHITECTURE.md is a template placeholder' }],
    },
  ],
  missing: ['docs/API.md'],
  recommendations: ['Customise docs/ARCHITECTURE.md'],
};

describe('runArk', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls npx agent-readiness-kit audit with --json', async () => {
    vi.mocked(execModule.exec).mockImplementation(
      async (_cmd, _args, opts) => {
        opts?.listeners?.stdout?.(Buffer.from(JSON.stringify(MOCK_RESULT)));
        return 0;
      },
    );

    await runArk({ repoPath: '/some/repo' });

    expect(execModule.exec).toHaveBeenCalledWith(
      'npx',
      expect.arrayContaining(['--yes', 'agent-readiness-kit', 'audit', expect.any(String), '--json']),
      expect.any(Object),
    );
  });

  it('parses and returns audit JSON', async () => {
    vi.mocked(execModule.exec).mockImplementation(
      async (_cmd, _args, opts) => {
        opts?.listeners?.stdout?.(Buffer.from(JSON.stringify(MOCK_RESULT)));
        return 0;
      },
    );

    const result = await runArk({ repoPath: '/some/repo' });

    expect(result.score).toBe(72);
    expect(result.categories).toHaveLength(2);
    expect(result.missing).toContain('docs/API.md');
  });

  it('passes --output when option is set', async () => {
    vi.mocked(execModule.exec).mockImplementation(
      async (_cmd, _args, opts) => {
        opts?.listeners?.stdout?.(Buffer.from(JSON.stringify(MOCK_RESULT)));
        return 0;
      },
    );

    await runArk({ repoPath: '/some/repo', output: 'docs/report.md' });

    expect(execModule.exec).toHaveBeenCalledWith(
      'npx',
      expect.arrayContaining(['--output', 'docs/report.md']),
      expect.any(Object),
    );
  });

  it('does not pass --output when option is omitted', async () => {
    vi.mocked(execModule.exec).mockImplementation(
      async (_cmd, _args, opts) => {
        opts?.listeners?.stdout?.(Buffer.from(JSON.stringify(MOCK_RESULT)));
        return 0;
      },
    );

    await runArk({ repoPath: '/some/repo' });

    const callArgs = vi.mocked(execModule.exec).mock.calls[0][1] as string[];
    expect(callArgs).not.toContain('--output');
  });

  it('throws when exit code is non-zero', async () => {
    vi.mocked(execModule.exec).mockImplementation(async (_cmd, _args, opts) => {
      opts?.listeners?.stderr?.(Buffer.from('something went wrong'));
      return 1;
    });

    await expect(runArk({ repoPath: '.' })).rejects.toThrow('exited with code 1');
  });

  it('throws when stdout is not valid JSON', async () => {
    vi.mocked(execModule.exec).mockImplementation(async (_cmd, _args, opts) => {
      opts?.listeners?.stdout?.(Buffer.from('not valid json at all'));
      return 0;
    });

    await expect(runArk({ repoPath: '.' })).rejects.toThrow('Failed to parse');
  });

  it('accumulates stdout across multiple chunks', async () => {
    const json = JSON.stringify(MOCK_RESULT);
    const mid = Math.floor(json.length / 2);

    vi.mocked(execModule.exec).mockImplementation(async (_cmd, _args, opts) => {
      opts?.listeners?.stdout?.(Buffer.from(json.slice(0, mid)));
      opts?.listeners?.stdout?.(Buffer.from(json.slice(mid)));
      return 0;
    });

    const result = await runArk({ repoPath: '.' });
    expect(result.score).toBe(72);
  });
});
