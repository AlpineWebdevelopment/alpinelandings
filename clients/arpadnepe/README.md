# Árpád Népe Egyesület — három változat, öt színséma (demó)

Bemutató oldal az **Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület** részére.

Két, egymástól **független** tengely — az egyesület kettőt választ, nem egyet:

1. **Változat** (`/a`, `/b`, `/c`) — kettő tartozik hozzá: a hero FELÉPÍTÉSE (mi a fotó
   szerepe, hol ül a legfrissebb Facebook-bejegyzés) és a hero alatti oldal
   FORMANYELVE (szakaszkeret, lapforma, díszítmény, címbetű). A tartalom és a
   szerkezeti váz mindhárom változatban azonos.
2. **Színséma** (Pergamen, Indigó, Posztó, Parázs, Szattyán) — kizárólag a tokenek
   értéke. **Minden oldal jobb alsó sarkában lebegő váltó** van, amivel bármelyik
   változat bármelyik színben megnézhető: 3 × 5 = **15 nézet**. A választás
   localStorage-ba kerül, tehát aloldalra lépve és a változatok között váltogatva is
   megmarad.

Ugyanaz a lebegő váltó **a három demó között is átlép** — és megtartja az aktuális
aloldalt: az `/a/akciok`-ról a `/c/akciok`-ra visz, nem a kezdőlapra.

> A lebegő váltó a **bemutató kezelőszerve**, nem a leendő oldal része — az élesre nem
> kerül rá (`components/SemaValto.tsx` törlése, és a `ValtozatLayout` egy sora).

Ez nem az éles oldal. Formában viszont annak készült.

---

