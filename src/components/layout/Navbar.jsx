import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X, ArrowLeftRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useOperation } from "@/lib/OperationContext";
import { operations } from "@/data/operations";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Blog", path: "/blog" },
  { label: "Sobre", path: "/about" },
  { label: "Franquia", path: "/franchise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { operation } = useOperation();
  const op = operation ? operations[operation] : operations.brasil;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // hide navbar on the selector screen
  if (location.pathname === "/") return null;

  const homePath = op ? `/${op.key}` : "/";
  const isUruguai = op.key === "uruguai";

  const contactLink = isUruguai ? "/uruguai" : "/reserve";
  const contactLabel = isUruguai ? "Contacto" : "Contato";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D4AF37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={homePath} className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/28f4dca2e_JEJORILOGO1.png"
              alt="Jejori Asian Haus"
              className="h-12 w-12 object-contain invert"
            />
          </Link>
          <button
            onClick={() => navigate("/")}
            title="Trocar operação / Cambiar operación"
            className="hidden lg:flex items-center gap-1.5 text-[#D4AF37]/60 hover:text-gold text-[10px] font-sans font-semibold tracking-widest uppercase transition-colors"
          >
            <ArrowLeftRight size={11} />
            {op.shortName || op.name}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to={homePath}
            className="text-sm font-sans font-medium tracking-widest uppercase text-[#D4AF37]"
          >
            Início
          </Link>
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-sans font-medium tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-[#F2F2F2]/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={contactLink}
            className="bg-gold text-[#0B0B0B] px-6 py-2.5 text-sm font-sans font-semibold tracking-widest uppercase rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            {contactLabel}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#F2F2F2] p-2"
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B0B0B]/98 backdrop-blur-lg border-t border-[#D4AF37]/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link to={homePath} className="text-lg font-serif tracking-wider text-gold">
                Início
              </Link>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-serif tracking-wider transition-colors duration-300 ${
                    location.pathname === link.path ? "text-gold" : "text-[#F2F2F2]/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={contactLink}
                className="bg-gold text-[#0B0B0B] px-6 py-3 text-center font-sans font-semibold tracking-widest uppercase rounded-sm mt-2"
              >
                {contactLabel}
              </Link>
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-[#D4AF37]/70 hover:text-gold text-xs font-sans font-semibold tracking-widest uppercase mt-3"
              >
                <ArrowLeftRight size={12} />
                Trocar operação ({op.shortName || op.name})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}