# AGENTS — agent-readiness-action

This repository is a **GitHub Action** (TypeScript, bundled with `@vercel/ncc`) that audits a
repository's readiness for AI coding agents. It bundles two engines as git submodules:

- `vendor/agent-readiness-kit` — the readiness score (`runArk` in `src/runArk.ts`)
- `vendor/agent-context-doctor` — instruction-file quality (`runContextAudit` in `src/runDoctor.ts`)

Consumers run the committed `dist/index.js`, so `dist/` must always match the source.

## Layout

| Path | Role |
| --- | --- |
| `action.yml` | Inputs, outputs, and the `node24` runtime |
| `src/index.ts` | Reads inputs, runs the audits, logs, comments, writes the job summary, sets outputs and failures |
| `src/runArk.ts` | Readiness audit and the confined Markdown report write |
| `src/runDoctor.ts` | agent-context-doctor audit, honoring the audited repo's `.acdrc` |
| `src/baseline.ts` | `baseline-ref` audit in a temporary git worktree |
| `src/commentPr.ts` | Create or update the PR comment |
| `src/formatSummary.ts` | Log and Markdown formatting (escapes all audited text) |
| `tests/*.spec.ts` | Vitest tests |

## Commands

```bash
git submodule update --init   # vendored engines
pnpm install
pnpm typecheck
pnpm test
pnpm build                    # rebuilds dist/ — commit the result
```

Run `pnpm typecheck`, `pnpm test`, and `pnpm build` before finishing, and commit `dist/` whenever
source, dependencies, or a submodule changed. CI fails when `dist/` is stale.

## Rules

- Do not add runtime downloads (`npx`, `npm install`, fetching engines) or network calls other than
  the GitHub API used for PR comments.
- Do not edit files under `vendor/`. Change the upstream repository, then move the submodule.
- Keep TypeScript below 7: ncc needs the TypeScript JS API.
- Treat everything from the audited repository as untrusted: escape it in Markdown, log it with
  `logUntrusted`, and keep file writes inside `repo-path`.

## Ask before changing

- Token handling, permissions, or which comments the action edits (`src/commentPr.ts`)
- Input or output names and defaults in `action.yml` (they are a public contract)
- Adding dependencies
- The `node24` runtime or release tags

## Final report

When you finish, list the files you changed, the commands you ran and their results, the tests you
added, whether `dist/` was rebuilt, and anything left unfinished.
