# Distribution

Agent Readiness ships the same two pinned engines (agent-readiness-kit for the readiness score,
agent-context-doctor for instruction and configuration files) through several channels. All of
them are built from this repository.

| Package                                     | Where it lives                                                 | Install                                                                                                            |
| ------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| GitHub Action                               | `action.yml`, `dist/`                                          | `uses: alipajand/agent-readiness-action@v1`                                                                        |
| Agent Skill `agent-readiness-audit`         | `plugins/agent-readiness/skills/agent-readiness-audit/`        | `npx skills add alipajand/agent-readiness-action --skill agent-readiness-audit`                                    |
| Claude Code plugin `agent-readiness`        | `plugins/agent-readiness/` + `.claude-plugin/marketplace.json` | `/plugin marketplace add alipajand/agent-readiness-action`, then `/plugin install agent-readiness@agent-readiness` |
| Cursor plugin `agent-readiness`             | `plugins/agent-readiness/` + `.cursor-plugin/marketplace.json` | Cursor Marketplace (after review)                                                                                  |
| MCP server `@alipajand/agent-readiness-mcp` | `integrations/mcp-package/`                                    | `npm install -g @alipajand/agent-readiness-mcp@0.1.2`                                                              |

Status per directory: [../PUBLISHING-MATRIX.md](../PUBLISHING-MATRIX.md). Submission material
for the remaining directories: [SUBMISSIONS.md](SUBMISSIONS.md). Release steps:
[../RELEASE-CHECKLIST.md](../RELEASE-CHECKLIST.md). Third-party catalogues that reference the
source but distribute nothing, such as the XERJ Corpus Hub, are recorded separately under
[Community references](../PUBLISHING-MATRIX.md#community-references); none of them is a channel in
the table above.

## Claims we make

Every listing uses only these claims. Each one is backed by a test in this repository.

| Claim                                               | Evidence                                                                                                                                                                                    |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deterministic repository readiness scoring          | Parity with `ark audit --json` on seven fixtures (`integrations/tests/parity.spec.ts`)                                                                                                      |
| Agent instruction and configuration security checks | Parity with `acd audit --json`; hostile-repository tests (`adversarial.spec.ts`, `mcp.spec.ts`)                                                                                             |
| AI coding-agent workflow quality gates              | The GitHub Action's `min-score`, `max-score-drop`, and `context-fail-on` inputs (`tests/index.spec.ts`)                                                                                     |
| Local-first, read-only, offline                     | No network modules in the bundles (`bundle.spec.ts`); writes denied by Node's permission model during the clean-install test (`install.spec.ts`); unchanged file trees (`readOnly.spec.ts`) |
| No audit-time LLM dependency                        | The engines are rule-based; no API key or model call exists in any bundle                                                                                                                   |

Do not claim support for a client or directory that is not marked READY or PUBLISHED in the matrix.

## Listing copy

### Name

Agent Readiness

### One line (≤ 100 characters, MCP Registry limit)

Deterministic, read-only audits of repo readiness for AI coding agents and of agent context files.

### Short description

Score a repository's readiness for AI coding agents and check AGENTS.md, CLAUDE.md, Cursor rules,
and MCP config for quality and safety problems. Deterministic, read-only, offline; no LLM scoring.

### Long description

Agent Readiness runs two rule-based engines on a local repository. agent-readiness-kit scores how
ready the repository is for AI coding agents (0–100 across 13 categories, including agent
instructions, workflow, testing, and safety boundaries) for Node.js, Python, Go, and Rust projects.
agent-context-doctor checks the agent instruction and configuration files for vague or placeholder
guidance, contradictions, stale commands, risky permissions, hidden Unicode characters, and
committed secrets (redacted in its output). Results are the engines' own output, with the engine
commits named in every report. The audit reads files only: it writes nothing, runs none of the
repository's scripts, sends nothing over the network, and needs no API key.

### Tags

`ai-coding-agents`, `agent-readiness`, `repository-readiness`, `agents-md`, `claude-md`,
`cursor-rules`, `quality-gate`, `security-audit`, `mcp`, `developer-tools`

### Categories

Developer tools / Code quality / Security

### Usage examples

- "Audit this repository's agent readiness and list the three most valuable fixes."
- "Check our AGENTS.md, CLAUDE.md, and Cursor rules for problems."
- `/agent-readiness:audit ./services/api` (Claude Code plugin)
- MCP: call `audit_repository` with `{ "path": "." }`, then `audit_agent_context`.

### Permissions statement

Reads files in the directory you choose. Writes nothing, starts no network connections, and runs no
code from the audited repository. The MCP server only audits directories under the `--root` paths
you configure. The plugin pre-approves a single command: running its bundled audit script with
Node.js.
