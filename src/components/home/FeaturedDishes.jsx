import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import SectionHeader from "../shared/SectionHeader";
import { useOperation } from "@/lib/OperationContext";
import { operations } from "@/data/operations";

const tagLabels = {
  popular: "Popular",
  spicy: "Apimentado",
  new: "Novo",
  chefs_pick: "Escolha do Chef",
};

export default function FeaturedDishes() {
  const { operation } = useOperation();
  const op = operations[operation] || operations.brasil;

  const { data: items = [] } = useQuery({
    queryKey: ["featured-dishes", op.key],
    queryFn: () =>
      base44.entities.MenuItem.filter({ is_available: true, operation: op.key }),
  });

  const featured = items
    .filter((i) => i.tags?.some((t) => ["popular", "chefs_pick"].includes(t)) && i.image_url)
    .slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={op.key === "uruguai" ? "Destacados" : "Destaques"}
          subtitle={
            op.key === "uruguai"
              ? "Nuestros platos más celebrados, hechos con fuego e intención"
              : "Nossos pratos mais celebrados, preparados com fogo e intenção"
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((dish, i) => {
            const tag = dish.tags?.find((t) => ["popular", "chefs_pick", "new", "spicy"].includes(t));
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image_url}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {tag && (
                  <span className="absolute top-4 left-4 bg-ember text-[#F2F2F2] text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1 rounded-sm">
                    {tagLabels[tag]}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl font-bold text-[#F2F2F2] mb-1 group-hover:text-gold transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <p className="text-[#F2F2F2]/50 text-sm font-sans">{dish.description}</p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-lg transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}