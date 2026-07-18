import React, { useState } from "react";
import { motion } from "framer-motion";
import GoldButton from "../components/shared/GoldButton";
import { MapPin, Globe } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const INTERIOR_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg";

const content = {
  pt: {
    heroTag: "Gravataí, Brasil",
    heroSub: "Uma família filipina contando a história da Ásia — para um novo lar no Brasil e no Uruguai.",
    identity: {
      title: "🇵🇭 Filipino Primeiro. Asiático em Toda a Extensão.",
      body: [
        "Antes de Singapura. Antes de Hong Kong. Antes do Brasil e do Uruguai. Há uma família filipina — com suas próprias tradições, sabores e uma hospitalidade que coloca a mesa e a comunidade acima de tudo.",
        "O Jejori Asian Haus não é um conceito genérico de culinária pan-asiática. É uma família filipina contando a história da Ásia através de sua própria lente, para um novo lar no Sul do Brasil e no Uruguai.",
        "Cada cultura que o Jejori toca — a herança japonesa de Jesrae, o dim sum de Hong Kong de Marjorie, a vida de rua de Singapura — não substitui essa identidade filipina. Ela se torna parte da mesa filipina.",
      ],
    },
    kamayan: {
      title: "🤲 Kamayan — A Mesa que Une",
      body: "No coração do Jejori está o <strong>Kamayan</strong> — a tradição filipina de comer junto, sem pressa, em comunidade, frequentemente com as mãos, ao redor de uma mesa farta. É a filosofia por trás do nosso estilo familiar de servir: a comida não é apenas sustento, é o momento em que as pessoas se encontram. Esse valor ressoa profundamente com a hospitalidade gaúcha e uruguaia — a abundância da mesa, o tempo partilhado, o calor humano que transforma uma refeição em memória.",
    },
    story: {
      title: "🌏 Da Filipinas à Ásia, ao Brasil",
      jesrae: "<strong>Jesrae</strong> — Filipino com descendência japonesa, Analista de Negócios Sênior especializado em contabilidade, bancário, finanças e logística, atuando em organizações internacionais. Em Singapura, vivenciou a cultura gastronômica asiática por dentro — mercados tradicionais, cozinhas locais, vida de rua. Traz ao Jejori o pensamento sistêmico e a disciplina operacional. A precisão e o respeito pela técnica, da herança japonesa, estão em cada processo.",
      marjorie: "<strong>Marjorie</strong> — <strong>7 anos trabalhando profissionalmente em Hong Kong</strong>, um dos centros de culinária chinesa mais respeitados do mundo, dominando as técnicas tradicionais e a arte do dim sum. Vive no Brasil há mais de uma década, trazendo consigo <strong>mais de 25 anos de experiência culinária</strong>. O domínio de Hong Kong está em cada dobra de massa, em cada caldo preparado com paciência.",
    },
    anchors: {
      title: "🧭 As Âncoras Culturais do Jejori",
      items: [
        { emoji: "🇵🇭", label: "Filipinas — A Raiz", desc: "Hospitalidade, mesa compartilhada, comunidade. O coração de tudo que fazemos." },
        { emoji: "🇯🇵", label: "Herança Japonesa (Jesrae)", desc: "Precisão, respeito pela técnica, cuidado com cada detalhe." },
        { emoji: "🇭🇰", label: "Hong Kong (Marjorie)", desc: "Maestria profissional no dim sum e na cozinha chinesa clássica." },
        { emoji: "🇸🇬", label: "Singapura", desc: "Prova viva de que culturas diferentes coexistem com beleza em uma só mesa." },
      ],
    },
    journey: {
      title: "A Jornada",
      stops: [
        { place: "Filipinas", desc: "O começo. Uma família com tradição, hospitalidade e uma identidade cultural que viajaria pelo mundo sem nunca se perder." },
        { place: "Singapura", desc: "Jesrae vivencia a culinária asiática de rua autêntica — mercados tradicionais, cozinhas locais, o cotidiano vibrante da gastronomia asiática." },
        { place: "Hong Kong", desc: "Marjorie trabalha por 7 anos em um dos maiores centros de culinária chinesa do mundo, dominando o dim sum e a disciplina de cozinha profissional." },
        { place: "Uruguai", desc: "A jornada de Jesrae continua, carregando sabores e a mentalidade sistêmica que mais tarde moldariam o Jejori — e abrindo as portas para um futuro endereço na fronteira." },
        { place: "Gravataí, Brasil — 2025", desc: "Os dois caminhos convergem. O Jejori Asian Haus abre na R. Cônego Pedro Wagner, 782 — Centro, Gravataí — levando culinária filipina e asiática autêntica ao Sul do Brasil." },
        { place: "Porto Alegre, Cidade Baixa — 2026", desc: "A unidade Cidade Baixa (R. Luís Afonso, 26) é relançada em um novo espaço maior, levando a experiência do Jejori a ainda mais pessoas em Porto Alegre." },
      ],
    },
    together: {
      title: "🤝 Onde Tudo Se Encontrou",
      body: "Em 2025, Jesrae e Marjorie se conheceram — e reconheceram rapidamente uma visão compartilhada: trazer a culinária filipina e asiática autêntica ao Brasil de forma <em>acessível, consistente e enraizada na tradição</em>. Não como uma franquia genérica. Como uma família real, com histórias reais, servindo com o coração.",
      jesrae: "Visão de negócios, sistemas e operações — estrutura para crescer sem perder a alma",
      marjorie: "Maestria culinária de décadas — a técnica que garante que cada prato conta a história certa",
    },
    nameChange: {
      title: "✨ De Dimsum Haus para Asian Haus",
      body: [
        "Começamos como <strong>Jejori Dimsum Haus</strong> — o dim sum era nosso favorito pessoal, moldado por anos de experiência em Hong Kong e o amor genuíno dos fundadores por este prato.",
        "Mas ao longo do caminho percebemos que limitar o nome a um único prato seria <em>subestimar quem somos de verdade</em>. Somos filipinos. Carregamos uma identidade cultural rica, conectada a toda a Ásia.",
        "Assim nasceu o <strong>Jejori Asian Haus</strong>: um nome que abraça quem somos — uma família filipina servindo os favoritos asiáticos com o dim sum no coração, mas sem fronteiras no cardápio.",
      ],
    },
    pillars: {
      title: "🏮 Nosso Propósito",
      items: [
        { label: "Missão", text: "Trazer a culinária asiática e filipina autêntica à comunidade brasileira e uruguaia, preservando as tradições e técnicas que a definem — sempre enraizada na hospitalidade filipina." },
        { label: "Visão", text: "Crescer o Jejori como uma marca reconhecida pela autenticidade, consistência e experiência cultural — com uma identidade filipina distinta, nunca um conceito genérico pan-asiático." },
        { label: "Compromisso", text: "Cada prato carrega uma história de cultura, experiência e intenção — respaldada por jornadas reais, maestria culinária e o calor genuíno de uma família filipina." },
      ],
    },
    cta: {
      tag: "Convidamos você a vivenciar conosco",
      title: "Venha",
      highlight: "Provar a História",
      btn: "Ver Cardápio",
    },
    founderCard: "Fundadores do Jejori Asian Haus",
  },

  es: {
    heroTag: "Gravataí, Brasil",
    heroSub: "Una familia filipina contando la historia de Asia — para un nuevo hogar en Brasil y Uruguay.",
    identity: {
      title: "🇵🇭 Filipino Primero. Asiático en Toda su Extensión.",
      body: [
        "Antes de Singapur. Antes de Hong Kong. Antes de Brasil y Uruguay. Hay una familia filipina — con sus propias tradiciones, sabores y una hospitalidad que pone la mesa y la comunidad por encima de todo.",
        "Jejori Asian Haus no es un concepto genérico de cocina pan-asiática. Es una familia filipina contando la historia de Asia a través de su propia mirada, para un nuevo hogar en el Sur de Brasil y Uruguay.",
        "Cada cultura que Jejori toca — la herencia japonesa de Jesrae, el dim sum de Hong Kong de Marjorie, la vida callejera de Singapur — no reemplaza esa identidad filipina. Se convierte en parte de la mesa filipina.",
      ],
    },
    kamayan: {
      title: "🤲 Kamayan — La Mesa que Une",
      body: "En el corazón de Jejori está el <strong>Kamayan</strong> — la tradición filipina de comer juntos, sin apuro, en comunidad, frecuentemente con las manos, alrededor de una mesa abundante. Es la filosofía detrás de nuestro estilo familiar de servir: la comida no es solo sustento, es el momento en que las personas se encuentran. Este valor resuena profundamente con la hospitalidad gaúcha y uruguaya — la abundancia de la mesa, el tiempo compartido, el calor humano que convierte una comida en memoria.",
    },
    story: {
      title: "🌏 De Filipinas a Asia, a Brasil",
      jesrae: "<strong>Jesrae</strong> — Filipino con ascendencia japonesa, Analista de Negocios Senior especializado en contabilidad, banca, finanzas y logística en organizaciones internacionales. En Singapur, vivió la cultura gastronómica asiática desde adentro — mercados tradicionales, cocinas locales, vida callejera. Aporta a Jejori el pensamiento sistémico y la disciplina operacional. La precisión y el respeto por la técnica, de su herencia japonesa, están presentes en cada proceso.",
      marjorie: "<strong>Marjorie</strong> — <strong>7 años trabajando profesionalmente en Hong Kong</strong>, uno de los centros de cocina china más respetados del mundo, dominando las técnicas tradicionales y el arte del dim sum. Vive en Brasil hace más de una década, trayendo consigo <strong>más de 25 años de experiencia culinaria</strong>. El dominio de Hong Kong está en cada pliegue de masa, en cada caldo preparado con paciencia.",
    },
    anchors: {
      title: "🧭 Las Anclas Culturales de Jejori",
      items: [
        { emoji: "🇵🇭", label: "Filipinas — La Raíz", desc: "Hospitalidad, mesa compartida, comunidad. El corazón de todo lo que hacemos." },
        { emoji: "🇯🇵", label: "Herencia Japonesa (Jesrae)", desc: "Precisión, respeto por la técnica, cuidado en cada detalle." },
        { emoji: "🇭🇰", label: "Hong Kong (Marjorie)", desc: "Maestría profesional en dim sum y cocina china clásica." },
        { emoji: "🇸🇬", label: "Singapur", desc: "Prueba viva de que culturas diferentes conviven con belleza en una sola mesa." },
      ],
    },
    journey: {
      title: "El Viaje",
      stops: [
        { place: "Filipinas", desc: "El comienzo. Una familia con tradición, hospitalidad y una identidad cultural que viajaría por el mundo sin perderse jamás." },
        { place: "Singapur", desc: "Jesrae vive la gastronomía asiática callejera auténtica — mercados tradicionales, cocinas locales, el cotidiano vibrante de la comida asiática." },
        { place: "Hong Kong", desc: "Marjorie trabaja 7 años en uno de los mayores centros de cocina china del mundo, dominando el dim sum y la disciplina de cocina profesional." },
        { place: "Uruguay", desc: "El viaje de Jesrae continúa, cargando sabores y la mentalidad sistémica que luego darían forma a Jejori — y abriendo las puertas para una futura dirección en la frontera." },
        { place: "Gravataí, Brasil — 2025", desc: "Los dos caminos convergen. Jejori Asian Haus abre en R. Cônego Pedro Wagner, 782 — Centro, Gravataí — llevando cocina filipina y asiática auténtica al Sur de Brasil." },
        { place: "Porto Alegre, Cidade Baixa — 2026", desc: "La unidad Cidade Baixa (R. Luís Afonso, 26) se relanza en un nuevo espacio más grande, llevando la experiencia Jejori a aún más personas en Porto Alegre." },
      ],
    },
    together: {
      title: "🤝 Donde Todo Se Encontró",
      body: "En 2025, Jesrae y Marjorie se conocieron — y reconocieron rápidamente una visión compartida: traer la cocina filipina y asiática auténtica a Brasil de forma <em>accesible, consistente y arraigada en la tradición</em>. No como una franquicia genérica. Como una familia real, con historias reales, sirviendo con el corazón.",
      jesrae: "Visión de negocios, sistemas y operaciones — estructura para crecer sin perder el alma",
      marjorie: "Maestría culinaria de décadas — la técnica que garantiza que cada plato cuente la historia correcta",
    },
    nameChange: {
      title: "✨ De Dimsum Haus a Asian Haus",
      body: [
        "Comenzamos como <strong>Jejori Dimsum Haus</strong> — el dim sum era nuestro favorito personal, moldeado por años de experiencia en Hong Kong y el amor genuino de los fundadores por este plato.",
        "Pero en el camino nos dimos cuenta de que limitar el nombre a un solo plato sería <em>subestimar quiénes somos en realidad</em>. Somos filipinos. Llevamos una identidad cultural rica, conectada con toda Asia.",
        "Así nació <strong>Jejori Asian Haus</strong>: un nombre que abraza quiénes somos — una familia filipina sirviendo los favoritos asiáticos con el dim sum en el corazón, pero sin fronteras en el menú.",
      ],
    },
    pillars: {
      title: "🏮 Nuestro Propósito",
      items: [
        { label: "Misión", text: "Traer la cocina asiática y filipina auténtica a la comunidad brasileña y uruguaya, preservando las tradiciones y técnicas que la definen — siempre arraigada en la hospitalidad filipina." },
        { label: "Visión", text: "Crecer Jejori como una marca reconocida por autenticidad, consistencia y experiencia cultural — con una identidad filipina distinta, nunca un concepto genérico pan-asiático." },
        { label: "Compromiso", text: "Cada plato lleva una historia de cultura, experiencia e intención — respaldada por viajes reales, maestría culinaria y el calor genuino de una familia filipina." },
      ],
    },
    cta: {
      tag: "Te invitamos a vivir la experiencia con nosotros",
      title: "Ven a",
      highlight: "Probar la Historia",
      btn: "Ver Menú",
    },
    founderCard: "Fundadores de Jejori Asian Haus",
  },

  en: {
    heroTag: "Gravataí, Brasil",
    heroSub: "A Filipino family telling the story of Asia — for a new home in Brazil and Uruguay.",
    identity: {
      title: "🇵🇭 Filipino First. Asian in Every Dimension.",
      body: [
        "Before Singapore. Before Hong Kong. Before Brazil and Uruguay. There is a Filipino family — with its own traditions, flavors, and a hospitality that puts the table and community above everything else.",
        "Jejori Asian Haus is not a generic pan-Asian concept. It is a Filipino family telling the story of Asia through their own lens, for a new home in Southern Brazil and Uruguay.",
        "Every culture Jejori touches — Jesrae's Japanese heritage, Marjorie's Hong Kong dim sum, Singapore's street food life — does not replace that Filipino identity. It becomes part of the Filipino table.",
      ],
    },
    kamayan: {
      title: "🤲 Kamayan — The Table That Unites",
      body: "At the heart of Jejori is <strong>Kamayan</strong> — the Filipino tradition of eating together, unhurried, in community, often by hand, around an abundant table. It is the philosophy behind our family-style service: food is not just sustenance, it is the moment people come together. This value resonates deeply with gaúcho and Uruguayan hospitality — the abundance of the table, shared time, the human warmth that turns a meal into a memory.",
    },
    story: {
      title: "🌏 From the Philippines to Asia, to Brazil",
      jesrae: "<strong>Jesrae</strong> — Filipino with Japanese descent, Senior Business Analyst specializing in accounting, banking, finance, and logistics across international organizations. In Singapore, he experienced Asian food culture from the inside — traditional markets, local kitchens, street food life. He brings systems thinking and operational discipline to Jejori. The precision and respect for technique from his Japanese heritage is present in every process.",
      marjorie: "<strong>Marjorie</strong> — <strong>7 years working professionally in Hong Kong</strong>, one of the world's most respected centers of Chinese cuisine, mastering traditional techniques and the craft of dim sum. She has lived in Brazil for over a decade, bringing with her <strong>25+ years of total culinary experience</strong>. Hong Kong mastery is in every fold of dough, in every slowly prepared broth.",
    },
    anchors: {
      title: "🧭 Jejori's Cultural Anchors",
      items: [
        { emoji: "🇵🇭", label: "Philippines — The Root", desc: "Hospitality, shared table, community. The heart of everything we do." },
        { emoji: "🇯🇵", label: "Japanese Heritage (Jesrae)", desc: "Precision, respect for technique, care in every detail." },
        { emoji: "🇭🇰", label: "Hong Kong (Marjorie)", desc: "Professional mastery of dim sum and classic Chinese cuisine." },
        { emoji: "🇸🇬", label: "Singapore", desc: "Living proof that different cultures can coexist beautifully on one table." },
      ],
    },
    journey: {
      title: "The Journey",
      stops: [
        { place: "Philippines", desc: "The beginning. A family with tradition, hospitality, and a cultural identity that would travel the world without ever getting lost." },
        { place: "Singapore", desc: "Jesrae lives authentic Asian street food culture — traditional markets, local kitchens, the vibrant daily life of Asian gastronomy." },
        { place: "Hong Kong", desc: "Marjorie works for 7 years in one of the world's greatest centers of Chinese cuisine, mastering dim sum and professional kitchen discipline." },
        { place: "Uruguay", desc: "Jesrae's journey continues, carrying flavors and the systems mindset that would later shape Jejori — and opening doors for a future location at the border." },
        { place: "Gravataí, Brasil — 2025", desc: "Two paths converge. Jejori Asian Haus opens at R. Cônego Pedro Wagner, 782 — Centro, Gravataí — bringing authentic Filipino and Asian cuisine to Southern Brazil." },
        { place: "Porto Alegre, Cidade Baixa — 2026", desc: "The Cidade Baixa unit (R. Luís Afonso, 26) relaunches in a larger new space, bringing the Jejori experience to even more people in Porto Alegre." },
      ],
    },
    together: {
      title: "🤝 Where It All Came Together",
      body: "In 2025, Jesrae and Marjorie met — and quickly recognized a shared vision: to bring authentic Filipino and Asian cuisine to Brazil in a way that is <em>accessible, consistent, and rooted in tradition</em>. Not as a generic franchise. As a real family, with real stories, serving with heart.",
      jesrae: "Business vision, systems, and operations — structure to grow without losing the soul",
      marjorie: "Decades of culinary mastery — the technique that ensures every dish tells the right story",
    },
    nameChange: {
      title: "✨ From Dimsum Haus to Asian Haus",
      body: [
        "We started as <strong>Jejori Dimsum Haus</strong> — dim sum was our personal favorite, shaped by years of experience in Hong Kong and the founders' genuine love for this dish.",
        "But along the way we realized that limiting the name to a single dish would be <em>underselling who we truly are</em>. We are Filipino. We carry a rich cultural identity connected to all of Asia.",
        "And so <strong>Jejori Asian Haus</strong> was born: a name that embraces who we are — a Filipino family serving Asian favorites with dim sum at the heart, but no borders on the menu.",
      ],
    },
    pillars: {
      title: "🏮 Our Purpose",
      items: [
        { label: "Mission", text: "Bring authentic Asian and Filipino cuisine to the Brazilian and Uruguayan community, preserving the traditions and techniques that define it — always rooted in Filipino hospitality." },
        { label: "Vision", text: "Grow Jejori as a brand recognized for authenticity, consistency, and cultural experience — with a distinct Filipino identity, never a generic pan-Asian concept." },
        { label: "Commitment", text: "Every dish carries a story of culture, experience, and intention — backed by real journeys, culinary mastery, and the genuine warmth of a Filipino family." },
      ],
    },
    cta: {
      tag: "We invite you to experience this with us",
      title: "Come",
      highlight: "Taste the Story",
      btn: "View Menu",
    },
    founderCard: "Founders of Jejori Asian Haus",
  },
};

