import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title:
    "Lomtalanítás és zöldhulladék Angyalföld — lom elszállítás a XIII. kerületben",
  description:
    "Lomtalanítás és zöldhulladék elszállítás Angyalföldön: bútor, lom, gally és nyesedék elvitele konténerrel a XIII. kerület panelházaiból, társasházaiból és lakóparkjaiból. ☎ +36 21 3355 233",
  alternates: { canonical: "/lomtalanitas-zoldhulladek" },
};

export default function LomPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Lomtalanítás · Zöldhulladék</span>
          </div>
          <h1>Lomtalanítás és zöldhulladék Angyalföldön</h1>
          <p className="lead">
            Bútor, lom és zöldhulladék elszállítása konténerrel — a XIII. kerület
            panelházaiból, társasházaiból és lakóparkjaiból, egyeztetett
            időpontban.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Lomtalanítás Angyalföldön</h2>
          <p>
            Nem kell megvárnia a kerületi lomtalanítást — konténert biztosítunk,
            és a lomot szabályosan elszállítjuk. Elvisszük a jellemző háztartási
            és felújítási lomot:
          </p>
          <ul>
            <li>
              <b>Bútor</b> — szekrény, ágy, kanapé, asztal, szék
            </li>
            <li>
              <b>Ajtó, ablak, redőny</b> — felújításból, cseréből
            </li>
            <li>
              <b>Szőnyeg, padló, függöny</b>
            </li>
            <li>
              <b>Háztartási lom</b> — pince, tároló, albetét kiürítése
            </li>
          </ul>
          <p>
            A <b>Gyöngyösi-lakótelep</b> és a <b>Béke tér</b> panelházainál a
            szűkös parkolókra is figyelünk, hogy a konténer a lehető legjobb
            helyre kerüljön, és a nagyobb bútorokat se kelljen messzire cipelni.
          </p>

          <h2>Zöldhulladék elszállítás</h2>
          <p>
            Angyalföldön is akad zöldterület — társasházi kertek, a{" "}
            <b>Dagály</b> és a Duna-part környéki zöld sávok. A metszésből és
            nagytakarításból származó zöldhulladékot előzetes egyeztetéssel
            elszállítjuk:
          </p>
          <ul>
            <li>
              <b>Gally, nyesedék, ág</b> — metszésből
            </li>
            <li>
              <b>Sövény- és bozótnyesedék</b>
            </li>
            <li>
              <b>Kerti hulladék</b> nagytakarításból
            </li>
          </ul>
          <p>
            A zöldhulladék külön lerakóba kerül, ezért érdemes külön jelezni —
            telefonon egyeztetjük a részleteket és az árat.
          </p>

          <h2>Mit nem szállítunk el?</h2>
          <p>
            Veszélyes hulladék nem kerülhet a konténerbe:{" "}
            <b>festék, oldószer, vegyszer, azbeszt, pala, gumiabroncs,
            elektronikai hulladék és akkumulátor</b>. Ha bizonytalan, hívjon,
            mielőtt pakolna.
          </p>

          <p>
            Építési törmelék is van? Lásd a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> oldalt, az árakat
            pedig az <Link href="/arak">Árak</Link> oldalon.
          </p>

          <CtaBand text="Bútor, lom vagy zöldhulladék? Mondja el, mit vigyünk el — azonnal árat és időpontot egyeztetünk." />
        </div>
      </section>
    </main>
  );
}
