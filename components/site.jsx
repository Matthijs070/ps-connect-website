// =========================================================
// PS-Connect website — central component library
// All page components live here. Pages in app/ import from this file.
//
// `c` is the JS mirror of design-system/colors_and_type.css.
// Use for inline style overrides; the CSS file remains source of truth.
// =========================================================

export const c = {
  // Brand greens
  green900: '#0E5A23',
  green800: '#128A2F',
  green700: '#1AA63A',
  green600: '#25C04A',
  green500: '#3BD962',
  green400: '#5FE883',
  green300: '#97F2AE',
  green200: '#C9F8D6',
  green100: '#E8FBEE',
  green50:  '#F4FDF7',

  // Amber accent (Fase 2)
  amber700: '#B97309',
  amber600: '#D08410',
  amber500: '#F59E0B',
  amber100: '#FEF3C7',
  amber50:  '#FFFBEB',

  // Neutrals (cool slate)
  ink900: '#0F1A14',
  ink800: '#1C2A22',
  ink700: '#2E3B33',
  ink600: '#4A5A50',
  ink500: '#6B7A71',
  ink400: '#94A19A',
  ink300: '#BFC8C2',
  ink200: '#DDE3DF',
  ink100: '#EEF1EF',
  ink50:  '#F7F8F7',
  white:  '#FFFFFF',

  // Semantic
  success: '#1AA63A',
  warning: '#E8A93C',
  danger:  '#D94A3B',
  info:    '#2C7BD9',
};

// =========================================================
// Nav — placeholder. Replaced with full nav in Stap 3.2.
// =========================================================
export function Nav() {
  return (
    <nav style={{
      padding: '20px 24px',
      borderBottom: `1px solid ${c.ink200}`,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: c.green800,
      letterSpacing: '-0.02em',
    }}>
      PS-Connect
    </nav>
  );
}

// =========================================================
// Footer — placeholder. Replaced with full footer later.
// =========================================================
export function Footer() {
  return (
    <footer style={{
      padding: '40px 24px',
      borderTop: `1px solid ${c.ink200}`,
      color: c.ink500,
      fontSize: 14,
      textAlign: 'center',
    }}>
      © {new Date().getFullYear()} PS-Connect B.V.
    </footer>
  );
}
