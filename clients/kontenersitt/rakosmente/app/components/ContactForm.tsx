"use client";

import { useState } from "react";
import { site } from "../lib/site";
import { track } from "../lib/track";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      nev: fd.get("nev"),
      telefon: fd.get("telefon"),
      meret: fd.get("meret"),
      helyszin: fd.get("helyszin"),
      uzenet: fd.get("uzenet"),
      website: fd.get("website"), // honeypot
    };
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        // Sikeres ajánlatkérés — a havi riport „űrlapbeküldések” sora ebből jön.
        track("generate_lead", {
          kontener_meret: String(payload.meret ?? ""),
          kerulet: site.district,
        });
        setStatus("done");
      } else {
        setErrorMsg(
          json.error ||
            "Hiba történt a küldés során. Próbálja újra, vagy hívjon minket.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Hiba történt a küldés során. Próbálja újra, vagy hívjon minket.",
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-done" role="status" aria-live="polite">
        <h3>Köszönjük, megkaptuk!</h3>
        <p>
          Hamarosan visszahívjuk az árajánlattal. Ha sürgős, hívjon most:{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="field">
          <label htmlFor="nev">Név</label>
          <input type="text" id="nev" name="nev" required />
        </div>
        <div className="field">
          <label htmlFor="tel">Telefonszám</label>
          <input type="tel" id="tel" name="telefon" required />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="meret">Konténerméret</label>
          <select
            id="meret"
            name="meret"
            defaultValue="Nem tudom — kérek segítséget"
          >
            <option>Nem tudom — kérek segítséget</option>
            <option>4 m³</option>
            <option>6 m³</option>
            <option>8 m³</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cim">Helyszín (utca, városrész)</label>
          <input
            type="text"
            id="cim"
            name="helyszin"
            placeholder="pl. Pesti út, Rákoskeresztúr"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="uzenet">Mit szállítsunk el?</label>
        <textarea
          id="uzenet"
          name="uzenet"
          placeholder="pl. kerti bontás törmeléke, kb. 4 m³ · mikorra kellene a konténer"
        />
      </div>

      {/* Honeypot — valódi felhasználó nem látja, csak botok töltik ki */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
        }}
      />

      {status === "error" && (
        <p className="form-err" role="alert">
          {errorMsg}
        </p>
      )}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Küldés…" : "Árajánlatot kérek"}
      </button>
    </form>
  );
}
