# Changelog

All notable changes to `agent-readiness-action` are documented here.

This project follows [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.

## [Unreleased]

### Security

- The action no longer runs `npx --yes agent-readiness-kit`. The npm package with that name is published by an unrelated author, so every run downloaded and executed third-party code, with `GITHUB_TOKEN` in its environment when PR comments were enabled. The audit engine is now bundled from the `vendor/agent-readiness-kit` submodule at a pinned commit, and the action makes no registry requests.
- The `output` report must resolve inside `repo-path` and is never written through a symlink.
- Audit details are logged with workflow commands paused (`::stop-commands::`), so file names or messages from the audited repository cannot inject workflow commands.
- PR comments escape HTML and keep file names in code spans. Only a comment that starts with the marker and was written by a bot (or `comment-author`) is updated. Previously any comment containing the marker could be overwritten.
- Bumped `vitest` to 4.1.11 for the `@vitest/mocker` path-traversal advisory.

### Changed

- Bundled engines updated. With `context-audit`, agent-context-doctor now reports risky Claude Code settings, including:
  - allow rules that run any code
  - `bypassPermissions`, API endpoint and proxy overrides
  - hooks and status line commands that fetch and run code, and the scripts they run
  - commands and skills with `!` shell injection
  - subagents that bypass permissions
  - `CLAUDE.md` imports of credential files

  The readiness score's safety category now rewards `.claude/settings.json` deny rules for `.env` and deducts for `bypassPermissions` or unrestricted `Bash`.

### Added

- `context-audit` and `context-fail-on` inputs: also check agent instruction files with agent-context-doctor, bundled from the `vendor/agent-context-doctor` submodule. Adds its score and top issues to the log, job summary, and PR comment, honors the audited repository's `.acdrc`, and sets `context-score`, `context-grade`, and `context-issue-count` outputs.
- `AGENTS.md` and `CLAUDE.md` for agents working on this repository.
- Claude Code setup: `/verify` command, read-only `security-reviewer` subagent, a `bumping-bundled-engines` skill, and a least-privilege `.claude/settings.json` (pnpm scripts and read-only git allowed; commits, pushes, dependency changes, and git inside `vendor/` ask; `.env` reads, `vendor/` edits, and network and destructive commands denied).
- `SECURITY.md`, `docs/ARCHITECTURE.md` (modules, run order, trust boundaries), and `.editorconfig`.
- `baseline-ref` and `max-score-drop` inputs: audit the base commit in a temporary git worktree, report the score change in the log, job summary, and PR comment, and fail when the score drops too far. New outputs `baseline-score` and `score-delta`.
- The audit summary is written to the workflow run's job summary (`job-summary: false` to turn it off).
- `passed` and `categories` outputs.
- `github-token` input as an alternative to the `GITHUB_TOKEN` environment variable.
- `comment-author` input for teams that comment with a personal access token.
- CI that runs tests, type checks, verifies the committed `dist/`, and runs the action against this repository.
- Dependabot for npm, the kit submodule, and GitHub Actions. MIT `LICENSE` file.

### Changed

- Runs on the `node24` Actions runtime (`node20` is deprecated).
- `report-path` is the absolute path of the written report.
- The audit no longer writes `.ark-history.json` into the audited repository.
- Comment lookup paginates past 100 comments; oversized comments are truncated to GitHub's limit.
- `min-score` must be an integer; values such as `70abc` are rejected instead of being read as `70`.
