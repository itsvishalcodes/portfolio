---
title: Reconciling state after a worker dies mid-operation
summary: A worker crashed after an external system had created entities but before we saved them — leaving users a permanently broken view and duplicates on retry. I built a recovery path that rebuilds our state from the external system, without ever claiming an entity that isn’t ours.
period: Aug 2026
date: 2026-08-25
role: Engineer
context: Campaign publishing workflow on top of Meta’s Graph API
areas: [Distributed systems, Reliability, Backend]
stack: [C# / .NET, MongoDB, Meta Graph API]
diagram: reconciliation
featured: true
rank: 2
---

## The problem

Publishing a batch of ads is a multi-step operation against an external API. Workers occasionally died in the window **after the external system had created the entities but before we persisted the result**. Our document recorded nothing, so the user saw an empty preview forever — and re-publishing created duplicates.

Classic partial failure: the source of truth has moved on and our state hasn’t.

## Constraints

- **No idempotency key.** The external API offered nothing we could have attached up front to correlate later. Entity **names are not unique** — other users, and older runs, can have identical names in the same account.
- Listing endpoints are paginated with cursors and include entities we must never touch.
- The fix had to be safe to ship into a running system with existing broken documents.

## Design

Recovery only runs when the document carries the **crash signature** (it started publishing, never finished), so healthy publishes never enter this path. Then it narrows candidates through a funnel where every stage can only remove matches:

1. Scope to the parent container the document targeted, not the whole account.
2. Keep only names this document actually tried to create.
3. Require the entity’s own creation time to be **after** the document was created.
4. If a name matches more entities than the document intended, **recover none of them** — suppress ambiguity instead of guessing.
5. Recover at most **K per name**, counting only candidates rather than everything live.

Pagination follows the cursor to the end, and recovered entities get their attributes from the external system’s own data rather than being inferred from names.

## Key decisions

- **Fail closed.** When the evidence is ambiguous the user sees nothing recovered, which is the state they were already in. Claiming someone else’s entity would be a far worse bug than not recovering one.
- **Gate on the crash signature.** It keeps a heuristic path away from every healthy publish.
- **Document the residual risk.** Name-plus-time correlation is strong but not a proof; I wrote that down and wrote tests for the blind spots instead of calling it airtight.

## What I’d do differently in a greenfield design

Persist an intent record with a client-generated idempotency token *before* the first external call, and write it into a field the external system echoes back. Recovery then becomes an exact lookup, and duplicates on retry disappear by construction. The duplicate-on-retry half is now tracked as its own fix.

## Impact

Affected documents now mirror the external system’s real state instead of our own publish flags, and the recovery can run safely on old broken documents.
