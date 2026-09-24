---
description: Run the format check, typecheck, tests, and the build, and report whether dist/ changed
allowed-tools: Bash(pnpm format:check), Bash(pnpm typecheck), Bash(pnpm test), Bash(pnpm build), Bash(git status:*), Bash(git diff --stat:*)
---

Run these commands in order and stop at the first failure:

1. `pnpm format:check`
2. `pnpm typecheck`
3. `pnpm test`
4. `pnpm build`
5. `git status --short dist`

Report each command with pass or fail. If `dist/` changed, say so: it must be committed with the
source change. Do not change any files other than what the build writes.
