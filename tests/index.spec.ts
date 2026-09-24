import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { AuditResult } from '../src/runArk';

const setFailed = vi.fn();
const setOutput = vi.fn();
const info = vi.fn();
const warning = vi.fn();
const startGroup = vi.fn();
const endGroup = vi.fn();

let inputs: Record<string, string> = {};
const getInput = vi.fn((name: string) => inputs[name] ?? '');

const summaryAddRaw = vi.fn();
const summaryWrite = vi.fn();
const summary = {
  addRaw: (text: string) => {
    summaryAddRaw(text);
    return summary;
  },
  write: () => summaryWrite(),
};

vi.mock('@actions/core', () => ({
  getInput: (name: string) => getInput(name),
  setFailed: (...a: unknown[]) => setFailed(...a),
  setOutput: (...a: unknown[]) => setOutput(...a),
  info: (...a: unknown[]) => info(...a),
  warning: (...a: unknown[]) => warning(...a),
  debug: () => undefined,
  startGroup: (...a: unknown[]) => startGroup(...a),
  endGroup: (...a: unknown[]) => endGroup(...a),
  summary,
}));

const auditAtRef = vi.fn();
vi.mock('../src/baseline', () => ({
  auditAtRef: (...a: unknown[]) => auditAtRef(...a),
}));

const runContextAudit = vi.fn();
vi.mock('../src/runDoctor', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../src/runDoctor')>();
  return { ...actual, runContextAudit: (...a: unknown[]) => runContextAudit(...a) };
});

const runArk = vi.fn();
vi.mock('../src/runArk', () => ({
  runArk: (...a: unknown[]) => runArk(...a),
}));

const commentOnPr = vi.fn();
vi.mock('../src/commentPr', () => ({
  commentOnPr: (...a: unknown[]) => commentOnPr(...a),
}));

const RESULT: AuditResult = {
  repoPath: '/repo',
  score: 72,
  categories: [{ id: 'a', label: 'Alpha', score: 15, maxScore: 20, findings: [] }],
  missing: [],
  recommendations: [],
};

/** Imports src/index fresh, triggering run(), and waits for it to settle. */
async function loadIndex(): Promise<void> {
  vi.resetModules();
  await import('../src/index');
  // Flush the async run() chain.
  await new Promise((resolve) => setTimeout(resolve, 0));
}

const originalToken = process.env.GITHUB_TOKEN;

