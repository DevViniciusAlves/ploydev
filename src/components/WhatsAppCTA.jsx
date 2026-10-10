import MagneticLink from './MagneticLink.jsx';
import ArrowIcon from './ArrowIcon.jsx';
import { SITE, createWhatsAppUrl } from '../config/site.js';

export default function WhatsAppCTA({ message, label = 'Falar no WhatsApp', magnetic = true }) {
  const href = createWhatsAppUrl(message);

  const inner = (
    <>
      <span>{label}</span>
      <span>
        {SITE.whatsappDisplay} <ArrowIcon direction="up-right" />
      </span>
    </>
  );

  if (magnetic) {
    return (
      <MagneticLink
        className="contact-link"
        href={href}
        target="_blank"
        rel="noreferrer"
        ariaLabel={`${label} no WhatsApp ${SITE.whatsappDisplay}`}
      >
        {inner}
      </MagneticLink>
    );
  }

  return (
    <a
      className="contact-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} no WhatsApp ${SITE.whatsappDisplay}`}
    >
      {inner}
    </a>
  );
}
