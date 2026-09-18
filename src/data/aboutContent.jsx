// Country-specific About content for Jejori Asian Haus.
// Brasil: the shared origin story, ending with Jesrae handing Jejori to Marjorie
// and leaving for Uruguay. Uruguai: Jesrae's own chapter — a chef at heart.

const HERO_IMAGE_BR = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const INTERIOR_IMAGE_BR = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg";
const HERO_IMAGE_UY = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/9dc10e0eb_jejoriuruguay.jpg";
const INTERIOR_IMAGE_UY = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg";
const FOUNDERS_PHOTO = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5799de77a_WhatsAppImage2026-05-03at180311.jpg";

export const aboutImages = {
  brasil: { hero: HERO_IMAGE_BR, interior: INTERIOR_IMAGE_BR, founder: FOUNDERS_PHOTO },
  uruguai: { hero: HERO_IMAGE_UY, interior: INTERIOR_IMAGE_UY, founder: FOUNDERS_PHOTO },
};

export const brasilContent = {
  pt: {
    heroTag: "Gravataí, Brasil",
    heroSub: "Uma família filipina contando a história da Ásia — para um novo lar no Brasil.",
    identity: {
      title: "🇵🇭 Filipino Primeiro. Asiático em Toda a Extensão.",
      body: [
      "Antes de Singapura. Antes de Hong Kong. Antes do Brasil. Há uma família filipina — com suas próprias tradições, sabores e uma hospitalidade que coloca a mesa e a comunidade acima de tudo.",
      "O Jejori Asian Haus não é um conceito genérico de culinária pan-asiática. É uma família filipina contando a história da Ásia através de sua própria lente, para um novo lar no Sul do Brasil.",
      "Cada cultura que o Jejori toca — a herança japonesa de Jesrae, o dim sum de Hong Kong de Marjorie, a vida de rua de Singapura — não substitui essa identidade filipina. Ela se torna parte da mesa filipina."]
    },
    kamayan: {
      title: "🤲 Kamayan — A Mesa que Une",
      body: "No coração do Jejori está o <strong>Kamayan</strong> — a tradição filipina de comer junto, sem pressa, em comunidade, frequentemente com as mãos, ao redor de uma mesa farta. É a filosofia por trás do nosso estilo familiar de servir: a comida não é apenas sustento, é o momento em que as pessoas se encontram. Esse valor ressoa profundamente com a hospitalidade gaúcha — a abundância da mesa, o tempo partilhado, o calor humano que transforma uma refeição em memória."
    },
    story: {
      title: "🌏 Da Filipinas à Ásia, ao Brasil",
      jesrae: "<strong>Jesrae</strong> — Filipino com descendência japonesa, Analista de Negócios Sênior especializado em contabilidade, bancário, finanças e logística, atuando em organizações internacionais. Em Singapura, vivenciou a cultura gastronômica asiática por dentro — mercados tradicionais, cozinhas locais, vida de rua. Traz ao Jejori o pensamento sistêmico e a disciplina operacional. A precisão e o respeito pela técnica, da herança japonesa, estão em cada processo.",
      marjorie: "<strong>Marjorie</strong> — <strong>7 anos trabalhando profissionalmente em Hong Kong</strong>, um dos centros de culinária chinesa mais respeitados do mundo, dominando as técnicas tradicionais e a arte do dim sum. Vive no Brasil há mais de uma década, trazendo consigo <strong>mais de 25 anos de experiência culinária</strong>. O domínio de Hong Kong está em cada dobra de massa, em cada caldo preparado com paciência."
    },
    anchors: {
      title: "🧭 As Âncoras Culturais do Jejori",
      items: [
      { emoji: "🇵🇭", label: "Filipinas — A Raiz", desc: "Hospitalidade, mesa compartilhada, comunidade. O coração de tudo que fazemos." },
      { emoji: "🇯🇵", label: "Herança Japonesa (Jesrae)", desc: "Precisão, respeito pela técnica, cuidado com cada detalhe." },
      { emoji: "🇭🇰", label: "Hong Kong (Marjorie)", desc: "Maestria profissional no dim sum e na cozinha chinesa clássica." },
      { emoji: "🇸🇬", label: "Singapura", desc: "Prova viva de que culturas diferentes coexistem com beleza em uma só mesa." }]
    },
    journey: {
      title: "A Jornada",
      stops: [
      { place: "Filipinas", desc: "O começo. Uma família com tradição, hospitalidade e uma identidade cultural que viajaria pelo mundo sem nunca se perder." },
      { place: "Singapura", desc: "Jesrae vivencia a culinária asiática de rua autêntica — mercados tradicionais, cozinhas locais, o cotidiano vibrante da gastronomia asiática." },
      { place: "Hong Kong", desc: "Marjorie trabalha por 7 anos em um dos maiores centros de culinária chinesa do mundo, dominando o dim sum e a disciplina de cozinha profissional." },
      { place: "Gravataí, Brasil — 2025", desc: "Os dois caminhos convergem. O Jejori Asian Haus abre na R. Cônego Pedro Wagner, 782 — Centro, Gravataí — levando culinária filipina e asiática autêntica ao Sul do Brasil." },
      { place: "Porto Alegre, Cidade Baixa", desc: "A unidade Cidade Baixa (R. Luís Afonso, 26) segue atendendo o público de Porto Alegre, levando a experiência do Jejori ao coração da cidade." }]
    },
    together: {
      title: "🤝 Onde Tudo Se Encontrou",
      body: "Em 2025, Jesrae e Marjorie se conheceram — e reconheceram rapidamente uma visão compartilhada: trazer a culinária filipina e asiática autêntica ao Brasil de forma <em>acessível, consistente e enraizada na tradição</em>. Não como uma franquia genérica. Como uma família real, com histórias reais, servindo com o coração.",
      jesrae: "Visão de negócios, sistemas e operações — estrutura para crescer sem perder a alma",
      marjorie: "Maestria culinária de décadas — a técnica que garante que cada prato conta a história certa"
    },
    nameChange: {
      title: "✨ De Dimsum Haus para Asian Haus",
      body: [
      "Começamos como <strong>Jejori Dimsum Haus</strong> — o dim sum era nosso favorito pessoal, moldado por anos de experiência em Hong Kong e o amor genuíno dos fundadores por este prato.",
      "Mas ao longo do caminho percebemos que limitar o nome a um único prato seria <em>subestimar quem somos de verdade</em>. Somos filipinos. Carregamos uma identidade cultural rica, conectada a toda a Ásia.",
      "Assim nasceu o <strong>Jejori Asian Haus</strong>: um nome que abraça quem somos — uma família filipina servindo os favoritos asiáticos com o dim sum no coração, mas sem fronteiras no cardápio."]
    },
    nextChapter: {
      title: "🇺🇾 E Depois — O Uruguai",
      body: "O Jejori no Brasil encontrou o seu lugar. E eu, Jesrae, tomei uma decisão difícil mas necessária: <strong>entreguei o Jejori Asian Haus do Brasil à Marjorie</strong>. A cozinha deste país pertence às mãos dela — é onde o Jejori cresce forte. Eu segui um chamado diferente. O Uruguai me esperava. Uma nova página, um novo país, uma nova mesa para construir do zero — desta vez, a minha própria. O capítulo do Brasil fecha aqui, com gratidão. O próximo capítulo se escreve em Montevideo."
    },
    pillars: {
      title: "🏮 Nosso Propósito",
      items: [
      { label: "Missão", text: "Trazer a culinária asiática e filipina autêntica à comunidade brasileira, preservando as tradições e técnicas que a definem — sempre enraizada na hospitalidade filipina." },
      { label: "Visão", text: "Crescer o Jejori no Brasil como uma marca reconhecida pela autenticidade, consistência e experiência cultural — com uma identidade filipina distinta, nunca um conceito genérico pan-asiático." },
      { label: "Compromisso", text: "Cada prato carrega uma história de cultura, experiência e intenção — respaldada por jornadas reais, maestria culinária e o calor genuíno de uma família filipina." }]
    },
    cta: { tag: "Convidamos você a vivenciar conosco", title: "Venha", highlight: "Provar a História", btn: "Ver Cardápio" },
    founderNames: "Jesrae & Marjorie",
    founderCard: "Fundadores do Jejori Asian Haus — Brasil"
  },

  es: {
    heroTag: "Gravataí, Brasil",
    heroSub: "Una familia filipina contando la historia de Asia — para un nuevo hogar en Brasil.",
    identity: {
      title: "🇵🇭 Filipino Primero. Asiático en Toda su Extensión.",
      body: [
      "Antes de Singapur. Antes de Hong Kong. Antes de Brasil. Hay una familia filipina — con sus propias tradiciones, sabores y una hospitalidad que pone la mesa y la comunidad por encima de todo.",
      "Jejori Asian Haus no es un concepto genérico de cocina pan-asiática. Es una familia filipina contando la historia de Asia a través de su propia mirada, para un nuevo hogar en el Sur de Brasil.",
      "Cada cultura que Jejori toca — la herencia japonesa de Jesrae, el dim sum de Hong Kong de Marjorie, la vida callejera de Singapur — no reemplaza esa identidad filipina. Se convierte en parte de la mesa filipina."]
    },
    kamayan: {
      title: "🤲 Kamayan — La Mesa que Une",
      body: "En el corazón de Jejori está el <strong>Kamayan</strong> — la tradición filipina de comer juntos, sin apuro, en comunidad, frecuentemente con las manos, alrededor de una mesa abundante. Es la filosofía detrás de nuestro estilo familiar de servir: la comida no es solo sustento, es el momento en que las personas se encuentran. Este valor resuena profundamente con la hospitalidad gaúcha — la abundancia de la mesa, el tiempo compartido, el calor humano que convierte una comida en memoria."
    },
    story: {
      title: "🌏 De Filipinas a Asia, a Brasil",
      jesrae: "<strong>Jesrae</strong> — Filipino con ascendencia japonesa, Analista de Negocios Senior especializado en contabilidad, banca, finanzas y logística en organizaciones internacionales. En Singapur, vivió la cultura gastronómica asiática desde adentro — mercados tradicionales, cocinas locales, vida callejera. Aporta a Jejori el pensamiento sistémico y la disciplina operacional. La precisión y el respeto por la técnica, de su herencia japonesa, están presentes en cada proceso.",
      marjorie: "<strong>Marjorie</strong> — <strong>7 años trabajando profesionalmente en Hong Kong</strong>, uno de los centros de cocina china más respetados del mundo, dominando las técnicas tradicionales y el arte del dim sum. Vive en Brasil hace más de una década, trayendo consigo <strong>más de 25 años de experiencia culinaria</strong>. El dominio de Hong Kong está en cada pliegue de masa, en cada caldo preparado con paciencia."
    },
    anchors: {
      title: "🧭 Las Anclas Culturales de Jejori",
      items: [
      { emoji: "🇵🇭", label: "Filipinas — La Raíz", desc: "Hospitalidad, mesa compartida, comunidad. El corazón de todo lo que hacemos." },
      { emoji: "🇯🇵", label: "Herencia Japonesa (Jesrae)", desc: "Precisión, respeto por la técnica, cuidado en cada detalle." },
      { emoji: "🇭🇰", label: "Hong Kong (Marjorie)", desc: "Maestría profesional en dim sum y cocina china clásica." },
      { emoji: "🇸🇬", label: "Singapur", desc: "Prueba viva de que culturas diferentes conviven con belleza en una sola mesa." }]
    },
    journey: {
      title: "El Viaje",
      stops: [
      { place: "Filipinas", desc: "El comienzo. Una familia con tradición, hospitalidad y una identidad cultural que viajaría por el mundo sin perderse jamás." },
      { place: "Singapur", desc: "Jesrae vive la gastronomía asiática callejera auténtica — mercados tradicionales, cocinas locales, el cotidiano vibrante de la comida asiática." },
      { place: "Hong Kong", desc: "Marjorie trabaja 7 años en uno de los mayores centros de cocina china del mundo, dominando el dim sum y la disciplina de cocina profesional." },
      { place: "Gravataí, Brasil — 2025", desc: "Los dos caminos convergen. Jejori Asian Haus abre en R. Cônego Pedro Wagner, 782 — Centro, Gravataí — llevando cocina filipina y asiática auténtica al Sur de Brasil." },
      { place: "Porto Alegre, Cidade Baixa", desc: "La unidad Cidade Baixa (R. Luís Afonso, 26) sigue atendiendo al público de Porto Alegre, llevando la experiencia Jejori al corazón de la ciudad." }]
    },
    together: {
      title: "🤝 Donde Todo Se Encontró",
      body: "En 2025, Jesrae y Marjorie se conocieron — y reconocieron rápidamente una visión compartida: traer la cocina filipina y asiática auténtica a Brasil de forma <em>accesible, consistente y arraigada en la tradición</em>. No como una franquicia genérica. Como una familia real, con historias reales, sirviendo con el corazón.",
      jesrae: "Visión de negocios, sistemas y operaciones — estructura para crecer sin perder el alma",
      marjorie: "Maestría culinaria de décadas — la técnica que garantiza que cada plato cuente la historia correcta"
    },
    nameChange: {
      title: "✨ De Dimsum Haus a Asian Haus",
      body: [
      "Comenzamos como <strong>Jejori Dimsum Haus</strong> — el dim sum era nuestro favorito personal, moldeado por años de experiencia en Hong Kong y el amor genuino de los fundadores por este plato.",
      "Pero en el camino nos dimos cuenta de que limitar el nombre a un solo plato sería <em>subestimar quiénes somos en realidad</em>. Somos filipinos. Llevamos una identidad cultural rica, conectada con toda Asia.",
      "Así nació <strong>Jejori Asian Haus</strong>: un nombre que abraza quiénes somos — una familia filipina sirviendo los favoritos asiáticos con el dim sum en el corazón, pero sin fronteras en el menú."]
    },
    nextChapter: {
      title: "🇺🇾 Y Después — Uruguay",
      body: "Jejori en Brasil encontró su lugar. Y yo, Jesrae, tomé una decisión difícil pero necesaria: <strong>le entregué el Jejori Asian Haus de Brasil a Marjorie</strong>. La cocina de este país pertenece a sus manos — es donde Jejori crece fuerte. Yo seguí un llamado distinto. Uruguay me esperaba. Una nueva página, un nuevo país, una nueva mesa para construir desde cero — esta vez, la mía. El capítulo de Brasil cierra aquí, con gratitud. El próximo capítulo se escribe en Montevideo."
    },
    pillars: {
      title: "🏮 Nuestro Propósito",
      items: [
      { label: "Misión", text: "Traer la cocina asiática y filipina auténtica a la comunidad brasileña, preservando las tradiciones y técnicas que la definen — siempre arraigada en la hospitalidad filipina." },
      { label: "Visión", text: "Crecer Jejori en Brasil como una marca reconocida por autenticidad, consistencia y experiencia cultural — con una identidad filipina distinta, nunca un concepto genérico pan-asiático." },
      { label: "Compromiso", text: "Cada plato lleva una historia de cultura, experiencia e intención — respaldada por viajes reales, maestría culinaria y el calor genuino de una familia filipina." }]
    },
    cta: { tag: "Te invitamos a vivir la experiencia con nosotros", title: "Ven a", highlight: "Probar la Historia", btn: "Ver Menú" },
    founderNames: "Jesrae & Marjorie",
    founderCard: "Fundadores de Jejori Asian Haus — Brasil"
  },

  en: {
    heroTag: "Gravataí, Brasil",
    heroSub: "A Filipino family telling the story of Asia — for a new home in Brazil.",
    identity: {
      title: "🇵🇭 Filipino First. Asian in Every Dimension.",
      body: [
      "Before Singapore. Before Hong Kong. Before Brazil. There is a Filipino family — with its own traditions, flavors, and a hospitality that puts the table and community above everything else.",
      "Jejori Asian Haus is not a generic pan-Asian concept. It is a Filipino family telling the story of Asia through their own lens, for a new home in Southern Brazil.",
      "Every culture Jejori touches — Jesrae's Japanese heritage, Marjorie's Hong Kong dim sum, Singapore's street food life — does not replace that Filipino identity. It becomes part of the Filipino table."]
    },
    kamayan: {
      title: "🤲 Kamayan — The Table That Unites",
      body: "At the heart of Jejori is <strong>Kamayan</strong> — the Filipino tradition of eating together, unhurried, in community, often by hand, around an abundant table. It is the philosophy behind our family-style service: food is not just sustenance, it is the moment people come together. This value resonates deeply with gaúcho hospitality — the abundance of the table, shared time, the human warmth that turns a meal into a memory."
    },
    story: {
      title: "🌏 From the Philippines to Asia, to Brazil",
      jesrae: "<strong>Jesrae</strong> — Filipino with Japanese descent, Senior Business Analyst specializing in accounting, banking, finance, and logistics across international organizations. In Singapore, he experienced Asian food culture from the inside — traditional markets, local kitchens, street food life. He brings systems thinking and operational discipline to Jejori. The precision and respect for technique from his Japanese heritage is present in every process.",
      marjorie: "<strong>Marjorie</strong> — <strong>7 years working professionally in Hong Kong</strong>, one of the world's most respected centers of Chinese cuisine, mastering traditional techniques and the craft of dim sum. She has lived in Brazil for over a decade, bringing with her <strong>25+ years of total culinary experience</strong>. Hong Kong mastery is in every fold of dough, in every slowly prepared broth."
    },
    anchors: {
      title: "🧭 Jejori's Cultural Anchors",
      items: [
      { emoji: "🇵🇭", label: "Philippines — The Root", desc: "Hospitality, shared table, community. The heart of everything we do." },
      { emoji: "🇯🇵", label: "Japanese Heritage (Jesrae)", desc: "Precision, respect for technique, care in every detail." },
      { emoji: "🇭🇰", label: "Hong Kong (Marjorie)", desc: "Professional mastery of dim sum and classic Chinese cuisine." },
      { emoji: "🇸🇬", label: "Singapore", desc: "Living proof that different cultures can coexist beautifully on one table." }]
    },
    journey: {
      title: "The Journey",
      stops: [
      { place: "Philippines", desc: "The beginning. A family with tradition, hospitality, and a cultural identity that would travel the world without ever getting lost." },
      { place: "Singapore", desc: "Jesrae lives authentic Asian street food culture — traditional markets, local kitchens, the vibrant daily life of Asian gastronomy." },
      { place: "Hong Kong", desc: "Marjorie works for 7 years in one of the world's greatest centers of Chinese cuisine, mastering dim sum and professional kitchen discipline." },
      { place: "Gravataí, Brasil — 2025", desc: "Two paths converge. Jejori Asian Haus opens at R. Cônego Pedro Wagner, 782 — Centro, Gravataí — bringing authentic Filipino and Asian cuisine to Southern Brazil." },
      { place: "Porto Alegre, Cidade Baixa", desc: "The Cidade Baixa unit (R. Luís Afonso, 26) continues to serve the Porto Alegre community, bringing the Jejori experience to the heart of the city." }]
    },
    together: {
      title: "🤝 Where It All Came Together",
      body: "In 2025, Jesrae and Marjorie met — and quickly recognized a shared vision: to bring authentic Filipino and Asian cuisine to Brazil in a way that is <em>accessible, consistent, and rooted in tradition</em>. Not as a generic franchise. As a real family, with real stories, serving with heart.",
      jesrae: "Business vision, systems, and operations — structure to grow without losing the soul",
      marjorie: "Decades of culinary mastery — the technique that ensures every dish tells the right story"
    },
    nameChange: {
      title: "✨ From Dimsum Haus to Asian Haus",
      body: [
      "We started as <strong>Jejori Dimsum Haus</strong> — dim sum was our personal favorite, shaped by years of experience in Hong Kong and the founders' genuine love for this dish.",
      "But along the way we realized that limiting the name to a single dish would be <em>underselling who we truly are</em>. We are Filipino. We carry a rich cultural identity connected to all of Asia.",
      "And so <strong>Jejori Asian Haus</strong> was born: a name that embraces who we are — a Filipino family serving Asian favorites with dim sum at the heart, but no borders on the menu."]
    },
    nextChapter: {
      title: "🇺🇾 And Then — Uruguay",
      body: "Jejori in Brazil found its place. And I, Jesrae, made a difficult but necessary decision: <strong>I handed the Jejori Asian Haus of Brazil to Marjorie</strong>. The kitchen of this country belongs in her hands — it's where Jejori grows strong. I followed a different calling. Uruguay was waiting. A new page, a new country, a new table to build from scratch — this time, my own. Brazil's chapter closes here, with gratitude. The next chapter is written in Montevideo."
    },
    pillars: {
      title: "🏮 Our Purpose",
      items: [
      { label: "Mission", text: "Bring authentic Asian and Filipino cuisine to the Brazilian community, preserving the traditions and techniques that define it — always rooted in Filipino hospitality." },
      { label: "Vision", text: "Grow Jejori in Brazil as a brand recognized for authenticity, consistency, and cultural experience — with a distinct Filipino identity, never a generic pan-Asian concept." },
      { label: "Commitment", text: "Every dish carries a story of culture, experience, and intention — backed by real journeys, culinary mastery, and the genuine warmth of a Filipino family." }]
    },
    cta: { tag: "We invite you to experience this with us", title: "Come", highlight: "Taste the Story", btn: "View Menu" },
    founderNames: "Jesrae & Marjorie",
    founderCard: "Founders of Jejori Asian Haus — Brazil"
  }
};

