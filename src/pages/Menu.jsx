import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import CategoryBar from "../components/menu/CategoryBar";
import ViewToggle from "../components/menu/ViewToggle";
import MenuCard from "../components/menu/MenuCard";
import GoldButton from "../components/shared/GoldButton";
import { Loader2 } from "lucide-react";
import { useOperation } from "@/lib/OperationContext";
import { operations } from "@/data/operations";

const categoryLabels = {
  dumplings: "Dumplings",
  spring_rolls: "Spring Rolls (Lumpia)",
  buns_rice: "Pães & Arroz",
  soups: "Sopas",
  noodles: "Macarrão",
  chicken: "Frango",
  rice_snacks: "Snacks de Arroz",
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState(null);
  const [view, setView] = useState("visual");
  const { operation } = useOperation();
  const op = operations[operation] || operations.brasil;
  const isUruguai = op.key === "uruguai";

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["menuItems", op.key],
    queryFn: () => base44.entities.MenuItem.filter({ operation: op.key, is_available: true }, "sort_order", 200),
  });

  const filtered = items.filter((item) => {
    if (!item.is_available && item.is_available !== undefined) return false;
    const catMatch = activeCategory === "all" || item.category === activeCategory;
    const filterMatch = !activeFilter || item.tags?.includes(activeFilter);
    return catMatch && filterMatch;
  });

  const chefsPicks = items.filter((item) => item.tags?.includes("chefs_pick"));

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
          {isUruguai ? "Menú" : "Cardápio"}
        </motion.h1>
        <p className="text-[#F2F2F2]/50 font-sans text-lg max-w-lg mx-auto">
          {isUruguai
            ? "Cada plato cuenta una historia de humo, sazón y alma · Montevideo"
            : "Cada prato conta uma história de fumaça, tempero e alma"}
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
          {filtered.length} {filtered.length !== 1 ? (isUruguai ? "ítems" : "itens") : isUruguai ? "ítem" : "item"}
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
            <p className="text-[#F2F2F2]/40 font-sans text-lg">
              {isUruguai
                ? "Próximamente — estamos preparando el menú de Montevideo"
                : "Nenhum item encontrado"}
            </p>
          </div>
        ) : (
          <>
            {activeCategory === "all" && !activeFilter && chefsPicks.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-serif text-2xl font-bold text-gold">
                    {isUruguai ? "Elecciones del Chef" : "Escolhas do Chef"}
                  </h3>
                  <div className="flex-1 h-px bg-ember/30" />
                </div>
                <div className={view === "visual" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : ""}>
                  {chefsPicks.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} view={view} />
                  ))}
                </div>
              </div>
            )}

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
          {isUruguai ? "¿Te antojás algo?" : "Com vontade de algo?"}
        </h2>
        <p className="text-[#F2F2F2]/50 font-sans mb-8">
          {isUruguai
            ? "Pronto podrás venir a probarlo en persona — Montevideo abre en breve"
            : "Venha provar pessoalmente — nenhuma tela captura o aroma"}
        </p>
        {isUruguai ? (
          <GoldButton to="/uruguai" className="animate-pulse-glow">
            Quiero ser avisado
          </GoldButton>
        ) : (
          <GoldButton to="/about" className="animate-pulse-glow">
            Visite-nos Hoje
          </GoldButton>
        )}
      </div>
    </div>
  );
}