import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import TransitionLink from '../components/TransitionLink.jsx';
import { WHATSAPP_MESSAGES } from '../config/site.js';

export default function CaseOrvalho() {
  return (
    <>
      <SEO
        title="Case Orvalho Chalés | Site institucional para hospedagem | PloyDev"
        description="Conheça o case Orvalho Chalés, site institucional desenvolvido para apresentar os chalés, a estrutura e facilitar reservas e contato."
        path="/projetos/orvalho"
        image="/projects/orvalho.png"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Site institucional · Hospedagem
          </p>
          <RevealText as="h1" className="page-title" text="Orvalho Chalés" />
          <p className="page-lead" data-reveal>
            Site desenvolvido para apresentar os chalés, a estrutura e facilitar reservas e
            contato.
          </p>
          <div className="case-hero-links" data-reveal>
            <a
              href="https://orvalho-rosy.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Abrir projeto ↗︎
            </a>
            <TransitionLink to="/projetos/gendaz" className="button-secondary">
              Ver próximo case →︎
            </TransitionLink>
          </div>
        </section>

        <section className="section-shell case-media-large" data-reveal>
          <picture>
            <source srcSet="/projects/orvalho.webp" type="image/webp" />
            <img
              src="/projects/orvalho.png"
              alt="Tela real do site Orvalho Chalés"
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
            Negócios de hospedagem precisam mostrar o espaço com clareza: os chalés, a
            estrutura e as formas de reservar. O site do Orvalho Chalés foi criado para
            concentrar essa apresentação em uma experiência direta.
          </p>
        </section>

        <section className="section-shell split" aria-label="Solução">
          <h2 data-reveal>Solução</h2>
          <p data-reveal>
            Um site institucional com apresentação dos chalés, destaque para a estrutura e
            caminho claro até a reserva e o contato.
          </p>
        </section>

        <section className="section-shell split" aria-label="O que foi construído">
          <h2 data-reveal>O que foi construído</h2>
          <ul className="check-list">
            <li data-reveal>Apresentação dos chalés</li>
            <li data-reveal>Destaque para a estrutura</li>
            <li data-reveal>Caminho direto para reserva e contato</li>
            <li data-reveal>Experiência responsiva</li>
          </ul>
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Quer apresentar melhor o seu negócio?
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
