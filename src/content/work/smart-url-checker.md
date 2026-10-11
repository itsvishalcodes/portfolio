---
title: A cost-bounded LLM pipeline for content verification
summary: A standalone service that finds landing pages that load fine but contradict the ads pointing at them — and estimates the spend at risk — built as a funnel so most pages never reach an LLM.
period: Sep — Oct 2026
date: 2026-10-02
role: Builder — internal hackathon, Sep 29 – Oct 1
context: Smart URL Checker
areas: [AI, Distributed systems, Backend]
stack: [Python, FastAPI, Playwright, MongoDB, Redis, S3 / MinIO, OpenAI & Gemini APIs, Docker]
featured: false
rank: 16
---

## The idea

Optmyzr’s existing URL Checker finds landing pages that 404 or say “out of stock”. It can’t tell when a page that *works* doesn’t **match** its ad: the ad says “50% off” and the page shows full price; a keyword about one product lands on the homepage; a page returns 200 OK but is effectively an error page.

For an internal hackathon I built a service that finds those mismatches and puts a money figure on them — with the two hard parts being **accuracy** (false alarms kill trust) and **cost at scale**.

## How it works

- **A funnel.** Cheap stages run first — fetch, render, extract structured facts — and each one keeps work away from the next, more expensive stage. Most pages never reach an LLM.
- **Fetch and judge are separate.** Artifacts are stored; the judge reads stored artifacts, never a live page.
- **Evidence is checked in code.** A finding’s quoted evidence must appear verbatim in the page text, or the verdict is downgraded to “can’t tell”. “Can’t tell” never alerts and never adds money.
- **Safe fetching.** An SSRF guard on every request and redirect hop, per-domain rate limits, and no CAPTCHA or bot-protection bypass.
- **Honest numbers.** Spend at risk (upper bound) and estimated waste (conservative) are reported separately.
- An eval set and a spend guard that refuses paid model calls near a hard budget cap.

## Outcome

A working demo: one large account’s mismatches with what they cost, plus a projected cost of running it for every account every few days.

I’m now wiring it into Optmyzr’s Landing Page URL Checker for Google and Microsoft Ads — a queue worker with a Redis lock, run state in MongoDB, page snapshots in S3, and a React results page that shows each mismatch with the spend at risk. That integration is in progress behind a feature flag.
