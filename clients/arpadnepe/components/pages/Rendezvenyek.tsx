import Image from 'next/image';
import Link from 'next/link';
import {
  ajanlatkeresMezok,
  arajanlatSzempontok,
  egyesulet,
  eszkozberles,
  galeriaKep,
  hirmondo,
  korhinta,
  linkek,
  programelemek,
  rendezvenyBevezeto,
  szolgaltatasok,
  tovabbiProgramelemek,
} from '@/content';
import { variantHref, type VariantConfig } from '@/variants/config';
import { Lap } from '../Texture';
import { Card, CardCim, CardSzoveg, Gomb, PageHeader, Section } from '../ui';

export function RendezvenyekPage({ v }: { v: VariantConfig }) {
  return (
    <>
      <PageHeader
        cimke="Rendezvények"
        cim="Válassza programjainkat!"
        lead={rendezvenyBevezeto.szoveg}
      >
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink2">
          {rendezvenyBevezeto.nyitottsag}
        </p>
      </PageHeader>

      {/* Hírmondó — az egyesület nyár végi körlevele, a rendezvényszervezőknek */}
      <Section cimke="Hírmondó" cim={hirmondo.cim} lead={hirmondo.alcim}>
        <Lap className="p-5 sm:p-8">
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                {hirmondo.datum}
              </p>
              <div className="mt-4 space-y-4">
                {hirmondo.bekezdesek.map((b) => (
                  <p key={b} className="font-body text-base leading-relaxed text-ink2">
                    {b}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Gomb href={linkek.hirlevel} kulso>
                  Iratkozz fel a hírlevélre
                </Gomb>
                <Gomb href={linkek.googleErtekeles} kulso masodlagos>
                  {hirmondo.felhivas}
                </Gomb>
              </div>
            </div>
            <figure className="self-start">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                <Image
                  src={galeriaKep(hirmondo.kep).src}
                  alt={galeriaKep(hirmondo.kep).alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 font-body text-xs italic text-muted">
                {galeriaKep(hirmondo.kep).alt}
              </figcaption>
            </figure>
          </div>
        </Lap>
      </Section>

      <Section
        cimke="Amit kérhet tőlünk"
        cim="Négyféle megkeresés"
        lead={rendezvenyBevezeto.egyedi}
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {szolgaltatasok.map((sz) => (
            <Card key={sz.cim} as="li">
              <CardCim>{sz.cim}</CardCim>
              <CardSzoveg>{sz.szoveg}</CardSzoveg>
            </Card>
          ))}
        </ul>
      </Section>

      <Section
        alt
        cimke="Programelemek"
        cim="Amiből a rendezvény összeáll"
        lead="A programelemek a jelenlegi oldal képgalériájának saját megnevezései. Egy rendezvényre több elem is kérhető, egymás mellé állítva."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programelemek.map((p) => (
            <li
              key={p.nev}
              className="group overflow-hidden border border-line bg-card"
            >
              {p.kep ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper2">
                  <Image
                    src={`/foto/${p.kep}`}
                    alt={p.alt ?? p.nev}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ) : null}
              <p className="px-5 py-4 font-display text-base font-semibold text-ink">
                {p.nev}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-line pt-8">
          <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-muted">
            További programelemek
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tovabbiProgramelemek.map((t) => (
              <li
                key={t}
                className="border border-line px-3 py-1.5 font-body text-sm text-ink2"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section cimke="Kiemelt programelem" cim={korhinta.cim}>
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-body text-base leading-relaxed text-ink2">{korhinta.szoveg}</p>
            <p className="mt-5 border-l-2 border-accent pl-4 font-body text-sm leading-relaxed text-ink">
              {korhinta.vizsga}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <figure>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                <Image
                  src={galeriaKep('kosaras-korhinta-parkban').src}
                  alt={galeriaKep('kosaras-korhinta-parkban').alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 font-body text-xs italic text-muted">
                {galeriaKep('kosaras-korhinta-parkban').alt}
              </figcaption>
            </figure>
          <Card>
            <CardCim>Ajánlott kiegészítő programok</CardCim>
            <ul className="mt-4 space-y-3">
              {korhinta.kiegeszitok.map((k) => (
                <li
                  key={k}
                  className="flex gap-3 border-b border-line pb-3 font-body text-sm text-ink2 last:border-0 last:pb-0"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-4 shrink-0 bg-accent2" />
                  {k}
                </li>
              ))}
            </ul>
          </Card>
          </div>
        </div>
      </Section>

      <Section alt cimke="Eszközbérlés" cim={eszkozberles.cim}>
        <p className="max-w-3xl font-body text-base leading-relaxed text-ink2">
          {eszkozberles.szoveg}
        </p>
        <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-ink2">
          Az egyesület tagjainak szóló edzésfelszerelés-bérlés (íj, vessző, gyakorlófegyver,
          védőfelszerelés) díjait a{' '}
          <Link
            href={variantHref(v.key, '/foglalkozasok#eszkozberles')}
            className="font-semibold text-link underline-offset-4 hover:underline"
          >
            Foglalkozások oldalon
          </Link>{' '}
          találod.
        </p>
      </Section>

      <Section
        id="ajanlatkeres"
        cimke="Foglalás"
        cim="Hogyan kérhet ajánlatot?"
        lead={rendezvenyBevezeto.ar}
      >
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Az árajánlat szempontjai
            </h3>
            <ul className="mt-5 space-y-0">
              {arajanlatSzempontok.map((sz, i) => (
                <li
                  key={sz}
                  className="flex items-baseline gap-4 border-b border-line py-3 font-body text-sm text-ink2"
                >
                  <span className="font-display text-xs font-bold text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {sz}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Card>
              <CardCim>A program paraméterei</CardCim>
              <ul className="mt-4 space-y-2.5 font-body text-sm text-ink2">
                {ajanlatkeresMezok.program.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {m}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <CardCim>A megrendelő adatai</CardCim>
              <ul className="mt-4 space-y-2.5 font-body text-sm text-ink2">
                {ajanlatkeresMezok.megrendelo.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {m}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <Gomb href={`mailto:${egyesulet.email}?subject=Ajánlatkérés%20—%20Árpád%20Népe%20Egyesület`}>
            Ajánlatkérés e-mailben
          </Gomb>
          <Gomb href={egyesulet.telefonHref} masodlagos>
            {egyesulet.telefon} · {egyesulet.elnok}
          </Gomb>
        </div>
      </Section>
    </>
  );
}
