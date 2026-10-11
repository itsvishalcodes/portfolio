// `core` = years of production use. Everything listed has shipped in real work.
export type SkillGroup = { title: string; blurb: string; core: string[]; working: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'Systems & architecture',
    blurb: 'The patterns I reach for when things have to keep working.',
    core: ['Async workflows & job queues', 'Fault isolation', 'Rate limiting & backoff', 'Caching', 'Multi-tenant data modeling'],
    working: ['Reconciliation after partial failure', 'Idempotency', 'Adaptive concurrency', 'Data lifecycle & retention', 'API design (REST, GraphQL)'],
  },
  {
    title: 'Languages',
    blurb: 'Production across four stacks.',
    core: ['C#', 'JavaScript / TypeScript', 'SQL', 'PHP'],
    working: ['Java', 'Python'],
  },
  {
    title: 'Backend',
    blurb: 'Services, background workers and the queues between them.',
    core: ['.NET services & workers', 'REST APIs', 'Redis queues & locks'],
    working: ['GraphQL (HotChocolate)', 'FastAPI', 'OAuth 2.0', 'Central query service patterns'],
  },
  {
    title: 'Data & cloud',
    blurb: 'Where state lives, and what it costs.',
    core: ['MySQL (sharded)', 'MongoDB', 'Redis', 'AWS S3'],
    working: ['AWS EC2 · RDS · ElastiCache', 'Parquet / DuckDB caches', 'Firebase', 'Docker', 'GitHub Actions', 'New Relic'],
  },
  {
    title: 'Frontend',
    blurb: 'Large applications, not pages.',
    core: ['React', 'Redux', 'State architecture', 'Rendering performance', 'Webpack', 'i18n (5 locales)'],
    working: ['React Native', 'Apollo GraphQL', 'React Query', 'Astro', 'Accessibility'],
  },
  {
    title: 'Applied AI',
    blurb: 'LLMs in a production product, with contracts and evals.',
    core: [],
    working: ['LLM tool / function calling', 'MCP tool definitions', 'Prompt engineering', 'Eval sets', 'Vector search & retrieval', 'Multimodal inputs', 'LLM-assisted code migration'],
  },
];

export const practices = [
  'Design docs & trade-off reviews',
  'On-call & incident response',
  'Observability',
  'Code review',
  'Mentoring',
  'Backward-compatible migrations',
  'Unit testing',
];
