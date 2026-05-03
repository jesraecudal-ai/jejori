import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#F2F2F2]/50 font-sans text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-16 bg-ember" />
        <div className="w-2 h-2 rotate-45 bg-gold" />
        <div className="h-px w-16 bg-ember" />
      </div>
    </motion.div>
  );
}