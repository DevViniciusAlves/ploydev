import { useRef } from 'react';

export default function MagneticLink({
  href,
  children,
  className = '',
  target,
  rel,
  onClick,
  ariaLabel,
}) {
  const ref = useRef(null);

  const move = (event) => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic ${className}`}
      target={target}
      rel={rel}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
