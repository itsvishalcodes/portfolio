# portfolio.itsvishalcodes.com

My personal portfolio — experience, case studies, side projects and skills.

**Stack:** [Astro](https://astro.build) 7 (static output, content collections) · Tailwind CSS v4 · TypeScript · self-hosted Geist fonts · deployed to GitHub Pages with GitHub Actions.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

Needs Node 22.12+.

## Where things live

| What | File |
| --- | --- |
| Name, email, links, headline stats, nav | `src/data/site.ts` |
| Roles and the 2022 → 2026 timeline | `src/data/experience.ts` |
| Side projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Education and achievements | `src/data/education.ts` |
| Case studies (one Markdown file each) | `src/content/work/*.md` |
| Colors, fonts, shared styles | `src/styles/global.css` |
| Social preview image | `public/og.png` |

### Add a case study

Create `src/content/work/<slug>.md`:

```yaml
---
title: What I built
summary: One or two sentences for the card.
period: Jan — Mar 2027
date: 2027-03-01        # used for sorting, newest first
role: Lead engineer
areas: [Backend, AI]    # any of: AI, Backend, Frontend, Product, Platform
stack: [C# / .NET, React]
metric: { value: '3×', label: 'faster something' }   # optional
featured: false         # true = shown in the home-page grid (keep it to 6)
rank: 100               # order among featured cards
---

## The problem
...
```

It appears at `/work/<slug>/` and in the list on `/work/`. The build fails if the frontmatter doesn't match the schema in `src/content.config.ts`.

### Show a résumé button

Put the PDF in `public/` and set `resumeUrl` in `src/data/site.ts`.

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.

One-time setup:

1. **GitHub:** repo → Settings → Pages → Source: **GitHub Actions**. Custom domain: `portfolio.itsvishalcodes.com`, then tick **Enforce HTTPS** once the certificate is issued.
2. **DNS (Porkbun):** a `CNAME` record for host `portfolio` pointing to `itsvishalcodes.github.io`. Remove any existing record for `portfolio` first.

`public/CNAME` keeps the custom domain set on every deploy.
