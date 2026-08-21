"use client";

import { useEffect } from "react";
import { track, linkLocation } from "../lib/track";

/**
 * Hívásgomb-kattintások mérése (szerződés 2.3 — a havi riport része).
 *
 * Delegált figyelő a dokumentumon, így minden `tel:` link automatikusan mérve
 * van — fejléc, mobil hívósáv, lábléc, CTA-sáv, szövegközi szám —, és egy
 * később hozzáadott link is, külön bekötés nélkül.
 *
 * Hozzájárulás nélkül a `track()` nem küld semmit.
 */
export default function PhoneTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href^="tel:"]');
      if (!link) return;
      track("phone_click", {
        link_location: linkLocation(link),
        link_url: link.getAttribute("href") ?? undefined,
      });
    }
    // capture fázis: akkor is lefut, ha a linken belüli elem nyeli a kattintást
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
