---
title: Bringing Express to Microsoft Ads
summary: Migrated the whole Microsoft Ads suggestion stack to the data-cache architecture and shipped new Microsoft optimizations, audits and dashboard widgets.
period: Dec 2023 — Sep 2024
date: 2024-04-15
role: Engineer
areas: [Backend, Product]
stack: [C# / .NET, Microsoft Advertising API, React, PHP]
featured: false
rank: 13
---

## Context

Express started on Google Ads. Agencies also run Microsoft Advertising, and the Microsoft side of the suggestion pipeline still read data the old way.

## What I built

- **Migrated the full Microsoft Ads suggestion stack to the data-cache architecture** — keyword bidding, first-page bids, ad groups without RSAs, losing-ad pruning, auto-apply and tidbits — plus report-parsing and metric-aggregation fixes.
- **New Microsoft optimizations**: campaign and shared-budget increase suggestions, predictive match type, and RSA suggestions.
- **PPC Audit Score for Microsoft Ads** (launched Feb 2024) on the account and all-accounts dashboards.
- Microsoft Ads dashboard sections with **Top Elements, Performance Change and Change History** widgets, plus shareable dashboards (launched Sep 2024).
- Microsoft Ads onboarding as part of the 2023 onboarding redesign.

## Outcome

Microsoft Ads became a first-class platform in Express — the same chassis later carried Meta and LinkedIn.
