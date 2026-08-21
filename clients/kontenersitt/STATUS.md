# STATUS — kontensitt kerületi oldalak

> Átadó/folytató dokumentum. Ha bármelyik eszközről (pl. telefon, claude.ai/code) folytatod
> a munkát, itt van minden, ami a továbblépéshez kell. Frissítsd, ahogy haladsz.

Utolsó frissítés: **2026-08-07**

---

## 1. A projekt lényege

Ügyfél: **SZERVIZ-TRANS Kft.** (márka: kontenersitt.hu) — kapcsolattartó: Varga Tamás.
**5 kerület-specifikus konténerrendelő landing oldal**, mindegyik saját domainen.

**Fő cél:** minden oldal a **saját kerületére** a Google **első oldalára** (lokális SEO).
Ezért minden oldalnak **egyedi tartalma ÉS egyedi dizájnja** van — mintha külön cég lenne
(ne find-replace-elt klón; a Google a doorway/klón-hálózatot bünteti).

Szerződés: aláírva (DocuSign) 2026-07-25. Egyszeri 25.000 Ft/oldal, havi 15.000 Ft/oldal
(havonta 1 új SEO-aloldal/oldal).

---

## 2. Architektúra

- **Egy monorepo**, mappánként egy önálló **Next.js 15** app (App Router, TypeScript, saját
  bespoke `globals.css`, **nincs Tailwind**). NEM Turborepo (az oldalak nem oszthatnak közös
  komponenst — másnak kell látszaniuk).
- **Mappánként külön Vercel-projekt**, Root Directory = a mappa neve, saját domain.
- Repo: `AlpineWebdevelopment/kontenersitt` (privát).

```
kontenersitt/
  zuglo/        -> kontenerrendeleszuglo.hu        [ÉLŐ]
  rakosmente/   -> kontenerrendelesrakosmente.hu   [ÉLŐ]
  angyalfold/   -> kontenerrendelesangyalfold.hu   [ÉLŐ]
  ujbuda/       -> kontenerrendelesujbuda.hu       [ÉLŐ]
  ujpest/       -> kontenerrendelesujpest.hu       [ÉLŐ]
```

---

## 3. Állapot

| Mappa | Kerület | Domain | Telefon | Állapot |
|---|---|---|---|---|
| `zuglo` | XIV. | kontenerrendeleszuglo.hu | +36 21 3355 222 | 🟢 ÉLŐ |
| `rakosmente` | XVII. | kontenerrendelesrakosmente.hu | +36 21 3355 211 | 🟢 ÉLŐ |
| `angyalfold` | XIII. | kontenerrendelesangyalfold.hu | +36 21 3355 233 | 🟢 ÉLŐ |
| `ujbuda` | XI. | kontenerrendelesujbuda.hu | +36 21 3355 244 | 🟢 ÉLŐ |
| `ujpest` | IV. | kontenerrendelesujpest.hu | +36 21 3355 255 | 🟢 ÉLŐ |

> **2026-08-07: MIND AZ 5 OLDAL ÉLESBEN** (karbantartás-middleware törölve, élesben
> ellenőrizve — mindegyik 200-at ad a saját teljes oldalával). Minden mappában van
> `vercel.json` (framework: nextjs). m³-árak Tamás által megerősítve (a „III. kerület"
> elírás volt): IV 10.125 · XI 11.875 · XIII 10.250 · XIV 9.875 · **XVII 9.375** —
> mind kiírva a saját oldalán.

**VÉGLEGES arculatok (több iteráció után, ne nyúlj hozzájuk kérés nélkül):**
- **Zugló** — sötét aszfalt + SÁRGA ipari; Saira Condensed; hazard-csík, watermark.
- **Rákosmente** — papír + FENYŐZÖLD „piac/poszter-print"; Alfa Slab One + Libre Franklin;
  kemény offszet-árnyékok, forgatott ár-pecsét. (A fél-köríves „ponyva-él" a topbar alól
  2026-08-07-én user-kérésre eltávolítva → helyette egyenes, 2px tusvonal zárja a zöld szalagot.)
