import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-gold mb-4">JEJORI</h3>
            <p className="text-[#F2F2F2]/50 font-sans text-sm leading-relaxed">
              Onde a noite encontra o sabor. Uma experiência gastronômica asiática autêntica feita para a alma.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Endereços</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-[#F2F2F2]/80 text-sm font-sans font-medium">Centro — Gravataí</p>
                  <p className="text-[#F2F2F2]/45 text-xs font-sans">R. Cônego Pedro Wagner, 782</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-[#F2F2F2]/80 text-sm font-sans font-medium">Cidade Baixa — Porto Alegre</p>
                  <p className="text-[#F2F2F2]/45 text-xs font-sans">R. Luís Afonso, 26</p>
                  <span className="inline-block mt-1 bg-gold/20 text-gold text-[9px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                    Relançamento 2026 ✦
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Horários</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gold/70 text-xs font-sans font-semibold tracking-widest uppercase mb-1">Centro — Gravataí</p>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F2F2F2]/60 text-xs font-sans">Seg–Sáb: 11h–15h (almoço)</p>
                    <p className="text-[#F2F2F2]/60 text-xs font-sans">Dom: 19h–23h (jantar)</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gold/70 text-xs font-sans font-semibold tracking-widest uppercase mb-1">Cidade Baixa — POA</p>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F2F2F2]/60 text-xs font-sans">Seg–Sáb: 19h–23h (jantar)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a href="https://instagram.com/jejoridimsumhaus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <Instagram size={16} /> @jejoridimsumhaus
              </a>
              <a href="https://tiktok.com/@jejoridimsumhaus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                @jejoridimsumhaus
              </a>
              <a href="https://wa.me/5551920027578" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <Phone size={16} /> +55 51 92002-7578
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F2F2F2]/30 text-xs font-sans">
            © {new Date().getFullYear()} Jejori. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {[{ label: "Início", path: "/" }, { label: "Menu", path: "/menu" }, { label: "Sobre", path: "/about" }, { label: "Franquia", path: "/franchise" }].map((item) => (
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