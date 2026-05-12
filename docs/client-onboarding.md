# Client Onboarding Checklist

One copy per new paying client. Fill in the header, then check off each step.

**Client name:** _______________
**Slug:** _______________ (e.g., `kovacs-gyor`, `nagy-pecs`)
**Trade:** _______________ (autószerelő / lakatos / költöztető)
**Intake received:** ___/___/______
**Deposit received:** ___/___/______
**Target go-live:** ___/___/______

---

## Phase 1 — Intake & payment

- [ ] **1. Send intake form**

  Send the Typeform or Google Form link. Required fields — all from `docs/swap-variables.md`:
  - Business name (short display + full legal name)
  - City (nominative form, e.g. "Győr")
  - City locative (e.g. "Győrben") — ask directly, Hungarian cases trip up non-natives
  - Phone (ask for display format, you'll strip spaces for the tel: href)
  - Email address
  - Full address with postal code
  - Year established
  - Up to 8 services: name + 1–2 sentence description each
  - Up to 3 Google reviews: reviewer name, car model, short quote (ask them to copy from their Google listing)
  - Opening hours: weekday range + Saturday (or "Zárva")
  - Preferred domain name
  - 1–2 photos of the workshop (for og-image)
  - Tax number (adószám) — for footer legal line

- [ ] **2. Receive 50% deposit**

  10,000 HUF setup deposit (half of 20,000 HUF total setup fee). Do not begin work until received. Log payment method and date.

---

## Phase 2 — Build

- [ ] **3. Create client folder**

  ```
  cp templates/autoszerelo-base.html clients/[slug]/index.html
  ```

  Create `clients/[slug]/` directory. It will contain `index.html`, `og-image.jpg`, and later `sitemap.xml`.

- [ ] **4. Swap all variables**

  Open `clients/[slug]/index.html` in editor. Follow `docs/swap-variables.md` exactly.

  Use find-replace (Ctrl+H / Cmd+H) for each placeholder:
  - `{{business_name}}` → client value
  - `{{city}}` and `{{city_locative}}` → both variants
  - `{{phone}}` (display, 6 occurrences) and `{{phone_tel}}` (href, 5 occurrences) — do these separately
  - `{{full_address}}`, `{{street_address_uppercase}}`
  - `{{year_established}}`, `{{years_in_business}}`
  - `{{star_rating}}`, `{{review_count}}`, `{{customer_count}}`
  - `{{opening_hours_weekday}}`, `{{opening_hours_saturday}}`
  - All 8 service names + descriptions
  - All 3 testimonials (name, car, city, quote)
  - `{{location_description}}`
  - `{{email}}`, `{{tax_number}}`, `{{copyright_year}}`, `{{legal_name}}`

  Final check: search for `{{` in the file — should return zero results.

- [ ] **5. Wire up Formspree**

  1. Log in to formspree.io → New Form → name it after the client (e.g., "Kovács Autószerviz foglaláskérés")
  2. Copy the form endpoint URL: `https://formspree.io/f/xxxxxxxx`
  3. In `index.html`, update the form opening tag:
     ```html
     <form action="https://formspree.io/f/xxxxxxxx" method="POST">
     ```
  4. Add hidden redirect and subject fields inside the form (before the first `.row`):
     ```html
     <input type="hidden" name="_next" value="https://[client-domain]/thanks.html">
     <input type="hidden" name="_subject" value="Új foglaláskérés — [business_name]">
     ```
  5. Create `clients/[slug]/thanks.html` — a simple "Köszönjük, visszahívjuk!" page with a link back to the main page.
  6. Test the form submission (Formspree free tier: 50 submissions/month).

- [ ] **6. OG image**

  - **Best case:** client provides workshop/team photo → resize to 1200×630 px, save as `clients/[slug]/og-image.jpg`
  - **No photo:** generate with AI (a well-lit generic auto workshop interior) or create a branded graphic with business name + city overlay
  - Add OG + canonical tags to `<head>` just before `</head>`:
    ```html
    <link rel="canonical" href="https://[client-domain]">
    <meta property="og:title" content="[business_name] — Autószerviz [city]">
    <meta property="og:description" content="Megbízható autószerviz [city_locative]. Időpontfoglalás 1 perc alatt, garanciás javítás.">
    <meta property="og:image" content="https://[client-domain]/og-image.jpg">
    <meta property="og:url" content="https://[client-domain]">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="hu_HU">
    ```

- [ ] **7. Analytics snippets**

  Add to `<head>` (just before `</head>`). Get these from the client or set up accounts on their behalf:

  **GA4:**
  ```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```

  **Meta Pixel:**
  ```html
  <!-- Meta Pixel -->
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'XXXXXXXXXXXXXXXX');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXX&ev=PageView&noscript=1"/></noscript>
  ```

  Replace `G-XXXXXXXXXX` and `XXXXXXXXXXXXXXXX` with the client's actual IDs.

---

## Phase 3 — QA

- [ ] **8. Test on Chrome desktop**
  - All 5 sections render correctly (hero, services, why-us, testimonials, location)
  - Phone `tel:` links launch the dialer
  - Form submits → redirects to `thanks.html` → Formspree sends email notification
  - No `{{` placeholders remaining (search in browser with Ctrl+U → Ctrl+F)
  - No console errors (F12 → Console)

- [ ] **9. Test on Safari mobile (iPhone)**
  - Sticky topbar does not overlap hero content
  - Mobile CTA bar visible at bottom and tappable
  - Font sizes readable at 375 px width
  - Hero grid collapses to single column
  - Services grid collapses to 2 columns then 1 column

- [ ] **10. Lighthouse score**
  Open Chrome DevTools → Lighthouse → Mobile → Generate report. Targets:
  - Performance ≥ 85
  - Accessibility ≥ 90
  - SEO ≥ 95

  Common quick fixes:
  - Add `loading="lazy"` to any `<img>` tags
  - Confirm `<meta name="description">` is present and ≤ 160 characters
  - Check colour contrast (the `#999488` on `#141414` background is borderline — leave as is for now)

---

## Phase 4 — Deploy & handoff

- [ ] **11. Deploy preview to Vercel**

  Follow `docs/deployment.md`. Get a `.vercel.app` preview URL. Do not connect the custom domain yet.

- [ ] **12. Send preview link to client**

  Message (Hungarian):
  > "Elkészült az oldal előnézete — kérem nézze meg mobilon is: [vercel-url]. Ha minden rendben, a fennmaradó 10.000 Ft-ot kérem, és azonnal élesbe tesszük a saját domain-jére."

- [ ] **13. Receive final 50%**

  10,000 HUF remaining payment. Do not connect custom domain until confirmed received.

- [ ] **14. Connect custom domain**

  Follow `docs/deployment.md` → registrar-specific DNS section. Confirm propagation with whatsmydns.net before telling the client it's live.

- [ ] **15. Submit to Google Search Console**

  1. search.google.com/search-console → Add property → URL prefix → `https://[client-domain]`
  2. Verify via HTML tag method: add `<meta name="google-site-verification" content="XXXX">` to `<head>`
  3. Create `clients/[slug]/sitemap.xml`:
     ```xml
     <?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url><loc>https://[client-domain]/</loc></url>
     </urlset>
     ```
  4. In Search Console → Sitemaps → submit `https://[client-domain]/sitemap.xml`

---

## Phase 5 — Retention & guarantee tracking

- [ ] **16. Schedule 30-day check-in**

  Message the client at 30 days:
  > "Szia! Egy hónapja él az oldal — érdeklődtem, jöttek-e hívások? Minden rendben a fentivel?"

  Log any feedback. Apply fixes if needed (free, takes minutes).

  Calendar reminder date: ___/___/______

- [ ] **17. Schedule 60-day call-count review**

  The 5-calls-in-60-days guarantee deadline. Review:
  - Calls from the site (check GA4 phone link clicks as a proxy)
  - Client's own reported call count
  - Form submissions in Formspree dashboard

  **If 5+ calls confirmed:** send invoice for month 2 (10,000 HUF), mention annual plan (100,000 HUF = 2 months free).

  **If fewer than 5 calls:** diagnose root cause (low search traffic? form broken? phone number wrong?). Offer free copy/CTA tweaks. The guarantee is a differentiator — honour it without argument.

  Calendar reminder date: ___/___/______

---

## Notes

*Client-specific notes, registrar credentials, special requests, revision history.*
