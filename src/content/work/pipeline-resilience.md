---
title: Making a multi-tenant pipeline survive its own scale
summary: A daily job that processes every customer account against rate-limited third-party APIs kept failing under load. I added cross-process backoff, adaptive concurrency, per-unit fault isolation and real observability — so it degrades gracefully instead of falling over.
period: 2023 — Sep 2024
date: 2024-09-01
role: Owner
context: Daily recommendation engine for a B2B SaaS, calling the Google Ads, Microsoft, Meta and LinkedIn APIs
areas: [Distributed systems, Reliability, Backend]
stack: [C# / .NET, Redis, MongoDB, AWS S3, New Relic, Slack API]
metric: { value: 'Every account', label: 'processed daily — rate-limit storms now self-throttle instead of failing runs' }
diagram: pipeline
featured: true
rank: 1
---

## The problem

Every day, a pool of C# workers computes recommendations for every customer account by pulling data from third-party advertising APIs. Those APIs enforce per-developer quotas, so throughput isn't ours to choose. As the customer base grew, the pipeline:

- kept tripping the provider’s `RESOURCE_EXHAUSTED` quota errors, and each worker retried independently — making the storm worse;
- occasionally ran a worker up to **100 GB of memory** (two tracked incidents);
- aborted an account’s entire run when any one of ~20 recommendation modules threw;
- failed **silently** — nobody knew an account had been skipped until a customer noticed.

## Constraints

- Many worker processes on several machines, with no shared view of quota pressure.
- Load follows the customers’ business hours (mostly US time zones), so the safe concurrency changes through the day.
- Modules are owned by different people and change often; any one can regress.

## Design

**Shared backpressure.** When any worker sees a quota error it sets a short-lived flag in Redis. Every worker checks that flag before calling the API and backs off while it’s set, so the whole fleet slows down together instead of each process hammering the API on its own schedule.

**Adaptive concurrency.** The degree of parallelism is computed, not configured: it follows US-Eastern time of day (more off-peak, less at peak) and **halves automatically** if there was quota exhaustion in the last 30 minutes. Accounts are processed in priority order, so the most important ones finish first when capacity is short.

**Fault isolation by construction.** I restructured the run so each module executes in its own boundary. A failing module now skips *that module* for *that account* and is reported; the rest of the run completes. That also changed retry semantics — a partial run is a valid run, and only the failed unit needs re-work.

**Observability.** Run state goes to MongoDB, and a daily digest lists processed counts per platform plus a CSV of every account that hasn’t been processed for 3+ days. That later moved to New Relic, together with a reusable exception-wrapper library for C# services that other teams adopted.

## Key decisions

- **Coordinate through Redis rather than a central rate limiter.** A token-bucket service would have been more precise, but a shared flag plus local backoff was a small, low-risk change to a running system and fixed the failure mode that mattered: synchronized retries.
- **Isolate at the module level, not the account level.** Account-level retries would have re-run 19 healthy modules to fix one. Module isolation made failures cheaper and made ownership of each failure obvious.
- **Make "skipped" visible before making it rare.** The 3-day-unprocessed report came first, so every later fix could be measured against it.

## Impact

Quota storms self-throttle instead of erroring out, a broken module no longer costs a whole account’s run, and unprocessed accounts surface the next morning instead of weeks later. I handled the tracked production incidents — memory blow-ups and pager escalations — through to resolution. The same pipeline later took on Meta and LinkedIn as well.