const langLabels = { pt: "Português", es: "Español", en: "English" };

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-gold whitespace-nowrap">{children}</h2>
      <div className="flex-1 h-px bg-ember/30" />
    </div>
  );
}

export default function About() {
  const [lang, setLang] = useState("pt");
  const [langOpen, setLangOpen] = useState(false);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Language Switcher */}
      <div className="fixed top-20 right-4 z-40">
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 bg-[#0B0B0B]/90 border border-[#D4AF37]/30 text-gold font-sans text-xs font-semibold tracking-widest uppercase px-3 py-2 rounded-sm backdrop-blur-sm hover:border-gold/60 transition-all"
          >
            <Globe size={13} />
            {langLabels[lang]}
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-sm overflow-hidden shadow-xl">
              {Object.entries(langLabels).map(([code, label]) => (
                <button
                  key={code}
                  onClick={() => { setLang(code); setLangOpen(false); }}
                  className={`block w-full text-left px-4 py-2 font-sans text-xs tracking-widest uppercase transition-colors ${
                    lang === code ? "text-gold bg-gold/10" : "text-[#F2F2F2]/60 hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={HERO_IMAGE} alt="Jejori interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-4 block">{t.heroTag}</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F2F2F2]">
              Jejori <span className="text-gold">Asian Haus</span>
            </h1>
            <p className="text-[#F2F2F2]/50 font-sans text-base mt-4 max-w-xl mx-auto">{t.heroSub}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-20">

        {/* Filipino First */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.identity.title}</SectionTitle>
          <div className="space-y-5">
            {t.identity.body.map((p, i) => (
              <p key={i} className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]">{p}</p>
            ))}
          </div>
        </motion.div>

        {/* Kamayan */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.kamayan.title}</SectionTitle>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10">
            <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]" dangerouslySetInnerHTML={{ __html: t.kamayan.body }} />
          </div>
        </motion.div>

        {/* Cultural Anchors */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.anchors.title}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.anchors.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 border border-[#D4AF37]/10 rounded-lg hover:border-gold/30 transition-all duration-500"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-serif text-base font-bold text-gold mb-1">{item.label}</p>
                  <p className="text-[#F2F2F2]/50 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founders Story */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.story.title}</SectionTitle>
          <div className="space-y-6">
            <div className="border border-[#D4AF37]/10 rounded-lg p-6 bg-walnut/5">
              <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9]" dangerouslySetInnerHTML={{ __html: t.story.jesrae }} />
            </div>
            <div className="border border-[#D4AF37]/10 rounded-lg p-6 bg-walnut/5">
              <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9]" dangerouslySetInnerHTML={{ __html: t.story.marjorie }} />
            </div>
          </div>
        </motion.div>

        {/* Founders Photo */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <div className="relative inline-block">
            <img
              src="https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5799de77a_WhatsAppImage2026-05-03at180311.jpg"
              alt="Jesrae e Marjorie — fundadores do Jejori Asian Haus"
              className="w-full max-w-xl mx-auto rounded-lg object-cover border border-[#D4AF37]/20"
            />
            <div className="mt-4">
              <p className="text-gold font-serif text-lg font-semibold">Jesrae & Marjorie</p>
              <p className="text-[#F2F2F2]/45 font-sans text-sm mt-1">{t.founderCard}</p>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.journey.title}</SectionTitle>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-ember/30 to-transparent" />
            <div className="space-y-10 pl-12">
              {t.journey.stops.map((stop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-12 top-1 w-3 h-3 rounded-full bg-gold border-2 border-[#0B0B0B] ring-2 ring-gold/30" />
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-gold shrink-0" />
                    <h3 className="font-serif text-xl font-bold text-gold">{stop.place}</h3>
                  </div>
                  <p className="text-[#F2F2F2]/60 font-sans text-sm leading-relaxed">{stop.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Where it came together */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.together.title}</SectionTitle>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10 mb-6">
            <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9] mb-6" dangerouslySetInnerHTML={{ __html: t.together.body }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Jesrae</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">{t.together.jesrae}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Marjorie</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">{t.together.marjorie}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interior Image */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-lg overflow-hidden">
          <img src={INTERIOR_IMAGE} alt="Jejori restaurant interior" className="w-full h-72 md:h-[26rem] object-cover" />
        </motion.div>

        {/* Name Change */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.nameChange.title}</SectionTitle>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10 space-y-5">
            {t.nameChange.body.map((p, i) => (
              <p key={i} className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9]" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </motion.div>

        {/* Mission / Vision / Commitment */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.pillars.title}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.pillars.items.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border border-[#D4AF37]/15 rounded-lg p-6 text-center hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-500"
              >
                <h3 className="font-serif text-xl font-bold text-gold mb-3">{p.label}</h3>
                <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 text-center bg-gradient-to-t from-walnut/10 to-transparent">
        <p className="text-[#F2F2F2]/40 font-sans text-sm tracking-widest uppercase mb-3">{t.cta.tag}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-8">
          {t.cta.title} <span className="text-gold">{t.cta.highlight}</span>
        </h2>
        <GoldButton to="/menu">{t.cta.btn}</GoldButton>
      </div>
    </div>
  );
}