import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import FAQ from '../components/FAQ.jsx';
import ArrowIcon from '../components/ArrowIcon.jsx';
import { SITE, createWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/site.js';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contato e orçamento | PloyDev"
        description="Entre em contato com a PloyDev pelo WhatsApp ou e-mail para conversar sobre criação de sites, landing pages e projetos web sob medida."
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
            Fale com a PloyDev pelo WhatsApp ou por e-mail. Conte o que você precisa e
            retornamos com os próximos passos do projeto.
          </p>

          <div className="contact-options">
            <a
              className="contact-option"
              href={createWhatsAppUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noreferrer"
              data-reveal
              aria-label={`Falar com a PloyDev no WhatsApp ${SITE.whatsappDisplay}`}
            >
              <span className="contact-option-head">
                <span className="contact-option-label">WhatsApp</span>
                <svg
                  className="contact-option-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v7a3.5 3.5 0 0 1-3.5 3.5H12l-4.2 3.1a.6.6 0 0 1-1-.5V17H7.5A3.5 3.5 0 0 1 4 13.5v-7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 9.5h7M8.5 12.5h4.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="contact-option-title">Fale com a gente</span>
              <span className="contact-option-value">
                {SITE.whatsappDisplay}
                <span className="contact-option-arrow" aria-hidden="true">
                  <ArrowIcon direction="up-right" />
                </span>
              </span>
            </a>

            <a
              className="contact-option"
              href={`mailto:${SITE.email}`}
              data-reveal
              aria-label={`Enviar e-mail para ${SITE.email}`}
            >
              <span className="contact-option-head">
                <span className="contact-option-label">E-mail</span>
                <svg
                  className="contact-option-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3.5"
                    y="5.5"
                    width="17"
                    height="13"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m5 7.5 7 5 7-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-option-title">Envie sua ideia</span>
              <span className="contact-option-value">
                {SITE.email}
                <span className="contact-option-arrow" aria-hidden="true">
                  <ArrowIcon direction="up-right" />
                </span>
              </span>
            </a>
          </div>
        </section>

        <section className="dark-band" aria-label="Como funciona o contato">
          <div className="section-shell split">
            <h2 data-reveal>O que enviar</h2>
            <ul className="check-list">
              <li data-reveal>O que sua empresa faz</li>
              <li data-reveal>O objetivo da página ou projeto</li>
              <li data-reveal>Referências do que você gosta, se tiver</li>
              <li data-reveal>Prazo ideal para colocar no ar</li>
            </ul>
          </div>
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
