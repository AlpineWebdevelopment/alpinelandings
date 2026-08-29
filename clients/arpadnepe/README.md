# Árpád Népe Egyesület — két változat, két színséma (demó)

Bemutató oldal az **Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület** részére.

Két, egymástól **független** tengely — az egyesület kettőt választ, nem egyet:

1. **Változat** (`/a`, `/b`) — kettő tartozik hozzá: a hero FELÉPÍTÉSE (mi a fotó
   szerepe, hol ül a legfrissebb Facebook-bejegyzés) és a hero alatti oldal
   FORMANYELVE (szakaszkeret, lapforma, díszítmény, címbetű). A tartalom és a
   szerkezeti váz mindkét változatban azonos.
2. **Színséma** (Arany–fekete, Arany–vörös) — kizárólag a tokenek
   értéke. **Minden oldal jobb alsó sarkában lebegő váltó** van, amivel bármelyik
   változat bármelyik színben megnézhető: 2 × 2 = **4 nézet**. A választás
   localStorage-ba kerül, tehát aloldalra lépve és a változatok között váltogatva is
   megmarad.

Ugyanaz a lebegő váltó **a két demó között is átlép** — és megtartja az aktuális
aloldalt: az `/a/akciok`-ról a `/b/akciok`-ra visz, nem a kezdőlapra.

