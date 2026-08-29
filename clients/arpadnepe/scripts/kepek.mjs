/**
 * Képfeldolgozás — sharp-pal, a Next saját függőségével.
 *
 *   node scripts/kepek.mjs                 a galéria képeinek legyártása
 *                                          (content/galeria.json → public/galeria/*.webp
 *                                           + content/galeria.meretek.json)
 *   node scripts/kepek.mjs --ellenoriz     mi maradt ki a kéziratból, duplikátumok, apró képek
 *   node scripts/kepek.mjs --kontakt DIR   kontaktlapok a válogatáshoz (4×3 kép / lap)
 *   node scripts/kepek.mjs --logo          public/logo.webp, app/icon.png, app/apple-icon.png
 *   node scripts/kepek.mjs --plakat        public/plakat/<id>.jpg a forras/ plakátjaiból
 *   node scripts/kepek.mjs --hero          public/foto/hero-fegyverek.webp (2400 px) a hero fotójából
 *   node scripts/kepek.mjs --pecset        public/pecset.svg + public/pecset-mezo.svg a vonalas logóból
 *
 * A nyers fotók a forras/kepek/ mappában vannak (110 MB, .gitignore-ban);
 * a public/ alá csak a kicsinyített, ASCII nevű változat kerül.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const gyoker = process.cwd();
const NYERS = join(gyoker, 'forras', 'kepek');
const FORRAS = join(gyoker, 'forras');
const KEZIRAT = join(gyoker, 'content', 'galeria.json');
const MERETEK = join(gyoker, 'content', 'galeria.meretek.json');
const KIMENET = join(gyoker, 'public', 'galeria');
const MAX_EL = 1600;

const arg = process.argv[2];

function kezirat() {
  return JSON.parse(readFileSync(KEZIRAT, 'utf8'));
}

function kepFajlok(dir) {
  return readdirSync(dir).filter((f) => /\.(webp|jpe?g|png)$/i.test(f));
}

/* ------------------------------------------------------------------ galéria */

