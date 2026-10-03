export const SITE = {
  name: 'PloyDev',
  url: 'https://ploydev-zeta.vercel.app',
  description:
    'Criação de sites profissionais, landing pages e experiências web sob medida para empresas que querem fortalecer sua presença digital.',
  whatsappNumber: '5565993360300',
  whatsappDisplay: '+55 65 99336-0300',
  email: 'contato@ploydev.top',
  // Perfil oficial no Instagram — exibe o card/link no rodapé.
  instagramUrl: 'https://www.instagram.com/ploydev/',
  instagramLabel: '@ploydev',
};

export function createWhatsAppUrl(
  message = 'Olá PloyDev! Vi o site e quero conversar sobre a criação de um projeto web.'
) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  default: 'Olá PloyDev! Vi o site e quero conversar sobre a criação de um projeto web.',
  sites:
    'Olá PloyDev! Vi a página de criação de sites e quero conversar sobre um site para minha empresa.',
  landing:
    'Olá PloyDev! Vi a página de landing pages e quero conversar sobre uma landing page.',
  project:
    'Olá PloyDev! Vi um dos projetos de vocês e quero conversar sobre um projeto para minha empresa.',
};
