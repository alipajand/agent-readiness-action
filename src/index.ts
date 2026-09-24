import * as core from '@actions/core';
import { randomUUID } from 'node:crypto';
import { runArk } from './runArk';
import { formatLogSummary, formatLogDetail, formatMarkdownComment } from './formatSummary';
import { commentOnPr } from './commentPr';
import { auditAtRef } from './baseline';
import type { ScoreComparison } from './formatSummary';

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
  const baselineRef = core.getInput('baseline-ref');
  const maxScoreDropRaw = core.getInput('max-score-drop');
  const jobSummary = core.getInput('job-summary') !== 'false';

  const minScore = Number(minScoreRaw);
  if (!Number.isInteger(minScore) || minScore < 0 || minScore > 100) {
    core.setFailed(`Invalid min-score value: "${minScoreRaw}". Must be an integer between 0 and 100.`);
    return;
  }

  const maxScoreDrop = maxScoreDropRaw === '' ? undefined : Number(maxScoreDropRaw);
  if (
    maxScoreDrop !== undefined &&
    (!Number.isInteger(maxScoreDrop) || maxScoreDrop < 0 || maxScoreDrop > 100)
  ) {
    core.setFailed(
      `Invalid max-score-drop value: "${maxScoreDropRaw}". Must be an integer between 0 and 100.`,
    );
    return;
  }
  if (maxScoreDrop !== undefined && !baselineRef) {
    core.setFailed('max-score-drop needs baseline-ref to compare against.');
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

  let comparison: ScoreComparison | undefined;
  if (baselineRef) {
    try {
      const baselineScore = await auditAtRef(repoPath, baselineRef);
      comparison = { baselineScore, baselineRef };
      core.setOutput('baseline-score', String(baselineScore));
      core.setOutput('score-delta', String(result.score - baselineScore));
      core.info(`Baseline score at ${baselineRef}: ${baselineScore}`);
    } catch (err) {
      core.setFailed(
        `Baseline audit failed: ${err instanceof Error ? err.message : String(err)}`,
      );
      return;
    }
  }

  core.setOutput('score', String(result.score));
  core.setOutput('report-path', reportPath ?? '');
  core.setOutput('passed', String(result.score >= minScore));
  core.setOutput(
    'categories',
    JSON.stringify(
      result.categories.map(({ id, label, score, maxScore }) => ({ id, label, score, maxScore })),
    ),
  );

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
        const commentBody = formatMarkdownComment(result, comparison);
        await commentOnPr({ body: commentBody, token, authorLogin: commentAuthor || undefined });
      } catch (err) {
        core.warning(
          `Failed to post PR comment: ${err instanceof Error ? err.message : String(err)}`,
        );
      }
    }
  }

  if (jobSummary) {
    try {
      await core.summary.addRaw(formatMarkdownComment(result, comparison)).write();
    } catch (err) {
      // Outside GitHub Actions there is no step summary file; that is fine.
      core.debug(`Skipped job summary: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  // Threshold checks run last so output, comments, and the summary still happen on failure
  if (failOnThreshold && result.score < minScore) {
    core.setFailed(
      `Agent-readiness score ${result.score} is below the required minimum of ${minScore}.`,
    );
  }

  if (comparison && maxScoreDrop !== undefined) {
    const drop = comparison.baselineScore - result.score;
    if (drop > maxScoreDrop) {
      core.setFailed(
        `Agent-readiness score dropped by ${drop} (from ${comparison.baselineScore} at ${baselineRef} to ${result.score}); the allowed drop is ${maxScoreDrop}.`,
      );
    }
  }
}

run();