async function galeria() {
  const { kepek } = kezirat();
  mkdirSync(KIMENET, { recursive: true });
  const meretek = existsSync(MERETEK) ? JSON.parse(readFileSync(MERETEK, 'utf8')) : {};
  let uj = 0;
  for (const k of kepek) {
    const be = join(NYERS, k.forras);
    const ki = join(KIMENET, `${k.slug}.webp`);
    if (!existsSync(be)) {
      console.error(`HIÁNYZIK: ${k.forras}`);
      process.exitCode = 1;
      continue;
    }
    const friss = existsSync(ki) && statSync(ki).mtimeMs >= statSync(be).mtimeMs && meretek[k.slug];
    if (!friss) {
      const info = await sharp(be)
        .rotate()
        .resize({ width: MAX_EL, height: MAX_EL, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(ki);
      meretek[k.slug] = { w: info.width, h: info.height };
      uj += 1;
    }
  }
  // csak a kéziratban szereplő slugok maradjanak
  const ervenyes = new Set(kepek.map((k) => k.slug));
  for (const s of Object.keys(meretek)) if (!ervenyes.has(s)) delete meretek[s];
  writeFileSync(MERETEK, JSON.stringify(meretek, null, 2) + '\n', 'utf8');
  console.log(`${kepek.length} kép a kéziratban, ${uj} újragenerálva → public/galeria/`);
}

/* --------------------------------------------------------------- ellenőrzés */

async function ellenoriz() {
  const { kepek, kihagy } = kezirat();
  const ismert = new Map();
  for (const k of kepek) ismert.set(k.forras, 'galéria');
  for (const k of kihagy) ismert.set(k.forras, `kihagyva: ${k.ok}`);
  const fajlok = kepFajlok(NYERS);
  const md5 = new Map();
  let hiba = 0;
  for (const f of fajlok) {
    const p = join(NYERS, f);
    const h = createHash('md5').update(readFileSync(p)).digest('hex');
    if (md5.has(h)) console.log(`DUPLIKÁTUM: ${f} == ${md5.get(h)}`);
    md5.set(h, f);
    const m = await sharp(p).metadata();
    const el = Math.max(m.width, m.height);
    if (!ismert.has(f)) {
      hiba += 1;
      console.log(`NINCS A KÉZIRATBAN: ${f} (${m.width}×${m.height})`);
    } else if (ismert.get(f) === 'galéria' && el < 800) {
      hiba += 1;
      console.log(`APRÓ A GALÉRIÁBA: ${f} (${m.width}×${m.height})`);
    }
  }
  for (const [f] of ismert) if (!fajlok.includes(f)) console.log(`A KÉZIRATBAN, DE NINCS FÁJL: ${f}`);
  const slugok = kepek.map((k) => k.slug);
  const dupSlug = slugok.filter((s, i) => slugok.indexOf(s) !== i);
  if (dupSlug.length) {
    hiba += 1;
    console.log(`ISMÉTLŐDŐ SLUG: ${dupSlug.join(', ')}`);
  }
  for (const k of kepek) {
    if (!/^[a-z0-9-]+$/.test(k.slug)) {
      hiba += 1;
      console.log(`NEM ASCII SLUG: ${k.slug}`);
    }
    if (!k.alt || k.alt.length < 12) {
      hiba += 1;
      console.log(`HIÁNYZÓ/RÖVID ALT: ${k.slug}`);
    }
  }
  console.log(
    `${fajlok.length} nyers fájl, ${kepek.length} a galériában, ${kihagy.length} kihagyva, ${hiba} probléma`,
  );
  if (hiba) process.exitCode = 1;
}

/* ------------------------------------------------------------- kontaktlapok */

async function kontakt(cel) {
  mkdirSync(cel, { recursive: true });
  const fajlok = kepFajlok(NYERS);
  const OSZLOP = 4;
  const SOR = 3;
  const CS = 480;
  const PER_LAP = OSZLOP * SOR;
  const legenda = [];
  for (let lap = 0; lap * PER_LAP < fajlok.length; lap += 1) {
    const resz = fajlok.slice(lap * PER_LAP, (lap + 1) * PER_LAP);
    const retegek = [];
    for (let i = 0; i < resz.length; i += 1) {
      const buf = await sharp(join(NYERS, resz[i]))
        .rotate()
        .resize({ width: CS - 8, height: CS - 8, fit: 'inside' })
        .png()
        .toBuffer();
      const meta = await sharp(buf).metadata();
      retegek.push({
        input: buf,
        left: (i % OSZLOP) * CS + Math.floor((CS - meta.width) / 2),
        top: Math.floor(i / OSZLOP) * CS + Math.floor((CS - meta.height) / 2),
      });
      legenda.push(`${lap + 1}.${i + 1}\t${resz[i]}`);
    }
    await sharp({
      create: { width: OSZLOP * CS, height: SOR * CS, channels: 3, background: '#d9d2c4' },
    })
      .composite(retegek)
      .jpeg({ quality: 78 })
      .toFile(join(cel, `kontakt-${String(lap + 1).padStart(2, '0')}.jpg`));
  }
  writeFileSync(join(cel, 'kontakt-legenda.txt'), legenda.join('\n') + '\n', 'utf8');
  console.log(legenda.join('\n'));
  console.log(`${Math.ceil(fajlok.length / PER_LAP)} kontaktlap → ${cel}`);
}

/* --------------------------------------------------------------------- logó */

async function logo() {
  const be = join(NYERS, 'logo.webp');
  const M = 512;
  const kor = Buffer.from(
    `<svg width="${M}" height="${M}"><circle cx="${M / 2}" cy="${M / 2}" r="${M / 2 - 1}" fill="#fff"/></svg>`,
  );
  // a pecsét kb. kör: négyzetre vágjuk a közepéről, majd körre maszkoljuk
  const negyzet = sharp(be).resize({ width: M, height: M, fit: 'cover', position: 'centre' });
  const atlatszo = await negyzet
    .clone()
    .ensureAlpha()
    .composite([{ input: kor, blend: 'dest-in' }])
    .png()
    .toBuffer();
  mkdirSync(join(gyoker, 'public'), { recursive: true });
  await sharp(atlatszo).webp({ quality: 90 }).toFile(join(gyoker, 'public', 'logo.webp'));
  await sharp(atlatszo).png({ palette: true, quality: 90 }).toFile(join(gyoker, 'app', 'icon.png'));
  await sharp(atlatszo)
    .resize(180, 180)
    .flatten({ background: '#F2E8D2' })
    .png()
    .toFile(join(gyoker, 'app', 'apple-icon.png'));
  console.log('public/logo.webp, app/icon.png, app/apple-icon.png kész');
}

/* ------------------------------------------------------------------ plakátok */

const PLAKATOK = {
  'gyermek-6-12': 'Gyermek_hagyomanyorzo_foglalkozasok_6-12_evesek.jpg',
  'gyermek-ifjusagi-11':
    'Gyermek_es_ifjusagi_hagyomanyorzo_foglalkozasok_11_evestol_egyetemista_korig.jpg',
  'ifjusagi-felnott-13': 'Ifjusagi_es_felnott_vivo_es_ijasz_csapat_nagyfelbontasu.jpg',
  'ijasz-10': 'Gyermek_es_felnott_ijaszat.jpg',
  kezmuves: 'Kezmuveskedes_es_felszereleskeszites.jpg',
  tarsasjatek: 'Edzes_utani_tarsasjatekozas.jpg',
  'tablazat-2026-27': 'Arpad Nepe Egyesulet foglalkozas tablazat 2026-27.jpg',
  araink: 'araink 01. 19_46_26.png',
  eszkozberles: 'Alkalmi_eszkozberles 02.jpg',
};

async function plakat() {
  const cel = join(gyoker, 'public', 'plakat');
  mkdirSync(cel, { recursive: true });
  for (const [id, f] of Object.entries(PLAKATOK)) {
    const info = await sharp(join(FORRAS, f))
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(join(cel, `${id}.jpg`));
    console.log(`${id}.jpg ${info.width}×${info.height} ${Math.round(info.size / 1024)} KB  ← ${basename(f, extname(f))}`);
  }
}

/* ------------------------------------------------------------------- hero */

/** A kezdőlap hero fotója nagyobb méretben, mint a galéria (teljes szélességű háttér). */
async function hero() {
  const info = await sharp(join(NYERS, '2022. 03. 02. 22_50_19.webp'))
    .rotate()
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(gyoker, 'public', 'foto', 'hero-fegyverek.webp'));
  console.log(`public/foto/hero-fegyverek.webp ${info.width}×${info.height} ${Math.round(info.size / 1024)} KB`);
}

/* ------------------------------------------------------------------- pecsét */

/**
 * A pecsét vonalas rajza — a logó kontúrja (forras/logo_black_white_outline.svg).
 * Két kimenet készül belőle, mindkettő CSS-MASZKNAK: nincs bennük szín, csak alfa,
 * a színt a felhasználás helyén a `currentColor` adja, így minden színsémában jó.
 *
 *   public/pecset.svg       — a teljes pecsét, nagy vízjelnek
 *   public/pecset-mezo.svg  — 280×280-as csempe két pecséttel átlósan, a háttérmezőnek
 *   public/pecset-jel.svg   — a gyűrűn belüli motívum (nap, íj, szablya, hold), a
 *                             szakaszelválasztó közepére; 36 px-en mérve is olvasható
 *
 * Három dolgot változtatunk a forráson: a fehér alaplap kimarad (a maszk az alfát
 * nézi, egy fehér téglalap az egész csempét kitöltené), a vonal vastagabb lesz
 * (a nyomvonal 3-as vonala egy 120 px-es csempén eltűnne) és a fölösleges
 * tizedesek lemaradnak (a fájl harmadával kisebb, a rajz ugyanaz).
 */
const PECSET_VONAL = 8;
const CSEMPE = 280;
const PECSET_MERET = 120;
/** A jel vastagabb vonalat kap: 36 px-en a 8-as vonal már nem hoz elég jelenlétet. */
const JEL_VONAL = 16;
/**
 * A pecsét középpontja és a mag sugara a nyomvonal koordinátáiban. 490 mérve:
 * 440-nél a holdsarló elveszti a felét, 530-nál már bejön a mező határköre is.
 */
const KOZEP = [691, 694.5];
const MAG_SUGAR = 490;

async function pecset() {
  const nyers = readFileSync(join(FORRAS, 'logo_black_white_outline.svg'), 'utf8');
  const doboz = nyers.match(/viewBox="([^"]+)"/)[1];
  const szeles = Number(doboz.trim().split(/\s+/)[2]);
  const belso = nyers
    .replace(/<rect[^>]*fill="white"[^>]*\/>/i, '')
    .match(/<g[^>]*>([\s\S]*)<\/g>/)[1]
    .replace(/\.0(?![0-9])/g, '')
    .trim();

  const vonal = `fill="none" stroke="#000" stroke-width="${PECSET_VONAL}" stroke-linecap="round" stroke-linejoin="round"`;
  const fej = '<svg xmlns="http://www.w3.org/2000/svg"';
  const meret = (PECSET_MERET / szeles).toFixed(5);

  // A gyűrűn belüli motívum: minden útvonal, amely a középponttól MAG_SUGAR-on
  // belül marad. A gyűrű két köre, a körirat és a négy pont ezzel kiesik.
  const utvonalak = [...belso.matchAll(/<path d="([^"]+)"\/>/g)].map((m) => m[1]);
  const pontjai = (d) => [...d.matchAll(/(-?[\d.]+)\s+(-?[\d.]+)/g)].map((m) => [+m[1], +m[2]]);
  const mag = utvonalak.filter((d) =>
    pontjai(d).every(([x, y]) => Math.hypot(x - KOZEP[0], y - KOZEP[1]) < MAG_SUGAR),
  );
  const p = mag.flatMap(pontjai);
  const xs = p.map((q) => q[0]);
  const ys = p.map((q) => q[1]);
  const x0 = Math.min(...xs) - JEL_VONAL;
  const y0 = Math.min(...ys) - JEL_VONAL;
  const jelDoboz = `${x0} ${y0} ${Math.max(...xs) - x0 + JEL_VONAL} ${Math.max(...ys) - y0 + JEL_VONAL}`;

  const kimenetek = {
    'pecset.svg': `${fej} viewBox="${doboz}"><g ${vonal}>${belso}</g></svg>
`,
    'pecset-mezo.svg':
      `${fej} viewBox="0 0 ${CSEMPE} ${CSEMPE}" width="${CSEMPE}" height="${CSEMPE}">` +
      `<defs><g id="p" ${vonal}>${belso}</g></defs>` +
      `<use href="#p" transform="translate(10 10) scale(${meret})"/>` +
      `<use href="#p" transform="translate(150 150) scale(${meret})"/></svg>
`,
    'pecset-jel.svg':
      `${fej} viewBox="${jelDoboz}">` +
      `<g fill="none" stroke="#000" stroke-width="${JEL_VONAL}" stroke-linecap="round" stroke-linejoin="round">` +
      `${mag.map((d) => `<path d="${d}"/>`).join('')}</g></svg>
`,
  };
  for (const [nev, tartalom] of Object.entries(kimenetek)) {
    const ut = join(gyoker, 'public', nev);
    writeFileSync(ut, tartalom);
    console.log(`public/${nev} ${Math.round(statSync(ut).size / 1024)} KB`);
  }
}

/* ------------------------------------------------------------------- futtatás */

if (arg === '--ellenoriz') await ellenoriz();
else if (arg === '--kontakt') await kontakt(process.argv[3] ?? join(gyoker, '.kontakt'));
else if (arg === '--logo') await logo();
else if (arg === '--plakat') await plakat();
else if (arg === '--hero') await hero();
else if (arg === '--pecset') await pecset();
else await galeria();
