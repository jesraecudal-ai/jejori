import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { operations, operationOrder } from "@/data/operations";
import { useOperation } from "@/lib/OperationContext";

export default function OperationSelector() {
  const navigate = useNavigate();
  const { setOperation } = useOperation();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (next) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + operationOrder.length) % operationOrder.length);
  };

  const choose = (key) => {
    setOperation(key);
    navigate(`/${key}`);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0B0B0B] overflow-hidden flex flex-col">
      {/* ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      {/* header */}
      <div className="relative z-10 pt-12 px-6 text-center">
        <img
          src="https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/28f4dca2e_JEJORILOGO1.png"
          alt="Jejori Asian Haus"
          className="h-14 w-14 object-contain invert mx-auto mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-5xl font-bold text-[#F2F2F2]"
        >
          Escolha sua <span className="text-gold">casa</span>
        </motion.h1>
        <p className="text-[#F2F2F2]/45 font-sans text-sm md:text-base mt-3 tracking-wider">
          Onde você está esta noite? / ¿Dónde estás esta noche?
        </p>
      </div>

      {/* carousel */}
      <div className="relative z-10 flex-1 flex items-center justify-center gap-4 px-4">
        <button
          onClick={() => go(index - 1)}
          className="text-gold/70 hover:text-gold transition-colors p-2"
          aria-label="previous"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="relative w-full max-w-2xl h-[440px] md:h-[520px]">
          <AnimatePresence custom={dir} mode="popLayout">
            {operationOrder.map((key, i) => {
              if (i !== index) return null;
              const op = operations[key];
              const isActive = i === index;
              return (
                <motion.div
                  key={key}
                  custom={dir}
                  initial={(d) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 0.96 })}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={(d) => ({ opacity: 0, x: d > 0 ? -80 : 80, scale: 0.96 })}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <button
                    onClick={() => choose(key)}
                    className={`group relative w-full h-full rounded-xl overflow-hidden border text-left transition-all duration-500 ${
                      op.upcoming
                        ? "border-[#D4AF37]/20 grayscale-[0.3] hover:grayscale-0"
                        : "border-[#D4AF37]/30 hover:border-gold/60"
                    }`}
                  >
                    <img
                      src={op.cardImage}
                      alt={op.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-[#0B0B0B]/20" />

                    {op.upcoming && (
                      <span className="absolute top-6 right-6 bg-[#0B0B0B]/80 border border-[#D4AF37]/30 text-gold text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm animate-pulse">
                        ✦ {op.tagline}
                      </span>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <span className="text-gold font-sans text-xs tracking-[0.4em] uppercase block mb-2">
                        {op.cities}
                      </span>
                      <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F2F2F2] leading-none mb-3">
                        {op.name}
                      </h2>
                      <div className="flex items-center gap-3">
                        <span className="text-[#F2F2F2]/65 font-sans text-sm md:text-base">
                          {op.upcoming ? op.openingNote : op.tagline}
                        </span>
                      </div>
                      <div className="mt-6 inline-flex items-center gap-2 text-gold font-sans text-sm font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                        Entrar
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          onClick={() => go(index + 1)}
          className="text-gold/70 hover:text-gold transition-colors p-2"
          aria-label="next"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* dots */}
      <div className="relative z-10 pb-10 flex items-center justify-center gap-3">
        {operationOrder.map((key, i) => (
          <button
            key={key}
            onClick={() => go(i)}
            aria-label={operations[key].name}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-2 bg-[#D4AF37]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}