---
description: Run typecheck, tests, and the build, and report whether dist/ changed
allowed-tools: Bash(pnpm typecheck), Bash(pnpm test), Bash(pnpm build), Bash(git status:*), Bash(git diff --stat:*)
---

Run these commands in order and stop at the first failure:

1. `pnpm typecheck`
2. `pnpm test`
3. `pnpm build`
4. `git status --short dist`

Report each command with pass or fail. If `dist/` changed, say so: it must be committed with the
source change. Do not change any files other than what the build writes.
