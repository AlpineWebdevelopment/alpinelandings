"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** A hozzájárulás 12 hónapig érvényes, utána újra megkérdezzük (NAIH-ajánlás). */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

type Decision = "accepted" | "rejected";

function readStored(): Decision | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { v?: Decision; t?: number };
    if (!parsed?.v || !parsed?.t) return null;
    if (Date.now() - parsed.t > MAX_AGE_MS) {
      localStorage.removeItem(KEY);
      return null;
    }
    return parsed.v;
  } catch {
    return null;
  }
}

/**
 * A Google Analytics CSAK hozzájárulás után töltődik be — előtte egyetlen
 * mérési süti sem keletkezik. Emellett a Consent Mode v2 alapértelmezése
 * „denied”, így a script betöltése után is csak engedéllyel mér.
 * Ha nincs NEXT_PUBLIC_GA_ID beállítva, nincs mérés, ezért banner sem jelenik meg.
 */
function loadGA(id: string) {
  if (document.getElementById("ga-src")) return;

  const init = document.createElement("script");
  init.id = "ga-init";
  init.innerHTML =
    `window.dataLayer=window.dataLayer||[];` +
    `function gtag(){dataLayer.push(arguments);}` +
    `gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',` +
    `ad_personalization:'denied',analytics_storage:'denied'});` +
    `gtag('consent','update',{analytics_storage:'granted'});` +
    `gtag('js',new Date());` +
    `gtag('config','${id}',{anonymize_ip:true});`;
  document.head.appendChild(init);

  const src = document.createElement("script");
  src.id = "ga-src";
  src.async = true;
  src.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(src);
}

/**
 * A hozzájárulás visszavonásakor a már lerakott mérési sütiket is töröljük
 * (GDPR: a visszavonásnak ténylegesen meg kell szüntetnie az adatkezelést).
 * A GA a `_ga` és `_ga_<MÉRÉSI-ID>` sütiket a fődomainre teszi, ezért több
 * domain-változatra is kiadjuk a törlést.
 */
function clearAnalyticsCookies() {
  const host = location.hostname;
  const parts = host.split(".");
  const domains = [
    undefined,
    host,
    `.${host}`,
    `.${parts.slice(-2).join(".")}`,
  ];
  for (const chunk of document.cookie.split(";")) {
    const name = chunk.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const d of domains) {
      document.cookie =
        `${name}=; Max-Age=0; path=/` + (d ? `; domain=${d}` : "");
    }
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const stored = readStored();
    if (stored === "accepted") {
      loadGA(GA_ID);
      return;
    }
    if (stored === "rejected") return;
    setVisible(true);
  }, []);

  function decide(value: Decision) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: value, t: Date.now() }));
    } catch {
      /* ha a tárolás nem elérhető, csak elrejtjük a sávot */
    }
    setVisible(false);
    if (value === "accepted") {
      if (GA_ID) loadGA(GA_ID);
      return;
    }
    // Elutasítás: a korábbi elfogadásból maradt mérési sütik törlése. Ha a GA
    // ebben az oldalbetöltésben már fut, újratöltjük, hogy ne rakhassa vissza.
    const gaRunning = !!document.getElementById("ga-src");
    clearAnalyticsCookies();
    if (gaRunning) location.reload();
  }

  if (!visible) return null;

  return (
    <div
      className="cookiebar"
      role="dialog"
      aria-label="Süti-beállítások"
      aria-live="polite"
    >
      <div className="cookiebar-in">
        <p className="cookiebar-text">
          <b>Sütiket használnánk a látogatottság méréséhez</b> — hogy lássuk, mely
          oldalak hasznosak, és javíthassunk rajtuk. Ehhez az Ön hozzájárulása
          szükséges; enélkül csak a működéshez feltétlenül szükséges sütik
          működnek. Részletek az{" "}
          <Link href="/adatkezeles">adatkezelési tájékoztatóban</Link>.
        </p>
        <div className="cookiebar-actions">
          <button
            type="button"
            className="cookiebar-btn cookiebar-reject"
            onClick={() => decide("rejected")}
          >
            Elutasítom
          </button>
          <button
            type="button"
            className="cookiebar-btn cookiebar-accept"
            onClick={() => decide("accepted")}
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}

/** Lábléc-link: a korábbi döntés visszavonása (GDPR — bármikor visszavonható). */
export function CookieSettingsLink() {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      className="cookie-reset"
      onClick={() => {
        try {
          localStorage.removeItem(KEY);
        } catch {
          /* nincs teendő */
        }
        clearAnalyticsCookies();
        location.reload();
      }}
    >
      Süti-beállítások
    </button>
  );
}
