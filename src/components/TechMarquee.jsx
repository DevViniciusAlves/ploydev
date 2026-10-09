import { techLogos } from '../data/techLogos.js';

/**
 * TechMarquee — faixa infinita de logos rolando (porte do spell-ui/marquee),
 * em CSS puro: a lista é renderizada 2x e a trilha translada -50% em loop.
 */
export default function TechMarquee({ duration = 40 }) {
  // 4 cópias (número par): a trilha sempre transborda a tela e o
  // translateX(-50%) cai exatamente no início da 3ª cópia = loop perfeito
  const copies = [0, 1, 2, 3];
  return (
    <div className="tech-marquee" aria-label="Tecnologias que utilizamos">
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {copies.map((copy) => (
          <div
            key={copy}
            className="marquee-group"
            aria-hidden={copy !== 0}
          >
            {techLogos.map((logo) => (
              <img
                key={`${copy}-${logo.src}`}
                src={logo.src}
                alt={copy === 0 ? logo.alt : ''}
                width={96}
                height={40}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="marquee-logo"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
