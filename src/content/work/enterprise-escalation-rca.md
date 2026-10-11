---
title: One symptom, three root causes
summary: Enterprise customers were fully blocked by one error message. I traced it to three unrelated causes — missing data, a swallowed error shape, and a bad field mapping — and turned a hard failure into a self-service recovery path.
period: Sep — Oct 2026
date: 2026-09-15
role: Engineer
context: Ad creation on Meta for enterprise agency accounts
areas: [Reliability, Backend]
stack: [C# / .NET, PHP, React, Redis job queues, Meta Graph API]
metric: { value: '672', label: 'missing assets linked by one refresh for one customer' }
featured: false
rank: 12
---

## The symptom

Several enterprise customers hit a terminal error in the Campaign Launcher: *“No Facebook Pages are linked to this Meta login”* — despite having full Page access on Meta’s side. They could not create ads at all.

## Three different causes

1. **Pages were never linked.** Linking an ad account never linked its Pages, and no Page-refresh job had ever run for these accounts. One refresh linked **672** previously missing assets for a single customer.
2. **One unreadable Page emptied everything.** Meta returns *two different error shapes* for Pages you can’t read. Our filter matched only one, so a single unreadable Page silently emptied the entire Instagram listing — while the job still reported success.
3. **Threads placements were mis-mapped** to Facebook position values, so some variants mapped to no valid placement and failed without saying so.

## The fix

- Opened the Page picker with a **refresh path** instead of hard-blocking at zero linked Pages, and linked Instagram accounts alongside Pages on refresh.
- Recorded success **per persisted batch**, so the job fails only when nothing at all succeeded.
- Rejected falsy job IDs and caught a synchronous request-construction throw that had left the UI spinner stuck forever.
- Mapped Threads to its own position field, and made sure the ad path never creates an ad without a creative or fails one silently.

## The rest of the month

The same escalations surfaced more Meta ad-creation gaps, which I fixed in a run of hotfixes:

- **Instagram identity**: when Meta rejected an ad for a missing Instagram account, fall back to the Page’s linked Instagram account instead of failing.
- **Page pickers** that show “Page name (location)”, so agencies with dozens of same-named location Pages pick the right one.
- **Call Now ads** keep their phone number on edit, and primary text stays separate from the description.
- **Goal validation**: optimization goals are checked against campaign-level budget and bid rules before Meta sees them.
- **Honest async status**: a video ad isn’t shown as created until Meta confirms it, and failed submits are reported even when the log has no error line.
- Two production regressions caught and fixed: a serialization change that made the ad analysis view fail for every Meta account, and 15 missing currencies that broke three tools for accounts billed in them.

## Outcome

The blocked customers could create ads again, and the main failure became self-service instead of a support escalation. The recovery-path hardening went through four rounds of code review before merge; most of the follow-up fixes shipped in a single hotfix release.
