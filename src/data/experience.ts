export type Milestone = { when: string; text: string; slug?: string };

export type Role = {
  title: string;
  org: string;
  orgUrl?: string;
  orgNote?: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  // Timeline shown beside the role's card, newest first. `slug` links a case study.
  journey?: { year: string; items: Milestone[] }[];
};

export const roles: Role[] = [
  {
    title: 'Software Development Engineer',
    org: 'Optmyzr',
    orgUrl: 'https://www.optmyzr.com',
    orgNote: 'B2B SaaS · 1,000+ customers',
    period: 'Jun 2023 — Present',
    location: 'Remote · Hyderabad, India',
    summary:
      'I own problem areas end to end across the backend and the frontend — writing the design doc, building the services, workers and UI, shipping, and carrying the pager — on a 20–50 person engineering team.',
    highlights: [
      'Made a multi-tenant daily processing pipeline resilient at scale: cross-process rate-limit backoff coordinated through Redis, adaptive concurrency, per-unit fault isolation, and alerting that turned silent failures into daily reports.',
      'Designed a reconciliation path that recovers state after a worker dies mid-operation across a system boundary — with guards that suppress any ambiguous match rather than guess.',
      'Replaced a blocking request path with an async, self-scheduling workflow for multi-minute external media ingestion, plus pre-flight validation and per-source upload deduplication.',
      'Led the consolidation of two diverged React codebases (355 files moved, ~580 reconciled) and cleared all 13 launch blockers within a week.',
      'Owned the delivery epics for a hierarchical multi-tenant dashboard from POC to GA, serving 5,000+ portfolios across 1,000+ customers.',
      'Shipped LLM features in production: versioned tool-calling schemas, platform-aware context routing, multimodal generation, and vector-search-backed global search used 1,000+ times a day.',
      'Cut 10.8 TB of cloud storage by redesigning data retention around lifecycle policies without breaking user downloads.',
      'Primary on-call rotation and incident ownership; mentored an intern and a junior engineer; regular reviewer on other teams’ designs and code; joined enterprise-customer calls to scope requirements.',
    ],
    stack: ['C# / .NET', 'TypeScript', 'React', 'Redux', 'Redis', 'MySQL', 'MongoDB', 'AWS', 'PHP', 'LLM APIs'],
    journey: [
      {
        year: '2026',
        items: [
          { when: 'Sep–Oct', text: 'Cost-bounded LLM verification service (hackathon)', slug: 'smart-url-checker' },
          { when: 'Sep', text: 'One symptom, three root causes: enterprise escalations', slug: 'enterprise-escalation-rca' },
          { when: 'Aug', text: 'Async media pipeline · partial-failure reconciliation', slug: 'async-media-pipeline' },
          { when: 'Jul', text: 'Two diverged React codebases merged into one', slug: 'repo-consolidation' },
          { when: 'Jun', text: 'LLM tool-calling across every platform', slug: 'ai-in-production' },
          { when: 'Mar–Jun', text: 'Async bulk onboarding for a company-wide product merger', slug: 'search-social-merger' },
        ],
      },
      {
        year: '2025',
        items: [
          { when: 'Jun', text: 'Portfolio dashboard out of beta', slug: 'all-portfolio-dashboard' },
          { when: 'Apr–Jun', text: 'Solo feature from PRD to production', slug: 'custom-audiences' },
          { when: 'Mar', text: '10.8 TB of storage put on lifecycle policies', slug: 's3-storage' },
        ],
      },
      {
        year: '2024',
        items: [
          { when: 'Nov', text: 'Started the multi-tenant portfolio dashboard', slug: 'all-portfolio-dashboard' },
          { when: 'May–Sep', text: 'Rate-limit backoff, adaptive concurrency, fault isolation', slug: 'pipeline-resilience' },
          { when: 'Jan–Feb', text: 'Migrated a second platform’s pipeline onto the shared data cache', slug: 'data-cache-migration' },
        ],
      },
      {
        year: '2023',
        items: [
          { when: 'Sep', text: 'One navigation system on every page', slug: 'unified-navigation' },
          { when: 'Jul', text: 'Pipeline run monitoring and daily failure reports', slug: 'pipeline-resilience' },
          { when: 'Jun', text: 'Converted to full-time · React-in-PHP navigation in beta', slug: 'unified-navigation' },
        ],
      },
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'Optmyzr',
    orgUrl: 'https://www.optmyzr.com',
    period: 'Apr 2022 — Jun 2023',
    location: 'Remote · Hyderabad, India',
    summary: 'Joined while finishing my degree; converted to full-time on the back of a 0 → 1 product launch.',
    highlights: [
      'Built a new product 0 → 1 — the React/Redux frontend architecture, ~20 recommendation modules and a C# generation pipeline — and replaced the legacy tool for all users in 7 months. Usage grew 5×.',
      'Kept 1,000+-row lists at 60 fps with windowed virtualization, and isolated every module behind its own error boundary so one failure could never take down the page.',
      'Wrote a Webpack plugin that renders React components inside server-rendered PHP pages, which let one navigation system replace two diverged ones across every tool.',
      'Built the company marketing site’s dynamic templates on Hugo with CRM integration, removing engineering from the content team’s publishing path.',
    ],
    stack: ['React', 'Redux', 'C# / .NET', 'Webpack', 'PHP', 'Hugo'],
    journey: [
      {
        year: '2023',
        items: [{ when: 'Mar', text: 'Product launched to all users; legacy tool retired', slug: 'express-v2' }],
      },
      {
        year: '2022',
        items: [
          { when: 'Aug', text: 'Started building a new product, 0 → 1', slug: 'express-v2' },
          { when: 'Apr', text: 'Joined Optmyzr as a software engineer intern' },
        ],
      },
    ],
  },
  {
    title: 'Freelance Developer',
    org: 'Private client',
    period: 'During college · ~6 months',
    location: 'Remote',
    summary: 'Scoped, built and supported paid client work on my own before my first full-time role.',
    highlights: ['Built and maintained a WordPress / PHP e-commerce storefront for a private client.'],
    stack: ['WordPress', 'PHP', 'MySQL'],
  },
];
