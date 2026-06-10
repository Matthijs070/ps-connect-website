'use client';

// =========================================================
// PS-Connect website — central component library
// All page components live here. Pages in app/ import from this file.
// `c` is the JS mirror of design-system/colors_and_type.css.
// =========================================================

import { Fragment, useState } from 'react';
import {
  ArrowRight, Menu, X, Check,
  Sprout, Truck,
  MessageCircle, Home as HomeIcon, Users, ClipboardCheck,
  Phone, Mail, MapPin, Linkedin,
  Award, Shield, FileCheck,
  Briefcase, Heart, Building2,
  ChevronRight, Compass, UserSearch, Calendar,
} from 'lucide-react';

export const c = {
  green900: '#0E5A23', green800: '#128A2F', green700: '#1AA63A', green600: '#25C04A',
  green500: '#3BD962', green400: '#5FE883', green300: '#97F2AE', green200: '#C9F8D6',
  green100: '#E8FBEE', green50: '#F4FDF7',
  amber700: '#B97309', amber600: '#D08410', amber500: '#F59E0B',
  amber100: '#FEF3C7', amber50: '#FFFBEB',
  ink900: '#0F1A14', ink800: '#1C2A22', ink700: '#2E3B33', ink600: '#4A5A50',
  ink500: '#6B7A71', ink400: '#94A19A', ink300: '#BFC8C2', ink200: '#DDE3DF',
  ink100: '#EEF1EF', ink50: '#F7F8F7', white: '#FFFFFF',
  success: '#1AA63A', warning: '#E8A93C', danger: '#D94A3B', info: '#2C7BD9',
};

// =========================================================
// Container — central max-width wrapper used everywhere
// =========================================================
export function Container({ children, style }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', ...style }}>
      {children}
    </div>
  );
}

// =========================================================
// Nav — responsive top navigation with mobile drawer
// =========================================================
export function Nav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/voor-werkgevers', label: 'Voor werkgevers' },
    { href: '/werkwijze', label: 'Werkwijze' },
    { href: '/pakketten', label: 'Pakketten' },
    { href: '/cases', label: 'Cases' },
    { href: '/over-ons', label: 'Over ons' },
    { href: '/vacatures', label: 'Vacatures' },
  ];

  return (
    <>
      <nav style={{
        background: c.white,
        borderBottom: `1px solid ${c.ink200}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <Container style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
        }}>
          <a href="/" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 22,
            color: c.green800,
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }}>
            PS-Connect
          </a>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'none', gap: 28, alignItems: 'center' }}>
            {navItems.map(item => (
              <a key={item.href} href={item.href} style={{
                color: c.ink700,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                {item.label}
              </a>
            ))}
            <a href="/contact" className="btn btn-primary" style={{ fontSize: 14, padding: '10px 18px' }}>
              Offerte aanvragen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, color: c.ink900, display: 'flex',
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* Mobile drawer */}
        {open && (
          <div className="nav-mobile-drawer" style={{
            borderTop: `1px solid ${c.ink200}`,
            background: c.white,
            padding: '16px 24px 24px',
          }}>
            {navItems.map(item => (
              <a key={item.href} href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  color: c.ink900,
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${c.ink100}`,
                }}>
                {item.label}
              </a>
            ))}
            <a href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
            >
              Offerte aanvragen <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 900px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
          .nav-mobile-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
}

