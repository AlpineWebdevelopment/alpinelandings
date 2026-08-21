# kontensitt – kerületi konténerrendelő oldalak

Ügyfél: **SZERVIZ-TRANS Kft.** (kontenersitt.hu) – kapcsolattartó: Varga Tamás.
5 kerület-specifikus, statikus landing oldal. **Cél: minden oldal a saját kerületére a Google első oldalára (lokális SEO).**

## Monorepo felépítés

Egy repo, mappánként egy önálló oldal. Minden mappa **külön Vercel-projekt** lesz (Root Directory = a mappa neve), saját domainnel. A GitHub-repót a Google nem látja, a mappaszerkezet SEO-szempontból semleges.

```
kontensitt/
  zuglo/        -> kontenerrendeleszuglo.hu       (kész draft: index.html)
  rakosmente/   -> kontenerrendelesrakosmente.hu
  angyalfold/   -> kontenerrendelesangyalfold.hu
  ujbuda/       -> kontenerrendelesujbuda.hu
  ujpest/       -> kontenerrendelesujpest.hu
```

## Oldalankénti adatok

| Mappa | Domain | Kerület | Telefon | m³ ár (nettó, 8 m³ vegyes) |
|---|---|---|---|---|
| `rakosmente` | kontenerrendelesrakosmente.hu | XVII. | +36 21 3355 211 | *(egyeztetni – nincs a listában)* |
| `zuglo` | kontenerrendeleszuglo.hu | XIV. | +36 21 3355 222 | 9.875 Ft/m³-tól |
| `angyalfold` | kontenerrendelesangyalfold.hu | XIII. | +36 21 3355 233 | 10.250 Ft/m³-tól |
| `ujbuda` | kontenerrendelesujbuda.hu | XI. | +36 21 3355 244 | 11.875 Ft/m³-tól |
| `ujpest` | kontenerrendelesujpest.hu | IV. | +36 21 3355 255 | 10.125 Ft/m³-tól |

## Közös adatok (minden oldalon)

- **E-mail (megjelenítendő):** info@kontenersitt.hu
- **Űrlap / ajánlatkérés / visszahívás megy ide:** diszpecser@kontenersitt.hu
- **Személyes hulladékleadás:** 1172 Budapest, Vidor utca 7. — telephelyi átvétel: 12.700 Ft (bruttó)
- **Nyitvatartás:** H–P 7–20, Szo 7–18, V zárva
- **USP-k:** mindig elérhető telefonos ügyfélszolgálat; 2000 konténer; 30 szállítóautó; kirakás pár órán belül, csere 24 órán belül; ~90% újrahasznosítás; 1 hétig díjmentes ottmaradás; veszélyes hulladékon kívül vegyesen pakolható.

## SEO must-have (oldalanként)

- Kerület-specifikus **egyedi szöveg + egyedi arculat** (ne find-replace duplikátum).
- `LocalBusiness` **structured data (schema)** – kerület, telefon, nyitvatartás, szolgáltatási terület.
- Egyedi `title` / H1 / meta a kerületi kulcsszóra.
- Kattintható telefonszám + ajánlatkérő űrlap (→ diszpecser@).
- `sitemap.xml`, `robots.txt`, Google Search Console + Analytics.
- **Az 5 oldalt ne linkeld egymáshoz** (network-footprint elkerülése).

## Deploy (Vercel)

1. Push GitHubra.
2. Vercel Pro (kereskedelmi használat).
3. Mappánként új Vercel-projekt → **Root Directory** = a mappa neve → domain hozzáadása a projekthez.

## DNS (kliens állítja be a domain-szolgáltatónál)

Minden domainre ugyanaz, „egyben" beállítható:

- **A rekord (apex, pl. kontenerrendeleszuglo.hu):** `76.76.21.21`
- **CNAME (www):** `cname.vercel-dns.com`

Fontos: a közös A-rekord IP nem elég önmagában – minden domaint hozzá kell kötni a saját Vercel-projektjéhez (ezt a fejlesztő intézi a Vercel felületén). A Vercel a domain (Host) alapján dönti el, melyik oldalt szolgálja ki.
