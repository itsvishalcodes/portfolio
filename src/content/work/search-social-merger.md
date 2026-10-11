---
title: Async bulk onboarding for a company-wide product merger
summary: Core engineer on a merger with a hard business deadline. Rebuilt account onboarding from synchronous per-row writes into async queued jobs with batched inserts, and shipped the first statistically-gated automation for two new platforms.
period: Mar — Jun 2026
date: 2026-06-01
role: Core engineer
context: Merging two product lines (Search and Social) into one subscription
areas: [Backend, Distributed systems]
stack: [PHP, C# / .NET, Redis job queues, OAuth 2.0, React, Meta & LinkedIn APIs]
metric: { value: '1,000+', label: 'accounts and 5,000+ ad sets a month on the new automation' }
featured: false
rank: 9
---

## Context

The company ran two product lines with separate subscriptions. Leadership set a hard business deadline — **June 1, 2026** — to merge them into one, which meant two new platforms had to become first-class in onboarding, automation and the AI assistant.

## What I built

### Onboarding and account linking

- OAuth flows for Meta and LinkedIn in the onboarding wizard.
- Converted account linking from synchronous per-row inserts to **async queued jobs with batched bulk inserts**.
- Sanitization for compound Instagram / LinkedIn asset IDs, with defensive rejection of malformed IDs; CSRF handling; a check that at least one account actually landed.

### Statistically-gated automation

- **Exclude low-performing placements (Meta)** — including Advantage+ → manual placement conversion and guards against removing the last placement.
- **Pause poor-performing LinkedIn Audience Network** — pause decisions use **rule-of-three confidence bounds** and a minimum-click floor agreed in founders’ review, so low-volume entities never trigger false-positive pauses.
- Social scheduling in the pipeline: prioritize cached accounts that haven’t run in 24 hours.

### Assistant support

Exposed the new suggestions to the AI assistant — see [AI features in production](/work/ai-in-production/).

## Outcome

The onboarding and Express pillars shipped for the deadline. Express and the assistant became genuinely cross-platform, and the social optimizations now run on 1,000+ accounts and 5,000+ ad sets a month.
