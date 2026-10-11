---
title: Global filters for the Explorer drill-down
summary: A filter system for Optmyzr Explorer that compiles to the central query service’s DSL, with a new distinct-values backend operation for typeahead over huge campaign sets.
period: Jul 2026
date: 2026-07-10
role: Engineer
areas: [Frontend, Backend]
stack: [React, Redux, C# / .NET, Firebase, i18next]
metric: { value: '2 days', label: 'from design to ~25 scoped commits' }
featured: false
rank: 12
---

## Context

Explorer is Optmyzr’s account drill-down surface, being extended to Meta and LinkedIn Ads. It needed a global filter bar from a new design — one that works on accounts with very large campaign sets.

## What I built

- A filter-bar **component library** and a Redux slice with **Firebase-persisted** state.
- Compilation of the filter state into the central query service’s filter DSL.
- A new backend operation that returns **complete distinct values per attribute** (a grouped query), so pickers show every real option rather than whatever happened to be on the current page.
- Campaign-name **typeahead** with capped, virtualized options.
- Saved-views integration and strings in five languages.
- Server-side search by entity name or ID, keyset pagination (including a fix for a non-advancing cursor), and killing a runaway request loop.

## Outcome

Built in a two-day burst of about 25 scoped commits as part of the Meta & LinkedIn Explorer epic, and part of the Explorer customer beta that opened in September 2026.
