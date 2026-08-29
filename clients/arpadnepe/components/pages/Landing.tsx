import Image from 'next/image';
import Link from 'next/link';
import {
  arMegjegyzes,
  arak,
  arakById,
  bemutatkozas,
  egyesulet,
  fotok,
  galeriaKep,
  helyszinek,
  jelentkezesiLap,
  kozossegiElet,
  kozossegiSzolgalat,
  szolgalatiAlkalmak,
  linkek,
  mintaErtekelesek,
  programelemek,
  referenciaOsszegzes,
  szablyavivas,
  versenyek,
} from '@/content';
import { variantHref, type VariantConfig } from '@/variants/config';
import { LatestPostCard, LatestPostKepAlja, LatestPostSav } from '../LatestPost';
import { Minta } from '../Minta';
import { Ornament, OrnamentLec, Rubrum } from '../Ornament';
import { SponsorBar } from '../SponsorBar';
import { LogoPecset, PecsetMezo } from '../Logo';
import { InicialeKeret, Lap, Szemcse } from '../Texture';
import { ArLista, Gomb } from '../ui';
import { HetiTablazat } from '../HetiTablazat';
import { JelentkezesUrlap } from '../JelentkezesUrlap';

/**
 * 2. VÁLTOZAT — a hero háttere maga a fotó.
 *
 * A kép itt dekoratív háttér (alt=""), a hozzá tartozó képaláírás láthatóan,
 * a hero alján szerepel: így a forrásmegjelölés nem vész el, a képernyőolvasó
 * viszont nem olvassa be a címsor elé.
 *
 * A fátyol három rétegű: egy alapfedés, egy vízszintes átmenet (a szöveg felőli
 * oldal a tömörebb) és egy függőleges átmenet a sáv és a képaláírás alá. Így a
 * fotó a jobb oldalon marad látható, a szöveg alatt viszont majdnem tömör az alap.
 *
 * A fedés MÉRÉSSEL állt be, nem szemre, és SÉMÁNKÉNT más — a tokenek a
 * globals.css-ben (`--fatyol*`), mert a sötét sémán világos tinta ül a képen
 * (a legrosszabb eset a legvilágosabb képpont), a világos sémákon sötét tinta
 * (a legrosszabb eset a legsötétebb). A séma a lebegő váltóval menet közben
 * cserélhető, ezért kellett mindhárom színre külön belőni.
 * Ha a hero fotóját kicserélik, ezt újra le kell mérni.
 */
function HeroHatterkep() {
  return (
    <>
      <Image
        src={fotok.heroFegyverek.src}
        alt=""
        aria-hidden="true"
        fill
        /* a hero fotója a legnagyobb tartalmi festés (LCP) — a Next 16 itt
           kifejezett loading/fetchPriority-t vár, a `priority` már nem elég */
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="hero-fatyol pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="hero-fatyol-oldal pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-fatyol-fugg pointer-events-none absolute inset-0"
      />
      {/* a pecsétmező itt csak halványan, hogy ne küzdjön a fotóval */}
      <PecsetMezo className="text-accent2" opacity={0.07} />
    </>
  );
}

/**
 * A KEZDŐLAP — mindhárom színséma ugyanezt rendereli.
 *
 * Hero: illuminált iniciáléval induló címblokk; a támogatói hirdetősáv a hero
 * tetején fut. A fotó és a „Friss hírek" kártya viszonya sémánként más
 * (`heroHatter` + `posztHely` a variants/config.ts-ben):
 *
 *   1. változat — fotó a jobb hasábban, a bejegyzés teljes szélességű hírcsík
 *              a fejléc alatt;
 *   2. változat — a fotó KITÖLTI a hero hátterét, a címsor és a bejegyzéskártya
 *              a képen ül;
 *   3. változat — fotó a jobb hasábban, a bejegyzéskártya a kép ALSÓ RÉSZÉRE ül.
 *
 * A hero alatti ritmus széles, kevés elemű blokkokból áll: idézetblokk,
 * lépcsős fotósor, kiemelt lap, statisztikarács, programrács, idézetek,
 * naponkénti edzésrend.
 *
 * A hátteret végig az egyesület pecsétje adja: kicsinyített kontúrja átlós
 * mezőként ismétlődik, és nagy vízjelként is megjelenik. Lásd components/Logo.tsx.
 */
