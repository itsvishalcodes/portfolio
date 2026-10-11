---
title: Extending a rule engine without breaking stored rules
summary: Turned a customer feature request into general relative-date operators for a rule engine, backward compatible with every stored rule — and extended a weather-driven automation tool to a new platform with fuzzy geo matching.
period: May — Jun 2026
date: 2026-06-10
role: Engineer
context: The customer-facing Rule Engine and weather-based automation
areas: [Backend, Frontend]
stack: [C# / .NET, React, OpenWeather API, Meta Marketing API]
metric: { value: 'Released', label: 'customer feature request delivered' }
featured: false
rank: 11
---

## The request

A tracked customer feature request asked for alerts when a Meta campaign’s end date is approaching. Optmyzr’s Rule Engine had no concept of date-type attributes or relative-date comparison for Meta.

## What I built

### Reusable date operators

I exposed campaign and ad-set start / end times as date attributes and designed **new operators** that work for any date attribute, not just this one:

- **is within next N days** (forward-looking)
- **elapsed in last N days**
- valueless **is elapsed / is not elapsed**

All with full backward compatibility for every stored rule and strategy, plus date-picker UX and validation.

### Weather optimization for Meta

In parallel I extended the weather-optimization tool to Meta Ads: ad-set-level scope selection, mapping OpenWeather locations to Meta geo targets with **fuzzy city matching**, wiring the predefined pause / enable recipes, server-side pagination and search for the campaign list, and an AI summary of the weather rules.

### “Active but not delivering” alerts

Later I found Meta entities in a `WITH_ISSUES` state passed every status filter while not actually serving, so alerts silently missed them. I brought that state into the alert scope.

## Outcome

The feature request shipped as **Released** — customers can now build “campaign ending within 7 days” alerts — and the operators are general Rule Engine capabilities. The weather tool passed founders’ review and shipped for Meta.
