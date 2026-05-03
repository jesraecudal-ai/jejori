import React from "react";

const categories = [
  { key: "all", label: "Todos" },
  { key: "dumplings", label: "Dumplings" },
  { key: "spring_rolls", label: "Spring Rolls" },
  { key: "buns_rice", label: "Pães & Arroz" },
  { key: "soups", label: "Sopas" },
  { key: "noodles", label: "Macarrão" },
  { key: "chicken", label: "Frango" },
  { key: "rice_snacks", label: "Snacks de Arroz" },
];

const filters = [
  { key: "popular", label: "Popular" },
  { key: "spicy", label: "Apimentado" },
  { key: "new", label: "Novo" },
  { key: "chefs_pick", label: "Escolha do Chef" },
];

export default function CategoryBar({ activeCategory, setActiveCategory, activeFilter, setActiveFilter }) {
  return (
    <div className="sticky top-[72px] z-30 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D4AF37]/10 py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`whitespace-nowrap px-5 py-2 text-sm font-sans font-medium tracking-wider uppercase rounded-sm transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gold text-[#0B0B0B]"
                  : "text-[#F2F2F2]/50 hover:text-gold border border-[#D4AF37]/15 hover:border-gold/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <div className="w-px h-8 bg-[#D4AF37]/20 mx-2 self-center shrink-0" />
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(activeFilter === f.key ? null : f.key)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-sans font-medium tracking-wider uppercase rounded-sm transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-ember text-[#F2F2F2]"
                  : "text-[#F2F2F2]/40 hover:text-ember border border-ember/20 hover:border-ember/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}