- **Angyalföld** — milliméterpapír + KOBALT „tervrajz/blueprint"; Big Shoulders + IBM Plex Mono;
  vágott sarkok (chamfer), ferde élű sávok, főkönyvi sorok, mono `[ címkék ]`.
- **Újbuda** — beton-szürke + JELZŐ-NARANCS „munkagép"; Archivo Black + Archivo;
  paralelogramma-gombok, vastag léniák, kvadráns/spec-sorok, sarok-jelek.
- **Újpest** — padlizsán-táblák + LILA „depó-tábla"; Staatliches + Barlow;
  **pill (lekerekített) gombok** (a user kifejezett kérése!), kontúr-sorszámok (01, 02…
  a címke FELETT külön sorban), bal-él motívum, sötét táblasor.

**Dizájn-tanulságok (user-visszajelzésekből):**
- Ne „AI-landing": ne uniform kártya-rács, ne pasztell+lekerekített+lágy árnyék kombó.
- DE: gombnál a lekerekített pill oké (Újpesten kifejezetten ezt kérte) — a tiltás a
  kártya-dizájnra vonatkozik. „Szimpla de egyedi" = egyszerű forma, a karakter a tipóból jöjjön.
- A regiszter illjen a konténeres iparhoz: semmi irodalmi/díszes (antikva+fleuron+szalag elvetve).

---

## 4. Egy oldal tartalma (a szerződés 2.2 szerint) — checklista

> Ez **sablon egy ÚJ oldalhoz**, nem hátralévő munka: az alábbiak mind az 5 meglévő
> oldalon készen vannak (lásd 3. Állapot).

Minden oldalnál kell:
- Főoldal a kerületi keresésre optimalizálva, kattintható telefon + ajánlatkérő űrlap
- **4 aloldal**: `/arak`, `/sittszallitas`, `/lomtalanitas-zoldhulladek`, `/kozterulet-engedely`
- `/adatkezeles` (GDPR adatkezelési tájékoztató — az űrlap miatt kötelező)
- Egyedi, kerület-specifikus szöveg + egyedi arculat
- SEO: `LocalBusiness` + `FAQPage` schema (JSON-LD), `app/sitemap.ts`, `app/robots.ts`
- Űrlap-backend: `app/api/lead/route.ts` + **Brevo** HTTP API (honeypot spamvédelem)
- Süti-sáv + GA4 (`NEXT_PUBLIC_GA_ID` a Vercelen, saját GA4-tulajdonnal)
- Mobil + gyors statikus (Next.js); reszponzív ellenőrizve 375 és 768 px-en

Minta a másoláshoz: a `zuglo/` és `rakosmente/` teljes szerkezete. A `app/lib/site.ts`-ben
vannak a kerület-konstansok — új oldalnál ezt kell átírni, plusz a tartalmat és a dizájnt.

---

## 5. Közös adatok (minden oldalon)

- **E-mail (megjelenítendő):** info@kontenersitt.hu
- **Űrlap → ide megy:** diszpecser@kontenersitt.hu (a `/api/lead` route Resenddel küldi)
- **Személyes leadás / telephely:** 1172 Budapest, Vidor utca 7. — átvétel **12.700 Ft (bruttó)**
- **Nyitvatartás:** H–P 7:00–20:00, Szo 7:00–18:00, V zárva
- **USP-k:** mindig elérhető telefonos ügyfélszolgálat; 2000 konténer; 30 modern autó;
  kirakás pár órán belül / csere 24 órán belül; ~90% újrahasznosítás; 1 hétig díjmentes ottmaradás;
  veszélyes hulladékon kívül vegyesen pakolható.
- **Adatkezelő (a /adatkezeles oldalon):** SZERVIZ-TRANS Kft., székhely 1172 Bp, VIII. utca 2. II/5.,
  adószám 12989946-2-42.

### Konténerméretek — CSAK 4 / 6 / 8 m³ (2026-08-07, Tamás kérése)
Az 5 és 7 m³-es konténereket **kivezetik**, ezért mind az 5 oldalról levettük:
méret-kártyák (3 db/oldal), űrlap-legördülő, méretajánló szövegek, GYIK és JSON-LD.
A „Népszerű" jelölés a **6 m³**-re került. Új aloldalnál is csak 4/6/8 szerepelhet!

