import type { AuditResult } from './runArk';
import { issuesBySeverity } from './runDoctor';
import type { ContextAuditResult } from './runDoctor';

// Control characters (newlines included) from audited file names or messages
// would otherwise break lines in logs and Markdown.
const CONTROL_CHARS = /[\u0000-\u001f\u007f-\u009f]/g;

function safeText(value: string): string {
  return value.replace(CONTROL_CHARS, ' ');
}

/** Escape text from the audit for Markdown prose and table cells. */
export function escapeMarkdown(value: string): string {
  return safeText(value)
    .replace(/\\/g, '\\\\')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\|/g, '\\|');
}

/**
 * A code span for a table cell. GFM splits rows on `|` even inside code spans
 * unless it is escaped, and a backslash run before the pipe would cancel that
 * escape, so each such run is doubled first. Other backslashes display as written.
 */
export function tableCodeSpan(value: string): string {
  return codeSpan(value).replace(/\\+|\|/g, (match: string, offset: number, all: string) => {
    if (match === '|') return '\\|';
    return all[offset + match.length] === '|' ? match + match : match;
  });
}

/** Inline code whose fence is longer than any backtick run in the value. */
export function codeSpan(value: string): string {
  const text = safeText(value);
  const longestRun = Math.max(0, ...(text.match(/`+/g) ?? []).map((run) => run.length));
  const fence = '`'.repeat(longestRun + 1);
  const pad = text.startsWith('`') || text.endsWith('`') ? ' ' : '';
  return `${fence}${pad}${text}${pad}${fence}`;
}

const STATUS_EMOJI: Record<string, string> = {
  pass: '✅',
  warn: '⚠️',
  fail: '❌',
};

function scoreEmoji(score: number, maxScore: number): string {
  const pct = maxScore > 0 ? score / maxScore : 0;
  if (pct >= 0.8) return '🟢';
  if (pct >= 0.5) return '🟡';
  return '🔴';
}

function overallEmoji(score: number): string {
  if (score >= 80) return '🟢';
  if (score >= 50) return '🟡';
  return '🔴';
}

/**
 * Single-line summary for the Actions log (step title area).
 */
export function formatLogSummary(result: AuditResult): string {
  const emoji = overallEmoji(result.score);
  return `${emoji} Agent-readiness score: ${result.score}/100`;
}

/**
 * Multi-line group log printed inside a collapsible Actions group.
 */
export function formatLogDetail(result: AuditResult): string {
  const lines: string[] = [];

  lines.push('Category breakdown:');
  for (const cat of result.categories) {
    const bar = scoreEmoji(cat.score, cat.maxScore);
    lines.push(`  ${bar} ${safeText(cat.label)}: ${cat.score}/${cat.maxScore}`);
    for (const f of cat.findings) {
      if (f.status !== 'pass') {
        const icon = STATUS_EMOJI[f.status] ?? '•';
        lines.push(`      ${icon} ${safeText(f.message)}`);
      }
    }
  }

  if (result.missing.length > 0) {
    lines.push('');
    lines.push('Missing items:');
    for (const item of result.missing) {
      lines.push(`  • ${safeText(item)}`);
    }
  }

  if (result.recommendations.length > 0) {
    lines.push('');
    lines.push('Recommendations:');
    for (const rec of result.recommendations) {
      lines.push(`  → ${safeText(rec)}`);
    }
  }

  return lines.join('\n');
}

export interface ScoreComparison {
  baselineScore: number;
  baselineRef: string;
}

/** "▲ +3 vs main", "▼ -5 vs main", or "no change vs main". */
export function formatDelta(score: number, comparison: ScoreComparison): string {
  const delta = score - comparison.baselineScore;
  const ref = codeSpan(comparison.baselineRef);
  if (delta > 0) return `▲ +${delta} vs ${ref}`;
  if (delta < 0) return `▼ ${delta} vs ${ref}`;
  return `no change vs ${ref}`;
}

/**
 * Markdown body for the GitHub PR comment and job summary (without the
 * marker line).
 */
export function formatMarkdownComment(result: AuditResult, comparison?: ScoreComparison): string {
  const emoji = overallEmoji(result.score);
  const lines: string[] = [];

  lines.push(`## ${emoji} Agent Readiness Audit`);
  lines.push('');
  lines.push(
    comparison
      ? `**Score: ${result.score} / 100** (${formatDelta(result.score, comparison)}, was ${comparison.baselineScore})`
      : `**Score: ${result.score} / 100**`,
  );
  lines.push('');

  lines.push('### Category breakdown');
  lines.push('');
  lines.push('| Category | Score | Max |');
  lines.push('|----------|------:|----:|');
  for (const cat of result.categories) {
    const bar = scoreEmoji(cat.score, cat.maxScore);
    lines.push(`| ${bar} ${escapeMarkdown(cat.label)} | ${cat.score} | ${cat.maxScore} |`);
  }
  lines.push('');

  const failFindings = result.categories.flatMap((c) =>
    c.findings
      .filter((f) => f.status === 'fail' || f.status === 'warn')
      .map((f) => ({ category: c.label, finding: f })),
  );

  if (failFindings.length > 0) {
    lines.push('### Issues');
    lines.push('');
    for (const { category, finding } of failFindings.slice(0, 10)) {
      const icon = STATUS_EMOJI[finding.status] ?? '•';
      lines.push(`- ${icon} **${escapeMarkdown(category)}**: ${escapeMarkdown(finding.message)}`);
    }
    if (failFindings.length > 10) {
      lines.push(`- _…and ${failFindings.length - 10} more_`);
    }
    lines.push('');
  }

  if (result.missing.length > 0) {
    lines.push('### Top missing items');
    lines.push('');
    for (const item of result.missing.slice(0, 8)) {
      lines.push(`- ${codeSpan(item)}`);
    }
    if (result.missing.length > 8) {
      lines.push(`- _…and ${result.missing.length - 8} more_`);
    }
    lines.push('');
  }

  if (result.recommendations.length > 0) {
    lines.push('### Recommendations');
    lines.push('');
    for (const rec of result.recommendations.slice(0, 6)) {
      lines.push(`1. ${escapeMarkdown(rec)}`);
    }
    if (result.recommendations.length > 6) {
      lines.push(`1. _…and ${result.recommendations.length - 6} more_`);
    }
    lines.push('');
  }

  lines.push(
    '_Generated by [agent-readiness-action](https://github.com/alipajand/agent-readiness-action)_',
  );

  return lines.join('\n');
}

const CONTEXT_ISSUE_LIMIT = 8;

/** Log lines for the agent-context-doctor audit. */
export function formatContextLog(result: ContextAuditResult): string {
  const { score, summary } = result;
  const lines = [
    `Agent context quality: ${score.total}/${score.max} (${score.grade}) — ${summary.high} high, ${summary.medium} medium, ${summary.low} low`,
  ];
  for (const issue of issuesBySeverity(result)) {
    const loc = issue.line ? `:${issue.line}` : '';
    lines.push(`  [${issue.severity}] ${safeText(issue.file)}${loc} — ${safeText(issue.message)}`);
  }
  return lines.join('\n');
}

/** Markdown section for the PR comment and job summary. */
export function formatContextSection(result: ContextAuditResult): string {
  const { score, summary } = result;
  const lines: string[] = [];
  lines.push(`### Agent context quality: ${score.total} / ${score.max} (${score.grade})`);
  lines.push('');
  lines.push(
    `${summary.fileCount} instruction file${summary.fileCount === 1 ? '' : 's'} checked by agent-context-doctor — ${summary.high} high, ${summary.medium} medium, ${summary.low} low.`,
  );

  const issues = issuesBySeverity(result);
  if (issues.length > 0) {
    lines.push('');
    lines.push('| Severity | File | Issue |');
    lines.push('|----------|------|-------|');
    for (const issue of issues.slice(0, CONTEXT_ISSUE_LIMIT)) {
      const loc = issue.line ? `:${issue.line}` : '';
      const file = issue.file === result.repoPath ? '(repository)' : `${issue.file}${loc}`;
      lines.push(
        `| ${issue.severity} | ${tableCodeSpan(file)} | ${escapeMarkdown(issue.message)} |`,
      );
    }
    if (issues.length > CONTEXT_ISSUE_LIMIT) {
      lines.push('');
      lines.push(`_…and ${issues.length - CONTEXT_ISSUE_LIMIT} more_`);
    }
  }
  return lines.join('\n');
}
