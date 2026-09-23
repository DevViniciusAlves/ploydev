import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import FAQ from '../components/FAQ.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import { WHATSAPP_MESSAGES } from '../config/site.js';

const faqItems = [
  [
    'Quando uma landing page faz sentido?',
    'Quando existe uma oferta, campanha, serviço ou produto específico que precisa de uma página focada em levar o visitante até o contato.',
  ],
  [
    'Qual a diferença para um site institucional?',
    'O site apresenta a empresa como um todo. A landing page concentra a atenção em uma única ação.',
  ],
  [
    'A página fica responsiva?',
    'Sim. A maior parte do tráfego costuma vir do mobile, então a versão móvel recebe atenção prioritária.',
  ],
  [
    'Como funciona o orçamento?',
    'Você chama no WhatsApp, explica a oferta e recebe um escopo com estrutura, prazo e valor.',
  ],
];

export default function ServiceLandingPages() {
  return (
    <>
      <SEO
        title="Criação de landing pages profissionais | PloyDev"
        description="Landing pages responsivas e sob medida para apresentar serviços, campanhas e ofertas com uma jornada clara até o contato."
        path="/landing-pages"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Landing pages
          </p>
          <RevealText
            as="h1"
            className="page-title"
            text="Landing pages construídas para transformar atenção em ação."
          />
          <p className="page-lead" data-reveal>
            Uma página, uma oferta, um caminho claro. Estrutura direta para apresentar o
            serviço e facilitar o contato no WhatsApp.
          </p>
          <div data-reveal>
            <WhatsAppCTA message={WHATSAPP_MESSAGES.landing} label="Conversar sobre uma landing page" />
          </div>
        </section>

        <section className="section-shell split" aria-label="Estrutura">
          <h2 data-reveal>Estrutura típica</h2>
          <ul className="check-list">
            <li data-reveal>Apresentação direta da oferta</li>
            <li data-reveal>Benefícios e diferenciais organizados</li>
            <li data-reveal>Prova e contexto do negócio</li>
            <li data-reveal>Chamadas para contato ao longo da página</li>
            <li data-reveal>Versão mobile priorizada</li>
          </ul>
        </section>

        <section className="section-shell split" aria-label="Como funciona">
          <h2 data-reveal>Como funciona</h2>
          <p data-reveal>
            Entendemos a oferta e o público, definimos a estrutura da página, construímos a
            experiência responsiva e publicamos. Sem seções genéricas, sem enrolação.
          </p>
        </section>

        <section className="help section-shell" aria-label="Perguntas frequentes">
          <h2 className="section-title-sm" data-reveal>
            Perguntas frequentes
          </h2>
          <FAQ items={faqItems} />
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Tem uma oferta para divulgar?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Vamos construir a página que leva até a conversa."
            />
            <WhatsAppCTA
              message={WHATSAPP_MESSAGES.landing}
              label="Conversar sobre uma landing page"
            />
          </div>
        </section>
      </main>
    </>
  );
}
