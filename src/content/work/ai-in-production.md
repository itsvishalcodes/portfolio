---
title: Making LLM tool-calling reliable in production
summary: The model is rarely the bottleneck — schemas, context routing and truncation are. I designed versioned tool schemas for an in-product assistant, fixed silent capability gaps, built multimodal generation, and rolled out search backed by vector retrieval.
period: Nov 2024 — 2026
date: 2026-06-15
role: Engineer
context: Sidekick, the AI assistant inside a B2B SaaS, acting on customers’ ad accounts
areas: [AI, Backend]
stack: [LLM tool calling, MCP, Prompt engineering, Vector search, C# / .NET, React]
metric: { value: '1,000+', label: 'search invocations a day' }
featured: true
rank: 5
---

## Context

The product ships an AI assistant that answers questions and takes actions by calling tools against a customer’s accounts. My work was the part that decides whether that works for real users: the contracts the model calls, the context it receives, and what happens when data doesn’t fit the window.

## What I built

### Versioned tool schemas

When recommendations went cross-platform, I authored the tool / function schemas the model uses to fetch and act on them, kept them versioned across production v1 and v2 prompt sets, and kept the matching MCP tool definitions in sync with the backend arguments.

**The bug class worth knowing about:** a single missing enum value made **entire platforms unreachable** to the model. Nothing errored — the model simply had no way to ask. I traced that class of silent capability gap end to end and closed a cluster of related QA bugs.

### Context routing that survives truncation

Account lists sent to the model are capped. Sorted naively, whole platforms fell off the end. I switched to **round-robin interleaving by platform, then capping**, so every platform survives truncation, and made account-plus-platform drill-down work in every context.

### Multimodal generation

Copy generation for video now **samples frames across the whole timeline** instead of a single frame, so the output reflects the full creative.

### Retrieval

Rolled out global search across **nine tools**, backed by the company’s in-house vector search, cutting navigation from 5+ clicks to 2. It now serves 1,000+ invocations a day.

### Summaries

Prompt design and caching (keyed on the date range) for AI summaries of competitor data and of automation rules, iterated through founder review.

## Also

- Used LLM-assisted diff review to reconcile ~580 diverged files during a [codebase merge](/work/repo-consolidation/).
- Built a [cost-bounded LLM verification service](/work/smart-url-checker/) with an eval set and evidence checks in code.

## Takeaway

Treat schemas and context as an API with a contract, version them, and test for what the model *can’t* do — those failures are silent unless you go looking.
