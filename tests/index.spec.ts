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

vi.mock('@actions/core', () => ({
  getInput: (name: string) => getInput(name),
  setFailed: (...a: unknown[]) => setFailed(...a),
  setOutput: (...a: unknown[]) => setOutput(...a),
  info: (...a: unknown[]) => info(...a),
  warning: (...a: unknown[]) => warning(...a),
  startGroup: (...a: unknown[]) => startGroup(...a),
  endGroup: (...a: unknown[]) => endGroup(...a),
}));

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
  categories: [
    { id: 'a', label: 'Alpha', score: 15, maxScore: 20, findings: [] },
  ],
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
    runArk.mockResolvedValue(RESULT);
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

    expect(runArk).toHaveBeenCalledWith(
      expect.objectContaining({ repoPath: './my-repo' }),
    );
  });

  it('defaults repo-path to "."', async () => {
    await loadIndex();
    expect(runArk).toHaveBeenCalledWith(
      expect.objectContaining({ repoPath: '.' }),
    );
  });

  it('sets the score output', async () => {
    await loadIndex();
    expect(setOutput).toHaveBeenCalledWith('score', '72');
  });

  it('sets the report-path output to the output input when provided', async () => {
    inputs = { output: 'docs/report.md' };
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

    expect(setFailed).toHaveBeenCalledWith(
      expect.stringContaining('Invalid min-score'),
    );
    expect(runArk).not.toHaveBeenCalled();
  });

  it('fails on a non-numeric min-score', async () => {
    inputs = { 'min-score': 'abc' };
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(
      expect.stringContaining('Invalid min-score'),
    );
  });

  it('fails when score is below the threshold', async () => {
    inputs = { 'min-score': '80' };
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(
      expect.stringContaining('below the required minimum'),
    );
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

    expect(setFailed).toHaveBeenCalledWith(
      expect.stringContaining('agent-readiness-kit failed'),
    );
    expect(setOutput).not.toHaveBeenCalled();
  });

  it('stringifies non-Error throws from runArk', async () => {
    runArk.mockRejectedValue('plain string failure');
    await loadIndex();

    expect(setFailed).toHaveBeenCalledWith(
      expect.stringContaining('plain string failure'),
    );
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

    expect(runArk).toHaveBeenCalledWith(
      expect.objectContaining({ output: 'docs/report.md' }),
    );
  });

  describe('PR commenting', () => {
    it('comments on the PR when enabled and a token is present', async () => {
      inputs = { 'comment-on-pr': 'true' };
      process.env.GITHUB_TOKEN = 'tok';
      await loadIndex();

      expect(commentOnPr).toHaveBeenCalledWith(
        expect.objectContaining({ token: 'tok' }),
      );
    });

    it('warns when commenting is enabled but no token is present', async () => {
      inputs = { 'comment-on-pr': 'true' };
      await loadIndex();

      expect(warning).toHaveBeenCalledWith(
        expect.stringContaining('GITHUB_TOKEN is not set'),
      );
      expect(commentOnPr).not.toHaveBeenCalled();
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

      expect(warning).toHaveBeenCalledWith(
        expect.stringContaining('Failed to post PR comment'),
      );
    });

    it('stringifies non-Error throws from commenting', async () => {
      inputs = { 'comment-on-pr': 'true' };
      process.env.GITHUB_TOKEN = 'tok';
      commentOnPr.mockRejectedValue('comment string failure');
      await loadIndex();

      expect(warning).toHaveBeenCalledWith(
        expect.stringContaining('comment string failure'),
      );
    });
  });
});
