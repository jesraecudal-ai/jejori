import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { googleReviews } from "@/data/googleReviews";

export default function GoogleReviewsSection() {
  const { overall_rating, total_ratings, summary, maps_url, reviews } = googleReviews;

  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Avaliações no Google"
          subtitle="O que os clientes dizem no Google Maps · Gravataí"
        />

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-3 border border-[#D4AF37]/20 rounded-lg px-6 py-3 bg-walnut/10">
            <span className="font-serif text-4xl font-bold text-gold">{overall_rating.toFixed(1)}</span>
            <div>
              <div className="flex gap-1">
                {Array(Math.round(overall_rating)).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[#F2F2F2]/40 font-sans text-xs mt-1">
                {total_ratings} {total_ratings !== 1 ? "avaliações" : "avaliação"}
              </p>
            </div>
          </div>
        </motion.div>

        {summary && (
          <p className="text-[#F2F2F2]/55 font-sans text-sm md:text-base text-center max-w-3xl mx-auto mb-12 italic leading-relaxed">
            {summary}
          </p>
        )}

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.15 }}
              className="border border-[#D4AF37]/10 rounded-lg p-8 bg-[#0B0B0B]/80 hover:border-gold/30 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array(review.rating || 5).fill(0).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                {review.time && (
                  <span className="text-[#F2F2F2]/30 font-sans text-xs">{review.time}</span>
                )}
              </div>
              <p className="text-[#F2F2F2]/70 font-sans text-sm leading-relaxed mb-6 italic flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold font-serif font-bold text-base">
                  {(review.author || "?").charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-gold font-serif text-base font-semibold leading-tight">
                    {review.author}
                  </p>
                  {review.badge && (
                    <p className="text-[#F2F2F2]/35 font-sans text-xs mt-0.5">{review.badge}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-sans text-sm tracking-widest uppercase transition-colors"
          >
            Ver todas no Google Maps <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}