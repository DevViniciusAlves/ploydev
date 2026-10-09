import { useEffect, useRef, useState } from 'react';

/**
 * BlurReveal — efeito de transição embaçada palavra por palavra,
 * inspirado no spell-ui/blur-reveal.
 *
 * Props compatíveis com a referência:
 * - children: string (texto a animar)
 * - as: tag (default 'div')
 * - className, delay (s), speedReveal (default 1.5), speedSegment (default 0.5)
 * - trigger (default true), inView (atalho p/ animar ao entrar na viewport)
 * - onAnimationComplete: () => void
 *
 * speedReveal maior = animação mais rápida (menor stagger e duração).
 * speedSegment controla o quanto cada palavra sobrepõe a anterior.
 */
export function BlurReveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  speedReveal = 1.5,
  speedSegment = 0.5,
  trigger = true,
  inView = false,
  onAnimationComplete,
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(inView ? false : false);
  const doneRef = useRef(false);

  const text = typeof children === 'string' ? children : '';
  const words = text ? text.split(' ') : [];

  // Normaliza velocidades com fallback seguro
  const safeSpeed = Number(speedReveal) > 0 ? Number(speedReveal) : 1.5;
  const safeSegment = Number(speedSegment) > 0 ? Number(speedSegment) : 0.5;

  // Duração base de cada palavra (s) — inversamente proporcional ao speedReveal
  const duration = 0.9 / safeSpeed + 0.25;
  // Stagger entre palavras — speedSegment controla sobreposição
  const stagger = (0.22 * safeSegment) / safeSpeed + 0.035 / safeSpeed;

  useEffect(() => {
    const node = ref.current;
    if (!node || !trigger) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger]);

  useEffect(() => {
    if (!isVisible || doneRef.current) return;
    if (!words.length) return;
    const total = delay * 1000 + words.length * stagger * 1000 + duration * 1000;
    const t = setTimeout(() => {
      doneRef.current = true;
      onAnimationComplete?.();
    }, total);
    return () => clearTimeout(t);
  }, [isVisible, words.length, delay, stagger, duration, onAnimationComplete]);

  if (!trigger) {
    return (
      <Tag ref={ref} className={`blur-reveal ${className}`} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={`blur-reveal${isVisible ? ' is-visible' : ''} ${className}`}
      aria-label={text}
      {...rest}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="blur-word" aria-hidden="true">
          <span
            className="blur-word-inner"
            style={{
              transitionDelay: `${delay + index * stagger}s`,
              transitionDuration: `${duration}s`,
            }}
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export default BlurReveal;
