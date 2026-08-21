/**
 * Ellenőrzi, hogy a build során letöltött betűtípusok mindegyike tartalmaz
 * latin-ext vágatot — vagyis megvannak az ő ű Ő Ű karakterek.
 *
 * A magyar hosszú kettős ékezetek kódpontjai:
 *   ő U+0151 · Ő U+0150 · ű U+0171 · Ű U+0170
 * Ezeket a Google Fonts latin-ext vágata fedi le, amelynek deklarált
 * unicode-range-e U+0100–U+02BA-val kezdődik.
 *
 * Futtatás: npm run build && node scripts/check-fonts.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const konyvtar = join(process.cwd(), '.next', 'static', 'chunks');

let css = '';
try {
  for (const f of readdirSync(konyvtar)) {
    if (f.endsWith('.css')) css += readFileSync(join(konyvtar, f), 'utf8');
  }
} catch {
  console.error('Nincs build. Futtasd előbb: npm run build');
  process.exit(1);
}

const faces = [...css.matchAll(/@font-face\s*\{([^}]*)\}/g)].map((m) => m[1]);

const csaladok = new Map();
for (const f of faces) {
  const csalad = (f.match(/font-family:\s*([^;]+)/) ?? [])[1]?.replace(/['"]/g, '').trim();
  if (!csalad || csalad.endsWith('Fallback')) continue; // a Fallback a rendszerbetű, nincs vágata
  const range = (f.match(/unicode-range:\s*([^;]+)/) ?? [])[1] ?? '';
  const src = (f.match(/src:\s*url\(([^)]+)\)/) ?? [])[1] ?? '';
  if (!csaladok.has(csalad)) csaladok.set(csalad, []);
  csaladok.get(csalad).push({ range, src });
}

// A latin-ext vágat deklarált tartománya U+100-2BA-val indul.
const latinExt = /U\+100-2BA/;

let hibas = 0;
for (const [csalad, lista] of csaladok) {
  const talalat = lista.find((x) => latinExt.test(x.range));
  if (talalat) {
    console.log(`OK      ${csalad} — latin-ext: ${basename(talalat.src)}`);
  } else {
    console.log(`HIÁNYZIK ${csalad} — nincs latin-ext vágat!`);
    hibas += 1;
  }
}

if (csaladok.size === 0) {
  console.error('Nem találtam @font-face szabályt a buildben.');
  process.exit(1);
}

console.log(
  hibas === 0
    ? `\nMind a ${csaladok.size} betűcsalád tartalmazza a latin-ext vágatot (ő ű Ő Ű).`
    : `\n${hibas} betűcsaládból hiányzik a latin-ext vágat.`,
);

process.exit(hibas === 0 ? 0 : 1);
