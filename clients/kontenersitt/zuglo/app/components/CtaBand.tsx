import { site } from "../lib/site";

export default function CtaBand({ text }: { text?: string }) {
  return (
    <div className="cta-band">
      <div>
        <h3>Kérjen árajánlatot Zuglóban</h3>
        <p>
          {text ??
            "Azonnali, pontos ár telefonon — a kiszállítással, elszállítással és lerakási díjjal együtt, rejtett költség nélkül."}
        </p>
      </div>
      <a href={`tel:${site.phoneHref}`} className="btn btn-y">
        ☎ {site.phoneDisplay}
      </a>
    </div>
  );
}
