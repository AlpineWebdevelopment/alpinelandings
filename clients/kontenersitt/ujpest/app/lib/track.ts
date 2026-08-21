/**
 * GA4 eseményküldés.
 *
 * Csak akkor küld, ha a `gtag` már létezik — az pedig kizárólag a süti-sávon
 * adott hozzájárulás után jön létre (lásd CookieConsent). Hozzájárulás nélkül
 * tehát ez a függvény csendben nem csinál semmit, nem keletkezik mérési adat.
 */
type Params = Record<string, string | number | boolean | undefined>;

export function track(name: string, params?: Params) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params ?? {});
}

/** Melyik felületi elemről indult a hívás — a riportban ez mutatja, melyik CTA működik. */
export function linkLocation(el: Element): string {
  if (el.closest(".callbar")) return "mobil_hivosav";
  if (el.closest(".topbar")) return "felso_sav";
  if (el.closest("nav, .nav, header")) return "fejlec";
  if (el.closest("footer")) return "lablec";
  if (el.closest(".cta-band")) return "cta_sav";
  if (el.closest(".hero, .hero-grid")) return "hero";
  return "tartalom";
}
