import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import ProjectCaseCard from '../components/ProjectCaseCard.jsx';
import { projects } from '../data/projects.js';
import { WHATSAPP_MESSAGES } from '../config/site.js';

export default function Projects() {
  return (
    <>
      <SEO
        title="Projetos de desenvolvimento web | PloyDev"
        description="Conheça projetos web desenvolvidos pela PloyDev, incluindo o Orvalho Chalés, o gendaz e o Bakuri."
        path="/projetos"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Projetos
          </p>
          <RevealText as="h1" className="page-title" text="Projetos que já colocamos no ar." />
          <p className="page-lead" data-reveal>
            Três produtos reais, três contextos diferentes. Cada um apresentado com tela
            real, contexto honesto e links para visitar.
          </p>
        </section>

        <section className="section-shell" aria-label="Lista de projetos">
          <div className="case-list">
            {projects.map((project, index) => (
              <ProjectCaseCard
                key={project.id}
                project={project}
                align={index % 2 === 0 ? 'left' : 'right'}
                eager={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Gostou do padrão?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Seu projeto pode receber o mesmo cuidado."
            />
            <WhatsAppCTA message={WHATSAPP_MESSAGES.project} />
          </div>
        </section>
      </main>
    </>
  );
}
