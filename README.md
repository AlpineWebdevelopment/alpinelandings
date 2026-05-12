# Alpine Studios — Landing Page Repo

Static HTML landing pages for Hungarian small businesses (autószerelő, lakatos, költöztető). Each client gets a deployed single-page site on their own domain, form handling via Formspree, and basic analytics.

**Stack:** HTML + CSS + vanilla JS · Vercel free tier · Formspree · GA4 + Meta Pixel  
**No build tools. No frameworks. No npm.**

---

## Folder structure

```
/
├── pitchpage/                   Sales site for Alpine Studios itself
│   ├── index.html
│   ├── thanks.html
│   └── assets/images/
├── templates/                   Master templates — copy per new client
│   ├── autoszerelo-base.html    ← reference design (Kovács, Győr)
│   ├── koltozteto-base.html     (placeholder)
│   └── lakatos-base.html        (placeholder)
├── portfolio/                   4 showcase examples shown to prospects
│   ├── kovacs-autoszerviz-gyor/ ← reference design, do not modify
│   ├── budai-autocentrum-pecs/
│   ├── duna-szerviz-debrecen/
│   └── szegedi-autoshop-szeged/
├── clients/                     Live paying clients — one subfolder each
│   └── (empty — add per client)
├── docs/
│   ├── swap-variables.md        Every placeholder + where it lives in the template
│   ├── client-onboarding.md     Full 17-step checklist per new client
│   ├── deployment.md            Vercel deploy + Hungarian domain registrar DNS
│   └── outreach-templates.md   FB DMs, walk-in script, phone follow-up (Hungarian)
└── scripts/
    └── (empty — build automation placeholder)
```

---

## New client workflow

| Step | Action |
|---|---|
| 1 | Send intake form — collect all swap variables (see `docs/swap-variables.md`) |
| 2 | Receive 50% deposit (10,000 HUF) |
| 3 | `cp templates/autoszerelo-base.html clients/[slug]/index.html` |
| 4 | Swap all `{{placeholders}}` per `docs/swap-variables.md` |
| 5 | Wire Formspree endpoint in `<form action="...">` |
| 6 | Add `og-image.jpg` (1200×630 px) + OG meta tags |
| 7 | Add GA4 + Meta Pixel snippets to `<head>` |
| 8 | QA: Chrome desktop + Safari mobile + Lighthouse (Perf ≥ 85, SEO ≥ 95) |
| 9 | Deploy preview to Vercel → send `.vercel.app` URL to client |
| 10 | Receive final 50% (10,000 HUF) |
| 11 | Connect custom domain via Vercel + registrar DNS |
| 12 | Submit sitemap to Google Search Console |
| 13 | 30-day check-in + 60-day call-count review (guarantee deadline) |

Full checklist with every sub-step: [`docs/client-onboarding.md`](docs/client-onboarding.md)

---

## Pricing

| | Amount |
|---|---|
| Setup fee | 20,000 HUF (50% upfront, 50% on sign-off) |
| Monthly hosting | 10,000 HUF/month |
| Annual plan | 100,000 HUF/year (= 2 months free) |
| Guarantee | 5+ phone calls within 60 days — or we fix it for free |

---

## Portfolio sites

Built as sales demos — shown to prospects to illustrate the product. Each has a distinct aesthetic.

| Folder | City | Aesthetic | Status |
|---|---|---|---|
| `portfolio/kovacs-autoszerviz-gyor/` | Győr | Editorial-industrial | Done — reference design |
| `portfolio/budai-autocentrum-pecs/` | Pécs | Modern/minimal | Pending |
| `portfolio/duna-szerviz-debrecen/` | Debrecen | Classic/family | Pending |
| `portfolio/szegedi-autoshop-szeged/` | Szeged | Bold/colorful | Pending |

**The Kovács design is locked** — do not modify it. All future templates derive from it.

---

## Vercel deployment

Each subfolder deploys as its own Vercel project:

- Dashboard: Add New Project → select repo → set Root Directory to `clients/[slug]` → Framework: Other → deploy
- CLI: `cd clients/[slug] && vercel --prod`

Full guide including Hungarian registrar DNS setup (domain.hu, tarhelypark.hu, rackhost.hu): [`docs/deployment.md`](docs/deployment.md)

---

## Docs index

| File | What it covers |
|---|---|
| [`docs/swap-variables.md`](docs/swap-variables.md) | Every `{{placeholder}}` with section location, Kovács example, and edge-case notes |
| [`docs/client-onboarding.md`](docs/client-onboarding.md) | 17-step checklist from intake to 60-day guarantee review |
| [`docs/deployment.md`](docs/deployment.md) | Vercel setup, domain DNS, common gotchas |
| [`docs/outreach-templates.md`](docs/outreach-templates.md) | Cold DMs, follow-ups, walk-in script, phone call script (all Hungarian) |

---

## What's coming next

- [ ] Portfolio variant 2 — Pécs, modern/minimal aesthetic
- [ ] Portfolio variant 3 — Debrecen, classic/family aesthetic
- [ ] Portfolio variant 4 — Szeged, bold/colorful aesthetic
- [ ] Pitch page (`pitchpage/`) — sells Alpine Studios to prospect mechanics
- [ ] Wire all forms to Formspree
- [ ] First real Vercel deployment walkthrough
