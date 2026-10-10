/**
 * ArrowIcon — seta em SVG inline.
 *
 * Motivo: os caracteres de texto `→` / `↗` (mesmo com VS15) são
 * renderizados como emoji no iOS/Safari mobile. SVG nunca vira emoji
 * e herda cor/tamanho do texto via `currentColor` / `1em`.
 */
export default function ArrowIcon({ direction = 'right', className = '' }) {
  const isUpRight = direction === 'up-right';

  return (
    <svg
      className={`arrow-icon${className ? ` ${className}` : ''}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {isUpRight ? (
        <path
          d="M4 12 12 4M5.5 4H12v6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M2.5 8h11M9.5 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
