import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { useOperation } from "@/lib/OperationContext";
import { operations } from "@/data/operations";

export default function LocationsSection() {
  const { operation } = useOperation();
  const op = operations[operation] || operations.brasil;

  return (
    <section className="py-24 px-6 bg-[#0B0B0B] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-walnut/20 to-transparent opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader title="Onde Estamos" subtitle="Dois endereços, uma experiência inesquecível" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {op.locations.map((loc, i) => (
            <motion.div
              key={loc.key}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="border rounded-lg p-8 transition-all duration-500 border-[#D4AF37]/15 bg-[#0B0B0B]/80 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
            >
              <h3 className="font-serif text-2xl font-bold mb-4 text-gold">{loc.name}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-[#F2F2F2]/60 text-sm font-sans">
                  <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                  {loc.fullAddress}
                </div>
              </div>
              {loc.badge && (
                <span className="inline-block mb-4 text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-sm border bg-gold/15 border-gold/30 text-gold">
                  ✦ {loc.badge}
                </span>
              )}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(loc.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-sans font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
              >
                Como Chegar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}