import Image from 'next/image';
import {
  fotok,
  korabbiEvek,
  linkek,
  mintaEredmenyek,
  ref2024,
  ref2025,
  referenciaOsszegzes,
  versenyek,
} from '@/content';
import { Minta, MintaSav } from '../Minta';
import type { VariantConfig } from '@/variants/config';
import { Card, CardCim, CardSzoveg, PageHeader, Section } from '../ui';

export function EredmenyekPage(_props: { v: VariantConfig }) {
  return (
    <>
      <PageHeader
        cimke="Eredmények"
        cim="Amit eddig letettünk az asztalra"
        lead="Az egyesület referencialistája évek óta vezetve van. Az alábbi rendezvények mind a jelenlegi weboldalunkról származnak."
      >
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Rendezvény 2025
            </dt>
            <dd className="mt-2 font-display text-3xl font-bold text-accent tabular-nums sm:text-4xl">
              {referenciaOsszegzes.ev2025}
            </dd>
          </div>
          <div>
            <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Rendezvény 2024
            </dt>
            <dd className="mt-2 font-display text-3xl font-bold text-accent tabular-nums sm:text-4xl">
              {referenciaOsszegzes.ev2024}
            </dd>
          </div>
          <div>
            <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Hunyadi iskola
            </dt>
            <dd className="mt-2 font-display text-4xl font-bold text-accent">
              <span className="text-xl">közel</span> 20 <span className="text-xl">éve</span>
            </dd>
          </div>
          <div>
            <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Szablyavívás
            </dt>
            <dd className="mt-2 font-display text-4xl font-bold text-accent">
              10+ <span className="text-xl">éve</span>
            </dd>
          </div>
        </dl>
      </PageHeader>

      <Section cimke="Íjászversenyek" cim="Versenyeken is kipróbáljuk magunkat">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-body text-base leading-relaxed text-ink2">{versenyek.szoveg}</p>
            <p className="mt-4 font-body text-base leading-relaxed text-ink2">
              {versenyek.terv}
            </p>

            <div className="mt-8">
              <MintaSav>
                A jelenlegi oldal nem közöl konkrét helyezéseket és neveket. Az alábbi sorok
                mintasorok — ide kerülnek majd a valós versenyeredmények.
              </MintaSav>
              <ul className="space-y-0">
                {mintaEredmenyek.map((e, i) => (
                  <li
                    key={`${e.verseny}-${i}`}
                    className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line py-4"
                  >
                    <span className="font-display text-lg font-bold text-accent tabular-nums">
                      {e.ev}
                    </span>
                    <span className="font-body text-sm font-semibold text-ink">
                      {e.helyezes}
                    </span>
                    <span className="font-body text-sm text-ink2">{e.verseny}</span>
                    <span className="font-body text-sm text-muted">{e.resztvevo}</span>
                    <Minta className="ml-auto" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="relative aspect-[4/3] w-full overflow-hidden border border-line"
          >
            <Image
              src={fotok.gyermekIjaszverseny.src}
              alt={fotok.gyermekIjaszverseny.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        alt
        cimke="Referenciák"
        cim="2025"
        lead={`${referenciaOsszegzes.ev2025} rendezvény — a jelenlegi weboldal saját, sorszámozott listája alapján.`}
      >
        <RefLista tetelek={ref2025} />
      </Section>

      <Section
        cimke="Referenciák"
        cim="2024"
        lead={`${referenciaOsszegzes.ev2024} rendezvény.`}
      >
        <RefLista tetelek={ref2024} />
      </Section>

      <Section
        alt
        cimke="Korábbi évek"
        cim="Válogatás 2023-ig visszamenőleg"
        lead={referenciaOsszegzes.megjegyzes}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {korabbiEvek.map((ev) => (
            <Card key={ev.ev}>
              <CardCim>{ev.ev}</CardCim>
              <ul className="mt-4 space-y-3">
                {ev.valogatas.map((r, i) => (
                  <li key={`${ev.ev}-${i}`} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <span className="block font-body text-xs tabular-nums text-muted">
                      {r.datum}
                    </span>
                    <span className="block font-body text-sm font-semibold text-ink">
                      {r.esemeny}
                    </span>
                    <span className="block font-body text-sm text-ink2">{r.hely}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-8 font-body text-sm text-muted">
          A teljes lista{' '}
          <a
            href={`${linkek.jelenlegiOldal}referenciak/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 text-link underline underline-offset-4"
          >
            a jelenlegi oldalon
          </a>{' '}
          érhető el.
        </p>
      </Section>

      <Section cimke="Amit még megmutatunk" cim="Nagyobb megjelenések">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              cim: 'Kurultáj — díszvacsora',
              szoveg: 'A nagy jurtánk a Kurultáj díszvacsoráján állt.',
              kep: fotok.nagyJurta,
            },
            {
              cim: 'Székesfehérvár — Királyok a Belvárosban',
              szoveg: '2025. 08. 30. — történelmi fesztivál.',
              kep: fotok.fegyveresBemutato,
            },
            {
              cim: 'Visegrád — Hagyományőrző Konferencia',
              szoveg:
                '2022. 03. 19. — a Történelmi Hadi Akadémia szervezésében.',
              kep: fotok.fegyvermustra,
            },
          ].map((k) => (
            <li
              key={k.cim}
              className="overflow-hidden border border-line bg-card"
            >
              <div className="relative aspect-[16/10] w-full bg-paper2">
                <Image
                  src={k.kep.src}
                  alt={k.kep.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <CardCim>{k.cim}</CardCim>
                <CardSzoveg>{k.szoveg}</CardSzoveg>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function RefLista({
  tetelek,
}: {
  tetelek: { datum: string; hely: string; esemeny: string }[];
}) {
  return (
    <ol className="grid gap-x-10 sm:grid-cols-2">
      {tetelek.map((r, i) => (
        <li
          key={`${r.datum}-${r.esemeny}-${i}`}
          className="flex gap-4 border-b border-line py-3.5"
        >
          <span className="w-16 shrink-0 font-body text-xs tabular-nums text-muted">
            {r.datum}
          </span>
          <span className="min-w-0">
            <span className="block font-body text-sm font-semibold leading-snug text-ink">
              {r.esemeny}
            </span>
            <span className="block font-body text-sm leading-snug text-ink2">{r.hely}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
