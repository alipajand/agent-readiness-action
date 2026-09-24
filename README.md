# agent-readiness-action

## What it is

A GitHub Action that checks how ready a repository is for AI coding agents (Claude Code,
Cursor, Codex, Copilot, and similar). It bundles two deterministic engines:

- [agent-readiness-kit](https://github.com/alipajand/agent-readiness-kit) scores the
  repository from 0 to 100: instruction files, architecture notes, scripts, tests, safety
  boundaries, and more. It prints a category breakdown in the log and job summary.
- [agent-context-doctor](https://github.com/alipajand/agent-context-doctor), with
  `context-audit: 'true'`, checks the instruction files themselves: placeholders, risky
  directives, contradictions, stale commands, pasted secrets, hidden Unicode, and risky
  Claude Code and MCP configuration such as `bypassPermissions`, hooks that run remote
  scripts, or third-party API endpoints.

It can fail the build below a score, block pull requests that lower the score, write a
Markdown report, and post a summary comment on pull requests.

Both engines are bundled into the action at pinned commits, so nothing is downloaded or
executed from a package registry at run time. There are no external API calls (other than
the optional PR comment), no telemetry, and no LLM calls.

## Why use it

- Catch missing or low-quality agent context (instruction files, architecture notes,
  setup docs) before it slows down day-to-day agent work.
- Catch instruction files and agent settings that steer agents toward unsafe changes or
  let them run commands without asking.
- Track the readiness score over time and gate pull requests on a minimum score or on
  any drop from the base branch.
- Give reviewers a concise, deterministic summary on each PR — a complement to human
  review, not a replacement for it.

## Quick start

```yaml
# .github/workflows/agent-readiness.yml
name: Agent Readiness Audit

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: alipajand/agent-readiness-action@v1
```

## Examples

### Basic audit

```yaml
name: Agent Readiness Audit

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: alipajand/agent-readiness-action@v1
```

### Fail below a minimum score

```yaml
- uses: alipajand/agent-readiness-action@v1
  with:
    min-score: '70'
    fail-on-threshold: 'true'
```

### Comment on pull requests

```yaml
permissions:
  contents: read
  pull-requests: write
  issues: write

steps:
  - uses: actions/checkout@v7
  - uses: alipajand/agent-readiness-action@v1
    with:
      comment-on-pr: 'true'
      min-score: '70'
      github-token: ${{ github.token }}
```

The action posts a single comment the first time and updates it on subsequent runs, so
there are no duplicate comments. It only updates a comment that starts with its hidden
marker and was written by a bot account, so pasting the marker into your own comment
does not make the action overwrite it. When commenting with a personal access token,
set `comment-author` to that account's login.

### Block pull requests that lower the score

```yaml
on:
  pull_request:

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
        with:
          fetch-depth: 0 # the base commit must be available
      - uses: alipajand/agent-readiness-action@v1
        with:
          baseline-ref: ${{ github.event.pull_request.base.sha }}
          max-score-drop: '0'
```

The action audits the base commit in a temporary git worktree, reports the change (`▼ -5 vs <sha>`) in the log, job summary, and PR comment, and fails when the score drops by more than `max-score-drop`.

### Also check the agent instruction files

```yaml
- uses: alipajand/agent-readiness-action@v1
  with:
    context-audit: 'true' # run the bundled agent-context-doctor
    context-fail-on: 'high' # fail on risky instructions, secrets, hidden characters, ...
```

With `context-audit`, the action also runs [agent-context-doctor](https://github.com/alipajand/agent-context-doctor) on the same path. Its score and top issues appear in the log, job summary, and PR comment. It honors the audited repository's `.acdrc`.

### Write a Markdown report artifact

```yaml
steps:
  - uses: actions/checkout@v7

  - uses: alipajand/agent-readiness-action@v1
    with:
      output: 'docs/agent-readiness-report.md'

  - uses: actions/upload-artifact@v7
    with:
      name: agent-readiness-report
      path: docs/agent-readiness-report.md
```

### Audit a subdirectory or monorepo package

```yaml
- uses: alipajand/agent-readiness-action@v1
  with:
    repo-path: './packages/web'
```

## Inputs

| Input               | Default | Description                                                                                                                                                                      |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo-path`         | `.`     | Path to the repository or subdirectory to audit. Relative paths are resolved from the GitHub Actions workspace root.                                                             |
| `min-score`         | `0`     | Minimum acceptable score (0–100). Checked when `fail-on-threshold` is `true`.                                                                                                    |
| `output`            | `''`    | Write a Markdown report to this path. Relative paths are resolved under `repo-path`, and the result must stay inside `repo-path`. The report is never written through a symlink. |
| `json`              | `false` | Echo the raw JSON audit output to the Actions log.                                                                                                                               |
| `comment-on-pr`     | `false` | Post or update a PR comment. Only runs on `pull_request` events. Requires a token with `pull-requests: write` and `issues: write`.                                               |
| `github-token`      | `''`    | Token for the PR comment, usually `${{ github.token }}`. Falls back to the `GITHUB_TOKEN` environment variable.                                                                  |
| `comment-author`    | `''`    | Only update an earlier summary comment written by this login. Defaults to any bot account.                                                                                       |
| `baseline-ref`      | `''`    | Git ref to compare against, usually `${{ github.event.pull_request.base.sha }}`. Audited in a temporary worktree; needs `fetch-depth: 0`.                                        |
| `max-score-drop`    | `''`    | Fail when the score is more than this many points below the `baseline-ref` score (`0` fails on any drop). Requires `baseline-ref`.                                               |
| `job-summary`       | `true`  | Write the audit summary to the workflow run's job summary.                                                                                                                       |
| `context-audit`     | `false` | Also check agent instruction files with the bundled agent-context-doctor.                                                                                                        |
| `context-fail-on`   | `''`    | Fail when agent-context-doctor finds an issue at or above `low`, `medium`, or `high`. Requires `context-audit`.                                                                  |
| `fail-on-threshold` | `true`  | Fail the step when the score is below `min-score`.                                                                                                                               |

## Outputs

| Output                | Description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| `score`               | Final agent-readiness score (0–100).                                              |
| `report-path`         | Absolute path of the written Markdown report, or empty when `output` was not set. |
| `passed`              | `"true"` when the score is at least `min-score`, otherwise `"false"`.             |
| `categories`          | JSON array of category scores: `id`, `label`, `score`, `maxScore`.                |
| `baseline-score`      | Score at `baseline-ref` (only when `baseline-ref` is set).                        |
| `score-delta`         | Score minus the baseline score (only when `baseline-ref` is set).                 |
| `context-score`       | agent-context-doctor score, when `context-audit` is `true`.                       |
| `context-grade`       | agent-context-doctor grade: `excellent`, `good`, `needs-work`, or `risky`.        |
| `context-issue-count` | Number of agent-context-doctor issues.                                            |

## Permissions

Basic use (audit, log, and threshold check) only needs read access:

```yaml
permissions:
  contents: read
```

To post PR comments with `comment-on-pr: "true"`, the job additionally needs
`pull-requests: write` and `issues: write`, and the step must pass a token through the
`github-token` input (or the `GITHUB_TOKEN` environment variable):

```yaml
permissions:
  contents: read
  pull-requests: write
  issues: write
```

PR comments are created and updated through GitHub's issue-comment API
(`issues.listComments` / `issues.createComment` / `issues.updateComment`), which is
why `issues: write` is included alongside `pull-requests: write`.

## How it works

1. Runs the bundled agent-readiness-kit audit engine against `repo-path` in the runner.
   The engine is compiled into `dist/index.js` from the `vendor/agent-readiness-kit`
   submodule, pinned to a reviewed commit.
2. Collects the result (score, categories, findings, missing items, recommendations).
3. Logs a summary and a collapsible detail group.
4. If `output` is set, writes the kit's Markdown report inside `repo-path`.
5. If `json` is `true`, echoes the raw JSON to the log.
6. If `baseline-ref` is set, audits that commit in a temporary git worktree and computes the score change.
7. If `comment-on-pr` is `true` and the event is a `pull_request`, posts or updates a comment.
8. Writes the summary to the job summary (unless `job-summary` is `false`).
9. Marks the step as failed if `score < min-score` (with `fail-on-threshold`) or the score dropped by more than `max-score-drop`.

## Security

The action is meant to run on pull requests, including ones from contributors you don't
fully trust. Both engines are bundled from pinned submodules
(`vendor/agent-readiness-kit`, `vendor/agent-context-doctor`):

- **No runtime downloads.** Earlier versions ran `npx --yes agent-readiness-kit`, which
  fetched whatever package owned that name on npm. That name belongs to an unrelated
  project. The audit engine is now bundled from a pinned commit of
  [agent-readiness-kit](https://github.com/alipajand/agent-readiness-kit).
- **Contained writes.** The Markdown report must resolve inside `repo-path` and is never
  written through a symlink. The audit does not write score history into the repository.
- **Log and comment safety.** Audit details are logged with workflow commands paused, so a
  crafted file name cannot emit `::error::` or other commands. PR comments escape HTML and
  keep file names in inline code.
- **Comment ownership.** Only a comment that starts with the action's marker and was
  written by a bot account (or `comment-author`) is updated.

See [SECURITY.md](SECURITY.md) to report a vulnerability, and
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the module layout and trust boundaries.

## Release checklist

Before tagging a release:

1. Run `git submodule update --init` so both engines under `vendor/` are present.
2. Run `pnpm format:check`, `pnpm test`, and `pnpm typecheck`.
3. Run `pnpm build`.
4. Commit the updated `dist/` if it changed. CI fails when `dist/` does not match the source.
5. Set `version` in `package.json` and move the `Unreleased` notes in `CHANGELOG.md` under
   the new version.
6. Tag the release commit with its full version (for example `v1.2.0`) and move the major tag to
   it: `git tag -f v1 v1.2.0`, then push both tags (`git push -f origin v1`). Workflows that use
   `@v1` pick up the release; pin a full commit SHA to review every change first.

## Related tools

- [agent-readiness-kit](https://github.com/alipajand/agent-readiness-kit) — CLI used by this action.
- [agent-context-doctor](https://github.com/alipajand/agent-context-doctor) — checks whether agent instruction files are specific, safe, and usable.
- [agent-pr-reviewer-lite](https://github.com/alipajand/agent-pr-reviewer-lite) — flags risky PR diffs before merge.

## Development

```bash
git submodule update --init   # fetch the pinned engine sources
pnpm install
pnpm format      # prettier (format:check in CI)
pnpm test        # vitest unit tests
pnpm typecheck   # tsc --noEmit
pnpm build       # ncc bundle → dist/index.js
```

The built `dist/` must be committed alongside source changes.

To move to a newer engine, check out the commit you want in `vendor/agent-readiness-kit` or
`vendor/agent-context-doctor`, run `pnpm build`, and commit both the submodule pointer and
`dist/`. Dependabot opens weekly submodule update PRs; those need a `pnpm build` commit
before CI passes.

## License

MIT
