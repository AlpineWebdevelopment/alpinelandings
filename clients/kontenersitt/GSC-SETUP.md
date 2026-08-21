# Google Search Console — beállítás lépésről lépésre

> Mind az 5 domainhez ugyanez a menet. Kb. 10–15 perc az egész.
> Kódot NEM kell módosítani: a `sitemap.xml` és a `robots.txt` mind az 5 oldalon él.

**Domainek:**
1. kontenerrendeleszuglo.hu
2. kontenerrendelesrakosmente.hu
3. kontenerrendelesangyalfold.hu
4. kontenerrendelesujbuda.hu
5. kontenerrendelesujpest.hu

---

## 1. Property létrehozása (domainenként)

1. Nyisd meg: **search.google.com/search-console**
2. Bal felül a property-választó → **Add property**
3. Válaszd a **bal oldali „Domain"** dobozt (NE az „URL prefix"-et)
   - a Domain property lefedi a www/nem-www és http/https változatokat is
4. Írd be a domaint **protokoll nélkül**: `kontenerrendeleszuglo.hu`
5. A Google ad egy TXT-rekordot, valami ilyet:
   ```
   google-site-verification=abc123def456...
   ```

## 2. A TXT-rekord felvitele (ugyanoda, ahova az A-rekordokat vitted)

- **Típus:** TXT
- **Host / Név:** `@` (vagy üresen hagyva — a domain gyökere)
- **Érték:** a Google által adott `google-site-verification=...` sor
- **TTL:** maradhat az alapérték (600)

> ⚠️ **Fontos — ez NEM olyan, mint a DMARC volt!**
> A gyökérben **több TXT-rekord is lehet** egyszerre, és ez teljesen rendben van.
> A meglévő SPF-et (`v=spf1 ...`) és a `brevo-code:...` rekordot **NE írd felül és NE töröld** —
> az új google-site-verification sort **mellé** vedd fel, külön rekordként.

Utána vissza a Search Console-ba → **Verify**. Ha még nem megy, várj 5–10 percet
(DNS-terjedés), és nyomd meg újra.

## 3. Sitemap beküldése (property-nként, hitelesítés után)

1. Bal menü → **Webhelytérképek** (Sitemaps)
2. Az „Új webhelytérkép hozzáadása" mezőbe a **TELJES URL** kell (a puszta
   `sitemap.xml` nem mindig elég), pl.:
   ```
   https://kontenerrendeleszuglo.hu/sitemap.xml
   ```
3. **Küldés**
4. Pár perc múlva „**A webhelytérkép sikeresen feldolgozva**", 6 felfedezett oldallal

> Ha közvetlenül beküldés után „**Sikertelen lekérés**" jelenik meg: ez normális,
> a GSC gyakran késleltetve olvassa be. Órákon belül magától átvált „sikeres"-re —
> nem kell újraküldeni. (Ellenőrizve: a sitemap HTTP 200-at ad, `application/xml`
> típussal, és Googlebot user-agenttel is elérhető.)

## 4. Első indexelés meggyorsítása (opcionális, de érdemes)

1. Felül a keresősávba illeszd be a főoldal URL-jét (pl. `https://kontenerrendeleszuglo.hu/`)
2. **Request indexing**
3. Ugyanezt megteheted az `/arak` oldallal is — a többit a sitemap alapján magától bejárja

## 5. Ismételd meg mind az 5 domainre

Minden domainhez **külön property** és **külön TXT-rekord** tartozik
(a google-site-verification érték domainenként más).

---

## Mire számíts

- **Hitelesítés:** azonnal–10 perc
- **Első bejárás:** órák–1-2 nap
- **Használható pozíció/kattintás adat:** kb. 3–7 nap után kezd összegyűlni

Ez adja a havi riport (szerződés 2.3) alapját: pozíciók, kattintások, megjelenések.

## Bónusz (2 perc): Bing Webmaster Tools

A **bing.com/webmasters** felületén be tudod importálni a property-ket
közvetlenül a Search Console-ból — külön hitelesítés nélkül. Kis plusz forgalom,
minimális munka.
