import {
  Hero,
  SectorenSection,
  RegioSection,
  WerkwijzeSection,
  PakkettenSection,
  CasesPreviewSection,
  FinalCTA,
} from '../components/site';

export const metadata = {
  title: 'PS-Connect — Uitzendpartner agri, glastuinbouw en logistiek in Noord-Holland Noord',
  description: 'Sinds 2022 koppelen wij bijna 30 werkgevers in Noord-Holland Noord aan gemotiveerde flexkrachten. Huisvesting geregeld, eigen back-office.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorenSection />
      <RegioSection />
      <WerkwijzeSection />
      <PakkettenSection />
      <CasesPreviewSection />
      <FinalCTA />
    </>
  );
}
