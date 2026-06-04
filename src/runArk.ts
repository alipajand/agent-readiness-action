import * as exec from '@actions/exec';
import * as path from 'path';

export type FindingStatus = 'pass' | 'warn' | 'fail';

export interface AuditFinding {
  status: FindingStatus;
  message: string;
  files?: string[];
}

export interface AuditCategory {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  findings: AuditFinding[];
}

export interface AuditResult {
  repoPath: string;
  score: number;
  categories: AuditCategory[];
  missing: string[];
  recommendations: string[];
}

export interface RunArkOptions {
  repoPath: string;
  output?: string;
}

/**
 * Runs `npx agent-readiness-kit audit <repoPath> --json` and returns the
 * parsed JSON result. Optionally passes `--output <path>` so that ark also
 * writes a Markdown report as a side-effect.
 */
export async function runArk(options: RunArkOptions): Promise<AuditResult> {
  const resolvedPath = path.resolve(options.repoPath);

  const args = ['--yes', 'agent-readiness-kit', 'audit', resolvedPath, '--json'];
  if (options.output) {
    args.push('--output', options.output);
  }

  let stdout = '';
  let stderr = '';

  const exitCode = await exec.exec('npx', args, {
    listeners: {
      stdout: (data: Buffer) => {
        stdout += data.toString();
      },
      stderr: (data: Buffer) => {
        stderr += data.toString();
      },
    },
    silent: true,
    ignoreReturnCode: true,
  });

  if (exitCode !== 0) {
    throw new Error(
      `agent-readiness-kit exited with code ${exitCode}.\nstderr: ${stderr.slice(0, 500)}`,
    );
  }

  try {
    return JSON.parse(stdout) as AuditResult;
  } catch {
    throw new Error(
      `Failed to parse agent-readiness-kit JSON output. stdout: ${stdout.slice(0, 300)}`,
    );
  }
}