describe('index run()', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    inputs = {};
    runArk.mockResolvedValue({ result: RESULT });
    commentOnPr.mockResolvedValue(undefined);
    delete process.env.GITHUB_TOKEN;
  });

  afterEach(() => {
    if (originalToken === undefined) {
      delete process.env.GITHUB_TOKEN;
    } else {
      process.env.GITHUB_TOKEN = originalToken;
    }
  });

  it('runs the audit on the provided repo-path', async () => {
    inputs = { 'repo-path': './my-repo' };
    await loadIndex();

    expect(runArk).toHaveBeenCalledWith(expect.objectContaining({ repoPath: './my-repo' }));
  });

  it('defaults repo-path to "."', async () => {
    await loadIndex();
    expect(runArk).toHaveBeenCalledWith(expect.objectContaining({ repoPath: '.' }));
  });

  it('sets the score output', async () => {
    await loadIndex();
    expect(setOutput).toHaveBeenCalledWith('score', '72');
  });

  it('sets the report-path output to the resolved report path', async () => {
    inputs = { output: 'docs/report.md' };
    runArk.mockResolvedValue({ result: RESULT, reportPath: 'docs/report.md' });
    await loadIndex();
    expect(setOutput).toHaveBeenCalledWith('report-path', 'docs/report.md');
  });

  it('sets an empty report-path output when no output is provided', async () => {
    await loadIndex();
    expect(setOutput).toHaveBeenCalledWith('report-path', '');
  });

  it('logs a summary and a detail group', async () => {
    await loadIndex();
    expect(info).toHaveBeenCalled();
    expect(startGroup).toHaveBeenCalledWith('Agent readiness details');
    expect(endGroup).toHaveBeenCalled();
  });

  it('fails on an invalid min-score', async () => {
    inputs = { 'min-score': '150' };
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('Invalid min-score'));
    expect(runArk).not.toHaveBeenCalled();
  });

  it('fails on a non-numeric min-score', async () => {
    inputs = { 'min-score': 'abc' };
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('Invalid min-score'));
  });

  it('fails when score is below the threshold', async () => {
    inputs = { 'min-score': '80' };
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('below the required minimum'));
  });

  it('does not fail when score meets the threshold', async () => {
    inputs = { 'min-score': '70' };
    await loadIndex();

    expect(setFailed).not.toHaveBeenCalled();
  });

  it('does not fail below threshold when fail-on-threshold is false', async () => {
    inputs = { 'min-score': '80', 'fail-on-threshold': 'false' };
    await loadIndex();

    expect(setFailed).not.toHaveBeenCalled();
  });

  it('reports a failure when runArk throws', async () => {
    runArk.mockRejectedValue(new Error('boom'));
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('agent-readiness-kit failed'));
    expect(setOutput).not.toHaveBeenCalled();
  });

  it('stringifies non-Error throws from runArk', async () => {
    runArk.mockRejectedValue('plain string failure');
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('plain string failure'));
  });

  it('emits raw JSON group when json input is true', async () => {
    inputs = { json: 'true' };
    await loadIndex();

    expect(startGroup).toHaveBeenCalledWith('Raw JSON output');
  });

  it('does not emit raw JSON group when json input is not true', async () => {
    await loadIndex();
    expect(startGroup).not.toHaveBeenCalledWith('Raw JSON output');
  });

  it('passes output input through to runArk', async () => {
    inputs = { output: 'docs/report.md' };
    await loadIndex();

    expect(runArk).toHaveBeenCalledWith(expect.objectContaining({ output: 'docs/report.md' }));
  });

  describe('PR commenting', () => {
    it('comments on the PR when enabled and a token is present', async () => {
      inputs = { 'comment-on-pr': 'true' };
      process.env.GITHUB_TOKEN = 'tok';
      await loadIndex();

      expect(commentOnPr).toHaveBeenCalledWith(expect.objectContaining({ token: 'tok' }));
    });

    it('warns when commenting is enabled but no token is present', async () => {
      inputs = { 'comment-on-pr': 'true' };
      await loadIndex();

      expect(warning).toHaveBeenCalledWith(expect.stringContaining('no token is available'));
      expect(commentOnPr).not.toHaveBeenCalled();
    });

    it('prefers the github-token input and passes comment-author through', async () => {
      inputs = {
        'comment-on-pr': 'true',
        'github-token': 'input-token',
        'comment-author': 'ci-user',
      };
      process.env.GITHUB_TOKEN = 'env-token';
      await loadIndex();

      expect(commentOnPr).toHaveBeenCalledWith(
        expect.objectContaining({ token: 'input-token', authorLogin: 'ci-user' }),
      );
    });

    it('does not comment when the flag is off', async () => {
      process.env.GITHUB_TOKEN = 'tok';
      await loadIndex();

      expect(commentOnPr).not.toHaveBeenCalled();
    });

    it('warns but does not fail when commenting throws', async () => {
      inputs = { 'comment-on-pr': 'true' };
      process.env.GITHUB_TOKEN = 'tok';
      commentOnPr.mockRejectedValue(new Error('api down'));
      await loadIndex();

      expect(warning).toHaveBeenCalledWith(expect.stringContaining('Failed to post PR comment'));
    });

    it('stringifies non-Error throws from commenting', async () => {
      inputs = { 'comment-on-pr': 'true' };
      process.env.GITHUB_TOKEN = 'tok';
      commentOnPr.mockRejectedValue('comment string failure');
      await loadIndex();

      expect(warning).toHaveBeenCalledWith(expect.stringContaining('comment string failure'));
    });
  });
});

describe('index run() — untrusted log output', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    inputs = {};
    commentOnPr.mockResolvedValue(undefined);
  });

  it('pauses workflow commands while logging audit details', async () => {
    runArk.mockResolvedValue({
      result: {
        ...RESULT,
        categories: [
          {
            id: 'a',
            label: 'Alpha',
            score: 1,
            maxScore: 20,
            findings: [{ status: 'fail', message: 'x\n::error::spoofed' }],
          },
        ],
      },
    });
    await loadIndex();

    const lines = info.mock.calls.map((c) => String(c[0]));
    const stop = lines.findIndex((l) => l.startsWith('::stop-commands::'));
    expect(stop).toBeGreaterThanOrEqual(0);
    const token = lines[stop].slice('::stop-commands::'.length);
    expect(lines).toContain(`::${token}::`);
    expect(lines.some((l) => l.split('\n').some((part) => part.startsWith('::error::')))).toBe(
      false,
    );
  });

  it('rejects a non-integer min-score', async () => {
    inputs = { 'min-score': '70abc' };
    runArk.mockResolvedValue({ result: RESULT });
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('Invalid min-score'));
    expect(runArk).not.toHaveBeenCalled();
  });
});

