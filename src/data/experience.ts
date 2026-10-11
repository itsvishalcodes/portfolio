export type Role = {
  title: string;
  org: string;
  orgUrl?: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    title: 'Software Development Engineer 1',
    org: 'Optmyzr',
    orgUrl: 'https://www.optmyzr.com',
    period: 'Jun 2023 — Present',
    location: 'Remote · Hyderabad, India',
    summary:
      'Full-stack engineer on a PPC-optimization SaaS used by advertising agencies worldwide. I own product areas end to end — from PRD review and design docs through backend, frontend, launch and production support — on a 20–50 person engineering team.',
    highlights: [
      'Hardened the daily optimization pipeline that processes every customer account against the Google Ads API — Redis-coordinated rate-limit backoff, time-of-day parallelism and per-widget fault isolation.',
      'Took Meta video ads from zero to production across two products: async ingestion, pre-flight placement validation and AI copy that reads the whole video.',
      'Owned the delivery epics for the All Portfolio Dashboard from POC to out-of-beta GA — a multi-account surface serving 5,000+ portfolios across 1,000+ customers.',
      'Sole engineer on a premium feature that turns competitor data into Google Ads audiences — PRD → POC → design doc → backend → plan gating → analytics.',
      'Shipped AI into the product: LLM function-calling schemas for the in-product assistant, AI summaries, multimodal ad copy and global search backed by vector search.',
      'Merged two React codebases into one (355 files moved, ~580 reconciled) and cut 10.8+ TB of S3 storage with lifecycle expiry.',
      'On the primary on-call rotation; handled tracked production incidents through to resolution. Mentored an intern and a junior engineer, and joined requirements calls with enterprise customers to scope features.',
    ],
    stack: ['React', 'Redux', 'C# / .NET', 'PHP', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Google Ads API', 'Meta Marketing API'],
  },
  {
    title: 'Software Engineer Intern',
    org: 'Optmyzr',
    orgUrl: 'https://www.optmyzr.com',
    period: 'Apr 2022 — Jun 2023',
    location: 'Remote · Hyderabad, India',
    summary:
      'Joined while finishing my degree and was converted to full-time on the back of the Express v2 launch.',
    highlights: [
      'Built and launched Optmyzr Express v2 — a React/Redux one-click optimization product with ~20 suggestion widgets and a C# suggestion pipeline — replacing the legacy tool for all users in 7 months. Usage grew 5×.',
      'Shipped the unified side navigation across every tool, including a Webpack plugin that renders React components inside legacy PHP pages.',
      'Built dynamic pages and templates for optmyzr.com with Hugo (taxonomies, shortcodes) and CRM integration, so the content team could publish without engineering.',
    ],
    stack: ['React', 'Redux', 'C#', 'PHP', 'CoffeeScript', 'Webpack', 'Hugo'],
  },
  {
    title: 'Freelance Developer',
    org: 'Private client',
    period: 'During college · ~6 months',
    location: 'Remote',
    summary: 'Scoped, built and supported paid client work on my own before my first full-time role.',
    highlights: ['Built and maintained a template-based WordPress / PHP e-commerce storefront for a private client.'],
    stack: ['WordPress', 'PHP', 'MySQL'],
  },
];

// Four years at a glance — shown as a timeline on the home page.
export type Milestone = { when: string; text: string; slug?: string };
export const journey: { year: string; items: Milestone[] }[] = [
  {
    year: '2022',
    items: [
      { when: 'Apr', text: 'Joined Optmyzr as a software engineer intern' },
      { when: 'May–Jul', text: 'PPC Audit fixes; React error page migrated off PHP views' },
      { when: 'Aug', text: 'Started building Optmyzr Express v2', slug: 'express-v2' },
    ],
  },
  {
    year: '2023',
    items: [
      { when: 'Mar', text: 'Express v2 new design live for all users', slug: 'express-v2' },
      { when: 'Jun', text: 'Converted to full-time · new side navigation in opt-in beta', slug: 'unified-navigation' },
      { when: 'Jul', text: 'Pipeline run monitoring with daily Slack digests', slug: 'optimization-pipeline' },
      { when: 'Sep', text: 'New navigation on every page', slug: 'unified-navigation' },
      { when: 'Oct–Nov', text: 'New signup flow and Microsoft Ads onboarding' },
    ],
  },
  {
    year: '2024',
    items: [
      { when: 'Jan–Feb', text: 'Microsoft Ads suggestions migrated to the data cache · PPC Audit Score for Microsoft Ads', slug: 'microsoft-ads' },
      { when: 'May–Sep', text: 'Rate-limit backoff, dynamic parallelism and per-widget isolation', slug: 'optimization-pipeline' },
      { when: 'Sep', text: 'Microsoft Ads dashboard widgets & shareable dashboards', slug: 'microsoft-ads' },
      { when: 'Nov', text: 'Rule Engine account scope GA · All Portfolio Dashboard begins', slug: 'all-portfolio-dashboard' },
    ],
  },
  {
    year: '2025',
    items: [
      { when: 'Mar', text: '10.8 TB of S3 storage put on lifecycle expiry', slug: 's3-storage' },
      { when: 'May', text: 'AI summary on Top Competitors · “Portfolios for Search” beta', slug: 'all-portfolio-dashboard' },
      { when: 'Apr–Jun', text: 'Custom Audiences from competitor data', slug: 'custom-audiences' },
      { when: 'Jun', text: 'All Portfolio Dashboard out of beta', slug: 'all-portfolio-dashboard' },
      { when: 'Aug–Dec', text: 'Social All Accounts Dashboard; one portfolio creator for Search & Social' },
    ],
  },
  {
    year: '2026',
    items: [
      { when: 'Feb–Mar', text: 'Locale-aware formatting across the social suite (5 languages)' },
      { when: 'Mar–Jun', text: 'Express for Meta & LinkedIn; onboarding for the Search + Social merger', slug: 'search-social-merger' },
      { when: 'May–Jun', text: 'Weather optimization for Meta; new Rule Engine date operators', slug: 'rule-engine-weather' },
      { when: 'Jul', text: 'Two React repos merged into one · Explorer global filters', slug: 'repo-consolidation' },
      { when: 'Aug', text: 'Video ads for Meta · dead-worker ad reconciliation', slug: 'meta-video-ads' },
      { when: 'Sep', text: 'Explorer customer beta · enterprise Meta ad-creation fixes', slug: 'meta-pages-recovery' },
      { when: 'Sep–Oct', text: 'Smart URL Checker — hackathon project, now being integrated', slug: 'smart-url-checker' },
    ],
  },
];
