---
title: A product built 0 → 1, shipped to every user
summary: Designed the frontend architecture and worked on the backend generation pipeline for a new recommendation product — ~20 independent modules, virtualized lists at 60 fps, per-module fault isolation — and replaced the legacy tool for all users in 7 months, as an intern.
period: Aug 2022 — Mar 2023
date: 2023-03-01
role: Core engineer (intern)
context: “Optmyzr Express”, one-click optimization recommendations across Google, Microsoft and Amazon Ads
areas: [Frontend, Backend, Performance & cost]
stack: [React, Redux, C# / .NET, AWS S3]
metric: { value: '5×', label: 'usage growth after launch' }
featured: true
rank: 4
---

## The problem

The company’s one-click recommendation tool was a legacy server-rendered surface that was hard to extend. The goal was a new product where customers review and apply recommendations from many independent generators in one place — and to retire the old tool entirely. I had joined as an intern three months earlier.

## Design

### Frontend architecture

- **State design.** I designed the Redux store around independent modules: each owns its data, loading and error state, and user actions (apply, snooze, archive) are persisted and replayed consistently across all of them.
- **Fault isolation.** Every module renders inside its own error boundary, so one broken generator can never take down the page — the same principle I later applied to the backend pipeline.
- **Performance.** Some accounts produce lists of 1,000+ items. Windowed virtualization keeps them at a steady **60 fps**, including expand/collapse state that survives virtualization.

### ~20 modules

Bidding, bid adjustments, coverage gaps, pruning under-performers with metric deltas, budget and target recommendations, and more — each a self-contained generator + UI pair behind a shared contract, which is what let the product keep growing after launch.

### Backend

I worked on the C# pipeline that generates recommendations per account and ships them through S3, and on the apply endpoints, through several founder-review rounds.

## Impact

Launched to **all users in March 2023** with automatic redirects from the old tool; usage grew 5×. The module contract became the chassis the company kept extending — to a second ad platform in 2024 and two more in 2026. I was converted from intern to full-time on the back of it.

After launch I kept shipping on it: conversion-aware bidding, conflict detection that understands match types and account-level rules, and “winning by &lt;metric&gt;” explanations on pruning recommendations.
