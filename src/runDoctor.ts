import * as path from 'node:path';
import { auditRepo } from '../vendor/agent-context-doctor/src/audit/auditRepo.js';
import { loadConfig } from '../vendor/agent-context-doctor/src/config/loadConfig.js';
import type {
  AuditResult as ContextAuditResult,
  ContextIssue,
  Severity,
} from '../vendor/agent-context-doctor/src/types.js';

export type { ContextAuditResult, ContextIssue, Severity };

const SEVERITY_ORDER: Record<Severity, number> = { low: 0, medium: 1, high: 2 };

export function isSeverity(value: string): value is Severity {
  return value === 'low' || value === 'medium' || value === 'high';
}

/**
 * Audit the agent instruction files in `repoPath` with the agent-context-doctor
 * engine bundled from `vendor/agent-context-doctor`. Rules from the audited
 * repository's `.acdrc` (ignored files, disabled checks) are honored.
 */
export async function runContextAudit(
  repoPath: string,
  workspace: string = process.env.GITHUB_WORKSPACE ?? process.cwd(),
): Promise<ContextAuditResult> {
  const absolute = path.resolve(workspace, repoPath);
  const config = await loadConfig(absolute);
  return auditRepo(absolute, {
    ignoreFiles: config?.rules?.ignoreFiles,
    disabledChecks: config?.rules?.disabledChecks,
    allowedMissingScripts: config?.rules?.allowedMissingScripts,
    maxFileBytes: config?.rules?.maxFileBytes,
  });
}

/** True when any issue is at or above `severity`. */
export function hasIssueAtOrAbove(result: ContextAuditResult, severity: Severity): boolean {
  return result.issues.some((i) => SEVERITY_ORDER[i.severity] >= SEVERITY_ORDER[severity]);
}

/** Issues ordered high → low, for summaries that only show the first few. */
export function issuesBySeverity(result: ContextAuditResult): ContextIssue[] {
  return [...result.issues].sort((a, b) => SEVERITY_ORDER[b.severity] - SEVERITY_ORDER[a.severity]);
}
