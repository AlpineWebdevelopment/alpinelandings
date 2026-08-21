import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Sittszállítás Újbuda — építési törmelék elszállítása a XI. kerületben",
  description:
    "Sittszállítás Újbudán: tégla, beton, csempe, vakolat elszállítása lakásfelújításból, panelből és budai villából. 4–8 m³-es konténer, gyors kiszállítás a XI. kerületbe. ☎ +36 21 3355 244",
  alternates: { canonical: "/sittszallitas" },
};

export default function SittPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sittszállítás</span>
          </div>
          <h1>Sittszállítás Újbudán</h1>
          <p className="lead">
            Építési törmelék — tégla, beton, csempe, vakolat — elszállítása
            felújításból és bontásból, konténerrel, a XI. kerület minden részébe.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mi számít sittnek?</h2>
          <p>
            A sitt az építkezés és felújítás <b>ásványi eredetű törmeléke</b>,
            amelyet konténerben, szabályosan szállítunk el:
          </p>
          <ul>
            <li>
              <b>Tégla és beton</b> — falbontás, aljzat
            </li>
            <li>
              <b>Csempe és járólap</b> — fürdő- és konyhafelújítás
            </li>
            <li>
              <b>Vakolat, kőműves törmelék</b>
            </li>
            <li>
              <b>Tetőcserép, kőzet</b> — tető- és kertfelújítás
            </li>
          </ul>

          <h2>Sittszállítás a XI. kerület házaihoz</h2>
          <p>
            Újbuda épületállománya sokféle: a <b>Gazdagréti</b> és{" "}
            <b>kelenföldi</b> panellakásokban a burkolat- és fürdőfelújítás
            törmeléke a jellemző, a <b>Lágymányos</b> bérházainál a komolyabb
            felújítások, a <b>Sasad</b> és <b>Sashegy</b> villáinál pedig a
            bontás és a kertépítés törmeléke. Mindegyikhez a helyszínhez illő
            konténert és — a domboldali szűk utcákhoz — a megfelelő autót
            választjuk.
          </p>

          <h2>Melyik konténer kell a sitthez?</h2>
          <p>
            A sitt nehéz, ezért nem kell a legnagyobb konténer. Fürdő- és
            konyhafelújításhoz a <b>4 m³</b>, teljes lakásfelújításhoz a{" "}
            <b>6 m³</b>, bontáshoz a <b>8 m³</b> a jellemző. Ha bizonytalan,
            telefonon segítünk választani. Az árakról bővebben az{" "}
            <Link href="/arak">Árak</Link> oldalon.
          </p>

          <h2>Hogyan zajlik?</h2>
          <ul>
            <li>Felhív, elmondja, mit bont és hol — azonnal árat mondunk.</li>
            <li>Kihozzuk a konténert, jellemzően 24 órán belül.</li>
            <li>Megpakolja; a konténer akár 1 hétig felár nélkül kint maradhat.</li>
            <li>Hívásra elszállítjuk, és engedélyes lerakóban adjuk le.</li>
          </ul>

          <p>
            Nemcsak sitt:{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomot és zöldhulladékot
            </Link>{" "}
            is elszállítunk. Közterületre kerülne a konténer? Lásd a{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link>{" "}
            útmutatót.
          </p>

          <CtaBand text="Mondja el, mit bont — azonnal árat mondunk a sittszállításra, kiszállítással és lerakással együtt." />
        </div>
      </section>
    </main>
  );
}
