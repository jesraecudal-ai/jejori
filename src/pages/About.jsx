import React from "react";
import { motion } from "framer-motion";
import GoldButton from "../components/shared/GoldButton";
import { MapPin } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/f2ecc5321_WhatsAppImage2026-05-03at180312.jpg";
const INTERIOR_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/e4b6fa32a_WhatsAppImage2026-05-03at180310.jpg";

const journey = [
  { place: "Singapura", desc: "Jesrae vivencia a cultura gastronômica asiática autêntica através de mercados tradicionais e cozinhas locais, aprofundando sua conexão pessoal com a herança asiática." },
  { place: "Hong Kong", desc: "Marjorie treina e trabalha por 7 anos em um dos maiores centros de culinária chinesa do mundo, dominando o dim sum e a disciplina de cozinha profissional." },
  { place: "Uruguai", desc: "A carreira global de Jesrae continua, carregando os sabores e a mentalidade sistêmica que mais tarde moldariam o Jejori." },
  { place: "Gravataí, Brasil", desc: "Os dois caminhos convergem. Em 2025, o Jejori Asian Haus abre na R. Cônego Pedro Wagner, 782 — Centro, Gravataí." },
  { place: "Porto Alegre, 2026", desc: "A unidade Cidade Baixa (R. Luís Afonso, 26) é relançada em um novo espaço maior — levando a experiência asiática autêntica do Jejori a um público ainda maior em Porto Alegre." },
];

const menuHighlights = [
  { emoji: "🥟", label: "Dim Sum", desc: "Elaborado com técnicas tradicionais aprendidas em Hong Kong" },
  { emoji: "🍜", label: "Macarrão & Caldos", desc: "Profundos em sabor, preparados lentamente com cuidado" },
  { emoji: "🍛", label: "Pratos de Arroz", desc: "Pensados para conforto, equilíbrio e autenticidade" },
  { emoji: "🥢", label: "Preparações Clássicas", desc: "Enraizadas em experiência real e herança cultural" },
];

const pillars = [
  { label: "Missão", text: "Trazer a culinária asiática autêntica à comunidade brasileira, preservando as tradições e técnicas que a definem." },
  { label: "Visão", text: "Crescer o Jejori como uma marca reconhecida pela autenticidade, consistência, sistemas operacionais sólidos e experiência cultural." },
  { label: "Compromisso", text: "Cada prato carrega uma história de cultura, experiência e intenção — respaldada por jornadas reais e maestria culinária." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={HERO_IMAGE} alt="Jejori interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-4 block">
              Gravataí, Brasil
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F2F2F2]">
              Jejori <span className="text-gold">Asian Haus</span>
            </h1>
            <p className="text-[#F2F2F2]/50 font-sans text-base mt-4 max-w-xl mx-auto">
              Nascido de jornadas internacionais, herança cultural e uma paixão compartilhada pela culinária asiática autêntica.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold whitespace-nowrap">
              🌏 Da Ásia ao Brasil
            </h2>
            <div className="flex-1 h-px bg-ember/30" />
          </div>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9] mb-8">
            A história do Jejori começa em diferentes continentes. O cofundador <span className="text-gold font-semibold">Jesrae</span> construiu sua carreira como Analista de Negócios Sênior especializado em contabilidade, bancário, finanças e logística — atuando em organizações internacionais ao redor do mundo. Sua formação profissional estabeleceu uma sólida base em sistemas, consistência e excelência operacional, princípios que hoje moldam a gestão do Jejori.
          </p>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9] mb-8">
            Filipino com descendência japonesa, sua conexão com a cultura asiática vai muito além do profissional — é profundamente pessoal. Durante seu tempo em Singapura, ele vivenciou a cultura gastronômica asiática em sua essência, através de mercados tradicionais, cozinhas locais e o cotidiano da gastronomia de rua.
          </p>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]">
            Ao mesmo tempo, a cofundadora <span className="text-gold font-semibold">Marjorie</span> construía sua base culinária na Ásia. Ela passou <span className="text-gold font-semibold">7 anos trabalhando em Hong Kong</span> — um dos centros de culinária chinesa mais respeitados do mundo — dominando técnicas tradicionais de cozinha, precisão em cozinha profissional e a arte de preparar dim sum, um pilar da gastronomia chinesa. Após Hong Kong, Marjorie continuou sua jornada no Brasil, onde vive há mais de uma década, trazendo consigo mais de <span className="text-gold font-semibold">25 anos de experiência culinária</span>.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl font-bold text-gold whitespace-nowrap">The Journey</h2>
            <div className="flex-1 h-px bg-ember/30" />
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-ember/30 to-transparent" />
            <div className="space-y-10 pl-12">
              {journey.map((stop, i) => (
                <motion.div
                  key={stop.place}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-gold whitespace-nowrap">🤝 Where It Came Together</h2>
            <div className="flex-1 h-px bg-ember/30" />
          </div>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10">
            <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9] mb-6">
              Em 2025, Jesrae e Marjorie se conheceram — e rapidamente reconheceram uma visão compartilhada: trazer os sabores asiáticos autênticos ao Brasil de forma <span className="text-gold italic">acessível, consistente e enraizada na tradição</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Jesrae</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">Expertise de negócios estruturada em finanças, logística e operações</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Marjorie</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">Domínio culinário profundo, moldado por 7 anos nas melhores cozinhas de Hong Kong</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Owners Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="relative inline-block">
            <img
              src="https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5799de77a_WhatsAppImage2026-05-03at180311.jpg"
              alt="Jesrae e Marjorie — fundadores do Jejori Asian Haus"
              className="w-full max-w-xl mx-auto rounded-lg object-cover border border-[#D4AF37]/20"
            />
            <div className="mt-4">
              <p className="text-gold font-serif text-lg font-semibold">Jesrae & Marjorie</p>
              <p className="text-[#F2F2F2]/45 font-sans text-sm mt-1">Fundadores do Jejori Asian Haus</p>
            </div>
          </div>
        </motion.div>

        {/* More than a Restaurant */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif text-3xl font-bold text-gold whitespace-nowrap">🍜 More Than a Restaurant</h2>
            <div className="flex-1 h-px bg-ember/30" />
          </div>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9] mb-8">
            O Jejori foi construído com um propósito claro: oferecer não apenas comida, mas uma experiência centrada em <span className="text-gold">cultura, tradição e conexão</span>. Inspirados nas tradições gastronômicas asiáticas, valorizamos as refeições compartilhadas, a mesa coletiva e a ideia de que a comida une as pessoas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {menuHighlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
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

        {/* Interior Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden mb-20"
        >
          <img
            src={INTERIOR_IMAGE}
            alt="Jejori restaurant interior"
            className="w-full h-72 md:h-[26rem] object-cover"
          />
        </motion.div>

        {/* Mission / Vision / Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-3xl font-bold text-gold whitespace-nowrap">🏮 Our Purpose</h2>
            <div className="flex-1 h-px bg-ember/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
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
        <p className="text-[#F2F2F2]/40 font-sans text-sm tracking-widest uppercase mb-3">Convidamos você a vivenciar conosco</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-8">
          Venha <span className="text-gold">Provar a História</span>
        </h2>
        <GoldButton to="/menu" className="animate-pulse-glow">
          Ver Cardápio
        </GoldButton>
      </div>
    </div>
  );
}