// "How I work" — each principle points at the work that shows it.
export type Principle = { title: string; body: string; proof: { label: string; slug: string }[] };

export const principles: Principle[] = [
  {
    title: 'Design for failure',
    body: 'Networks drop, APIs throttle and workers die mid-operation. Isolation, backoff, idempotent retries and reconciliation belong in the first design, not the postmortem.',
    proof: [
      { label: 'Pipeline resilience', slug: 'pipeline-resilience' },
      { label: 'Partial-failure reconciliation', slug: 'partial-failure-reconciliation' },
    ],
  },
  {
    title: 'Own it in production',
    body: 'Shipping is the midpoint. I instrument what I build, carry the pager for it, and turn silent failures into alerts and daily reports.',
    proof: [
      { label: 'Run monitoring', slug: 'pipeline-resilience' },
      { label: 'Escalation RCA', slug: 'enterprise-escalation-rca' },
    ],
  },
  {
    title: 'Dive deep',
    body: 'When one symptom has three causes, find all three. Reproduce it, read the provider’s actual responses, and prove the fix — don’t pattern-match.',
    proof: [{ label: 'One symptom, three root causes', slug: 'enterprise-escalation-rca' }],
  },
  {
    title: 'Work across the stack',
    body: 'The same engineer designs the worker, the API, the data model and the React screen — so nothing falls through a hand-off.',
    proof: [
      { label: 'Async media pipeline', slug: 'async-media-pipeline' },
      { label: 'Multi-tenant dashboard', slug: 'all-portfolio-dashboard' },
    ],
  },
  {
    title: 'Spend wisely',
    body: 'Cost is a design input. Data gets a retention policy, and expensive work — like an LLM call — sits at the end of a funnel that most inputs never reach.',
    proof: [
      { label: '10.8 TB storage cut', slug: 's3-storage' },
      { label: 'Cost-bounded LLM pipeline', slug: 'smart-url-checker' },
    ],
  },
  {
    title: 'Raise the bar around me',
    body: 'Design docs before code, multi-round reviews, mentoring newer engineers, and taking on the codebase-wide cleanups nobody else wants.',
    proof: [
      { label: 'Codebase merge', slug: 'repo-consolidation' },
      { label: 'Solo PRD → production', slug: 'custom-audiences' },
    ],
  },
];
