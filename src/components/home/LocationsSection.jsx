import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const locations = [
  {
    name: "Centro — Gravataí",
    address: "R. Cônego Pedro Wagner, 782 — Centro, Gravataí, RS",
    hours: ["Seg–Sáb: 11h–15h (almoço)"],
    badge: null,
    upcoming: false,
  },
  {
    name: "Cidade Baixa — Porto Alegre",
    address: "R. Luís Afonso, 26 — Cidade Baixa, Porto Alegre, RS",
    hours: ["Seg–Sáb: 19h–23h (jantar)"],
    badge: "Novo Espaço Maior em 2026",
    upcoming: false,
  },
  {
    name: "Rivera / Santana do Livramento",
    address: "Frontera Brasil–Uruguai",
    hours: [],
    badge: "Em Breve",
    upcoming: true,
    description: "Uma nova experiência asiática para brasileiros e uruguaios na fronteira. Endereço a ser anunciado em breve.",
  },
];

export default function LocationsSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0B] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-walnut/20 to-transparent opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader title="Onde Estamos" subtitle="Dois endereços, uma experiência inesquecível" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`border rounded-lg p-8 transition-all duration-500 ${
                loc.upcoming
                  ? "border-[#D4AF37]/20 bg-[#D4AF37]/[0.03] relative overflow-hidden"
                  : "border-[#D4AF37]/15 bg-[#0B0B0B]/80 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              }`}
            >
              {loc.upcoming && (
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(212,175,55,0.02)_10px,rgba(212,175,55,0.02)_20px)]" />
              )}
              <div className="relative">
                <h3 className={`font-serif text-2xl font-bold mb-4 ${loc.upcoming ? "text-gold/70" : "text-gold"}`}>{loc.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-[#F2F2F2]/60 text-sm font-sans">
                    <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                    {loc.address}
                  </div>
                  {loc.upcoming ? (
                    <p className="text-[#F2F2F2]/45 font-sans text-sm leading-relaxed pl-0">{loc.description}</p>
                  ) : (
                    <div className="flex items-start gap-3 text-[#F2F2F2]/60 text-sm font-sans">
                      <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        {loc.hours.map((h) => (
                          <p key={h}>{h}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {loc.badge && (
                  <span className={`inline-block mb-4 text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-sm border ${
                    loc.upcoming
                      ? "bg-[#D4AF37]/10 border-[#D4AF37]/25 text-gold/70 animate-pulse"
                      : "bg-gold/15 border-gold/30 text-gold"
                  }`}>
                    ✦ {loc.badge}
                  </span>
                )}
                {!loc.upcoming && (
                  <button className="text-gold text-sm font-sans font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                    Como Chegar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}