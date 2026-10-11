---
title: Merging two React codebases into one
summary: Consolidated the separate social React repo into the main frontend — 355 files moved, ~580 divergent shared files reconciled with LLM-assisted review — then cleared all 13 launch blockers within a week.
period: Jul 2026
date: 2026-07-21
role: Lead engineer
areas: [Platform, Frontend]
stack: [React 16 / 18, Redux, Webpack, i18next, LLM-assisted review]
metric: { value: '13 / 13', label: 'launch blockers fixed within a week' }
featured: false
rank: 8
---

## The problem

After the product merger, the Social product still lived in its own React repo. Every shared component existed twice, fixes had to be made twice, and the two copies had quietly drifted — about **580 shared files** were duplicated or diverged. That blocked a unified build and consistent UX.

## The approach

Not a bulk copy — a staged “blend”:

1. **Move** the 355 social-only files.
2. **Dedupe** 339 byte-identical files.
3. **Reconcile** ~245 diverged shared files in reviewed batches: adopt the main-tree copy where safe, graft social-only behavior where needed. I used **LLM-assisted diff review** to scale the comparison, with a human decision on every file.
4. Unify the i18n catalogs and wire the Webpack bundles.
5. Bring the social code down from React 18 to **React 16 semantics** — where, for example, a component returning `undefined` throws instead of rendering nothing.

## The fallout

QA filed **13 launch blockers in a single day**. I root-caused and fixed all of them within a week: account-picker scoping, alert-tray mounting, request races where the newest fetch must win, and React 16 render crashes.

## Outcome

One codebase and one bundle pipeline for both products. Double maintenance of shared components ended.
