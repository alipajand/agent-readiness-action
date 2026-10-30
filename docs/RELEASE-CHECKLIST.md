# Release checklist: integrations

The GitHub Action keeps its own release steps (README, "Release checklist"). This checklist covers the
skill, the Claude Code and Cursor plugin, and the MCP server. Integration releases use
`integrations-v<version>` tags and never move the action's `v1` tag.

## 0. Release gate

- [x] agent-context-doctor#74 is merged (security findings A, B, E, F), and
      `vendor/agent-context-doctor` points at its merge commit `034a74c` on `main`
- [x] The bump was made with the `bumping-bundled-engines` skill: `dist/`, the skill script, the MCP
      bundles, and `provenance.generated.ts` rebuilt and committed together
- [x] `integrations/tests/adversarial.spec.ts` asserts the configured-credential case (a value under
      `env.API_TOKEN` in a one-line `.mcp.json` never appears in the output); it fails against the
      previous engine
- [x] CI passes on the final commit of the pull request (Linux, Node.js 22.13.0 and 24): all six
      checks passed on `0b4cc20`, including CodeQL
- [x] The Claude Code checks in § 3 pass (plugin, skill, marketplace install, MCP host). This gates
      the skill, the Claude Code plugin, npm, and the MCP Registry
- [x] The Cursor check in § 3 passes. This gates the Cursor Marketplace submission only

## 1. Versions

All of these carry the same version (`integrations/tests/plugins.spec.ts`,
`skill.spec.ts`, and `mcpPackage.spec.ts` fail if they differ):

- [ ] `integrations/src/runtime/version.ts` (`TOOL_VERSION`)
- [ ] `plugins/agent-readiness/.claude-plugin/plugin.json` and `.cursor-plugin/plugin.json`
- [ ] `plugins/agent-readiness/skills/agent-readiness-audit/SKILL.md` (`metadata.version`)
- [ ] `integrations/mcp-package/package.json` and both `version` fields in `server.json`
- [ ] Pinned version in `integrations/mcp-package/README.md` and `docs/distribution/README.md`

## 2. Build and verify

```bash
git submodule update --init
```

```bash
pnpm install --frozen-lockfile
```

```bash
pnpm format:check && pnpm typecheck && pnpm test && pnpm build
```

```bash
pnpm integrations:typecheck && pnpm integrations:build && pnpm integrations:test
```

- [ ] `git status` shows no changes after the builds (`dist/`, the skill script, `mcp-package/dist`,
      `provenance.generated.ts`)
- [ ] `skills-ref validate plugins/agent-readiness/skills/agent-readiness-audit`
- [ ] `claude plugin validate .` and `claude plugin validate --strict plugins/agent-readiness`
- [ ] `mcp-publisher validate integrations/mcp-package/server.json`
- [ ] `pnpm audit`: no new advisories in shipped code (see `docs/SECURITY-FINDINGS.md` for known ones)
- [ ] CI green on the final commit: `Test · Typecheck · Build`, `Run the action on this repository`,
      both `Integrations` jobs (Node.js 22.13.0 and 24), and CodeQL
- [ ] `npm pack` twice in `integrations/mcp-package` gives byte-identical tarballs

## 3. Manual client checks

Results from 2026-10-12 (Claude Code 2.1.278, signed in, headless `claude -p` from temporary
fixture repositories):

- [x] Claude Code: `claude --plugin-dir ./plugins/agent-readiness`, run `/agent-readiness:audit`
      on a sample repository, and confirm the command runs the bundled script without a permission
      prompt and reports the engine scores. Passed after two fixes in this release: the command no
      longer sends the model to the skill (the `Skill` call was denied), and `SKILL.md` gives Claude
      Code the exact pre-approved command (a quoted script path was denied)
- [x] Claude Code: the plugin's skill (`/agent-readiness:agent-readiness-audit`) and the skill
      installed from GitHub with `npx skills add` run the script without a permission prompt
- [x] Claude Code marketplace: `claude plugin marketplace add alipajand/agent-readiness-action` and
      `claude plugin install agent-readiness@agent-readiness` into an empty `CLAUDE_CONFIG_DIR`
- [x] One MCP host (Claude Code): add the server with `--root`, call `audit_repository`,
      `audit_agent_context`, and `get_audit_report`, and confirm the host shows no sandbox or
      startup error
- [x] Cursor: copy `plugins/agent-readiness` to `~/.cursor/plugins/local/agent-readiness`, reload,
      run the `agent-readiness-audit` command on a sample repository, and confirm it reports the
      same scores as `node plugins/agent-readiness/skills/agent-readiness-audit/scripts/agent-readiness.mjs audit <repo>`.
      **Passed** (2026-10-13, signed-in Cursor 3.24.12 on macOS, released 0.1.2): loading, the
      allowed run with approval (same scores as the script), masking, an unchanged repository, and
      the denied run (the answer said the audit did not run, gave no scores, and read no repository
      file; acceptance steps 1 to 8 in `distribution/SUBMISSIONS.md`). Cursor does not log
      approvals, so those are owner-reported. The MCP server in Cursor was not run
- [ ] Windows, if it is to be listed as supported: run the skill script and the MCP server once.
      **Not tested**: no Windows machine or CI job

Observed host behavior, not a plugin defect: when a request in plain words made the model load the
skill on its own, headless Claude Code denied the `Skill` tool call, and the model fell back to
reading the files itself. An interactive session was not tested. Invoking `/agent-readiness:audit`
or the skill by name ran the script directly.

## 4. Publish (owner only)

- [x] Merge to `main`, tag `integrations-v<version>`, push the tag, and create its GitHub release
      (not marked Latest, so the action's release stays Latest) from
      `docs/integrations/RELEASE-NOTES.md`
- [x] `npm publish` from `integrations/mcp-package` with 2FA (0.1.1 published 2026-10-12, registry tarball SHA-256 `9b6a695e…`; 0.1.2 published 2026-10-13, `4daba9c0…`; each matches its tag build). The package does not request npm
      provenance: npm only generates it from a supported CI provider, and no workflow here
      publishes. To publish with provenance, add a workflow with `id-token: write` that runs
      `npm publish --provenance` (or npm trusted publishing) from this repository
- [x] `mcp-publisher login github` as `alipajand` (the `io.github.alipajand/*` namespace), then
      `mcp-publisher publish` from `integrations/mcp-package`. The registry checks that the
      published npm package's `mcpName` equals `server.json`'s `name`, so publish npm first
      (0.1.1 and 0.1.2 published 2026-10-13; [registry entry](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.alipajand/agent-readiness))
      If the login has expired, run `mcp-publisher login github` again. If the registry reports that
      the npm version was not found right after `npm publish`, wait a few minutes and retry: npm's
      cache can lag, and a refused publish registers nothing
- [x] Release the action separately (README, "Release checklist") when `dist/` changes: done as
      v1.2.0 for the engine updates; integrations 0.1.2 did not change `dist/`
- [x] Cursor Marketplace: submit or update at <https://cursor.com/marketplace/publish>, the Cursor
      check in § 3 has passed (2026-10-13). Submitted 2026-10-13; awaiting Cursor's review, not
      listed yet
- [ ] Update statuses and evidence in `docs/PUBLISHING-MATRIX.md`

## Engine bumps

Moving either submodule changes every bundle. After the `bumping-bundled-engines` skill rebuilds
`dist/`, also run `pnpm integrations:build`, commit the regenerated bundles and
`provenance.generated.ts`, and release a new integrations version so plugin users receive it.
