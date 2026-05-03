import React from "react";
import { motion } from "framer-motion";
import GoldButton from "../components/shared/GoldButton";
import { MapPin } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/aae1a996d_generated_68b9d686.png";
const INTERIOR_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5c65208d5_generated_e66787bc.png";

const journey = [
  { place: "Singapore", desc: "Jesrae experiences authentic Asian food culture through traditional markets and local kitchens, deepening his personal connection to Asian heritage." },
  { place: "Hong Kong", desc: "Marjorie trains and works for 7 years in one of the world's greatest centers for Chinese cuisine, mastering dim sum and professional kitchen discipline." },
  { place: "Uruguay", desc: "Jesrae's global career continues, carrying the flavors and systems mindset that would later shape Jejori." },
  { place: "Brazil", desc: "Both paths converge. In 2025, Jesrae and Marjorie unite their visions — and Jejori is born." },
];

const menuHighlights = [
  { emoji: "🥟", label: "Dim Sum", desc: "Crafted with traditional techniques learned in Hong Kong" },
  { emoji: "🍜", label: "Noodles & Broths", desc: "Rich in depth and flavor, slow-built with care" },
  { emoji: "🍛", label: "Rice Dishes", desc: "Designed for comfort, balance, and authenticity" },
  { emoji: "🥢", label: "Classic Preparations", desc: "Rooted in real experience and cultural heritage" },
];

const pillars = [
  { label: "Mission", text: "To bring authentic Asian cuisine to the Brazilian community, preserving the traditions and techniques that define it." },
  { label: "Vision", text: "To grow Jejori into a recognizable brand known for authenticity, consistency, strong operational systems, and cultural experience." },
  { label: "Commitment", text: "Every dish carries a story of culture, experience, and intention — backed by real journeys and culinary mastery." },
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
              Jejori <span className="text-gold">Dimsum Haus</span>
            </h1>
            <p className="text-[#F2F2F2]/50 font-sans text-base mt-4 max-w-xl mx-auto">
              Born from international journeys, cultural heritage, and a shared passion for authentic Asian cuisine.
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
              🌏 From Asia to Brazil
            </h2>
            <div className="flex-1 h-px bg-ember/30" />
          </div>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9] mb-8">
            Jejori's story begins across continents. Co-founder <span className="text-gold font-semibold">Jesrae</span> built his career as a Senior Business Analyst specializing in accounting, banking, finance, and logistics — working with international organizations across the world. His professional background instilled a strong foundation in systems, consistency, and operational excellence, principles that now shape how Jejori is built and managed.
          </p>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9] mb-8">
            As a Filipino with Japanese descent, his connection to Asian culture is not only professional — but deeply personal. During his time in Singapore, he experienced authentic Asian food culture at its core, through traditional markets, local kitchens, and everyday street dining.
          </p>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]">
            At the same time, co-founder <span className="text-gold font-semibold">Marjorie</span> was building her culinary foundation in Asia. She spent <span className="text-gold font-semibold">7 years working in Hong Kong</span> — one of the world's most respected centers for Chinese cuisine — mastering traditional cooking techniques, professional kitchen precision, and the art of preparing dim sum, a cornerstone of Chinese gastronomy. After Hong Kong, Marjorie continued her journey in Brazil, where she has now lived for over a decade, carrying with her more than <span className="text-gold font-semibold">25 years of culinary experience</span>.
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
              In 2025, Jesrae and Marjorie met — and quickly recognized a shared vision: to bring authentic Asian flavors to Brazil in a way that is <span className="text-gold italic">accessible, consistent, and rooted in tradition</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Jesrae</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">Structured, systems-driven business expertise in finance, logistics, and operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Marjorie</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">Deep, hands-on culinary mastery shaped by 7 years in Hong Kong's finest kitchens</p>
                </div>
              </div>
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
            Jejori was built with a clear purpose: to offer not just food, but an experience centered on <span className="text-gold">culture, tradition, and connection</span>. Inspired by Asian dining traditions, we embrace shared meals, communal dining, and the idea that food brings people together.
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
        <p className="text-[#F2F2F2]/40 font-sans text-sm tracking-widest uppercase mb-3">We invite you to experience it with us</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-8">
          Come <span className="text-gold">Taste the Story</span>
        </h2>
        <GoldButton to="/reserve" className="animate-pulse-glow">
          Reserve a Table
        </GoldButton>
      </div>
    </div>
  );
}