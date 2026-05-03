import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

const reviews = [
  { name: "Marina S.", text: "Best Asian fusion in Porto Alegre. The ambiance is unreal — felt like Tokyo at night.", rating: 5 },
  { name: "Carlos P.", text: "The ramen alone is worth the trip. Absolutely incredible broth. We'll be back every week.", rating: 5 },
  { name: "Ana L.", text: "Perfect date night spot. Dark, cozy, and the cocktails are on another level.", rating: 5 },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Voices" subtitle="What our guests are saying" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-[#D4AF37]/10 rounded-lg p-8 bg-[#0B0B0B]/80 hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array(review.rating).fill(0).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[#F2F2F2]/70 font-sans text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="text-gold font-serif text-base font-semibold">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}