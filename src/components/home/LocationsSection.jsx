import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const locations = [
  {
    name: "Centro Gravataí",
    address: "Rua Principal, 123 — Gravataí, RS",
    hours: "Tue–Sun: 6PM – 12AM",
  },
  {
    name: "Cidade Baixa",
    address: "Rua da República, 456 — Porto Alegre, RS",
    hours: "Tue–Sun: 7PM – 1AM",
  },
];

export default function LocationsSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0B] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-walnut/20 to-transparent opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader title="Find Us" subtitle="Two locations, one unforgettable experience" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="border border-[#D4AF37]/15 rounded-lg p-8 bg-[#0B0B0B]/80 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] transition-all duration-500"
            >
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">{loc.name}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#F2F2F2]/60 text-sm font-sans">
                  <MapPin size={16} className="text-gold shrink-0" />
                  {loc.address}
                </div>
                <div className="flex items-center gap-3 text-[#F2F2F2]/60 text-sm font-sans">
                  <Clock size={16} className="text-gold shrink-0" />
                  {loc.hours}
                </div>
              </div>
              <button className="text-gold text-sm font-sans font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                Get Directions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}