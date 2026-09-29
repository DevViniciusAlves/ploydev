export const SITE = {
  name: 'PloyDev',
  url: 'https://ploydev-zeta.vercel.app',
  description:
    'Criação de sites profissionais, landing pages e experiências web sob medida para empresas que querem fortalecer sua presença digital.',
  whatsappNumber: '5565993360300',
  whatsappDisplay: '+55 65 99336-0300',
  email: 'contato@ploydev.top',
  // Preencher com a URL oficial do perfil quando disponível.
  // Enquanto estiver vazia, o card do Instagram não é exibido.
  instagramUrl: '',
  instagramLabel: 'Instagram',
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
