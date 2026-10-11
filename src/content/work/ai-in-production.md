---
title: AI features in a production B2B product
summary: Function-calling schemas for the in-product AI assistant, platform-aware routing, AI summaries, multimodal ad copy, and global search across nine tools backed by vector search.
period: Nov 2024 — 2026
date: 2026-06-15
role: Engineer
areas: [AI, Backend, Frontend]
stack: [LLM tool calling, MCP, Prompt engineering, Pinecone-backed search, C# / .NET, React]
metric: { value: '1,000+', label: 'global-search invocations a day' }
featured: true
rank: 6
---

## Context

Optmyzr ships an in-product AI assistant, Sidekick, that answers questions and acts on a user’s ad accounts by calling tools. Most of my AI work is the unglamorous part that decides whether that works in production: the tool schemas the model calls, the context it gets, and what happens when data doesn’t fit.

## What I built

### Function-calling schemas for cross-platform optimizations

When Express went cross-platform, I exposed Meta and LinkedIn optimization suggestions to the assistant. I authored and versioned the **tool / function schemas** across production v1 and v2 prompt sets, and the matching MCP tool definitions.

The interesting bug: a missing enum value made **entire ad platforms unreachable to the model** — it simply had no way to ask for them. Nothing errored. I traced that class of silent capability gap end to end and closed a cluster of related QA bugs.

### Platform-aware routing that survives list caps

Account lists sent to the model are capped. Sorted naively, social accounts fell off the end. I switched to **round-robin interleaving by platform, then capping**, so every platform survives truncation — and made account + platform drill-down work in every context.

### AI summaries

- **Competitor data summary** — prompt design, caching keyed on date range, founder-review iterations.
- **Weather rules summary** for the Meta weather-optimization tool.
- The first end-to-end **AI widget on the Portfolio Dashboard** (Nov 2024).

### Multimodal ad copy

Extended AI ad-copy generation to **sample frames across a video’s timeline** instead of a single frame, so generated copy reflects the whole creative.

### Global search

Rolled out a global search bar across **9 social tools**, backed by Optmyzr’s in-house Pinecone vector search — navigation went from 5+ clicks to 2, and it now serves 1,000+ invocations a day.

### LLM-assisted migration

When merging two React codebases, I used LLM-assisted diff review to reconcile ~580 diverged shared files in reviewed batches — see the [repo consolidation](/work/repo-consolidation/) write-up.

## What I learned

The model is rarely the bottleneck. Schemas, enums, truncation order and caching decide whether an AI feature is useful — and those failures are silent unless you go looking.
