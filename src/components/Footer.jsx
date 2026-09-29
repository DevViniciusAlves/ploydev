import TransitionLink from './TransitionLink.jsx';
import { SITE, createWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner section-shell">
        <div className="footer-brand">
          <span className="footer-logo">
            <img src="/ploydev-logo.png" alt="PloyDev" width="150" height="40" loading="lazy" />
          </span>
          <p>Sites com direção, código e cuidado.</p>
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <div className="footer-group">
            <span className="footer-label">Navegar</span>
            <TransitionLink to="/servicos">Serviços</TransitionLink>
            <TransitionLink to="/projetos">Projetos</TransitionLink>
            <TransitionLink to="/sobre">Sobre</TransitionLink>
            <TransitionLink to="/contato">Contato</TransitionLink>
          </div>
          <div className="footer-group">
            <span className="footer-label">Serviços</span>
            <TransitionLink to="/criacao-de-sites">Criação de sites</TransitionLink>
            <TransitionLink to="/landing-pages">Landing pages</TransitionLink>
          </div>
          <div className="footer-group">
            <span className="footer-label">Contato</span>
            <a
              href={createWhatsAppUrl(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp · {SITE.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </nav>

        {SITE.instagramUrl && (
          <div className="footer-social">
            <span className="footer-label">Siga a PloyDev</span>
            <a
              className="footer-social-link"
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Seguir a PloyDev no Instagram (${SITE.instagramLabel})`}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
              </svg>
              <span>{SITE.instagramLabel}</span>
              <span className="footer-social-arrow" aria-hidden="true">
                ↗︎
              </span>
            </a>
          </div>
        )}

        <div className="ssl-badge" role="img" aria-label="Site 100 por cento seguro, SSL certificado">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path
              d="M20 2.5 34 8v10.2c0 8-5.4 13.9-14 17.3C11.4 32.1 6 26.2 6 18.2V8L20 2.5Z"
              fill="#1db697"
            />
            <path
              d="m14 19.5 4.2 4.2L26.5 15"
              stroke="#ffffff"
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ssl-text">
            <strong>SITE 100% SEGURO</strong>
            <span>SSL CERTIFICADO</span>
          </span>
        </div>

        <div className="footer-bottom">
          <span>© {year} PloyDev</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
