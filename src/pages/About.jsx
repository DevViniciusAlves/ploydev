import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import { WHATSAPP_MESSAGES } from '../config/site.js';

export default function About() {
  return (
    <>
      <SEO
        title="Sobre a PloyDev | Desenvolvimento web"
        description="Conheça a PloyDev, estúdio de desenvolvimento web focado na criação de sites, landing pages e experiências digitais sob medida."
        path="/sobre"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Sobre
          </p>
          <RevealText
            as="h1"
            className="page-title"
            text="Um estúdio pequeno, com padrão alto de entrega."
          />
        </section>

        <section className="dark-band" aria-label="Sobre a PloyDev">
          <div className="section-shell about-body">
            <p data-reveal>
              A PloyDev é um estúdio de desenvolvimento web focado em criar experiências
              digitais profissionais para empresas que querem apresentar melhor o próprio
              negócio.
            </p>
            <p data-reveal>
              Cada projeto começa entendendo o que a página precisa resolver. A partir disso,
              estrutura, interface, responsividade e desenvolvimento são construídos de forma
              integrada.
            </p>
            <p data-reveal>
              A proposta é evitar tanto o excesso visual quanto soluções genéricas. Cada
              decisão precisa ter um motivo claro para existir.
            </p>
          </div>
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Quer trabalhar com a PloyDev?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Vamos conversar sobre o seu projeto."
            />
            <WhatsAppCTA message={WHATSAPP_MESSAGES.default} />
          </div>
        </section>
      </main>
    </>
  );
}
