# PS-Connect Website

Next.js 14 marketingsite voor PS-Connect B.V.

## Lokaal draaien (in Codespaces)

```bash
npm install
npm run dev
```

In de Codespace verschijnt een popup met "Open in Browser" — dat is je live preview.

## Stack

- Next.js 14 (App Router, JavaScript, `.jsx` extensies)
- Tailwind CSS 3.4
- Lucide React (iconen)
- Eigen design system in `design-system/`

## Deploy

Push naar `main` → Netlify deployt automatisch via `netlify.toml`.

## Structuur

| Map / bestand | Doel |
|---|---|
| `app/` | Pagina's (Next.js App Router) |
| `app/layout.jsx` | Root layout met Nav + Footer |
| `app/globals.css` | Tailwind layers + import van design tokens |
| `app/page.jsx` | Home — placeholder, wordt opgebouwd in Stap 3.2 |
| `components/site.jsx` | Centrale componentbibliotheek + tokens als JS-constant `c` |
| `design-system/colors_and_type.css` | CSS-tokens (kleuren, typografie, spacing, motion) |
| `public/images/` | Statische assets (logo, illustraties) |

## Veiligheid (niet wijzigen zonder reden)

- `.gitignore` is volledig — voorkomt 10.000+ build-artefacten in de repo
- `netlify.toml` is verplicht — zonder dit deployt Netlify soms broncode (404's overal)

## Status

- Fase 3 · Stap 3.1 — Skeleton opgeleverd.
- Volgende: Stap 3.2 — Home pagina, sectie-voor-sectie.
