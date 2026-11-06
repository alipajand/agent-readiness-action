# Changelog

All notable changes to `agent-readiness-action` are documented here.

This project follows [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.

## [Unreleased]

### Changed

- Move the bundled agent-readiness-kit from `daa257b` to `3c64acb` and rebuild the integration bundles. The engine's source is unchanged (documentation and development dependencies only), so audit results are the same; only the recorded engine commit changes.

### Security

- Raise the `undici` override from 6.29.0 to 6.29.1 and rebuild `dist/`. `undici` is bundled into the action through `@actions/http-client`, and 6.29.1 fixes two denial-of-service advisories (unbounded memory growth, and an unhandled error on excessive input).
- Update development dependencies flagged by `pnpm audit`: `vitest` and `@vitest/coverage-v8` 4.1.12, `vite` 8.3.5 as a direct development dependency (replacing the transitive 7.3.5), `nanoid` 3.3.20, and `fast-uri` 3.1.9. None of these ship in `dist/` or the integration bundles.

## [1.2.0] - 2026-10-12

### Added

- Portable integrations built from the same pinned engines, in a new `integrations/` workspace package. The action's inputs and outputs are unchanged; its `dist/` changes only through the engine update below.
  - Agent Skill `agent-readiness-audit` with a self-contained, read-only audit script (`plugins/agent-readiness/skills/agent-readiness-audit/`).
  - Claude Code and Cursor plugin `agent-readiness`, listed by `.claude-plugin/marketplace.json` and `.cursor-plugin/marketplace.json`.
  - Local MCP server `@alipajand/agent-readiness-mcp` (`integrations/mcp-package/`, not yet published) with `audit_repository`, `audit_agent_context`, and `get_audit_report`. Each audit runs in a worker confined by Node's permission model, so the server needs Node.js 22.13 or later (23.5 or later on Node.js 23) and refuses to start on older releases; the skill script runs on 22.12.
  - CI job that rebuilds and checks the committed bundles and runs the integration tests on Node.js 22.13 and 24.

### Security

- Bundled engines moved to the latest `main`: agent-readiness-kit `b490a30` → `f15924b` (agent-readiness-kit#33) and agent-context-doctor `d70de51` → `034a74c` (agent-context-doctor#73 and #74). Both replace `fast-glob` with `tinyglobby`, so `braces` is no longer installed or compiled into `dist/` and the integration bundles. `braces` 3.0.3 has a stack-exhaustion advisory with no patched release (GHSA-vfj7-8cjw-p6xm). Symlinked directories are still not walked, and the `.acdrc` brace limits still apply. The action's `fast-glob` dependency, which only supplied the engines, is replaced by `tinyglobby`. One behavior changes, on case-insensitive filesystems only (macOS and Windows runners): the readiness engine's lookups of fixed file names such as `README.md`, `CHANGELOG.md`, `package.json`, or `.tool-versions` now match the exact case, as they always did on Linux. A repository with `Readme.md` audited on a macOS runner loses the README documentation points it got before (one point on the test fixture), the same result Linux runners give. Otherwise the old and new `dist/` gave identical output on 21 local repositories and on a fixture of symlinks, brace patterns, mixed-case names, and deep nesting; on a case-sensitive volume, as on Linux, that fixture matched too.
- With `context-audit: 'true'`, the bundled agent-context-doctor (agent-context-doctor#74) changes what the action prints and reads. Scores, grades, issue counts, outputs, and the job summary were identical to the previous engine on 27 local repositories; only the following differ:
  - A recognised credential quoted by a finding other than `secrets` is masked (`ghp_************`) in the log, the `json` output, and the issue table of the job summary and PR comment. Before, a token on a `curl | sh` line, in a placeholder, in a missing link target, or in a `.claude/settings.json` permission was shown in full.
  - A credential configured in an MCP server's `env` or `headers` is masked in every finding that quotes its line.
  - An `.acdrc` that is a symlink to a file outside `repo-path` fails the step with `.acdrc … links outside …; refusing to read it`. Before, a pull request could link `.acdrc` to a file on the runner: the step printed the start of that file in a JSON parse error, or applied it as configuration if it was valid JSON. A link to a file inside the repository still works.
  - Masking and evidence no longer take quadratic time on hostile input (a line with thousands of distinct tokens, or a file with tens of thousands of flagged lines).

## [1.1.0] - 2026-10-09

### Changed

- Bundled engines moved to the latest `main`: agent-readiness-kit `255b0c4` → `b490a30` and agent-context-doctor `e05693d` → `1ebc6f0`. Action inputs, outputs, and the PR comment format are unchanged.
- Readiness scores are ecosystem-aware (agent-readiness-kit#27, #28). Node.js, Python, Go, and Rust are detected from their manifests, and the lockfile, version pin, test runner, linter, formatter, and `.gitignore` signals count each ecosystem's own files (`go.sum`, `uv.lock`, the `go` directive, `requires-python`, pytest config, `go test`, ruff, golangci-lint, and so on). Test files are detected in Go, Python, Rust, Ruby, Java/Kotlin, and C#, and workflow commands are read from `Makefile`, `justfile`, `Taskfile`, `pyproject.toml`, `tox.ini`, and `noxfile.py`. Category maxima and the 0–100 scale are unchanged. What this means for existing workflows:
  - Node.js-only repositories keep their score, apart from evidence the engine used to miss (nested configs, pre-commit and lefthook hooks).
  - Python, Go, and Rust repositories usually score higher.
  - Polyglot repositories are scored on every detected stack: a signal is worth `floor(points × satisfied / detected)`. A Node.js and Python repository with Node.js tooling only can score lower than before and may fall below `min-score`. Add the missing stack's lockfile, version pin, linter, or formatter, or adjust `min-score`.
  - `baseline-ref` audits the base commit with the same bundled engine, so upgrading the action does not by itself produce a `score-delta` or trip `max-score-drop`.
  - The raw JSON from `json: 'true'` and the `output` Markdown report include the detected `ecosystems`.
- `context-audit` checks are more accurate (agent-context-doctor#59–#66), so `context-score`, `context-grade`, `context-issue-count`, and `context-fail-on` results can change:
  - New issues: commands for a package manager the repository does not use (`command-alignment`, medium); AGENTS.md and CLAUDE.md naming different package managers, or disagreeing on skipping tests (`contradictions`); advice to skip tests in other words, such as "If the tests are slow, skip them and rely on CI" (`risky-language`, high); and missing root-level files named in inline code, such as `` `RELEASING.md` `` (`broken-references`).
  - Fewer false positives: reporting guidance in plain words and Python, Go, Rust, make, and JVM validation commands are recognised; a `CLAUDE.md` that only delegates to `AGENTS.md` (`@AGENTS.md`, "Follow AGENTS.md") no longer repeats that file's issues; and paths described as ignored or matched by `.gitignore` (`.idea/`) are not reported as missing.

- Bundled engines moved to the latest `main`: agent-readiness-kit `a993d17` → `3c156af` and agent-context-doctor `0855961` → `d36dd9d`. Both updates are README and dev-dependency changes only, so audit results and `dist/` are unchanged.

### Security

- Bundled agent-context-doctor moved `1ebc6f0` → `d70de51` (agent-context-doctor#72). With `context-audit: 'true'`:
  - Makefile target parsing no longer takes quadratic time on a long line of blanks without a colon. A 1 MB line in an audited repository's Makefile could stall the step for minutes.
  - `package.json` and the root Makefile are no longer read through a symlink that points outside the audited repository; such a file is treated as missing.
  - `broken-references` no longer follows symlinked directories out of the repository when it checks whether a referenced path exists, so it cannot reveal which files exist outside it.
- agent-readiness-kit keeps root file reads inside the repository and no longer enters symlinked directories named in a glob pattern, so a symlink in the audited repository cannot point the audit at files outside it.
- Bundled agent-context-doctor moved `c0338d9` → `e05693d`. With `context-audit: 'true'`, an audited repository's `.acdrc` `rules.ignoreFiles` pattern that nests braces more than 10 levels deep or expands to more than 1,000 patterns now fails as a config error. Before, a deeply nested pattern could exhaust the stack in `braces` (GHSA-vfj7-8cjw-p6xm, no patched release) and a short run of sibling groups could exhaust memory. Valid brace patterns are unaffected. `braces` itself is still bundled.

### Fixed

- Bundled engines moved to the latest `main`: agent-readiness-kit `3c156af` → `255b0c4` (README and dev-dependency changes only) and agent-context-doctor `d36dd9d` → `c0338d9`, which brings two `context-audit` fixes:
  - A repository with no agent context files now scores 0 (`risky`) instead of 80 (`good`).
  - `command-alignment` no longer reports a package manager version (`pnpm 11`, `npm v10.x`, `pnpm@9.12.0`) as a missing script.
- The log shows repository-wide context issues, such as missing instruction files, as `(repository)` like the job summary already did, instead of the runner's checkout path.

## [1.0.1] - 2026-09-24

### Changed

- The action's display name is now `Agent Readiness Action`, for GitHub Marketplace: `Agent Readiness Audit` is taken by an unrelated action. Workflows reference the action by repository (`alipajand/agent-readiness-action@v1`), so nothing needs to change.
- The description mentions the instruction file checks from the bundled agent-context-doctor.

## [1.0.0] - 2026-09-24

First release.

### Security

- The report is written without a check-then-open gap. It is created with `O_EXCL`, and an existing file is opened without truncation and replaced only after confirming the path still names that same regular file, not a symlink. This also covers Windows runners, which have no `O_NOFOLLOW`.
- Markdown escaping also escapes backslashes, and table code spans double a backslash run before `|`, so a file name cannot cancel an escaped pipe and split a table cell.
- Bundled engines read files by checking type and size on the opened handle, so a file cannot be swapped between the check and the read.
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

- Runs on the `node24` Actions runtime (`node20` is deprecated).
- `report-path` is the absolute path of the written report.
- The audit no longer writes `.ark-history.json` into the audited repository.
- Comment lookup paginates past 100 comments; oversized comments are truncated to GitHub's limit.
- `min-score` must be an integer; values such as `70abc` are rejected instead of being read as `70`.

### Added

- `context-audit` and `context-fail-on` inputs: also check agent instruction files with agent-context-doctor, bundled from the `vendor/agent-context-doctor` submodule. Adds its score and top issues to the log, job summary, and PR comment, honors the audited repository's `.acdrc`, and sets `context-score`, `context-grade`, and `context-issue-count` outputs.
- `AGENTS.md` and `CLAUDE.md` for agents working on this repository.
- Claude Code setup: `/verify` command, read-only `security-reviewer` subagent, a `bumping-bundled-engines` skill, and a least-privilege `.claude/settings.json` (pnpm scripts and read-only git allowed; commits, pushes, dependency changes, and git inside `vendor/` ask; `.env` reads, `vendor/` edits, and network and destructive commands denied).
- `SECURITY.md`, `docs/ARCHITECTURE.md` (modules, run order, trust boundaries), and `.editorconfig`.
- Prettier (`pnpm format`, `pnpm format:check`), checked in CI.
- `baseline-ref` and `max-score-drop` inputs: audit the base commit in a temporary git worktree, report the score change in the log, job summary, and PR comment, and fail when the score drops too far. New outputs `baseline-score` and `score-delta`.
- The audit summary is written to the workflow run's job summary (`job-summary: false` to turn it off).
- `passed` and `categories` outputs.
- `github-token` input as an alternative to the `GITHUB_TOKEN` environment variable.
- `comment-author` input for teams that comment with a personal access token.
- CI that runs tests, type checks, verifies the committed `dist/`, and runs the action against this repository.
- Dependabot for npm, the kit submodule, and GitHub Actions. MIT `LICENSE` file.

[Unreleased]: https://github.com/alipajand/agent-readiness-action/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/alipajand/agent-readiness-action/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/alipajand/agent-readiness-action/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/alipajand/agent-readiness-action/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/alipajand/agent-readiness-action/releases/tag/v1.0.0
