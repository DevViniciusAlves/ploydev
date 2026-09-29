import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import TransitionLink from '../components/TransitionLink.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import { WHATSAPP_MESSAGES } from '../config/site.js';

const services = [
  {
    title: 'Site institucional',
    text: 'Apresente sua empresa, serviços, diferenciais e canais de contato em uma experiência profissional e responsiva.',
    to: '/criacao-de-sites',
  },
  {
    title: 'Landing page',
    text: 'Página focada em apresentar uma oferta, campanha, serviço ou produto com uma jornada clara até o contato.',
    to: '/landing-pages',
  },
  {
    title: 'Redesign',
    text: 'Atualização visual, estrutural e técnica para sites que já existem, mas deixaram de representar bem o negócio.',
    to: '/contato',
  },
  {
    title: 'Projeto web personalizado',
    text: 'Interfaces e experiências digitais construídas conforme uma necessidade específica do negócio.',
    to: '/contato',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Serviços de desenvolvimento web | PloyDev"
        description="Conheça os serviços da PloyDev: criação de sites institucionais, landing pages, redesign e projetos web personalizados."
        path="/servicos"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Serviços
          </p>
          <RevealText
            as="h1"
            className="page-title"
            text="Desenvolvimento web pensado para representar melhor o seu negócio."
          />
          <p className="page-lead" data-reveal>
            Quatro frentes de trabalho, um mesmo cuidado: estrutura clara, interface
            profissional e caminho direto até o contato.
          </p>
        </section>

        <section className="section-shell services-grid" aria-label="Lista de serviços">
          {services.map((service) => (
            <TransitionLink key={service.title} to={service.to} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <span className="service-card-link">
                Entender melhor <span className="case-link-arrow" aria-hidden="true">→︎</span>
              </span>
            </TransitionLink>
          ))}
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Não sabe qual formato faz sentido?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Descreva o objetivo e a gente sugere o caminho."
            />
            <WhatsAppCTA message={WHATSAPP_MESSAGES.default} />
          </div>
        </section>
      </main>
    </>
  );
}
