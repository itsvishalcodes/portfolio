---
title: An async media pipeline, from zero to production
summary: Video creation through a third-party API takes minutes to ingest, so the existing blocking request path couldn’t support it. I designed a self-scheduling async workflow with pre-flight validation and deduplicated uploads, and shipped it across two products and their frontends.
period: Jul — Sep 2026
date: 2026-08-15
role: Lead engineer
context: Video ads in the social campaign tools, on Meta’s Marketing API
areas: [Distributed systems, Backend, Frontend, AI]
stack: [C# / .NET, React, Redux, AWS S3, Meta Marketing API, Canvas API]
metric: { value: '~25', label: 'QA bugs closed in the 3 weeks after launch' }
diagram: async-media
featured: true
rank: 3
---

## The problem

Two products could only create image content. Supporting video meant a pipeline of *upload → wait for the provider to ingest → create the creative → create the ad*, where ingestion can take **minutes**. The existing apply was a single blocking request, so it couldn’t carry this. I also joined requirements calls with enterprise customers to pin down what “video support” had to mean in practice: upload, validation, preview, create, edit, duplicate and copy-from-existing.

## Constraints

- Ingestion time is unbounded and outside our control.
- The provider only reveals many validation rules **after** a failed submit — and one bad item fails the whole submission.
- One source video can be referenced from many placement slots.
- Image flows that every customer already used could not regress.

## Design

**Self-scheduling async operation.** Submit enqueues an apply operation. Each pass advances whatever is ready and, if items are still ingesting, **enqueues its own successor** instead of waiting for a periodic scan. In-flight items appear in the UI as `PROCESSING` rows, and when the last one lands the operation **invalidates the read cache** itself so the user sees results immediately.

**Pre-flight validation.** I derived the provider’s per-placement rules (aspect ratio, duration and friends) through live testing and encoded them in a validator that runs before submit. Every video gets a verdict against its placement group, rendered on its thumbnail, and combinations the provider would reject are blocked up front.

**Upload correctness.** Each source file uploads **once** however many slots use it; storage keys are normalized (user-chosen filenames had been silently breaking the provider’s fetch); originals are cleaned up only after ingestion is confirmed; abandoned uploads are reclaimed.

**Frontend.** A poster frame is captured client-side the moment a file is picked, with upload progress drawn inside it — the thumbnail *is* the status. AI copy generation samples frames across the whole timeline rather than one frame.

## Key decisions

- **Successor-enqueue over polling.** Latency tracks real ingestion time, and there’s no scanner to tune or to fall behind.
- **Validate before, not after.** Encoding undocumented rules is maintenance work, but it converts a slow, all-or-nothing failure into instant per-item feedback.
- **Only call it done when the provider confirms.** A later fix made the UI show success only after the provider acknowledges each item, so a dropped poll can’t produce a false “created”.

## Impact

Shipped across both products and passed founders’ review. QA filed about 25 bugs over the next three weeks and I closed nearly all of them, so the feature landed in production instead of lingering on a branch.
