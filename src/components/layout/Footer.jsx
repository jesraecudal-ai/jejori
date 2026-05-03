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
              Where Night Meets Flavor. An Asian-inspired dining experience crafted for the soul.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Locations</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <p className="text-[#F2F2F2]/60 text-sm font-sans">Centro, Gravataí</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <p className="text-[#F2F2F2]/60 text-sm font-sans">Cidade Baixa, Porto Alegre</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gold shrink-0" />
                <p className="text-[#F2F2F2]/60 text-sm font-sans">Tue–Sun: 6PM – 12AM</p>
              </div>
              <p className="text-[#F2F2F2]/40 text-sm font-sans pl-6">Closed Mondays</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <Instagram size={16} /> @jejori.restaurant
              </a>
              <a href="#" className="flex items-center gap-2 text-[#F2F2F2]/60 hover:text-gold transition-colors text-sm font-sans">
                <Phone size={16} /> +55 (51) 9999-0000
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F2F2F2]/30 text-xs font-sans">
            © {new Date().getFullYear()} Jejori. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Home", "Menu", "About", "Franchise"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[#F2F2F2]/30 hover:text-gold text-xs font-sans uppercase tracking-widest transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}