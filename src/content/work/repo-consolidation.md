---
title: Merging two diverged codebases without regressions
summary: Two React applications had forked years earlier and drifted — ~580 shared files duplicated or diverged. I planned and executed a staged merge (355 files moved, 339 deduplicated, ~245 reconciled with LLM-assisted review), then fixed all 13 launch blockers within a week.
period: Jul 2026
date: 2026-07-21
role: Lead engineer
context: Folding a separate product’s frontend into the main monorepo after a company-wide product merger
areas: [Frontend, Reliability]
stack: [React 16 / 18, Redux, Webpack, i18next, LLM-assisted review]
metric: { value: '13 → 0', label: 'launch blockers, cleared within a week' }
featured: true
rank: 6
---

## The problem

After a product merger, one product’s React app still lived in its own repository. Every shared component existed twice, fixes had to land twice, and the two copies had quietly drifted: about **580 shared files** were duplicated or diverged. That blocked a unified build and a consistent experience.

## Constraints

- Both products were live; neither could regress.
- The two apps ran **different React major versions** (18 vs 16) with different render semantics.
- Separate i18n catalogs, Webpack entry points and global state.

## Approach

Not a bulk copy — a staged blend where each stage is mechanically verifiable:

1. **Move** the 355 files that existed only in the second app.
2. **Deduplicate** the 339 byte-identical files.
3. **Reconcile** the ~245 diverged shared files in reviewed batches — adopt the main-tree version where safe, graft the second app’s behavior where it wasn’t. I used **LLM-assisted diff review** to summarize each divergence, with a human review of every batch.
4. Unify the i18n catalogs and wire the bundles.
5. Port the second app’s code down to **React 16 semantics** — for example, a component returning `undefined` throws in 16 where 18 renders nothing.

## Fallout

QA filed **13 launch blockers in one day**. I root-caused and fixed all of them within a week: scoping bugs in a shared account picker, a notification tray that was never mounted, request races where the newest response must win, and React 16 render crashes.

## Impact

One codebase and one bundle pipeline for both products; double maintenance of shared components ended.

## What I’d do differently

Add lint rules for React-18-only patterns *before* the merge rather than after the crashes, so render-semantics bugs fail the build instead of reaching QA.
