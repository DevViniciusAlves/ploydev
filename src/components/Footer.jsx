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
          </div>
        </nav>

        <div className="footer-bottom">
          <span>© {year} PloyDev</span>
        </div>
      </div>
    </footer>
  );
}
