---
title: Solo, from PRD to a premium feature in production
summary: The only engineer on a premium feature — I reviewed the PRD, built the POC, wrote the design doc, then implemented batch writes to a third-party API with partial-failure semantics, plan gating and analytics.
period: Apr — Jun 2025
date: 2025-06-01
role: Sole engineer
context: Turning competitor data into Google Ads audience segments
areas: [Backend, Frontend, AI]
stack: [C# / .NET, Google Ads API, React, Redux, LLM prompting]
metric: { value: '100+', label: 'segments created in the first two months' }
featured: false
rank: 8
---

## The problem

Optmyzr’s Top Competitors widget surfaced auction-insights competitor data, but customers couldn’t act on it. Product wanted a premium differentiator: build Google Ads custom audience segments from that competitor data, straight from the dashboard.

## What I did

I reviewed the PRD, built the POC, wrote the design document and reworked it through review rounds — then implemented, gated and instrumented the feature alone.

- A React side-tray with debounced search over existing segments, card and table views, and create / edit flows.
- The C# backend for segment creation via the Google Ads API, including **intermediary audience** creation.
- Both association paths: directly to segments, and via an intermediary audience to ad groups and asset groups — Demand Gen included.
- **Partial-failure semantics**: one bad association never rolls back the batch.
- Optimization-history records for create and edit so users can audit changes, plus unit tests for the association logic.
- Premium-plan gating (high-tier plans only) with a locked state for everyone else, and analytics from day one.

### The sibling feature: “Summarize with AI”

On the same widget I built an AI summary of competitor data end to end — prompt design, caching keyed on date range, an animated CTA — iterated through founder review and launched in the May 2025 release.

## Outcome

Shipped as a premium-gated feature; 100+ segments were created in its first two months.
