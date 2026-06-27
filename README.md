# agent-readiness-action

## What it is

A GitHub Action that runs [agent-readiness-kit](https://github.com/alipajand/agent-readiness-kit)
audits in CI. It scores how ready a repository is for AI coding agents (Claude Code,
Cursor, Codex, Copilot, and similar), prints a category breakdown in the workflow log,
and can optionally fail the build below a threshold, write a Markdown report, or post a
summary comment on pull requests.

It is deterministic and local-first: it shells out to `agent-readiness-kit` in the
runner. There are no external API calls, no telemetry, and no LLM calls.

## Why use it

- Catch missing or low-quality agent context (instruction files, architecture notes,
  setup docs) before it slows down day-to-day agent work.
- Track the readiness score over time and gate pull requests on a minimum score.
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
      - uses: actions/checkout@v4
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
      - uses: actions/checkout@v4
      - uses: alipajand/agent-readiness-action@v1
```

### Fail below a minimum score

```yaml
- uses: alipajand/agent-readiness-action@v1
  with:
    min-score: "70"
    fail-on-threshold: "true"
```

### Comment on pull requests

```yaml
permissions:
  contents: read
  pull-requests: write

steps:
  - uses: actions/checkout@v4
  - uses: alipajand/agent-readiness-action@v1
    with:
      comment-on-pr: "true"
      min-score: "70"
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The action posts a single comment the first time and updates it on subsequent runs, so
there are no duplicate comments.

### Write a Markdown report artifact

```yaml
steps:
  - uses: actions/checkout@v4

  - uses: alipajand/agent-readiness-action@v1
    with:
      output: "docs/agent-readiness-report.md"

  - uses: actions/upload-artifact@v4
    with:
      name: agent-readiness-report
      path: docs/agent-readiness-report.md
```

### Audit a subdirectory or monorepo package

```yaml
- uses: alipajand/agent-readiness-action@v1
  with:
    repo-path: "./packages/web"
```

## Inputs

| Input | Default | Description |
|-------|---------|-------------|
| `repo-path` | `.` | Path to the repository or subdirectory to audit. Relative paths are resolved from the GitHub Actions workspace root. |
| `min-score` | `0` | Minimum acceptable score (0–100). Checked when `fail-on-threshold` is `true`. |
| `output` | `''` | Write a Markdown report to this path. Relative paths are resolved under `repo-path`; absolute paths are written as given. |
| `json` | `false` | Echo the raw JSON audit output to the Actions log. |
| `comment-on-pr` | `false` | Post or update a PR comment. Only runs on `pull_request` events. Requires `GITHUB_TOKEN` with `pull-requests: write`. |
| `fail-on-threshold` | `true` | Fail the step when the score is below `min-score`. |

## Outputs

| Output | Description |
|--------|-------------|
| `score` | Final agent-readiness score (0–100). |
| `report-path` | Path to the written Markdown report, or empty when `output` was not set. |

## Permissions

Basic use (audit, log, and threshold check) only needs read access:

```yaml
permissions:
  contents: read
```

To post PR comments with `comment-on-pr: "true"`, the job additionally needs
`pull-requests: write`, and the step must set the `GITHUB_TOKEN` environment variable:

```yaml
permissions:
  contents: read
  pull-requests: write
```

The action comments on pull requests only, so `issues: write` is not required.

## How it works

1. Calls `npx agent-readiness-kit audit <repo-path> --json` in the Actions runner.
2. Parses the JSON output (score, categories, findings, missing items, recommendations).
3. Logs a summary and a collapsible detail group.
4. If `output` is set, writes a Markdown report via the `--output` flag.
5. If `json` is `true`, echoes the raw JSON to the log.
6. If `comment-on-pr` is `true` and the event is a `pull_request`, posts or updates a comment.
7. If `score < min-score` and `fail-on-threshold` is `true`, marks the step as failed.

## Release checklist

Before tagging a release:

1. Run `pnpm test`.
2. Run `pnpm typecheck`.
3. Run `pnpm build`.
4. Commit updated `dist/index.js` and source map if they changed.
5. Create or move the version tag, for example `v1`.

## Related tools

- [agent-readiness-kit](https://github.com/alipajand/agent-readiness-kit) — CLI used by this action.
- [agent-context-doctor](https://github.com/alipajand/agent-context-doctor) — checks whether agent instruction files are specific, safe, and usable.
- [agent-pr-reviewer-lite](https://github.com/alipajand/agent-pr-reviewer-lite) — flags risky PR diffs before merge.

## Development

```bash
pnpm install
pnpm test        # vitest unit tests
pnpm typecheck   # tsc --noEmit
pnpm build       # ncc bundle → dist/index.js
```

The built `dist/index.js` (and its source map) must be committed alongside source when
publishing a new release.

## License

MIT
