# Deployment — Vercel

Each client subfolder deploys as its **own Vercel project** — one repo, many projects. Vercel
supports this natively via the **Root Directory** setting; the subfolder does not need to be the
repo root.

Two kinds of client live here:

| Kind | Examples | Framework Preset | Build |
|---|---|---|---|
| Static HTML | most of `clients/*`, `portfolio/*` | Other | none |
| Next.js | `clients/kontenersitt/*`, `clients/arpadnepe` | Next.js | `next build` |

---

## One-time setup

1. Create a free account at vercel.com (use GitHub login)
2. In the Vercel dashboard → "Add New Project" → Connect GitHub → authorise access to this repo
3. Optionally install the Vercel CLI for faster repeat deploys:
   ```
   npm i -g vercel
   ```
   (CLI is optional — dashboard deploys work fine)

---

## Deploying a new client site

### Static HTML client — via Vercel dashboard (recommended for first deploy)

1. vercel.com → your account → **Add New Project**
2. Select this GitHub repo (`alpinelandings`)
3. Under **Root Directory**, click Edit → type `clients/[slug]`
   Example: `clients/kovacs-gyor`
4. Framework Preset: **Other**
5. Build Command: leave **empty**
6. Output Directory: leave as `.` (dot)
7. Click **Deploy**

Each client gets their own Vercel project pointing at their subfolder. One repo, multiple projects — Vercel handles this natively.

### Next.js client

Same flow, three settings differ. A Next.js app in a subfolder deploys exactly like a static one —
the Root Directory setting is what makes the depth irrelevant.

1. vercel.com → **Add New Project** → select this repo (`alpinelandings`)
2. **Root Directory** → Edit → type the app folder, e.g. `clients/arpadnepe`
3. Framework Preset: **Next.js** (auto-detected once Root Directory is set)
4. Build Command / Output Directory / Install Command: leave **all on default** — do not override
5. Click **Deploy**

Every Next.js client also carries a `vercel.json` next to its `package.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs"
}
```

This pins the framework so the build does not fall back to "Other" (which would publish the raw
source files instead of building). Keep it in every Next.js client folder.

**Do not point a Vercel project at the repo root for these.** The root is the static pitch page;
a root-directory project will never build `clients/<slug>` — that is what the per-project Root
Directory setting is for.

#### Gotchas specific to Next.js clients

| Problem | Fix |
|---|---|
| Deploy succeeds but serves `.tsx` source / a file listing | Framework Preset is "Other". Set it to **Next.js** and confirm `vercel.json` is present |
| `No Next.js version detected` | Root Directory is wrong — it must be the folder containing `package.json`, not the repo root |
| Build can't find the lockfile | Each app keeps its own `package-lock.json`. Don't delete it; there is no workspace root |
| Assets 404 | Next.js serves `public/` at the domain root (`/foto/x.webp`). Do **not** apply the static-site `/clients/<slug>/...` path convention here |
| Changes to a shared file outside the app folder don't trigger a rebuild | Enable *Settings → Git → Include files outside Root Directory* (not needed today — each app is self-contained) |

### Via CLI (faster for redeploys after edits)

```bash
cd clients/kovacs-gyor
vercel --prod
```

First run prompts for project settings — use the same settings as above. Subsequent runs skip the prompts.

### After editing a file

Push to GitHub — Vercel auto-deploys from the `main` branch. The client's site updates within ~30 seconds.

---

## Connecting a Hungarian client domain

### Step 1 — Add domain in Vercel

1. Open the client's Vercel project → **Settings** → **Domains**
2. Type the domain (e.g., `kovacsautoszerviz.hu`) → Add
3. Vercel shows the required DNS records — note them down

### Step 2 — DNS records to set

**Apex domain** (`kovacsautoszerviz.hu`, no www):
```
Type:  A
Host:  @
Value: 76.76.21.21
TTL:   3600
```
> Confirm the Vercel IP in your dashboard — it can occasionally change.

**www subdomain** (`www.kovacsautoszerviz.hu`):
```
Type:  CNAME
Host:  www
Value: cname.vercel-dns.com
TTL:   3600
```

