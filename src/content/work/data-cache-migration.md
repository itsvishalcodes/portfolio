---
title: Moving a pipeline onto a shared data-cache layer
summary: Migrated an entire platform’s recommendation stack off direct report reads onto the shared data-cache architecture, then built new recommendations, audits and dashboard widgets on top.
period: Dec 2023 — Sep 2024
date: 2024-04-15
role: Engineer
context: Bringing Microsoft Advertising to parity with Google Ads
areas: [Backend, Performance & cost]
stack: [C# / .NET, Microsoft Advertising API, React, PHP]
featured: false
rank: 14
---

## Context

The recommendation product started on one ad platform. The second platform’s side of the pipeline still read data the old way — straight from the provider’s reports — so it couldn’t share the cache, parsing and aggregation the main platform used.

## What I built

- **Migrated the full Microsoft Ads suggestion stack to the data-cache architecture** — keyword bidding, first-page bids, ad groups without RSAs, losing-ad pruning, auto-apply and tidbits — plus report-parsing and metric-aggregation fixes.
- **New Microsoft optimizations**: campaign and shared-budget increase suggestions, predictive match type, and RSA suggestions.
- **PPC Audit Score for Microsoft Ads** (launched Feb 2024) on the account and all-accounts dashboards.
- Microsoft Ads dashboard sections with **Top Elements, Performance Change and Change History** widgets, plus shareable dashboards (launched Sep 2024).
- Microsoft Ads onboarding as part of the 2023 onboarding redesign.

## Outcome

The second platform reached parity on the shared architecture, and the same chassis later carried two more.
