import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MagneticLink from './MagneticLink.jsx';
import RollingText from './RollingText.jsx';
import TransitionLink from './TransitionLink.jsx';
import { SITE, createWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/site.js';

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/servicos', label: 'Serviços' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <TransitionLink to="/" className="brand" aria-label="PloyDev — início">
          <img src="/ploydev-logo.png" alt="PloyDev" width="154" height="40" />
        </TransitionLink>

        <nav className="nav-pill" aria-label="Navegação principal">
          {links.map((link) => {
            const isActive = link.end
              ? location.pathname === link.to
              : location.pathname === link.to ||
                location.pathname.startsWith(`${link.to}/`);
            return (
              <TransitionLink
                key={link.to}
                to={link.to}
                className={`nav-link${isActive ? ' active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <RollingText>{link.label}</RollingText>
              </TransitionLink>
            );
          })}
        </nav>

        <div className="header-actions">
          <MagneticLink
            className="header-cta"
            href={createWhatsAppUrl(WHATSAPP_MESSAGES.default)}
            target="_blank"
            rel="noreferrer"
            ariaLabel={`Solicitar orçamento no WhatsApp ${SITE.whatsappDisplay}`}
          >
            <RollingText>Solicitar orçamento</RollingText>
          </MagneticLink>

          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-button-label">{menuOpen ? 'Fechar' : 'Menu'}</span>
            <span className={`menu-button-icon${menuOpen ? ' is-open' : ''}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação móvel">
          {links.map((link, index) => (
            <TransitionLink
              key={link.to}
              to={link.to}
              className="mobile-menu-link"
              style={{ '--menu-index': index }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </TransitionLink>
          ))}
          <a
            className="mobile-menu-cta mobile-menu-link"
            style={{ '--menu-index': links.length }}
            href={createWhatsAppUrl(WHATSAPP_MESSAGES.default)}
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            Solicitar orçamento · {SITE.whatsappDisplay} ↗︎
          </a>
        </nav>
      </div>
    </>
  );
}