> **A 3. változat (`/c` — „Cédula a képen", kódex formanyelv) egyelőre ki van véve.**
> Az egyesület elé csak az A és a B kerül. A `kepAlja` poszthely és a `kodex`
> formanyelv kódja megmaradt (`components/pages/Landing.tsx`, `app/stilusok.css`),
> csak nincs változat, ami hivatkozna rá — a visszahozásához a `variants/config.ts`
> bejegyzése és az `app/c` útvonalfa kell (lásd a git-előzményt).

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
elő van generálva (31 útvonal: a választó + 3 változat × 10 oldal).

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

**Fejléc:** balra az egyesület **valódi logója** (az átadott raszteres fájlból,
körre maszkolva — `public/logo.webp`; belőle készül a favikon is) + a névírás,
középen a menü, jobbra a telefonszám és az elsődleges gomb. Kilenc oldal van, ezért az
asztali sorban a Kezdőlap nem szerepel (a logó a kezdőlap hivatkozása), és a sor csak
`xl`-től (1280 px) jelenik meg — alatta a `<details>` mobilmenü hozza mind a kilencet.
Nyomtatáshoz továbbra is kérjük a vektoros (SVG/AI/EPS) logót.

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
(eredmények) → programrács (rendezvények) → idézetek (értékelések) → a 2026–27-es
táblázat, elérhetőség, díjak és az online beiratkozó lap (kapcsolat).

**Aloldalak:** mind a hat egyetlen szerkezetből épül (`components/pages/*`), és
színsémától függetlenül azonos — a témát a szülő layout adja.

### Háttér — az egyesület pecsétje

A háttér ornamentikája **az egyesület saját logójából** készült — a logó után húzott
**vonalas nyomvonalból** (`forras/logo_black_white_outline.svg`): körpecsét kettős
peremmel, a gyűrűben az eredeti rovás stílusú körirat és négy pont, a mezőben napkorong
sugarakkal, íj és szablya keresztben, jobb alul holdsarló.

Ebből a `scripts/kepek.mjs --pecset` három **CSS-maszkot** gyárt (`public/pecset.svg`
a nagy vízjelnek, `public/pecset-mezo.svg` a háttércsempének, `public/pecset-jel.svg`
a szakaszelválasztó jelének): a fehér alaplap kimarad, a vonal vastagabb lesz (a 3-as
nyomvonal egy 120 px-es csempén eltűnne), a fölösleges tizedesek lemaradnak — 62 KB
helyett 45 KB. A színt a `background-color: currentColor` adja, tehát a maszk
ugyanúgy átszíneződik sémánként, mint egy beágyazott SVG, egy háttérkép viszont nem
tudná. Azért maszk és nem beágyazott rajz, mert a nyomvonal 176 útvonal: oldalanként
nyolc példányban a HTML-t hizlalná; így egyszer töltődik le, és minden oldal ugyanazt a
gyorsítótárazott fájlt kapja.

A **jel** (a gyűrűn belüli motívum: nap, íj, szablya, holdsarló) külön maszk: a
nyomvonalból azok az útvonalak, amelyek a középponttól 490-en belül maradnak — 440-nél
a holdsarló fele levágódna, 530-nál már bejönne a mező határköre is. 36 px-en mérve
tisztán olvasható.

Ami **mértani rajz maradt**: a `LogoNapJel` (a szakaszcímkék előtti napjel, 14–16 px) és
a `PecsetLec`. A nyomvonalon a napkorongot keresztezi az íj, ezért ilyen apró fokozatban
áthúzott körnek látszana, nem napnak — a mértani jel ott tisztább.

| Elem | Hol dolgozik |
|---|---|
| `PecsetMezo` | A pecsét kicsinyített kontúrja átlós rácsban ismételve — ez a szakaszok háttértextúrája (hero, rólunk, élet nálunk, 50 óra, rendezvények, kapcsolat, és az aloldalak fejléce). |
| `LogoPecset` | A teljes pecsét nagy vízjelként — az eredmények és az 50 órás szakaszban. |
| `LogoJel` | A pecsét magja (nap, íj, szablya, hold) gyűrű nélkül — a szakaszelválasztó közepén; a nyomvonalból. |
| `LogoNapJel` | A napkorong aprón (mértani rajz) — a szakaszcímkék előtti bekezdésjel és a támogatói sáv elválasztója. |
| `PecsetLec` | Hajszálvonal a pecsétgyűrű pontritmusával — a szakaszelválasztó léc. |
| `LogoKep` | Az egyesület valódi logója a fejlécben, a láblécben és a hírkártya avatárjában — `next/image`, `alt=""`, mert mellette áll a névírás. |

Ehhez jön a pergamen-/vászon-/posztószemcse (`feTurbulence`), hogy az alap
sehol ne legyen sima színfelület.

> A vonalas pecsét a logó **kontúrja díszítménynek** — színsémánként átszíneződik,
> amit egy raszter nem tudna. A fejlécben és a favikonban az egyesület valódi,
> raszteres logója van (`LogoKep`). A nyomvonal a rajzot követi (a rovás stílusú
> köriratot is), de **nem a nyomdai eredeti**: nyomtatáshoz a vektoros (AI/EPS/SVG)
> forrást továbbra is kérjük.

---

## A két változat

| Útvonal | Változat | A hero fotója | A friss bejegyzés | Alapból |
|---|---|---|---|---|
| `/a` | **Hírcsík** | külön mezőben, a jobb hasábban | teljes szélességű csík a fejléc alatt | Arany–fekete |
| `/b` | **Képes hero** | KITÖLTI a hero hátterét, fátyol alatt | kártya a háttérfotón, a jobb hasábban | Arany–vörös |

### A hero alatti oldal formanyelve

A hero mindkét változatban ugyanaz marad; ami alatta van, változatonként más
formanyelvet visel. Ez egy hatókörosztály a burkolón (`stil-*`), tehát **minden
aloldalra is átüt** — nem csak a kezdőlapra.

| Változat | Formanyelv | Mit csinál |
|---|---|---|
| `/a` | **Visszafogott kódexlap** | A megszokott: keretes lapok, vonalas pecsétmotívum, letisztult rács. Ez nem változott. |
| `/b` | **Sztyeppe — honfoglalás előtti** | Nemez és bőr, nem pergamen: doboz helyett **sáv és kör**. Palmettás szalag a szakaszfejek alatt, palmettarács a háttérben, felül szíjszegélyes lapok, **korong alakú fotók**, vert korongba írt számok, lecsapott sarkú gombok. Címbetű: **Cormorant Unicase**. Kódexes vagy gótikus utalás szándékosan nincs benne — 890 előtt az anakronizmus lenne. |

A harmadik formanyelv, a **Kódex — középkori magyar** (vonalazott írástükör,
rubrikák, iniciálék, lapszéli indadísz, kéthasábos szedés, gótikus textúra
címbetűvel) a `/c` változattal együtt kikerült. A `stil-kodex` szabályai a
stíluslapon maradtak, de jelenleg egyetlen változat sem hivatkozik rájuk.

Két dolog a formanyelvekről:

- **A színtől függetlenek.** A díszítmények CSS-maszkkal készülnek
  (`background-color: var(--v-accent2)` + `mask-image`), nem háttérképként — így
  sémaváltáskor maguktól átszíneződnek. Mind a négy kombináció működik.
- **A címbetű a heróra is átüt.** A hero *felépítése* nem változott, de a betűtípusa
  igen — különben a lap teteje és alja két külön oldalnak látszana. Ha a hero
  betűjét is az eredetin kellene tartani, az a `--v-display` token egy sora.

A gótikus textúra és a unicase **csupa nagybetűvel olvashatatlan**, ezért ezekben a
formanyelvekben a `text-transform: uppercase` ki van kapcsolva mindenhol, ahol a
címbetű fut. A **kenyérbetű mindkét változatban EB Garamond marad** — hosszú
szöveget díszes betűvel szedni nem lenne olvasható.

Az „alapból" oszlop csak azt mondja meg, milyen színnel NYÍLIK MEG az oldal — hogy a
választóoldalon egymás mellett mindkét séma látszódjon. A váltóval mindegyik
változat mindegyik színre átállítható.

## A két színséma

Az egyesület kérése (2026. 08. 29.): **ne legyen túl sötét**, és az **arany–fekete
világos alapon**, illetve az **arany–vörös fekete betűvel** tetszett. A korábbi ötös
készlet (Pergamen, Indigó, Posztó, Parázs, Szattyán) ezzel kikerült — a két új séma
kizárólag ebből a kérésből következik, és mindkettő a **logó saját két színét** viszi:
az aranyat, illetve az aranyat és a vöröset.

| Séma | Alap | Betű | Kiemelés | Díszítés |
|---|---|---|---|---|
| **Arany–fekete** | `#FCFAF2` csontfehér | `#14120C` fekete | `#756108` mély arany | `#C8A722` aranyfüst |
| **Arany–vörös** | `#F8F1E0` pergamen | `#15110B` fekete | `#A32912` vörös | `#9E772B` arany |

- **Arany–fekete** — csontfehér lap, fekete törzsszöveg, arany kiemelés. A vörös
  csak a fejléc logójában van jelen. Az egyesület kérésére a lap **fehérebb**, az arany
  pedig **sárgább** lett az első változatnál: a kiemelő arany 43°-ról 49°-ra fordult
  (`#7A5C10` → `#756108`), a díszítő aranyfüst 44°-ról 48°-ra (`#C09A34` → `#C8A722`).
- **Arany–vörös** — ugyanaz a világos alap és fekete betű, de a kiemelés a logó
  vöröse. Ez áll a legközelebb magához a logóhoz.

A **kiemelő arany szándékosan mély** (`#7A5C10`). A `--v-accent` nemcsak dísz: ez a
gombok alapja és a címkék, árak szövegszíne is. A fényesebb arannyal (`#8A6A16`) a
váltakozó háttérsávon **4,14:1**-re esett, a 4,5-ös küszöb alá — mérve. A fényes
aranyfüst ezért külön token (`--v-accent2`), és **kizárólag díszítés** (pecsét,
ornamens, minta), soha nem szöveg.

Sötét séma nincs, ezért a korábbi **tintafordítás** (világos lap sötét alapon,
`.lap-kor` külön tokenkészlettel) is kikerült a kódból.

### Hogyan működik a témázás

Minden szín egy `--v-*` CSS változóban ül, sémánként egy hatókörosztály alatt
(`.sema-arany-fekete | .sema-arany-voros` az `app/globals.css`-ben). A Tailwind
`@theme **inline**` blokk ezekre hivatkozik, így a `bg-accent`, `text-ink` stb. mindig
az aktuális séma értékét kapja.

> `@theme inline` kell, nem sima `@theme`. Sima `@theme` esetén a `--color-*` a `:root`-on
> oldódna fel a gyökér értékeire, és a hatókörös felüldefiniálás nem érne el a
> segédosztályokig — minden séma ugyanazt a színt kapná.

Mindkét séma világos alapú, ezért a `Lap` komponens ugyanazt a tokenkészletet
használja, mint a lap többi része — nincs szükség a korábbi, sötét sémához készült
tintafordításra.

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

### 2. Legfrissebb Facebook-bejegyzés — kétféle megoldás

Mindkét változat ugyanazt a tartalmat mutatja, csak más helyen — hogy az egyesület
össze tudja hasonlítani, melyik kompromisszum a jó. Mindegyik a hajtás felső részén
van, és egyik sem viszi el a címsor elől a fókuszt.

| Változat | Megoldás | Hol |
|---|---|---|
| `/a` **Hírcsík** | `LatestPostSav` | Teljes szélességű hírcsík **közvetlenül a fejléc alatt**, még a támogatói sáv fölött. Ez a legfelső lehetséges hely — a látogató a címsor előtt látja. |
| `/b` **Képes hero** | `LatestPostCard` (`kepen`) | Kártya a hero **háttérfotóján**, a jobb hasábban. 92%-os fedettségű lapszín, hogy a kép átüssön alatta. |

Mérve (1440 px, a lap tetejétől): a bejegyzés az `/a`-n 89 px-en, a `/b`-n 258 px-en
kezdődik — a címsor rendre 309 / 252 px-en.

> **Mobilon** (390 px) az `/a` hírcsíkja 85 px-en, a `/b` kártyája 633 px-en ül —
> mindkettő az első képernyőn.

A kivett `/c` harmadik megoldása (`LatestPostKepAlja` — cédula a fotó alsó részén)
a komponensben megmaradt, de jelenleg egyetlen változat sem hívja.

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

Egyetlen sor átállítása mindkét sémában élesíti. A demóban azért marad a mintakártya,
mert a Facebook a saját kinézetét hozza magával, és reklámblokkolók mellett üresen marad —
ügyfélbemutatón ez rosszul sülne el. Éles oldalon viszont ez az igazi megoldás.

---

## Felépítés

```
content/          Közös tartalomréteg — mindkét változat EZT fogyasztja
  egyesulet.ts      alapadatok, elérhetőség, helyszínek, bemutatkozás, támogatás
  edzesek.ts        a 2026–27-es foglalkozástáblázat (kanonikus), árak, eszközbérlés,
                    beiratkozás, közösségi élet — és a származtatott nézetek
  foglalkozasok.ts  a hat foglalkozás plakátjainak átírt szövege
  galeria.json/.ts  a galéria kézirata (nyers fájl → slug, alt, kategória) + típusok
  galeria.meretek.json  generált: a legyártott képek mérete
  szabalyzatok.ts   a két szabályzat teljes szövege — GENERÁLT a DOCX-ból
  hirmondo.ts       a nyár végi körlevél szövege
  jelentkezesiLap.ts  a kezdőlap online beiratkozó lapja: mezőnevek, nyilatkozatok, hibaüzenetek
  programok.ts      rendezvényszervezés, programelemek, körhinta, eszközbérlés
  referenciak.ts    a 2025-ös és 2024-es teljes rendezvénylista + válogatás
  kozossegi.ts      50 órás közösségi szolgálat
  dokumentumok.ts   iratok és nyilvános adatok
  akciok.ts         a jelenlegi oldal saját ajánlatai (időpont, ár hivatkozással)
  minta.ts        ⚠ AZ EGYETLEN fájl kitalált (MINTA) tartalommal
variants/
  config.ts         a két VÁLTOZAT és a két SZÍNSÉMA leírása (két külön tengely)
  fonts.ts          Cinzel + EB Garamond + Cormorant Unicase + Grenze Gotisch,
                    mind latin-ext vágattal
components/
  pages/Landing.tsx a kezdőlap — mindkét változat ezt rendereli
  pages/*.tsx       a kilenc aloldal közös szerkezete (Foglalkozasok, Galeria,
                    Szabalyzatok, Rendezvenyek, KozossegiSzolgalat, Eredmenyek,
                    Ertekelesek, Akciok, Dokumentumok)
  HetiTablazat.tsx  a 2026–27-es táblázat — kezdőlapon és a Foglalkozások oldalon
  GaleriaRacs.tsx   galéria-rács szűrővel és <dialog> nagyítóval (kliens)
  JelentkezesUrlap.tsx  az online beiratkozó lap (kliens): ellenőrzés, gondviselő blokk,
                    összegzés + mailto — a bemutatóban nem küld adatot
  Logo.tsx          a valódi logó (LogoKep) + a pecsét vonalas SVG-je díszítménynek
  Texture.tsx       anyagszemcse, iniciáléfészek, lapkeret
  Ornament.tsx      szakaszelválasztó, rubrumjel — a pecsét formanyelvéből
  SponsorBar.tsx    vízszintesen futó támogatói hirdetősáv
  LatestPost.tsx    a hero hírkártyája (2 aktív + 1 dormant elhelyezés) + éles
                    beágyazás kapcsolója
  ValtozatLayout.tsx a két változat közös kerete (fejléc, lábléc, sémagyökér)
  SemaValto.tsx   ⚠ a lebegő bemutatóváltó — a BEMUTATÓ eszköze, élesre nem kell
  Nav / Footer / Minta / ui.tsx (Cimke, ArLista, GombNyomo is itt)
app/
  globals.css       színsémák, tokenek, hero-fátyol
  stilusok.css      a FORMANYELVEK — a `stil-*` hatókörosztályok
                    (`stil-kodex` a /c-vel együtt dormant)
  page.tsx          változatválasztó
  icon.png, apple-icon.png   favikon — a logóból generálva
  a|b/              layout (11 sor: a ValtozatLayout hívása) + kezdőlap + 9 aloldal
public/             CSAK az, amit az oldal tényleg megjelenít
  logo.webp         az egyesület logója, körre maszkolva (512 px)
  pecset*.svg       a vonalas pecsét két CSS-maszkja (vízjel + 280-as háttércsempe)
  foto/             21 fotó a jelenlegi oldal képgalériájából + a hero fotója
  galeria/          102 kicsinyített fotó az egyesület átadott képeiből (≤ 1600 px)
  plakat/           a hat foglalkozásplakát (JPG) — letöltésnek
  dokumentumok/     a két szabályzat és a beiratkozó lap (DOCX)
forras/             az egyesület átadott anyagai — a tartalom FORRÁSA
  *.docx            szabályzatok, beiratkozó lap — verziókezelve
  logo_black_white_outline.svg  a pecsét nyomvonala — verziókezelve
  *.jpg, *.png      a 2026–27-es táblázat, az árlista, az eszközbérlés, a hat plakát
  kepek/            a 121 nyers fotó (110 MB)
  nem-hasznalt/     ami legyártás után sem került egyetlen oldalra sem
                    ⚠ a három kép-mappa .gitignore-ban van: csak ezen a gépen
scripts/
  gen-routes.mjs    a 27 aloldal-útvonalfájl generálása
  kepek.mjs         képfeldolgozás sharp-pal: galéria, logó, favikon, plakátok, hero,
                    a pecsét maszkjai, kontaktlapok, kézirat-ellenőrzés
  check-fonts.mjs   latin-ext lefedettség ellenőrzése a buildben
```

---

## Tartalom — mi valós és mi minta

**Két forrás.** (1) <https://arpadnepe.mozello.hu/> — a kezdőlap és minden aloldala
letöltve, normalizálva a `/content` rétegbe. (2) **Az egyesület 2026. 08. 28-án átadott
anyagai** a `forras/` mappában: a 2026–27-es foglalkozástáblázat, az árlista, az
eszközbérlési díjak, hat foglalkozásplakát, két szabályzat, a beiratkozó lap, a
támogatói és a Hírmondó-plakát, valamint 121 fotó. Minden tény, ár, időpont, cím és
név e kettő valamelyikéből való; a `/content/*.ts` fájlok fejlécében ott a hivatkozás.
Ahol a kettő ellentmond (a jelenlegi oldal 11 000 Ft/hó árat és a régi órarendet
hirdeti), **az átadott 2026–27-es anyag az irányadó**, a régi adat sehol nem maradt.

**Átírás szó szerint.** A plakátok és a DOCX-ok szövege szó szerinti, magyar
tipográfiával (`12 500 Ft`). A plakátok illusztrált, 769 px széles képek — a szövegük
azért lett élő szöveg, hogy olvasható, kereshető és képernyőolvasóval elérhető legyen;
a plakát maga letölthető minden foglalkozásnál. A két szabályzat teljes szövege a
`/szabalyzatok` oldalon olvasható, a DOCX letölthető (PDF-et ezen a gépen nem tudtunk
készíteni — nincs Word, LibreOffice). A `content/szabalyzatok.ts` a DOCX-ból
generált: `zipfile` + a `<w:p>` bekezdések, a „N. …" sorok szakaszcímek, a `•`/`◆`
pontok listaelemek.

**Kitalált tény továbbra sincs.** Ahol a demóhoz olyan tartalom kellett, ami egyik
forrásban sem létezik, az elem **`MINTA` jelvényt** kapott — mind a `content/minta.ts`
fájlban:

| Hol | Miért minta |
|---|---|
| Vélemények (`/ertekelesek`, kezdőlap) | A valós értékelések a Facebookon és a Google-térképen élnek |
| Versenyeredmények (`/eredmenyek`) | Konkrét helyezés, név egyik forrásban sincs |
| Támogatók (hero sávja) | Nincs megnevezett támogató; a nevek generikusak: „Támogató Kft. — minta" |
| Kedvezmények (`/akciok`) | Próbaalkalom, ajánlói kedvezmény egyik forrásban sem szerepel |
| Éves beszámoló, adatkezelési tájékoztató, 1%-os tájékoztató, programajánló füzet (`/dokumentumok`) | Ilyen dokumentum nincs — a beiratkozó lap viszont már hivatkozik az adatkezelési tájékoztatóra |
| Óraigazolás lépése (`/kozossegi-szolgalat`) | A jelentkezés 4. lépése nem szerepel a forrásban |
| „Friss hírek" kártya | Mock, amíg az `ELES_FB_BEAGYAZAS` kapcsoló `false` |
| Az online beiratkozó lap küldése (kezdőlap) | A bemutató nem küld adatot: összegzést mutat, és `mailto:` levelet nyit az egyesület címére — a mezők és a nyilatkozatok viszont a valódi beiratkozó lapé |

**Semleges címke (`Cimke`) a MINTA mellett.** Valós, forrásból vett tartalomhoz is
tartozhat megjegyzés — ez nem helykitöltő, ezért nem MINTA: **Tervezet** (a szabályzatok
saját szövege mondja, hogy az elfogadás dátuma üres, illetve „munkaváltozat") és
**Egyeztetendő** (a forrásban ellentmondás vagy csonka szöveg van).

### Ügyféllel egyeztetendő

Az átadott anyagban talált ellentmondások — nem javítottuk őket, mert azzal állítanánk
valamit; a felületen a fentiek szerint jelölve vannak:

*Tisztázva 2026. 08. 29.:* a táblázat Íjász edzés / hétfő cellájában álló „Irha utca 24."
elírás volt — az egyesület megerősítette az Irha utca 21.-et; a táblázat és minden nézet
így mutatja, a címke lekerült.

- **A beiratkozó lap újabb változata** — 2026. 08. 29-én képként érkezett, és bővebb a
  `forras/` DOCX-nál (felszerelés-bérlési mondatok a feltételekben, „kesztyű a víváshoz;
  íjászathoz", az adatkezelési nyilatkozat záró tagmondata). Az online lap és a
  `beiratkozas` szövegei a DOCX-ból vannak — kérjük az új DOCX-ot, hogy szó szerint
  átírhassuk.
- **Csonka megjegyzés** — Kézműves / vasárnap: „(Felszerelés készítés 12–13 éves kortól, ha
  képes önállóan is" — a képen lemaradt a vége.
- **„jellemzően két alkalom per hó"** — az árlista 2. pontja (Két edzés hetente); a szövege
  szerint valószínűleg nyolc.
- **Korhatárok** — a kézműves plakát 11–12 éves kortól, a táblázat vasárnapi megjegyzése
  12–13 éves kortól, az eszközbérlés 11 éves kortól.
- **Régi férőhelyszámok** és a „csoportonként 3–12 fő" — a 2026–27-es anyagban nincs
  megfelelőjük, ezért kikerültek.
- **Mindkét szabályzat tervezet** — üres hatálybalépési dátum, illetve „munkaváltozat".
- **Adatkezelési tájékoztató** — a beiratkozó lap szerint „weboldalunkon érhető el", de nincs.
- **Plakát-szöveghibák**, amiket szó szerint hagytunk: „Ajánlott kiegészítők: alkarvédő,
  ujjvédő, kesztyű, kifutó, Y vagy kifutó vagy Y kesztyű…" (íjász plakát); „gelevész"
  (11+ plakát; az alsós plakáton „kelevész"). Három nyilvánvaló elgépelést javítottunk,
  a `content/foglalkozasok.ts` fejléce sorolja őket.
- **Gyerekek a fotókon** — az egyesület saját, korábban is közzétett képei, de a weboldalra
  szánt felhasználáshoz érdemes a hozzájárulásokat megerősíteni.
- **Vektoros logó** — nyomtatáshoz még hiányzik (a webre a raszter jó).

### Fotók

- `public/foto/` — 21 kép a jelenlegi oldal saját képgalériájából, az ottani
  képaláírásokkal; ezek adják a rendezvényi programelemek képeit. **Csak a ténylegesen
  megjelenő képek vannak itt**: amelyikre egyetlen oldal sem hivatkozott (5 fotó), az a
  `forras/nem-hasznalt/` mappába került, és a `.gitignore` kihagyja — ahogy a három
  plakát-JPG is (táblázat, árlista, eszközbérlés), amit végül sehol nem linkelünk.
- `public/galeria/` — **102 kép az egyesület átadott 121 fotójából**, ≤ 1600 px-re
  kicsinyítve (`scripts/kepek.mjs`, sharp). Kimaradt 19: apró bélyegképek, egy bájtra
  pontos másolat, a QR-kódos és plakátgrafikák, egy videó-képkocka lejátszósávval, egy
  stockszerű „két kard" grafika, egy fehér sávos képernyőkép — okuk a
  `content/galeria.json` `kihagy` listájában. Az alt-szöveg elve: az, ami a képen látszik;
  hely, esemény, év csak akkor, ha a fájlnév mondja; személynév soha. A nyers anyag a
  `forras/kepek/` alatt marad, `.gitignore`-ban.
- A hero fotója (`public/foto/hero-fegyverek.webp`, 2400 px) az átadott képek közül
  való: íj, tegez, fokos és szablya — ember nincs rajta, a címsor („Íjászat,
  szablyavívás, élő hagyomány") tárgyi képe.
- Stockfotó nincs.

---

## Minőség — amit ellenőriztünk

- `npm run build` tisztán lefut, 31 statikus oldal
- **Betűk:** mindkét betűcsalád latin-ext vágattal (ő ű Ő Ű) — `npm run check-fonts`
  a build kimenetéből ellenőrzi, nem feltételezésből
- **Kontraszt:** nem tokenpárokból számolva, hanem a **kirenderelt oldalakon** mérve.
  Mind a 31 oldalon, **mindkét színsémában** (mert a váltóval bármelyik oldal
  bármelyik színben megnézhető), 1440 és 390 px-en, minden szövegelem tényleges színe
  és a fölé kompozitált tényleges háttere — **28 440 elem, 0 esik a küszöb alá**
  (4.5:1 törzsszövegnél, 3:1 nagy fokozatnál). A nyitott váltópanel külön is mérve,
  mindkét sémában.

  A kompozitba a formanyelvek **teljes felületű `::before` rétegei** is beleszámítanak
  (palmettarács, vonalazott írástükör): ezek a szakasz háttere fölött, a szöveg alatt
  festődnek, tehát pont a kritikus réteget hagynánk ki nélkülük. Ez a mérés fogta meg
  annak idején, hogy a kódex vonalazása 50%-os fedésnél 4,27:1-re vitte le a halvány
  címkeszínt — innen jött a 25%-os fedés. Az aranyfüst dekorációs szín, nem szövegszín;
  a linkek külön `--v-link` tokent kapnak.

  A mérés olyat is kihoz, amit egy tokenpáronkénti ellenőrzés nem lát: a MINTA jelvény
  kiemelőszínű fátyla a felirata felé csúszott (és egy ugyancsak fátyolozott dobozban a
  két réteg összeadódott) — a jelvény háttere ezért lapszínű lett. Az új készletben ez
  szabta meg a kiemelő arany értékét is. A sárgább árnyalat világosabb is, ezért a
  határa lejjebb van: `#846B04` (48°) a váltakozó sávon már csak 4,37:1 — a küszöb alatt.
  A választott `#756108` 49°-os, és 5,14:1-et hoz ugyanott.

- **Kontraszt a háttérfotón** (2. változat hero): itt nem lehet tokenből számolni, mert
  a háttér a fotó. A kirenderelt hátteret (fotó + fátyol) lefényképezzük a szöveg
  elrejtésével, és minden szövegdoboz **minden képpontjára** kiszámoljuk az arányt, majd
  a legrosszabbat vesszük — így mindegy, hogy világos tinta ül sötét képen vagy fordítva.

  Mindkét séma világos, tehát **sötét tinta ül a képen** — a veszélyes eset a sötét
  képpont. (A korábbi sötét sémáknál ez megfordult, ezért maradt a fedés séma-szintű
  token, `--fatyol*` az `app/globals.css`-ben, nem Tailwind-segédosztály.)

  | Séma | mobil alap | 1440 alap | vízszintes átmenet |
  |---|---|---|---|
  | Arany–fekete, Arany–vörös | 85% | 66% | 60% → 40% → 0 |

  A vízszintes átmenet **szándékosan lapos**: korábban 96%-ról indult, és a fotó a
  hero bal kétharmadán gyakorlatilag eltűnt alatta. Most a kép a teljes szélességben
  látszik, a szöveg alatti fedés viszont még mindig elég.

  Mérve mindkét sémában, 1440 és 390 px-en: **0 bukás.** (A 3 és 4 közötti értékek
  a nagy fokozatú címsor elemei, ahol a küszöb 3.0.)
  Két elem emiatt kapott más színt a fotós heróban: a szakaszcímke és a képaláírás
  világos tintát kapott. **A fotó cseréjekor mindkét sémát újra le kell mérni** —
  az új színkészlettel újramérve, a fátyol-tokenek változtatása nélkül: legszűkebb
  1440 px-en Arany–fekete 3,52, Arany–vörös 3,98; 390 px-en 4,37 és 4,92. **0 bukás.**

- **A váltó mérve:** mindkét séma vált, a választás átmegy az aloldalakra és a
  másik változatra; a változatváltás megtartja az aktuális aloldalt
  (`/a/akciok` → `/b/akciok`) és `aria-current`-tel jelöli az aktuálisat; Escape-re
  zár és visszaadja a fókuszt; a panel minden célpontja 44 px fölött van; letiltott
  `localStorage` mellett sem dob hibát.
- **Mobil-először tervezve.** A méretek és a függőleges ritmus a 390 px-es
  nézetből indulnak, és onnan nőnek (`sm:` / `lg:`). Mérve:
  minden interaktív elem legalább 24×24 px (WCAG 2.5.8 AA), az elsődleges
  gombok és a menüpontok 44–48 px magasak; a fotósor és a programrács mobilon
  is kéthasábos; a támogatói sáv címkéje mobilon külön sorba kerül; a
  táblázatok a képernyő széléig érnek és oldalra görgethetők.
- **A 2026–27-es táblázat** (`HetiTablazat`) `md` fölött a teljes 8 oszlopos táblázat
  (`<caption>`, `scope`), a saját burkolójában görgethető; `md` alatt ugyanaz az adat
  foglalkozásonként egymás alá rendezve — a kettő `display: none`-nal váltakozik, a
  képernyőolvasó egyet lát. Mérve 390 / 768 / 1280 / 1440 px-en.
- **Galéria nagyító:** natív `<dialog>` + `showModal()` — fókuszcsapda, Escape, háttér és
  a fókusz visszaadása a bélyegképre a böngészőtől; nyíl billentyűkkel lapozható; a
  szűrőgombok `aria-pressed`, a találatszám `aria-live`. Könyvtár nincs.
- **Online beiratkozó lap** (kezdőlap, `#jelentkezes`): saját ellenőrzés magyar
  hibaüzenetekkel (`aria-invalid`, `aria-describedby`), küldéskor a fókusz az első hibás
  mezőre ugrik, gépelésre a hiba törlődik; 18 év alatt megjelenik a szülő/gondviselő
  blokk, és annak elérhetősége lesz kötelező; a foglalkozások a táblázat alkalmai
  jelölőnégyzettel (nem szabad szöveg); a jelölőnégyzetek 24 px-esek, a sorok 44 px; az
  érvényes űrlap összegzést mutat (a fókusz oda ugrik), a „Vissza" megőrzi az adatokat.
  Playwrighttal végigjárva mindkét változaton 1440 és 390 px-en.
- **Képek:** minden bélyegkép lusta, `sizes` szerint méretezve; az oldalakon végiggörgetve
  0 törött kép.
- Nincs vízszintes túlcsordulás 390 / 768 / 1280 / 1440 px-en, mind a 31 oldalon
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
- Az „Ügyféllel egyeztetendő" lista tisztázása (a beiratkozó lap új DOCX-a, korhatárok,
  csonka megjegyzés, plakát-szöveghibák), a szabályzatok elfogadása
- PDF a DOCX-okból (szabályzatok, beiratkozó lap), egységes PDF az alapszabályból és a
  közgyűlési iratokból, új programajánló füzet
- Az online beiratkozó lap bekötése (Formspree vagy saját végpont) — a bemutatóban
  szándékosan nem küld adatot: összegzést mutat és `mailto:` levelet nyit
- Adatkezelési tájékoztató — a beiratkozó lap már hivatkozik rá
- Vektoros logó nyomtatáshoz; a fotókon szereplő gyerekek hozzájárulásainak megerősítése
