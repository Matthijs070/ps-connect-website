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
| `/` | Home — Hero, Sectoren, Regio, Werkwijze, Recruitment, Pakketten, Cases, Final CTA |
| `/voor-werkgevers` | Drie sectoren in detail (anchors: `#openteelt-tuinbouw`, `#logistiek-distributie`, `#facilitair`) — bevat interactieve seizoenstijdlijn voor agri |
| `/werkwijze` | Vier stappen uitgewerkt + Recruitment-blok + certificeringen |
| `/pakketten` | Pakkettenoverzicht, vergelijkingstabel, FAQ |
| `/cases` | 4 voorbeeldcases (placeholders) |
| `/over-ons` | Team, verhaal (tegengeluid-frame), regio, certificeringen |
| `/vacatures` | Voorbeeldvacatures + inschrijfblok |
| `/werken-bij` | Voor flexkrachten — benefits + CTA naar vacatures |
| `/contact` | Direct contact + Netlify Forms formulier |

## ⚠️ VERIFY-checklist vóór launch

Per veiligheidsregel 4 (geen verzonnen cijfers/citaten) zijn de volgende items als
placeholder of voorbeeld in de code opgenomen. Vóór launch invullen:

### Cijfers
- [ ] Hero stat-tegels (`site.jsx` → `Hero`): "~30" werkgevers, "4,2 jr" gemiddelde samenwerking, "2022" oprichting — **valideren** (exact werkgever-aantal)
- [ ] Pakkettentarieven (`PakkettenSection`): "€ XX,XX" voor Basis / Gewoon Goed / All-In
- [ ] Piekvolume per sector (`VoorWerkgeversContent`):
  - Openteelt & (glas)tuinbouw: "50–180 flexkrachten" — valideren
  - Logistiek & distributie: "5–40 flexkrachten doorlopend" — valideren
  - Facilitair: "2–15 flexkrachten" — valideren
- [ ] Over ons stats (`OverOnsContent`): "~30" actieve klanten — valideren

### Regio (`RegioSection`)
- [ ] Randplaatsen die wel/niet binnen werkgebied vallen bevestigen (kaartweergave is indicatief)
- [ ] Werkgebied-straal "±60 km" valideren

### Sectoren — Facilitair (`VoorWerkgeversContent → #facilitair`)
- [ ] Scope bevestigen: welke facilitaire werkzaamheden binnen aanbod vallen (schoonmaak, groen, hospitality, receptie, …)
- [ ] Typische locatie + schaal voor de facilitair-voorbeeldcase

### Seizoenstijdlijn agri (`SeizoenstijdlijnAgri` in `VoorWerkgeversContent`)
- [ ] Intensiteit per teelt per maand valideren (matrices `SEIZOEN_INTENSITEIT`)
- [ ] Werkzaamheden per teelt per maand valideren (matrix `SEIZOEN_DETAILS`)

### Recruitment (`RecruitmentSection`)
- [ ] Polen: regio('s), aantal recruiters, sinds wanneer
- [ ] Roemenië: regio('s), aantal recruiters, sinds wanneer

### Contactgegevens
- [ ] Telefoonnummer (vervang `[Telefoonnummer]` in `Footer`, `ContactContent`, `FinalCTA tel:`)
- [ ] Vestigingsadres (vervang `[Vestigingsadres]` in `Footer`, `ContactContent`)

### Cases
- [ ] Vier placeholder-cases vervangen door echte klantnamen + cijfers zodra toestemming geregeld is
- [ ] Facilitair-case (`CasesContent`): locatie en schaal invullen

### Vacatures
- [ ] Werkelijke openstaande vacatures in `VacaturesContent` (vervangt voorbeeldlijst — incl. facilitair-voorbeeld met `[VERIFY locatie]`)

### Foto's — image-slots (`ImageSlot` component)
Elke `ImageSlot` toont een gedashte placeholder met VERIFY-badge en omschrijving van het gewenste beeld. In te vullen per locatie:
- [ ] Hero (`Hero`): warme regiofoto (Pascal op locatie of bollenveld bij Schagen)
- [ ] Sectoren homepage (`SectorenSection`, 3x):
  - Openteelt & (glas)tuinbouw: bollenveld of sorteerlijn klant
  - Logistiek & distributie: magazijn of dock-werkzaamheden klant
  - Facilitair: schoonmaak, hospitality of receptie
- [ ] Team (`OverOnsContent → TeamCard`, 3x): portretfoto's Pascal, Mark, Matthijs (circulair)
- [ ] Ons verhaal (`OverOnsContent`): team-foto of sfeerbeeld vestiging Schagen
- [ ] Logo: PNG plaatsen in `public/images/logo.png` en gebruiken in `Nav` + `Footer`
- [ ] Favicon toevoegen aan `app/icon.png` of `app/favicon.ico`

### Team-bios
- [ ] Pascal, Mark, Matthijs bios in `OverOnsContent → TeamCard` (huidige tekst draagt `[Bio in te vullen]`-prefix)

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