// =========================================================
// Footer — full footer with sections, links, legal
// =========================================================
export function Footer() {
  return (
    <footer style={{
      background: c.ink900,
      color: c.ink300,
      padding: '64px 24px 32px',
      marginTop: 0,
    }}>
      <Container>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Column 1 — brand + tagline */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 24,
              color: c.white,
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}>
              PS-Connect
            </div>
            <p style={{ color: c.ink300, fontSize: 14, lineHeight: 1.5, marginBottom: 16, maxWidth: 280 }}>
              Uitzendpartner voor agri, tuinbouw en logistiek in Noord-Holland Noord. Sinds 2022.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="https://www.linkedin.com" aria-label="LinkedIn"
                style={{ color: c.ink300, display: 'flex' }}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 — voor werkgevers */}
          <FooterCol title="Voor werkgevers" links={[
            { href: '/voor-werkgevers', label: 'Sectoren' },
            { href: '/werkwijze', label: 'Werkwijze' },
            { href: '/pakketten', label: 'Pakketten' },
            { href: '/cases', label: 'Cases' },
          ]} />

          {/* Column 3 — voor flexkrachten */}
          <FooterCol title="Voor flexkrachten" links={[
            { href: '/vacatures', label: 'Vacatures' },
            { href: '/werken-bij', label: 'Werken bij PS-Connect' },
          ]} />

          {/* Column 4 — bedrijf */}
          <FooterCol title="Bedrijf" links={[
            { href: '/over-ons', label: 'Over ons' },
            { href: '/contact', label: 'Contact' },
          ]} />

          {/* Column 5 — contact */}
          <div>
            <div style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: c.ink400,
              marginBottom: 16,
            }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="tel:+31000000000" style={{ color: c.ink300, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={14} /> [Telefoonnummer]
              </a>
              <a href="mailto:info@ps-connect.nl" style={{ color: c.ink300, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={14} /> info@ps-connect.nl
              </a>
              <div style={{ color: c.ink300, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <MapPin size={14} style={{ marginTop: 3, flexShrink: 0 }} />
                <span>[Vestigingsadres]<br />Den Helder / Alkmaar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${c.ink800}`,
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 13,
          color: c.ink500,
        }}>
          <div>© {new Date().getFullYear()} PS-Connect B.V. Alle rechten voorbehouden.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy" style={{ color: c.ink500, textDecoration: 'none' }}>Privacyverklaring</a>
            <a href="/algemene-voorwaarden" style={{ color: c.ink500, textDecoration: 'none' }}>Algemene voorwaarden</a>
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 700px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: c.ink400,
        marginBottom: 16,
      }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ color: c.ink300, fontSize: 14, textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// PageHeader — used on all non-home pages
// =========================================================
// =========================================================
// ImageSlot — VERIFY placeholder voor foto's die nog moeten worden
// aangeleverd. Toont een gedashte container met label.
// =========================================================
export function ImageSlot({ ratio = '16/9', label, variant = 'default', rounded = 'md' }) {
  const radius = rounded === 'full' ? '50%' : rounded === 'lg' ? 16 : 12;
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{
        aspectRatio: ratio,
        width: '100%',
        background: variant === 'subtle' ? c.ink50 : c.green50,
        border: `2px dashed ${variant === 'subtle' ? c.ink300 : c.green300}`,
        borderRadius: radius,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: 16,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <span style={{
        fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: c.amber700, background: c.amber50, padding: '3px 8px', borderRadius: 999,
        border: `1px solid ${c.amber500}`,
      }}>
        VERIFY · foto
      </span>
      <span style={{ fontSize: 12, color: c.ink600, fontStyle: 'italic', maxWidth: 240, lineHeight: 1.4 }}>
        {label}
      </span>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section style={{
      background: c.green50,
      padding: 'clamp(56px, 8vw, 88px) 24px',
      borderBottom: `1px solid ${c.ink100}`,
    }}>
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-m" style={{ marginTop: 12, marginBottom: 20, color: c.ink900, maxWidth: 880 }}>
          {title}
        </h1>
        {intro && (
          <p style={{ fontSize: 18, lineHeight: 1.55, color: c.ink700, maxWidth: 720 }}>
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}

// =========================================================
// Section — generic content section wrapper
// =========================================================
export function Section({ children, background, style }) {
  return (
    <section style={{
      background: background || c.white,
      padding: 'clamp(56px, 8vw, 96px) 24px',
      ...style,
    }}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, intro, align = 'left' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 48, maxWidth: align === 'center' ? 720 : 880, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
      {eyebrow && <p className="eyebrow" style={{ marginBottom: 8 }}>{eyebrow}</p>}
      <h2 className="display-m" style={{ color: c.ink900, marginBottom: intro ? 16 : 0 }}>{title}</h2>
      {intro && (
        <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink600 }}>{intro}</p>
      )}
    </div>
  );
}

// =========================================================
// HOMEPAGE — Section 1: Hero
// =========================================================
function StatTile({ value, label }) {
  return (
    <div style={{
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 16,
      padding: '24px 28px',
      boxShadow: '0 1px 2px rgba(15, 26, 20, 0.04)',
    }}>
      <div className="num" style={{ fontSize: 44, fontWeight: 700, color: c.green800, lineHeight: 1, marginBottom: 10 }}>
        {value}
      </div>
      <div style={{ fontSize: 14, color: c.ink600, fontWeight: 500, lineHeight: 1.35 }}>
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section style={{
      background: c.green50,
      padding: 'clamp(56px, 9vw, 96px) 24px',
      borderBottom: `1px solid ${c.ink100}`,
    }}>
      <div className="hero-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr',
        gap: 48, alignItems: 'center',
      }}>
        <div>
          <p className="eyebrow">Uitzendpartner · Noord-Holland Noord · Schagen</p>
          <h1 className="display-l" style={{ marginTop: 16, marginBottom: 24, color: c.ink900 }}>
            Personeel nodig?<br />Bel Pascal even.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 560, color: c.ink700, marginBottom: 32 }}>
            Wij koppelen bijna 30 werkgevers in agri en tuinbouw, logistiek
            en distributie, en facilitair aan gemotiveerde flexkrachten.
            Huisvesting geregeld — eigen locaties én vaste partners. Eigen
            back-office, en Pascal aan de lijn als u belt.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">
              Offerte aanvragen <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a href="/pakketten" className="btn btn-secondary">
              Pakketten bekijken
            </a>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          <ImageSlot
            ratio="4/3"
            label="VERIFY: warme regiofoto — bijv. Pascal op locatie bij een klant in Noord-Holland Noord, of bollenveld bij Schagen tijdens mei-piek."
          />
          {/* VERIFY: bevestig "bijna 30" werkgevers — exact aantal voor go-live */}
          <StatTile value="~30" label="Actieve werkgevers in onze regio" />
          <StatTile value="4,2 jr" label="Gemiddelde samenwerking" />
          <StatTile value="2022" label="Opgericht in Noord-Holland Noord" />
        </div>
      </div>
      <style>{`
        @media (min-width: 820px) {
          .hero-grid { grid-template-columns: 1.5fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// =========================================================
// HOMEPAGE — Section 2: Sectoren
// =========================================================
function SectorCard({ icon, title, body, href, imageLabel }) {
  return (
    <a href={href} style={{
      display: 'flex',
      flexDirection: 'column',
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 16,
      overflow: 'hidden',
      textDecoration: 'none',
      color: c.ink900,
      transition: 'all 220ms cubic-bezier(0.22,1,0.36,1)',
      height: '100%',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.green700; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.ink200; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ padding: 12, paddingBottom: 0 }}>
        <ImageSlot ratio="16/9" label={imageLabel} variant="subtle" />
      </div>
      <div style={{ padding: 24, paddingTop: 20, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: c.green100, color: c.green800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 16,
        }}>
          {icon}
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: c.ink900 }}>{title}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: c.ink600, marginBottom: 20, flexGrow: 1 }}>{body}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: c.green700, fontSize: 14, fontWeight: 600 }}>
          Meer over deze sector <ChevronRight size={14} />
        </div>
      </div>
    </a>
  );
}

export function SectorenSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Voor wie wij werken"
        title="Drie sectoren waarin wij thuis zijn."
        intro="Geen breed assortiment dat alles voor iedereen claimt te kunnen. Openteelt en (glas)tuinbouw zijn onze kern; daarnaast werken wij voor logistiek & distributie en voor facilitaire dienstverlening."
      />
      <div className="sector-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: 20,
      }}>
        <SectorCard
          icon={<Sprout size={28} strokeWidth={2} />}
          title="Openteelt & (glas)tuinbouw"
          body="Bollen, broeierij, vollegrondsteelt en glastuinbouw — wij plannen op het ritme van het seizoen. Mei-pieken, bollenrooi, knolontsmetting, gerbera-pluk: onze flexkrachten zijn ingewerkt voordat de schaal omhoog gaat."
          href="/voor-werkgevers#openteelt-tuinbouw"
          imageLabel="VERIFY: foto bollenveld of sorteerlijn klant in Noord-Holland Noord."
        />
        <SectorCard
          icon={<Truck size={28} strokeWidth={2} />}
          title="Logistiek & distributie"
          body="Magazijn-, dock-, en routewerk. RDC, DC en cross-dock. Wij plannen rond uw dock-windows en zetten flexkrachten in die ingewerkt zijn op WMS en scanners."
          href="/voor-werkgevers#logistiek-distributie"
          imageLabel="VERIFY: foto magazijn of dock-werkzaamheden bij een logistieke klant."
        />
        <SectorCard
          icon={<Building2 size={28} strokeWidth={2} />}
          title="Facilitair"
          body="Schoonmaak, hospitality-ondersteuning en algemene facilitaire dienstverlening. Inzetbaar in vaste roosters of voor projecten en pieken."
          href="/voor-werkgevers#facilitair"
          imageLabel="VERIFY: foto facilitaire werkzaamheden — schoonmaak, hospitality of receptie."
        />
      </div>
      <style>{`
        @media (min-width: 768px) {
          .sector-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

// =========================================================
// Region map — stylized SVG of 60km service area around Schagen
// Coordinates approximated from real lat/lon (1 km = 2.5 px).
// VERIFY-data: bevestig welke randplaatsen wel/niet binnen ons bereik vallen.
// =========================================================
function RegioKaart() {
  return (
    <svg
      viewBox="0 0 480 540"
      role="img"
      aria-label="Kaart van werkgebied PS-Connect rond Schagen, met een radius van ongeveer 60 kilometer."
      style={{ width: '100%', height: 'auto', maxWidth: 520, display: 'block' }}
    >
      {/* Land background */}
      <rect x="0" y="0" width="480" height="540" fill={c.green50} />

      {/* North Sea hint (west) */}
      <path
        d="M 0 0 L 165 0 Q 155 80, 140 180 Q 130 280, 145 380 Q 155 470, 150 540 L 0 540 Z"
        fill="#DCEEF4"
        opacity="0.85"
      />

      {/* IJsselmeer / Markermeer hint (east) */}
      <path
        d="M 480 220 Q 455 290, 425 360 Q 415 440, 420 540 L 480 540 Z"
        fill="#DCEEF4"
        opacity="0.85"
      />

      {/* Afsluitdijk hint */}
      <path d="M 360 220 Q 410 215, 460 218" stroke="#B7D5DE" strokeWidth="3" fill="none" opacity="0.7" />

      {/* 60 km radius — filled translucent + dashed border */}
      <circle cx="240" cy="270" r="150" fill={c.green200} fillOpacity="0.32" />
      <circle cx="240" cy="270" r="150" fill="none" stroke={c.green700} strokeWidth="2" strokeDasharray="6 5" />

      {/* Radius label on circle top */}
      <text x="240" y="108" textAnchor="middle" fontSize="13" fontWeight="700" fill={c.green800}>
        ±60 km werkgebied
      </text>

      {/* North compass top-right */}
      <g transform="translate(430, 50)">
        <circle r="18" fill={c.white} stroke={c.ink300} strokeWidth="1" />
        <polygon points="0,-12 4,0 0,4 -4,0" fill={c.green800} />
        <text y="-22" textAnchor="middle" fontSize="11" fontWeight="700" fill={c.ink700}>N</text>
      </g>

      {/* Cities around Schagen */}
      <g fontSize="11" fontWeight="600" fill={c.ink700}>
        {/* Texel */}
        <circle cx="240" cy="192" r="3" fill={c.ink600} />
        <text x="246" y="196">Texel</text>

        {/* Den Helder */}
        <circle cx="200" cy="222" r="3" fill={c.ink600} />
        <text x="148" y="226">Den Helder</text>

        {/* Alkmaar */}
        <circle cx="232" cy="315" r="3" fill={c.ink600} />
        <text x="186" y="328">Alkmaar</text>

        {/* Heerhugowaard */}
        <circle cx="255" cy="304" r="3" fill={c.ink600} />
        <text x="261" y="302">Heerhugowaard</text>

        {/* Hoorn */}
        <circle cx="285" cy="320" r="3" fill={c.ink600} />
        <text x="291" y="324">Hoorn</text>

        {/* Enkhuizen */}
        <circle cx="322" cy="295" r="3" fill={c.ink600} />
        <text x="328" y="299">Enkhuizen</text>

        {/* Purmerend */}
        <circle cx="252" cy="354" r="3" fill={c.ink600} />
        <text x="258" y="358">Purmerend</text>

        {/* Haarlem */}
        <circle cx="215" cy="382" r="3" fill={c.ink600} />
        <text x="164" y="386">Haarlem</text>

        {/* Amsterdam */}
        <circle cx="260" cy="388" r="3" fill={c.ink600} />
        <text x="266" y="392">Amsterdam</text>
      </g>

      {/* Schagen — prominent center pin */}
      <g>
        <circle cx="240" cy="270" r="14" fill={c.green700} opacity="0.22" />
        <circle cx="240" cy="270" r="8" fill={c.green700} />
        <circle cx="240" cy="270" r="3" fill={c.white} />
        <text x="240" y="252" textAnchor="middle" fontSize="14" fontWeight="800" fill={c.green900}>
          Schagen
        </text>
      </g>
    </svg>
  );
}

export function RegioSection() {
  return (
    <Section background={c.white}>
      <SectionHeader
        eyebrow="Ons werkgebied"
        title="Schagen als kern. Noord-Holland Noord als werkgebied."
        intro="Wij zijn lokaal — vanuit Schagen werken wij in een straal van zo'n 60 kilometer. Daarbuiten zetten wij flexkrachten landelijk in wanneer u zelf huisvesting heeft."
      />
      <div className="regio-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { icon: <MapPin size={18} strokeWidth={2.5} />, t: 'Hoofdvestiging Schagen', s: 'Werkgebied loopt van Texel en Den Helder tot Amsterdam, Haarlem en Enkhuizen.' },
              { icon: <Calendar size={18} strokeWidth={2.5} />, t: 'Tweewekelijks op locatie', s: 'Pascal of Mark komt elke twee weken langs bij vaste klanten. Geen ticket-systeem, geen e-mailcarrousel.' },
              { icon: <Users size={18} strokeWidth={2.5} />, t: 'Aanwezig bij opstart', s: 'Bij een nieuw seizoen of een nieuwe klant zijn we de eerste dagen fysiek aanwezig op de werkvloer.' },
              { icon: <Compass size={18} strokeWidth={2.5} />, t: 'Landelijk bij eigen huisvesting', s: 'Buiten ons werkgebied zetten wij flexkrachten in wanneer u zelf de huisvesting regelt — bijvoorbeeld bij productielocaties elders in NL.' },
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: c.green100, color: c.green800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: c.ink900, marginBottom: 2 }}>{item.t}</div>
                  <div style={{ fontSize: 14, color: c.ink600, lineHeight: 1.55 }}>{item.s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <RegioKaart />
        </div>
      </div>
      <p style={{ marginTop: 28, fontSize: 12, color: c.ink500, fontStyle: 'italic' }}>
        Kaartweergave is indicatief. Werkelijke inzetbaarheid hangt af van rijtijd, dienstvenster en huisvesting. [VERIFY: bevestig randplaatsen die nog binnen het gewenste werkgebied vallen.]
      </p>
      <style>{`
        @media (min-width: 880px) {
          .regio-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

// =========================================================
// HOMEPAGE — Section 3: Werkwijze
// =========================================================
function StepItem({ number, icon, title, body }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div className="num" style={{
          fontSize: 36, fontWeight: 700, color: c.green700, lineHeight: 1,
        }}>
          {number}
        </div>
        <div style={{ color: c.green700 }}>{icon}</div>
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, color: c.ink900 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: c.ink600 }}>{body}</p>
    </div>
  );
}

