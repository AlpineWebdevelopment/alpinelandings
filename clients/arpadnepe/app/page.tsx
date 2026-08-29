import Link from 'next/link';
import { egyesulet, linkek, menu } from '@/content';
import { semak, variantKeys, variants, type SemaKulcs, type VariantKey } from '@/variants/config';

/**
 * Változatválasztó. Semleges felület — szándékosan nem visel egyik séma
 * arculatát sem, és nincs rajta ügynökségi jelzés.
 *
 * A két kártya KÉT FELÉPÍTÉST + FORMANYELVET kínál. A színséma ettől
 * független: mindegyik oldalon a jobb alsó sarki lebegő váltóval cserélhető
 * (két séma), és ugyanaz a váltó visz át a másik változatra is.
 */
export default function Valaszto() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#17150f]">
      <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[#726c66]">
            Bemutató · két változat, két színséma
          </p>
          <h1 className="mt-5 font-body text-4xl font-bold leading-tight sm:text-5xl">
            {egyesulet.teljesNev}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-[#55504a]">
            Mindkét oldalon ugyanaz a tartalom és ugyanaz a szerkezeti váz. Ami
            különbözik: a <strong className="font-semibold text-[#17150f]">hero
            felépítése</strong> (hol áll a fotó, hol ül a legfrissebb Facebook-bejegyzés)
            és a hero alatti oldal{' '}
            <strong className="font-semibold text-[#17150f]">formanyelve</strong> — az
            első visszafogott kódexlap, a második honfoglalás előtti sztyeppei. A{' '}
            <strong className="font-semibold text-[#17150f]">színséma ettől független</strong>:
            minden oldal jobb alsó sarkában van egy váltó, amivel mindkét változat
            mindkét színben megnézhető — és amivel a két demó között is át lehet
            lépni, az aktuális aloldalt megtartva.
          </p>
        </header>

        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {variantKeys.map((k) => (
            <li key={k}>
              <Link
                href={`/${k}`}
                className="group flex h-full flex-col border border-[#e2ded6] bg-white transition hover:border-[#17150f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17150f]"
              >
                <Elonezet valtozat={k} />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#726c66]">
                    {variants[k].cimke}
                  </p>
                  <h2 className="mt-2 font-body text-2xl font-bold leading-tight">
                    {variants[k].alcim}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[#55504a]">
                    {variants[k].leiras}
                  </p>

                  <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
                    <span className="font-semibold text-[#17150f]">Friss bejegyzés: </span>
                    {variants[k].posztLeiras}
                  </p>

                  <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
                    <span className="font-semibold text-[#17150f]">Formanyelv: </span>
                    {variants[k].stilusNev} — {variants[k].stilusLeiras}
                  </p>

                  <div className="mt-5 border-t border-[#e2ded6] pt-4">
                    <p className="font-body text-xs uppercase tracking-[0.1em] text-[#786e5b]">
                      Alapból: {semak[variants[k].alapSema].nev}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-3">
                      {semak[variants[k].alapSema].paletta.map((sz) => (
                        <li key={sz.hex} className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="block h-5 w-5 border border-[#00000022]"
                            style={{ background: sz.hex }}
                          />
                          <span className="font-body text-xs text-[#55504a]">
                            {sz.nev}
                            <span className="sr-only"> — {sz.hex}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 font-body text-xs leading-relaxed text-[#55504a]">
                      A további négy színséma a lebegő váltóval, jobb alul.
                    </p>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-bold group-hover:gap-3">
                    Megnyitom <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-20 grid gap-10 border-t border-[#e2ded6] pt-12 sm:grid-cols-2">
          <div>
            <h2 className="font-body text-lg font-bold">Mind a két változatban</h2>
            <ul className="mt-4 space-y-2 font-body text-sm text-[#55504a]">
              {menu.map((m) => (
                <li key={m.href || 'kezdolap'} className="border-b border-[#e2ded6] pb-2">
                  {m.cimke}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-body text-sm leading-relaxed text-[#55504a]">
              A támogatói hirdetősáv mindkét változatban a hero tetején fut vízszintesen.
              A hero fotója és a legfrissebb Facebook-bejegyzés viszont változatonként
              másképp találkozik: az elsőben külön hírcsík fut a fejléc alatt, a
              másodikban a fotó adja a hero teljes hátterét, és a kártya azon ül.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
              <span className="font-semibold text-[#17150f]">Formanyelv:</span> a hero alatti
              oldal karaktere változatonként más — az elsőn visszafogott, mai kódexlap
              (keretes lapok, vonalas pecsétmotívum), a másodikon, a Sztyeppén palmettás
              szalagok, korongok és nemezmezők. A címbetű is követi: Cormorant Unicase.
              A kenyérbetű mindkettőn EB Garamond marad, az olvashatóság miatt.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
              <span className="font-semibold text-[#17150f]">Váltó:</span> minden oldal
              jobb alsó sarkában ott a lebegő kezelőszerv. Fent a két{' '}
              <strong className="font-semibold text-[#17150f]">változat</strong> — átlép
              rájuk úgy, hogy az aktuális aloldalon marad. Alatta a két{' '}
              <strong className="font-semibold text-[#17150f]">színséma</strong>:
              Arany–fekete és Arany–vörös — mindkettő világos alapon, fekete betűvel, az
              egyesület kérése szerint. A szín az aloldalakra és a másik változatra is
              átjön, tehát mind a négy kombináció megnézhető. A váltó a bemutató
              kezelőszerve, az éles oldalra nem kerül rá.
            </p>
          </div>

          <div>
            <h2 className="font-body text-lg font-bold">A tartalomról</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
              Minden adat, ár, időpont és név a{' '}
              <a
                href={linkek.jelenlegiOldal}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                jelenlegi weboldalról
              </a>{' '}
              származik. Ahol a demóhoz olyan tartalom kellett, ami még nincs meg —
              vélemények, versenyeredmények, támogatók, kedvezmények, dokumentumok —, ott a
              felület <strong className="font-semibold text-[#17150f]">MINTA</strong>{' '}
              jelvénnyel jelöli a helyet. A hero „legfrissebb bejegyzés" eleme szintén minta:
              a Facebook tartalmát nem tudtuk lekérni, az éles oldalon a Facebook Page Plugin
              tölti majd be.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
              Kapcsolat:{' '}
              <a href={egyesulet.telefonHref} className="underline underline-offset-4">
                {egyesulet.telefon}
              </a>{' '}
              ·{' '}
              <a
                href={`mailto:${egyesulet.email}`}
                className="break-all underline underline-offset-4"
              >
                {egyesulet.email}
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

/**
 * A vázlatrajz színkészlete sémánként. Csak ehhez a miniatűrhöz kell:
 * az igazi oldalak a globals.css tokenjeiből élnek.
 */
const SEMA_SZINEK: Record<SemaKulcs, Record<string, string>> = {
  'arany-fekete': {
    hatter: '#fcfaf2',
    sav: '#f3ecdc',
    lap: '#fffef9',
    tinta: '#14120c',
    kiemel: '#806700',
    masodik: '#e0b81c',
    vonal: '#e2d49f',
  },
  'arany-voros': {
    hatter: '#f8f1e0',
    sav: '#eee3ca',
    lap: '#fefbf2',
    tinta: '#15110b',
    kiemel: '#a32912',
    masodik: '#9e772b',
    vonal: '#dbc8a2',
  },
};

/**
 * Miniatűr előnézet — UGYANAZ az elrendezés mindkét kártyán: fent a
 * támogatói sáv, alatta az iniciálés címblokk. Ami VÁLTOZATONKÉNT eltér, az a
 * hero fotójának szerepe és a hírkártya helye — ezt mutatja a rajz. A színek
 * a változat alapértelmezett sémájából jönnek. Háttérben a pecsét vízjelmezője.
 */
function Elonezet({ valtozat }: { valtozat: VariantKey }) {
  const t = SEMA_SZINEK[variants[valtozat].alapSema];

  return (
    <div
      aria-hidden="true"
      className="border-b border-[#e2ded6] p-4"
      style={{ background: t.hatter }}
    >
      <svg viewBox="0 0 320 180" className="w-full" role="presentation">
        <defs>
          {/* a pecsét vízjelmezője */}
          <pattern
            id={`elonezet-palmetta-${valtozat}`}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke={t.masodik} strokeWidth="0.8" opacity="0.55">
              <circle cx="32" cy="32" r="21" />
              <circle cx="32" cy="32" r="17" />
              <circle cx="24" cy="25" r="4.5" />
              <path d="M43 21 C 39 27, 32 34, 23 42" />
              <path d="M23 21 C 30 28, 37 35, 42 42" />
            </g>
          </pattern>

          {/* az indigó séma sötétítő fátyla a háttérfotón */}
          <linearGradient id={`elonezet-fatyol-${valtozat}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={t.hatter} stopOpacity="0.94" />
            <stop offset="0.55" stopColor={t.hatter} stopOpacity="0.78" />
            <stop offset="1" stopColor={t.hatter} stopOpacity="0.42" />
          </linearGradient>
        </defs>

        <rect width="320" height="180" fill={`url(#elonezet-palmetta-${valtozat})`} />

        {/* INDIGÓ: a fotó TÖLTI KI a hero hátterét, fölötte a fátyol */}
        {valtozat === 'b' ? (
          <>
            <rect x="0" y="36" width="320" height="144" fill={t.masodik} opacity="0.38" />
            <g stroke={t.hatter} fill="none" strokeWidth="3" opacity="0.5">
              {/* jelzésértékű képi tartalom: íjak és alakok */}
              <path d="M40 180 C 30 150, 34 118, 58 96" />
              <path d="M104 180 C 96 148, 102 116, 126 94" />
              <path d="M228 180 C 220 152, 226 124, 248 104" />
              <circle cx="70" cy="86" r="9" />
              <circle cx="138" cy="84" r="9" />
              <circle cx="260" cy="94" r="9" />
            </g>
            <rect
              x="0"
              y="36"
              width="320"
              height="144"
              fill={`url(#elonezet-fatyol-${valtozat})`}
            />
          </>
        ) : null}

        {/* fejléc */}
        <rect x="0" y="0" width="320" height="18" fill={t.sav} />
        <rect x="10" y="7" width="42" height="5" fill={t.tinta} />
        <rect x="200" y="7" width="22" height="4" fill={t.vonal} />
        <rect x="228" y="7" width="22" height="4" fill={t.vonal} />
        <rect x="258" y="4" width="52" height="11" fill={t.kiemel} />

        {/* támogatói hirdetősáv — a hero tetején, mindkét sémán */}
        <rect x="0" y="22" width="320" height="14" fill={t.lap} stroke={t.vonal} />
        <rect x="0" y="22" width="60" height="14" fill={t.kiemel} opacity="0.16" />
        <rect x="8" y="27" width="42" height="4" fill={t.kiemel} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={72 + i * 50} y="27" width="34" height="4" fill={t.vonal} />
        ))}

        {/* iniciálé + címblokk */}
        <rect x="12" y="50" width="30" height="30" fill="none" stroke={t.masodik} strokeWidth="1.6" />
        <rect x="16" y="54" width="22" height="22" fill={t.kiemel} opacity="0.8" />
        <rect x="50" y="54" width="130" height="11" fill={t.tinta} />
        <rect x="50" y="69" width="96" height="11" fill={t.kiemel} />
        {/* kötélfonat léc */}
        <path
          d="M12 92 C 20 88, 28 88, 36 92 C 44 96, 52 96, 60 92 C 68 88, 76 88, 84 92"
          fill="none"
          stroke={t.masodik}
          strokeWidth="1"
        />
        <path
          d="M12 92 C 20 96, 28 96, 36 92 C 44 88, 52 88, 60 92 C 68 96, 76 96, 84 92"
          fill="none"
          stroke={t.masodik}
          strokeWidth="1"
        />
        <rect x="12" y="102" width="150" height="4" fill={t.vonal} />
        <rect x="12" y="111" width="120" height="4" fill={t.vonal} />
        <rect x="12" y="126" width="52" height="13" fill={t.kiemel} />
        <rect x="72" y="126" width="52" height="13" fill="none" stroke={t.tinta} />


        {/* a séma saját Facebook-poszt megoldása */}
        {valtozat === 'a' ? (
          <>
            {/* hírcsík közvetlenül a fejléc alatt */}
            <rect x="0" y="18" width="320" height="13" fill={t.lap} stroke={t.masodik} />
            <circle cx="12" cy="24.5" r="3" fill={t.kiemel} />
            <rect x="20" y="22.5" width="180" height="4" fill={t.vonal} />
            <rect x="250" y="22.5" width="60" height="4" fill={t.kiemel} />
            <rect x="196" y="60" width="112" height="110" fill={t.vonal} />
          </>
        ) : null}

        {valtozat === 'b' ? (
          <>
            {/* kártya a háttérfotón, a jobb hasábban — külön fotómező nincs */}
            <rect
              x="194"
              y="62"
              width="116"
              height="60"
              fill={t.lap}
              opacity="0.92"
              stroke={t.masodik}
            />
            <rect x="202" y="72" width="40" height="4" fill={t.kiemel} />
            <rect x="202" y="86" width="100" height="3.5" fill={t.vonal} />
            <rect x="202" y="95" width="88" height="3.5" fill={t.vonal} />
            <rect x="202" y="104" width="62" height="3.5" fill={t.vonal} />
          </>
        ) : null}

      </svg>
    </div>
  );
}
