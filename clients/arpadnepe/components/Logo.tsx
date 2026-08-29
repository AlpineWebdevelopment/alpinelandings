import Image from 'next/image';

/**
 * AZ EGYESÜLET PECSÉTJE — vonalas (outline) SVG-változat.
 *
 * Az egyesület saját logója után rajzolva: körpecsét, a gyűrűben a névfelirat
 * és négy pont, a mezőben napkorong sugarakkal, íj és szablya keresztben,
 * jobb alul holdsarló.
 *
 * A rajz KIZÁRÓLAG kontúrokból áll (`fill="none"`, `currentColor`), hogy
 * háttérvízjelként bármelyik színsémában használható legyen.
 *
 * MEGJEGYZÉS: ez a logó vonalas újrarajzolása, DÍSZÍTMÉNYNEK (vízjel, pecsétmező,
 * felsorolásjel) — színsémánként átszíneződik, amit egy raszter nem tudna.
 * A fejlécben és a favikonban az egyesület valódi logója van (`LogoKep`, lent).
 * Az eredeti felirata kézzel rajzolt, rovás stílusú betűkkel készült; itt a
 * névgyűrű a lap saját címbetűjével (Cinzel) fut, hogy a háttérben tisztán
 * olvasható maradjon.
 *
 * Nézetdoboz: 400×400, középpont (200,200).
 */


/**
 * A PECSÉT — a logó vonalas kontúrja, CSS-MASZKKAL.
 *
 * A rajz a `forras/logo_black_white_outline.svg` nyomvonala; ebből a
 * `scripts/kepek.mjs --pecset` készíti a `public/pecset.svg` maszkot. Azért maszk
 * és nem beágyazott SVG, mert a nyomvonal 176 útvonalból áll: oldalanként nyolc
 * példányban a HTML-t hizlalná. Maszkként egyszer töltődik le, és a színét
 * továbbra is a `currentColor` adja, tehát sémánként ugyanúgy átszíneződik.
 *
 * A méretet és a színt a `className` adja (h-… w-… text-…).
 */
export function LogoPecset({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`pecset-vizjel block ${className}`} />;
}

/**
 * TÖMÖR JEL — a pecsét magja gyűrű és körirat nélkül: nap, íj, szablya, holdsarló.
 * A szakaszelválasztó közepén áll, 36 px körül.
 *
 * Ez is a nyomvonalból készül (`public/pecset-jel.svg`), nem kézi rajzból: 36 px-en
 * mérve tisztán olvasható. A méretet és a színt a `className` adja.
 */
export function LogoJel({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`pecset-jel block ${className}`} />;
}

/** Csak a napkorong — apró felsorolásjelnek és elválasztónak. */
export function LogoNapJel({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      role="presentation"
    >
      <circle cx="20" cy="20" r="7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((szog) => {
        const rad = (szog * Math.PI) / 180;
        return (
          <line
            key={szog}
            x1={20 + Math.cos(rad) * 11}
            y1={20 + Math.sin(rad) * 11}
            x2={20 + Math.cos(rad) * 16}
            y2={20 + Math.sin(rad) * 16}
          />
        );
      })}
    </svg>
  );
}


/**
 * AZ EGYESÜLET LOGÓJA — az átadott raszteres fájlból.
 *
 * Forrás: forras/kepek/logo.webp (1382×1389), amiből a scripts/kepek.mjs
 * `--logo` módja készíti a körre maszkolt public/logo.webp-et, valamint az
 * app/icon.png és app/apple-icon.png favikont. Nyomtatáshoz továbbra is a
 * vektoros (SVG/AI/EPS) eredetit kérjük az egyesülettől.
 *
 * alt="" — a fejlécben közvetlenül mellette áll az „Árpád Népe / Egyesület"
 * felirat, az címkézi a hivatkozást; a képernyőolvasónak nem kell kétszer.
 * A `rounded-full overflow-hidden` a maszk esetleges élsimítási maradékát is
 * levágja a sötét sémákon.
 */
export function LogoKep({
  className = '',
  meret = 48,
  betolt = 'lazy',
}: {
  className?: string;
  /** Renderelt méret px-ben (a fájl 512 px-es). */
  meret?: number;
  /** A fejlécben 'eager' — minden oldalon a hajtás fölött van. */
  betolt?: 'eager' | 'lazy';
}) {
  return (
    <span className={`block shrink-0 overflow-hidden rounded-full ${className}`}>
      <Image
        src="/logo.webp"
        alt=""
        width={meret}
        height={meret}
        loading={betolt}
        className="h-full w-full object-cover"
      />
    </span>
  );
}

/* --------------------------------------------------------------------------
   HÁTTÉRMEZŐ ÉS LÉC
   -------------------------------------------------------------------------- */

/**
 * Pecsétmező — a logó kicsinyített kontúrja átlós rácsban ismételve.
 * Ez a lap háttértextúrája; a pecsétek felváltva ülnek, hogy a mező ne
 * soronként, hanem átlósan olvasódjon.
 */
/**
 * Pecsétmező — a pecsét kicsinyítve, átlós rácsban ismételve; ez a lap
 * háttértextúrája. A csempe (280×280, benne két pecsét átlósan) a
 * `public/pecset-mezo.svg` maszk; a színt a `currentColor` adja.
 */
export function PecsetMezo({
  className = '',
  opacity = 0.14,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pecset-mezo pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
    />
  );
}

/**
 * Pecsétléc — hajszálvonal, rajta a pecsétgyűrű négy pontjának ritmusa.
 * Ez a szakaszelválasztó alapja.
 */
export function PecsetLec({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-2.5 w-full ${className}`}
      viewBox="0 0 240 10"
      preserveAspectRatio="none"
      role="presentation"
    >
      <line x1="0" y1="5" x2="240" y2="5" stroke="currentColor" strokeWidth="1" />
      <g fill="currentColor">
        {[20, 60, 100, 140, 180, 220].map((x) => (
          <circle key={x} cx={x} cy="5" r="2.6" />
        ))}
      </g>
    </svg>
  );
}
