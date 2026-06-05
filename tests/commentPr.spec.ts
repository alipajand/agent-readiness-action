import { vi, describe, it, expect, beforeEach } from 'vitest';

const infoMock = vi.fn();
const warningMock = vi.fn();

vi.mock('@actions/core', () => ({
  info: (...args: unknown[]) => infoMock(...args),
  warning: (...args: unknown[]) => warningMock(...args),
}));

const listComments = vi.fn();
const createComment = vi.fn();
const updateComment = vi.fn();
const getOctokit = vi.fn((_token: string) => ({
  rest: {
    issues: { listComments, createComment, updateComment },
  },
}));

const context: {
  eventName: string;
  payload: { pull_request?: { number?: number } };
  repo: { owner: string; repo: string };
} = {
  eventName: 'pull_request',
  payload: { pull_request: { number: 42 } },
  repo: { owner: 'acme', repo: 'widgets' },
};

vi.mock('@actions/github', () => ({
  get context() {
    return context;
  },
  getOctokit: (token: string) => getOctokit(token),
}));

import { commentOnPr, COMMENT_MARKER } from '../src/commentPr';

function resetContext(): void {
  context.eventName = 'pull_request';
  context.payload = { pull_request: { number: 42 } };
  context.repo = { owner: 'acme', repo: 'widgets' };
}

describe('commentOnPr', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetContext();
    listComments.mockResolvedValue({ data: [] });
    createComment.mockResolvedValue({ data: { id: 999 } });
    updateComment.mockResolvedValue({ data: { id: 999 } });
  });

  it('skips when the event is not a pull request', async () => {
    context.eventName = 'push';

    await commentOnPr({ body: 'hello', token: 'tok' });

    expect(getOctokit).not.toHaveBeenCalled();
    expect(infoMock).toHaveBeenCalledWith(
      expect.stringContaining('Skipping PR comment'),
    );
  });

  it('runs for pull_request_target events', async () => {
    context.eventName = 'pull_request_target';

    await commentOnPr({ body: 'hello', token: 'tok' });

    expect(createComment).toHaveBeenCalledTimes(1);
  });

  it('warns and skips when PR number is missing', async () => {
    context.payload = {};

    await commentOnPr({ body: 'hello', token: 'tok' });

    expect(warningMock).toHaveBeenCalledWith(
      expect.stringContaining('Could not determine PR number'),
    );
    expect(getOctokit).not.toHaveBeenCalled();
  });

  it('creates a new comment when none exists', async () => {
    await commentOnPr({ body: 'audit body', token: 'tok' });

    expect(getOctokit).toHaveBeenCalledWith('tok');
    expect(createComment).toHaveBeenCalledTimes(1);
    expect(updateComment).not.toHaveBeenCalled();

    const arg = createComment.mock.calls[0][0];
    expect(arg).toMatchObject({
      owner: 'acme',
      repo: 'widgets',
      issue_number: 42,
    });
    expect(arg.body).toContain(COMMENT_MARKER);
    expect(arg.body).toContain('audit body');
  });

  it('updates the existing comment when one is found', async () => {
    listComments.mockResolvedValue({
      data: [
        { id: 1, body: 'unrelated comment' },
        { id: 7, body: `${COMMENT_MARKER}\nold content` },
      ],
    });

    await commentOnPr({ body: 'new content', token: 'tok' });

    expect(updateComment).toHaveBeenCalledTimes(1);
    expect(createComment).not.toHaveBeenCalled();

    const arg = updateComment.mock.calls[0][0];
    expect(arg).toMatchObject({ owner: 'acme', repo: 'widgets', comment_id: 7 });
    expect(arg.body).toContain('new content');
    expect(arg.body).toContain(COMMENT_MARKER);
  });

  it('queries comments for the correct PR', async () => {
    await commentOnPr({ body: 'x', token: 'tok' });

    expect(listComments).toHaveBeenCalledWith(
      expect.objectContaining({
        owner: 'acme',
        repo: 'widgets',
        issue_number: 42,
      }),
    );
  });

  it('logs after creating a comment', async () => {
    await commentOnPr({ body: 'x', token: 'tok' });
    expect(infoMock).toHaveBeenCalledWith(
      expect.stringContaining('Created PR comment'),
    );
  });

  it('logs after updating a comment', async () => {
    listComments.mockResolvedValue({
      data: [{ id: 7, body: `${COMMENT_MARKER}\nold` }],
    });
    await commentOnPr({ body: 'x', token: 'tok' });
    expect(infoMock).toHaveBeenCalledWith(
      expect.stringContaining('Updated PR comment'),
    );
  });

  it('handles comments with null body without throwing', async () => {
    listComments.mockResolvedValue({
      data: [{ id: 3, body: null }],
    });

    await commentOnPr({ body: 'x', token: 'tok' });

    expect(createComment).toHaveBeenCalledTimes(1);
  });
});
