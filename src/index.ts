import * as core from '@actions/core';
import { runArk } from './runArk';
import { formatLogSummary, formatLogDetail, formatMarkdownComment } from './formatSummary';
import { commentOnPr } from './commentPr';

async function run(): Promise<void> {
  const repoPath = core.getInput('repo-path') || '.';
  const minScoreRaw = core.getInput('min-score') || '0';
  const output = core.getInput('output');
  const jsonFlag = core.getInput('json') === 'true';
  const commentOnPrFlag = core.getInput('comment-on-pr') === 'true';
  const failOnThreshold = core.getInput('fail-on-threshold') !== 'false';

  const minScore = parseInt(minScoreRaw, 10);
  if (isNaN(minScore) || minScore < 0 || minScore > 100) {
    core.setFailed(`Invalid min-score value: "${minScoreRaw}". Must be an integer between 0 and 100.`);
    return;
  }

  core.info(`Running agent-readiness-kit audit on: ${repoPath}`);

  let result;
  try {
    result = await runArk({ repoPath, output: output || undefined });
  } catch (err) {
    core.setFailed(`agent-readiness-kit failed: ${err instanceof Error ? err.message : String(err)}`);
    return;
  }

  core.setOutput('score', String(result.score));
  core.setOutput('report-path', output || '');

  // Log summary line
  core.info(formatLogSummary(result));

  // Collapsible detail group
  core.startGroup('Agent readiness details');
  core.info(formatLogDetail(result));
  core.endGroup();

  // Optional raw JSON echo
  if (jsonFlag) {
    core.startGroup('Raw JSON output');
    core.info(JSON.stringify(result, null, 2));
    core.endGroup();
  }

  // Optional PR comment
  if (commentOnPrFlag) {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      core.warning(
        'comment-on-pr is true but GITHUB_TOKEN is not set. ' +
          'Add `env: GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}` to your workflow step.',
      );
    } else {
      try {
        const commentBody = formatMarkdownComment(result);
        await commentOnPr({ body: commentBody, token });
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
