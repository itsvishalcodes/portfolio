---
title: Optmyzr Express v2 — built as an intern, shipped to everyone
summary: A one-click PPC optimization product built end to end — React/Redux app, ~20 suggestion widgets and a C# suggestion pipeline — that replaced the legacy tool for all users within 7 months.
period: Aug 2022 — Mar 2023
date: 2023-03-01
role: Core engineer (intern)
areas: [Frontend, Product, Backend]
stack: [React, Redux, C# / .NET, AWS S3, Google Ads API, Amazon Ads API]
metric: { value: '5×', label: 'usage growth after launch' }
featured: true
rank: 3
---

## The problem

Optmyzr’s “Express” one-click optimization tool was a legacy PHP/CoffeeScript-era surface. The company wanted a modern product where agencies could review and apply optimization suggestions across Google, Microsoft and Amazon Ads in one place. I had joined as an intern three months earlier.

## What I built

### The app

- Designed the **Redux store** and app shell, with **per-widget error boundaries** — one broken widget can never sink the page.
- **Windowed list virtualization** that keeps 1,000+-item suggestion lists at a steady 60 fps.
- Persistent snooze / archive / apply flows, filters, an RSA-creation form with AI text variations, and a small gamified streak counter.

### ~20 suggestion widgets

Keyword bidding, age and gender bid adjustments, ad groups without RSAs, pausing losing ads with metric deltas, call and callout extension recommendations, campaign budget and tROAS / tCPA recommendations, shopping bids, Performance Max widgets, and Amazon keyword suggestions (positive, negative, non-converting, product targets).

### The pipeline

On the backend I worked on the C# suggestion pipeline that computes suggestions per account and ships them through S3, plus the apply endpoints — iterating through several founder-review rounds to launch.

## Outcome

The new design went live for **all users in March 2023** with automatic redirects from the old tool, and usage grew 5×.

I kept shipping on it after launch — custom conversions in the keyword-bidding suggestion, smarter “Fix Conflicting Negative Keywords” logic that understands match types and account-level negatives, and a “Winning by &lt;metric&gt;” tag on the pause-losing-ads suggestions. The architecture became the chassis the company kept extending — to Microsoft Ads in 2024 and Meta and LinkedIn in 2026. I was converted from intern to full-time on the back of it.