export function WerkwijzeSection() {
  return (
    <Section background={c.ink50}>
      <SectionHeader
        eyebrow="Werkwijze"
        title="Vier stappen, geen drempels."
        intro="Van eerste gesprek tot maandelijkse verloning. Wij houden de keten kort en de communicatie direct."
      />
      <div className="step-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: 32,
      }}>
        <StepItem number="01" icon={<MessageCircle size={24} />} title="Klantgesprek"
          body="Pascal komt langs of belt. Wij brengen uw seizoen, piekvolume en specifieke werkzaamheden in kaart. Geen offerte op 30 vragenlijst-velden." />
        <StepItem number="02" icon={<HomeIcon size={24} />} title="Match & huisvesting"
          body="Wij selecteren flexkrachten op basis van uw vak en taal. Voor arbeidsmigranten regelen wij huisvesting binnen ons eigen woningbestand." />
        <StepItem number="03" icon={<Users size={24} />} title="Inzet"
          body="Op de eerste werkdag is iemand uit ons team aanwezig voor de overdracht. Korte lijn voor wijzigingen, geen 088-callcenter." />
        <StepItem number="04" icon={<ClipboardCheck size={24} />} title="Verloning"
          body="Eigen back-office verzorgt de salarisrun, urenverwerking en compliance. Uw maandfactuur is voorspelbaar en gespecificeerd per flexkracht." />
      </div>
      <div style={{ marginTop: 48 }}>
        <a href="/werkwijze" className="btn btn-secondary">
          Volledige werkwijze bekijken <ArrowRight size={16} strokeWidth={2.5} />
        </a>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .step-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

// =========================================================
// Recruitment — eigen recruiters in PL/RO, geen tussenpartijen
// VERIFY: aantal recruiters per land, regio's, talen, sinds wanneer.
// =========================================================
function CountryTile({ code, country, body }) {
  return (
    <div style={{
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 14,
      padding: 24,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 10,
        background: c.green100, color: c.green800,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14,
        flexShrink: 0, letterSpacing: '0.04em',
      }}>
        {code}
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 700, color: c.ink900, marginBottom: 6 }}>{country}</div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: c.ink600, marginBottom: 0 }}>{body}</p>
      </div>
    </div>
  );
}

