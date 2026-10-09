import useTransitionNavigate from '../hooks/useTransitionNavigate.js';

export default function TransitionLink({ to, children, className = '', onNavigate, target, ...rest }) {
  const transitionNavigate = useTransitionNavigate();

  const handleClick = (event) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    // Never intercept: new-tab targets, downloads, external links,
    // mailto:/tel:/WhatsApp schemes, or in-page anchors.
    if (target === '_blank' || rest.download) return;
    if (typeof to !== 'string' || !to.startsWith('/')) return;
    if (to.startsWith('//')) return;

    event.preventDefault();
    transitionNavigate(to);
    if (onNavigate) onNavigate();
  };

  return (
    <a href={to} className={className} onClick={handleClick} target={target} {...rest}>
      {children}
    </a>
  );
}
