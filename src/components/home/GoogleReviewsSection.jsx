import React from "react";
import { motion } from "framer-motion";
import { Star, Loader2, ExternalLink, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import SectionHeader from "../shared/SectionHeader";

const MAPS_URL =
  "https://www.google.com/maps/place/Jejori+Dimsum+Haus/@-29.9440632,-50.994545,17z/data=!3m1!4b1!4m6!3m5!1s0x95190b0040a95275:0x955bc1ff71a7b5d4!8m2!3d-29.9440679!4d-50.9919701!16s%2Fg%2F11yx9gml25";

const PROMPT = `Find the Google Maps business listing "Jejori Dimsum Haus" located in Gravataí, Rio Grande do Sul, Brazil (coordinates -29.9440679, -50.9919701). Look at the real customer reviews currently shown on that Google Maps listing. Return the most recent real reviews you can find, each with the reviewer's display name, the star rating they gave (an integer from 1 to 5), the full review text they wrote, and a relative time string exactly as Google shows it (for example "2 weeks ago" or "a month ago"). Also return the business's overall star rating and total number of ratings if visible. If you cannot find real reviews for this specific listing, return an empty reviews array and null ratings — do NOT invent, fabricate, or guess any review.`;

export default function GoogleReviewsSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["googleReviews", "brasil-jejori-gravatai"],
    queryFn: () =>
      base44.integrations.Core.InvokeLLM({
        prompt: PROMPT,
        add_context_from_internet: true,
        model: "gemini_3_flash",
        response_json_schema: {
          type: "object",
          properties: {
            business_name: { type: "string" },
            overall_rating: { type: "number" },
            total_ratings: { type: "number" },
            reviews: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  author_name: { type: "string" },
                  rating: { type: "number" },
                  text: { type: "string" },
                  relative_time: { type: "string" },
                },
              },
            },
          },
        },
      }),
    staleTime: 1000 * 60 * 30,
  });

  const reviews = (data && data.reviews) || [];
  const overall = data && typeof data.overall_rating === "number" ? data.overall_rating : null;
  const total = data && typeof data.total_ratings === "number" ? data.total_ratings : null;

  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Avaliações no Google"
          subtitle="O que os clientes dizem no Google Maps · Gravataí"
        />

        {/* Summary */}
        {!isLoading && !isError && overall !== null && reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-3 border border-[#D4AF37]/20 rounded-lg px-6 py-3 bg-walnut/10">
              <span className="font-serif text-4xl font-bold text-gold">{overall.toFixed(1)}</span>
              <div>
                <div className="flex gap-1">
                  {Array(Math.round(overall)).fill(0).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                {total !== null && (
                  <p className="text-[#F2F2F2]/40 font-sans text-xs mt-1">
                    {total} {total !== 1 ? "avaliações" : "avaliação"}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Loading */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <Loader2 className="w-7 h-7 text-gold animate-spin" />
          </div>
        )}

        {/* Error / empty */}
        {(isError || (!isLoading && reviews.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-[#F2F2F2]/45 font-sans text-sm mb-5">
              Não conseguimos carregar as avaliações agora.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-sans text-sm hover:underline"
            >
              <MapPin size={14} /> Ver no Google Maps <ExternalLink size={12} />
            </a>
          </div>
        )}

        {/* Reviews grid */}
        {!isLoading && reviews.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.slice(0, 6).map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="border border-[#D4AF37]/10 rounded-lg p-8 bg-[#0B0B0B]/80 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array(review.rating || 5).fill(0).map((_, j) => (
                        <Star key={j} size={14} className="fill-gold text-gold" />
                      ))}
                    </div>
                    {review.relative_time && (
                      <span className="text-[#F2F2F2]/30 font-sans text-xs">
                        {review.relative_time}
                      </span>
                    )}
                  </div>
                  <p className="text-[#F2F2F2]/70 font-sans text-sm leading-relaxed mb-6 italic line-clamp-6">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold font-serif font-bold text-sm">
                      {(review.author_name || "?").charAt(0).toUpperCase()}
                    </div>
                    <p className="text-gold font-serif text-base font-semibold">
                      {review.author_name || "Cliente"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-sans text-sm tracking-widest uppercase transition-colors"
              >
                Ver todas no Google Maps <ExternalLink size={13} />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}