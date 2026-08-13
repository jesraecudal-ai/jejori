import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Clock, Instagram, Phone, ArrowLeftRight } from "lucide-react";
import { useOperation } from "@/lib/OperationContext";
import { operations } from "@/data/operations";

export default function Footer() {
  const { operation } = useOperation();
  const navigate = useNavigate();
  const op = operation ? operations[operation] : operations.brasil;
  const isUruguai = op.key === "uruguai";

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/28f4dca2e_JEJORILOGO1.png"
              alt="Jejori Asian Haus"
              className="h-20 w-20 object-contain invert mb-4"
            />
            <p className="text-[#F2F2F2]/50 font-sans text-sm leading-relaxed">
              {op.taglineFooter}
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 flex items-center gap-1.5 text-[#D4AF37]/60 hover:text-gold text-[10px] font-sans font-semibold tracking-widest uppercase transition-colors"
            >
              <ArrowLeftRight size={11} />
              {isUruguai ? "Cambiar operación" : "Trocar operação"}
            </button>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">{op.footerTitle}</h4>
            <div className="space-y-4">
              {isUruguai ? (
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-[#F2F2F2]/80 text-sm font-sans font-medium">Montevideo</p>
                    <p className="text-[#D4AF37]/70 text-xs font-sans mt-1 inline-block border border-[#D4AF37]/30 px-2 py-0.5 rounded-sm tracking-widest uppercase">
                      ✦ Em Breve / Próximamente
                    </p>
                  </div>
                </div>
              ) : (
                op.locations.map((loc) => (
                  <div key={loc.key} className="flex items-start gap-2">
                    <MapPin size={16} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-[#F2F2F2]/80 text-sm font-sans font-medium">{loc.name}</p>
                      <p className="text-[#F2F2F2]/45 text-xs font-sans">{loc.address}</p>
                      {loc.badge && (
                        <span className="inline-block mt-1 bg-gold/20 text-gold text-[9px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                          {loc.badge} ✦
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">{op.footerHoursTitle}</h4>
            <div className="space-y-4">
              {isUruguai ? (
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-gold text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-sm animate-pulse">
                  ✦ {op.openingNote}
                </span>
              ) : (
                op.locations.map((loc) => (
                  <div key={loc.key}>
                    <p className="text-gold/70 text-xs font-sans font-semibold tracking-widest uppercase mb-1">
                      {loc.short}
                    </p>
                    <div className="flex items-start gap-2">
                      <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        {loc.hours.map((h) => (
                          <p key={h} className="text-[#F2F2F2]/60 text-xs font-sans">
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a href={op.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <Instagram size={16} /> {op.social.handle}
              </a>
              <a href={op.social.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                {op.social.handle}
              </a>
              {!isUruguai && (
                <a href={op.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                  <Phone size={16} /> {op.social.whatsappLabel}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F2F2F2]/30 text-xs font-sans">
            © {new Date().getFullYear()} Jejori. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {[{ label: "Início", path: op.key ? `/${op.key}` : "/" }, { label: "Menu", path: "/menu" }, { label: "Sobre", path: "/about" }, { label: "Franquia", path: "/franchise" }].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-[#F2F2F2]/30 hover:text-gold text-xs font-sans uppercase tracking-widest transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}