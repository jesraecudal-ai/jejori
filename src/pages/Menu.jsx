import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import CategoryBar from "../components/menu/CategoryBar";
import ViewToggle from "../components/menu/ViewToggle";
import MenuCard from "../components/menu/MenuCard";
import GoldButton from "../components/shared/GoldButton";
import { Loader2 } from "lucide-react";

const categoryLabels = {
  starters: "Entradas",
  main_dishes: "Pratos Principais",
  drinks: "Bebidas",
  desserts: "Sobremesas",
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState(null);
  const [view, setView] = useState("visual");

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["menuItems"],
    queryFn: () => base44.entities.MenuItem.list("sort_order", 200),
  });

  const filtered = items.filter((item) => {
    if (!item.is_available && item.is_available !== undefined) return false;
    const catMatch = activeCategory === "all" || item.category === activeCategory;
    const filterMatch = !activeFilter || item.tags?.includes(activeFilter);
    return catMatch && filterMatch;
  });

  // Chef's Picks section
  const chefsPicks = items.filter(
    (item) => item.tags?.includes("chefs_pick") && (item.is_available !== false)
  );

  // Group by category for display
  const grouped = {};
  filtered.forEach((item) => {
    const cat = item.category || "other";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Header */}
      <div className="py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold text-gold mb-4"
        >
          Cardápio
        </motion.h1>
        <p className="text-[#F2F2F2]/50 font-sans text-lg max-w-lg mx-auto">
          Cada prato conta uma história de fumaça, tempero e alma
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-16 bg-ember" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-ember" />
        </div>
      </div>

      {/* Category Bar */}
      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* View Toggle + Count */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-[#F2F2F2]/30 text-sm font-sans">
          {filtered.length} {filtered.length !== 1 ? "itens" : "item"}
        </span>
        <ViewToggle view={view} setView={setView} />
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#F2F2F2]/40 font-sans text-lg">Nenhum item encontrado</p>
          </div>
        ) : (
          <>
            {/* Chef's Picks */}
            {activeCategory === "all" && !activeFilter && chefsPicks.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-serif text-2xl font-bold text-gold">Escolhas do Chef</h3>
                  <div className="flex-1 h-px bg-ember/30" />
                </div>
                <div className={view === "visual" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : ""}>
                  {chefsPicks.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} view={view} />
                  ))}
                </div>
              </div>
            )}

            {/* Grouped by category */}
            {Object.entries(grouped).map(([cat, catItems]) => (
              <div key={cat} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-serif text-2xl font-bold text-gold">
                    {categoryLabels[cat] || cat}
                  </h3>
                  <div className="flex-1 h-px bg-ember/30" />
                </div>
                <div className={view === "visual" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : ""}>
                  {catItems.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} view={view} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="py-20 px-6 text-center bg-gradient-to-t from-walnut/10 to-transparent">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-3">
          Com vontade de algo?
        </h2>
        <p className="text-[#F2F2F2]/50 font-sans mb-8">
          Venha provar pessoalmente — nenhuma tela captura o aroma
        </p>
        <GoldButton to="/about" className="animate-pulse-glow">
          Visite-nos Hoje
        </GoldButton>
      </div>
    </div>
  );
}