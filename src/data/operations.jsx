// Single source of truth for branch/operation data across the app.
export const operations = {
  brasil: {
    key: "brasil",
    lang: "pt",
    name: "Brasil",
    tagline: "Centro Gravataí + Cidade Baixa",
    cities: "Gravataí · Porto Alegre",
    upcoming: false,
    cardImage:
      "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg",
    heroImage:
      "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg",
    locations: [
      {
        key: "centro_gravatai",
        name: "Centro — Gravataí",
        short: "Gravataí",
        address: "R. Cônego Pedro Wagner, 782",
        fullAddress: "R. Cônego Pedro Wagner, 782 — Centro, Gravataí, RS",
        hours: ["Seg–Sáb: 11h–15h (almoço)"],
        badge: null,
        cardImage:
          "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg",
      },
      {
        key: "cidade_baixa",
        name: "Cidade Baixa — Porto Alegre",
        short: "Cidade Baixa — POA",
        address: "R. Luís Afonso, 26",
        fullAddress: "R. Luís Afonso, 26 — Cidade Baixa, Porto Alegre, RS",
        hours: ["Seg–Sáb: 19h–23h (jantar)"],
        badge: null,
        cardImage:
          "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/24262e9e2_Screenshot2026-08-13at94746PM.png",
      },
    ],
    social: {
      instagram: "https://instagram.com/jejoriasianhaus",
      tiktok: "https://tiktok.com/@jejoriasianhaus",
      whatsapp: "https://wa.me/5551920027578",
      whatsappLabel: "+55 51 92002-7578",
      handle: "@jejoriasianhaus",
    },
    footerTitle: "Endereços",
    footerHoursTitle: "Horários",
    taglineFooter: "Onde a noite encontra o sabor. Culinária asiática e filipina autêntica, feita para a alma.",
  },
  uruguai: {
    key: "uruguai",
    lang: "es",
    name: "Uruguai",
    shortName: "Montevideo",
    tagline: "Próximamente · Em Breve",
    city: "Montevideo, Uruguay",
    cities: "Montevideo · Uruguay",
    upcoming: true,
    openingNote: "Próximamente — fecha por confirmar",
    cardImage:
      "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg",
    heroImage:
      "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg",
    locations: [],
    hero: {
      eyebrow: "Próximamente · Montevideo",
      title: "Donde la noche",
      highlight: "encuentra el sabor",
      subtitle:
        "Una familia filipina trae Asia a Uruguay. Cocina filipina y asiática auténtica, pronto en Montevideo — fecha por confirmar.",
    },
    teaser: {
      title: "Una nueva mesa para Uruguay",
      body:
        "Antes de Singapur, antes de Hong Kong, antes de Brasil y Uruguay — hay una familia filipina. Portamos una identidad cultural rica y la traemos a Montevideo: dim sum en el corazón, sin fronteras en el menú, raigambre filipina lo primero.",
    },
    serviceModel: {
      title: "Cómo empezamos en Montevideo",
      intro:
        "Cuando abramos, arrancamos con take-away y entregas a domicilio. Dine-in aún no está confirmado — depende del local que consigamos.",
      takeAway: { label: "Take-away", desc: "Retirá tu pedido en el punto de Montevideo que confirmaremos al abrir." },
      delivery: { label: "Entregas a domicilio", desc: "Pedidos por delivery (PedidosYa y otros en evaluación)." },
      dineIn: { label: "Dine-in", desc: "Aún no confirmado — por depender, en cuanto tengamos un local apto lo habilitamos." },
    },
    notify: {
      title: "Quiero ser avisado",
      subtitle: "Dejanos tu mail y te avisamos cuando abra Jejori Montevideo",
      namePlaceholder: "Tu nombre *",
      emailPlaceholder: "Email *",
      submit: "Quiero ser avisado",
      success: "¡ Gracias ! Te avisaremos en cuanto abra.",
    },
    social: {
      instagram: "https://instagram.com/jejoriasianhaus",
      tiktok: "https://tiktok.com/@jejoriasianhaus",
      handle: "@jejoriasianhaus",
    },
    footerTitle: "Ubicación",
    footerHoursTitle: "Próximamente · fecha por confirmar",
    taglineFooter:
      "Donde la noche encuentra el sabor. Cocina asiática y filipina auténtica, pronto en Montevideo.",
  },
};

export const operationOrder = ["brasil", "uruguai"];