import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Instagram, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { useOperation } from "@/lib/OperationContext";

export default function InstagramCarousel() {
  const { operation } = useOperation();
  const isUruguai = operation === "uruguai";

  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(0);

  const PER_VIEW = 4;

  useEffect(() => {
    let cancelled = false;
    base44.functions
      .invoke("instagramFeed", {})
      .then((res) => {
        if (cancelled) return;
        setMedia(res.data?.media || []);
      })
      .catch(() => {})
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  if (!loading && media.length === 0) return null;

  const canPrev = start > 0;
  const canNext = start + PER_VIEW < media.length;
  const view = media.slice(start, start + PER_VIEW);

  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={isUruguai ? "Desde Instagram" : "Do Instagram"}
          subtitle={isUruguai ? "Un vistazo en tiempo real a lo que sucede en Jejori" : "Um olhar em tempo real no que acontece no Jejori"}
        />

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gold/70 hover:text-gold text-sm font-sans tracking-widest uppercase transition-colors"
              >
                <Instagram size={16} /> @jejori
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setStart((s) => Math.max(0, s - PER_VIEW))}
                  disabled={!canPrev}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/20 text-gold/70 hover:text-gold hover:border-gold/50 disabled:opacity-25 disabled:hover:border-[#D4AF37]/20 flex items-center justify-center transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setStart((s) => Math.min(media.length - PER_VIEW, s + PER_VIEW))}
                  disabled={!canNext}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/20 text-gold/70 hover:text-gold hover:border-gold/50 disabled:opacity-25 disabled:hover:border-[#D4AF37]/20 flex items-center justify-center transition-all"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {view.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative aspect-square overflow-hidden rounded-lg block"
                >
                  <img
                    src={item.image_url}
                    alt={item.caption?.slice(0, 60) || "Instagram post"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0B0B0B]/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Instagram size={14} className="text-gold" />
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}