---
title: Keeping a Google Ads pipeline alive at its own scale
summary: Hardened the daily pipeline that computes optimization suggestions for every customer account — Redis-coordinated rate-limit backoff, dynamic parallelism, per-widget fault isolation and real observability.
period: 2023 — Sep 2024
date: 2024-09-01
role: Owner
areas: [Backend, Platform]
stack: [C# / .NET, Redis, MongoDB, Google Ads API, New Relic, Slack API, AWS S3]
metric: { value: '100 GB', label: 'memory incidents handled — and the pipeline stopped failing silently' }
featured: true
rank: 2
---

## The problem

Optmyzr computes optimization suggestions for every customer account, every day, in a C# daemon that calls the Google Ads API (and later Microsoft, Meta and LinkedIn). At scale it kept tripping Google’s `RESOURCE_EXHAUSTED` rate limits, occasionally ballooned memory — two tracked incidents where an instance hit **100 GB** — and a single failing widget could abort an entire account’s run.

Worse, failures were invisible until a customer or a pager noticed.

## What I built

### Backoff that coordinates across processes

A shared Redis key marks recent exhaustion. Threads that see it sleep before retrying, and **parallelism automatically halves** if exhaustion happened in the last 30 minutes. I made the Redis client usage thread-safe along the way.

### Parallelism that follows the clock

Load is a function of US-Eastern time of day, so parallelism is too: more at off-peak, less at peak. Account processing was re-prioritized so the accounts that matter most run first.

### Fault isolation by construction

I restructured the pipeline so **every widget is isolated**. One widget failing now skips that widget, not the whole account. That also changed the retry semantics: a partial run is a valid run.

### Observability

- MongoDB-backed run monitoring with **daily Slack digests**: per-platform processed counts and a CSV of accounts unprocessed for 3+ days.
- Later moved to **New Relic**, with a reusable exception-wrapper library for C# services that other teams adopted.

## Outcome

Rate-limit storms now self-throttle instead of erroring out, widget failures are non-fatal, and unprocessed accounts surface daily instead of weeks later. I handled the tracked production incidents — memory events and Microsoft Ads pager escalations — through to resolution. The same pipeline later carried Meta and LinkedIn optimizations.
