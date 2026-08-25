# legacy/

Archived, no-longer-maintained sites. Nothing here is linked from the live pitch page
and nothing here should be edited — it is kept for reference and asset salvage only.

## `alpinestudios/`

The previous agency site (**Alpine Webdevelopment / Alpine Studios**, the English-language
portfolio that predates the Hungarian Belluna Studios pitch page at the repo root).
Imported on 2026-08-25 from `R:\z_jeskoserver\alpinestudios`, files only — that repo keeps
its own git history (last commit `8d1c6c6`) **and the original PNG/PSD assets**.

- `index.html` — desktop page; `mobile.html` — separate mobile page (served via the
  `.htaccess` rewrites `^en$ → index.html`, `^en-en$ → mobile.html`).
- External CSS (`assets/style.css` / `style_m.css`), a GSAP-driven JS bundle in `assets/js/`,
  and a JSON-driven EN/HU language switcher (`assets/js/lang.js` + `lang.json`).
- Portfolio screenshots live in `assets/images/`; `assets/modals/*.html` are fragments
  fetched by `modal.js` and hold the full-size preview `<img>` tags.
- All asset paths are **relative**, so the page works from any folder depth — unlike the
  static client pages, which use root-absolute `/clients/<slug>/...` paths.
- Its `.htaccess` sets `php_value display_errors 0`; on a host without mod_php that
  directive 500s the whole directory. Drop that line if this is ever served again.

### Images are WebP, not the originals

To keep the repo light, all 36 PNGs (47.8 MB) were re-encoded to WebP (9.4 MB) on import
and every `<img src>` was repointed to `.webp`. **The originals were deliberately not
committed** — they remain in `R:\z_jeskoserver\alpinestudios\assets\`, along with
`assets/logo/Alpine Webdevelopment LOGO (AW).psd`, which was dropped here entirely.

Encoding: each file was tried both lossless and lossy q95 (`method=6`), keeping lossless
whenever it cost ≤25% more bytes. Screenshots were fully opaque, so alpha was dropped to
RGB; the logos kept their alpha and are all lossless. Measured against the originals, the
lossy screenshots land at 43–54 dB PSNR (>40 dB is visually indistinguishable) and the
logos are pixel-identical wherever alpha > 0.

The five `assets/logo/favicon*.png` were left as PNG on purpose — 12 KB total, and PNG is
the safer format for a `rel="icon"`. The nine `AW_*.webp` / `Alpine Webdevelopment_*.webp`
logo variants are unreferenced by either page; they were unreferenced as PNGs too and are
kept only as reusable brand assets.

Re-run or adjust the conversion by pointing a WebP encoder at the originals in the source
folder — nothing in this repo depends on the PNGs any more.
