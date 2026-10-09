import { useLayoutEffect, useRef, useState } from 'react';
import { techLogos } from '../data/techLogos.js';

/**
 * TechMarquee — faixa infinita de logos (porte do spell-ui/marquee).
 *
 * Infinito de verdade: mede a largura de um grupo e da tela e renderiza
 * cópias suficientes (sempre em número par, cobrindo ≥ 2x a viewport).
 * A trilha translada -50% em loop, caindo no pixel exato de conteúdo
 * idêntico — sem fim visível e sem pulo no reset, em qualquer monitor.
 */
const SPEED_PX_S = 80;

export default function TechMarquee({ duration = 40 }) {
  const groupRef = useRef(null);
  const [copies, setCopies] = useState(6);
  const [groupWidth, setGroupWidth] = useState(560);

  useLayoutEffect(() => {
    const fit = () => {
      const gw = groupRef.current?.offsetWidth || 560;
      const vw = window.innerWidth || 1280;
      const need = Math.ceil((vw * 2) / gw) + 2; // folga de 1 grupo por lado
      const even = need % 2 === 0 ? need : need + 1; // -50% exige nº par
      setGroupWidth(gw);
      setCopies(Math.max(6, even));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  // Velocidade constante: tempo = metade da trilha / velocidade
  const computed = Math.round(((copies * groupWidth) / 2 / SPEED_PX_S) * 10) / 10;
  const effective = Number.isFinite(computed) && computed > 0 ? computed : duration;

  return (
    <div className="tech-marquee" aria-label="Tecnologias que utilizamos">
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${effective}s` }}
      >
        {Array.from({ length: copies }, (_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : null}
            className="marquee-group"
            aria-hidden={copy !== 0}
          >
            {techLogos.map((logo) => (
              <img
                key={`${copy}-${logo.src}`}
                src={logo.src}
                alt={copy === 0 ? logo.alt : ''}
                width={40}
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
