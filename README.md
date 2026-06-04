# agent-readiness-action

A GitHub Action that runs [agent-readiness-kit](https://github.com/agent-readiness-kit/agent-readiness-kit) audits in CI, reports results in the workflow log, and optionally posts a summary comment on pull requests.

## Features

- Audits repository readiness for AI coding agents (Cursor, Codex, Claude Code, Copilot, etc.)
- Prints a scored category breakdown in the Actions log
- Optionally writes a Markdown report as a workflow artifact
- Optionally fails the step when the score falls below a threshold
- Optionally posts or updates a PR comment with score, category table, missing items, and recommendations
- No external API calls, no telemetry, no LLM

## Quick start

```yaml
# .github/workflows/agent-readiness.yml
name: Agent Readiness Audit

on:
  push:
    branches: [main]
  pull_request:

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: agent-readiness-kit/agent-readiness-action@v1
```

## Fail below a minimum score

```yaml
- uses: agent-readiness-kit/agent-readiness-action@v1
  with:
    min-score: '60'
    fail-on-threshold: 'true'
```

## Write a Markdown report

```yaml
- uses: agent-readiness-kit/agent-readiness-action@v1
  with:
    output: 'docs/agent-readiness-report.md'

- uses: actions/upload-artifact@v4
  with:
    name: agent-readiness-report
    path: docs/agent-readiness-report.md
```

## Comment on pull requests

Add `pull-requests: write` to the job permissions and set `GITHUB_TOKEN`:

```yaml
jobs:
  audit:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
      - uses: actions/checkout@v4

      - uses: agent-readiness-kit/agent-readiness-action@v1
        with:
          comment-on-pr: 'true'
          min-score: '70'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The action posts a single comment the first time and **updates** it on subsequent runs — no duplicate comments.

## Audit a sub-directory

```yaml
- uses: agent-readiness-kit/agent-readiness-action@v1
  with:
    repo-path: './packages/my-lib'
```

## Full example with all options

```yaml
- uses: agent-readiness-kit/agent-readiness-action@v1
  with:
    repo-path: '.'
    min-score: '75'
    output: 'docs/agent-readiness-report.md'
    json: 'false'
    comment-on-pr: 'true'
    fail-on-threshold: 'true'
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Input | Default | Description |
|-------|---------|-------------|
| `repo-path` | `.` | Path to the repository to audit. Relative paths are resolved from the GitHub Actions workspace root. |
| `min-score` | `0` | Minimum acceptable score (0–100). Checked when `fail-on-threshold` is `true`. |
| `output` | `''` | Write a Markdown report to this path. Relative paths are resolved under `repo-path`; absolute paths are written as given. |
| `json` | `false` | Echo the raw JSON audit output to the Actions log. |
| `comment-on-pr` | `false` | Post or update a PR comment. Only runs on `pull_request` events. Requires `GITHUB_TOKEN` with `pull-requests: write`. |
| `fail-on-threshold` | `true` | Fail the step when the score is below `min-score`. |

## Outputs

| Output | Description |
|--------|-------------|
| `score` | Final agent-readiness score (0–100). |

## Permissions

The action itself requires no special permissions for basic use (audit + log + threshold check).

For `comment-on-pr: 'true'`, the job needs:

```yaml
permissions:
  pull-requests: write
```

and the `GITHUB_TOKEN` environment variable set on the step.

## How it works

1. Calls `npx agent-readiness-kit audit <repo-path> --json` in the Actions runner.
2. Parses the JSON output (score, categories, findings, missing items, recommendations).
3. Logs a summary and a collapsible detail group.
4. If `output` is set, writes a Markdown report via the `--output` flag.
5. If `json` is `true`, echoes the raw JSON to the log.
6. If `comment-on-pr` is `true` and the event is a `pull_request`, posts or updates a comment.
7. If `score < min-score` and `fail-on-threshold` is `true`, marks the step as failed.

## Development

```bash
pnpm install
pnpm test        # vitest unit tests
pnpm typecheck   # tsc --noEmit
pnpm build       # ncc bundle → dist/index.js
```

The built `dist/index.js` (and its source map) must be committed alongside source when publishing a new release.

## License

MIT
