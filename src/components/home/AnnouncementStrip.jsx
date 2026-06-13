import React from "react";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

export default function AnnouncementStrip() {
  return (
    <div className="bg-gradient-to-r from-[#8B0000] via-[#B22222] to-[#8B0000] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Flame size={18} className="text-gold animate-pulse" />
        <span className="text-[#F2F2F2] font-sans text-sm font-semibold tracking-wide">
          🔥 Aberto Hoje — DJ ao Vivo + Novo Menu Sazonal
        </span>

      </div>
    </div>
  );
}