import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { rm } from 'node:fs/promises';
import path from 'node:path';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { Ajv } from 'ajv';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { TOOL_VERSION } from '../src/runtime/version';
import { makeTempDir } from './fixtures';
import { repoRoot } from './helpers';

const pkgDir = path.join(repoRoot, 'integrations/mcp-package');
const pkg = JSON.parse(readFileSync(path.join(pkgDir, 'package.json'), 'utf8'));
const serverJson = JSON.parse(readFileSync(path.join(pkgDir, 'server.json'), 'utf8'));

describe('server.json', () => {
  it('validates against the registry schema snapshot', () => {
    // Snapshot of docs/reference/server-json/draft/server.schema.json from
    // modelcontextprotocol/registry; the draft differs from the published
    // 2025-12-11 schema only in remote transport URLs, which this server does not use.
    const schema = JSON.parse(
      readFileSync(path.join(import.meta.dirname, 'schemas/server.schema.json'), 'utf8'),
    );
    const ajv = new Ajv({ strict: false, validateFormats: false });
    const validate = ajv.compile(schema);
    expect(validate(serverJson), JSON.stringify(validate.errors)).toBe(true);
  });

  it('matches the npm package and the runtime version', () => {
    expect(serverJson.name).toBe(pkg.mcpName);
    expect(serverJson.name).toMatch(/^io\.github\.alipajand\//);
    expect(serverJson.description.length).toBeLessThanOrEqual(100);
    expect(serverJson.version).toBe(TOOL_VERSION);
    expect(pkg.version).toBe(TOOL_VERSION);
    expect(serverJson.packages).toEqual([
      expect.objectContaining({
        registryType: 'npm',
        identifier: pkg.name,
        version: TOOL_VERSION,
        transport: { type: 'stdio' },
      }),
    ]);
  });

  it('has no runtime dependencies to install', () => {
    expect(pkg.dependencies).toBeUndefined();
    expect(pkg.scripts).toBeUndefined();
  });
});

describe('clean installation of the packed tarball', () => {
  let work: string;
  let installed: string;

  beforeAll(async () => {
    work = await makeTempDir('ar-mcp-install-');
    const out = execFileSync('npm', ['pack', '--json', '--pack-destination', work], {
      cwd: pkgDir,
      encoding: 'utf8',
    });
    type PackEntry = { filename: string; files: Array<{ path: string }> };
    // npm 10 and 11 print an array of entries; npm 12 prints an object keyed by package name.
    const parsed = JSON.parse(out) as PackEntry[] | Record<string, PackEntry>;
    const entries = Array.isArray(parsed) ? parsed : Object.values(parsed);
    expect(entries).toHaveLength(1);
    const [{ filename, files }] = entries;
    expect(files.map((f) => f.path).sort()).toEqual([
      'LICENSE',
      'README.md',
      'dist/THIRD-PARTY-LICENSES.txt',
      'dist/audit-worker.THIRD-PARTY-LICENSES.txt',
      'dist/audit-worker.mjs',
      'dist/server.js',
      'package.json',
      'server.json',
    ]);
    const project = path.join(work, 'project');
    execFileSync('mkdir', [project]);
    writeFileSync(path.join(project, 'package.json'), '{"name":"consumer","private":true}');
    // --offline proves the package needs nothing from the registry.
    execFileSync(
      'npm',
      [
        'install',
        '--offline',
        '--ignore-scripts',
        '--no-audit',
        '--no-fund',
        path.join(work, filename),
      ],
      { cwd: project, encoding: 'utf8' },
    );
    installed = path.join(project, 'node_modules/.bin/agent-readiness-mcp');
    expect(readdirSync(path.join(project, 'node_modules'))).toEqual([
      '.bin',
      '.package-lock.json',
      '@alipajand',
    ]);
  }, 180_000);

  afterAll(async () => {
    await rm(work, { recursive: true, force: true });
  });

  it('starts from the npm bin link and answers a tool call', async () => {
    const client = new Client({ name: 'install-test', version: '0.0.0' });
    await client.connect(
      new StdioClientTransport({ command: installed, args: ['--root', repoRoot], stderr: 'pipe' }),
    );
    try {
      const { tools } = await client.listTools();
      expect(tools).toHaveLength(3);
      const result = (await client.callTool({ name: 'audit_agent_context', arguments: {} })) as {
        isError?: boolean;
        structuredContent?: { target: string };
      };
      expect(result.isError).toBeFalsy();
      expect(result.structuredContent?.target).toBe(repoRoot);
    } finally {
      await client.close();
    }
  });
});

describe('incomplete installation', () => {
  it('refuses to start without its audit worker', async () => {
    const dir = await makeTempDir('ar-mcp-broken-');
    try {
      execFileSync('cp', [path.join(pkgDir, 'dist/server.js'), dir]);
      let status = 0;
      let stderr = '';
      try {
        execFileSync(process.execPath, [path.join(dir, 'server.js')], {
          encoding: 'utf8',
          stdio: 'pipe',
        });
      } catch (err) {
        status = (err as { status: number }).status;
        stderr = String((err as { stderr: string }).stderr);
      }
      expect(status).toBe(1);
      expect(stderr).toContain('The installation is incomplete');
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
});
