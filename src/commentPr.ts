import * as core from '@actions/core';
import * as github from '@actions/github';

/** HTML marker embedded in every comment body so we can find and update it. */
export const COMMENT_MARKER = '<!-- agent-readiness-action -->';

export interface CommentPrOptions {
  body: string;
  /** GitHub token with pull-requests:write permission. */
  token: string;
}

/**
 * Posts or updates a PR comment on the current pull_request event.
 * Silently skips when the event is not a pull request.
 */
export async function commentOnPr(options: CommentPrOptions): Promise<void> {
  const { body, token } = options;
  const ctx = github.context;

  if (ctx.eventName !== 'pull_request' && ctx.eventName !== 'pull_request_target') {
    core.info(
      `Skipping PR comment: event is "${ctx.eventName}", not pull_request.`,
    );
    return;
  }

  const pullNumber = ctx.payload.pull_request?.number;
  if (!pullNumber) {
    core.warning('Could not determine PR number from context; skipping comment.');
    return;
  }

  const { owner, repo } = ctx.repo;
  const octokit = github.getOctokit(token);
  const fullBody = `${COMMENT_MARKER}\n${body}`;

  const { data: comments } = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number: pullNumber,
    per_page: 100,
  });

  const existing = comments.find((c) => c.body?.includes(COMMENT_MARKER));

  if (existing) {
    await octokit.rest.issues.updateComment({
      owner,
      repo,
      comment_id: existing.id,
      body: fullBody,
    });
    core.info(`Updated PR comment (id ${existing.id}) on PR #${pullNumber}.`);
  } else {
    const { data: created } = await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body: fullBody,
    });
    core.info(`Created PR comment (id ${created.id}) on PR #${pullNumber}.`);
  }
}
