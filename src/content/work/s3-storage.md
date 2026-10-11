---
title: Cutting 10.8 TB of S3 storage without breaking downloads
summary: Put unbounded applied-results data on lifecycle expiry — two prefixes at 8 TB and 2.8 TB — while keeping the “download my applied changes” feature working.
period: Nov 2024 — Mar 2025
date: 2025-03-01
role: Engineer
areas: [Platform, Backend]
stack: [AWS S3, C# / .NET, PHP]
metric: { value: '10.8 TB', label: 'reclaimed, and growth flattened for good' }
featured: false
rank: 9
---

## The problem

Two S3 prefixes holding applied-optimization results and URL-check data had grown without bound to **8 TB and 2.8 TB** — a real line item on the AWS bill, and growing every day.

## The constraint

Customers rely on downloading CSVs of the changes Optmyzr applied for them. Deleting data was easy; deleting it without breaking that feature was the job.

## What I did

- Moved the CSV upload path to a bucket with a **3-month expiry lifecycle**.
- Zipped the large per-run operation logs.
- Fixed optimization-history records to point at the right S3 paths.
- Kept downloads working from the new location, with a graceful message when a file has expired.

## Outcome

10.8+ TB reclaimed. More importantly, the growth curve flattened permanently — data now expires by policy instead of accumulating.
