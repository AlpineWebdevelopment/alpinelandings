import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

// FIGYELEM: az időpontok évente változnak — a 2027-es lomtalanítás kihirdetése után
// frissíteni kell a címet, a leírást és az első szakaszt (forrás: MOHU, Újpest Önkormányzata).
export const metadata: Metadata = {
  title: "Lomtalanítás Újpest 2026 — lemaradt? Így vihetik el most a lomot",
  description:
    "A 2026-os újpesti lakossági lomtalanítás július 19. és augusztus 2. között volt. Lemaradt? Konténerrel most is elvisszük a bútort és a lomot a 4. kerület minden részéből. ☎ +36 21 3355 255",
  alternates: { canonical: "/lakossagi-lomtalanitas" },
};

export default function LakossagiLomPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Lakossági lomtalanítás</span>
          </div>
          <h1>Lemaradt az újpesti lomtalanításról?</h1>
          <p className="lead">
            Az idei lakossági lomtalanítás Újpesten már lezajlott. Ha kimaradt,
            nem kell egy évet várnia: konténerrel most is elvisszük a bútort és a
            lomot, egyeztetett időpontban.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor volt a lomtalanítás 2026-ban?</h2>
          <p>
            A MOHU és Újpest Önkormányzata tájékoztatása szerint a 2026-os
            lakossági lomtalanítás a IV. kerületben{" "}
            <b>július 19. és augusztus 2. között</b> zajlott, körzetenként eltérő
            napokon. A lakossági lomtalanítás jellemzően évente egyszer van; a
            következő időpontot a MOHU és az önkormányzat teszi közzé.
          </p>

          <h2>Mit lehetett kitenni — és mit nem?</h2>
          <p>
            A lakossági lomtalanításkor kizárólag a háztartásban feleslegessé
            vált <b>nagydarabos hulladék</b> tehető ki a ház elé — például bútor,
            ágybetét, szőnyeg. Felújítási törmeléket, sittet vagy nagyobb
            mennyiségű vegyes hulladékot ilyenkor nem lehet kihelyezni.
          </p>
          <p>
            A konténerbe viszont a lom mellé <b>sitt és vegyes hulladék</b> is
            kerülhet — hogy pontosan mi, azt a{" "}
            <Link href="/mi-mehet-a-kontenerbe">
              mi mehet a konténerbe
            </Link>{" "}
            oldalon soroljuk fel.
          </p>

          <h2>Nem kell egy évet várnia</h2>
          <ul>
            <li>
              <b>Nem kell kivárni</b> a körzet lomtalanítási napját
            </li>
            <li>
              <b>Nem kell napokig a ház előtt tárolni</b> a lomot, és nem kell
              aggódni, hogy közben széthordják
            </li>
            <li>
              <b>Egy konténerbe mehet</b> a régi bútor és a felújítás
              törmeléke
            </li>
            <li>
              A konténer <b>akár 1 hétig felár nélkül</b> kint maradhat, így
              nyugodtan pakolhat
            </li>
          </ul>

          <h2>Tipikus újpesti helyzetek</h2>
          <h3>Költözés a Káposztásmegyeri lakótelepen</h3>
          <p>
            Egy lakás kiürítésekor sok a nagy bútor. A konténer ilyenkor
            jellemzően a panelház melletti parkolóba kerül, így a lépcsőházból
            közvetlenül pakolhat.
          </p>
          <h3>Felújítás egy Újpest-központi bérházban</h3>
          <p>
            A régi konyhabútor, az ajtók és a bontási törmelék egy konténerbe
            mehet — a lakossági lomtalanításon ezek közül csak a bútort lehetne
            kitenni.
          </p>
          <h3>Pince- vagy garázsürítés Megyeren, Istvántelken</h3>
          <p>
            Kertes háznál a konténer sokszor a telken belül vagy a behajtón is
            elfér, így nem kell az utcára tenni.
          </p>

          <h2>Mekkora konténer kell?</h2>
          <p>
            A lom terjedelmes, ezért inkább nagyobb konténerben érdemes
            gondolkodni: egy pince vagy tároló kiürítéséhez jellemzően a{" "}
            <b>4 m³</b>, egy teljes lakáshoz a <b>6 m³</b>, egy nagyobb ház vagy
            hagyaték kiürítéséhez a <b>8 m³</b> a jellemző. Ha bizonytalan,
            telefonon segítünk választani.
          </p>

          <h2>Kisebb mennyiségnél</h2>
          <p>
            Ha csak egy-két darabot vinne el, a MOHU lakossági hulladékudvaraiban
            is leadhatja — a feltételeket az ő oldalukon találja. A konténer
            akkor éri meg, ha egyszerre több bútor vagy lom gyűlt össze.
          </p>

          <p>
            A konténeres lomtalanításról bővebben a{" "}
            <Link href="/lomtalanitas-zoldhulladek">lomtalanítás</Link> oldalon,
            az árakról az <Link href="/arak">Árak</Link> oldalon olvashat.
          </p>

          <CtaBand text="Lemaradt a lomtalanításról? Hívjon — egyeztetjük az időpontot, és elvisszük a lomot." />
        </div>
      </section>
    </main>
  );
}
