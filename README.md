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
- Netlify Forms voor het contactformulier

## Status

- **Fase 3 voltooid** (skeleton + alle pagina's gebouwd, sectie-voor-sectie).
- Klaar voor Fase 3-poort: copy- en data-verificatie door opdrachtgever, daarna deploy naar Netlify.

## Pagina-overzicht

| Route | Doel |
|---|---|
| `/` | Home — 6 secties (Hero, Sectoren, Werkwijze, Pakketten, Cases, Final CTA) |
| `/voor-werkgevers` | Drie sectoren in detail (anchors: `#bollen-glastuinbouw`, `#logistiek`, `#food-horeca`) |
| `/werkwijze` | Vier stappen uitgewerkt + certificeringen |
| `/pakketten` | Pakkettenoverzicht, vergelijkingstabel, FAQ |
| `/cases` | 4 voorbeeldcases (placeholders) |
| `/over-ons` | Team, verhaal, stats, certificeringen |
| `/vacatures` | Voorbeeldvacatures + inschrijfblok |
| `/werken-bij` | Voor flexkrachten — benefits + CTA naar vacatures |
| `/contact` | Direct contact + Netlify Forms formulier |

## ⚠️ VERIFY-checklist vóór launch

Per veiligheidsregel 4 (geen verzonnen cijfers/citaten) zijn de volgende items als
placeholder of voorbeeld in de code opgenomen. Vóór launch invullen:

### Cijfers
- [ ] Hero stat-tegels (`site.jsx` → `Hero`): "19", "4,2 jr", "2008" — **valideren**
- [ ] Pakkettentarieven (`PakkettenSection`): "€ XX,XX" voor Basis / Gewoon Goed / All-In
- [ ] Piekvolume bollen (`VoorWerkgeversContent`): "50–180 flexkrachten" — valideren

### Contactgegevens
- [ ] Telefoonnummer (vervang `[Telefoonnummer]` in `Footer`, `ContactContent`, `FinalCTA tel:`)
- [ ] Vestigingsadres (vervang `[Vestigingsadres]` in `Footer`, `ContactContent`)

### Cases
- [ ] Vier placeholder-cases vervangen door echte klantnamen + cijfers zodra toestemming geregeld is

### Team-bios
- [ ] Pascal, Mark, Matthijs bios in `OverOnsContent → TeamCard`

### Bedrijfsgeschiedenis
- [ ] Volledige tekst in `OverOnsContent` (zoekterm: `[Volledige bedrijfsgeschiedenis in te vullen]`)

### Logo
- [ ] Origineel PNG-logo plaatsen in `public/images/logo.png` en gebruiken in `Nav` + `Footer`
- [ ] Favicon toevoegen aan `app/icon.png` of `app/favicon.ico`

### Vacatures
- [ ] Werkelijke openstaande vacatures in `VacaturesContent` (vervangt voorbeeldlijst)

## OPSEC

- De backoffice-entiteit wordt **nergens** met naam genoemd op de site. Toegestane formulering: "eigen back-office", "in-house verloning".
- Voor controle bij elke wijziging: controleer dat geen interne entiteitsnamen in de copy verschijnen.

## Veiligheid (niet wijzigen zonder reden)

- `.gitignore` is volledig — voorkomt 10.000+ build-artefacten in de repo.
- `netlify.toml` is verplicht — zonder dit deployt Netlify soms broncode (404's overal).
- `public/__forms.html` is een Netlify Forms-detectiebestand. Niet verwijderen.

## Structuur

| Map / bestand | Doel |
|---|---|
| `app/[route]/page.jsx` | Eén bestand per pagina, importeert content-component uit `site.jsx` |
| `app/layout.jsx` | Root layout met Nav + Footer |
| `app/globals.css` | Tailwind layers + import van design tokens + button-stijlen |
| `components/site.jsx` | Centrale componentbibliotheek + tokens als JS-constant `c` |
| `design-system/colors_and_type.css` | CSS-tokens (kleuren, typografie, spacing, motion) |
| `public/images/` | Statische assets (logo, illustraties) |
| `public/__forms.html` | Netlify Forms detectie |

## Netlify-deploy

1. Push naar `main` → Netlify deployt automatisch via `netlify.toml`.
2. Form submissions verschijnen in Netlify dashboard → "Forms".
3. Domein koppelen: Netlify → Site settings → Domains → Add custom domain.
