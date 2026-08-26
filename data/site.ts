// ============================================================================
// CONFIGURAÇÃO CENTRAL DO SITE
// ----------------------------------------------------------------------------
// Todas as informações que podem mudar (telefone, redes sociais, cidade etc.)
// ficam concentradas aqui. Não espalhe esses dados pelos componentes.
//
// Campos marcados com "PLACEHOLDER" ainda não foram confirmados pelo cliente
// e precisam ser substituídos por informações reais antes da publicação.
// ============================================================================

export const siteConfig = {
  name: "Himperfilme",
  fullName: "Himperfilme - Insulfilm Automotivo e Residencial",
  tagline: "Especialista em Insulfilm Automotivo e Residencial",

  // Número no formato internacional, somente dígitos
  whatsapp: "5565984092913",
  whatsappDisplay: "(65) 98409-2913",

  whatsappMessage:
    "Olá! Vi o site da Himperfilme e gostaria de solicitar um orçamento para instalação de película no meu veículo.",

  instagram: "https://instagram.com/himperfilme",
  instagramHandle: "@himperfilme",

  city: "Cuiabá - MT",
  region: "Atendimento em Cuiabá e região",
  address: "R. Joaquim Murtinho, 1335 - Centro Sul, Cuiabá - MT, 78020-290",
  workingHours: "[HORÁRIO DE ATENDIMENTO]", // PLACEHOLDER — ainda não confirmado
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "R. Joaquim Murtinho, 1335 - Centro Sul, Cuiabá - MT, 78020-290"
    ),

  establishedYear: 1997,
  authorizedInstallerOf: "Intercontrol",

  email: "", // PLACEHOLDER, caso exista

  seo: {
    title: "Himperfilme | Insulfilm Automotivo e Residencial em Cuiabá",
    description:
      "Instalação profissional de insulfilm automotivo e residencial em Cuiabá. Instalador autorizado Intercontrol desde 1997. Conforto térmico, proteção UV e privacidade.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
