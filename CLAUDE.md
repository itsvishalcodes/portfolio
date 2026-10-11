# CLAUDE.md

Vishal Tiwari's personal portfolio, live at https://portfolio.itsvishalcodes.com. Static Astro site, deployed to GitHub Pages on every push to `main`.

Read `README.md` for where each piece of content lives and copy-paste examples. This file covers how to work on the repo.

## Commands

```bash
npm run dev       # http://localhost:4321
npm run build     # must pass before pushing; validates case-study frontmatter
npm run preview   # serve dist/ on :4321
```

Node 22.12+. Astro 7, Tailwind CSS v4 (via `@tailwindcss/vite`, no config file), TypeScript strict.

## Layout

- `src/data/*.ts`: all profile content (site, experience, projects, skills, education, principles). Components only render it.
- `src/content/work/*.md`: case studies. Schema in `src/content.config.ts`, with `areas` limited to the `AREAS` enum there. The filename is the URL slug.
- `src/components/`: one component per home-page section; `diagrams/` holds hand-placed SVG diagrams rendered by `Diagram.astro`.
- `src/styles/global.css`: design tokens as CSS variables on `:root` and `[data-theme='dark']`, mapped to Tailwind colors with `@theme inline` (`bg-bg`, `text-muted`, `text-accent`, `border-line`…). Use these tokens, not raw colors.
- `src/scripts/site.ts`: theme toggle, mobile menu, scroll reveal, card spotlight, copy-email, `/work` filter. No framework JS on the page.
- `public/og.png`: social preview image (1200×630). Regenerate it if the headline changes.

## Content rules

- **Positioning:** a software engineer working on systems at scale, across backend and frontend. Lead with the engineering problem: distributed systems, reliability, async workflows, partial failure, cost, frontend architecture, applied AI. Ad platforms (Google Ads, Meta…) are one-line context, never the headline. Never describe him as a "web developer" or an "ad-tech engineer".
- **Titles:** never claim a job title or level he doesn't hold. The site shows "Software Development Engineer" for the current role.
- **No private data:** no customer or client names, no internal ticket IDs, no phone number, no internal revenue figures.
- **Numbers must be real:** only use figures that are already on the site or that Vishal confirms. Don't invent percentages or round numbers up.
- **Case-study shape:** The problem → Constraints → Design → Key decisions → Impact. Vishal must be able to defend every "Key decisions" line in an interview, so flag new ones for his review.
- **Featured work:** exactly six case studies are `featured: true`. They fill the home-page grid, ordered by `rank`.
- **Copy style:** short sentences, plain words, active voice.

## Verifying a change

1. `npm run build` passes.
2. For any visual change, look at the page in both themes and at phone width (390px). There must be no horizontal scroll.

To take screenshots: `playwright-core` with Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe`; never run `playwright install`. Set `colorScheme` to choose dark or light. Add `is-visible` to `.reveal` elements before a full-page shot, or they render transparent.

## Gotchas

- In Git Bash, prefix commands with `MSYS_NO_PATHCONV=1` when passing URL paths like `/work/` as arguments, or they get rewritten to Windows paths.
- In YAML frontmatter, quote values that look like numbers (`period: '2023'`), or the schema rejects them.
- Inline text with separators that must not wrap (`a · b · c`): keep a breakable space outside each `whitespace-nowrap` span.

## Deploy and hosting

- `.github/workflows/deploy.yml`: `withastro/action@v6` → `actions/deploy-pages@v5`. Pages source is "GitHub Actions"; the custom domain and Enforce HTTPS are set in repo Settings → Pages.
- DNS is at Porkbun: `portfolio` CNAME → `itsvishalcodes.github.io`. The root domain and `www` 301-forward to the portfolio via Porkbun URL Forwarding.
- The separate `itsvishalcodes.github.io` repo is a redirect stub. Its `service-worker.js` removes an old cached site from returning visitors' browsers. Don't rename the `portfolio` repo to `itsvishalcodes.github.io`, and don't give the old repo a custom domain: the resulting 301 would stop that service worker from updating.
- Commits use his personal git identity. Never use a work email.
