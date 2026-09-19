import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Sitt leadás Rákosmentén — telephelyi hulladékátvétel, 17. kerület",
  description:
    "Pár zsák sitt vagy egy utánfutónyi törmelék? Személyesen is leadhatja a telephelyünkön: 1172 Budapest, Vidor utca 7. Hulladékátvétel 12.700 Ft (bruttó). Nagyobb mennyiséghez konténert hozunk. ☎ +36 21 3355 211",
  alternates: { canonical: "/sitt-leadas" },
};

export default function SittLeadasPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sitt leadás</span>
          </div>
          <h1>Sitt leadás Rákosmentén</h1>
          <p className="lead">
            Pár zsák törmelék vagy egy utánfutónyi sitt? Ehhez nem kell
            konténer: személyesen is leadhatja a telephelyünkön, itt a 17.
            kerületben.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Hol adhatja le?</h2>
          <p>
            A telephelyünk Rákosmentén van: <b>{site.address}</b> Így a kerület
            bármely részéről — Rákoskeresztúrról, Rákoscsabáról, Rákoshegyről
            vagy Rákosligetről — rövid az út.
          </p>
          <p>
            <b>Mielőtt elindul, hívjon fel:</b> megmondjuk az aktuális átvételi
            időt, és azt is, hogy a hozott hulladék leadható-e. Így biztosan nem
            jár feleslegesen.
          </p>

          <h2>Mennyibe kerül?</h2>
          <p>
            A telephelyi hulladékátvétel díja <b>{site.droppOffPrice}</b>. Hogy
            pontosan mekkora mennyiségre és milyen feltételekkel vonatkozik, azt
            indulás előtt telefonon egyeztesse — így nem éri meglepetés a
            helyszínen.
          </p>

          <h2>Mit hozhat?</h2>
          <ul>
            <li>
              <b>Sitt</b> — tégla, beton, csempe, vakolat, zsákban vagy
              utánfutón
            </li>
            <li>
              <b>Kisebb felújítás törmeléke</b> — fürdő- vagy konyhafelújításból
            </li>
            <li>
              <b>Más, konténerbe is mehető hulladék</b> — előzetes egyeztetéssel
            </li>
          </ul>
          <p>
            Ami a konténerbe sem kerülhet — <b>festék, vegyszer, azbeszt, pala,
            gumiabroncs, elektronikai hulladék</b> —, azt jellemzően a
            telephelyen sem tudjuk átvenni. Ha bizonytalan, kérdezzen előre.
          </p>

          <h2>Személyes leadás vagy konténer?</h2>
          <table className="ptable">
            <thead>
              <tr>
                <th></th>
                <th>Személyes leadás</th>
                <th>Konténer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Mennyiség</b>
                </td>
                <td>Kevés — néhány zsák, egy utánfutónyi</td>
                <td>Sok — felújítás, bontás</td>
              </tr>
              <tr>
                <td>
                  <b>Szállítás</b>
                </td>
                <td>Ön hozza be a telephelyre</td>
                <td>Mi visszük ki és szállítjuk el</td>
              </tr>
              <tr>
                <td>
                  <b>Időzítés</b>
                </td>
                <td>Egy alkalommal</td>
                <td>Akár 1 hétig kint maradhat felár nélkül</td>
              </tr>
            </tbody>
          </table>
          <p>
            Ökölszabály: ha több fordulót kellene megtennie, vagy nincs
            utánfutója, a konténer a kényelmesebb megoldás. Hogy az Ön esetében
            melyik éri meg jobban, azt telefonon egy perc alatt megmondjuk. A
            konténeres elszállításról a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> oldalon, az árakról
            az <Link href="/arak">Árak</Link> oldalon olvashat.
          </p>

          <CtaBand text="Leadná, vagy inkább konténert kér? Hívjon — megmondjuk, melyik éri meg jobban." />
        </div>
      </section>
    </main>
  );
}
