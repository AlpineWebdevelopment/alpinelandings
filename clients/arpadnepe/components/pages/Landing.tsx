import Image from 'next/image';
import Link from 'next/link';
import {
  arak,
  bemutatkozas,
  egyesulet,
  fotok,
  helyszinek,
  heti,
  kozossegiElet,
  kozossegiSzolgalat,
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
import { Gomb } from '../ui';

/**
 * INDIGÓ — a hero háttere maga a fotó.
 *
 * A kép itt dekoratív háttér (alt=""), a hozzá tartozó képaláírás láthatóan,
 * a hero alján szerepel: így a forrásmegjelölés nem vész el, a képernyőolvasó
 * viszont nem olvassa be a címsor elé.
 *
 * A sötétítő fátyol három rétegű: egy alap fedés, egy vízszintes átmenet (a
 * szöveg felőli oldal a sötétebb) és egy függőleges átmenet a sáv és a
 * képaláírás alá. Így a fotó a jobb oldalon marad látható, a szöveg alatt
 * viszont majdnem tömör az alap.
 *
 * A fedés értékei MÉRÉSSEL álltak be, nem szemre: a kirenderelt háttérből
 * (fotó + fátyol) minden szövegdoboz LEGVILÁGOSABB képpontjára számoltunk
 * kontrasztarányt, és úgy hangoltuk, hogy minden elem küszöb fölött legyen.
 * Ha a hero fotóját kicserélik, ezt újra le kell mérni.
 */
function HeroHatterkep() {
  return (
    <>
      <Image
        src={fotok.ijaszatOktatas.src}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-paper/88 lg:bg-paper/52"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-paper/96 via-paper/86 to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-paper/55 via-transparent to-paper/85 lg:from-paper/70"
      />
      {/* a pecsétmező itt csak halványan, hogy ne küzdjön a fotóval */}
      <PecsetMezo id="hero" className="text-accent2" opacity={0.07} />
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
 *   Pergamen — fotó a jobb hasábban, a bejegyzés teljes szélességű hírcsík
 *              a fejléc alatt;
 *   Indigó   — a fotó KITÖLTI a hero hátterét, a címsor és a bejegyzéskártya
 *              a képen ül;
 *   Posztó   — fotó a jobb hasábban, a bejegyzéskártya a kép ALSÓ RÉSZÉRE ül.
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
            <PecsetMezo id="hero" className="text-accent2" opacity={0.13} />
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
                        src={fotok.ijaszatOktatas.src}
                        alt={fotok.ijaszatOktatas.alt}
                        fill
                        priority
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
                    {fotok.ijaszatOktatas.alt}
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
              {fotok.ijaszatOktatas.alt}
            </p>
          ) : null}
        </div>

        <OrnamentLec className="relative" />
      </section>

      {/* ═══════════════ RÓLUNK — idézetblokk ═══════════════ */}
      <section className="relative overflow-hidden border-b border-line bg-paper2">
        <PecsetMezo id="rolunk" className="text-ink" opacity={0.05} />
        <Szemcse id="rolunk" opacity={0.35} />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <Rubrum>Eszmeiség</Rubrum>

          <blockquote className="mt-6 max-w-5xl font-body text-xl leading-[1.34] text-ink sm:mt-8 sm:text-3xl sm:leading-[1.28] lg:text-[2.7rem]">
            „A magyar történelem, hagyományok és népi kultúra értékeit{' '}
            <span className="text-accent">élő közösségi élményeken</span> keresztül adjuk
            tovább a következő generációknak."
          </blockquote>

          <div className="mt-10 grid gap-x-12 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {bemutatkozas.pontok.map((p, i) => (
              <div key={p.cim} className="border-t border-line pt-6">
                <span className="font-display text-sm font-bold tabular-nums text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold uppercase leading-snug tracking-wide text-ink">
                  {p.cim}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-ink2">{p.szoveg}</p>
              </div>
            ))}
            <div className="border-t-2 border-accent/40 pt-6">
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
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <PecsetMezo id="elet" className="text-accent2" opacity={0.11} />
        <Szemcse id="elet" opacity={0.3} />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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

          <div className="mt-9 grid grid-cols-2 items-start gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
            {[fotok.erdeiCsata, fotok.jurtaallitas, fotok.tanchaz, fotok.nyariEdzotabor].map(
              (f, i) => (
                <figure
                  key={f.src}
                  className={`relative overflow-hidden border border-line ${
                    i % 2 === 1 ? 'lg:mt-10' : ''
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="bg-card/85 px-3 py-2.5 font-body text-xs leading-snug text-ink2 sm:px-4 sm:py-3">
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
      <section className="relative overflow-hidden border-b border-line bg-paper2">
        <PecsetMezo id="ksz" className="text-accent2" opacity={0.09} />
        <LogoPecset id="ksz-vizjel" felirattal={false} strokeWidth={3} className="pointer-events-none absolute -left-32 -bottom-44 h-[32rem] w-[32rem] text-accent/15" />

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
                {kozossegiSzolgalat.allando.map((a, i) => (
                  <li
                    key={`${a.nap}-${a.ido}-${i}`}
                    className="flex items-baseline gap-4 border-b border-line py-3 font-body text-base"
                  >
                    <span className="w-20 shrink-0 font-semibold text-ink">{a.nap}</span>
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
      <section className="relative overflow-hidden border-b border-line bg-paper">
        {/* A pecsét teljes kontúrja, nagy vízjelként — felirattal együtt */}
        <LogoPecset
          id="eredm-vizjel"
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

            <div className="grid gap-px bg-line sm:grid-cols-2">
              {[
                { k: '2025', e: String(referenciaOsszegzes.ev2025), u: 'rendezvény' },
                { k: '2024', e: String(referenciaOsszegzes.ev2024), u: 'rendezvény' },
                { k: 'Hunyadi iskola', e: '~20', u: 'éve tartunk itt foglalkozást' },
                { k: 'Szablyavívás', e: '10+', u: 'éve' },
              ].map((s) => (
                <div key={s.k} className="bg-paper p-5 sm:p-8">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {s.k}
                  </p>
                  <p className="mt-2 font-display text-4xl font-bold tabular-nums text-accent sm:mt-3 sm:text-5xl">
                    {s.e}
                  </p>
                  <p className="mt-2 font-body text-base text-ink2">{s.u}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ RENDEZVÉNYEK — programrács ═══════════════ */}
      <section className="relative overflow-hidden border-b border-line bg-paper2">
        <PecsetMezo id="rend" className="text-accent2" opacity={0.1} />
        <Szemcse id="rend" opacity={0.3} />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-24">
          <div className="max-w-2xl">
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
      <section className="relative overflow-hidden border-b border-line bg-paper">
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
        className="relative overflow-hidden border-t border-line bg-paper2"
      >
        <PecsetMezo id="kapcs" className="text-accent2" opacity={0.09} />
        <Szemcse id="kapcs" opacity={0.35} />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-4 sm:pb-16 lg:pb-24">
          <div className="max-w-2xl">
            <Rubrum>Kapcsolat</Rubrum>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
              Válassz edzést
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ink2">
              Heti foglalkozás, edzés ára: 11 000 Ft/hónap (4 alkalom). A vasárnapi alkalmaknak
              külön áruk van.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {heti.map((nap) => (
              <Lap key={nap.nap} className="p-5 sm:p-7">
                <div className="relative flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <h3 className="font-display text-xl font-bold uppercase text-ink">{nap.nap}</h3>
                  <p className="text-right font-body text-xs text-muted">
                    {nap.helyszin}
                    <br />
                    {nap.cim}
                  </p>
                </div>
                <ul className="relative mt-4 space-y-4">
                  {nap.alkalmak.map((a, i) => (
                    <li key={`${nap.nap}-${a.ido}-${i}`} className="grid gap-1">
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-display text-base font-bold tabular-nums text-accent">
                          {a.ido}
                        </span>
                        <span className="font-body text-base font-semibold text-ink">
                          {a.cim}
                        </span>
                        {a.ar ? (
                          <span className="font-body text-base font-bold text-accent3">
                            {a.ar}
                          </span>
                        ) : null}
                      </div>
                      <p className="font-body text-sm text-muted">
                        {a.korosztaly}
                        {a.ferohely ? ` · ${a.ferohely}` : ''}
                      </p>
                    </li>
                  ))}
                </ul>
              </Lap>
            ))}
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
            <dl className="relative grid gap-x-12 sm:grid-cols-2">
              {arak.map((a) => (
                <div
                  key={a.cim}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3"
                >
                  <dt className="font-body text-base text-ink2">{a.cim}</dt>
                  <dd className="shrink-0 font-display text-base font-bold tabular-nums text-accent">
                    {a.ertek}
                  </dd>
                </div>
              ))}
            </dl>
          </Lap>
        </div>
      </section>
    </>
  );
}
