# Security Policy

## Supported versions

Security fixes are applied to the latest release on the default branch and published by moving the
major version tag (for example `v1`). Pin the action to a full commit SHA if you need to review
every change before it runs.

## Reporting a vulnerability

**Preferred:** use [GitHub private vulnerability reporting](https://github.com/alipajand/agent-readiness-action/security/advisories/new)
so the issue can be fixed before it is public.

**Do not** open a public issue for an undisclosed vulnerability.

Include a description and impact, steps to reproduce (a minimal workflow and repository layout
help most), and the action version or commit SHA you ran.

| Stage                  | Target                                           |
| ---------------------- | ------------------------------------------------ |
| Initial acknowledgment | Within 7 days                                    |
| Status update          | Within 30 days                                   |
| Fix or mitigation plan | Depends on severity; critical issues prioritized |

## Scope

### In scope

- Command injection into the workflow through audited file names, file contents, or config
- Writes outside `repo-path`, or through symlinks, from the `output` input
- Git option injection through `baseline-ref`
- Editing or deleting PR comments the action does not own
- Anything that makes the action download or execute code at run time

### Out of scope

- The security of the repositories you audit
- Workflows that grant the action a broader token than the documented permissions
- Vulnerabilities in the audited repository's own dependencies

## Design boundaries

- **Nothing is fetched at run time.** Both engines are compiled into `dist/index.js` from pinned
  submodules.
- **No telemetry and no LLM calls.** The only network access is the optional GitHub API call for
  the PR comment.
- **Least privilege.** Auditing needs `contents: read`. PR comments additionally need
  `pull-requests: write` and `issues: write`.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md#trust-boundaries) for how untrusted input is
handled.

## Dependency updates

Dependabot proposes updates for npm packages, GitHub Actions, and both engine submodules. Actions
are pinned by commit SHA, and pnpm 11 blocks dependency install scripts and packages published
less than a day ago.
