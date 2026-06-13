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
  const priceDisplay = item.price
    ? `R$ ${item.price.toFixed(2)}`
    : item.variants?.[0]?.split(" - ")[1] || "—";

  if (view === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="py-5 border-b border-[#D4AF37]/10 group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3 className="font-serif text-lg font-semibold text-[#F2F2F2] group-hover:text-gold transition-colors">
                {item.name}
              </h3>
              {item.tags?.map((tag) => (
                <span key={tag} className={`text-[9px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm ${tagColors[tag]}`}>
                  {tagLabels[tag]}
                </span>
              ))}
            </div>
            <p className="text-[#F2F2F2]/40 text-sm font-sans mb-2">{item.description}</p>
            {item.cooking?.length > 0 && (
              <p className="text-gold/50 text-xs font-sans">{item.cooking.join(" · ")}</p>
            )}
            {item.variants && item.variants.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.variants.map((v) => (
                  <span key={v} className="text-[#F2F2F2]/50 text-xs font-sans border border-[#D4AF37]/15 px-2 py-0.5 rounded-sm">
                    {v}
                  </span>
                ))}
              </div>
            )}
            {item.flavors?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.flavors.map((f) => (
                  <span key={f} className="text-[#F2F2F2]/40 text-xs font-sans border border-ember/20 px-2 py-0.5 rounded-sm">
                    {f}
                  </span>
                ))}
              </div>
            )}
            {item.add_ons?.length > 0 && (
              <div className="mt-2">
                {item.add_ons.map((a) => (
                  <p key={a} className="text-gold/40 text-xs font-sans">{a}</p>
                ))}
              </div>
            )}
          </div>
          <span className="font-sans font-bold text-gold text-base whitespace-nowrap shrink-0 mt-1">
            {priceDisplay}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-lg overflow-hidden border border-[#D4AF37]/10 hover:border-gold/30 transition-all duration-500 bg-[#0F0F0F]"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-walnut/20">
            <span className="font-serif text-4xl text-gold/20">{item.name?.[0]}</span>
          </div>
        )}
      </div>

      {/* Tags */}
      {item.tags?.length > 0 && (
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {item.tags.map((tag) => (
            <span key={tag} className={`text-[9px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm ${tagColors[tag]}`}>
              {tagLabels[tag]}
            </span>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-bold text-[#F2F2F2] mb-1 group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-[#F2F2F2]/45 text-sm font-sans leading-relaxed mb-3 flex-1">{item.description}</p>

        {item.cooking?.length > 0 && (
          <p className="text-gold/50 text-xs font-sans mb-3">{item.cooking.join(" · ")}</p>
        )}

        {item.variants && item.variants.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {item.variants.map((v) => (
              <span key={v} className="text-[#F2F2F2]/60 text-xs font-sans border border-[#D4AF37]/20 px-2 py-1 rounded-sm">
                {v}
              </span>
            ))}
          </div>
        ) : (
          <span className="font-sans font-bold text-gold text-lg mt-auto">
            R$ {item.price?.toFixed(2) || "—"}
          </span>
        )}

        {item.flavors?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.flavors.map((f) => (
              <span key={f} className="text-[#F2F2F2]/40 text-[10px] font-sans border border-ember/20 px-2 py-0.5 rounded-sm">
                {f}
              </span>
            ))}
          </div>
        )}

        {item.add_ons?.length > 0 && (
          <div className="mt-2 border-t border-[#D4AF37]/10 pt-2">
            {item.add_ons.map((a) => (
              <p key={a} className="text-gold/40 text-xs font-sans">{a}</p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}