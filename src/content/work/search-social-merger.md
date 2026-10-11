---
title: Search + Social merger — onboarding and Express for Meta & LinkedIn
summary: Core engineer on a company-wide product merger with a hard June 1 deadline. Built Meta and LinkedIn onboarding with async bulk account linking, and the first social optimization widgets.
period: Mar — Jun 2026
date: 2026-06-01
role: Core engineer
areas: [Product, Backend, Frontend]
stack: [PHP, C# / .NET, React, Meta Marketing API, LinkedIn Ads API, OAuth, Redis queues]
metric: { value: '1,000+', label: 'accounts and 5,000+ ad sets / month run the social optimizations' }
featured: false
rank: 7
---

## Context

Optmyzr ran Search and Social as separate products with separate subscriptions. Leadership set a hard business deadline — **June 1, 2026** — to merge them into one. Social platforms had to become first-class in onboarding, optimization and AI surfaces.

## What I built

### Onboarding and account linking

- OAuth flows for Meta and LinkedIn in the onboarding wizard.
- Converted account linking from synchronous per-row inserts to **async queued jobs with batched bulk inserts**.
- Sanitization for compound Instagram / LinkedIn asset IDs, with defensive rejection of malformed IDs; CSRF handling; a check that at least one account actually landed.

### The first social Express optimizations

- **Exclude low-performing placements (Meta)** — including Advantage+ → manual placement conversion and guards against removing the last placement.
- **Pause poor-performing LinkedIn Audience Network** — pause decisions use **rule-of-three confidence bounds** and a minimum-click floor agreed in founders’ review, so low-volume entities never trigger false-positive pauses.
- Social scheduling in the pipeline: prioritize cached accounts that haven’t run in 24 hours.

### Assistant support

Exposed the new suggestions to the AI assistant — see [AI features in production](/work/ai-in-production/).

## Outcome

The onboarding and Express pillars shipped for the deadline. Express and the assistant became genuinely cross-platform, and the social optimizations now run on 1,000+ accounts and 5,000+ ad sets a month.
