import './globals.css';
import { Nav, Footer } from '../components/site';

export const metadata = {
  title: 'PS-Connect — Uitzendpartner Noord-Holland',
  description: 'Uitzendbureau voor agri, glastuinbouw en logistiek in Noord-Holland. Sinds 2022.',
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
