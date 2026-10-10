import TransitionLink from './TransitionLink.jsx';
import ArrowIcon from './ArrowIcon.jsx';

export default function ServiceCard({ title, text, to }) {
  return (
    <TransitionLink to={to} className="service-card" aria-label={`${title} — ver detalhes`}>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="service-card-link">
        Entender melhor <span className="case-link-arrow" aria-hidden="true"><ArrowIcon /></span>
      </span>
    </TransitionLink>
  );
}
