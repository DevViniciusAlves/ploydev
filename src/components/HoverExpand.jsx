import { useState } from 'react';
import TransitionLink from './TransitionLink.jsx';

/**
 * HoverExpand — 3 colunas lado a lado; passar o mouse (ou tocar)
 * amplia a coluna. Porte do Skiper52 HoverExpand_001 com as 3 fotos
 * reais dos projetos (Orvalho, gendaz, Bakuri), em CSS puro.
 */
export default function HoverExpand({ items = [] }) {
  // Igual à referência (useState(1)): começa com a coluna do meio ampliada
  const [active, setActive] = useState(1);

  if (!items.length) return null;
  const current = Math.min(active, items.length - 1);

  return (
    <div className="hover-expand" data-reveal role="list" aria-label="Projetos em destaque">
      {items.map((project, index) => {
        const isActive = current === index;
        return (
          <article
            key={project.id}
            role="listitem"
            tabIndex={0}
            aria-label={`${project.title} — ${project.category}`}
            className={`he-panel${isActive ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setActive(index);
              }
            }}
          >
            <picture className="he-media" aria-hidden="true">
              {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
              <img
                src={project.image}
                alt=""
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
              />
            </picture>

            <div className="he-shade" aria-hidden="true" />

            <div className="he-caption" aria-hidden={!isActive}>
              <p className="he-code">{project.category}</p>
              <h3 className="he-title">{project.title}</h3>
              <div className="he-links" onClick={(e) => e.stopPropagation()}>
                <TransitionLink
                  to={project.caseUrl}
                  className="he-link"
                  tabIndex={isActive ? 0 : -1}
                >
                  Ver case <span aria-hidden="true">→</span>
                </TransitionLink>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="he-link he-link-secondary"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`Abrir projeto ${project.title} em nova aba`}
                >
                  Abrir site <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <span className="he-rail" aria-hidden="true">
              {project.title}
            </span>
          </article>
        );
      })}
    </div>
  );
}
