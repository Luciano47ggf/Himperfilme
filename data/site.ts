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
  tagline: "Especialista em Películas Automotivas",

  // Número no formato internacional, somente dígitos (ex: 5565999999999)
  // PLACEHOLDER — substituir pelo número real antes de publicar.
  whatsapp: "5565999999999",

  whatsappMessage:
    "Olá! Vi o site da Himperfilme e gostaria de solicitar um orçamento para instalação de película no meu veículo.",

  instagram: "https://instagram.com/himperfilme", // PLACEHOLDER
  instagramHandle: "@himperfilme", // PLACEHOLDER

  // PLACEHOLDER — dados de localização ainda não confirmados
  city: "[CIDADE / REGIÃO]",
  region: "Atendimento em [CIDADE / REGIÃO]",
  address: "", // deixar vazio até existir loja física confirmada
  workingHours: "[HORÁRIO DE ATENDIMENTO]",
  googleMapsUrl: "", // PLACEHOLDER

  // PLACEHOLDER — usar até receber o dado real
  yearsOfExperience: "[X anos de experiência]",

  email: "", // PLACEHOLDER, caso exista

  seo: {
    title: "Himperfilme | Insulfilm e Películas Automotivas",
    description:
      "Instalação profissional de películas automotivas para mais conforto térmico, proteção, privacidade e estilo para o seu veículo.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
