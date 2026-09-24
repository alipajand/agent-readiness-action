import * as core from '@actions/core';
import { randomUUID } from 'node:crypto';
import { runArk } from './runArk';
import { formatLogSummary, formatLogDetail, formatMarkdownComment } from './formatSummary';
import { commentOnPr } from './commentPr';

/**
 * Log text derived from the audited repository with workflow-command
 * processing paused, so a crafted file name or message cannot emit
 * `::error::`, `::add-mask::`, or other commands into the run.
 */
function logUntrusted(text: string): void {
  const resumeToken = randomUUID();
  core.info(`::stop-commands::${resumeToken}`);
  core.info(text);
  core.info(`::${resumeToken}::`);
}

async function run(): Promise<void> {
  const repoPath = core.getInput('repo-path') || '.';
  const minScoreRaw = core.getInput('min-score') || '0';
  const output = core.getInput('output');
  const jsonFlag = core.getInput('json') === 'true';
  const commentOnPrFlag = core.getInput('comment-on-pr') === 'true';
  const failOnThreshold = core.getInput('fail-on-threshold') !== 'false';
  const commentAuthor = core.getInput('comment-author');

  const minScore = Number(minScoreRaw);
  if (!Number.isInteger(minScore) || minScore < 0 || minScore > 100) {
    core.setFailed(`Invalid min-score value: "${minScoreRaw}". Must be an integer between 0 and 100.`);
    return;
  }

  core.info(`Running agent-readiness-kit audit on: ${repoPath}`);

  let audit;
  try {
    audit = await runArk({ repoPath, output: output || undefined });
  } catch (err) {
    core.setFailed(`agent-readiness-kit failed: ${err instanceof Error ? err.message : String(err)}`);
    return;
  }
  const { result, reportPath } = audit;

  core.setOutput('score', String(result.score));
  core.setOutput('report-path', reportPath ?? '');

  // Log summary line
  core.info(formatLogSummary(result));

  // Collapsible detail group
  core.startGroup('Agent readiness details');
  logUntrusted(formatLogDetail(result));
  core.endGroup();

  // Optional raw JSON echo
  if (jsonFlag) {
    core.startGroup('Raw JSON output');
    logUntrusted(JSON.stringify(result, null, 2));
    core.endGroup();
  }

  // Optional PR comment
  if (commentOnPrFlag) {
    const token = core.getInput('github-token') || process.env.GITHUB_TOKEN;
    if (!token) {
      core.warning(
        'comment-on-pr is true but no token is available. Set the github-token input ' +
          'or add `env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}` to the step.',
      );
    } else {
      try {
        const commentBody = formatMarkdownComment(result);
        await commentOnPr({ body: commentBody, token, authorLogin: commentAuthor || undefined });
      } catch (err) {
        core.warning(
          `Failed to post PR comment: ${err instanceof Error ? err.message : String(err)}`,
        );
      }
    }
  }

  // Threshold check — runs last so output and comments still happen even on failure
  if (failOnThreshold && result.score < minScore) {
    core.setFailed(
      `Agent-readiness score ${result.score} is below the required minimum of ${minScore}.`,
    );
  }
}

run();
