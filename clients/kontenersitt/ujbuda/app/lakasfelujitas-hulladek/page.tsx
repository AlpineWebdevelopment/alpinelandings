import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Lakásfelújítás hulladéka Újbudán — mennyi keletkezik, mibe kerül",
  description:
    "Lakásfelújítás Újbudán? Fürdő- és konyhafelújításhoz 4 m³, teljes lakáshoz 6 m³ konténer a jellemző. Sitt és lom vegyesen mehet. 11.875 Ft/m³-tól, kiszállítással és lerakással. ☎ +36 21 3355 244",
  alternates: { canonical: "/lakasfelujitas-hulladek" },
};

export default function FelujitasPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Lakásfelújítás hulladéka</span>
          </div>
          <h1>Lakásfelújítás hulladéka Újbudán</h1>
          <p className="lead">
            Mennyi hulladék keletkezik egy felújításnál, mi mehet a konténerbe,
            és mibe kerül az elszállítás — gyakorlati útmutató a XI. kerületi
            lakásfelújításokhoz.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mennyi hulladék keletkezik?</h2>
          <p>
            A felújítás mértéke nagyjából meghatározza a szükséges konténert:
          </p>
          <ul>
            <li>
              <b>Fürdőszoba vagy konyha felújítása</b> — burkolat, csempe,
              szaniterek: <b>4 m³</b>
            </li>
            <li>
              <b>Teljes lakásfelújítás</b> — burkolatok, válaszfal, ajtók, régi
              bútorok: <b>6 m³</b>
            </li>
            <li>
              <b>Bontás, több lakás vagy villafelújítás</b>: <b>8 m³</b>
            </li>
          </ul>

          <h2>Mi keletkezik egy felújításnál?</h2>
          <p>
            Egy lakásfelújítás hulladéka jellemzően kétféle. A{" "}
            <b>sitt</b> — csempe, vakolat, beton, a bontott válaszfal — nehéz és
            tömör. A <b>lom</b> — a régi konyhabútor, az ajtók, az ablakok, a
            szőnyeg — könnyebb, de terjedelmes. A kettő{" "}
            <b>vegyesen, egy konténerbe</b> is mehet, nem kell külön rendelnie.
          </p>

          <h2>Amire figyeljen: ez nem mehet bele</h2>
          <p>
            Felújításnál a leggyakoribb hiba, hogy a konténerbe olyan hulladék
            kerül, amit szabályosan nem lehet vele elszállítani:
          </p>
          <ul>
            <li>
              <b>Festék, oldószer, vegyszer</b> — a félig teli festékes vödrök és
              ragasztós flakonok is
            </li>
            <li>
              <b>Azbeszt, pala</b> — régebbi épületeknél előfordulhat
            </li>
            <li>
              <b>Elektronikai hulladék, akkumulátor</b> — a régi háztartási gépek
            </li>
          </ul>

          <h2>Mibe kerül?</h2>
          <p>
            Újbudán a konténer ára <b>{site.m3Price}</b> (nettó, 8 m³-es vegyes
            konténerre). A pontos összeg a választott mérettől és a hulladék
            fajtájától függ, és tartalmazza a kiszállítást, az elszállítást és a
            szabályos lerakást is. Részletek az <Link href="/arak">Árak</Link>{" "}
            oldalon.
          </p>

          <h2>Újbudai sajátosságok</h2>
          <ul>
            <li>
              <b>Gazdagréti és kelenföldi</b> panellakásoknál a konténer
              jellemzően a parkolóba kerül
            </li>
            <li>
              <b>Lágymányos</b> bérházainál gyakran csak közterület marad —
              ehhez{" "}
              <Link href="/kozterulet-engedely">közterület-engedély</Link> kell
            </li>
            <li>
              <b>Sasad és Sashegy</b> domboldali, szűk utcáihoz a helyszínhez
              illő autót választjuk
            </li>
          </ul>

          <h2>Ütemezési tipp</h2>
          <p>
            Rendelje a konténert <b>a bontás kezdetére</b>, hiszen a legtöbb
            hulladék ekkor keletkezik. A konténer <b>akár 1 hétig felár
            nélkül</b> kint maradhat, és ha megtelik, <b>24 órán belül
            cseréljük</b>. Így a munka nem áll le, és nem kell a lépcsőházban
            tárolni a törmeléket.
          </p>

          <CtaBand text="Mondja el, mit újít fel — megmondjuk, melyik konténer kell, és mennyibe kerül." />
        </div>
      </section>
    </main>
  );
}
