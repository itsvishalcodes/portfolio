---
title: Recovering ads a crashed worker already created
summary: When an apply worker died after Meta created the ads but before we saved them, users saw a permanently blank preview. I built a reconciliation path that recovers the real ads without ever claiming one that isn’t ours.
period: Aug 2026
date: 2026-08-25
role: Engineer
areas: [Backend]
stack: [C# / .NET, Meta Graph API, MongoDB]
featured: true
rank: 4
---

## The problem

The Campaign Launcher preview showed “No data to show” for ads the user could see live in Meta Ads Manager. The apply worker was dying in the window **between Meta creating the ads and us persisting the result**, so our document recorded nothing. The preview stayed blank forever, and re-applying created duplicate ads.

It’s a classic partial-failure problem: the external system has moved on, and our state hasn’t.

## The constraint that made it hard

Ad names on Meta are **not unique**. A naive “find ads with this name” could attribute someone else’s ad — another user’s, or an older one — to this document. Most of the work went into the guards, not the happy path.

## What I built

A reconciliation pass against live Graph state that only runs when it can be confident:

- **Candidate names only** — match against the names this document actually tried to create, nothing else.
- **Scoped by ad set**, and only for the carrier documents where that scope is meaningful.
- **Time-anchored** — the live ad’s own timestamps must prove it was created after the document.
- **Ambiguity suppression** — if a name matches more ads than it should, recover nothing rather than guess.
- **At most K per name**, counting candidates rather than all live ads.
- Cursor-following pagination and account-filtered base rows.
- Platforms (Facebook / Instagram / …) resolved from the ad set’s targeting rather than inferred from the name.

The whole path is **gated on the crash signature**, so it never runs on a healthy apply.

## Outcome

The preview now mirrors Meta’s actual state instead of our own publish flags. I wrote tests for the blind spots and documented the residual risk of name-plus-time correlation instead of presenting it as airtight. The duplicate-on-re-apply half is tracked as its own fix.

## Trade-offs I’d discuss

Why name + time correlation instead of an idempotency key (and what I’d design differently greenfield), and how to choose between failing open and failing closed when a lookup itself fails.
