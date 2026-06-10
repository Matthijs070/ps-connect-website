import './globals.css';
import { Nav, Footer } from '../components/site';

export const metadata = {
  title: 'PS-Connect — Uitzendpartner Noord-Holland Noord',
  description: 'Uitzendbureau voor openteelt en (glas)tuinbouw, logistiek & distributie en facilitair in Noord-Holland Noord. Sinds 2022.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
