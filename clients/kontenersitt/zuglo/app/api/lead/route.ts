import { NextResponse } from "next/server";
import { site } from "../../lib/site";

export const runtime = "nodejs";

const HOST = site.domain.replace(/^https?:\/\//, "");
const TO = process.env.LEAD_TO || "diszpecser@kontenersitt.hu";
const FROM_EMAIL = process.env.LEAD_FROM || `lead@${HOST}`;
const FROM_NAME = `Konténer ${site.district}`;

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Hibás kérés." }, { status: 400 });
  }

  // Honeypot: ha ez a rejtett mező ki van töltve, bot küldte — csendben elnyeljük.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const nev = String(data.nev ?? "").trim();
  const telefon = String(data.telefon ?? "").trim();
  const meret = String(data.meret ?? "").trim();
  const helyszin = String(data.helyszin ?? "").trim();
  const uzenet = String(data.uzenet ?? "").trim();

  if (!nev || !telefon) {
    return NextResponse.json(
      { ok: false, error: "A név és a telefonszám megadása kötelező." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Az űrlap jelenleg nem elérhető. Kérjük, hívjon minket." },
      { status: 500 },
    );
  }

  const textContent = [
    `Új ajánlatkérés érkezett a ${HOST} oldalról.`,
    "",
    `Név:            ${nev}`,
    `Telefonszám:    ${telefon}`,
    `Konténerméret:  ${meret || "-"}`,
    `Helyszín:       ${helyszin || "-"}`,
    `Üzenet:         ${uzenet || "-"}`,
    "",
    `Forrás: ${site.district} (${site.districtNo} kerület)`,
  ].join("\n");

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: FROM_NAME, email: FROM_EMAIL },
        to: [{ email: TO }],
        subject: `Új ajánlatkérés — ${site.district}${meret ? ` (${meret})` : ""} — ${nev}`,
        textContent,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "A küldés nem sikerült. Kérjük, próbálja újra, vagy hívjon." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "A küldés nem sikerült. Kérjük, próbálja újra, vagy hívjon." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
