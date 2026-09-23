import { useState } from 'react';

const defaultItems = [
  [
    'Vocês fazem só landing page?',
    'Não. A estrutura pode ser institucional, portfólio, página de campanha ou experiência web personalizada. O escopo é definido antes do orçamento.',
  ],
  [
    'Como funciona o orçamento?',
    'Você chama no WhatsApp, explica o objetivo do projeto e recebe um escopo com prazo, entregáveis e valor. Sem formulário longo.',
  ],
  [
    'O site fica responsivo?',
    'Sim. O projeto é pensado para desktop e mobile desde o início, com atenção a tipografia, navegação e performance.',
  ],
  [
    'Consigo pedir ajustes depois?',
    'Sim. O combinado de revisão fica descrito no escopo do projeto para não existir dúvida durante a entrega.',
  ],
];

export default function FAQ({ items = defaultItems }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <button
            type="button"
            className={`faq-item ${isOpen ? 'is-open' : ''}`}
            onClick={() => setOpen(isOpen ? -1 : index)}
            key={question}
            aria-expanded={isOpen}
          >
            <span className="faq-index">0{index + 1}</span>
            <span className="faq-copy">
              <span className="faq-question">{question}</span>
              <span className="faq-answer">{answer}</span>
            </span>
            <span className="faq-plus" aria-hidden="true">
              {isOpen ? '−' : '+'}
            </span>
          </button>
        );
      })}
    </div>
  );
}
