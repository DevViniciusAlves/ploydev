import SEO from '../components/SEO.jsx';
import RevealText from '../components/RevealText.jsx';
import FAQ from '../components/FAQ.jsx';
import WhatsAppCTA from '../components/WhatsAppCTA.jsx';
import ProjectCaseCard from '../components/ProjectCaseCard.jsx';
import { projects } from '../data/projects.js';
import { WHATSAPP_MESSAGES } from '../config/site.js';

const includes = [
  'Páginas institucionais sob medida',
  'Estrutura pensada para apresentar serviços e diferenciais',
  'Versão mobile tratada como produto',
  'SEO técnico base e performance',
  'Publicação e entrega organizada',
];

const faqItems = [
  [
    'Para quem é a criação de sites?',
    'Para empresas que precisam apresentar o negócio com profissionalismo, organizar informações e facilitar o contato com novos clientes.',
  ],
  [
    'O site fica responsivo?',
    'Sim. Desktop e mobile são pensados desde o início, com atenção a tipografia, navegação e performance.',
  ],
  [
    'Como funciona o orçamento?',
    'Você chama no WhatsApp, explica o objetivo e recebe um escopo com páginas, entregáveis, prazo e valor.',
  ],
  [
    'Vocês cuidam da publicação?',
    'Sim. Ajustes finais e colocação do projeto no ar fazem parte da entrega.',
  ],
];

export default function ServiceSites() {
  return (
    <>
      <SEO
        title="Criação de sites profissionais para empresas | PloyDev"
        description="Criação de sites profissionais, responsivos e sob medida para empresas que querem fortalecer sua presença digital e gerar novos contatos."
        path="/criacao-de-sites"
      />
      <main className="page">
        <section className="page-hero section-shell">
          <p className="eyebrow" data-reveal>
            Criação de sites
          </p>
          <RevealText
            as="h1"
            className="page-title"
            text="Criação de sites profissionais para empresas."
          />
          <p className="page-lead" data-reveal>
            Um site institucional bem construído apresenta a empresa, organiza a informação e
            deixa o próximo passo óbvio: entrar em contato.
          </p>
          <div data-reveal>
            <WhatsAppCTA message={WHATSAPP_MESSAGES.sites} label="Conversar sobre um site" />
          </div>
        </section>

        <section className="section-shell split" aria-label="Para quem é">
          <h2 data-reveal>Para quem é</h2>
          <p data-reveal>
            Para empresas que dependem de confiança para fechar negócio e hoje têm um site
            desatualizado — ou nenhum site — para apresentar o trabalho.
          </p>
        </section>

        <section className="dark-band" aria-label="O que pode incluir">
          <div className="section-shell split">
            <h2 data-reveal>O que pode incluir</h2>
            <ul className="check-list">
              {includes.map((item) => (
                <li key={item} data-reveal>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-shell split" aria-label="Como funciona">
          <h2 data-reveal>Como funciona</h2>
          <p data-reveal>
            Conversa sobre o negócio, definição de escopo, direção de estrutura e linguagem
            visual, desenvolvimento responsivo e publicação. Cada etapa tem um motivo claro
            para existir.
          </p>
        </section>

        <section className="section-shell" aria-label="Projetos reais">
          <h2 className="section-title-sm" data-reveal>
            Projetos reais
          </h2>
          <div className="case-list">
            {projects.map((project, index) => (
              <ProjectCaseCard
                key={project.id}
                project={project}
                align={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </section>

        <section className="help section-shell" aria-label="Perguntas frequentes">
          <h2 className="section-title-sm" data-reveal>
            Perguntas frequentes
          </h2>
          <FAQ items={faqItems} />
        </section>

        <section className="contact">
          <div className="contact-inner section-shell">
            <p className="eyebrow" data-reveal>
              Pronto para apresentar melhor sua empresa?
            </p>
            <RevealText
              as="h2"
              className="contact-title"
              text="Vamos desenhar o site que o seu negócio merece."
            />
            <WhatsAppCTA
              message={WHATSAPP_MESSAGES.sites}
              label="Conversar sobre um site"
            />
          </div>
        </section>
      </main>
    </>
  );
}
