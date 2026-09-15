import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Mi mehet a konténerbe és mi nem? — hulladéktípusok Újpesten",
  description:
    "Mit tehet a konténerbe? Sitt, lom, vegyes építési hulladék és egyeztetéssel zöldhulladék igen — festék, azbeszt, gumiabroncs, elektronika és háztartási szemét nem. Újpest, IV. kerület. ☎ +36 21 3355 255",
  alternates: { canonical: "/mi-mehet-a-kontenerbe" },
};

export default function MiMehetPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Mi mehet a konténerbe?</span>
          </div>
          <h1>Mi mehet a konténerbe — és mi nem?</h1>
          <p className="lead">
            Mielőtt pakolni kezd: ezt nyugodtan beleteheti, ezt pedig nem. A
            lista segít elkerülni, hogy olyan hulladék kerüljön a konténerbe,
            amit szabályosan nem lehet vele elszállítani.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Ezt nyugodtan beleteheti</h2>
          <ul>
            <li>
              <b>Építési törmelék (sitt)</b> — tégla, beton, csempe, vakolat
            </li>
            <li>
              <b>Lom</b> — bútor, ajtó, ablak, szőnyeg, háztartási kacat
            </li>
            <li>
              <b>Vegyes építkezési hulladék</b> — sitt és lom együtt
            </li>
            <li>
              <b>Zöldhulladék</b> — gally, nyesedék, <b>előzetes egyeztetéssel</b>
            </li>
          </ul>
          <p>
            A hulladékot engedélyes lerakóban, szabályosan adjuk le — akár{" "}
            <b>90%-a újrahasznosításra kerül</b>, és kérésre igazolást is adunk
            róla.
          </p>

          <h2>Ez nem kerülhet bele</h2>
          <p>
            Az alábbiakat a szabályos leadás miatt nem tudjuk konténerrel
            elszállítani. Mindegyiknek megvan a maga útja:
          </p>
          <ul>
            <li>
              <b>Festék, oldószer, vegyszer</b> — veszélyes hulladék, jellemzően
              hulladékudvarban adható le
            </li>
            <li>
              <b>Azbeszt, pala</b> — szakszerű bontást és külön elszállítást
              igényel
            </li>
            <li>
              <b>Gumiabroncs</b> — jellemzően gumiszervizben vagy
              hulladékudvarban adható le
            </li>
            <li>
              <b>Elektronikai hulladék, akkumulátor</b> — a régi tévé, hűtő,
              mosógép is; jellemzően az üzletek visszaveszik, vagy
              hulladékudvarban adható le
            </li>
            <li>
              <b>Kommunális, háztartási szemét</b> — ennek a helye a háztartási
              hulladékgyűjtés
            </li>
          </ul>

          <h2>Tipikus újpesti helyzetek</h2>
          <h3>Lomtalanítás a Káposztásmegyeri lakótelepen</h3>
          <p>
            A régi bútor, a szőnyeg és a háztartási kacat mehet. A régi tévé, a
            hűtő vagy a mosógép viszont elektronikai hulladék, ezeket külön kell
            leadni.
          </p>
          <h3>Felújítás egy Újpest-központi bérházban</h3>
          <p>
            A sitt és a lom vegyesen, egy konténerbe mehet. A kiürült festékes
            vödröket és a ragasztós flakonokat azonban tegye félre — ezek
            veszélyes hulladéknak számítanak.
          </p>
          <h3>Kertrendezés Megyeren vagy Istvántelken</h3>
          <p>
            A gallyat és a nyesedéket egyeztetés után elvisszük. A garázsban
            talált régi gumiabroncsokat viszont ne tegye a konténerbe.
          </p>

          <h2>Bizonytalan? Kérdezzen, mielőtt pakol</h2>
          <p>
            Egyszerűbb egy perc alatt telefonon megkérdezni, mint utólag
            kiszedni valamit a konténerből. Megmondjuk, mi mehet bele, és mit hova
            lehet szabályosan leadni. A hulladékfajtákról bővebben a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomtalanítás · zöldhulladék
            </Link>{" "}
            és a <Link href="/sittszallitas">sittszállítás</Link> oldalon, az
            árakról az <Link href="/arak">Árak</Link> oldalon olvashat.
          </p>

          <CtaBand text="Nem biztos benne, hogy mehet-e a konténerbe? Hívjon — megmondjuk, mielőtt pakolni kezd." />
        </div>
      </section>
    </main>
  );
}
