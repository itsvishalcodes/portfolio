---
title: Video ads for Meta, from zero to production
summary: Took Optmyzr’s social campaign tools from image-only to full video support — async Meta ingestion, pre-flight placement validation, and AI copy that reads the whole video.
period: Jul — Sep 2026
date: 2026-08-15
role: Lead engineer
areas: [Product, Backend, Frontend, AI]
stack: [C# / .NET, React, Redux, Meta Marketing API, AWS S3, Canvas API]
metric: { value: '~25', label: 'QA bugs closed in 3 weeks after launch' }
featured: true
rank: 1
---

## The problem

Optmyzr’s Social Campaign Manager and Campaign Launcher could only create image ads. Video is the dominant creative format on Meta, so customers had to leave the product to create or manage video ads — a visible hole in something sold as full Meta coverage. I joined requirements calls with enterprise customers to scope what “video support” had to mean in practice.

The goal: video end to end across both tools — upload, validation, preview, creation, editing, duplication and copy-from-existing — without disturbing the image flows everyone already relied on.

## What I built

### An async apply for a slow pipeline

Meta’s video path is *upload → poll for ingestion → create creative → create ad*, and ingestion can take minutes. The existing blocking apply couldn’t survive that. I built a new async apply operation where **each pass queues its own successor** instead of waiting for a scheduled scan, surfaced in-flight ads as `PROCESSING` rows in the Ads tab, and had the apply expire the Ads-tab cache itself once ads landed.

### Pre-flight placement validation

Meta only reveals its per-placement video rules **after** you apply — a wrong aspect ratio or duration for one placement fails the whole submission. I derived those rules through live testing and built a validator that judges every video against its assigned placement group before submit. Verdicts render as pills on the thumbnail with “runs on N placements” counts, and combinations Meta would reject are blocked up front.

### Upload correctness

- Each source video is uploaded to Meta **once**, no matter how many placement slots reference it.
- Absolute S3 URLs as the fetch source, a dedicated storage prefix with query strings stripped (user-picked filenames had been silently breaking Meta’s fetch).
- Gated cleanup after Meta ingests, plus reclamation of uploads discarded mid-session.

### UX and AI

An instant poster is captured client-side at pick time, with a determinate progress bar rendered *inside* the poster — the thumbnail is the upload status. I also extended AI ad-copy generation to **sample frames across the video’s timeline** rather than a single frame, so the copy reflects the whole creative.

## Outcome

Shipped and passed founders’ review. QA then filed roughly 25 bugs over three weeks and I closed nearly all of them — the feature landed in production rather than lingering on a branch.

## Happy to go deeper on

- Reverse-engineering undocumented platform rules from apply failures, then turning them into a validator.
- Choosing fail-open vs. fail-closed for each guard.
- Why one media kind per multi-variation ad keeps Meta’s creative model sane.
