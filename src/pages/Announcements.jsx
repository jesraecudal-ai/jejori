import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Flame, Calendar, Tag, Loader2 } from "lucide-react";

const categoryIcons = {
  events: Calendar,
  hours: Flame,
  promotions: Tag,
};

const categoryLabels = {
  events: "Events",
  hours: "Opening Hours",
  promotions: "Promotions",
};

export default function Announcements() {
  const [filter, setFilter] = useState("all");

  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["announcements"],
    queryFn: () => base44.entities.Announcement.list("-created_date", 100),
  });

  const active = announcements.filter((a) => a.is_active !== false);
  const filtered = filter === "all" ? active : active.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      <div className="py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold text-gold mb-4"
        >
          Announcements
        </motion.h1>
        <p className="text-[#F2F2F2]/50 font-sans text-lg">
          Stay updated on what's happening at Jejori
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-16 bg-ember" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-ember" />
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <div className="flex gap-3 flex-wrap justify-center">
          {["all", "events", "hours", "promotions"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-sans font-medium tracking-wider uppercase rounded-sm transition-all duration-300 ${
                filter === cat
                  ? "bg-gold text-[#0B0B0B]"
                  : "text-[#F2F2F2]/50 border border-[#D4AF37]/15 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat === "all" ? "All" : categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#F2F2F2]/40 font-sans text-lg">No announcements right now</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item, i) => {
              const Icon = categoryIcons[item.category] || Flame;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-[#D4AF37]/10 rounded-lg overflow-hidden bg-[#0B0B0B]/80 hover:border-gold/30 transition-all duration-500 group"
                >
                  {item.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {item.urgency_tag && (
                        <span className="bg-ember text-[#F2F2F2] text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                          {item.urgency_tag}
                        </span>
                      )}
                      <span className="text-gold/50 text-xs font-sans flex items-center gap-1">
                        <Icon size={12} /> {categoryLabels[item.category]}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#F2F2F2] mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#F2F2F2]/50 text-sm font-sans leading-relaxed">
                      {item.description}
                    </p>
                    {item.valid_until && (
                      <p className="text-ember text-xs font-sans mt-4">
                        Valid until {new Date(item.valid_until).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}