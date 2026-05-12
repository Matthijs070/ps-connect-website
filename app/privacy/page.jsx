import { PageHeader, Section } from '../../components/site';

export const metadata = {
  title: 'Privacyverklaring — PS-Connect',
  description: 'Privacyverklaring van PS-Connect B.V.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wettelijk"
        title="Privacyverklaring"
        intro="De volledige privacyverklaring wordt vóór launch toegevoegd. Deze pagina dient als placeholder zodat de footer-link werkt."
      />
      <Section>
        <div style={{ maxWidth: 720, color: '#4A5A50', fontSize: 16, lineHeight: 1.6 }}>
          <p><em>[Inhoud wordt vóór launch toegevoegd in samenwerking met de jurist.]</em></p>
          <p>
            PS-Connect verwerkt persoonsgegevens van werkgevers, flexkrachten en
            websitebezoekers. Wij houden ons aan de Algemene Verordening
            Gegevensbescherming (AVG/GDPR). Voor vragen kunt u contact opnemen
            via info@ps-connect.nl.
          </p>
        </div>
      </Section>
    </>
  );
}
