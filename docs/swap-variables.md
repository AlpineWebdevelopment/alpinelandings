# Swap Variables — autószerelő template

Every value that changes per client. Use find-replace in your editor to swap these in `templates/autoszerelo-base.html` before deploying to `clients/[slug]/index.html`.

---

## Core identity

| Placeholder | Where it appears | Kovács example | Notes |
|---|---|---|---|
| `{{business_name}}` | `<title>`, nav `.mark`, hero h1 context, footer `.brand h4`, footer legal line, footer contact column | `Kovács Autószerviz` | Short display name, no "Kft." |
| `{{legal_name}}` | Footer copyright line | `Kovács Autószerviz Kft.` | Full legal entity name |
| `{{city}}` | `<title>`, hero eyebrow, trust strip description, city-stamp overlay, location-map `.city`, footer address | `Győr` | Nominative (dictionary) form |
| `{{city_locative}}` | `<meta name="description">`, hero h1 last line, footer brand description | `Győrben` | City + locative suffix — varies: `-ben`, `-ban`, `-on`, `-en`, `-ön` |
| `{{city_uppercase}}` | Hero visual `.city-stamp` text after `·` | `GYŐR` | Uppercase city — same value as `{{city}}` but capitalised; CSS `text-transform` does NOT handle this because the stamp is already uppercase |
| `{{year_established}}` | Nav `.est` label ("EST. 2002"), footer brand description | `2002` | 4-digit year |
| `{{years_in_business}}` | Hero eyebrow ("X éve a városért"), hero visual-card `.num`, trust strip first item `.num`, why-us section `.right` description | `22` | Compute: current year − year_established |

---

## Contact

| Placeholder | Where it appears | Kovács example | Notes |
|---|---|---|---|
| `{{phone}}` | Topbar `<a class="phone">` text, hero "Hívjon most" button text, location info-row `.val`, footer contact column `<li>`, form-or link text, mobile CTA text | `+36 96 123 4567` | Display format with spaces — 6 occurrences |
| `{{phone_tel}}` | All `href="tel:..."` attributes: topbar link, hero call button, location val `<a>`, footer `<li><a>`, mobile CTA `href` | `+36961234567` | E.164 without spaces or dashes — 5 occurrences |
| `{{email}}` | Location info-row val `<a href="mailto:...">` and link text, footer contact column `<li>` | `info@kovacsautoszerviz.hu` | |
| `{{full_address}}` | Topbar `.hide-mobile` span, location info-row val (split across two lines with `<br>`), footer contact column `<li>` | `9024 Győr, Példa utca 12.` | Full format: postal code + city + street |
| `{{postal_code}}` | Part of `{{full_address}}` | `9024` | Hungarian 4-digit code |
| `{{street_address_uppercase}}` | Location-map `.addr` overlay | `PÉLDA UTCA 12.` | Street + house number only, no postal/city, uppercase |

---

## Social proof

| Placeholder | Where it appears | Kovács example | Notes |
|---|---|---|---|
| `{{star_rating}}` | Hero visual-card `.lbl` line, trust strip second item `.num` | `4.9` | One decimal place |
| `{{review_count}}` | Trust strip second item `.lbl`, testimonials section-header `.right` description | `158` | Number only, no unit |
| `{{customer_count}}` | Hero visual-card `.lbl` line | `1500+` | Include `+` if approximate |

---

## Hours

| Placeholder | Where it appears | Kovács example | Notes |
|---|---|---|---|
| `{{opening_hours_weekday}}` | Topbar left span after "NYITVA — H–P ", location info-row H–P `.val`, footer contact column `<li>` | `7:30–17:30` | Topbar uses condensed format (no spaces around dash); location section uses `7:30 – 17:30` with spaces — update both variants |
| `{{opening_hours_saturday}}` | Location info-row SZOMBAT `.val`, footer contact column `<li>` | `8:00 – 12:00` | If closed Saturdays: replace with `Zárva` and remove the footer mention |

---

## Services (8 cards)

Each service card has a number label (01–08, hardcoded), an inline SVG icon, an `<h3>` name, and a `<p>` description. Replace all 8 or only the ones that differ from the base.

**Section intro text** (also swap): the `.section-header .right` paragraph above the grid currently reads "Műszaki vizsga felkészítéstől a klímaszervizig…" — update to match the actual client offer.

