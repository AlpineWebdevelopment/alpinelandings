# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A collection of hand-built, single-file static landing pages for Hungarian small businesses (klímaszerelő, autószerelő, etc.), plus the sales/pitch page for the agency itself (**Belluna Studios** — renamed from "Alpine Studios" in `00403a8`; the old name still lingers in `README.md`, `templates/*-base.html`, and the `pitchpage/*.bak.html` files).

**Most of this repo has no build step, no npm, no framework, no tests** — HTML + CSS + vanilla JS only, where editing a file is the whole build.

**The exceptions are the Next.js clients.** `clients/kontenersitt/{angyalfold,rakosmente,ujbuda,ujpest,zuglo}` and `clients/arpadnepe` are ordinary npm/TypeScript Next.js apps, each self-contained with its own `package.json`, lockfile, and `vercel.json`. They share nothing with the static pages and nothing with each other — no workspace, no root `package.json`. Treat each as its own project and read its own `AGENTS.md`/`README.md` first.

## Commands

The static pages have no package manager or test runner. To preview them:

```bash
python -m http.server 8000      # MUST be run from the repo root, not from a client folder
```

The Next.js clients are previewed and built from inside their own folder instead:

```bash
cd clients/arpadnepe && npm install && npm run dev     # or: npm run build
```

Serving from the repo root is required because every page references its assets with **root-absolute paths** (`/clients/<slug>/assets/...`). Opening an `index.html` via `file://` or serving a client subfolder directly will 404 all images and CSS.

Deployment (per `docs/deployment.md`): **each client subfolder is its own Vercel project**, set via that project's Root Directory — `clients/<slug>`. Depth is irrelevant to Vercel; a project never has to sit at the repo root. Static clients use Framework "Other" with an empty build command; Next.js clients use Framework "Next.js" with all build settings on default, and carry a `vercel.json` pinning `"framework": "nextjs"` so they can't silently fall back to "Other" and publish raw source.

**Note the conflict with the preview note above** — a *static* page whose assets use `/clients/<slug>/...` will break under a subfolder-root deploy; those paths must be made relative before deploying that way. This does not apply to the Next.js clients: they serve `public/` at their own domain root (`/foto/x.webp`), which is already correct for a subfolder-root deploy. The root `.htaccess` (extensionless-URL rewrite, `Options -Indexes`) implies the static part of the repo is also served from an Apache host at the domain root, where the absolute paths work as-is; the Next.js clients cannot run there and are Vercel-only.

## Layout

| Path | Role |
|---|---|
| `index.html` | The **live** pitch page served at the domain root. This is the one to edit. |
| `pitchpage/index.html` | Older copy of the same page — has since diverged (root is ahead). `*.bak.html` next to it are dead snapshots. |
| `clients/<slug>/index.html` | Real client sites, single-file static. `robots.txt` disallows `/clients/`. |
| `clients/kontenersitt/<kerulet>/` | Five **Next.js** apps (konténerrendelés, one per Budapest district). Real server routes — each has `app/api/lead/route.ts`. |
| `clients/arpadnepe/` | **Next.js** demo for the Árpád Népe egyesület: 3 layout variants (`/a`, `/b`, `/c`) × 5 colour schemes, switched client-side. Fully prerendered — no server routes. |
| `portfolio/<slug>/index.html` | Sales demos linked from the pitch page. `kovacs-autoszerviz-gyor` is the locked reference design — do not modify it. `szegedi-autoshop-szeged` is an empty stub. |
| `klima/index.html` | Standalone klímaszerelő demo (Kovács design retargeted to HVAC). |
| `templates/autoszerelo-base.html` | The `{{placeholder}}` master template. `koltozteto-base.html` and `lakatos-base.html` are empty stubs. |
| `legacy/alpinestudios/` | Archived previous agency site (Alpine Webdevelopment, EN portfolio). External CSS + GSAP + separate `mobile.html`; **relative** asset paths, unlike the rest of the repo. Images are WebP re-encodes — the original PNG/PSD assets live only in `R:\z_jeskoserver\alpinestudios`. Do not edit — see `legacy/README.md`. |
| `docs/` | `swap-variables.md` (every placeholder + where it appears), `client-onboarding.md` (17-step build/QA/deploy checklist), `deployment.md`, `outreach-templates.md`. |

`README.md` is stale on folder names (it lists `budai-autocentrum-pecs` / `duna-szerviz-debrecen`, which are now `mecsek-autocentrum-pecs` / `hajdu-szerviz-debrecen`) and on `clients/` being empty.

## Page anatomy

Each landing page is one self-contained `index.html`, in this order:

1. `<head>`: `lang="hu"`, Google Fonts `<link>` (occasionally Fontshare too), favicon as an **inline `data:image/svg+xml` URI** — a rounded rect + initial letter + accent dot, recolored per brand.
2. Inline `<style>` with a `:root` block of CSS custom properties (`--bg`, `--ink`, `--accent`, …) that defines that page's entire palette.
3. An inline `<svg style="display:none">` sprite of `<symbol id="i-*">` icons, referenced as `<svg><use href="#i-check"/></svg>`.
4. Body sections, then inline `<script>` at the end of `<body>`.

Two clients (`szivauto`, `klima2020`) instead link an external `assets/style.css`; everything else keeps CSS inline. Follow whichever convention the file you're editing already uses.

**Every page is its own design.** There is no shared stylesheet, component library, or design token file — each client gets a distinct font pairing and palette on purpose. Copying a pattern between pages means copying the CSS too, adapted to that page's variable names.

## Scroll-reveal convention (varies per page — always read the page's own script first)

All animated pages use one `IntersectionObserver` that adds a "visible" class after a per-element delay read from a data attribute, then unobserves. The names differ:

- `clients/klima2020`, `clients/cleanklima`: classes `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale`, toggled to `.visible`, delay in `data-delay`.
- `clients/tisztaklima`: classes `.reveal` / `.reveal-l` / `.reveal-r`, toggled to `.vis`, delay in `data-d`.

Some scripts also assign staggered delays programmatically (e.g. `.service-card` gets `i * 100`), so a hardcoded delay on those elements will be overwritten. Pages that animate also ship a `@media (prefers-reduced-motion: reduce)` override — keep it when adding new reveal styles.

## Working on client pages

- **All copy is Hungarian.** Keep `lang="hu"`, Hungarian punctuation, and correct suffixes — city names take locative forms that vary (`Győrben`, `Debrecenben`, `Szegeden`); `docs/swap-variables.md` documents which placeholders need which form.
- New client from template: copy `templates/autoszerelo-base.html`, swap per `docs/swap-variables.md`, then verify `grep -c '{{' clients/<slug>/index.html` returns 0. Phone appears twice over — display format (`+36 30 123 4567`) in text, E.164 (`+36301234567`) in `href="tel:"`.
- Forms POST to Formspree. Live client pages currently still contain the literal `REPLACE_WITH_FORMSPREE_ID` in `<form action>` — no form is wired yet. Onboarding step 5 in `docs/client-onboarding.md` covers the hidden `_next` / `_subject` fields and the `thanks.html` page that go with it.
- GA4 and Meta Pixel snippets are added per client at deploy time (onboarding step 7); they are not in the templates.

## Commits

Client-scoped changes are prefixed with the brand name: `Tiszta Klíma: fix phone badge overlapping hero checklist`, `CleanKlíma: move ózonos section below benefits`.
