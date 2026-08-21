import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title:
    "Lomtalanítás és zöldhulladék Újbuda — lom és kerti hulladék elszállítás XI. kerület",
  description:
    "Lomtalanítás és zöldhulladék elszállítás Újbudán: bútor, lom, gally és nyesedék elvitele konténerrel a XI. kerület panelházaiból, társasházaiból és villáiból. ☎ +36 21 3355 244",
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
          <h1>Lomtalanítás és zöldhulladék Újbudán</h1>
          <p className="lead">
            Bútor, lom és kerti zöldhulladék elszállítása konténerrel — a XI.
            kerület panelházaiból, társasházaiból és budai villáiból, egyeztetett
            időpontban.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Lomtalanítás Újbudán</h2>
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
              <b>Háztartási lom</b> — pince, padlás, garázs kiürítése
            </li>
          </ul>
          <p>
            A <b>Gazdagréti</b> és <b>őrmezői</b> lakótelep panelházainál a
            szűkös parkolókra, a <b>sasadi</b> és <b>sashegyi</b> villáknál a
            meredek behajtókra is figyelünk, hogy a konténer a lehető legjobb
            helyre kerüljön.
          </p>

          <h2>Zöldhulladék elszállítás</h2>
          <p>
            Újbuda zöld, kertes budai kerület — <b>Sasad</b>, <b>Sashegy</b>,{" "}
            <b>Gellérthegy</b> —, ahol sok a kert és a fás terület, így sok a
            zöldhulladék is. Előzetes egyeztetéssel elszállítjuk:
          </p>
          <ul>
            <li>
              <b>Gally, nyesedék, ág</b> — metszésből, fakivágásból
            </li>
            <li>
              <b>Sövény- és bozótnyesedék</b>
            </li>
            <li>
              <b>Lombhullás és kerti hulladék</b> nagytakarításból
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
