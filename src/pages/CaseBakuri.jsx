import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import TransitionLink from '../components/TransitionLink.jsx';
import { WHATSAPP_MESSAGES } from '../config/site.js';

export default function CaseBakuri() {
  return (
    <>
      <SEO
        title="Case Bakuri | Aplicação web para gestão de pedidos | PloyDev"
        description="Conheça o case Bakuri, aplicação web desenvolvida para organizar e acompanhar pedidos com uma experiência simples e objetiva."
        path="/projetos/bakuri"
        image="/projects/bakuri.png"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Case 02 · Aplicação web · Gestão de pedidos
          </p>
          <RevealText as="h1" className="page-title" text="Bakuri" />
          <p className="page-lead" data-reveal>
            Aplicação web desenvolvida para organizar e acompanhar pedidos com uma interface
            simples e direta para a operação.
          </p>
          <div className="case-hero-links" data-reveal>
            <a
              href="https://mvpbakuri-4dok.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Abrir projeto ↗
            </a>
            <TransitionLink to="/projetos/gendaz" className="button-secondary">
              Ver case gendaz →
            </TransitionLink>
          </div>
        </section>

        <section className="section-shell case-media-large" data-reveal>
          <picture>
            <source srcSet="/projects/bakuri.webp" type="image/webp" />
            <img
              src="/projects/bakuri.png"
              alt="Tela real do Bakuri, aplicação web para organização de pedidos"
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
            A operação de pedidos pede clareza: saber o que entrou, o que está em andamento
            e o que precisa de atenção, sem fricção.
          </p>
        </section>

        <section className="section-shell split" aria-label="Solução">
          <h2 data-reveal>Solução</h2>
          <p data-reveal>
            Uma aplicação web objetiva, com telas diretas para registrar e acompanhar
            pedidos no ritmo da operação.
          </p>
        </section>

        <section className="section-shell split" aria-label="O que foi construído">
          <h2 data-reveal>O que foi construído</h2>
          <ul className="check-list">
            <li data-reveal>Fluxo de organização de pedidos</li>
            <li data-reveal>Acompanhamento do status</li>
            <li data-reveal>Interface simples para uso operacional</li>
            <li data-reveal>Experiência responsiva</li>
          </ul>
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Tem uma operação para organizar?
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