export function RecruitmentSection() {
  return (
    <Section background={c.ink50}>
      <SectionHeader
        eyebrow="Werving aan de bron"
        title="Eigen recruiters in Polen en Roemenië."
        intro="Geen tussenliggende uitzendpartijen, geen wervingsketens. Onze recruiters wonen in de wervingsregio's, spreken de taal en kennen onze flexkrachten persoonlijk voordat ze in Nederland aan de slag gaan."
      />
      <div className="recruit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { t: 'Directe werving, geen tussenpartijen', s: 'Wij betalen geen wervingsfees aan derden. Dat scheelt in de prijs en in de vertrouwensketen.' },
              { t: 'Persoonlijke intake ter plekke', s: 'Onze recruiters spreken iedereen face-to-face, controleren werkervaring en checken documenten voor vertrek.' },
              { t: 'Eerlijk verhaal vooraf', s: 'Salaris, huisvesting, werk- en reistijden — we leggen het uit in de eigen taal. Geen verrassingen bij aankomst.' },
              { t: 'Vaste pool, terugkerende krachten', s: 'Veel van onze flexkrachten komen meerdere seizoenen terug. Bekend met de werkgever, bekend met de regio.' },
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Check size={20} strokeWidth={2.5} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: c.ink900, marginBottom: 2 }}>{item.t}</div>
                  <div style={{ fontSize: 14, color: c.ink600, lineHeight: 1.55 }}>{item.s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          <CountryTile
            code="PL"
            country="Polen"
            body="Eigen recruiter ter plekke. [VERIFY: regio, sinds wanneer, aantal recruiters.] Werving vooral voor agri en logistiek."
          />
          <CountryTile
            code="RO"
            country="Roemenië"
            body="Eigen recruiter ter plekke. [VERIFY: regio, sinds wanneer.] Werving voor tuinbouw, logistiek en facilitair."
          />
          <div style={{
            background: c.green50,
            border: `1px solid ${c.green200}`,
            borderRadius: 14,
            padding: 20,
            display: 'flex', gap: 14, alignItems: 'flex-start',
          }}>
            <UserSearch size={22} strokeWidth={2} style={{ color: c.green800, flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 14, color: c.ink700, lineHeight: 1.55 }}>
              Onze recruiters werken nauw samen met onze planners in Schagen. Pieken in vraag worden direct doorgezet naar de wervingskanalen.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 880px) {
          .recruit-grid { grid-template-columns: 1.2fr 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

// =========================================================
// HOMEPAGE — Section 4: Pakketten
// =========================================================
function PakketCard({ tag, name, price, priceUnit, features, ctaText, ctaHref, highlight }) {
  return (
    <div style={{
      background: c.white,
      border: highlight ? `2px solid ${c.green700}` : `1px solid ${c.ink200}`,
      borderRadius: 20,
      padding: '32px 28px',
      position: 'relative',
      boxShadow: highlight ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {tag && (
        <div style={{
          position: 'absolute', top: -12, left: 24,
          background: c.amber500, color: c.ink900,
          padding: '4px 12px', borderRadius: 999,
          fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {tag}
        </div>
      )}
      <h3 style={{ fontSize: 22, fontWeight: 800, color: c.ink900, marginBottom: 6 }}>{name}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24, minHeight: 52 }}>
        <span className="num" style={{ fontSize: 38, fontWeight: 700, color: c.green800, lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 14, color: c.ink500 }}>{priceUnit}</span>
      </div>
      <ul style={{
        listStyle: 'none', padding: 0, margin: '0 0 28px',
        display: 'flex', flexDirection: 'column', gap: 12,
        flexGrow: 1,
      }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: c.ink700, lineHeight: 1.5 }}>
            <Check size={18} strokeWidth={2.5} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={highlight ? 'btn btn-primary' : 'btn btn-secondary'}
        style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
      >
        {ctaText}
      </a>
    </div>
  );
}

export function PakkettenSection({ embed = false }) {
  const content = (
    <>
      {!embed && (
        <SectionHeader
          eyebrow="Pakketten"
          title="Drie heldere pakketten. Transparante tarieven."
          intro="Geen offerte na een formulier met dertig vragen. U kiest het pakket dat past, wij regelen de rest."
        />
      )}
      <div className="pakket-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'stretch',
      }}>
        <PakketCard
          name="Basis"
          price="€ XX,XX"
          priceUnit="/uur [VERIFY]"
          features={[
            'Werving en selectie flexkrachten',
            'Wekelijkse urenverwerking',
            'Maandelijkse verloning via eigen back-office',
            'Telefonisch bereikbaar op werkdagen',
          ]}
          ctaText="Offerte aanvragen"
          ctaHref="/contact?pakket=basis"
        />
        <PakketCard
          tag="Meest gekozen"
          highlight
          name="Gewoon Goed"
          price="€ XX,XX"
          priceUnit="/uur [VERIFY]"
          features={[
            'Alles uit Basis',
            'Huisvesting voor arbeidsmigranten geregeld',
            'Vervoer naar de werklocatie',
            'Eerste-werkdag begeleiding',
            'Maandelijks evaluatiegesprek',
          ]}
          ctaText="Offerte aanvragen"
          ctaHref="/contact?pakket=gewoongoed"
        />
        <PakketCard
          name="All-In"
          price="€ XX,XX"
          priceUnit="/uur [VERIFY]"
          features={[
            'Alles uit Gewoon Goed',
            'Dedicated accountmanager (Pascal)',
            'Maandelijkse compliance-rapportage',
            'Volledige administratieve ontzorging',
            'Capaciteitsplanning voor het seizoen',
          ]}
          ctaText="Offerte aanvragen"
          ctaHref="/contact?pakket=allin"
        />
      </div>
      <p style={{ marginTop: 28, fontSize: 13, color: c.ink500, fontStyle: 'italic' }}>
        Tarieven excl. BTW. Definitief tarief op maat afhankelijk van sector, schaal en seizoenspatroon. [Plaatsvervangende tarieven — werkelijke pakketprijzen invullen vóór launch.]
      </p>
      <style>{`
        @media (min-width: 768px) {
          .pakket-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  );

  return embed ? content : (
    <Section background={c.white} style={{ scrollMarginTop: 80 }}>
      <div id="pakketten" style={{ scrollMarginTop: 80 }} />
      {content}
    </Section>
  );
}

// =========================================================
// HOMEPAGE — Section 5: Cases preview
// =========================================================
function CaseCard({ sector, locatie, schaal, klantSinds, beschrijving, resultaat }) {
  return (
    <div style={{
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 16,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 8,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: c.green800,
          background: c.green100, padding: '4px 10px', borderRadius: 999,
        }}>
          {sector}
        </span>
        <span style={{
          fontSize: 11, fontWeight: 600,
          color: c.ink600, background: c.ink100,
          padding: '4px 10px', borderRadius: 999,
        }}>
          {locatie} · {schaal}
        </span>
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: c.ink900, marginBottom: 0 }}>
        {beschrijving}
      </h3>
      <p style={{ fontSize: 14, color: c.ink600, lineHeight: 1.55, marginBottom: 0 }}>
        {resultaat}
      </p>
      <div style={{
        marginTop: 'auto', paddingTop: 16,
        borderTop: `1px solid ${c.ink100}`,
        fontSize: 13, color: c.ink500,
      }}>
        Klant sinds {klantSinds}
      </div>
    </div>
  );
}

export function CasesPreviewSection() {
  return (
    <Section background={c.green50}>
      <SectionHeader
        eyebrow="Cases"
        title="Wat wij voor onze klanten doen."
        intro="Twee voorbeeldcases. Werkelijke klantnamen worden toegevoegd zodra publicatietoestemming is geregeld."
      />
      <div className="case-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: 20,
      }}>
        <CaseCard
          sector="Bollenkwekerij"
          locatie="Schagen"
          schaal="45 ha"
          klantSinds="2019"
          beschrijving="[Voorbeeldcase] Stabiele bezetting van mei-piek over vijf seizoenen."
          resultaat="Jaarlijks 25-45 flexkrachten ingezet in piekweken. Zelfde kerngroep terugkerend, korter inwerktraject, lagere uitval."
        />
        <CaseCard
          sector="Glastuinbouw"
          locatie="Heerhugowaard"
          schaal="12 ha onder glas"
          klantSinds="2021"
          beschrijving="[Voorbeeldcase] Doorlopende inzet plus huisvesting voor zeven medewerkers."
          resultaat="Vaste pool met huisvestingsoplossing. Geen reisproblemen, langere gemiddelde contractduur."
        />
      </div>
      <div style={{ marginTop: 36 }}>
        <a href="/cases" className="btn btn-secondary">
          Alle cases bekijken <ArrowRight size={16} strokeWidth={2.5} />
        </a>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .case-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}

// =========================================================
// HOMEPAGE — Section 6: Final CTA
// =========================================================
export function FinalCTA() {
  return (
    <section style={{
      background: c.ink900,
      color: c.white,
      padding: 'clamp(64px, 9vw, 96px) 24px',
    }}>
      <Container style={{ textAlign: 'center', maxWidth: 760 }}>
        <p className="eyebrow" style={{ color: c.green400, marginBottom: 16 }}>Klaar voor het volgende seizoen?</p>
        <h2 className="display-m" style={{ color: c.white, marginBottom: 24 }}>
          Klaar voor een seizoen zonder verrassingen?
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: c.ink300, marginBottom: 36 }}>
          Eén klantgesprek en u weet of we passen. Pascal belt u dezelfde dag terug.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/contact" className="btn btn-primary">
            Offerte aanvragen <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="tel:+31000000000" className="btn"
            style={{
              background: 'transparent', color: c.white,
              border: `1.5px solid ${c.ink600}`,
            }}>
            Direct bellen
          </a>
        </div>
      </Container>
    </section>
  );
}

// =========================================================
// SeizoenstijdlijnAgri — interactive year-cycle for openteelt & glas
// Klik een maand: highlights die kolom + toont detail-paneel met
// werkzaamheden en personeelspiek per teelt.
// VERIFY-data: intensiteit per teelt-maand en werkzaamheden per maand —
// aan te leveren door PS-Connect operations.
// =========================================================
const SEIZOEN_MAANDEN = [
  { kort: 'Jan', lang: 'Januari' }, { kort: 'Feb', lang: 'Februari' },
  { kort: 'Mrt', lang: 'Maart' },   { kort: 'Apr', lang: 'April' },
  { kort: 'Mei', lang: 'Mei' },     { kort: 'Jun', lang: 'Juni' },
  { kort: 'Jul', lang: 'Juli' },    { kort: 'Aug', lang: 'Augustus' },
  { kort: 'Sep', lang: 'September' },{ kort: 'Okt', lang: 'Oktober' },
  { kort: 'Nov', lang: 'November' },{ kort: 'Dec', lang: 'December' },
];

const SEIZOEN_TEELTEN = [
  { key: 'bollen',     label: 'Bollen',            dot: c.green700 },
  { key: 'broeierij',  label: 'Broeierij',         dot: c.amber600 },
  { key: 'vollegrond', label: 'Vollegrondsteelt',  dot: c.green500 },
  { key: 'glas',       label: 'Glastuinbouw',      dot: c.green900 },
];

// Intensiteit personeelsinzet 0–3 per teelt per maand (VERIFY met PS-Connect).
const SEIZOEN_INTENSITEIT = {
  bollen:     [0, 0, 1, 2, 3, 3, 2, 2, 2, 1, 1, 0],
  broeierij:  [3, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 3],
  vollegrond: [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0],
  glas:       [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1],
};

// Korte werkzaamheid-beschrijving per teelt per maand (VERIFY).
const SEIZOEN_DETAILS = {
  bollen: [
    null, null,
    'Voorbereiding sorteerruimtes', 'Eerste rooi voorbereiding',
    'Mei-piek: rooi en sortering', 'Vervolg piek, transport',
    'Sortering en verpakking', 'Sortering en verpakking',
    'Plantvoorbereiding', 'Plantwerk', 'Plantwerk afronding', null,
  ],
  broeierij: [
    'Pieksortering en pluk', 'Pieksortering en pluk',
    'Afbouw winterpiek', 'Onderhoud kassen',
    null, null, null, null, null,
    'Opstart broeiseizoen', 'Plantwerk en opstart', 'Eerste pieken',
  ],
  vollegrond: [
    null, null,
    'Grondvoorbereiding', 'Plant- en zaaiwerk',
    'Onderhoud en wieden', 'Onderhoud en wieden',
    'Oogst start', 'Oogstpiek',
    'Oogst en sortering', 'Oogst afronding', 'Inpakwerk', null,
  ],
  glas: [
    'Doorlopend pluk- en verzorgingswerk', 'Doorlopend pluk- en verzorgingswerk',
    'Doorlopend pluk- en verzorgingswerk', 'Plantwissel en opstart',
    'Volledig productieseizoen', 'Volledig productieseizoen',
    'Volledig productieseizoen', 'Volledig productieseizoen',
    'Volledig productieseizoen', 'Volledig productieseizoen, eind-pieken',
    'Afronding teelt, plantwissel', 'Voorbereiding nieuw seizoen',
  ],
};

function seizoenCellColor(level) {
  if (level === 0) return c.ink100;
  if (level === 1) return c.green100;
  if (level === 2) return c.green400;
  return c.amber500; // niveau 3 = piek
}

function seizoenLevelLabel(level) {
  return ['—', 'Laag', 'Middel', 'Piek'][level] || '—';
}

export function SeizoenstijdlijnAgri() {
  const [selected, setSelected] = useState(null); // 0..11

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <p className="eyebrow" style={{ marginBottom: 8 }}>Seizoenstijdlijn</p>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: c.ink900, marginBottom: 8 }}>
          Personeelsinzet over het jaar.
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: c.ink600, maxWidth: 680 }}>
          Klik op een maand voor de typische werkzaamheden en piekinzet per teelt.
          De cellen geven globale intensiteit weer; voor uw specifieke situatie
          stellen wij een planning op maat op.
        </p>
      </div>

      {/* Tijdlijn grid */}
      <div style={{
        overflowX: 'auto',
        border: `1px solid ${c.ink200}`,
        borderRadius: 14,
        background: c.white,
        padding: 12,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '140px repeat(12, minmax(44px, 1fr))',
          gap: 4,
          minWidth: 700,
        }}>
          {/* Header row: month buttons */}
          <div />
          {SEIZOEN_MAANDEN.map((m, i) => {
            const active = selected === i;
            return (
              <button
                key={m.kort}
                onClick={() => setSelected(active ? null : i)}
                aria-pressed={active}
                aria-label={`Selecteer ${m.lang}`}
                style={{
                  background: active ? c.green800 : c.ink50,
                  color: active ? c.white : c.ink700,
                  border: `1px solid ${active ? c.green800 : c.ink200}`,
                  borderRadius: 8,
                  padding: '8px 4px',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 160ms cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                {m.kort}
              </button>
            );
          })}

          {/* Teelt rows */}
          {SEIZOEN_TEELTEN.map(teelt => (
            <Fragment key={teelt.key}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 700, color: c.ink800,
                padding: '0 4px',
              }}>
                <span style={{
                  display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
                  background: teelt.dot, flexShrink: 0,
                }} />
                {teelt.label}
              </div>
              {SEIZOEN_INTENSITEIT[teelt.key].map((level, i) => {
                const active = selected === i;
                return (
                  <button
                    key={`${teelt.key}-${i}`}
                    onClick={() => setSelected(active ? null : i)}
                    aria-label={`${teelt.label}, ${SEIZOEN_MAANDEN[i].lang}: ${seizoenLevelLabel(level)}`}
                    title={`${SEIZOEN_MAANDEN[i].lang} · ${seizoenLevelLabel(level)}`}
                    style={{
                      height: 36,
                      background: seizoenCellColor(level),
                      border: active ? `2px solid ${c.green800}` : `1px solid ${c.ink200}`,
                      borderRadius: 6,
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'transform 160ms cubic-bezier(0.22,1,0.36,1)',
                      transform: active ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 16,
        marginTop: 16, fontSize: 12, color: c.ink600,
        alignItems: 'center',
      }}>
        <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.ink500 }}>
          Intensiteit:
        </span>
        {[0, 1, 2, 3].map(lvl => (
          <span key={lvl} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              width: 16, height: 16, borderRadius: 4,
              background: seizoenCellColor(lvl),
              border: `1px solid ${c.ink200}`,
            }} />
            {seizoenLevelLabel(lvl)}
          </span>
        ))}
      </div>

      {/* Detail panel */}
      {selected !== null && (
        <div style={{
          marginTop: 24,
          background: c.green50,
          border: `1px solid ${c.green200}`,
          borderRadius: 14,
          padding: 24,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
            <h4 style={{ fontSize: 18, fontWeight: 800, color: c.ink900, marginBottom: 0 }}>
              {SEIZOEN_MAANDEN[selected].lang} — typische inzet
            </h4>
            <button
              onClick={() => setSelected(null)}
              aria-label="Sluit detailpaneel"
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: c.ink500, padding: 4, display: 'flex',
              }}
            >
              <X size={18} />
            </button>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SEIZOEN_TEELTEN.map(teelt => {
              const lvl = SEIZOEN_INTENSITEIT[teelt.key][selected];
              const detail = SEIZOEN_DETAILS[teelt.key][selected];
              return (
                <li key={teelt.key} style={{
                  display: 'grid',
                  gridTemplateColumns: '14px 130px 60px 1fr',
                  gap: 12,
                  alignItems: 'baseline',
                  fontSize: 14,
                  color: c.ink700,
                }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: teelt.dot, marginTop: 4,
                  }} />
                  <span style={{ fontWeight: 700, color: c.ink900 }}>{teelt.label}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: lvl === 3 ? c.amber700 : lvl >= 1 ? c.green800 : c.ink400,
                  }}>
                    {seizoenLevelLabel(lvl)}
                  </span>
                  <span>{detail || <em style={{ color: c.ink400 }}>geen typische inzet</em>}</span>
                </li>
              );
            })}
          </ul>
          <p style={{ marginTop: 16, fontSize: 12, color: c.ink500, fontStyle: 'italic' }}>
            [VERIFY: bevestig intensiteit en werkzaamheden per teelt per maand.]
          </p>
        </div>
      )}
    </div>
  );
}

// =========================================================
// PAGE: Voor werkgevers
// =========================================================
export function VoorWerkgeversContent() {
  return (
    <>
      <PageHeader
        eyebrow="Voor werkgevers"
        title="Drie sectoren. Eén partner die uw vak kent."
        intro="Wij hebben bewust geen breed assortiment. Onze diepte zit in openteelt en (glas)tuinbouw, met aanvullende sectoren in logistiek & distributie en facilitaire dienstverlening."
      />
      <Section id="openteelt-tuinbouw">
        <div className="vw-sector" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{
              width: 64, height: 64, borderRadius: 14,
              background: c.green100, color: c.green800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <Sprout size={32} strokeWidth={2} />
            </div>
            <h2 className="display-m" style={{ color: c.ink900, marginBottom: 16 }}>Openteelt & (glas)tuinbouw</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink700, marginBottom: 20 }}>
              Onze kern. Bollen, broeierij, vollegrondsteelt en glastuinbouw — wij
              plannen mee met het ritme van het seizoen. De meeste van onze
              flexkrachten zijn meermaals ingewerkt op specifieke werkzaamheden:
              sorteerlijnen, knolontsmetting, bollenrooi, gerbera-pluk, paprika-oogst.
            </p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: c.ink900, marginBottom: 12 }}>Wat wij anders doen:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Capaciteitsplanning volgt uw seizoen, niet ons rooster',
                'Mei-pieksysteem ingebouwd in onze planning',
                'Huisvesting voor terugkerende migranten geregeld via eigen locaties en vaste partners',
                'Pascal bezoekt uw bedrijf vóór het seizoen, niet pas bij een storing',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: c.ink700 }}>
                  <Check size={18} strokeWidth={2.5} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: c.green50, borderRadius: 16, padding: 32, border: `1px solid ${c.green200}` }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Typische inzet</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <FactRow label="Piekvolume" value="50–180 flexkrachten [VERIFY]" />
              <FactRow label="Seizoenspatroon" value="Mei–september" />
              <FactRow label="Werkzaamheden" value="Pluk, sortering, verpakking, broeierij" />
              <FactRow label="Huisvesting" value="Veelal nodig, wij regelen" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 64 }}>
          <SeizoenstijdlijnAgri />
        </div>
      </Section>

      <Section background={c.ink50} id="logistiek-distributie">
        <div className="vw-sector" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{
              width: 64, height: 64, borderRadius: 14,
              background: c.green100, color: c.green800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <Truck size={32} strokeWidth={2} />
            </div>
            <h2 className="display-m" style={{ color: c.ink900, marginBottom: 16 }}>Logistiek & distributie</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink700, marginBottom: 20 }}>
              Magazijn-, dock- en routewerk. RDC, DC en cross-dock. Wij plannen
              rond uw dock-windows en zetten flexkrachten in die ingewerkt zijn
              op WMS en scanners.
            </p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: c.ink900, marginBottom: 12 }}>Wat wij anders doen:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Inzet binnen 48 uur bij capaciteitsuitval',
                'Flexkrachten ingewerkt op WMS en scanners',
                'Combinatieinzet over meerdere klanten in Noord-Holland Noord',
                'VCU-gecertificeerde uitzending voor risicovolle werkzaamheden',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: c.ink700 }}>
                  <Check size={18} strokeWidth={2.5} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: c.white, borderRadius: 16, padding: 32, border: `1px solid ${c.ink200}` }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Typische inzet</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <FactRow label="Volume" value="5–40 flexkrachten doorlopend [VERIFY]" />
              <FactRow label="Werkdagen" value="Ma–za, ploegen mogelijk" />
              <FactRow label="Functies" value="Orderpicker, heftruck, expeditie" />
              <FactRow label="Snelle inzet" value="Binnen 48u bij uitval" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="facilitair">
        <div className="vw-sector" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{
              width: 64, height: 64, borderRadius: 14,
              background: c.green100, color: c.green800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <Building2 size={32} strokeWidth={2} />
            </div>
            <h2 className="display-m" style={{ color: c.ink900, marginBottom: 16 }}>Facilitair</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink700, marginBottom: 20 }}>
              Schoonmaak, hospitality-ondersteuning en algemene facilitaire
              dienstverlening. Inzetbaar in vaste roosters of voor projecten
              en pieken. [VERIFY: bevestig welke facilitaire werkzaamheden
              binnen scope vallen — bijv. schoonmaak, groenvoorziening,
              receptie/hospitality.]
            </p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: c.ink900, marginBottom: 12 }}>Wat wij anders doen:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Korte lijn met opdrachtgever — geen call-center-tussenlaag',
                'Vaste pool waar mogelijk, geen anonieme inzet',
                'Inzet ook voor kortlopende projecten en evenementen',
                'Combinatie met huisvesting wanneer dat helpt',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: c.ink700 }}>
                  <Check size={18} strokeWidth={2.5} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: c.green50, borderRadius: 16, padding: 32, border: `1px solid ${c.green200}` }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Typische inzet</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <FactRow label="Volume" value="2–15 flexkrachten [VERIFY]" />
              <FactRow label="Werkmoment" value="Vast rooster of projectbasis" />
              <FactRow label="Functies" value="Schoonmaak, hospitality, facilitair" />
              <FactRow label="Werkgebied" value="Noord-Holland Noord, ±60 km" />
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />

      <style>{`
        @media (min-width: 820px) {
          .vw-sector { grid-template-columns: 1.4fr 1fr !important; }
        }
      `}</style>
    </>
  );
}

function FactRow({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.ink500, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 15, color: c.ink900, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

// =========================================================
// PAGE: Werkwijze (full)
// =========================================================
export function WerkwijzeContent() {
  return (
    <>
      <PageHeader
        eyebrow="Werkwijze"
        title="Vier stappen, geen drempels."
        intro="Van eerste gesprek tot maandelijkse verloning. Wij houden de keten kort, de communicatie direct, en de administratie in-house."
      />
      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          <WerkwijzeStep
            number="01"
            title="Klantgesprek"
            body="Pascal komt langs of belt. Wij brengen uw seizoen, piekvolume en specifieke werkzaamheden in kaart. We bekijken samen of we een match zijn voordat er ook maar één offerte op tafel komt."
            details={[
              'Doorlooptijd: 1–3 werkdagen tot offerte',
              'Geen 30-vragen-formulier. Eén gesprek, dan voorstel',
              'Bezoek aan uw locatie kan, geen verplichting',
            ]}
          />
          <WerkwijzeStep
            number="02"
            title="Match & huisvesting"
            body="Wij selecteren flexkrachten op basis van uw vak, taal en seizoensgevoel. Voor arbeidsmigranten regelen wij huisvesting binnen ons eigen woningbestand — geen Airbnb-improvisatie, geen onderhuur via derden."
            details={[
              'Eigen huisvestingsbestand in Noord-Holland Noord',
              'SNF-norm gevolgd waar van toepassing',
              'Pre-screening op vaardigheid en taal',
              'Documentcheck en compliance bij intake',
            ]}
          />
          <WerkwijzeStep
            number="03"
            title="Inzet"
            body="Op de eerste werkdag is iemand uit ons team aanwezig voor de overdracht aan uw voorman of teamleider. Korte lijn voor wijzigingen, geen 088-callcenter. Pascal of Mark is direct bereikbaar."
            details={[
              'Eerste-werkdag begeleiding standaard',
              'Direct telefoonnummer Pascal voor klantvragen',
              'Vervanging bij uitval binnen 24u in pieken',
              'Wekelijkse urenverwerking met u afgestemd',
            ]}
          />
          <WerkwijzeStep
            number="04"
            title="Verloning"
            body="Onze eigen back-office verzorgt de salarisrun, urenverwerking en compliance. Uw maandfactuur is voorspelbaar, gespecificeerd per flexkracht, en aansluitbaar op uw boekhouding."
            details={[
              'Wekelijkse urenstaat, maandelijkse factuur',
              'Pensioen, vakantiegeld, reserveringen correct verwerkt',
              'Compliance-rapportage op verzoek',
              'Aansluiting op de meeste boekhoudpakketten',
            ]}
          />
        </div>
      </Section>

      <RecruitmentSection />

      <Section background={c.green50}>
        <SectionHeader
          eyebrow="Certificeringen"
          title="Compliance is geen optie."
          intro="Wij werken volgens de geldende sectorale normen. SNA-certificering ronden wij af in 2026."
          align="center"
        />
        <div className="cert-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 16, maxWidth: 720, margin: '0 auto',
        }}>
          <CertBadge title="SNA" subtitle="Stichting Normering Arbeid · in afronding 2026" icon={<Award size={22} />} pending />
          <CertBadge title="NEN 4400-1" subtitle="Norm voor uitleen van arbeid" icon={<Shield size={22} />} />
          <CertBadge title="ABU" subtitle="Lidmaatschap branchevereniging" icon={<FileCheck size={22} />} />
          <CertBadge title="VCU" subtitle="Veiligheid voor uitzendorganisaties" icon={<Shield size={22} />} />
        </div>
        <style>{`
          @media (min-width: 600px) {
            .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </Section>

      <FinalCTA />
    </>
  );
}

function WerkwijzeStep({ number, title, body, details }) {
  return (
    <div className="ww-step" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'start' }}>
      <div>
        <div className="num" style={{ fontSize: 56, fontWeight: 700, color: c.green700, lineHeight: 1, marginBottom: 8 }}>
          {number}
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: c.ink900, marginBottom: 16 }}>{title}</h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink700 }}>{body}</p>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {details.map((d, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: c.ink700 }}>
            <Check size={18} strokeWidth={2.5} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <style>{`
        @media (min-width: 820px) {
          .ww-step { grid-template-columns: 1.2fr 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  );
}

function CertBadge({ title, subtitle, icon, pending }) {
  return (
    <div style={{
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 12,
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 10,
        background: pending ? c.amber50 : c.green100,
        color: pending ? c.amber700 : c.green800,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: c.ink900 }}>{title}</div>
        <div style={{ fontSize: 13, color: c.ink500 }}>{subtitle}</div>
      </div>
    </div>
  );
}

// =========================================================
// PAGE: Pakketten (full)
// =========================================================
export function PakkettenContent() {
  return (
    <>
      <PageHeader
        eyebrow="Pakketten"
        title="Drie pakketten. Eén heldere keuze."
        intro="Basis voor wie zelf de regie houdt. Gewoon Goed voor de meeste klanten. All-In voor wie volledig ontzorgd wil worden."
      />
      <Section>
        <PakkettenSection embed />
      </Section>

      <Section background={c.ink50}>
        <SectionHeader
          eyebrow="Vergelijking"
          title="Wat krijgt u per pakket?"
          align="center"
        />
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 15,
            minWidth: 600,
          }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${c.ink900}` }}>
                <th style={{ textAlign: 'left', padding: '14px 16px', color: c.ink900, fontWeight: 700 }}>Onderdeel</th>
                <th style={{ padding: '14px 16px', color: c.ink900, fontWeight: 700 }}>Basis</th>
                <th style={{ padding: '14px 16px', color: c.green800, fontWeight: 800 }}>Gewoon Goed</th>
                <th style={{ padding: '14px 16px', color: c.ink900, fontWeight: 700 }}>All-In</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Werving en selectie', true, true, true],
                ['Verloning via eigen back-office', true, true, true],
                ['Huisvesting voor migranten', false, true, true],
                ['Vervoer naar werklocatie', false, true, true],
                ['Eerste-werkdag begeleiding', false, true, true],
                ['Maandelijks evaluatiegesprek', false, true, true],
                ['Dedicated accountmanager', false, false, true],
                ['Compliance-rapportage', false, false, true],
                ['Capaciteitsplanning vooraf', false, false, true],
              ].map(([feat, b, gg, ai], i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${c.ink200}`, background: i % 2 ? c.white : c.ink50 }}>
                  <td style={{ padding: '14px 16px', color: c.ink700 }}>{feat}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center' }}>{b ? <Check size={18} strokeWidth={2.5} style={{ color: c.green700 }} /> : <span style={{ color: c.ink300 }}>—</span>}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center' }}>{gg ? <Check size={18} strokeWidth={2.5} style={{ color: c.green700 }} /> : <span style={{ color: c.ink300 }}>—</span>}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center' }}>{ai ? <Check size={18} strokeWidth={2.5} style={{ color: c.green700 }} /> : <span style={{ color: c.ink300 }}>—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Vraag & antwoord"
          title="Veelgestelde vragen"
          align="center"
        />
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { q: 'Kan ik wisselen tussen pakketten gedurende het jaar?', a: 'Ja. Veel klanten beginnen met Basis en stappen voor het volgende seizoen over op Gewoon Goed. Tussentijds wisselen kan ook in overleg.' },
            { q: 'Wat zit er niet inbegrepen?', a: 'Werkkleding, persoonlijke beschermingsmiddelen, en bedrijfsspecifieke training blijven uw verantwoordelijkheid. Wij kunnen wel adviseren over inkoop.' },
            { q: 'Hoe werkt huisvesting voor arbeidsmigranten?', a: 'In Gewoon Goed en All-In regelen wij huisvesting binnen ons eigen woningbestand in Noord-Holland Noord. SNF-norm gevolgd. Geen onderhuur via derden.' },
            { q: 'Zijn er minimum-volumes?', a: 'Geen formele minima. Voor zeer kleine projecten (1–2 flexkrachten kortlopend) is een persoonlijk gesprek meestal de meest efficiënte route.' },
          ].map((item, i) => (
            <details key={i} style={{
              borderBottom: `1px solid ${c.ink200}`,
              padding: '20px 0',
            }}>
              <summary style={{
                fontSize: 17, fontWeight: 700, color: c.ink900,
                cursor: 'pointer', listStyle: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span>{item.q}</span>
                <ChevronRight size={20} style={{ color: c.green700 }} />
              </summary>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: c.ink600, marginTop: 12, marginBottom: 0 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}

// =========================================================
// PAGE: Cases (overview)
// =========================================================
export function CasesContent() {
  return (
    <>
      <PageHeader
        eyebrow="Cases"
        title="Wat wij voor onze klanten doen."
        intro="Voorbeeldcases uit drie sectoren. Werkelijke klantnamen, logo's en specifieke cijfers worden toegevoegd zodra publicatietoestemming is geregeld."
      />
      <Section>
        <div className="case-grid-full" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 24,
        }}>
          <CaseCard
            sector="Bollenkwekerij"
            locatie="Schagen"
            schaal="45 ha"
            klantSinds="2019"
            beschrijving="[Voorbeeldcase] Stabiele bezetting van mei-piek over vijf seizoenen."
            resultaat="Jaarlijks 25-45 flexkrachten ingezet in piekweken. Zelfde kerngroep terugkerend, korter inwerktraject, lagere uitval."
          />
          <CaseCard
            sector="Glastuinbouw"
            locatie="Heerhugowaard"
            schaal="12 ha onder glas"
            klantSinds="2021"
            beschrijving="[Voorbeeldcase] Doorlopende inzet plus huisvesting voor zeven medewerkers."
            resultaat="Vaste pool met huisvestingsoplossing. Geen reisproblemen, langere gemiddelde contractduur."
          />
          <CaseCard
            sector="Logistiek"
            locatie="Den Helder"
            schaal="RDC, ~120 medewerkers"
            klantSinds="2020"
            beschrijving="[Voorbeeldcase] Snelle capaciteit bij vakantiepieken en uitval."
            resultaat="Vaste pool van 8–12 flexkrachten beschikbaar binnen 48u. Combinatie met cross-dock werkzaamheden mogelijk."
          />
          <CaseCard
            sector="Facilitair"
            locatie="[VERIFY locatie]"
            schaal="[VERIFY schaal]"
            klantSinds="2022"
            beschrijving="[Voorbeeldcase] Vaste pool voor schoonmaak en hospitality-ondersteuning."
            resultaat="Stabiele weekendinzet, geen no-shows over meerdere kwartalen. Vaste gezichten op locatie."
          />
        </div>
        <p style={{ marginTop: 32, fontSize: 13, color: c.ink500, fontStyle: 'italic' }}>
          Bovenstaande cases zijn voorbeeldcases volgens veiligheidsregel: geen verzonnen klantnamen of citaten. Werkelijke cases worden gepubliceerd zodra publicatietoestemming is geregeld.
        </p>
        <style>{`
          @media (min-width: 768px) {
            .case-grid-full { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </Section>

      <FinalCTA />
    </>
  );
}

// =========================================================
// PAGE: Over ons
// =========================================================
function TeamCard({ name, role, bio }) {
  return (
    <div style={{
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 16,
      padding: 28,
    }}>
      <div style={{ width: 88, height: 88, marginBottom: 20 }}>
        <ImageSlot
          ratio="1/1"
          rounded="full"
          label={`Portret ${name}`}
        />
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: c.ink900, marginBottom: 4 }}>{name}</h3>
      <div style={{ fontSize: 13, color: c.green700, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
        {role}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: c.ink600, marginBottom: 0 }}>{bio}</p>
    </div>
  );
}

