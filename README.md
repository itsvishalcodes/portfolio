# portfolio.itsvishalcodes.com

My personal portfolio: experience, case studies, side projects and skills.

**Stack:** [Astro](https://astro.build) 7 (static output, content collections) · Tailwind CSS v4 · TypeScript · self-hosted Geist fonts · GitHub Pages, deployed by GitHub Actions.

## Updating the site

Every push to `main` redeploys the site in about a minute. The loop:

```powershell
cd C:\projects\portfolio
npm run dev        # http://localhost:4321, reloads as you save
# ...edit files...
npm run build      # optional: catches mistakes before you push
git add -A
git commit -m "Add <thing>"
git push
```

Watch the deploy at [Actions](https://github.com/itsvishalcodes/portfolio/actions). If an edit is invalid, the run fails with a red ✗ and the live site keeps the previous version, so a bad edit never takes the site down.

Needs Node 22.12+. Run `npm install` once after cloning.

### Where things live

| To add or change… | Edit |
| --- | --- |
| A side project | `src/data/projects.ts` |
| An achievement (contest rank, certification, award) | `src/data/education.ts` → `achievements` |
| Education, community roles | `src/data/education.ts` |
| A role, or an entry on the 2022 → now timeline | `src/data/experience.ts` → `roles` / `journey` |
| A piece of work with its own page | a new file in `src/content/work/` |
| The “How I work” principles | `src/data/principles.ts` |
| Skills | `src/data/skills.ts` |
| Name, email, social links, headline stats, nav | `src/data/site.ts` |
| Architecture diagrams | `src/components/diagrams/` |
| Colors, fonts, shared styles | `src/styles/global.css` |
| Social preview image | `public/og.png` (1200×630) |

### Add a side project

Add an entry to the `projects` array in `src/data/projects.ts`:

```ts
{
  name: 'RAG Search',
  blurb: 'One-line pitch shown under the name.',
  details: ['What it does and what was hard.', 'A second paragraph if needed.'],
  stack: ['Python', 'FastAPI', 'pgvector'],
  status: 'Live',          // 'Live' | 'Building' | 'Shipped' | 'Retired' | 'Open source'
  year: '2026',
  links: [{ label: 'Source', href: 'https://github.com/itsvishalcodes/...' }],  // optional
},
```

Older, smaller projects go in the `earlier` array in the same file. They show as one-line links under “From college”.

### Add an achievement

Add one line to `achievements` in `src/data/education.ts`:

```ts
{ value: 'AWS SAA', label: 'AWS Certified Solutions Architect – Associate', href: 'https://...' },  // href optional
```

`value` is the big highlighted text, `label` the line under it. Three fit in a row; a fourth wraps to a new row.

### Add a case study

Copy an existing file in `src/content/work/` and rename it. The filename becomes the URL, so `rag-search.md` is served at `/work/rag-search/`. Then edit the header:

```yaml
---
title: What I built, framed as the engineering problem
summary: One or two sentences for the card.
period: Jan — Mar 2027
date: 2027-03-01          # used for sorting, newest first
role: Lead engineer
context: One line of business context   # optional, shown in the page header
areas: [Backend, Distributed systems]   # any of: Distributed systems, Reliability, Backend, Frontend, AI, Performance & cost
stack: [C# / .NET, React]
metric: { value: '3×', label: 'faster something' }   # optional
diagram: pipeline         # optional: pipeline | reconciliation | async-media
featured: false           # true = one of the six cards on the home page
rank: 100                 # order among featured cards (lower = earlier)
---

## The problem
...
```

Suggested sections: **The problem → Constraints → Design → Key decisions → Impact**. Keep exactly six featured: when you feature a new one, unfeature another. The build fails if the header doesn't match the schema in `src/content.config.ts`, and the error names the file and the field.

### Show a résumé button

Put the PDF in `public/` and set `resumeUrl` in `src/data/site.ts`, e.g. `'/Vishal-Tiwari-Resume.pdf'`.

## Hosting and domains

- **Deploy:** `.github/workflows/deploy.yml` builds with `withastro/action` and publishes with `actions/deploy-pages`. Repo → Settings → Pages → Source is **GitHub Actions**.
- **Custom domain:** `portfolio.itsvishalcodes.com`, set in repo → Settings → Pages, with **Enforce HTTPS** on. GitHub issues and renews the certificate. With an Actions deploy, the setting in Pages is what counts; `public/CNAME` is only a record of it.
- **DNS (Porkbun):**
  - `portfolio` CNAME → `itsvishalcodes.github.io`.
  - TXT `_github-pages-challenge-itsvishalcodes` verifies the domain with GitHub.
  - No wildcard (`*`) record, so other subdomains can't be claimed on GitHub Pages.
- **Root domain:** `itsvishalcodes.com` and `www` use Porkbun **URL Forwarding** (permanent 301) to `https://portfolio.itsvishalcodes.com`.
- **Old site:** the `itsvishalcodes.github.io` repo serves a redirect page and a `service-worker.js` that removes the old site's cached copy from returning visitors' browsers. Keep that repo, and keep it public.
