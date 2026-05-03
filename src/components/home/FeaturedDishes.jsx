import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

const dishes = [
  { name: "Tonkotsu Ramen", desc: "Caldo rico de osso de porco, chashu, ovo mole", tag: "Assinatura" },
  { name: "Korean Wings", desc: "Frango ao molho gochujang, gergelim e cebolinha", tag: "Popular" },
  { name: "Smoke & Ember", desc: "Drinque assinatura da casa, cítrico defumado", tag: "Drink" },
  { name: "Gyoza Platter", desc: "Gyoza grelhado, molho ponzu com trufa", tag: "Chef's Pick" },
];

export default function FeaturedDishes({ images }) {
  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Destaques"
          subtitle="Nossos pratos mais celebrados, preparados com fogo e intenção"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={images[i]}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Tag */}
              <span className="absolute top-4 left-4 bg-ember text-[#F2F2F2] text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1 rounded-sm">
                {dish.tag}
              </span>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl font-bold text-[#F2F2F2] mb-1 group-hover:text-gold transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-[#F2F2F2]/50 text-sm font-sans">{dish.desc}</p>
              </div>

              {/* Gold glow border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-lg transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}