export const uruguaiContent = {
  pt: {
    heroTag: "Montevideo, Uruguai",
    heroSub: "Uma nova página. O mesmo coração filipino. A minha própria casa no Uruguai.",
    identity: {
      title: "🇵🇭 O Meu Próprio Capítulo",
      body: [
      "O Jejori nasceu no Brasil. Mas esta página é minha.",
      "Sou o Jesrae. Filipino com descendência japonesa. Entreguei o Jejori Asian Haus do Brasil à Marjorie — porque a cozinha daquele país pertence às mãos dela. E segui um chamado diferente: construir a minha própria casa, do zero, em Montevideo.",
      "Isto não é uma filial do Brasil. É um começo novo — a mesma raiz filipina, mas a minha própria história, a minha própria mesa, o meu próprio nome."]
    },
    kamayan: {
      title: "🔥 Chef de Coração",
      body: "Dizem que sou um Analista de Negócios Sênior que viaja e come comida. Mas a verdade é outra. <strong>Sou um chef de coração.</strong> A planilha e o caldo, o relatório e a faca — para mim, nunca foram mundos separados. Cada país que vivi virou cozinha dentro de mim. Cozinhar não é o que eu faço depois do trabalho. É o trabalho. É quem eu sou. E agora, em Montevideo, é também o meu próprio restaurante."
    },
    story: {
      title: "🌏 A Minha Jornada",
      jesrae: "<strong>Jesrae Cudal Laguna</strong> — Filipino com descendência japonesa. Analista de Negócios Sênior de dia, chef de coração sempre. Singapura me ensinou a rua. O Brasil me ensinou a família. Agora o Uruguai me ensina a começar de novo — sozinho, com a minha própria mesa, levando o dim sum e a alma filipina a um país que ainda não os conhece como eu os carrego."
    },
    anchors: {
      title: "🧭 As Minhas Âncoras",
      items: [
      { emoji: "🇵🇭", label: "Filipinas — A Raiz", desc: "Hospitalidade, mesa compartilhada, comunidade. De onde eu venho, não importa para onde vá." },
      { emoji: "🇯🇵", label: "Herança Japonesa", desc: "Precisão, respeito pela técnica, cuidado com cada detalhe — em cada processo, em cada prato." },
      { emoji: "🇸🇬", label: "Singapura", desc: "Onde vivi a rua, os mercados, a vida. A fonte da minha obsessão pela comida asiática autêntica." },
      { emoji: "🇺🇾", label: "Uruguai — A Nova Casa", desc: "Montevideo. Onde começo do zero, humilde e honesto, com a minha própria cozinha." }]
    },
    journey: {
      title: "A Minha Jornada",
      stops: [
      { place: "Filipinas", desc: "Onde tudo começou. Uma família, uma mesa, uma identidade que viajaria comigo pelo mundo inteiro." },
      { place: "Singapura", desc: "A rua me formou. Mercados, cozinhas locais, a vida vibrante da gastronomia asiática — comida como cultura, não como evento." },
      { place: "Brasil — com a Marjorie", desc: "O Jejori nasceu dos dois. Construímos juntos o Jejori Asian Haus no Sul do Brasil." },
      { place: "A Entrega", desc: "Entreguei o Jejori do Brasil à Marjorie. A cozinha daquele país pertence a ela. Eu precisava do meu próprio capítulo." },
      { place: "Montevideo, Uruguai", desc: "A minha própria casa. Começo com take-away e delivery — humilde, honesto, do zero. A mesma alma filipina, agora em solo uruguaio." }]
    },
    together: {
      title: "🇺🇾 Por que o Uruguai",
      body: "Por que Montevideo? Porque é aqui que quero provar que sou mais do que um currículo. Uma família filipina, uma mesa própria, num país que ainda não conhece o dim sum como eu o carrego. <em>Take-away e delivery no começo</em> — humilde, honesto, do zero. Sem o luxo do dine-in, mas com toda a intenção de chegar lá.",
      jesrae: "A cozinha, a operação e a alma do Jejori Montevideo — tudo assinado por mim, do zero."
    },
    nameChange: {
      title: "✨ De Dimsum Haus para Asian Haus",
      body: [
      "Começamos como <strong>Jejori Dimsum Haus</strong> — o dim sum era o favorito pessoal, moldado por anos de experiência em Hong Kong e o amor genuíno por este prato.",
      "Mas limitar o nome a um único prato seria <em>subestimar quem somos de verdade</em>. Somos filipinos. Carregamos uma identidade cultural rica, conectada a toda a Ásia.",
      "Assim nasceu o <strong>Jejori Asian Haus</strong>: uma família filipina servindo os favoritos asiáticos com o dim sum no coração, sem fronteiras no cardápio. O mesmo nome, agora em Montevideo — a minha própria página."]
    },
    pillars: {
      title: "🏮 O Meu Propósito em Montevideo",
      items: [
      { label: "Missão", text: "Trazer a culinária filipina e asiática autêntica ao Uruguai, do zero — começando humilde com take-away e delivery, sempre enraizada na hospitalidade filipina." },
      { label: "Visão", text: "Construir o Jejori Montevideo como a minha própria casa — uma marca reconhecida pela autenticidade e consistência, nunca um conceito genérico pan-asiático." },
      { label: "Compromisso", text: "Cada prato assinado por mim. Cada processo, cada detalhe. Sou Analista de Negócios Sênior e chef de coração — e esta mesa é minha." }]
    },
    cta: { tag: "Convido você a provar o meu capítulo", title: "Venha", highlight: "Provar a Minha História", btn: "Ver Menú" },
    founderNames: "Jesrae",
    founderCard: "Jesrae Cudal Laguna — Montevideo, Uruguai"
  },

  es: {
    heroTag: "Montevideo, Uruguay",
    heroSub: "Una nueva página. El mismo corazón filipino. Mi propia casa en Uruguay.",
    identity: {
      title: "🇵🇭 Mi Propio Capítulo",
      body: [
      "Jejori nació en Brasil. Pero esta página es mía.",
      "Soy Jesrae. Filipino con ascendencia japonesa. Le entregué el Jejori Asian Haus de Brasil a Marjorie — porque la cocina de ese país pertenece a sus manos. Y seguí un llamado distinto: construir mi propia casa, desde cero, en Montevideo.",
      "Esto no es una sucursal de Brasil. Es un comienzo nuevo — la misma raíz filipina, pero mi propia historia, mi propia mesa, mi propio nombre."]
    },
    kamayan: {
      title: "🔥 Chef de Corazón",
      body: "Dicen que soy un Analista de Negocios Senior que viaja y come comida. Pero la verdad es otra. <strong>Soy un chef de corazón.</strong> La planilla y el caldo, el informe y el cuchillo — para mí, nunca fueron mundos separados. Cada país que viví se volvió cocina dentro de mí. Cocinar no es lo que hago después del trabajo. Es el trabajo. Es quien soy. Y ahora, en Montevideo, es también mi propio restaurante."
    },
    story: {
      title: "🌏 Mi Viaje",
      jesrae: "<strong>Jesrae Cudal Laguna</strong> — Filipino con ascendencia japonesa. Analista de Negocios Senior de día, chef de corazón siempre. Singapur me enseñó la calle. Brasil me enseñó la familia. Ahora Uruguay me enseña a empezar de nuevo — solo, con mi propia mesa, llevando el dim sum y el alma filipina a un país que aún no los conoce como yo los cargo."
    },
    anchors: {
      title: "🧭 Mis Anclas",
      items: [
      { emoji: "🇵🇭", label: "Filipinas — La Raíz", desc: "Hospitalidad, mesa compartida, comunidad. De donde vengo, no importa a dónde vaya." },
      { emoji: "🇯🇵", label: "Herencia Japonesa", desc: "Precisión, respeto por la técnica, cuidado en cada detalle — en cada proceso, en cada plato." },
      { emoji: "🇸🇬", label: "Singapur", desc: "Donde viví la calle, los mercados, la vida. La fuente de mi obsesión por la comida asiática auténtica." },
      { emoji: "🇺🇾", label: "Uruguay — La Nueva Casa", desc: "Montevideo. Donde empiezo desde cero, humilde y honesto, con mi propia cocina." }]
    },
    journey: {
      title: "Mi Viaje",
      stops: [
      { place: "Filipinas", desc: "Donde todo comenzó. Una familia, una mesa, una identidad que viajaría conmigo por el mundo entero." },
      { place: "Singapur", desc: "La calle me formó. Mercados, cocinas locales, la vida vibrante de la gastronomía asiática — comida como cultura, no como evento." },
      { place: "Brasil — con Marjorie", desc: "Jejori nació de los dos. Construimos juntos el Jejori Asian Haus en el Sur de Brasil." },
      { place: "La Entrega", desc: "Le entregué el Jejori de Brasil a Marjorie. La cocina de ese país le pertenece. Yo necesitaba mi propio capítulo." },
      { place: "Montevideo, Uruguay", desc: "Mi propia casa. Arranco con take-away y delivery — humilde, honesto, desde cero. El mismo alma filipina, ahora en suelo uruguayo." }]
    },
    together: {
      title: "🇺🇾 Por qué Uruguay",
      body: "¿Por qué Montevideo? Porque es aquí donde quiero demostrar que soy más que un currículum. Una familia filipina, una mesa propia, en un país que aún no conoce el dim sum como yo lo cargo. <em>Take-away y delivery al principio</em> — humilde, honesto, desde cero. Sin el lujo del dine-in, pero con toda la intención de llegar ahí.",
      jesrae: "La cocina, la operación y el alma de Jejori Montevideo — todo firmado por mí, desde cero."
    },
    nameChange: {
      title: "✨ De Dimsum Haus a Asian Haus",
      body: [
      "Comenzamos como <strong>Jejori Dimsum Haus</strong> — el dim sum era el favorito personal, moldeado por años de experiencia en Hong Kong y el amor genuino por este plato.",
      "Pero limitar el nombre a un solo plato sería <em>subestimar quiénes somos en realidad</em>. Somos filipinos. Llevamos una identidad cultural rica, conectada con toda Asia.",
      "Así nació <strong>Jejori Asian Haus</strong>: una familia filipina sirviendo los favoritos asiáticos con el dim sum en el corazón, sin fronteras en el menú. El mismo nombre, ahora en Montevideo — mi propia página."]
    },
    pillars: {
      title: "🏮 Mi Propósito en Montevideo",
      items: [
      { label: "Misión", text: "Traer la cocina filipina y asiática auténtica a Uruguay, desde cero — empezando humilde con take-away y delivery, siempre arraigada en la hospitalidad filipina." },
      { label: "Visión", text: "Construir Jejori Montevideo como mi propia casa — una marca reconocida por autenticidad y consistencia, nunca un concepto genérico pan-asiático." },
      { label: "Compromiso", text: "Cada plato firmado por mí. Cada proceso, cada detalle. Soy Analista de Negocios Senior y chef de corazón — y esta mesa es mía." }]
    },
    cta: { tag: "Te invito a probar mi capítulo", title: "Ven a", highlight: "Probar Mi Historia", btn: "Ver Menú" },
    founderNames: "Jesrae",
    founderCard: "Jesrae Cudal Laguna — Montevideo, Uruguay"
  },

  en: {
    heroTag: "Montevideo, Uruguay",
    heroSub: "A new chapter. The same Filipino heart. My own house in Uruguay.",
    identity: {
      title: "🇵🇭 My Own Chapter",
      body: [
      "Jejori was born in Brazil. But this page is mine.",
      "I'm Jesrae. Filipino with Japanese descent. I handed the Jejori Asian Haus of Brazil to Marjorie — because the kitchen of that country belongs in her hands. And I followed a different calling: to build my own house, from scratch, in Montevideo.",
      "This is not a branch of Brazil. It is a new beginning — the same Filipino root, but my own story, my own table, my own name."]
    },
    kamayan: {
      title: "🔥 A Chef at Heart",
      body: "They say I'm a Senior Business Analyst who travels and eats food. But the truth is different. <strong>I am a chef at heart.</strong> The spreadsheet and the broth, the report and the knife — for me, they were never separate worlds. Every country I lived in became a kitchen inside me. Cooking is not what I do after work. It is the work. It is who I am. And now, in Montevideo, it is also my own restaurant."
    },
    story: {
      title: "🌏 My Journey",
      jesrae: "<strong>Jesrae Cudal Laguna</strong> — Filipino with Japanese descent. Senior Business Analyst by day, chef at heart always. Singapore taught me the street. Brazil taught me family. Now Uruguay teaches me to start over — on my own, with my own table, bringing dim sum and the Filipino soul to a country that does not yet know them the way I carry them."
    },
    anchors: {
      title: "🧭 My Anchors",
      items: [
      { emoji: "🇵🇭", label: "Philippines — The Root", desc: "Hospitality, shared table, community. Where I come from, no matter where I go." },
      { emoji: "🇯🇵", label: "Japanese Heritage", desc: "Precision, respect for technique, care in every detail — in every process, in every dish." },
      { emoji: "🇸🇬", label: "Singapore", desc: "Where I lived the street, the markets, the life. The source of my obsession with authentic Asian food." },
      { emoji: "🇺🇾", label: "Uruguay — The New Home", desc: "Montevideo. Where I start from scratch, humble and honest, with my own kitchen." }]
    },
    journey: {
      title: "My Journey",
      stops: [
      { place: "Philippines", desc: "Where it all began. A family, a table, an identity that would travel with me across the world." },
      { place: "Singapore", desc: "The street shaped me. Markets, local kitchens, the vibrant life of Asian gastronomy — food as culture, not as event." },
      { place: "Brazil — with Marjorie", desc: "Jejori was born of the two of us. We built Jejori Asian Haus together in Southern Brazil." },
      { place: "The Handover", desc: "I handed Jejori of Brazil to Marjorie. The kitchen of that country belongs to her. I needed my own chapter." },
      { place: "Montevideo, Uruguay", desc: "My own house. I start with take-away and delivery — humble, honest, from scratch. The same Filipino soul, now on Uruguayan soil." }]
    },
    together: {
      title: "🇺🇾 Why Uruguay",
      body: "Why Montevideo? Because this is where I want to prove I am more than a résumé. A Filipino family, a table of my own, in a country that does not yet know dim sum the way I carry it. <em>Take-away and delivery at first</em> — humble, honest, from scratch. Without the luxury of dine-in, but with every intention of getting there.",
      jesrae: "The kitchen, the operation, and the soul of Jejori Montevideo — all signed by me, from scratch."
    },
    nameChange: {
      title: "✨ From Dimsum Haus to Asian Haus",
      body: [
      "We started as <strong>Jejori Dimsum Haus</strong> — dim sum was the personal favorite, shaped by years of experience in Hong Kong and a genuine love for this dish.",
      "But limiting the name to a single dish would be <em>underselling who we truly are</em>. We are Filipino. We carry a rich cultural identity connected to all of Asia.",
      "And so <strong>Jejori Asian Haus</strong> was born: a Filipino family serving Asian favorites with dim sum at the heart, no borders on the menu. The same name, now in Montevideo — my own page."]
    },
    pillars: {
      title: "🏮 My Purpose in Montevideo",
      items: [
      { label: "Mission", text: "Bring authentic Filipino and Asian cuisine to Uruguay, from scratch — starting humble with take-away and delivery, always rooted in Filipino hospitality." },
      { label: "Vision", text: "Build Jejori Montevideo as my own house — a brand recognized for authenticity and consistency, never a generic pan-Asian concept." },
      { label: "Commitment", text: "Every dish signed by me. Every process, every detail. I am a Senior Business Analyst and a chef at heart — and this table is mine." }]
    },
    cta: { tag: "I invite you to taste my chapter", title: "Come", highlight: "Taste My Story", btn: "View Menu" },
    founderNames: "Jesrae",
    founderCard: "Jesrae Cudal Laguna — Montevideo, Uruguay"
  }
};