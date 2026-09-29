import TransitionLink from './TransitionLink.jsx';
import { SITE, createWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner section-shell">
        <div className="footer-brand">
          <img src="/ploydev-logo.png" alt="PloyDev" width="118" height="32" loading="lazy" />
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

        <div className="footer-trust">
          <div className="footer-trust-card footer-security-card">
            <span className="footer-trust-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3.5 18.5 6v5.3c0 4.2-2.6 7.3-6.5 9.2-3.9-1.9-6.5-5-6.5-9.2V6L12 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m9.2 12 1.8 1.8 3.8-4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="footer-trust-copy">
              <span className="footer-trust-label">Segurança</span>
              <strong className="footer-trust-title">Conexão protegida</strong>
              <span className="footer-trust-meta">HTTPS ativo</span>
            </div>
          </div>

          {SITE.instagramUrl && (
            <a
              className="footer-trust-card footer-social-card"
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Seguir a PloyDev no Instagram (${SITE.instagramLabel})`}
            >
              <div className="footer-trust-copy">
                <span className="footer-trust-label">Siga a PloyDev</span>
                <strong className="footer-trust-title">{SITE.instagramLabel}</strong>
              </div>
              <div className="footer-social-action" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
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
                <span>↗</span>
              </div>
            </a>
          )}
        </div>

        <div className="footer-bottom">
          <span>© {year} PloyDev</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
