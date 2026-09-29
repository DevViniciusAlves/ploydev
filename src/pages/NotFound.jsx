import SEO from '../components/SEO.jsx';
import TransitionLink from '../components/TransitionLink.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada | PloyDev"
        description="A página que você procura não existe. Volte para o início ou veja os projetos da PloyDev."
        path="/404"
        noindex
      />
      <main className="page">
        <section className="page-hero section-shell not-found">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1 className="page-title">Essa página não existe.</h1>
          <p className="page-lead">
            O link pode ter mudado ou sido digitado errado. Estes caminhos funcionam:
          </p>
          <div className="not-found-links">
            <TransitionLink to="/" className="button-primary">
              Voltar para o início
            </TransitionLink>
            <TransitionLink to="/projetos" className="button-secondary">
              Ver projetos →︎
            </TransitionLink>
          </div>
        </section>
      </main>
    </>
  );
}
