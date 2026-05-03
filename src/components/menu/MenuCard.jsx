import React from "react";
import { motion } from "framer-motion";

const tagColors = {
  popular: "bg-gold text-[#0B0B0B]",
  spicy: "bg-ember text-[#F2F2F2]",
  new: "bg-[#8B0000] text-[#F2F2F2]",
  chefs_pick: "bg-[#3E2723] text-gold border border-gold/30",
};

const tagLabels = {
  popular: "Popular",
  spicy: "Apimentado",
  new: "Novo",
  chefs_pick: "Escolha do Chef",
};

export default function MenuCard({ item, index, view = "visual" }) {
  if (view === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="flex items-center justify-between py-4 border-b border-[#D4AF37]/10 group"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-serif text-lg font-semibold text-[#F2F2F2] group-hover:text-gold transition-colors">
              {item.name}
            </h3>
            {item.tags?.map((tag) => (
              <span key={tag} className={`text-[9px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm ${tagColors[tag]}`}>
                {tagLabels[tag]}
              </span>
            ))}
          </div>
          <p className="text-[#F2F2F2]/40 text-sm font-sans">{item.description || "Uma criação assinatura do Jejori"}</p>
        </div>
        <span className="font-sans font-bold text-gold text-lg ml-4">
          R$ {item.price?.toFixed(2) || "—"}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-[#1a1a1a]">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-walnut/30">
            <span className="font-serif text-3xl text-gold/30">{item.name?.[0]}</span>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      {/* Tags */}
      <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
        {item.tags?.map((tag) => (
          <span key={tag} className={`text-[9px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm ${tagColors[tag]}`}>
            {tagLabels[tag]}
          </span>
        ))}
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif text-xl font-bold text-[#F2F2F2] mb-1 group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-[#F2F2F2]/40 text-sm font-sans mb-2">{item.description || "Uma criação assinatura do Jejori"}</p>
        <span className="font-sans font-bold text-gold text-lg">
          R$ {item.price?.toFixed(2) || "—"}
        </span>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-lg transition-all duration-500 group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.05)]" />
    </motion.div>
  );
}