| Placeholder | Kovács example |
|---|---|
| `{{service_01_name}}` | `Olajcsere` |
| `{{service_01_desc}}` | `30 perc alatt, eredeti olajokkal és gyári szűrőkkel. Minden típushoz a megfelelő specifikáció.` |
| `{{service_02_name}}` | `Fékrendszer` |
| `{{service_02_desc}}` | `Féktárcsa, fékbetét, féklámpa, fékfolyadék. Biztonságos megállás minden időben.` |
| `{{service_03_name}}` | `Futómű` |
| `{{service_03_desc}}` | `Lengéscsillapító, kerékfutás, geometria beállítás. Egyenes vonal, stabil út.` |
| `{{service_04_name}}` | `Klímaszerviz` |
| `{{service_04_desc}}` | `Klímatöltés, szűrőcsere, fertőtlenítés. Tiszta levegő, hűvös utazás.` |
| `{{service_05_name}}` | `Műszaki vizsga` |
| `{{service_05_desc}}` | `Felkészítés és lebonyolítás. 100% átmenetel garancia — különben ingyen javítjuk.` |
| `{{service_06_name}}` | `Hibakód olvasás` |
| `{{service_06_desc}}` | `Modern diagnosztika minden márkához. Pontos hiba, pontos javítás.` |
| `{{service_07_name}}` | `Gumiabroncs` |
| `{{service_07_desc}}` | `Csere, centrírozás, szezonális tárolás. Akciós nyári és téli gumiabroncsok.` |
| `{{service_08_name}}` | `Kipufogó` |
| `{{service_08_desc}}` | `Hangtompító, katalizátor, lambda szonda. Halk működés, alacsony fogyasztás.` |

**Swapping service icons:** icons are inline SVG from Heroicons (stroke style). Each is the `<svg class="icon">` directly inside a `.service` div. Replace the `<path>` content — keep the outer `<svg>` tag and all its attributes.

---

## Testimonials (3)

| Placeholder | Where it appears | Kovács example |
|---|---|---|
| `{{testi_01_name}}` | `<cite>` in first `.testi` | `Tóth László` |
| `{{testi_01_car}}` | `<cite><small>` — first part before ` · ` | `Audi A4` |
| `{{testi_01_city}}` | `<cite><small>` — after ` · ` | `Győr` |
| `{{testi_01_quote}}` | `<blockquote>` text content | `Régi autóm volt a problémám…` |
| `{{testi_02_name}}` | `<cite>` in second `.testi` | `Nagyné Horváth Eszter` |
| `{{testi_02_car}}` | | `Toyota Yaris` |
| `{{testi_02_city}}` | | `Győr` |
| `{{testi_02_quote}}` | | `Pontos időpont, korrekt árak…` |
| `{{testi_03_name}}` | `<cite>` in third `.testi` | `Kiss Péter` |
| `{{testi_03_car}}` | | `Volkswagen Golf` |
| `{{testi_03_city}}` | | `Győr` |
| `{{testi_03_quote}}` | | `A műszaki előtt féltem…` |

Testimonials section header `.right` text references `{{review_count}}` — update that too.

---

## Location description

| Placeholder | Where it appears | Kovács example |
|---|---|---|
| `{{location_description}}` | Location section-header `.right` paragraph | `A 9-es út mellett, a Plus Áruháztól 200 méterre. Saját parkoló, akadálymentesített bejárat.` |
| `{{city_stamp_number}}` | Hero visual `.city-stamp` — the `№ XX` part | `47` | Decorative only — pick any 2-digit number |

---

## SEO & meta (add to `<head>` — not in template yet)

These tags are absent from the base template. Add them per-client before deploying.

```html
<!-- Canonical -->
<link rel="canonical" href="https://{{canonical_url}}">

<!-- Open Graph -->
<meta property="og:title" content="{{business_name}} — Autószerviz {{city}}">
<meta property="og:description" content="Megbízható autószerviz {{city_locative}}. Időpontfoglalás 1 perc alatt, garanciás javítás. Hívjon vagy foglaljon online.">
<meta property="og:image" content="https://{{canonical_url}}/og-image.jpg">
<meta property="og:url" content="https://{{canonical_url}}">
<meta property="og:type" content="website">
<meta property="og:locale" content="hu_HU">
```

| Placeholder | Example |
|---|---|
| `{{canonical_url}}` | `kovacsautoszerviz.hu` |
| `{{og_image_path}}` | `og-image.jpg` (place in client folder root) |

Also update the existing `<meta name="description">` to replace city/name references.

---

## Footer legal

| Placeholder | Where it appears | Kovács example |
|---|---|---|
| `{{tax_number}}` | Footer `.legal` span | `12345678-2-08` |
| `{{copyright_year}}` | Footer `.legal` span | `2026` |

---

## Variables that do NOT change between clients

These are intentionally generic and the same for all autószerelő clients:

- Warranty period: **12 hónap** (trust strip + why-us cell 04)
- Callback SLA: **24h** (trust strip item 04)
- Section numbers (01–05) and nav anchor IDs
- Why-us section headings and body copy (generic enough to reuse)
- Process steps copy (Foglalás → Diagnózis → Javítás)
- Form field labels and placeholder text
- Footer nav link labels