### m³ árak (nettó, 8 m³-es vegyes konténer) — Tamás által MEGERŐSÍTVE 2026-08-06
| Kerület | Ár | Oldal |
|---|---|---|
| XIV. Zugló | 9.875 Ft/m³-tól | zuglo ✅ kiírva |
| XIII. Angyalföld | 10.250 Ft/m³-tól | angyalfold ✅ kiírva |
| XI. Újbuda | 11.875 Ft/m³-tól | ujbuda ✅ kiírva |
| IV. Újpest | 10.125 Ft/m³-tól | ujpest ✅ kiírva |
| XVII. Rákosmente | 9.375 Ft/m³-tól | rakosmente ✅ kiírva |

---

## 6. Build & deploy workflow

1. Fejlesztés a mappában (pl. `angyalfold/`), lokál ellenőrzés: `npm run build`.
2. **Commit — FONTOS: az e-mail `info.alpinestudios@gmail.com`** legyen (a repo git configja már erre van
   állítva; más e-mailt a Vercel blokkol: „commit email could not be matched to a GitHub account").
3. `git push origin main` → a Vercel **automatikusan deployol** (a git-integráció miatt).

Parancsok egy mappában:
```bash
npm install      # első alkalommal
npm run dev      # helyi fejlesztés (localhost:3000)
npm run build    # éles build ellenőrzése
```

### Ha a git push nem indít deployt (előfordult 2026-08-17-én)

Normál esetben a `git push origin main` automatikusan deployol mind az 5 projektben.
Ha nem indul el (a `vercel ls` nem mutat friss deployt percek után sem), CLI-ből lehet
kikényszeríteni — de **a repo gyökeréből kell futtatni, nem az oldal mappájából**, mert a
projekt Root Directory beállítása (`zuglo`, `rakosmente`, …) a deploy gyökeréhez képest
értendő, és a mappából indítva duplázódna az útvonal
(„The provided path …/zuglo/zuglo does not exist").

```bash
# a repo gyökerében, projektenként megismételve
mkdir -p .vercel
echo '{"projectId":"<prj_…>","orgId":"team_3br1ot0OgT9ABpPcOQzl6Bp7"}' > .vercel/project.json
npx vercel --prod --yes
rm -rf .vercel      # a végén takarítsd el
```

Projekt-azonosítók: zuglo `prj_NZ7lXre579ZnOuqEnMfoVoCrVLgB` · rakosmente
`prj_NsAB1SiCGKeGRqeqITufWcOAJUif` · angyalfold `prj_JYLhXjFOrQsYFl4aZFBydUncewbz` ·
ujbuda `prj_O9K7fH5Rr6nsuTcCUA7PcwwSVz2i` · ujpest `prj_xOaPMvGkkDf0k3nAhrCW1KK9JTH0`
(mindegyik `.vercel/project.json`-ban is benne van, az a fájl gitignore-olt).

---

## 7. Vercel — projektenkénti beállítás

Minden projektnél (5 db, ugyanaz a repo):
- **Root Directory** = a mappa neve (`zuglo`, `rakosmente`, …)
- **Framework Preset = Next.js** ⚠️ (az üresen létrehozott projektek „Other"-re álltak — ezt át kell
  állítani, különben: „No Output Directory named public")
- **Domain** hozzáadva a projekthez
- **Environment Variables** (a form működéséhez) — **csak 2 db, mind az 5 projektben azonos**:
  - `BREVO_API_KEY` = xkeysib-… (Brevo API kulcs)
  - `LEAD_TO` = diszpecser@kontenersitt.hu
  - (`LEAD_FROM` **nem kell**: mind az 5 domain hitelesítve van a Brevóban, és a kód
    automatikusan a saját domainjéről küld — `lead@<oldal domainje>`. Csak akkor add meg,
    ha ettől eltérő feladót akarsz.)

### DNS (a kliens állítja be a domain-szolgáltatónál)
- Apex `A` rekord → `76.76.21.21`
- `www` CNAME → `cname.vercel-dns.com`
- (Resend domain-hitelesítéshez a Resend által adott DKIM/SPF rekordok is — ez a spamvédelem)

---

## 8. Űrlap-backend (Brevo — 2026-08-07-től)

- `app/api/lead/route.ts` — serverless route: validál, honeypot-tal szűr, és a
  **Brevo transzakciós HTTP API**-jával küld (`https://api.brevo.com/v3/smtp/email`).
  Nem SMTP — az a Vercel serverless környezetben megbízhatatlan.
- A route mind az 5 oldalon **azonos**: a kerületet, domaint és a küldőt az
  `app/lib/site.ts`-ből veszi. Új oldalnál csak másolni kell.
- **Miért Brevo:** a Resendnél a saját domain fizetőssé vált ($20/hó). A Brevo
  ingyenes csomagja napi 300 levél, saját domainről, és **EU-s (francia) adatközpont**
  — emiatt az adatkezelési tájékoztatóban is tisztább a helyzet.
- **Domain-hitelesítés:** NEM a kontenersitt.hu-t hitelesítjük (ahhoz nincs hozzáférésünk),
  hanem a **kerületi domaineket**, amiket mi kezelünk. **2026-08-07: mind az 5 hitelesítve
  a Brevóban**, így minden oldal a saját domainjéről küld:
  `lead@kontenerrendeleszuglo.hu`, `lead@kontenerrendelesrakosmente.hu`, stb.
  A levél a `diszpecser@kontenersitt.hu` címre érkezik.
- **DNS-buktató:** ha a domainen már volt DMARC-rekord, a Brevóé mellett **két DMARC**
  keletkezik — ilyenkor a szabvány szerint egyik sem érvényes. Csak egy maradhat
  (bevezetés alatt a `p=none; rua=…`, később szigorítható `p=quarantine`-ra).
- **Amíg az env-ek nincsenek beállítva**, az űrlap udvarias „hívjon minket" hibát mutat (nem törik el).

---

## 9. Nyitott pontok / teendők

- [x] ~~**Brevo** fiók + domain-hitelesítés + env-ek~~ — **KÉSZ (2026-08-12)**: mind az 5 domain
      hitelesítve, env-ek beállítva, éles próba-beküldés sikeres (a user saját címére tesztelt).
      Az űrlapok élesben működnek.
- [x] ~~**Google Search Console**~~ — **KÉSZ (2026-08-12)**: mind az 5 domain Domain-property-ként
      hitelesítve (DNS TXT), sitemap beküldve (a mezőbe a **teljes URL** kell!), „sikeresen
      feldolgozva", 6-6 URL. Első használható pozíció/kattintás adat ~3–7 nap múlva.
      Kívülről ellenőrizve: mind az 5-nél megvan a google-site-verification TXT, az SPF és a
      brevo-code sértetlen, és mindenhol pontosan **1** DMARC-rekord van.
- [x] ~~**Képek**~~ — **KÉSZ (2026-08-13)**: oldalanként 2 db AI-generált fotó (21:9 „konténer
      munka közben" sáv + 4:3 kerületi utcakép), `next/image`-dzsel (WebP/AVIF, lazy load),
      kerület-specifikus magyar alt-szövegekkel. A konténer színe oldalanként az akcentszín,
      így az öt oldal képileg sem tűnik egy flottának. Tamás jóváhagyta a generálást.
      **Javítva 2026-08-17:** Tamás jelezte, hogy az első körben **görgős (multilift)**
      konténerek kerültek a képekre, márpedig nekik **billenős (skip)** konténereik vannak.
      Mind az 5 sávkép újragenerálva helyes formával és sokkal valósághűbben. A prompt-tanulság:
      a „cinematic / documentary / 35mm f/8 / golden hour" megfogalmazás stock-fotó hatást ad —
      helyette **„hétköznapi telefonos pillanatkép, lapos borult fény, ferde horizont, unalmas
      kompozíció, JPEG-artefaktok"** kell, és a hátteret egyszerűen kell tartani.
      Felirat/logó nincs a konténereken (az AI-szöveg torzul). Angyalföld sávképe 16:9
      (1584×891), a többi 21:9 (1584×672) — a `page.tsx`-ben a `height` prop ehhez igazodik.
- [x] ~~**Reszponzív átnézés 375 / 768**~~ — **KÉSZ (2026-08-14)**: Újbudán a hero H1
      („PANELLAKÁSTÓL" = 365 px) kilógott 375-ön → kisebb mobil cím; Rákosmentén (128 px),
      Újbudán (89 px) és Újpesten (3 px) a nav-menü szétnyomta a fejlécet tableten → a
      nav-menü 900 px alatt mindenhol rejtve (a telefon-gomb marad), Angyalföldre is
      preventíven. Mind az 5 oldalon `overflow-wrap`/`hyphens` védelem a hosszú magyar
      összetett szavakra. Élesben ellenőrizve: 5 domain × 6 oldal × 2 szélesség = 0 kilógás.
- [x] ~~**Google Analytics + süti-banner**~~ (szerződés 2.2) — **KÉSZ és ÉLES (2026-08-14)**.
      GA4-tulajdonok az **Alpine Studios** Analytics-fiókban (kerületenként külön tulajdon,
      hogy a havi riport oldalanként kiadható legyen). A `NEXT_PUBLIC_GA_ID` mind az 5 Vercel-
      projekten be van állítva mindhárom környezetre, redeploy megtörtént.

      | Oldal | Vercel-projekt | Mérési azonosító |
      |---|---|---|
      | Zugló | kontenersitt-zuglo | `G-97D97GQHE8` |
      | Rákosmente | kontenersitt-rakosmente | `G-1SXN1SYJ1L` |
      | Angyalföld | kontenersitt-angyalfold | `G-3DJDHXWT8D` |
      | Újbuda | kontenersitt-ujbuda | `G-0ECKMBVKQ0` |
      | Újpest | kontenersitt-ujpest | `G-2G5KFY0RKZ` |

      Megoldás: süti-sáv mind az 5 oldalon a saját arculatában; a GA-script **csak hozzájárulás
      után** töltődik be (előtte 0 Google-kérés — élesben ellenőrizve); Consent Mode v2
      (default denied, csak `analytics_storage` → granted, hirdetési süti soha);
      IP-anonimizálás; 12 hónapos újrakérdezés; „Süti-beállítások" gomb a láblécben, amely
      **a már lerakott `_ga` sütiket is törli**; adatkezelési tájékoztató 6. pont
      (Google Ireland mint adatfeldolgozó) és 10. pont (teljes süti-táblázat + visszavonás)
      frissítve mind az 5 oldalon. Beállítási útmutató: `GA-SETUP.md`.
      Az azonosítót cserélni: `vercel env rm/add NEXT_PUBLIC_GA_ID` + redeploy (build időben
      épül be, mentésre magától nem lép életbe).
- [x] ~~**Hívás- és űrlap-események (GA4)**~~ — **KÉSZ (2026-08-17)**. A szerződés 2.3. szerint a
      havi riportnak tartalmaznia kell a **hívásgomb-kattintásokat** és az **űrlapbeküldéseket**,
      de egyiket sem mérte semmi (a GA4 enhanced measurement a `tel:` linkeket nem fogja meg, az
      űrlap pedig fetch-csel megy, nincs klasszikus submit). Visszamenőleg pótolhatatlan lett volna.
      Megoldás mind az 5 oldalon:
      - `app/lib/track.ts` — `track()` csak akkor küld, ha a `gtag` létezik (azaz volt hozzájárulás),
        plusz `linkLocation()` a CTA helyének megállapításához
      - `app/components/PhoneTracking.tsx` — delegált figyelő a dokumentumon minden `tel:` linkre
        → **`phone_click`** esemény, `link_location` paraméterrel
        (`fejlec` / `mobil_hivosav` / `lablec` / `cta_sav` / `hero` / `felso_sav` / `tartalom`).
        Új tel: link automatikusan mérve lesz, nem kell bekötni.
      - `ContactForm.tsx` — sikeres beküldéskor **`generate_lead`** esemény
        (`kontener_meret`, `kerulet` paraméterrel). A `generate_lead` GA4 ajánlott esemény,
        ezért a beépített riportokban is megjelenik.
      **TEENDŐ a GA4-ben:** mind az 5 property-ben a `phone_click` és a `generate_lead` eseményt
      **kulcseseménnyé (konverzió)** kell jelölni — Adminisztrálás → Események → kapcsoló.
- [ ] **Google értékelések** beemelése (Tamás felajánlotta a „Hulladékudvar…" fiókot) — opcionális.
- [ ] **Havi riportgenerátor** (megbeszélve 2026-08-17, dashboard helyett): szkript, ami a GSC és a
      GA4 API-ból lehúzza az 5 property adatait, és két kimenetet ad — (a) ügyfélnek küldhető havi
      riport, (b) belső lista, hogy melyik kulcsszavakra érdemes a következő 5 aloldalt írni
      (a GSC-ben a 2–3. oldalon lévő kifejezések mozdulnak leggyorsabban). Dashboard csak 3+
      SEO-ügyfélnél, vagy ha ügyfélnek adnánk oda (megtartási érv a havi díjhoz).
- [ ] **Havi szolgáltatás — indul 2026. SZEPTEMBER 1-jén** (szerződés 2.3, 4.2): minden hónapban
      oldalanként +1 új, kulcsszóra célzott aloldal + havi riport (pozíciók, kattintások,
      hívások, űrlapok) + teljesítésigazolás. **75.000 Ft/hó** (15.000 Ft/oldal).
      A 4.2. szerint „az összes weboldal átadását követő naptári hónap első napjától" indul —
      az átadás augusztusban volt, ezért szeptember 1. Augusztusra nem jár havi díj (és nem is
      érdemes: azzal 5 aloldal is járna egy féloldalas hónapra, üres riporttal).

### Pénzügyi ritmus (szerződés 4–5.)
| | |
|---|---|
| Egyszeri fejlesztés | 25.000 Ft/oldal → **125.000 Ft** (2026-08-17-i TIG) |
| Havi szolgáltatás | 15.000 Ft/oldal/hó → **75.000 Ft/hó**, 2026-09-01-től |
| Áfa | **alanyi adómentes**, számla AAM megjelöléssel (4.3.) |
| Számlázás | havonta, a **tárgyhónap végén** (5.1.) |
| TIG | a Vállalkozó riportot küld → a Megrendelő 3 munkanapon belül állítja ki a saját mintáján (5.2.). Gyakorlatban: Simon előkészíti, Tamás aláírja. |
| Fizetési határidő | **5 naptári nap** a számla kézhezvételétől, átutalással (5.3.) |
| Felmondás | bármelyik fél, e-mailben is, a tárgyhónap utolsó napjára (8.2.) |

Szerződés: `C:\Users\user\Desktop\atrium\contracts\kontenersitt.pdf` (DocuSign, aláírva 2026-07-25).
Vállalkozó adatai a TIG-hez: Severin Simon Máté e.v., 1141 Budapest, Zoborhegy tér 13/B.,
adószám 91624178-1-42, nyilvántartási szám 61564992, bankszámla 30200014-19913410-97826363.
Elkészült TIG: `C:\Users\user\Downloads\Teljesitesigazolas_SZERVIZ-TRANS_2026-08.docx`.

**KÉSZ (2026-08-07-ig):** mind az 5 oldal megépítve végleges arculattal és élesítve; m³-árak
megerősítve és kiírva; karbantartás-middleware eltávolítva; Vercel Framework Preset/Root Directory
mindenhol rendezve; CTA-prose kontraszt-bug javítva mindenhol.

---

## 10. Megjegyzés a „kerületi cég látszata" kérésről

Tamás kérte, hogy a céges adatok az adatkezelési tájékoztatóba kerüljenek (ne a főoldalra).
Ez **egybeesik a GDPR-ral** (az adatkezelőt ott kötelező megnevezni), és így is csináltuk:
a valós SZERVIZ-TRANS Kft. adatai a `/adatkezeles` oldalon vannak, a marketingoldalak a kerületi
márkanevet viselik. Nincs megtévesztő/hiányzó céges adat — ez a jogszerű megoldás.
