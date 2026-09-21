import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Mekkora konténer kell? 4, 6 vagy 8 m³ — méretválasztó Zuglóban",
  description:
    "Mekkora konténert rendeljen Zuglóban? 4 m³ fürdő- és konyhafelújításhoz, 6 m³ teljes lakásfelújításhoz, 8 m³ építkezéshez és bontáshoz. Segítünk választani, hogy ne fizessen feleslegesen nagyobbért. ☎ +36 21 3355 222",
  alternates: { canonical: "/mekkora-kontener-kell" },
};

export default function MeretPage() {
  return (
    <main>
      <header className="subhero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Mekkora konténer kell?</span>
          </div>
          <span className="k">Méretválasztó · XIV. kerület</span>
          <h1>Mekkora konténer kell?</h1>
          <p className="lead">
            4, 6 vagy 8 m³? A jó méret nem a munka nagyságán, hanem a hulladék
            fajtáján múlik. Így választhat Zuglóban úgy, hogy ne fizessen
            feleslegesen nagyobb konténerért.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>A rövid válasz</h2>
          <table className="ptable">
            <thead>
              <tr>
                <th>Méret</th>
                <th>Jellemző munka</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>4 m³</b>
                </td>
                <td>Fürdőszoba- vagy konyhafelújítás, burkolatcsere</td>
              </tr>
              <tr>
                <td>
                  <b>6 m³</b>
                </td>
                <td>
                  Teljes lakásfelújítás, válaszfalbontás, nagyobb lomtalanítás
                  bútorokkal
                </td>
              </tr>
              <tr>
                <td>
                  <b>8 m³</b>
                </td>
                <td>Építkezés, kertes házi bontás, több lakást érintő munka</td>
              </tr>
            </tbody>
          </table>

          <h2>A legfontosabb kérdés: nehéz vagy terjedelmes?</h2>
          <p>
            Ugyanakkora munkához is más méret kell attól függően, mi kerül a
            konténerbe. A <b>sitt nehéz és tömör</b> — tégla, beton, csempe —,
            ezért kevés helyet foglal, és egy kisebb konténer is elég hozzá. A{" "}
            <b>lom viszont terjedelmes</b>: egy kanapé, egy szekrény vagy egy
            feltekert szőnyeg sok levegőt visz magával, így ugyanannyi súlyhoz
            jóval nagyobb térfogat kell.
          </p>
          <p>
            Ökölszabályként: ha főleg <b>bontási törmelék</b> lesz, válasszon
            inkább kisebbet; ha főleg <b>bútor és lom</b>, inkább nagyobbat.
            Vegyesen, sittet és lomot együtt is pakolhat.
          </p>

          <h2>Tipikus zuglói helyzetek</h2>
          <ul>
            <li>
              <b>Füredi úti lakótelepi panellakás</b>, fürdőszoba-felújítás —{" "}
              <b>4 m³</b>
            </li>
            <li>
              <b>Herminamezői vagy istvánmezői</b> társasházi lakás teljes
              felújítása — <b>6 m³</b>
            </li>
            <li>
              Egy teljes lakás kiürítése költözés vagy hagyaték után — a sok
              bútor miatt <b>6 m³</b>
            </li>
            <li>
              <b>Alsórákosi, rákosfalvai</b> kertes ház vagy melléképület
              bontása — <b>8 m³</b>
            </li>
          </ul>

          <h2>Mi van, ha kicsinek bizonyul?</h2>
          <p>
            Nem kell előre túlméretezni. Ha a konténer megtelik, <b>24 órán
            belül cseréljük</b> egy üresre, és addig is <b>akár 1 hétig felár
            nélkül</b> kint maradhat, így nyugodtan pakolhat. Hogy egy nagyobb
            konténer vagy két kisebb forduló éri-e meg jobban, azt a munka
            ismeretében telefonon megmondjuk.
          </p>

          <h2>Hova fér le a konténer?</h2>
          <p>
            A méretnél a helyszín is számít. Lakótelepen a konténer jellemzően a
            parkolóba kerül, kertes háznál sokszor a telken belül is elfér. Ha
            csak az utcára tehető, ahhoz{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link> kell —
            erre érdemes időben gondolni.
          </p>

          <p>
            Az árakért lásd az <Link href="/arak">Árak</Link> oldalt, a
            hulladékfajtákról pedig a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> és a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomtalanítás · zöldhulladék
            </Link>{" "}
            oldalakon írunk részletesen.
          </p>

          <CtaBand text="Mondja el, mit bont vagy pakol és hol — egy perc alatt megmondjuk, melyik méret lesz elég." />
        </div>
      </section>
    </main>
  );
}
