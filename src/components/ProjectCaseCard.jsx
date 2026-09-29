import TransitionLink from './TransitionLink.jsx';

export default function ProjectCaseCard({ project, align = 'left', eager = false }) {
  return (
    <article
      className={`case-card case-align-${align}${project.featured ? ' is-featured' : ''}`}
      data-reveal
    >
      <div className="case-media">
        <picture>
          {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
          <img
            src={project.image}
            alt={project.imageAlt || `Tela real do projeto ${project.title}`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            width="1280"
            height="800"
          />
        </picture>
      </div>

      <div className="case-copy">
        <p className="eyebrow">
          {project.category}
        </p>
        <h3>{project.title}</h3>
        <p className="case-summary">{project.summary}</p>
        <div className="case-links">
          <TransitionLink to={project.caseUrl} className="case-link">
            Ver case <span className="case-link-arrow" aria-hidden="true">→︎</span>
          </TransitionLink>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="case-link case-link-secondary"
            aria-label={`Abrir projeto ${project.title} em nova aba`}
          >
            Abrir projeto <span className="case-link-arrow" aria-hidden="true">↗︎</span>
          </a>
        </div>
      </div>
    </article>
  );
}
