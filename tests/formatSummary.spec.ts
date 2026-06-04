import { describe, it, expect } from 'vitest';
import {
  formatLogSummary,
  formatLogDetail,
  formatMarkdownComment,
} from '../src/formatSummary';
import type { AuditResult } from '../src/runArk';

const FULL_RESULT: AuditResult = {
  repoPath: '/repo',
  score: 72,
  categories: [
    {
      id: 'agent-instructions',
      label: 'Agent instructions',
      score: 15,
      maxScore: 20,
      findings: [
        { status: 'pass', message: 'AGENTS.md found' },
        { status: 'warn', message: 'AGENTS.md looks like a template' },
      ],
    },
    {
      id: 'architecture',
      label: 'Project architecture clarity',
      score: 12,
      maxScore: 15,
      findings: [{ status: 'pass', message: 'docs/ARCHITECTURE.md found' }],
    },
    {
      id: 'workflow',
      label: 'Developer workflow clarity',
      score: 10,
      maxScore: 15,
      findings: [{ status: 'fail', message: 'Missing typecheck script' }],
    },
  ],
  missing: ['docs/API.md', 'docs/ROUTES.md', '.github/workflows/ci.yml'],
  recommendations: [
    'Add a typecheck script to package.json',
    'Add docs/API.md with exported function signatures',
  ],
};

const PERFECT_RESULT: AuditResult = {
  repoPath: '/perfect',
  score: 100,
  categories: [
    { id: 'a', label: 'Alpha', score: 20, maxScore: 20, findings: [] },
  ],
  missing: [],
  recommendations: [],
};

const LOW_RESULT: AuditResult = {
  repoPath: '/low',
  score: 20,
  categories: [
    {
      id: 'a',
      label: 'Alpha',
      score: 2,
      maxScore: 20,
      findings: [{ status: 'fail', message: 'No AGENTS.md' }],
    },
  ],
  missing: ['AGENTS.md'],
  recommendations: ['Create AGENTS.md'],
};

// ---------- formatLogSummary ----------

describe('formatLogSummary', () => {
  it('includes the score', () => {
    expect(formatLogSummary(FULL_RESULT)).toContain('72');
  });

  it('shows green emoji for high score', () => {
    expect(formatLogSummary(PERFECT_RESULT)).toContain('🟢');
  });

  it('shows red emoji for low score', () => {
    expect(formatLogSummary(LOW_RESULT)).toContain('🔴');
  });

  it('returns a non-empty string', () => {
    expect(formatLogSummary(FULL_RESULT).length).toBeGreaterThan(0);
  });
});

// ---------- formatLogDetail ----------

describe('formatLogDetail', () => {
  it('lists category names', () => {
    const log = formatLogDetail(FULL_RESULT);
    expect(log).toContain('Agent instructions');
    expect(log).toContain('Project architecture clarity');
  });

  it('includes scores', () => {
    const log = formatLogDetail(FULL_RESULT);
    expect(log).toContain('15/20');
  });

  it('highlights non-pass findings', () => {
    const log = formatLogDetail(FULL_RESULT);
    expect(log).toContain('AGENTS.md looks like a template');
    expect(log).toContain('Missing typecheck script');
  });

  it('does not include pass findings text', () => {
    const log = formatLogDetail(FULL_RESULT);
    // Pass-status findings are suppressed from detail log
    expect(log).not.toContain('AGENTS.md found');
  });

  it('lists missing items', () => {
    const log = formatLogDetail(FULL_RESULT);
    expect(log).toContain('docs/API.md');
  });

  it('lists recommendations', () => {
    const log = formatLogDetail(FULL_RESULT);
    expect(log).toContain('Add a typecheck script');
  });

  it('handles result with no missing items or recommendations', () => {
    const log = formatLogDetail(PERFECT_RESULT);
    expect(typeof log).toBe('string');
    expect(log).not.toContain('Missing items');
    expect(log).not.toContain('Recommendations');
  });
});

// ---------- formatMarkdownComment ----------

describe('formatMarkdownComment', () => {
  it('includes the score prominently', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('72');
  });

  it('contains a markdown table header', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('| Category |');
    expect(md).toContain('| Score |');
  });

  it('renders each category in the table', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('Agent instructions');
    expect(md).toContain('Project architecture clarity');
  });

  it('renders category score as "score | max" columns', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('| 15 |');
    expect(md).toContain('| 20 |');
  });

  it('includes missing items section', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('docs/API.md');
    expect(md).toContain('docs/ROUTES.md');
  });

  it('includes recommendations section', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('Add a typecheck script');
    expect(md).toContain('Add docs/API.md');
  });

  it('includes fail and warn findings in issues section', () => {
    const md = formatMarkdownComment(FULL_RESULT);
    expect(md).toContain('AGENTS.md looks like a template');
    expect(md).toContain('Missing typecheck script');
  });

  it('omits issues section when there are no failures or warnings', () => {
    const md = formatMarkdownComment(PERFECT_RESULT);
    expect(md).not.toContain('### Issues');
  });

  it('omits missing section when nothing is missing', () => {
    const md = formatMarkdownComment(PERFECT_RESULT);
    expect(md).not.toContain('missing items');
  });

  it('omits recommendations section when empty', () => {
    const md = formatMarkdownComment(PERFECT_RESULT);
    expect(md).not.toContain('Recommendations');
  });

  it('shows 🟢 for perfect score', () => {
    const md = formatMarkdownComment(PERFECT_RESULT);
    expect(md).toContain('🟢');
  });

  it('shows 🔴 for low score', () => {
    const md = formatMarkdownComment(LOW_RESULT);
    expect(md).toContain('🔴');
  });

  it('caps missing list at 8 with overflow indicator', () => {
    const manyMissing: AuditResult = {
      ...FULL_RESULT,
      missing: Array.from({ length: 15 }, (_, i) => `file-${i}.md`),
    };
    const md = formatMarkdownComment(manyMissing);
    expect(md).toContain('more');
  });

  it('caps recommendations at 6 with overflow indicator', () => {
    const manyRecs: AuditResult = {
      ...FULL_RESULT,
      recommendations: Array.from({ length: 10 }, (_, i) => `Recommendation ${i}`),
    };
    const md = formatMarkdownComment(manyRecs);
    expect(md).toContain('more');
  });
});
