import React from "react";
import { motion } from "framer-motion";
import GoldButton from "../shared/GoldButton";

export default function FinalCTA({ bgImage }) {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="Jejori restaurant ambiance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F2F2F2] mb-4">
          Aberto <span className="text-gold">Hoje</span>
        </h2>
        <p className="text-[#F2F2F2]/60 font-sans text-lg mb-10">
          Venha como está. Sem reservas — a noite é sua.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GoldButton to="/menu" className="animate-pulse-glow">
            Ver Cardápio
          </GoldButton>
          <GoldButton to="/about" variant="ghost">
            Nossa História
          </GoldButton>
        </div>
      </motion.div>
    </section>
  );
}