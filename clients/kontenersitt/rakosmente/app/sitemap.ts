import type { MetadataRoute } from "next";

const base = "https://kontenerrendelesrakosmente.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    { path: "/arak", priority: 0.8 },
    { path: "/sittszallitas", priority: 0.8 },
    { path: "/lomtalanitas-zoldhulladek", priority: 0.8 },
    { path: "/kozterulet-engedely", priority: 0.7 },
    { path: "/adatkezeles", priority: 0.3 },
  ];
  return paths.map((p) => ({
    url: `${base}${p.path}`,
    changeFrequency: "weekly",
    priority: p.priority,
  }));
}
