import React from "react";
import { motion } from "framer-motion";
import GoldButton from "../shared/GoldButton";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jejori restaurant interior with warm ambient lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/40 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase">
            Culinária Asiática &amp; Filipina Autêntica
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F2] mb-6 leading-[0.95]"
        >
          Onde a Noite
          <br />
          <span className="text-gold">Encontra o Sabor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[#F2F2F2]/60 font-sans text-base md:text-lg max-w-lg mb-10"
        >
          Uma jornada íntima pelo defumado, pelo picante e pela chama.
          Dois endereços. Uma noite inesquecível.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <GoldButton to="/menu" variant="ghost">
            Ver Cardápio
          </GoldButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}