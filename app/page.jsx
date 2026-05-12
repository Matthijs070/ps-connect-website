import {
  Hero,
  SectorenSection,
  WerkwijzeSection,
  PakkettenSection,
  CasesPreviewSection,
  FinalCTA,
} from '../components/site';

export const metadata = {
  title: 'PS-Connect — Uitzendpartner agri, glastuinbouw en logistiek in Noord-Holland',
  description: 'Sinds 2022 koppelen wij 19 werkgevers in Noord-Holland aan gemotiveerde flexkrachten. Eigen huisvesting, eigen back-office.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorenSection />
      <WerkwijzeSection />
      <PakkettenSection />
      <CasesPreviewSection />
      <FinalCTA />
    </>
  );
}
