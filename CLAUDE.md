@AGENTS.md

## Claude Code

AGENTS.md above is the source of truth. This file only adds what is specific to Claude Code.

- `/verify` runs the format check, typecheck, tests, and the build, and says whether `dist/` changed.
- The `security-reviewer` subagent reviews a diff against the action's rules (no runtime
  downloads, contained writes, paused workflow commands, escaped comments, comment ownership).
  Use it before finishing changes to `src/` or `action.yml`.
- The `bumping-bundled-engines` skill moves the vendored agent-readiness-kit or
  agent-context-doctor to a newer commit and rebuilds `dist/`.
- `.claude/settings.json` allows the project's pnpm scripts, read-only git commands, and
  `git submodule update --init`; asks before commits, pushes, dependency changes, and git commands
  inside `vendor/`; and denies reading `.env` files, editing `vendor/`, and running network or
  destructive commands. Personal overrides go in `.claude/settings.local.json`, which is not
  committed.
