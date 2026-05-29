# NEAIST Website

Static website for NEAIST, the African Students' Association at Instituto Superior Tecnico.

## Structure

```text
new-site/
├── index.html
├── noticias.html
├── dia-de-africa.html
├── semana-africa-ulisboa.html
├── loja.html
├── study-squads.html
├── recursos.html
├── contactos.html
├── sobre-nos.html
├── guia-caloiro.html
├── mentoria.html
├── noticia-game-day-2026.html
├── noticia-tomada-posse-2026.html
├── css/
├── js/
├── images/
├── files/
├── media/
├── manifest.json
├── sitemap.xml
└── README.md
```

## Local preview

Use a simple static server from the `new-site/` directory:

```bash
cd new-site
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Main runtime files

- `css/style.css`: shared site styling
- `css/animations.css`: animation helpers
- `js/main.js`: navigation, interactions, and shared behavior
- `js/languages.js`: shared PT/EN content and page-specific copy
- `js/news-data.js`: homepage and archive news cards
- `js/gallery-data.js`: gallery image list

## Content notes

- HTML pages are hand-maintained static files.
- Images used by the live site are kept under `images/`.
- PDFs and downloadable resources are kept under `files/`.
- Video assets are kept under `media/`.

## Repo policy

This repo is intentionally kept lean. Non-runtime helper scripts, extra setup notes, and duplicated source-drop assets should not be committed unless they are actively needed by the live site.