export function OverOnsContent() {
  return (
    <>
      <PageHeader
        eyebrow="Over ons"
        title="Drie partners, één team."
        intro="PS-Connect is een familiebedrijf met drie eigenaren. Wij zijn niet de grootste, en willen dat ook niet zijn. Wij zijn de partij die uw bedrijf en uw seizoen kent."
      />

      <Section>
        <SectionHeader eyebrow="Team" title="Wie u tegenkomt." align="left" />
        <div className="team-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 24,
        }}>
          <TeamCard
            name="Pascal"
            role="Partner · Operationeel"
            bio="[Bio in te vullen] Pascal is het eerste aanspreekpunt voor onze klanten. Hij is bij het eerste gesprek, hij is bij de eerste werkdag, en hij belt als er een vraag is."
          />
          <TeamCard
            name="Mark"
            role="Partner · Finance & Compliance"
            bio="[Bio in te vullen] Mark verzorgt de juridische, financiële en compliance-kant. Verantwoordelijk voor SNA-traject, NEN-norm en de eigen back-office."
          />
          <TeamCard
            name="Matthijs"
            role="Partner · Strategie & Groei"
            bio="[Bio in te vullen] Matthijs werkt aan de bredere strategie: klantontwikkeling, sectorale verbreding, en de relatie met opdrachtgevers buiten de kerngroep."
          />
        </div>
        <style>{`
          @media (min-width: 768px) {
            .team-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
        `}</style>
      </Section>

      <Section background={c.ink50}>
        <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Ons verhaal</p>
            <h2 className="display-m" style={{ color: c.ink900, marginBottom: 20 }}>
              Sinds 2022 in Noord-Holland Noord.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: c.ink700, marginBottom: 16 }}>
              [Volledige bedrijfsgeschiedenis in te vullen] PS-Connect ontstond in
              2022 vanuit de overtuiging dat een uitzendpartij die bollen en glas
              kent niet via een 088-callcenter werkt. We zijn doelbewust regionaal
              gebleven en hebben gekozen voor diepte boven breedte.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: c.ink700 }}>
              Vandaag werken wij voor bijna 30 klanten in Noord-Holland Noord. Onze gemiddelde
              klantrelatie loopt al jaren door, omdat we mee weten te bewegen
              met de seizoenen, de markt, en de werkgever.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            <ImageSlot
              ratio="4/3"
              label="VERIFY: team-foto Pascal, Mark en Matthijs of sfeerbeeld vestiging Schagen."
            />
            <StatTile value="2022" label="Opgericht in Noord-Holland Noord" />
            <StatTile value="~30" label="Actieve klanten" />
          </div>
        </div>
        <style>{`
          @media (min-width: 820px) {
            .story-grid { grid-template-columns: 1.4fr 1fr !important; }
          }
        `}</style>
      </Section>

      <RegioSection />

      <Section>
        <SectionHeader
          eyebrow="Certificeringen"
          title="Compliance op orde."
          intro="Wij volgen de geldende sectorale normen. SNA-certificering ronden wij af in 2026."
          align="center"
        />
        <div className="cert-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 16, maxWidth: 720, margin: '0 auto',
        }}>
          <CertBadge title="SNA" subtitle="Stichting Normering Arbeid · in afronding 2026" icon={<Award size={22} />} pending />
          <CertBadge title="NEN 4400-1" subtitle="Norm voor uitleen van arbeid" icon={<Shield size={22} />} />
          <CertBadge title="ABU" subtitle="Lidmaatschap branchevereniging" icon={<FileCheck size={22} />} />
          <CertBadge title="VCU" subtitle="Veiligheid voor uitzendorganisaties" icon={<Shield size={22} />} />
        </div>
        <style>{`
          @media (min-width: 600px) {
            .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </Section>

      <FinalCTA />
    </>
  );
}

// =========================================================
// PAGE: Vacatures
// =========================================================
function VacatureCard({ title, sector, locatie, type, href }) {
  return (
    <a href={href} style={{
      display: 'block',
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 14,
      padding: 24,
      textDecoration: 'none',
      color: c.ink900,
      transition: 'border-color 220ms cubic-bezier(0.22,1,0.36,1)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.green700; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.ink200; }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 12 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: c.ink900, marginBottom: 0 }}>{title}</h3>
        <ChevronRight size={20} style={{ color: c.green700, flexShrink: 0, marginTop: 2 }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <span style={{
          fontSize: 12, fontWeight: 600, color: c.green800,
          background: c.green100, padding: '4px 10px', borderRadius: 999,
        }}>{sector}</span>
        <span style={{
          fontSize: 12, fontWeight: 600, color: c.ink600,
          background: c.ink100, padding: '4px 10px', borderRadius: 999,
        }}>{locatie}</span>
        <span style={{
          fontSize: 12, fontWeight: 600, color: c.ink600,
          background: c.ink100, padding: '4px 10px', borderRadius: 999,
        }}>{type}</span>
      </div>
    </a>
  );
}

export function VacaturesContent() {
  const vacatures = [
    { title: 'Medewerker bollensorteerlijn', sector: 'Bollenteelt', locatie: 'Schagen', type: 'Seizoenswerk' },
    { title: 'Orderpicker', sector: 'Logistiek', locatie: 'Den Helder', type: 'Doorlopend' },
    { title: 'Medewerker glasgroenten', sector: 'Glastuinbouw', locatie: 'Heerhugowaard', type: 'Seizoenswerk' },
    { title: 'Medewerker schoonmaak / hospitality', sector: 'Facilitair', locatie: '[VERIFY locatie]', type: 'Vast/projectbasis' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Vacatures"
        title="Werk in agri, tuinbouw, logistiek en facilitair."
        intro="Wij werken voor bijna 30 werkgevers in Noord-Holland Noord. Hieronder enkele voorbeeldvacatures — actuele openstaande functies worden via deze pagina bijgewerkt."
      />
      <Section>
        <div style={{ marginBottom: 32, fontSize: 14, color: c.ink500, fontStyle: 'italic' }}>
          [Voorbeeldvacatures · werkelijke openstaande functies worden hier geplaatst. Voor v1 dient deze pagina als template.]
        </div>
        <div className="vac-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 16,
        }}>
          {vacatures.map((v, i) => (
            <VacatureCard key={i} {...v} href="/contact?onderwerp=vacature" />
          ))}
        </div>
        <style>{`
          @media (min-width: 700px) {
            .vac-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </Section>

      <Section background={c.green50}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>Niets vinden?</p>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: c.ink900, marginBottom: 16 }}>
            Schrijf u in bij ons bestand.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink700, marginBottom: 24 }}>
            Wij plaatsen lang niet alles online. Als u zich aanmeldt, nemen we contact op wanneer er een passende functie bij een van onze klanten openstaat.
          </p>
          <a href="/contact?onderwerp=inschrijving" className="btn btn-primary">
            Aanmelden flexkracht <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </Section>
    </>
  );
}

