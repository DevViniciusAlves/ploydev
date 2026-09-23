import useTransitionNavigate from '../hooks/useTransitionNavigate.js';

export default function TransitionLink({ to, children, className = '', onNavigate, ...rest }) {
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

    event.preventDefault();
    transitionNavigate(to);
    if (onNavigate) onNavigate();
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
