import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Clock } from "lucide-react";
import { operations } from "@/data/operations";
import { useOperation } from "@/lib/OperationContext";
import BlurredAddress from "@/components/shared/BlurredAddress";
import { setMeta } from "@/lib/seo";

// Flat list of every branch to display as cards.
const allBranches = [
  { ...operations.brasil.locations[0], operationKey: "brasil", cardImage: operations.brasil.locations[0].cardImage || operations.brasil.cardImage },
  { ...operations.brasil.locations[1], operationKey: "brasil", cardImage: operations.brasil.locations[1].cardImage || operations.brasil.cardImage },
  {
    key: "montevideo",
    name: "Montevideo",
    short: "Montevideo",
    address: "Uruguay",
    fullAddress: operations.uruguai.address,
    hours: operations.uruguai.hours,
    badge: "Próximamente",
    operationKey: "uruguai",
    cardImage: "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/94a6475f8_motnevideo.jpg",
    upcoming: true,
    blurNumber: true,
    openingNote: operations.uruguai.openingNote,
  },
];

// Map an ISO country code to an operation key.
const countryToOperation = (code) => {
  if (!code) return null;
  const c = code.toUpperCase();
  if (c === "BR") return "brasil";
  if (c === "UY") return "uruguai";
  return null;
};

// Remember a visitor's branch for 30 days so repeat visits skip detection.
const OP_COOKIE = "jejori_op";
const FLASH_MS = 2000;
const readOpCookie = () => {
  const m = document.cookie.match(new RegExp("(?:^|; )" + OP_COOKIE + "=([^;]*)"));
  const v = m ? decodeURIComponent(m[1]) : null;
  return v === "brasil" || v === "uruguai" ? v : null;
};
const writeOpCookie = (op) => {
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${OP_COOKIE}=${op}; expires=${expires}; path=/; SameSite=Lax`;
};

export default function OperationSelector() {
  const navigate = useNavigate();
  const { setOperation } = useOperation();
  const timerRef = useRef(null);
  const branches = allBranches;

  const go = (op) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    writeOpCookie(op);
    setOperation(op);
    navigate(`/${op}`);
  };

  const choose = (branch) => go(branch.operationKey);

  useEffect(() => {
    setMeta(
      "Jejori Asian Haus — Brasil & Uruguai",
      "Jejori Asian Haus — cozinha filipina e asiática autêntica. Brasil (Gravataí & Porto Alegre) e Uruguai (Montevideo, em breve)."
    );
    const prev = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Returning visitors skip straight to their remembered branch; first-timers from
  // BR/UY see the cards for ~2s then auto-route (clicking a card overrides); anyone
  // else (other country or failed detection) stays on the cards to pick manually.
  useEffect(() => {
    let cancelled = false;

    const remembered = readOpCookie();
    if (remembered) {
      setOperation(remembered);
      navigate(`/${remembered}`);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const opKey = countryToOperation(data?.country_code);
        if (!opKey) return; // other / unknown country -> keep showing the cards
        timerRef.current = setTimeout(() => go(opKey), FLASH_MS);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      {/* header */}
      <div className="relative z-10 pt-14 pb-10 px-6 text-center">
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
          Todos os endereços do Jejori · Todas las direcciones de Jejori
        </p>
      </div>

      {/* grid */}
      <div className="relative z-10 flex-1 px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.a
              href={`/${branch.operationKey}`}
              key={branch.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onClick={(e) => {
                e.preventDefault();
                choose(branch);
              }}
              className={`group relative flex flex-col text-left rounded-xl overflow-hidden border transition-all duration-500 ${
                branch.upcoming
                  ? "border-[#D4AF37]/20 grayscale-[0.25] hover:grayscale-0"
                  : "border-[#D4AF37]/30 hover:border-gold/60"
              } hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={branch.cardImage}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
                {branch.upcoming && (
                  <span className="absolute top-4 right-4 bg-[#0B0B0B]/80 border border-[#D4AF37]/30 text-gold text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm animate-pulse">
                    ✦ {branch.badge}
                  </span>
                )}
                {branch.badge && !branch.upcoming && (
                  <span className="absolute top-4 right-4 bg-gold/20 border border-gold/40 text-gold text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                    ✦ {branch.badge}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h2 className="font-serif text-2xl font-bold text-[#F2F2F2] mb-2 group-hover:text-gold transition-colors">
                  {branch.name}
                </h2>

                <div className="space-y-2 mb-5 flex-1">
                  <div className="flex items-start gap-2 text-[#F2F2F2]/55 text-sm font-sans">
                    <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                    {branch.blurNumber ? (
                      <BlurredAddress address={branch.fullAddress} />
                    ) : (
                      branch.fullAddress
                    )}
                  </div>
                  {branch.upcoming && (
                    <p className="text-gold/70 text-xs font-sans font-semibold tracking-widest uppercase">
                      {branch.openingNote}
                    </p>
                  )}
                  {branch.hours.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-[#F2F2F2]/50 text-xs font-sans">
                      <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-gold font-sans text-sm font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                  Entrar
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}