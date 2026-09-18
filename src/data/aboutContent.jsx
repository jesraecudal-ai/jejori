// Country-specific About content for Jejori Asian Haus.
// Brasil: the shared origin story, ending with Jesrae handing Jejori to Marjorie
// and leaving for Uruguay. Uruguai: Jesrae's own chapter — a chef at heart.

const HERO_IMAGE_BR = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const INTERIOR_IMAGE_BR = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg";
const HERO_IMAGE_UY = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/9dc10e0eb_jejoriuruguay.jpg";
const INTERIOR_IMAGE_UY = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg";
const FOUNDERS_PHOTO = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5799de77a_WhatsAppImage2026-05-03at180311.jpg";
const UY_FAMILY_PHOTO = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/a07f2406b_814493612_122107844409472525_5163511646555266644_n.jpg";

export const aboutImages = {
  brasil: { hero: HERO_IMAGE_BR, interior: INTERIOR_IMAGE_BR, founder: FOUNDERS_PHOTO },
  uruguai: { hero: HERO_IMAGE_UY, interior: INTERIOR_IMAGE_UY, founder: UY_FAMILY_PHOTO, founders: FOUNDERS_PHOTO },
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
    heroSub: "Uma nova página. O mesmo coração filipino. Jesrae e a família inteira, numa nova casa — Uruguai.",
    identity: {
      title: "🇵🇭 A História do Jesrae — e a Família Dele",
      body: [
      "Deixa eu te contar a história do Jesrae.",
      "Filipino com descendência japonesa, Analista de Negócios Sênior de dia e chef de coração sempre. O Jejori nasceu no Brasil, das mãos dele e das mãos da Marjorie. Cresceu, virou dois endereços, virou uma família.",
      "Quando chegou a hora do próximo capítulo, o Jesrae não foi sozinho. Levou com ele a família inteira — a mãe, o pai, o irmão e a irmã. Uma casa filipina se muda junto. E em Montevideo estão plantando a própria mesa.",
      "Não foi separação. Foi <strong>EXPANSÃO</strong>. O Brasil continua forte, nas mãos da Marjorie e da família dela. O Uruguai é a nova casa deles — a mesma raiz, duas famílias, uma mesa que só cresce."]
    },
    kamayan: {
      title: "🔥 Chef de Coração",
      body: "Dizem que ele é um Analista de Negócios Sênior que viaja e come comida. Mas a verdade é outra. O Jesrae é <strong>um chef de coração</strong>. A planilha e o caldo, o relatório e a faca — para ele, nunca foram mundos separados. Cada país que viveu virou cozinha dentro dele. Cozinhar não é o que ele faz depois do trabalho. É o trabalho. É quem ele é. E agora, em Montevideo, com a família ao lado dele, é também o próprio restaurante deles."
    },
    story: {
      title: "🌏 A Jornada Dele",
      jesrae: "<strong>Jesrae Cudal Laguna</strong> — Filipino com descendência japonesa. Analista de Negócios Sênior de dia, chef de coração sempre. Singapura ensinou a ele a rua. O Brasil ensinou a ele a construir junto. Agora o Uruguai ensina a ele a começar de novo — não sozinho, mas com a família inteira ao lado: a mãe, o pai, o irmão e a irmã. Levam juntos o dim sum e a alma filipina a um país que ainda não os conhece como eles os carregam."
    },
    anchors: {
      title: "🧭 As Âncoras Dele",
      items: [
      { emoji: "🇵🇭", label: "Filipinas — A Raiz", desc: "Hospitalidade, mesa compartilhada, comunidade. De onde ele vem, não importa para onde vá." },
      { emoji: "🇯🇵", label: "Herança Japonesa", desc: "Precisão, respeito pela técnica, cuidado com cada detalhe — em cada processo, em cada prato." },
      { emoji: "🇸🇬", label: "Singapura", desc: "Onde ele viveu a rua, os mercados, a vida. A fonte da obsessão dele pela comida asiática autêntica." },
      { emoji: "👨‍👩‍👧‍👦", label: "A Família Dele", desc: "Mãe, pai, irmão e irmã. Foram com ele para Montevideo. Uma casa filipina se muda junto." },
      { emoji: "🇺🇾", label: "Uruguai — A Nova Casa", desc: "Montevideo. Onde plantam a própria mesa, humilde e honesto, do zero." }]
    },
    journey: {
      title: "A Jornada Dele",
      stops: [
      { place: "Filipinas", desc: "Onde tudo começou. Uma família, uma mesa, uma identidade que viajaria com ele pelo mundo inteiro." },
      { place: "Singapura", desc: "A rua formou ele. Mercados, cozinhas locais, a vida vibrante da gastronomia asiática — comida como cultura, não como evento." },
      { place: "Brasil — com a Marjorie", desc: "O Jejori nasceu dos dois. Cresceu e virou dois endereços no Sul do Brasil. Hoje é a Marjorie e a família dela que seguram aquela casa." },
      { place: "A Expansão", desc: "Não foi despedida. Foi expansão. O Brasil ficou forte com a Marjorie; ele seguiu com a família dele — mãe, pai, irmão, irmã — para plantar a próxima mesa." },
      { place: "Montevideo, Uruguai", desc: "A nova casa deles. Chegaram em família, começam com take-away e delivery — humilde, honesto, do zero. A mesma alma filipina, agora em solo uruguaio." }]
    },
    together: {
      title: "🇺🇾 Uma Expansão, Não uma Separação",
      body: "O Brasil não ficou para trás. Os dois restaurantes do Jejori no Brasil seguem fortes — agora nas mãos da Marjorie e da família dela, que cuidam daquela casa com o mesmo coração. E o Jesrae? Trouxe a família inteira — a mãe, o pai, o irmão e a irmã — para Montevideo. <em>Take-away e delivery no começo</em>, humilde e honesto, do zero. Não se separaram. São a mesma família filipina, agora em duas casas, em dois países, uma mesa que só cresce.",
      jesrae: "Jejori Montevideo — a cozinha, a operação e a alma, assinados pelo Jesrae e pela família dele.",
      marjorie: "Jejori Brasil — os dois endereços, sob os cuidados da Marjorie e da família dela."
    },
    nameChange: {
      title: "✨ De Dimsum Haus para Asian Haus",
      body: [
      "Começamos como <strong>Jejori Dimsum Haus</strong> — o dim sum era o favorito pessoal, moldado por anos de experiência em Hong Kong e o amor genuíno por este prato.",
      "Mas limitar o nome a um único prato seria <em>subestimar quem somos de verdade</em>. Somos filipinos. Carregamos uma identidade cultural rica, conectada a toda a Ásia.",
      "Assim nasceu o <strong>Jejori Asian Haus</strong>: uma família filipina servindo os favoritos asiáticos com o dim sum no coração, sem fronteiras no cardápio. O mesmo nome, agora em duas casas — Brasil e Uruguai."]
    },
    pillars: {
      title: "🏮 O Propósito Deles em Montevideo",
      items: [
      { label: "Missão", text: "Trazer a culinária filipina e asiática autêntica ao Uruguai, em família — começando humilde com take-away e delivery, sempre enraizada na hospitalidade filipina." },
      { label: "Visão", text: "Expandir o Jejori a um segundo país, como uma família — a mesma marca, o mesmo coração, agora em duas casas." },
      { label: "Compromisso", text: "Cada prato assinado pelo Jesrae e pela família dele. Não é separação do Brasil — é expansão. O Brasil segue com a Marjorie; o Uruguai segue com eles." }]
    },
    cta: { tag: "Convidamos você a provar o capítulo deles", title: "Venha", highlight: "Provar a História Deles", btn: "Ver Menú" },
    founderNames: "Jesrae & a sua família",
    founderCard: "Jesrae Cudal Laguna e a família — Montevideo, Uruguai"
  },

  es: {
    heroTag: "Montevideo, Uruguay",
    heroSub: "Una nueva página. El mismo corazón filipino. Jesrae y toda su familia, en una nueva casa — Uruguay.",
    identity: {
      title: "🇵🇭 La Historia de Jesrae — y su Familia",
      body: [
      "Déjame contarte la historia de Jesrae.",
      "Filipino con ascendencia japonesa, Analista de Negocios Senior de día y chef de corazón siempre. Jejori nació en Brasil, de sus manos y de las de Marjorie. Creció, se volvió dos direcciones, se volvió una familia.",
      "Cuando llegó la hora del próximo capítulo, Jesrae no se fue solo. Se llevó a toda su familia — su mamá, su papá, su hermano y su hermana. Una casa filipina se muda junta. Y en Montevideo están plantando su propia mesa.",
      "No fue separación. Fue <strong>EXPANSIÓN</strong>. Brasil sigue fuerte, en manos de Marjorie y de su familia. Uruguay es la nueva casa de ellos — la misma raíz, dos familias, una mesa que solo crece."]
    },
    kamayan: {
      title: "🔥 Chef de Corazón",
      body: "Dicen que él es un Analista de Negocios Senior que viaja y come comida. Pero la verdad es otra. Jesrae es <strong>un chef de corazón</strong>. La planilla y el caldo, el informe y el cuchillo — para él, nunca fueron mundos separados. Cada país que vivió se volvió cocina dentro de él. Cocinar no es lo que hace después del trabajo. Es el trabajo. Es quien es. Y ahora, en Montevideo, con su familia a su lado, es también el propio restaurante de ellos."
    },
    story: {
      title: "🌏 Su Viaje",
      jesrae: "<strong>Jesrae Cudal Laguna</strong> — Filipino con ascendencia japonesa. Analista de Negocios Senior de día, chef de corazón siempre. Singapur le enseñó la calle. Brasil le enseñó a construir juntos. Ahora Uruguay le enseña a empezar de nuevo — no solo, sino con toda su familia a su lado: su mamá, su papá, su hermano y su hermana. Llevan juntos el dim sum y el alma filipina a un país que aún no los conoce como ellos los cargan."
    },
    anchors: {
      title: "🧭 Sus Anclas",
      items: [
      { emoji: "🇵🇭", label: "Filipinas — La Raíz", desc: "Hospitalidad, mesa compartida, comunidad. De donde él viene, no importa a dónde vaya." },
      { emoji: "🇯🇵", label: "Herencia Japonesa", desc: "Precisión, respeto por la técnica, cuidado en cada detalle — en cada proceso, en cada plato." },
      { emoji: "🇸🇬", label: "Singapur", desc: "Donde vivió la calle, los mercados, la vida. La fuente de su obsesión por la comida asiática auténtica." },
      { emoji: "👨‍👩‍👧‍👦", label: "Su Familia", desc: "Mamá, papá, hermano y hermana. Fueron con él a Montevideo. Una casa filipina se muda junta." },
      { emoji: "🇺🇾", label: "Uruguay — La Nueva Casa", desc: "Montevideo. Donde plantan su propia mesa, humilde y honesto, desde cero." }]
    },
    journey: {
      title: "Su Viaje",
      stops: [
      { place: "Filipinas", desc: "Donde todo comenzó. Una familia, una mesa, una identidad que viajaría con él por el mundo entero." },
      { place: "Singapur", desc: "La calle lo formó. Mercados, cocinas locales, la vida vibrante de la gastronomía asiática — comida como cultura, no como evento." },
      { place: "Brasil — con Marjorie", desc: "Jejori nació de los dos. Creció y se volvió dos direcciones en el Sur de Brasil. Hoy es Marjorie y su familia quienes sostienen esa casa." },
      { place: "La Expansión", desc: "No fue despedida. Fue expansión. Brasil quedó fuerte con Marjorie; él siguió con su familia — mamá, papá, hermano, hermana — a plantar la próxima mesa." },
      { place: "Montevideo, Uruguay", desc: "La nueva casa de ellos. Llegaron en familia, arrancan con take-away y delivery — humilde, honesto, desde cero. El mismo alma filipina, ahora en suelo uruguayo." }]
    },
    together: {
      title: "🇺🇾 Una Expansión, No una Separación",
      body: "Brasil no se quedó atrás. Los dos restaurantes de Jejori en Brasil siguen fuertes — ahora en manos de Marjorie y de su familia, que cuidan esa casa con el mismo corazón. ¿Y Jesrae? Trajo a toda su familia — su mamá, su papá, su hermano y su hermana — a Montevideo. <em>Take-away y delivery al principio</em>, humilde y honesto, desde cero. No se separaron. Son la misma familia filipina, ahora en dos casas, en dos países, una mesa que solo crece.",
      jesrae: "Jejori Montevideo — la cocina, la operación y el alma, firmados por Jesrae y por su familia.",
      marjorie: "Jejori Brasil — las dos direcciones, bajo el cuidado de Marjorie y de su familia."
    },
    nameChange: {
      title: "✨ De Dimsum Haus a Asian Haus",
      body: [
      "Comenzamos como <strong>Jejori Dimsum Haus</strong> — el dim sum era el favorito personal, moldeado por años de experiencia en Hong Kong y el amor genuino por este plato.",
      "Pero limitar el nombre a un solo plato sería <em>subestimar quiénes somos en realidad</em>. Somos filipinos. Llevamos una identidad cultural rica, conectada con toda Asia.",
      "Así nació <strong>Jejori Asian Haus</strong>: una familia filipina sirviendo los favoritos asiáticos con el dim sum en el corazón, sin fronteras en el menú. El mismo nombre, ahora en dos casas — Brasil y Uruguay."]
    },
    pillars: {
      title: "🏮 El Propósito de Ellos en Montevideo",
      items: [
      { label: "Misión", text: "Traer la cocina filipina y asiática auténtica a Uruguay, en familia — empezando humilde con take-away y delivery, siempre arraigada en la hospitalidad filipina." },
      { label: "Visión", text: "Expandir Jejori a un segundo país, como una familia — la misma marca, el mismo corazón, ahora en dos casas." },
      { label: "Compromiso", text: "Cada plato firmado por Jesrae y por su familia. No es separación de Brasil — es expansión. Brasil sigue con Marjorie; Uruguay sigue con ellos." }]
    },
    cta: { tag: "Te invitamos a probar el capítulo de ellos", title: "Ven a", highlight: "Probar Su Historia", btn: "Ver Menú" },
    founderNames: "Jesrae y su familia",
    founderCard: "Jesrae Cudal Laguna y la familia — Montevideo, Uruguay"
  },

  en: {
    heroTag: "Montevideo, Uruguay",
    heroSub: "A new chapter. The same Filipino heart. Jesrae and his whole family, in a new home — Uruguay.",
    identity: {
      title: "🇵🇭 The Story of Jesrae — and His Family",
      body: [
      "Let me tell you the story of Jesrae.",
      "Filipino with Japanese descent, Senior Business Analyst by day and chef at heart always. Jejori was born in Brazil, from his hands and Marjorie's. It grew, became two addresses, became a family.",
      "When the time came for the next chapter, Jesrae didn't go alone. He brought his whole family with him — his mom, his dad, his brother and his sister. A Filipino household moves together. And in Montevideo they are planting their own table.",
      "It wasn't separation. It was <strong>EXPANSION</strong>. Brazil stays strong, in Marjorie's hands and her family's. Uruguay is their new home — the same root, two families, one table that only grows."]
    },
    kamayan: {
      title: "🔥 A Chef at Heart",
      body: "They say he's a Senior Business Analyst who travels and eats food. But the truth is different. Jesrae is <strong>a chef at heart</strong>. The spreadsheet and the broth, the report and the knife — for him, they were never separate worlds. Every country he lived in became a kitchen inside him. Cooking is not what he does after work. It is the work. It is who he is. And now, in Montevideo, with his family beside him, it is also their own restaurant."
    },
    story: {
      title: "🌏 His Journey",
      jesrae: "<strong>Jesrae Cudal Laguna</strong> — Filipino with Japanese descent. Senior Business Analyst by day, chef at heart always. Singapore taught him the street. Brazil taught him to build together. Now Uruguay teaches him to start over — not alone, but with his whole family beside him: his mom, his dad, his brother and his sister. Together they carry dim sum and the Filipino soul to a country that does not yet know them the way they carry them."
    },
    anchors: {
      title: "🧭 His Anchors",
      items: [
      { emoji: "🇵🇭", label: "Philippines — The Root", desc: "Hospitality, shared table, community. Where he comes from, no matter where he goes." },
      { emoji: "🇯🇵", label: "Japanese Heritage", desc: "Precision, respect for technique, care in every detail — in every process, in every dish." },
      { emoji: "🇸🇬", label: "Singapore", desc: "Where he lived the street, the markets, the life. The source of his obsession with authentic Asian food." },
      { emoji: "👨‍👩‍👧‍👦", label: "His Family", desc: "Mom, dad, brother and sister. They came with him to Montevideo. A Filipino household moves together." },
      { emoji: "🇺🇾", label: "Uruguay — The New Home", desc: "Montevideo. Where they plant their own table, humble and honest, from scratch." }]
    },
    journey: {
      title: "His Journey",
      stops: [
      { place: "Philippines", desc: "Where it all began. A family, a table, an identity that would travel with him across the world." },
      { place: "Singapore", desc: "The street shaped him. Markets, local kitchens, the vibrant life of Asian gastronomy — food as culture, not as event." },
      { place: "Brazil — with Marjorie", desc: "Jejori was born of the two of them. It grew into two addresses in Southern Brazil. Today it's Marjorie and her family who hold that house." },
      { place: "The Expansion", desc: "It wasn't a farewell. It was expansion. Brazil stayed strong with Marjorie; he left with his family — mom, dad, brother, sister — to plant the next table." },
      { place: "Montevideo, Uruguay", desc: "Their new home. They arrived as a family, they start with take-away and delivery — humble, honest, from scratch. The same Filipino soul, now on Uruguayan soil." }]
    },
    together: {
      title: "🇺🇾 An Expansion, Not a Separation",
      body: "Brazil was not left behind. The two Jejori restaurants in Brazil stay strong — now in the hands of Marjorie and her family, who care for that house with the same heart. And Jesrae? He brought his whole family — his mom, his dad, his brother and his sister — to Montevideo. <em>Take-away and delivery at first</em>, humble and honest, from scratch. They did not split apart. They are the same Filipino family, now in two homes, in two countries, one table that only grows.",
      jesrae: "Jejori Montevideo — the kitchen, the operation and the soul, signed by Jesrae and by his family.",
      marjorie: "Jejori Brazil — the two addresses, in the care of Marjorie and her family."
    },
    nameChange: {
      title: "✨ From Dimsum Haus to Asian Haus",
      body: [
      "We started as <strong>Jejori Dimsum Haus</strong> — dim sum was the personal favorite, shaped by years of experience in Hong Kong and a genuine love for this dish.",
      "But limiting the name to a single dish would be <em>underselling who we truly are</em>. We are Filipino. We carry a rich cultural identity connected to all of Asia.",
      "And so <strong>Jejori Asian Haus</strong> was born: a Filipino family serving Asian favorites with dim sum at the heart, no borders on the menu. The same name, now in two homes — Brazil and Uruguay."]
    },
    pillars: {
      title: "🏮 Their Purpose in Montevideo",
      items: [
      { label: "Mission", text: "Bring authentic Filipino and Asian cuisine to Uruguay, as a family — starting humble with take-away and delivery, always rooted in Filipino hospitality." },
      { label: "Vision", text: "Expand Jejori into a second country, as a family — the same brand, the same heart, now in two homes." },
      { label: "Commitment", text: "Every dish signed by Jesrae and by his family. It is not separation from Brazil — it is expansion. Brazil stays with Marjorie; Uruguay stays with them." }]
    },
    cta: { tag: "We invite you to taste their chapter", title: "Come", highlight: "Taste Their Story", btn: "View Menu" },
    founderNames: "Jesrae & his family",
    founderCard: "Jesrae Cudal Laguna and the family — Montevideo, Uruguay"
  }
};