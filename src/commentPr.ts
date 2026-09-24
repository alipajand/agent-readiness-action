import * as core from '@actions/core';
import * as github from '@actions/github';

/** HTML marker embedded in every comment body so we can find and update it. */
export const COMMENT_MARKER = '<!-- agent-readiness-action -->';

/** GitHub rejects issue comments longer than 65,536 characters. */
const MAX_COMMENT_LENGTH = 65_000;
const TRUNCATION_NOTE =
  "\n\n_Report truncated to fit GitHub's comment size limit. See the workflow log for the full output._";

export interface CommentPrOptions {
  body: string;
  /** GitHub token with pull-requests:write permission. */
  token: string;
  /** Only update an earlier comment written by this login. Default: any bot account. */
  authorLogin?: string;
}

export interface ExistingComment {
  id: number;
  body?: string | null;
  user?: { login?: string; type?: string } | null;
}

/**
 * True for a summary comment this action posted earlier. Anyone can paste the
 * marker into their own comment, so it must start the body and the author
 * must be `authorLogin` or, by default, a bot account (`GITHUB_TOKEN` posts
 * as `github-actions[bot]`). Otherwise a user could get the action to write
 * the summary into a comment they own and can later edit.
 */
export function isOwnSummaryComment(comment: ExistingComment, authorLogin?: string): boolean {
  if (typeof comment.body !== 'string' || !comment.body.startsWith(COMMENT_MARKER)) {
    return false;
  }
  if (authorLogin) return comment.user?.login === authorLogin;
  return comment.user?.type === 'Bot';
}

export function buildCommentBody(body: string): string {
  const full = `${COMMENT_MARKER}\n${body}`;
  if (full.length <= MAX_COMMENT_LENGTH) return full;
  return full.slice(0, MAX_COMMENT_LENGTH - TRUNCATION_NOTE.length) + TRUNCATION_NOTE;
}

/**
 * Posts or updates a PR comment on the current pull_request event.
 * Silently skips when the event is not a pull request.
 */
export async function commentOnPr(options: CommentPrOptions): Promise<void> {
  const { body, token, authorLogin } = options;
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
  const fullBody = buildCommentBody(body);

  const comments = await octokit.paginate(octokit.rest.issues.listComments, {
    owner,
    repo,
    issue_number: pullNumber,
    per_page: 100,
  });

  const existing = comments.find((c) => isOwnSummaryComment(c, authorLogin));

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
