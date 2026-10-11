---
title: A hierarchical multi-tenant dashboard, POC to GA
summary: Owned the delivery epics for a dashboard that rolls thousands of accounts up into portfolios and groups — data model, cross-service APIs, access-loss handling and a fast hierarchical UI — and extended it to new platforms without a rewrite.
period: Nov 2024 — Jul 2025
date: 2025-06-15
role: Delivery-epic owner
context: The All Portfolio Dashboard — agencies managing many client accounts at once
areas: [Frontend, Backend]
stack: [React, Redux, PHP, C# / .NET, MySQL, MongoDB]
metric: { value: '5,000+', label: 'portfolios across 1,000+ customers' }
featured: false
rank: 7
---

## The problem

The product’s dashboards were single-account, but customers manage dozens of accounts grouped into client portfolios and portfolio groups. Portfolio-level tooling was a strategic bet — and a second product line had to fit the same model at the same time.

## What I owned

The launch was a team effort — seven engineers were credited — and I owned the delivery epics from first POC to GA: **Basic UI → Attributes → end-to-end → UI fit & finish → access-loss handling → social & budget portfolio integration → out-of-beta punch list.**

## What I built

- The page across the stack: PHP controller and routing, the Redux architecture, and an expandable **portfolio-group → portfolio → account** table with sticky columns, server-driven sorting, filters, date ranges and footer aggregation.
- The portfolio lifecycle — create, edit, delete with duplicate-name guards, mixed-currency handling, and cascade deletion across groups, pockets and budget clients.
- **Access-loss detection**: backend flags propagated to the UI with a warning side-tray, so lost account access is visible instead of silently wrong.
- Social portfolios: service endpoints for Meta, Instagram and LinkedIn, a search/social split inside portfolio groups, and onboarding that auto-creates portfolio groups.
- Plan gating for trial and essential tiers, default views, preference persistence, loading states and accessible locked states.

## Outcome

Launched publicly as the **“Portfolios for Search”** beta in May 2025, out of beta in **June 2025**, and the default view for users who prefer portfolios. The search/social portfolio model I built carried the later “one portfolio creator across Search and Social” — whose design doc and implementation I also did.