describe('index run() — summary, outputs, and baseline', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    inputs = {};
    runArk.mockResolvedValue({ result: RESULT });
    summaryWrite.mockResolvedValue(undefined);
  });

  it('writes the job summary by default and can turn it off', async () => {
    await loadIndex();
    expect(summaryAddRaw).toHaveBeenCalledWith(expect.stringContaining('Agent Readiness Audit'));

    vi.clearAllMocks();
    inputs = { 'job-summary': 'false' };
    await loadIndex();
    expect(summaryAddRaw).not.toHaveBeenCalled();
  });

  it('sets passed and categories outputs', async () => {
    inputs = { 'min-score': '80' };
    await loadIndex();
    expect(setOutput).toHaveBeenCalledWith('passed', 'false');
    expect(setOutput).toHaveBeenCalledWith(
      'categories',
      JSON.stringify([{ id: 'a', label: 'Alpha', score: 15, maxScore: 20 }]),
    );
  });

  it('reports the score change against baseline-ref', async () => {
    inputs = { 'baseline-ref': 'base-sha' };
    auditAtRef.mockResolvedValue(80);
    await loadIndex();
    expect(auditAtRef).toHaveBeenCalledWith('.', 'base-sha');
    expect(setOutput).toHaveBeenCalledWith('baseline-score', '80');
    expect(setOutput).toHaveBeenCalledWith('score-delta', '-8');
    expect(summaryAddRaw).toHaveBeenCalledWith(expect.stringContaining('▼ -8 vs'));
  });

  it('fails when the score drops more than max-score-drop', async () => {
    inputs = { 'baseline-ref': 'base-sha', 'max-score-drop': '5' };
    auditAtRef.mockResolvedValue(80);
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('dropped by 8'));
  });

  it('passes when the drop is within max-score-drop', async () => {
    inputs = { 'baseline-ref': 'base-sha', 'max-score-drop': '10' };
    auditAtRef.mockResolvedValue(80);
    await loadIndex();
    expect(setFailed).not.toHaveBeenCalled();
  });

  it('requires baseline-ref for max-score-drop and validates the value', async () => {
    inputs = { 'max-score-drop': '5' };
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('needs baseline-ref'));

    vi.clearAllMocks();
    inputs = { 'baseline-ref': 'x', 'max-score-drop': 'lots' };
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('Invalid max-score-drop'));
  });

  it('fails clearly when the baseline audit fails', async () => {
    inputs = { 'baseline-ref': 'missing' };
    auditAtRef.mockRejectedValue(new Error('not available in this checkout'));
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(
      expect.stringContaining('Baseline audit failed: not available'),
    );
  });
});

describe('index run() — context audit', () => {
  const CONTEXT = {
    repoPath: '/repo',
    files: [{ path: 'AGENTS.md', kind: 'agents', bytes: 10 }],
    summary: { fileCount: 1, issueCount: 1, high: 1, medium: 0, low: 0 },
    score: { total: 80, max: 100, grade: 'good' },
    issues: [
      {
        id: 'r',
        severity: 'high',
        category: 'risky-language',
        file: 'AGENTS.md',
        line: 2,
        message: 'Risky instruction: "skip tests"',
        recommendation: 'Remove it.',
      },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    inputs = {};
    runArk.mockResolvedValue({ result: RESULT });
    runContextAudit.mockResolvedValue(CONTEXT);
    summaryWrite.mockResolvedValue(undefined);
  });

  it('does not run the context audit by default', async () => {
    await loadIndex();
    expect(runContextAudit).not.toHaveBeenCalled();
  });

  it('adds context outputs and a summary section when enabled', async () => {
    inputs = { 'context-audit': 'true' };
    await loadIndex();
    expect(setOutput).toHaveBeenCalledWith('context-score', '80');
    expect(setOutput).toHaveBeenCalledWith('context-grade', 'good');
    expect(setOutput).toHaveBeenCalledWith('context-issue-count', '1');
    const summaryText = String(summaryAddRaw.mock.calls[0][0]);
    expect(summaryText).toContain('### Agent context quality: 80 / 100 (good)');
    expect(summaryText.indexOf('Agent context quality')).toBeLessThan(
      summaryText.indexOf('_Generated by'),
    );
    expect(setFailed).not.toHaveBeenCalled();
  });

  it('fails on context issues at or above context-fail-on', async () => {
    inputs = { 'context-audit': 'true', 'context-fail-on': 'high' };
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('at or above "high"'));
  });

  it('validates context-fail-on and requires context-audit', async () => {
    inputs = { 'context-audit': 'true', 'context-fail-on': 'critical' };
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('Invalid context-fail-on'));

    vi.clearAllMocks();
    inputs = { 'context-fail-on': 'high' };
    await loadIndex();
    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('needs context-audit'));
  });
});
