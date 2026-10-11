---
title: One navigation for every tool
summary: Shipped the platform’s unified side navigation across every tool — including a Webpack plugin that renders React components inside legacy PHP pages — collapsing two navigation codebases into one.
period: '2023'
date: 2023-06-15
role: Engineer (intern → SDE)
areas: [Frontend, Platform]
stack: [React, Webpack, PHP, CoffeeScript]
featured: false
rank: 14
---

## The problem

Optmyzr is a mix of server-rendered PHP pages and React apps. Navigation lived in two divergent codebases, so every new tool had to be wired in twice, and the two drifted.

## What I built

- A **Webpack plugin** that lets React components render inside legacy PHP pages, so one React navigation could serve both worlds.
- The unified side navigation itself: product picker, tool tags, platform icons, links to prebuilt Rule Engine strategies, and a client-monitoring menu.
- An old ↔ new menu preference switch for a safe rollout.

## Outcome

Opt-in beta in June 2023, on every page by September 2023. One navigation codebase, and a reusable path for bringing React into PHP pages without a rewrite.