**Both together (recommended):**
Add both records, then in Vercel Domains set `kovacsautoszerviz.hu` (apex) as the **primary** domain. Vercel auto-redirects `www` → apex.

### Step 3 — Registrar-specific steps

#### domain.hu (Hosting.hu panel)

1. Login → **Domainek** → select domain → **DNS kezelő**
2. Delete any existing A record pointing to a parking/placeholder IP
3. **Új rekord** → Típus: `A` → Gazdagép: `@` → Érték: `76.76.21.21` → Mentés
4. **Új rekord** → Típus: `CNAME` → Gazdagép: `www` → Érték: `cname.vercel-dns.com` → Mentés
5. TTL is set automatically; if editable, use 3600

#### tarhelypark.hu

1. Login → **Vezérlőpult** → **Domainek** → select domain → **DNS zóna szerkesztő**
2. Edit the existing `@` A record (or delete and re-add) → set value to `76.76.21.21`
3. Add CNAME: Host `www` → Value `cname.vercel-dns.com`
4. Set TTL to 300 for faster propagation during initial setup, bump to 3600 after confirmed live

#### rackhost.hu

1. Login → **Ügyfélfiók** → **Tárhely/Domain** → select domain → **DNS rekordok**
2. If a "Parkoltatás" or "Domain parking" toggle is enabled, **disable it first**
3. Edit `@` A record → `76.76.21.21`
4. Add CNAME `www` → `cname.vercel-dns.com`

### Step 4 — Propagation

- Typical propagation: **2–4 hours** for Hungarian registrars
- Maximum: 24 hours (rare)
- Check global propagation: [whatsmydns.net](https://whatsmydns.net) → type the domain → select A record
- SSL certificate provisions automatically once DNS is pointing to Vercel — usually within 5 minutes of propagation completing

**What to tell the client:**
> "A domaint beállítottuk, 2–4 órán belül él az új oldal. Addig az előző oldal vagy egy fehér lap látszódhat — ez normális. Írjon ha nem él 24 óra után."

---

## www vs apex — common questions

**"Mi az a www és mi az az A rekord?"**
> "Ez a technikai rész, amit mi intézünk. Önnek csak a domain.hu / tarhelypark.hu bejelentkezési adatait kell megadnia, a többit mi csináljuk. Ha nem akar hozzáférést adni, küldöm lépésről lépésre, képekkel, pontosan mit kell kattintani."

**Client can't give registrar access:**
Prepare a screenshot-annotated PDF showing their specific registrar panel with arrows pointing to exactly which fields to fill in. This takes 10 minutes and removes all friction.

---

## Common gotchas

| Problem | Fix |
|---|---|
| Vercel shows "Invalid Configuration" after adding domain | Wait 15 min and refresh — often a DNS propagation lag on Vercel's side |
| SSL certificate not provisioning | DNS must point to Vercel before SSL auto-provisions. Confirm DNS first with whatsmydns.net |
| Old site still showing after 24h | Client's ISP may cache DNS. Ask them to check on **mobile data** (different DNS resolver) |
| Hungarian registrar shows "MX rekord conflict" warning | Safe to ignore for landing pages — MX is for email, not the website |
| "CNAME at apex" error | This is a DNS spec limitation. Use an A record for `@` (apex) and CNAME only for `www` — never CNAME for `@` |
| `www` works but apex doesn't | You added the CNAME but forgot the A record. Add `@` → `76.76.21.21` |
| Vercel shows domain as "pending" indefinitely | Delete and re-add the domain in Vercel settings; then re-check DNS |
| Client domain has existing email (e.g. Gmail Workspace) | Adding A + CNAME records is safe — email uses MX records which are separate. Do not touch MX records. |

---

## Checking a live deployment

After DNS propagates:

1. Open the domain in an incognito window
2. Check HTTPS (padlock icon) — SSL should be active
3. Check the phone `tel:` link works on mobile
4. Submit a test form entry → confirm Formspree email arrives
5. Run Lighthouse one more time on the live URL (scores can differ slightly from local)
