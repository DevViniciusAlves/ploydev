import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import FAQ from '../components/FAQ.jsx';
import MagneticLink from '../components/MagneticLink.jsx';
import { SITE, createWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/site.js';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contato e orçamento | PloyDev"
        description="Fale com a PloyDev no WhatsApp e receba um orçamento para criação de sites, landing pages e projetos web sob medida."
        path="/contato"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Contato
          </p>
          <RevealText
            as="h1"
            className="page-title"
            text="Vamos conversar sobre o seu projeto."
          />
          <p className="page-lead" data-reveal>
            O caminho mais rápido é o WhatsApp. Conte o objetivo do projeto e receba um
            escopo com prazo, entregáveis e valor.
          </p>
          <div className="contact-page-cta" data-reveal>
            <MagneticLink
              className="button-primary button-large"
              href={createWhatsAppUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noreferrer"
              ariaLabel={`Falar no WhatsApp ${SITE.whatsappDisplay}`}
            >
              Falar no WhatsApp · {SITE.whatsappDisplay}
            </MagneticLink>
          </div>
        </section>

        <section className="section-shell split" aria-label="Como funciona o contato">
          <h2 data-reveal>O que enviar</h2>
          <ul className="check-list">
            <li data-reveal>O que sua empresa faz</li>
            <li data-reveal>O objetivo da página ou projeto</li>
            <li data-reveal>Referências do que você gosta, se tiver</li>
            <li data-reveal>Prazo ideal para colocar no ar</li>
          </ul>
        </section>

        <section className="help section-shell" aria-label="Perguntas frequentes">
          <h2 className="section-title-sm" data-reveal>
            Antes de chamar
          </h2>
          <FAQ />
        </section>
      </main>
    </>
  );
}
