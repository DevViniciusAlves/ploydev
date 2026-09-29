import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import TransitionLink from '../components/TransitionLink.jsx';
import { WHATSAPP_MESSAGES } from '../config/site.js';

export default function CaseGendaz() {
  return (
    <>
      <SEO
        title="Case gendaz | Desenvolvimento de produto web | PloyDev"
        description="Conheça o case gendaz, plataforma web para gestão de agenda, clientes, financeiro e relacionamento."
        path="/projetos/gendaz"
        image="/projects/gendaz.png"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            SaaS · Produto digital
          </p>
          <RevealText as="h1" className="page-title" text="gendaz" />
          <p className="page-lead" data-reveal>
            Uma plataforma web criada para centralizar a operação de negócios que trabalham
            com atendimento.
          </p>
          <div className="case-hero-links" data-reveal>
            <a
              href="https://gendaz.site/"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Abrir projeto ↗︎
            </a>
            <TransitionLink to="/projetos/bakuri" className="button-secondary">
              Ver próximo case →︎
            </TransitionLink>
          </div>
        </section>

        <section className="section-shell case-media-large" data-reveal>
          <picture>
            <source srcSet="/projects/gendaz.webp" type="image/webp" />
            <img
              src="/projects/gendaz.png"
              alt="Tela real do gendaz, plataforma web para gestão de negócios de atendimento"
              loading="eager"
              decoding="async"
              width="1280"
              height="800"
            />
          </picture>
        </section>

        <section className="section-shell split" aria-label="Contexto">
          <h2 data-reveal>Contexto</h2>
          <p data-reveal>
            Negócios de atendimento costumam espalhar a operação entre agenda, planilhas,
            mensagens e controles financeiros separados. O gendaz nasceu para reunir essas
            frentes em uma única experiência web.
          </p>
        </section>

        <section className="section-shell split" aria-label="Desafio">
          <h2 data-reveal>Desafio</h2>
          <p data-reveal>
            Organizar agenda, clientes, financeiro e relacionamento sem transformar a
            ferramenta em algo pesado ou difícil de usar no dia a dia.
          </p>
        </section>

        <section className="section-shell split" aria-label="Solução">
          <h2 data-reveal>Solução</h2>
          <p data-reveal>
            Uma plataforma web com navegação clara, telas organizadas por área da operação e
            foco em uso contínuo: abrir, resolver, seguir o dia.
          </p>
        </section>

        <section className="section-shell split" aria-label="O que foi construído">
          <h2 data-reveal>O que foi construído</h2>
          <ul className="check-list">
            <li data-reveal>Gestão de agenda e atendimentos</li>
            <li data-reveal>Organização de clientes e relacionamento</li>
            <li data-reveal>Visão financeira da operação</li>
            <li data-reveal>Interface responsiva para uso diário</li>
          </ul>
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Quer algo nesse padrão?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Vamos conversar sobre o seu projeto."
            />
            <WhatsAppCTA message={WHATSAPP_MESSAGES.project} />
          </div>
        </section>
      </main>
    </>
  );
}
