import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import MagneticLink from '../components/MagneticLink.jsx';
import TransitionLink from '../components/TransitionLink.jsx';
import FAQ from '../components/FAQ.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import HoverExpand from '../components/HoverExpand.jsx';
import TechMarquee from '../components/TechMarquee.jsx';
import { projects } from '../data/projects.js';
import { SITE, createWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/site.js';

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
    to: '/servicos',
  },
  {
    title: 'Projeto web personalizado',
    text: 'Interfaces e experiências digitais construídas conforme uma necessidade específica do negócio.',
    to: '/servicos',
  },
];

const process = [
  ['01', 'Conversa', 'Entendemos o negócio, público e objetivo.'],
  ['02', 'Escopo', 'Definimos páginas, funcionalidades e entregáveis.'],
  ['03', 'Direção', 'Organizamos estrutura e linguagem visual.'],
  ['04', 'Desenvolvimento', 'Construímos a experiência responsiva e validamos os fluxos.'],
  ['05', 'Publicação', 'Fazemos ajustes finais e colocamos o projeto no ar.'],
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'PloyDev',
  url: SITE.url,
  description: SITE.description,
  areaServed: { '@type': 'Country', name: 'Brazil' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55 65 99336-0300',
    contactType: 'sales',
    availableLanguage: 'Portuguese',
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="PloyDev | Criação de sites profissionais"
        description="Criação de sites profissionais, landing pages e experiências web sob medida para empresas que querem fortalecer sua presença digital."
        path="/"
        schema={schema}
      />

      <main>
        <section className="hero section-shell">
          <p className="hero-kicker" data-reveal style={{ '--reveal-delay': '0ms' }}>
            Design e desenvolvimento web · Brasil
          </p>

          <div className="hero-copy">
            <RevealText
              as="h1"
              className="hero-title"
              text="Sites profissionais para transformar presença digital em confiança e novos clientes."
            />
          </div>

          <p className="hero-support" data-reveal style={{ '--reveal-delay': '320ms' }}>
            Criamos sites institucionais, landing pages e experiências web sob medida para
            empresas que querem apresentar melhor o negócio e facilitar o contato com novos
            clientes.
          </p>

          <div className="hero-ctas" data-reveal style={{ '--reveal-delay': '440ms' }}>
            <MagneticLink
              className="button-primary"
              href={createWhatsAppUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noreferrer"
              ariaLabel="Solicitar orçamento no WhatsApp"
            >
              Solicitar orçamento
            </MagneticLink>
            <TransitionLink to="/projetos" className="button-secondary">
              Ver projetos <span aria-hidden="true">→︎</span>
            </TransitionLink>
          </div>

          <div className="hero-mark" aria-hidden="true" data-parallax="0.06">
            <span className="mark-left" />
            <span className="mark-right" />
          </div>
        </section>

        <TechMarquee />

        <section className="manifesto section-shell">
          <div className="manifesto-label" data-reveal>
            Posicionamento
          </div>
          <RevealText
            as="p"
            className="manifesto-text"
            text="Um bom site não precisa gritar. Precisa ter clareza, ritmo e intenção."
          />
        </section>

        <section className="work section-shell" aria-label="Projetos selecionados">
          <div className="section-head">
            <div className="section-number" data-reveal>
              01
            </div>
            <div>
              <p className="eyebrow" data-reveal>
                Projetos selecionados
              </p>
              <RevealText
                as="h2"
                className="section-title"
                text="Projetos reais, apresentados com o cuidado que eles merecem."
              />
            </div>
          </div>

          <HoverExpand items={projects} />
        </section>

        <section className="services section-shell" aria-label="Serviços">
          <div className="section-head">
            <div className="section-number" data-reveal>
              02
            </div>
            <div>
              <p className="eyebrow" data-reveal>
                Serviços
              </p>
              <RevealText
                as="h2"
                className="section-title"
                text="O que podemos construir para sua empresa."
              />
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <TransitionLink key={service.title} to={service.to} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-card-link">
                  Entender melhor <span className="case-link-arrow" aria-hidden="true">→︎</span>
                </span>
              </TransitionLink>
            ))}
          </div>
        </section>

        <section className="process section-shell" aria-label="Processo">
          <div className="section-head">
            <div className="section-number" data-reveal>
              03
            </div>
            <div>
              <p className="eyebrow" data-reveal>
                Processo
              </p>
              <RevealText
                as="h2"
                className="section-title"
                text="Sem mistério entre o primeiro oi e o site no ar."
              />
            </div>
          </div>
          <div className="process-list">
            {process.map(([n, title, text]) => (
              <article className="process-row" data-reveal key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-about section-shell" aria-label="Sobre resumido">
          <div className="section-head">
            <div className="section-number" data-reveal>
              04
            </div>
            <div>
              <p className="eyebrow" data-reveal>
                Sobre a PloyDev
              </p>
              <RevealText
                as="h2"
                className="section-title"
                text="Desenvolvimento com começo, meio e fim."
              />
            </div>
          </div>
          <div className="home-about-grid">
            <p data-reveal>
              A PloyDev é um estúdio de desenvolvimento web focado em criar experiências
              digitais profissionais para empresas que querem apresentar melhor o próprio
              negócio. Cada projeto começa entendendo o que a página precisa resolver.
            </p>
            <TransitionLink to="/sobre" className="case-link" data-reveal>
              Conhecer o estúdio <span className="case-link-arrow" aria-hidden="true">→︎</span>
            </TransitionLink>
          </div>
        </section>

        <section className="help section-shell" aria-label="Perguntas frequentes">
          <div className="section-head">
            <div className="section-number" data-reveal>
              05
            </div>
            <div>
              <p className="eyebrow" data-reveal>
                Ajuda
              </p>
              <RevealText
                as="h2"
                className="section-title"
                text="Perguntas que vale responder antes de começar."
              />
            </div>
          </div>
          <FAQ />
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Tem um projeto em mente?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Conta pra gente o que você quer colocar no ar."
            />
            <WhatsAppCTA message={WHATSAPP_MESSAGES.default} />
          </div>
        </section>
      </main>
    </>
  );
}
