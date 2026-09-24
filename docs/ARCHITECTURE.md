# Architecture

agent-readiness-action is a JavaScript GitHub Action. `action.yml` runs the committed
`dist/index.js` on the `node24` runtime, and `pnpm build` produces that bundle from `src/` with
`@vercel/ncc`. The two audit engines are compiled into the bundle from git submodules, so a
workflow run never downloads or installs anything.

## Modules

| Module                 | Responsibility                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src/index.ts`         | Reads and validates inputs, runs the audits in order, logs, comments, writes the job summary, sets outputs, and fails the step |
| `src/runArk.ts`        | Calls the kit's `auditRepo` with history off and writes the optional Markdown report                                           |
| `src/runDoctor.ts`     | Calls agent-context-doctor's `auditRepo` with the audited repository's `.acdrc`, and compares issue severities                 |
| `src/baseline.ts`      | Audits `baseline-ref` in a temporary detached git worktree and removes it afterwards                                           |
| `src/commentPr.ts`     | Finds the action's earlier summary comment and updates it, or creates a new one                                                |
| `src/formatSummary.ts` | Formats the log summary, log detail, and Markdown comment, escaping all audited text                                           |

The engines are imported by deep path (for example
`vendor/agent-readiness-kit/src/audit/auditRepo.js`) rather than through their package entry
points, so modules the action does not use (the terminal reporters and their dependencies) stay
out of the bundle.

## Run order

1. Validate `min-score`, `max-score-drop`, and `context-fail-on`. Invalid values fail the step
   before any audit runs.
2. Run the readiness audit on `repo-path` and write the report when `output` is set.
3. With `baseline-ref`, audit that commit in a worktree and compute `score-delta`.
4. With `context-audit`, run agent-context-doctor on the same path.
5. Set outputs, then log the summary and the collapsible details.
6. With `comment-on-pr` on a `pull_request` event, post or update the summary comment.
7. Write the job summary unless `job-summary` is `false`.
8. Fail the step for a low score, a score drop above `max-score-drop`, or a context issue at or
   above `context-fail-on`.

A failed PR comment or job summary is a warning, not a failure: the audit result still decides
whether the step passes.

## Trust boundaries

Everything read from the audited repository is untrusted, including file names, file contents,
`.arkrc`, and `.acdrc`. The action runs on pull requests from contributors who may not be trusted.

- **Output:** audited text is logged between `::stop-commands::` markers, so it cannot issue
  workflow commands. It is escaped before it goes into Markdown comments or the job summary.
- **Writes:** the only file the action writes into the repository is the optional report. Its
  path must resolve inside `repo-path`, including after symlinks, and the final component is
  opened with `O_NOFOLLOW`. Score history is never written.
- **Git:** `baseline-ref` is rejected when it starts with `-` or contains control characters. It
  is then verified with `--end-of-options` before it reaches `git worktree add`.
- **Token:** the token is used only for the issue-comment API. Only a comment that starts with the
  action's marker and was written by a bot account (or `comment-author`) is edited.

## Engines

| Submodule                     | Provides                                                              | Updated by                                                       |
| ----------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `vendor/agent-readiness-kit`  | Readiness score, categories, Markdown report, output path confinement | The `bumping-bundled-engines` skill or a Dependabot submodule PR |
| `vendor/agent-context-doctor` | Instruction file quality score and issues                             | Same                                                             |

Moving a submodule changes the bundle. CI rebuilds `dist/` and fails when the committed bundle
does not match, so every bump commits the submodule pointer and the rebuilt `dist/` together.
