// `core` = years of production use. Everything listed has shipped in real work.
export type SkillGroup = { title: string; blurb: string; core: string[]; working: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    blurb: 'Day-to-day across four stacks.',
    core: ['JavaScript (ES6+)', 'C#', 'PHP', 'SQL'],
    working: ['TypeScript', 'Python', 'Java'],
  },
  {
    title: 'Frontend',
    blurb: 'Large React/Redux apps, embedded in legacy pages.',
    core: ['React', 'Redux', 'Material UI', 'Webpack', 'HTML & CSS', 'i18next'],
    working: ['React Native', 'Apollo GraphQL', 'React Query', 'Recharts', 'List virtualization', 'Astro'],
  },
  {
    title: 'Backend',
    blurb: 'Services, daemons and the queues between them.',
    core: ['.NET / C# services & daemons', 'PHP (CodeIgniter)', 'REST APIs'],
    working: ['GraphQL (HotChocolate)', 'Redis job queues', 'Central query service (CQS)', 'FastAPI'],
  },
  {
    title: 'Data & infra',
    blurb: 'Where the state lives and how it gets there.',
    core: ['MySQL (sharded)', 'MongoDB', 'Redis', 'AWS S3'],
    working: ['AWS EC2 · RDS · ElastiCache', 'Firebase', 'Parquet / DuckDB caches', 'GitHub Actions', 'New Relic', 'Docker'],
  },
  {
    title: 'Ad platform APIs',
    blurb: 'In production, with all their undocumented edges.',
    core: ['Google Ads API', 'Meta Marketing / Graph API'],
    working: ['Microsoft Advertising', 'LinkedIn Ads', 'Amazon Ads'],
  },
  {
    title: 'AI engineering',
    blurb: 'Shipping AI into a B2B product, not demos.',
    core: [],
    working: [
      'LLM function-calling schemas',
      'Prompt engineering',
      'MCP tool definitions',
      'Multimodal (video) inputs',
      'LLM eval sets',
      'Vector search (Pinecone-backed)',
      'LLM-assisted code migration',
    ],
  },
];

export const practices = [
  'Code review (multi-round)',
  'Incident response',
  'Design docs & PRD review',
  'Internationalization (5 locales)',
  'Agile / Scrum',
  'Mentoring',
  'Unit testing',
];