## Futtatás

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # éles build — tisztán lefut
npm start            # a build kiszolgálása
npm run check-fonts  # ellenőrzi, hogy minden betűben megvan az ő ű Ő Ű (build után)
```

Nincs CMS, nincs analitika, nincs sütibanner, nincs backend. Minden oldal statikusan
elő van generálva (22 útvonal).

### Vercel

A projekt gyökere ez a mappa (`clients/arpadnepe`). A Vercel dashboardon:
Add New Project → repó kiválasztása → **Root Directory: `clients/arpadnepe`** →
Framework: **Next.js** → Deploy. Buildparancs és kimeneti könyvtár marad az alapértelmezett.

> A repó több klienskönyvtárat tartalmaz, ezért a `next.config.ts` rögzíti a Turbopack
> gyökerét — enélkül a build a repón kívüli lockfile-t keresné.

---

## A tervezés

### Tipográfia

- **Cinzel** — vésett római kapitálisok. Minden címsor ebből van, nagybetűvel.
  A kódexek és a kőfeliratok címbetűje.
- **EB Garamond** — kódex-antikva, kurzívval. Kenyérszöveg, idézetek, vezetők.

**Megemelt betűfokozat.** Az EB Garamond kicsi x-magasságú: 16 px-en úgy
olvasódik, mint egy groteszk 14 px-en. Ezért a teljes Tailwind-skálát feljebb
hangoltuk az `app/globals.css` `@theme` blokkjában — a törzsszöveg **17 px**,
a kísérőszöveg 15 px, a képaláírás 13 px, a szakaszcím 32–38 px. Egyetlen
helyen állítható, nem osztályonként.

### Szerkezet

**Fejléc:** balra kör alakú jelvény (az egyesület jele vonalasan) + a névírás,
középen a hét menüpont, jobbra a telefonszám és az elsődleges gomb. A jelvény
**helykitöltő** — a végleges oldalra az egyesület eredeti, vektoros logója kerül.

**Hero:** felül végigfut a vízszintes támogatói hirdetősáv; alatta balra az illuminált
iniciáléval induló címblokk pecsétléccel, a bemutatkozóval és a két gombbal.
**Statisztika és ár nincs a heróban** — a számok az „Eredmények", az árak a
„Kapcsolat" szakaszban állnak, ott, ahol a látogató keresi őket.

A fotó szerepe VÁLTOZATONKÉNT más — ezt a `heroHatter` mező mondja meg a
`variants/config.ts`-ben:

- **1. és 3. változat** (`heroHatter: 'lap'`) — a fotó külön mezőben, a jobb hasábban áll.
- **2. változat** (`heroHatter: 'kep'`) — a fotó **kitölti a hero hátterét**, fátyol
  alatt; a címblokk és a hírkártya a képen ül. Külön fotómező nincs. A kép dekoratív
  háttér (`alt=""`), a képaláírás láthatóan, a hero alján kap helyet.

**A hero alatt** széles, kevés elemű blokkok követik egymást: idézetblokk (eszmeiség) →
lépcsős fotósor + kiemelt lap (élet nálunk) → kiemelt lap (50 óra) → statisztikarács
(eredmények) → programrács (rendezvények) → idézetek (értékelések) → naponkénti
edzésrend és elérhetőség (kapcsolat).

**Aloldalak:** mind a hat egyetlen szerkezetből épül (`components/pages/*`), és
színsémától függetlenül azonos — a témát a szülő layout adja.

### Háttér — az egyesület pecsétje

A háttér ornamentikája **az egyesület saját logójából** készült. A
`components/Logo.tsx` a logó **vonalas (outline) újrarajzolása**: körpecsét
kettős peremmel, a gyűrűben a névfelirat és négy pont, a mezőben napkorong
sugarakkal, íj és szablya keresztben, jobb alul holdsarló. Minden `fill="none"`
és `currentColor`, ezért bármelyik színsémában használható.

| Elem | Hol dolgozik |
|---|---|
| `PecsetMezo` | A pecsét kicsinyített kontúrja átlós rácsban ismételve — ez a szakaszok háttértextúrája (hero, rólunk, élet nálunk, 50 óra, rendezvények, kapcsolat, és az aloldalak fejléce). |
| `LogoPecset` | A teljes pecsét nagy vízjelként: az eredmények szakaszban felirattal, az 50 órás szakaszban felirat nélkül. |
| `LogoJel` | A pecsét magja (nap, íj, szablya, hold) gyűrű nélkül — a szakaszelválasztó közepén. |
| `LogoNapJel` | A napkorong aprón — a szakaszcímkék előtti bekezdésjel és a támogatói sáv elválasztója. |
| `PecsetLec` | Hajszálvonal a pecsétgyűrű pontritmusával — a szakaszelválasztó léc. |
| `LogoKor` | Kör alakú jelvény a fejlécbe. Nem a nagy pecsét kicsinyítése: 44–48 px-en az túl sűrű lenne, ezért külön, egyszerűsített rajz — keresztbe tett íj és szablya, bal felül napkorong. |

Ehhez jön a pergamen-/vászon-/posztószemcse (`feTurbulence`), hogy az alap
sehol ne legyen sima színfelület.

> **Az éles oldalhoz:** ez a logó újrarajzolása, nem az eredeti fájl. A fejlécbe
> és a favikonhoz kérjük az egyesülettől az eredeti, vektoros (SVG/AI/EPS)
> logót. Az eredeti körirata kézzel rajzolt, rovás stílusú betűkkel készült;
> a vonalas változatban a névgyűrű a lap saját címbetűjével (Cinzel) fut, hogy
> a háttérben tisztán olvasható maradjon.

---

## A három változat

| Útvonal | Változat | A hero fotója | A friss bejegyzés | Alapból |
|---|---|---|---|---|
| `/a` | **Hírcsík** | külön mezőben, a jobb hasábban | teljes szélességű csík a fejléc alatt | Pergamen |
| `/b` | **Képes hero** | KITÖLTI a hero hátterét, fátyol alatt | kártya a háttérfotón, a jobb hasábban | Indigó |
| `/c` | **Cédula a képen** | külön mezőben, a jobb hasábban | kártya a fotó alsó részén | Posztó |

### A hero alatti oldal formanyelve

A hero mindhárom változatban ugyanaz marad; ami alatta van, változatonként más
formanyelvet visel. Ez egy hatókörosztály a burkolón (`stil-*`), tehát **minden
aloldalra is átüt** — nem csak a kezdőlapra.

| Változat | Formanyelv | Mit csinál |
|---|---|---|
| `/a` | **Visszafogott kódexlap** | A megszokott: keretes lapok, vonalas pecsétmotívum, letisztult rács. Ez nem változott. |
| `/b` | **Sztyeppe — honfoglalás előtti** | Nemez és bőr, nem pergamen: doboz helyett **sáv és kör**. Palmettás szalag a szakaszfejek alatt, palmettarács a háttérben, felül szíjszegélyes lapok, **korong alakú fotók**, vert korongba írt számok, lecsapott sarkú gombok. Címbetű: **Cormorant Unicase**. Kódexes vagy gótikus utalás szándékosan nincs benne — 890 előtt az anakronizmus lenne. |
| `/c` | **Kódex — középkori magyar** | **Vonalazott írástükör** a szakaszok mögött, indás záróvonal a szakaszfejek alatt, **iniciálé** a vezető bekezdésen, rubrikált `¶` bekezdésjelek, **lapszéli indadísz** a kiemelt lapok bal szélén, kettős vonalazású keretek, **kéthasábos szedés** hasábvonallal, kipontozott regiszter a számoknál. Címbetű: **gótikus textúra** (Grenze Gotisch) — a középkori magyar oklevelek írásképe. |

Két dolog a formanyelvekről:

- **A színtől függetlenek.** A díszítmények CSS-maszkkal készülnek
  (`background-color: var(--v-accent2)` + `mask-image`), nem háttérképként — így
  sémaváltáskor maguktól átszíneződnek. Mind a kilenc kombináció működik.
- **A címbetű a heróra is átüt.** A hero *felépítése* nem változott, de a betűtípusa
  igen — különben a lap teteje és alja két külön oldalnak látszana. Ha a hero
  betűjét is az eredetin kellene tartani, az a `--v-display` token egy sora.

A gótikus textúra és a unicase **csupa nagybetűvel olvashatatlan**, ezért ezekben a
formanyelvekben a `text-transform: uppercase` ki van kapcsolva mindenhol, ahol a
címbetű fut. A **kenyérbetű mindhárom változatban EB Garamond marad** — hosszú
szöveget gótikussal szedni nem lenne olvasható.

Az „alapból" oszlop csak azt mondja meg, milyen színnel NYÍLIK MEG az oldal — hogy a
választóoldalon egymás mellett mindhárom séma látszódjon. A váltóval mindegyik
változat mindegyik színre átállítható.

## Az öt színséma

| Séma | Alap | Kiemelés | Díszítés | Harmadik |
|---|---|---|---|---|
| **Pergamen** | `#F2E8D2` pergamen | `#A32E17` cinóber | `#9E772B` aranyfüst | `#2C4A7C` lazúr |
| **Indigó** | `#1B2E52` indigó | `#DFA08E` / `#AE3B2C` krapp | `#E8EEF7` mintafehér | `#F7F2E6` vászon (lapok) |
| **Posztó** | `#F0EDE3` gyapjú | `#2C4A38` posztózöld | `#91742C` sárgaréz | `#4F6248` fakó zöld |
| **Parázs** | `#FFFFFF` mészfehér | `#B04405` parázs | `#E8891F` láng | `#121212` korom (törzsszöveg) |
| **Szattyán** | `#2B1F17` cserzett bőr | `#E3A877` vörösréz | `#F2E4CD` csont | `#93BDA8` patinazöld |

- **Pergamen** — a középkori kódexlap festékei. Világos, meleg, vörös vezérszínnel.
- **Indigó** — a kékfestő vászon színei. Az egyetlen sötét séma: a tartalom
  vászonszínű **lapokon** ül, amelyeken a tinta megfordul.
- **Posztó** — a szűrhímzés színei. Hűvösebb fehér gyapjú alap, zöld vezérszínnel.
  **Szándékosan nincs benne piros** a zöld és a fehér mellett, hogy a hármas ne
  olvasódjon zászlóként.
- **Parázs** — a tábortűz színei: mészfehér alap, fekete törzsszöveg, parázsnarancs
  kiemelés. A készlet legerősebb kontrasztú sémája. A narancs **két árnyalatban** van:
  a szövegszín sötétebb (`#B04405`), mert a világos lángnarancs fehéren csak 2,6:1-et
  hozna; a `#E8891F` csak díszítésre megy.
- **Szattyán** — cserzett bőr. A nomád tarsoly és a kódexkötés ugyanabból az anyagból
  készült, ezért ez a séma mindkét új formanyelvhez illik. A **második sötét séma**, de
  az Indigóval ellentétben itt a lapok is sötétek maradnak, tehát nincs tintafordítás.

### Hogyan működik a témázás

Minden szín egy `--v-*` CSS változóban ül, sémánként egy hatókörosztály alatt
(`.sema-pergamen | .sema-indigo | .sema-poszto` az `app/globals.css`-ben). A Tailwind
`@theme **inline**` blokk ezekre hivatkozik, így a `bg-accent`, `text-ink` stb. mindig
az aktuális séma értékét kapja.

> `@theme inline` kell, nem sima `@theme`. Sima `@theme` esetén a `--color-*` a `:root`-on
> oldódna fel a gyökér értékeire, és a hatókörös felüldefiniálás nem érne el a
> segédosztályokig — minden séma ugyanazt a színt kapná.

Az **Indigó sémának két tokenkészlete van**: a sötét alap és a világos lap
(`.lap-kor`). A `Lap` komponens belsejében a tinta megfordul, így ugyanaz a
kártyaszerkezet mindkét közegben olvasható marad. A világos sémákban a `.lap-kor`
nem változtat semmin.

### A lebegő bemutatóváltó

`components/SemaValto.tsx`. Két dolgot kapcsol.

**Változat.** Átvisz a másik két demóra, és megtartja az aktuális aloldalt: az
útvonalból (`usePathname`) leválasztja a változat-előtagot, és a maradékot fűzi az új
elé. Az aktuális változat `aria-current="page"`-et kap.

**Színséma.** Egyetlen dolgot csinál: a gyökérelemen
(`#sema-gyoker`) cseréli a hatókörosztályt. Mivel a teljes paletta CSS-változókból
jön, ez az egy osztálycsere átszínezi az egész oldalt — nincs újratöltés, nincs
szerveroldali változat.

A választás `localStorage`-ba kerül, és a `ValtozatLayout`-ba ágyazott apró szkript
**még az első festés előtt** visszaállítja, tehát nincs színvillanás. Ezért van a
gyökérdiven `suppressHydrationWarning`: a szkript szándékosan eltér attól, amit a
szerver renderelt. Ha a `localStorage` nem elérhető (privát mód, letiltott tároló),
a váltó ugyanúgy működik, csak nem emlékszik — ez mérve is van.

Akadálymentesség: valódi `<button>`-ok, `aria-expanded` / `aria-controls` (a panel
mindig a DOM-ban van, csak `hidden` — így az `aria-controls` létező elemre mutat),
`aria-current` az aktív sémán, Escape-re és kívülre kattintásra zár, a fókusz a
nyitógombra tér vissza, minden célpont legalább 44 px.

---

## A két hero-követelmény

### 1. Támogatói sáv — vízszintesen futó hirdetőléc, a hero tetején

`components/SponsorBar.tsx`. A lista kétszer szerepel egymás mellett, a belső elem
`translateX(-50%)`-ig fut, így a hurok varrat nélkül ismétlődik. Hover és fókusz esetén
megáll. `prefers-reduced-motion` esetén az animáció kikapcsol, és a sáv sima, oldalra
görgethető listává válik.

Akadálymentesség: `aria-label="Támogatóink"`, a duplikált példány `aria-hidden`, és a
sávban **nincs fókuszálható elem** — nem tudja csapdába ejteni a billentyűzetes navigációt.

### 2. Legfrissebb Facebook-bejegyzés — háromféle megoldás

Mindhárom változat ugyanazt a tartalmat mutatja, csak más helyen — hogy az egyesület
össze tudja hasonlítani, melyik kompromisszum a jó. Mindegyik a hajtás felső részén
van, és egyik sem viszi el a címsor elől a fókuszt.

| Változat | Megoldás | Hol |
|---|---|---|
| `/a` **Hírcsík** | `LatestPostSav` | Teljes szélességű hírcsík **közvetlenül a fejléc alatt**, még a támogatói sáv fölött. Ez a legfelső lehetséges hely — a látogató a címsor előtt látja. |
| `/b` **Képes hero** | `LatestPostCard` (`kepen`) | Kártya a hero **háttérfotóján**, a jobb hasábban. 92%-os fedettségű lapszín, hogy a kép átüssön alatta. |
| `/c` **Cédula a képen** | `LatestPostKepAlja` | Kártya a hero **fotójának alsó részére ültetve**, a kép szélétől behúzva — mint egy múzeumi tárgycédula. |

Mérve (1440 px, a lap tetejétől): a bejegyzés az `/a`-n 89 px-en, a `/b`-n 258 px-en,
a `/c`-n 396 px-en kezdődik — a címsor rendre 309 / 252 / 244 px-en. A `/c`-n a kártya
a fotó alsó **45%-át** takarja, a felső több mint fele végig szabadon marad.

> **Mobilon** (390 px) az `/a` hírcsíkja 85 px-en, a `/b` kártyája 633 px-en, a `/c`-é
> 768 px-en ül — mindhárom az első képernyőn. A `/c`-n a fotó ezért mobilon
> **négyzetes** (`aspect-square`), `sm`-től felfelé 4:5 arányú: állóban a kártya
> 856 px-re, a hajtás alá csúszott volna.

#### Mock vagy éles beágyazás — egy kapcsoló

A `components/LatestPost.tsx` tetején:

```ts
export const ELES_FB_BEAGYAZAS = false;
```

- `false` (ez fut a demóban) — stílusos mintakártya. Mindig megjelenik, akkor is, ha nincs
  net, vagy a böngésző blokkolja a Facebookot. A benne látható szöveg az egyesület saját,
  jelenlegi weboldalán hirdetett nyílt napjának szövege — kitalált állítás nincs benne.
- `true` — a **valódi Facebook Page Plugin** iframe, ami az oldal élő bejegyzéseit mutatja.
  Tokenre nincs szükség, csak arra, hogy az oldal nyilvános legyen.

Egyetlen sor átállítása mindhárom sémában élesíti. A demóban azért marad a mintakártya,
mert a Facebook a saját kinézetét hozza magával, és reklámblokkolók mellett üresen marad —
ügyfélbemutatón ez rosszul sülne el. Éles oldalon viszont ez az igazi megoldás.

---

## Felépítés

```
content/          Közös tartalomréteg — mindhárom séma EZT fogyasztja
  egyesulet.ts      alapadatok, elérhetőség, bemutatkozás, támogatás
  edzesek.ts        heti rend, árak, felszerelés, közösségi élet
  programok.ts      rendezvényszervezés, programelemek, körhinta, eszközbérlés
  referenciak.ts    a 2025-ös és 2024-es teljes rendezvénylista + válogatás
  kozossegi.ts      50 órás közösségi szolgálat
  dokumentumok.ts   iratok és nyilvános adatok
  akciok.ts         a jelenlegi oldal saját ajánlatai
  minta.ts        ⚠ AZ EGYETLEN fájl kitalált (MINTA) tartalommal
variants/
  config.ts         a három VÁLTOZAT és a három SZÍNSÉMA leírása (két külön tengely)
  fonts.ts          Cinzel + EB Garamond + Cormorant Unicase + Grenze Gotisch,
                    mind latin-ext vágattal
components/
  pages/Landing.tsx a kezdőlap — mindhárom séma ezt rendereli
  pages/*.tsx       a hat aloldal közös szerkezete
  Logo.tsx          a pecsét vonalas SVG-je + a belőle épülő háttérmező és léc
  Texture.tsx       anyagszemcse, iniciáléfészek, lapkeret
  Ornament.tsx      szakaszelválasztó, rubrumjel — a pecsét formanyelvéből
  SponsorBar.tsx    vízszintesen futó támogatói hirdetősáv
  LatestPost.tsx    a hero hírkártyája (3 elhelyezés) + éles beágyazás kapcsolója
  ValtozatLayout.tsx a három változat közös kerete (fejléc, lábléc, sémagyökér)
  SemaValto.tsx   ⚠ a lebegő színsémaváltó — a BEMUTATÓ eszköze, élesre nem kell
  Nav / Footer / Minta / ui.tsx
app/
  globals.css       színsémák, tokenek, hero-fátyol
  stilusok.css      a három FORMANYELV — a `stil-*` hatókörosztályok
  page.tsx          változatválasztó
  a|b|c/            layout (11 sor: a ValtozatLayout hívása) + kezdőlap + 6 aloldal
public/foto/        25 fotó az egyesület saját képgalériájából
scripts/
  gen-routes.mjs    a 18 aloldal-útvonalfájl generálása
  check-fonts.mjs   latin-ext lefedettség ellenőrzése a buildben
```

---

## Tartalom — mi valós és mi minta

**Forrás:** <https://arpadnepe.mozello.hu/> — a kezdőlap és minden aloldala letöltve,
majd normalizálva a `/content` rétegbe. Minden tény, ár, időpont, cím és név onnan való.
A `/content/*.ts` fájlok fejlécében ott a hivatkozás, melyik aloldalról.

**Kitalált tény nincs.** Ahol a demóhoz olyan tartalom kellett, ami a jelenlegi oldalon
nem létezik, ott az elem **`MINTA` jelvényt** kapott, és a szöveg megmondja, mi kerül majd
a helyére:

| Hol | Miért minta |
|---|---|
| Vélemények (`/ertekelesek`, kezdőlap) | A valós értékelések a Facebookon és a Google-térképen élnek, onnan nem tudtuk letölteni |
| Versenyeredmények (`/eredmenyek`) | A jelenlegi oldal annyit ír: „több versenyen is részt vettünk és sok érmet nyertünk" — konkrét helyezés, név nincs |
| Támogatók (hero sávja) | Nincs megnevezett támogató. A nevek szándékosan generikusak: „Támogató Kft. — minta" |
| Kedvezmények (`/akciok`) | Próbaalkalom és ajánlói kedvezmény nem szerepel a jelenlegi oldalon |
| Éves beszámoló, adatkezelési tájékoztató, 1% (`/dokumentumok`) | Ilyen dokumentum nincs az oldalon. **Adószámot nem találtunk ki** — a valós (`18184785-1-42`) a saját oldalukról van, de az 1%-os felajánlásról nem állítunk semmit |
| Óraigazolás lépése (`/kozossegi-szolgalat`) | A jelentkezés menetének 4. lépése nem szerepel az oldalon |
| „Friss hírek" kártya | Mock, amíg az `ELES_FB_BEAGYAZAS` kapcsoló `false` — lásd fent |

A minta tartalom **egyetlen fájlban** van: `content/minta.ts`. Ha az egyesület megküldi a
valós anyagot, az a fájl cserélődik, a felület marad.

Két apró pontosítás, ami kiderült a letöltésnél:

- A jelenlegi oldal négy helyen hivatkozik egy „programajánló füzet" PDF-re, de a fájl
  **nem tölthető le** (a tárhely csak belső hálózatról érhető el). A dokumentumok
  oldalon ez pótlandó tételként szerepel.
- A referencialistát az egyesület 2019-ig visszamenőleg vezeti. A 2025-ös (36 tétel) és a
  2024-es (46 tétel) lista teljes egészében bekerült; a korábbi évekből válogatás van,
  darabszám-állítás nélkül — azok a listák nincsenek sorszámozva a forrásban.

### Fotók

25 kép az egyesület **saját képgalériájából** (`public/foto/`), az ottani saját
képaláírásokkal mint alt szöveggel. Stockfotó nincs.

---

## Minőség — amit ellenőriztünk

- `npm run build` tisztán lefut, 22 statikus oldal
- **Betűk:** mindkét betűcsalád latin-ext vágattal (ő ű Ő Ű) — `npm run check-fonts`
  a build kimenetéből ellenőrzi, nem feltételezésből
- **Kontraszt:** nem tokenpárokból számolva, hanem a **kirenderelt oldalakon** mérve.
  Mind a 22 oldalon, **mind az öt színsémában** (mert a váltóval bármelyik oldal
  bármelyik színben megnézhető), 1440 és 390 px-en, minden szövegelem tényleges színe
  és a fölé kompozitált tényleges háttere — **38 180 elem, 0 esik a küszöb alá**
  (4.5:1 törzsszövegnél, 3:1 nagy fokozatnál). A nyitott váltópanel külön is mérve,
  mind az öt sémában.

  A kompozitba a formanyelvek **teljes felületű `::before` rétegei** is beleszámítanak
  (palmettarács, vonalazott írástükör): ezek a szakasz háttere fölött, a szöveg alatt
  festődnek, tehát pont a kritikus réteget hagynánk ki nélkülük. Ez a mérés fogta meg,
  hogy a kódex vonalazása 50%-os fedésnél 4,27:1-re vitte le a halvány címkeszínt —
  innen jött a 25%-os fedés és két sötétebb `--v-muted` (`#696050` → `#635a4b`,
  `#5b6055` → `#565a50`). Az aranyfüst és a
  sárgaréz dekorációs szín, nem szövegszín — a linkek külön `--v-link` tokent kapnak.

  A mérés három dolgot hozott ki, amit egy tokenpáronkénti ellenőrzés nem lát:
  a MINTA jelvény kiemelőszínű fátyla a felirata felé csúszott (és egy ugyancsak
  fátyolozott dobozban a két réteg összeadódott) — a jelvény háttere ezért lapszínű
  lett; az Indigó kiemelőszíne a vászonlapon csak 3.93:1-et hozott — `#da8e7d` →
  `#dfa08e`; a vászonlap zsályazöldje 4.25:1-et — `#6b7f4e` → `#5b6c42`.

- **Kontraszt a háttérfotón** (2. változat hero): itt nem lehet tokenből számolni, mert
  a háttér a fotó. A kirenderelt hátteret (fotó + fátyol) lefényképezzük a szöveg
  elrejtésével, és minden szövegdoboz **minden képpontjára** kiszámoljuk az arányt, majd
  a legrosszabbat vesszük — így mindegy, hogy világos tinta ül sötét képen vagy fordítva.

  Ez azért kell mindhárom sémára külön, mert a **fátyol iránya megfordul**: a sötét
  sémán világos tinta ül a képen (a veszélyes eset a világos képpont), a világos
  sémákon sötét tinta (a veszélyes eset a sötét). A fedés ezért séma-szintű token
  (`--fatyol*` az `app/globals.css`-ben), nem Tailwind-segédosztály:

  | Séma | mobil alap | 1440 alap | vízszintes átmenet |
  |---|---|---|---|
  | Világos (Pergamen, Posztó, Parázs) | 85% | 66% | 60% → 40% → 0 |
  | Sötét (Indigó, Szattyán) | 85% | 60% | 74% → 60% → 0 |

  A vízszintes átmenet **szándékosan lapos**: korábban 96%-ról indult, és a fotó a
  hero bal kétharmadán gyakorlatilag eltűnt alatta. Most a kép a teljes szélességben
  látszik, a szöveg alatti fedés viszont még mindig elég.

  Mérve mind az öt sémában, 1440 és 390 px-en: **0 bukás.** (A 3 és 4 közötti értékek
  a nagy fokozatú címsor elemei, ahol a küszöb 3.0.)
  Két elem emiatt kapott más színt a fotós heróban: a szakaszcímke és a képaláírás
  világos tintát kapott. **A fotó cseréjekor mindhárom sémát újra le kell mérni.**

- **A váltó mérve:** mind az öt séma vált, a választás átmegy az aloldalakra és a
  másik két változatra; a változatváltás megtartja az aktuális aloldalt
  (`/a/akciok` → `/c/akciok`) és `aria-current`-tel jelöli az aktuálisat; Escape-re
  zár és visszaadja a fókuszt; a panel minden célpontja 44 px fölött van; letiltott
  `localStorage` mellett sem dob hibát.
- **Mobil-először tervezve.** A méretek és a függőleges ritmus a 390 px-es
  nézetből indulnak, és onnan nőnek (`sm:` / `lg:`). Mérve:
  minden interaktív elem legalább 24×24 px (WCAG 2.5.8 AA), az elsődleges
  gombok és a menüpontok 44–48 px magasak; a fotósor és a programrács mobilon
  is kéthasábos; a támogatói sáv címkéje mobilon külön sorba kerül; a
  táblázatok a képernyő széléig érnek és oldalra görgethetők. A kezdőlap
  mobilon 17 700 px-ről 13 200 px-re rövidült.
- Nincs vízszintes túlcsordulás 390 / 768 / 1440 px-en, mind a 22 oldalon
- Minden oldalon pontosan egy `<h1>`, minden képen `alt`, nincs duplikált DOM-azonosító
  (fontos, mert az SVG `<pattern>`/`<filter>` id-k globálisak), nincs JS hiba
- Az iniciálé a `<h1>`-en **belül** van, így a címsor szövege teljes marad
  („Íjászat, szablyavívás, élő hagyomány") a képernyőolvasónak és a keresőnek is
- „Ugrás a tartalomra" ugrólink, látható fókuszkeret, `<details>` alapú mobilmenü
  (billentyűzettel kezelhető, JS nélkül)
- `prefers-reduced-motion`: a támogatói sáv megáll és oldalra görgethetővé válik, a hero
  animációk elmaradnak. Folyamatosan futó háttéranimáció nincs — egyetlen belépő
  mozdulat van (címsor + az iniciálé felcsillanása).
- Magyar tipográfia: „idézőjel", ezres szóköz (`11 000 Ft`), `lang="hu"`
- Az útvonalak ékezet nélküli ASCII slugok

---

## Ami az éles oldalra még kell

- `ELES_FB_BEAGYAZAS = true` — a valódi Facebook Page Plugin élesítése
- Valós vélemények, versenyeredmények, támogatói logók, kedvezmények
- Egységes, letölthető PDF-ek az iratokból (most szkennelt képek), új programajánló füzet
- A jelentkezési űrlap bekötése (most szándékosan nem küld adatot)
- Adatkezelési tájékoztató
