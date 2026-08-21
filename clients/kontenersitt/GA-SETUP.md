# Google Analytics 4 — beállítás (5 oldal)

> **ÁLLAPOT: KÉSZ (2026-08-14).** Mind az 5 tulajdon létrejött az *Alpine Studios*
> Analytics-fiókban, a `NEXT_PUBLIC_GA_ID` be van állítva mind az 5 Vercel-projekten,
> a redeployok lefutottak, és élesben ellenőrizve mind az 5 oldal mér.
>
> | Oldal | Vercel-projekt | Mérési azonosító |
> |---|---|---|
> | Zugló | kontenersitt-zuglo | `G-97D97GQHE8` |
> | Rákosmente | kontenersitt-rakosmente | `G-1SXN1SYJ1L` |
> | Angyalföld | kontenersitt-angyalfold | `G-3DJDHXWT8D` |
> | Újbuda | kontenersitt-ujbuda | `G-0ECKMBVKQ0` |
> | Újpest | kontenersitt-ujpest | `G-2G5KFY0RKZ` |
>
> Az alábbi leírás akkor kell, ha új oldal jön, vagy egy azonosítót cserélni kell.

A mérés addig **alszik**, amíg a `NEXT_PUBLIC_GA_ID`
környezeti változó nincs beállítva az adott Vercel-projekten:

- nincs GA-azonosító → **nincs mérés, és süti-banner sem jelenik meg** (semmi nem változik az oldalon)
- van GA-azonosító → megjelenik a süti-sáv, és a mérőkód **csak az „Elfogadom” után** töltődik be

Tehát az alábbi lépések után „kapcsol be” minden, oldalanként külön-külön.

---

## 1. lépés — 5 GA4 property létrehozása

<https://analytics.google.com> → bal alul **Admin** (fogaskerék)

Ha még nincs fiók:
1. **Létrehozás → Fiók** — fiók neve: `SZERVIZ-TRANS Kft.`
2. Adatmegosztási beállítások: hagyd az alapértelmezetten
3. Ország: **Magyarország**, pénznem: **HUF**

Ezután **property-nként** (5×):

1. **Létrehozás → Tulajdon (Property)**
2. Tulajdon neve — javasolt, hogy egyértelmű legyen:
   | Property neve | Domain |
   |---|---|
   | Konténer Zugló | kontenerrendeleszuglo.hu |
   | Konténer Rákosmente | kontenerrendelesrakosmente.hu |
   | Konténer Angyalföld | kontenerrendelesangyalfold.hu |
   | Konténer Újbuda | kontenerrendelesujbuda.hu |
   | Konténer Újpest | kontenerrendelesujpest.hu |
3. Időzóna: **(GMT+01:00) Budapest**, pénznem: **HUF**
4. Iparág: *Business & industrial markets* (vagy *Other*)
5. **Adatfolyam (Data stream) → Web** → add meg a domaint (`https://…`), a folyam neve
   lehet ugyanaz, mint a property
6. A létrejött folyam oldalán kimásolod a **mérési azonosítót**: `G-XXXXXXXXXX`

> Minden domainhez **külön property kell** — így külön látszik mind az 5 kerület
> forgalma, és a havi riportok is oldalanként készíthetők.

---

## 2. lépés — az azonosító beírása a Vercelbe

Vercel → az adott projekt → **Settings → Environment Variables → Add New**

| Mező | Érték |
|---|---|
| Key | `NEXT_PUBLIC_GA_ID` |
| Value | az adott oldal `G-XXXXXXXXXX` azonosítója |
| Environments | **Production, Preview, Development** (mind a három) |

**Save**, majd **Deployments → a legfelső deploy → ⋯ → Redeploy.**

> Fontos: a `NEXT_PUBLIC_` előtagú változók **build időben** épülnek be a kódba,
> ezért a mentés után **újra kell deployolni** — magától nem lép életbe.

Ezt mind az 5 projekten meg kell csinálni, mindegyiken a **saját** azonosítójával.
Ne keverd össze őket, mert akkor két oldal ugyanabba a property-be mérne.

---

## 3. lépés — ellenőrzés

1. Nyisd meg az oldalt (jó, ha inkognitó ablakban) → **meg kell jelennie a süti-sávnak**
2. Nyomj **Elfogadom**-ot
3. GA4 → **Jelentések → Valós idejű (Realtime)** → 1 percen belül látszania kell 1 aktív felhasználónak
4. Ellenőrzés, hogy hozzájárulás nélkül tényleg nincs mérés:
   - inkognitó ablak → **Elutasítom**
   - F12 → **Network** fül → nincs `googletagmanager.com` kérés ✔

---

## Ami már kész van a kódban

- **Süti-sáv** mind az 5 oldalon, mindegyik a saját arculatában (nem sablonos plugin)
- **Hozzájárulás nélkül semmilyen mérési süti nem keletkezik** — a GA-script fizikailag
  nem töltődik be az „Elfogadom” előtt (ez a legszigorúbb, GDPR-biztos megoldás)
- **Google Consent Mode v2**: alapértelmezés `denied`, elfogadás után csak az
  `analytics_storage` vált `granted`-re — hirdetési/remarketing süti soha nem indul
- **IP-anonimizálás** bekapcsolva
- A döntés **12 hónapig** él, utána az oldal újra rákérdez (NAIH-ajánlás)
- **„Süti-beállítások”** gomb a láblécben — a hozzájárulás bármikor visszavonható
- **Adatkezelési tájékoztató** frissítve mind az 5 oldalon:
  - 6. pont: Google Ireland Limited bekerült az adatfeldolgozók közé
  - 10. pont: teljes süti-táblázat (típus, cél, jogalap, időtartam) + a visszavonás módja

## Ha valaki rákérdez: miért nem sütibanner-plugin?

Mert az ingyenes pluginok (Cookiebot, CookieYes stb.) külső szerverre töltenek
scriptet, lassítják az oldalt (rontja a Core Web Vitals-t és így a Google-helyezést),
és sok esetben maguk is sütiznek. Ez a megoldás ~2 KB, nincs külső hívás, és
pontosan azt csinálja, amit kell.