// =========================================================
// PAGE: Werken bij PS-Connect
// =========================================================
export function WerkenBijContent() {
  return (
    <>
      <PageHeader
        eyebrow="Werken bij PS-Connect"
        title="Werk in Noord-Holland Noord, met huisvesting als dat helpt."
        intro="Wij koppelen flexkrachten aan bijna 30 werkgevers in Noord-Holland Noord. Voor wie van buiten komt, regelen wij huisvesting binnen ons eigen woningbestand of via vaste partners."
      />

      <Section>
        <div className="wb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          <Benefit icon={<Briefcase size={26} />} title="Echt werk, echte werkgevers"
            body="Wij sturen u niet de stad door tussen acht verschillende uitzendpartijen. U werkt voor één van onze klanten in de regio, met een vast aanspreekpunt." />
          <Benefit icon={<HomeIcon size={26} />} title="Huisvesting voor wie van buiten komt"
            body="Eigen woningbestand in Noord-Holland Noord. SNF-norm waar van toepassing. Geen onderhuur, geen Airbnb-improvisatie." />
          <Benefit icon={<Heart size={26} />} title="Korte lijn"
            body="Geen 088-callcenter. Pascal of Mark is bereikbaar als er iets is met uw loon, uw rooster of uw huisvesting." />
          <Benefit icon={<Building2 size={26} />} title="Doorgroeimogelijkheid"
            body="Veel van onze flexkrachten beginnen seizoenswerk en gaan door naar vaste contracten bij dezelfde werkgever. Wij begeleiden waar dat past." />
        </div>
        <style>{`
          @media (min-width: 700px) {
            .wb-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </Section>

      <Section background={c.green50}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 className="display-m" style={{ color: c.ink900, marginBottom: 20 }}>
            Klaar om aan de slag te gaan?
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: c.ink700, marginBottom: 28 }}>
            Bekijk onze actuele vacatures of schrijf u in bij ons bestand voor nog niet-gepubliceerde functies.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/vacatures" className="btn btn-primary">
              Vacatures bekijken <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a href="/contact?onderwerp=inschrijving" className="btn btn-secondary">
              Aanmelden
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function Benefit({ icon, title, body }) {
  return (
    <div style={{
      background: c.white,
      border: `1px solid ${c.ink200}`,
      borderRadius: 14,
      padding: 28,
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: c.green100, color: c.green800,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 18,
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: c.ink900, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: c.ink600, marginBottom: 0 }}>{body}</p>
    </div>
  );
}

// =========================================================
// PAGE: Contact (with Netlify Forms)
// =========================================================
export function ContactContent() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Offerte? Vraag? Inschrijving?"
        intro="Vul het formulier in of bel direct. Pascal of Mark belt u dezelfde werkdag terug."
      />
      <Section>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: c.ink900, marginBottom: 24 }}>Direct contact</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ContactBlock icon={<Phone size={20} />} title="Telefoon"
                primary="[Telefoonnummer]"
                secondary="Maandag t/m vrijdag, 8.00–17.30" />
              <ContactBlock icon={<Mail size={20} />} title="E-mail"
                primary="info@ps-connect.nl"
                secondary="Reactie binnen 1 werkdag" />
              <ContactBlock icon={<MapPin size={20} />} title="Vestiging"
                primary="[Vestigingsadres]"
                secondary="Den Helder / Alkmaar regio" />
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: c.green50,
            border: `1px solid ${c.green200}`,
            borderRadius: 16,
            padding: 32,
          }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: c.ink900, marginBottom: 8 }}>
              Stuur ons een bericht
            </h2>
            <p style={{ fontSize: 14, color: c.ink600, marginBottom: 24 }}>
              Wij nemen dezelfde werkdag contact op.
            </p>

            {/* Netlify Forms — works out of the box on Netlify */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact?status=verzonden"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Niet invullen: <input name="bot-field" /></label>
              </p>

              <FormField label="Naam" name="naam" required />
              <FormField label="Bedrijf" name="bedrijf" />
              <FormField label="E-mail" name="email" type="email" required />
              <FormField label="Telefoonnummer" name="telefoon" type="tel" />

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: c.ink700, marginBottom: 6 }}>
                  Onderwerp
                </label>
                <select name="onderwerp" style={fieldStyle}>
                  <option>Offerte aanvragen</option>
                  <option>Algemene vraag</option>
                  <option>Inschrijving flexkracht</option>
                  <option>Vacature-vraag</option>
                  <option>Anders</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: c.ink700, marginBottom: 6 }}>
                  Uw bericht
                </label>
                <textarea name="bericht" rows={5} style={{ ...fieldStyle, fontFamily: 'inherit', resize: 'vertical' }} required />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Versturen <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>
        <style>{`
          @media (min-width: 820px) {
            .contact-grid { grid-template-columns: 1fr 1.4fr !important; }
          }
        `}</style>
      </Section>
    </>
  );
}

const fieldStyle = {
  width: '100%',
  padding: '12px 14px',
  fontSize: 15,
  border: `1px solid ${c.ink200}`,
  borderRadius: 10,
  background: c.white,
  color: c.ink900,
  outline: 'none',
};

function FormField({ label, name, type = 'text', required }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: c.ink700, marginBottom: 6 }}>
        {label}{required && <span style={{ color: c.danger, marginLeft: 4 }}>*</span>}
      </label>
      <input type={type} name={name} required={required} style={fieldStyle} />
    </div>
  );
}

function ContactBlock({ icon, title, primary, secondary }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: c.green100, color: c.green800,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.ink500, marginBottom: 4 }}>
          {title}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: c.ink900, marginBottom: 2 }}>{primary}</div>
        <div style={{ fontSize: 14, color: c.ink600 }}>{secondary}</div>
      </div>
    </div>
  );
}
