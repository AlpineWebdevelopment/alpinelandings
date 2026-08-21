import type { Metadata } from "next";
import { Alfa_Slab_One, Libre_Franklin } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieConsent from "./components/CookieConsent";
import PhoneTracking from "./components/PhoneTracking";

// Display: Alfa Slab One — retró poszter-slab, táblafestés-karakter (nem generikus)
const display = Alfa_Slab_One({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

// Body: Libre Franklin — nyomdai Franklin Gothic örökség, print-karakter
const body = Libre_Franklin({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontenerrendelesrakosmente.hu"),
  title:
    "Konténer rendelés Rákosmente — sittszállítás és lomtalanítás a XVII. kerületben",
  description:
    "Konténer rendelés Rákosmentén gyors kiszállítással: sitt, lom és zöldhulladék elszállítása a XVII. kerület minden városrészébe — Rákoskeresztúr, Rákoscsaba, Rákoshegy, Rákosliget. 9.375 Ft/m³-tól. ☎ +36 21 3355 211",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kontenerrendelesrakosmente.hu/",
    title: "Konténer rendelés Rákosmente — sitt, lom, zöldhulladék a XVII. kerületben",
    description:
      "Konténer kertes házhoz és társasházhoz Rákosmentén — sitt, lom és zöldhulladék elszállítása. Gyors kiszállítás, engedély-ügyintézés. Hívjon: +36 21 3355 211",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Konténer Rendelés Rákosmente",
  description:
    "Konténeres sittszállítás, lomtalanítás és zöldhulladék-elszállítás Rákosmentén (Budapest XVII. kerület). 4–8 m³ konténerek gyors kiszállítással Rákoskeresztúr, Rákoscsaba, Rákoscsaba-Újtelep, Rákoshegy, Rákoskert, Rákosliget és Madárdomb területén.",
  url: "https://kontenerrendelesrakosmente.hu/",
  telephone: "+36213355211",
  email: "info@kontenersitt.hu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vidor utca 7.",
    addressLocality: "Budapest",
    postalCode: "1172",
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "Place", name: "Rákosmente (Budapest XVII. kerület)" },
    { "@type": "Place", name: "Rákoskeresztúr" },
    { "@type": "Place", name: "Rákoscsaba" },
    { "@type": "Place", name: "Rákoscsaba-Újtelep" },
    { "@type": "Place", name: "Rákoshegy" },
    { "@type": "Place", name: "Rákoskert" },
    { "@type": "Place", name: "Rákosliget" },
    { "@type": "Place", name: "Madárdomb" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
        <PhoneTracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </body>
    </html>
  );
}
