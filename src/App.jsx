import { useEffect, useState } from 'react';
import MagneticLink from './components/MagneticLink.jsx';
import RevealText from './components/RevealText.jsx';
import RollingText from './components/RollingText.jsx';
import FAQ from './components/FAQ.jsx';
import { projects } from './data/projects.js';

const WHATSAPP = 'https://wa.me/5565993360300?text=Olá%20PloyDev!%20Quero%20conversar%20sobre%20um%20site.';
const nav = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre'],
  ['ajuda', 'Ajuda'],
  ['contato', 'Contato'],
];

export default function App() {
  const [active, setActive] = useState('inicio');
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-reveal], .word-reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.18 },
    );
    revealTargets.forEach((el) => revealObserver.observe(el));

    const sections = nav.map(([id]) => document.getElementById(id)).filter(Boolean);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.3, 0.55, 0.75] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty('--page-progress', progress);

      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax || 0.1);
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${center * speed * -1}px, 0)`;
      });

    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(handleScroll);
    };
    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const navigate = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    document.body.classList.add('is-transitioning');
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => document.body.classList.remove('is-transitioning'), 360);
    }, 180);
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="page-wipe" aria-hidden="true" />

      <header className="site-header">
        <a href="#inicio" className="brand" onClick={(e) => navigate(e, 'inicio')} aria-label="PloyDev — início">
          <img src="/ploydev-logo.png" alt="PloyDev" />
        </a>

        <nav className="nav-pill" aria-label="Navegação principal">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={(e) => navigate(e, id)}
            >
              <RollingText>{label}</RollingText>
            </a>
          ))}
          <span className={`active-dot active-${active}`} aria-hidden="true" />
        </nav>

        <MagneticLink className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          <RollingText>Orçamento</RollingText>
        </MagneticLink>
      </header>

      <main>
        <section id="inicio" className="hero section-shell">
          <div className="hero-kicker" data-reveal>
            <span>Design e desenvolvimento web</span>
            <span>Brasil · projetos sob medida</span>
          </div>

          <div className="hero-copy">
            <RevealText as="h1" className="hero-title" text="Sites que parecem simples." />
            <RevealText as="h1" className="hero-title hero-title-accent" text="Até você sentir como funcionam." />
          </div>

          <div className="hero-bottom">
            <p data-reveal>
              A PloyDev cria experiências web limpas, rápidas e autorais para negócios que não querem parecer iguais a todo mundo.
            </p>
          </div>

          <div className="hero-mark" aria-hidden="true" data-parallax="0.06">
            <span className="mark-left" />
            <span className="mark-right" />
          </div>
        </section>

        <section className="manifesto section-shell">
          <div className="manifesto-label" data-reveal>O que a gente acredita</div>
          <RevealText
            as="p"
            className="manifesto-text"
            text="Um bom site não precisa gritar. Precisa ter ritmo, clareza e dar vontade de continuar." 
          />
        </section>

        <section id="trabalhos" className="work-intro section-shell">
          <div className="section-number" data-reveal>01</div>
          <div>
            <p className="eyebrow" data-reveal>Trabalhos selecionados</p>
            <RevealText as="h2" className="section-title" text="Projetos selecionados, um por vez." />
          </div>
        </section>

        <section className="project-slider" aria-label="Projetos">
          <div className="project-slider-shell">
            <div className="project-slider-head">
              <div className="project-counter" aria-live="polite">
                <span>{String(projectIndex + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(projects.length).padStart(2, '0')}</span>
              </div>

              <div className="project-arrows" aria-label="Navegação dos projetos">
                <button
                  type="button"
                  className="project-arrow"
                  onClick={() => setProjectIndex((current) => (current - 1 + projects.length) % projects.length)}
                  aria-label="Projeto anterior"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className="project-arrow"
                  onClick={() => setProjectIndex((current) => (current + 1) % projects.length)}
                  aria-label="Próximo projeto"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="project-viewport">
              <div
                className="project-rail"
                style={{ transform: `translate3d(-${projectIndex * 100}%, 0, 0)` }}
              >
                {projects.map((project, index) => (
                  <div className="project-slide" key={project.id}>
                    <article className={`project-card tone-${project.tone} ${project.featured ? 'is-featured' : ''}`}>
                      <div className="project-topline">
                        <span>{project.id}</span>
                        <span>{project.featured ? 'Case principal · ' : ''}{project.category}</span>
                      </div>

                      <div className="browser-frame">
                        <div className="browser-bar"><span /><span /><span /></div>
                        {project.image ? (
                          <div className="browser-canvas browser-canvas-image">
                            <img
                              src={project.image}
                              alt={project.imageAlt || `Tela real do projeto ${project.title}`}
                              className="project-real-screen"
                              loading={index === 0 ? 'eager' : 'lazy'}
                            />
                          </div>
                        ) : (
                          <div className="browser-canvas">
                            <span className="preview-label">PloyDev / case {index + 1}</span>
                            <strong>{project.title}</strong>
                            <div className="preview-lines"><i /><i /><i /></div>
                            <div className="preview-block" />
                          </div>
                        )}
                      </div>

                      <div className="project-copy">
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.summary}</p>
                        </div>
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noreferrer">Abrir projeto ↗</a>
                        ) : (
                          <span className="project-placeholder">Adicionar link do projeto</span>
                        )}
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <p className="project-navigation-note">Use as setas para trocar de projeto.</p>
          </div>
        </section>

        <section id="sobre" className="about section-shell">
          <div className="section-number" data-reveal>02</div>
          <div className="about-head">
            <p className="eyebrow" data-reveal>Sobre a PloyDev</p>
            <RevealText as="h2" className="section-title" text="Desenvolvimento com começo, meio e fim." />
          </div>

          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>
                A gente cuida da experiência inteira: estrutura, interface, responsividade, interações e publicação. O objetivo é entregar um site que represente o negócio e continue fazendo sentido depois do lançamento.
              </p>
              <p>
                Menos enfeite gratuito. Mais decisão de design que tem motivo para existir.
              </p>
            </div>
            <div className="principles" data-reveal>
              <span>Clareza antes de efeito</span>
              <span>Movimento com intenção</span>
              <span>Mobile tratado como produto</span>
              <span>Entrega organizada</span>
            </div>
          </div>

          <div className="team-grid team-grid-single">
            <article className="team-card" data-reveal>
              <div className="photo-placeholder photo-filled">
                <img
                  src="/team/vinicius-henrique.jpg"
                  alt="Vinicius Henrique"
                  className="team-photo"
                  loading="lazy"
                />
              </div>
              <div className="team-meta">
                <h3>Vinicius Henrique</h3>
                <p>Desenvolvedor</p>
              </div>
            </article>
          </div>
        </section>

        <section className="process section-shell">
          <div className="section-number" data-reveal>03</div>
          <div>
            <p className="eyebrow" data-reveal>Processo</p>
            <RevealText as="h2" className="section-title" text="Sem mistério entre o primeiro oi e o site no ar." />
          </div>
          <div className="process-list">
            {[
              ['01', 'Conversa', 'Entendemos objetivo, público e o que o site precisa resolver.'],
              ['02', 'Direção', 'Definimos estrutura, referências, linguagem visual e escopo.'],
              ['03', 'Construção', 'Desenvolvimento responsivo com revisões previstas no projeto.'],
              ['04', 'Publicação', 'Ajustes finais, domínio, deploy e entrega organizada.'],
            ].map(([n, title, text]) => (
              <article className="process-row" data-reveal key={n}>
                <span>{n}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ajuda" className="help section-shell">
          <div className="section-number" data-reveal>04</div>
          <div>
            <p className="eyebrow" data-reveal>Ajuda</p>
            <RevealText as="h2" className="section-title" text="Perguntas que vale responder antes de começar." />
          </div>
          <FAQ />
        </section>

        <section id="contato" className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>Tem um projeto em mente?</p>
            <RevealText as="h2" className="contact-title" text="Conta pra gente o que você quer colocar no ar." />
            <MagneticLink className="contact-link" href={WHATSAPP} target="_blank" rel="noreferrer">
              <span>Falar no WhatsApp</span>
              <span>+55 65 99336-0300 ↗</span>
            </MagneticLink>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <img src="/ploydev-logo.png" alt="PloyDev" />
        <span>Sites com direção, código e cuidado.</span>
        <span>© {new Date().getFullYear()} PloyDev</span>
      </footer>
    </>
  );
}
