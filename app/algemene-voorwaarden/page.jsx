import { PageHeader, Section } from '../../components/site';

export const metadata = {
  title: 'Algemene voorwaarden — PS-Connect',
  description: 'Algemene voorwaarden van PS-Connect B.V.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wettelijk"
        title="Algemene voorwaarden"
        intro="De volledige algemene voorwaarden worden vóór launch toegevoegd. Deze pagina dient als placeholder zodat de footer-link werkt."
      />
      <Section>
        <div style={{ maxWidth: 720, color: '#4A5A50', fontSize: 16, lineHeight: 1.6 }}>
          <p><em>[Inhoud wordt vóór launch toegevoegd. Doorgaans gebaseerd op de ABU-voorwaarden voor uitzendondernemingen.]</em></p>
          <p>
            Onze dienstverlening valt onder de ABU-voorwaarden voor
            uitzendondernemingen, aangevuld met onze eigen contractuele afspraken
            met klanten. Volledige tekst beschikbaar op aanvraag.
          </p>
        </div>
      </Section>
    </>
  );
}
