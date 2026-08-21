import Link from 'next/link';
import { egyesulet, linkek, menu } from '@/content';
import { variantKeys, variants, type VariantKey } from '@/variants/config';

/**
 * Színsémaválasztó. Semleges felület — szándékosan nem visel egyik séma
 * arculatát sem, és nincs rajta ügynökségi jelzés.
 */
export default function Valaszto() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#17150f]">
      <main className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[#726c66]">
            Bemutató · egy tervezés, három színséma
          </p>
          <h1 className="mt-5 font-body text-4xl font-bold leading-tight sm:text-5xl">
            {egyesulet.teljesNev}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-[#55504a]">
            Mindhárom oldal ugyanaz a tervezés: azonos szerkezet, azonos tipográfia
            (Cinzel és EB Garamond), azonos motívumtár. Csak a színséma más. A hátteret
            végig az egyesület pecsétjének vonalas rajza adja.
          </p>
        </header>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
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
                  <p className="mt-1.5 font-body text-xs uppercase tracking-[0.1em] text-[#786e5b]">
                    {variants[k].forras}
                  </p>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[#55504a]">
                    {variants[k].leiras}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-3 border-t border-[#e2ded6] pt-4">
                    {variants[k].paletta.map((sz) => (
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

                  <p className="mt-4 font-body text-sm leading-relaxed text-[#55504a]">
                    <span className="font-semibold text-[#17150f]">Friss bejegyzés: </span>
                    {variants[k].posztLeiras}
                  </p>

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
            <h2 className="font-body text-lg font-bold">Mind a három sémában</h2>
            <ul className="mt-4 space-y-2 font-body text-sm text-[#55504a]">
              {menu.map((m) => (
                <li key={m.href || 'kezdolap'} className="border-b border-[#e2ded6] pb-2">
                  {m.cimke}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-body text-sm leading-relaxed text-[#55504a]">
              A támogatói hirdetősáv mindhárom sémában a hero tetején fut vízszintesen.
              A hero fotója és a legfrissebb Facebook-bejegyzés viszont sémánként másképp
              találkozik: a Pergamenen külön hírcsík fut a fejléc alatt, az Indigón a fotó
              adja a hero teljes hátterét és a kártya azon ül, a Posztón pedig a kártya a
              fotó alsó részére kerül. Így három elrendezés hasonlítható össze.
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
 * Miniatűr előnézet — UGYANAZ az elrendezés mindhárom kártyán, csak más
 * színekkel: fent a támogatói sáv, alatta az iniciálés címblokk, jobbra a fotó.
 * Ami sémánként eltér, az a hero fotójának szerepe és a hírkártya helye —
 * ezt a rajz is mutatja. Háttérben a pecsét vízjelmezője.
 */
function Elonezet({ valtozat }: { valtozat: VariantKey }) {
  const t = {
    a: {
      hatter: '#f2e8d2',
      sav: '#e8dcc0',
      lap: '#fbf5e7',
      tinta: '#221d16',
      kiemel: '#a32e17',
      masodik: '#9e772b',
      vonal: '#d3c19b',
    },
    b: {
      hatter: '#1b2e52',
      sav: '#152440',
      lap: '#f7f2e6',
      tinta: '#eef2f8',
      kiemel: '#dfa08e',
      masodik: '#e8eef7',
      vonal: '#3a4f7a',
    },
    c: {
      hatter: '#f0ede3',
      sav: '#e2ded0',
      lap: '#faf8f1',
      tinta: '#1f231d',
      kiemel: '#2c4a38',
      masodik: '#91742c',
      vonal: '#c6c4b0',
    },
  }[valtozat];

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

        {/* támogatói hirdetősáv — a hero tetején, mindhárom sémán */}
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

        {valtozat === 'c' ? (
          <>
            {/* a kártya a fotó ALSÓ RÉSZÉN ül, a kép szélétől behúzva */}
            <rect x="196" y="44" width="112" height="126" fill={t.vonal} />
            <rect x="202" y="120" width="100" height="44" fill={t.lap} stroke={t.masodik} />
            <rect x="209" y="128" width="38" height="4" fill={t.kiemel} />
            <rect x="209" y="140" width="86" height="3.5" fill={t.vonal} />
            <rect x="209" y="149" width="64" height="3.5" fill={t.vonal} />
          </>
        ) : null}
      </svg>
    </div>
  );
}