export function Landing({ v }: { v: VariantConfig }) {
  const h = (p: string) => variantHref(v.key, p);
  const kepHero = v.heroHatter === 'kep';
  /* A hero ALATTI szakaszok formanyelve. A hero maga mindhárom változatban
     ugyanaz marad — csak a színséma és a címbetű követi a formanyelvet. */
  const sztyeppe = v.stilus === 'sztyeppe';
  const kodex = v.stilus === 'kodex';

  return (
    <>
      {/*
        Legfrissebb Facebook-bejegyzés — SÁV: teljes szélességű hírcsík
        közvetlenül a fejléc alatt, a hero fölött. A legfelső lehetséges hely.
      */}
      {v.posztHely === 'sav' ? <LatestPostSav /> : null}

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        {kepHero ? (
          <HeroHatterkep />
        ) : (
          <>
            <PecsetMezo className="text-accent2" opacity={0.13} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-paper2/70 to-transparent"
            />
          </>
        )}
        {/* a fotón a szemcse csak jelzésszerű, különben sarat kenne a képre */}
        <Szemcse id="hero" opacity={kepHero ? 0.2 : 0.4} />

        {/* Támogatói hirdetősáv — a hero tetején */}
        <SponsorBar className="relative" />

        <div
          className={`relative mx-auto max-w-7xl px-5 pb-10 pt-8 sm:pb-14 sm:pt-12 ${
            kepHero ? 'lg:min-h-[34rem] lg:pb-14 lg:pt-16' : 'lg:pb-16 lg:pt-14'
          }`}
        >
          <div
            className={`grid gap-8 lg:gap-9 ${
              kepHero
                ? 'lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-center'
                : 'lg:grid-cols-[minmax(0,1fr)_21rem]'
            }`}
          >
            {/* Címblokk illuminált iniciáléval */}
            <div className="flex min-w-0 flex-col">
              <Rubrum kepen={kepHero}>Budapest XIV. és XVI. kerület</Rubrum>

              {/*
                Az iniciálé a címsoron BELÜL van, így a h1 szövege teljes marad
                („Íjászat, szablyavívás, élő hagyomány") a képernyőolvasónak és
                a keresőnek is — a díszítés csak a megjelenítést érinti.
              */}
              <h1 className="rise mt-5 flex items-start gap-3 font-display text-[1.75rem] font-bold uppercase leading-[1.1] tracking-[0.01em] text-ink sm:mt-7 sm:gap-3.5 sm:text-4xl lg:text-[3.4rem]">
                <InicialeKeret>Í</InicialeKeret>
                <span className="pt-0.5 sm:pt-1">
                  jászat, szablyavívás,
                  <span className="block text-accent">élő hagyomány</span>
                </span>
              </h1>

              <div className="mt-6 max-w-xl sm:mt-8">
                <OrnamentLec className="mb-5 max-w-[13rem] sm:mb-6 sm:max-w-[16rem]" />
                <p className="font-body text-base leading-relaxed text-ink2 sm:text-lg">
                  {bemutatkozas.vezeto}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <Gomb href="#kapcsolat">Válassz edzést</Gomb>
                <Gomb href={egyesulet.telefonHref} masodlagos>
                  {egyesulet.telefon}
                </Gomb>
              </div>

            </div>

            {/*
              A jobb hasáb két felállása:
                kepHero  — nincs külön fotómező (a fotó a hero háttere), csak
                           a bejegyzéskártya áll a képen;
                egyébként — fotómező, rajta vagy alatta a bejegyzés.
            */}
            {kepHero ? (
              <div className="flex min-w-0 flex-col">
                <LatestPostCard kepen />
              </div>
            ) : (
              <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
                <figure className="relative">
                  <div className="relative">
                    <div
                      className={`relative w-full overflow-hidden border border-accent2/70 bg-paper2 ${
                        /*
                          A kép alsó részére ülő kártyánál mobilon négyzetes a
                          fotó: állóban a kártya a hajtás alá csúszna (856 px),
                          fekvőben viszont kitakarná a lényeget. A négyzet a
                          kettő között van — a kártya 771 px-en, még az első
                          képernyőn ül, a fotó felső 42%-a szabadon marad.
                        */
                        v.posztHely === 'kepAlja'
                          ? 'aspect-square sm:aspect-[4/5]'
                          : 'aspect-[4/3] sm:aspect-[4/5]'
                      }`}
                    >
                      <Image
                        src={fotok.heroFegyverek.src}
                        alt={fotok.heroFegyverek.alt}
                        fill
                        loading="eager"
                        fetchPriority="high"
                        sizes="(max-width: 1024px) 100vw, 21rem"
                        className="object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-2 border border-card/50"
                      />
                    </div>

                    {/*
                      KÉP ALJA: a kártya a fotó alsó részén ül, a kép szélétől
                      behúzva — a felső kétharmad végig szabadon marad.
                    */}
                    {v.posztHely === 'kepAlja' ? (
                      <LatestPostKepAlja className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-4 lg:bottom-4" />
                    ) : null}
                  </div>

                  <figcaption className="mt-2 font-body text-xs italic text-muted">
                    {fotok.heroFegyverek.alt}
                  </figcaption>
                </figure>
              </div>
            )}
          </div>

          {/*
            A háttérfotó képaláírása — a kép alt="" (dekoratív háttér), így a
            forrásmegjelölés itt, láthatóan kapja meg a helyét.
          */}
          {kepHero ? (
            /* text-ink2, nem muted: a halvány szürkéskék a fátyolozott fotón
               nem hozná a 4,5:1-et ekkora fokozatban (mérve: 3,78:1). */
            <p className="relative mt-8 font-body text-xs italic text-ink2 lg:mt-10">
              {fotok.heroFegyverek.alt}
            </p>
          ) : null}
        </div>

        <OrnamentLec className="relative" />
      </section>

      {/* ═══════════════ RÓLUNK — idézetblokk ═══════════════ */}
      <section className="szakasz relative overflow-hidden border-b border-line bg-paper2">
        <PecsetMezo className="text-ink" opacity={0.05} />
        <Szemcse id="rolunk" opacity={0.35} />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <Rubrum>Eszmeiség</Rubrum>

          <blockquote className="mt-6 max-w-5xl font-body text-xl leading-[1.34] text-ink sm:mt-8 sm:text-3xl sm:leading-[1.28] lg:text-[2.7rem]">
            „A magyar történelem, hagyományok és népi kultúra értékeit{' '}
            <span className="text-accent">élő közösségi élményeken</span> keresztül adjuk
            tovább a következő generációknak."
          </blockquote>

          {/*
            KÓDEX: a pontok nem rácsban, hanem HASÁBOKBAN folynak, hasábvonallal
            elválasztva — ahogy a kódexlap tükre. A többi formanyelvben marad a
            rács. A `break-inside-avoid` tartja együtt az egyes tételeket.
          */}
          <div
            className={
              kodex
                ? 'kethasab mt-10 sm:mt-16 [&>div]:mb-8 [&>div]:break-inside-avoid sm:[&>div]:mb-10'
                : 'mt-10 grid gap-x-12 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3'
            }
          >
            {bemutatkozas.pontok.map((p, i) => (
              <div
                key={p.cim}
                className={
                  sztyeppe
                    ? 'pt-2'
                    : kodex
                      ? 'border-l-2 border-accent/50 pl-5'
                      : 'border-t border-line pt-6'
                }
              >
                {sztyeppe ? (
                  /* SZTYEPPE: a sorszám vert korongban ül — kör, nem vonal */
                  <span className="szam grid h-11 w-11 place-items-center rounded-full border-2 border-accent2 font-display text-base font-bold tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                ) : kodex ? (
                  /* KÓDEX: rubrikált bekezdésjel, ahogy a kódexlapon */
                  <span className="font-display text-xl font-bold leading-none text-accent">
                    <span aria-hidden="true">¶</span>
                    <span className="szam ml-2 text-base tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                ) : (
                  <span className="szam font-display text-sm font-bold tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                )}
                <h3 className="mt-3 font-display text-lg font-bold uppercase leading-snug tracking-wide text-ink">
                  {p.cim}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-ink2">{p.szoveg}</p>
              </div>
            ))}
            <div
              className={
                sztyeppe
                  ? 'pt-2'
                  : kodex
                    ? 'border-l-2 border-accent pl-5'
                    : 'border-t-2 border-accent/40 pt-6'
              }
            >
              <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Szablyavívás
              </span>
              <p className="mt-3 font-body text-base leading-relaxed text-ink2">
                {szablyavivas.szoveg}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ÉLET NÁLUNK — lépcsős fotósor + lap ═══════════════ */}
      <section className="szakasz relative overflow-hidden border-b border-line bg-paper">
        <PecsetMezo className="text-accent2" opacity={0.11} />
        <Szemcse id="elet" opacity={0.3} />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <div className="szakasz-fej flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Rubrum>Élet nálunk</Rubrum>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
                Ami az edzések között történik
              </h2>
            </div>
            <p className="max-w-sm font-body text-base leading-relaxed text-ink2">
              Tábortűz, jurtaállítás, táncház, erdei csata, 150 társasjáték. A közösség nem a
              foglalkozás végén ér véget.
            </p>
          </div>

          {/*
            A fotósor formanyelve:
              SZTYEPPE — korongok. A nomád tárgyi világ kör alapú (jurtakarika,
                         boglár, korong), ezért itt nincs derékszögű keret.
              KÓDEX    — keretezett miniatúrák: kettős vonalazású tükör, alatta
                         vonalazott képaláírás-sáv, egy vonalban álló sorral.
              ALAP     — a megszokott lépcsős fotósor.
          */}
          <div
            className={`mt-9 grid grid-cols-2 items-start gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4 ${
              sztyeppe ? 'sm:gap-6 lg:gap-8' : ''
            }`}
          >
            {[galeriaKep('jurta-racsfal-allitas'), galeriaKep('tuzugras-este'), galeriaKep('tabor-oktato-gyerekek'), galeriaKep('bogracs-szabadtuzon')].map(
              (f, i) => (
                <figure
                  key={f.src}
                  className={
                    sztyeppe
                      ? `flex flex-col items-center text-center ${i % 2 === 1 ? 'lg:mt-12' : ''}`
                      : kodex
                        ? 'kartya relative overflow-hidden border border-line bg-card p-0'
                        : `relative overflow-hidden border border-line ${
                            i % 2 === 1 ? 'lg:mt-10' : ''
                          }`
                  }
                >
                  <div
                    className={
                      sztyeppe
                        ? 'relative aspect-square w-full overflow-hidden rounded-full border-2 border-accent2'
                        : 'relative aspect-[3/4] w-full'
                    }
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={
                      sztyeppe
                        ? 'mt-3 px-1 font-body text-xs leading-snug text-ink2'
                        : kodex
                          ? 'border-t border-line bg-card px-3 py-2.5 font-body text-xs leading-snug text-ink2 sm:px-4 sm:py-3'
                          : 'bg-card/85 px-3 py-2.5 font-body text-xs leading-snug text-ink2 sm:px-4 sm:py-3'
                    }
                  >
                    {f.alt}
                  </figcaption>
                </figure>
              ),
            )}
          </div>

          <Lap className="mt-10 p-5 sm:mt-12 sm:p-8">
            <ul className="relative grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {kozossegiElet.map((k) => (
                <li key={k.cim} className="border-b border-line py-4">
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-ink">
                    {k.cim}
                  </h3>
                  <p className="mt-1.5 font-body text-base leading-relaxed text-ink2">
                    {k.szoveg}
                  </p>
                </li>
              ))}
            </ul>
          </Lap>
        </div>
      </section>

      {/* ═══════════════ 50 ÓRA — kiemelt lap ═══════════════ */}
      <section className="szakasz relative overflow-hidden border-b border-line bg-paper2">
        <PecsetMezo className="text-accent2" opacity={0.09} />
        <LogoPecset className="pointer-events-none absolute -left-32 -bottom-44 h-[32rem] w-[32rem] text-accent/15" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <Lap className="p-5 sm:p-8 lg:p-12">
            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <Rubrum>50 órás közösségi szolgálat</Rubrum>
                <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-[1.14] text-ink sm:mt-5 sm:text-3xl lg:text-5xl">
                  Töltsd nálunk az 50 órádat
                </h2>
                <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink2">
                  {kozossegiSzolgalat.vezeto}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {kozossegiSzolgalat.lehetosegek.map((l) => (
                    <li key={l} className="flex gap-3 font-body text-base text-ink2">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                      {l}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Gomb href={h('/kozossegi-szolgalat')}>Részletek és jelentkezés</Gomb>
                </div>
              </div>

              <ul className="self-center">
                {szolgalatiAlkalmak().map((a, i) => (
                  <li
                    key={`${a.nap}-${a.ido}-${i}`}
                    className="flex items-baseline gap-4 border-b border-line py-3 font-body text-base"
                  >
                    <span className="w-20 shrink-0 font-semibold text-ink">{a.napNev}</span>
                    <span className="w-16 shrink-0 text-muted">{a.ker}</span>
                    <span className="tabular-nums text-ink2">{a.ido}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Lap>
        </div>
      </section>

      {/* ═══════════════ EREDMÉNYEK — statisztikarács ═══════════════ */}
      <section className="szakasz relative overflow-hidden border-b border-line bg-paper">
        {/* A pecsét teljes kontúrja, nagy vízjelként — felirattal együtt */}
        <LogoPecset
          className="pointer-events-none absolute -left-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-accent2/30 lg:block"
        />
        <Szemcse id="eredm" opacity={0.3} />
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            <div className="relative">
              <Rubrum>Eredmények</Rubrum>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
                Versenyek és fellépések
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-ink2">
                {versenyek.szoveg}
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-ink2">
                {versenyek.terv}
              </p>
              <div className="mt-8">
                <Gomb href={h('/eredmenyek')} masodlagos>
                  Teljes referencialista
                </Gomb>
              </div>
            </div>

            {/*
              A számsor formanyelve:
                SZTYEPPE — vert korongok, jurtakarika-gyűrűvel. Nincs rácsvonal.
                KÓDEX    — vonalazott regiszter: tétel balra, kipontozás, szám
                           jobbra — ahogy egy oklevél összesítője fut.
                ALAP     — hajszálvonalas négyes rács.
            */}
            {(() => {
              const adatok = [
                { k: '2025', e: String(referenciaOsszegzes.ev2025), u: 'rendezvény' },
                { k: '2024', e: String(referenciaOsszegzes.ev2024), u: 'rendezvény' },
                { k: 'Hunyadi iskola', e: '~20', u: 'éve tartunk itt foglalkozást' },
                { k: 'Szablyavívás', e: '10+', u: 'éve' },
              ];

              if (sztyeppe) {
                return (
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-10">
                    {adatok.map((a) => (
                      <li key={a.k} className="flex flex-col items-center text-center">
                        <span className="relative grid aspect-square w-full max-w-[9.5rem] place-items-center rounded-full border-2 border-accent2">
                          <span
                            aria-hidden="true"
                            className="absolute inset-2 rounded-full border border-accent2/50"
                          />
                          <span className="szam relative font-display text-4xl font-bold tabular-nums text-accent sm:text-5xl">
                            {a.e}
                          </span>
                        </span>
                        <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {a.k}
                        </p>
                        <p className="mt-1 font-body text-base text-ink2">{a.u}</p>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (kodex) {
                return (
                  <dl className="border-t border-line">
                    {adatok.map((a) => (
                      <div
                        key={a.k}
                        className="flex flex-wrap items-baseline gap-x-3 border-b border-line py-4"
                      >
                        <dt className="font-body text-base text-ink">
                          {a.k}
                          <span className="ml-2 font-body text-base text-ink2">{a.u}</span>
                        </dt>
                        <span
                          aria-hidden="true"
                          className="mx-1 hidden min-w-8 flex-1 self-center border-b border-dotted border-line sm:block"
                        />
                        <dd className="szam ml-auto font-display text-3xl font-bold tabular-nums text-accent sm:text-4xl">
                          {a.e}
                        </dd>
                      </div>
                    ))}
                  </dl>
                );
              }

              return (
                <div className="grid gap-px bg-line sm:grid-cols-2">
                  {adatok.map((a) => (
                    <div key={a.k} className="bg-paper p-5 sm:p-8">
                      <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        {a.k}
                      </p>
                      <p className="szam mt-2 font-display text-4xl font-bold tabular-nums text-accent sm:mt-3 sm:text-5xl">
                        {a.e}
                      </p>
                      <p className="mt-2 font-body text-base text-ink2">{a.u}</p>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ═══════════════ RENDEZVÉNYEK — programrács ═══════════════ */}
      <section className="szakasz relative overflow-hidden border-b border-line bg-paper2">
        <PecsetMezo className="text-accent2" opacity={0.1} />
        <Szemcse id="rend" opacity={0.3} />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <div className="szakasz-fej max-w-2xl">
            <Rubrum>Rendezvények</Rubrum>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
              Vigyük el a programot Önökhöz
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ink2">
              Iskolai bemutató naptól falunapig, óvodai foglalkozástól fesztiválig. A
              programelemek szabadon kombinálhatók.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-2 items-stretch gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
            {programelemek.slice(0, 6).map((p) => (
              <li key={p.nev}>
                <Lap className="h-full" szegett={false}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    {p.kep ? (
                      <Image
                        src={`/foto/${p.kep}`}
                        alt={p.alt ?? p.nev}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <p className="relative px-3.5 py-3 font-display text-xs font-bold uppercase leading-snug tracking-wide text-ink sm:px-5 sm:py-4 sm:text-sm">
                    {p.nev}
                  </p>
                </Lap>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Gomb href={h('/rendezvenyek')}>Programkínálat és ajánlatkérés</Gomb>
          </div>
        </div>
      </section>

      {/* ═══════════════ ÉRTÉKELÉSEK ═══════════════ */}
      <section className="szakasz relative overflow-hidden border-b border-line bg-paper">
        <Szemcse id="ertek" opacity={0.3} />
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <Rubrum>Értékelések</Rubrum>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
            Mit mondanak rólunk?
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-3 border border-dashed border-accent/50 bg-accent/[0.07] px-4 py-3">
            <Minta />
            <p className="font-body text-base text-ink2">
              A valós értékelések a Facebookon és a Google-térképen élnek — ezek helykitöltő
              idézetek.
            </p>
          </div>

          <ul className="mt-8 grid gap-7 sm:grid-cols-3 sm:gap-6">
            {mintaErtekelesek.slice(0, 3).map((e) => (
              <li key={e.nev}>
                <figure className="flex h-full flex-col border-l-2 border-accent pl-6">
                  <div className="flex justify-end">
                    <Minta />
                  </div>
                  <blockquote className="mt-2 flex-1 font-body text-base italic leading-relaxed text-ink sm:text-lg">
                    {e.szoveg}
                  </blockquote>
                  <figcaption className="mt-5 font-body text-sm">
                    <span className="block font-semibold text-ink">{e.nev}</span>
                    <span className="block text-muted">{e.szerep}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Gomb href={linkek.googleErtekeles} kulso>
              Értékelj minket
            </Gomb>
            <Link
              href={h('/ertekelesek')}
              className="inline-flex min-h-12 items-center font-body text-base font-semibold text-link underline-offset-4 hover:underline"
            >
              Összes értékelés →
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-paper2 py-10">
        <Ornament className="mx-auto max-w-xl px-5" />
      </div>

      {/* ═══════════════ KAPCSOLAT + EDZÉSREND ═══════════════ */}
      <section
        id="kapcsolat"
        className="szakasz relative overflow-hidden border-t border-line bg-paper2"
      >
        <PecsetMezo className="text-accent2" opacity={0.09} />
        <Szemcse id="kapcs" opacity={0.35} />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-4 sm:pb-16 lg:pb-24">
          <div className="szakasz-fej max-w-2xl">
            <Rubrum>Kapcsolat</Rubrum>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
              Válassz edzést
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ink2">
              Heti egy edzés esetén {arakById.havi.ertek}, alkalmi részvétel{' '}
              {arakById.alkalmi.ertek}. {arMegjegyzes}
            </p>
          </div>

          {/* Az egyesület 2026–27-es táblázata — az ügyfél kérésére a kezdőlapon. */}
          <div className="mt-9 sm:mt-12">
            <HetiTablazat />
            <div className="mt-8 flex flex-wrap gap-4">
              <Gomb href="#jelentkezes">Jelentkezem</Gomb>
              <Gomb href={h('/foglalkozasok')} masodlagos>
                Minden foglalkozás részletesen
              </Gomb>
            </div>
          </div>

          <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            <Lap className="p-5 sm:p-7">
              <h3 className="relative font-display text-lg font-bold uppercase text-ink">
                Elérhetőség
              </h3>
              <a
                href={egyesulet.telefonHref}
                className="relative mt-4 block font-display text-2xl font-bold text-accent hover:text-link"
              >
                {egyesulet.telefon}
              </a>
              <a
                href={`mailto:${egyesulet.email}`}
                className="relative mt-2 block break-all font-body text-base text-ink2 hover:text-accent"
              >
                {egyesulet.email}
              </a>
              <p className="relative mt-4 font-body text-sm text-muted">
                Elnök: {egyesulet.elnok}
              </p>
            </Lap>

            {helyszinek.map((hely) => (
              <Lap key={hely.id} className="p-5 sm:p-7">
                <h3 className="relative font-display text-lg font-bold uppercase leading-snug text-ink">
                  {hely.nev}
                </h3>
                <p className="relative mt-2 font-display text-base font-bold text-link">
                  {hely.cim}
                </p>
                <p className="relative mt-2.5 font-body text-base leading-relaxed text-ink2">
                  {hely.leiras}
                </p>
              </Lap>
            ))}
          </div>

          <Lap className="mt-10 p-5 sm:mt-12 sm:p-8">
            <h3 className="relative font-display text-lg font-bold uppercase text-ink">
              Díjak 2026–27
            </h3>
            <ArLista tetelek={arak} className="relative mt-4" />
          </Lap>

          {/* Jelentkezési lap — az ügyfél kérésére a kezdőlapon; a nyomtatott
              beiratkozó lap mezői. A küldés a bemutatóban nincs bekötve (MINTA). */}
          <div id="jelentkezes" className="mt-12 scroll-mt-24 sm:mt-16">
            <div className="max-w-2xl">
              <Rubrum>{jelentkezesiLap.cimke}</Rubrum>
              <h3
                id="jelentkezes-cim"
                className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl"
              >
                {jelentkezesiLap.cim}
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-ink2">{jelentkezesiLap.lead}</p>
            </div>
            <Lap className="mt-6 p-5 sm:p-8">
              <div className="relative">
                <JelentkezesUrlap valtozat={v.key} />
              </div>
            </Lap>
          </div>
        </div>
      </section>
    </>
  );
}
