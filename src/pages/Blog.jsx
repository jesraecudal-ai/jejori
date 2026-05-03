import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => base44.entities.BlogPost.filter({ is_published: true }, "-created_date", 50),
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      <div className="py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold text-gold mb-4"
        >
          Diário
        </motion.h1>
        <p className="text-[#F2F2F2]/50 font-sans text-lg max-w-lg mx-auto">
          Histórias da cozinha, do bar e da noite
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-16 bg-ember" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-ember" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#F2F2F2]/40 font-sans text-lg">Em breve — as histórias estão fermentando</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug || post.id}`}
                  className="group block border border-[#D4AF37]/10 rounded-lg overflow-hidden bg-[#0B0B0B]/80 hover:border-gold/30 transition-all duration-500"
                >
                  {post.cover_image_url && (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-gold/50 text-xs font-sans uppercase tracking-widest mb-3">
                      {post.author || "Jejori"} · {new Date(post.created_date).toLocaleDateString()}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-[#F2F2F2] mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#F2F2F2]/50 text-sm font-sans leading-relaxed mb-4">
                      {post.excerpt || post.content?.substring(0, 120) + "..."}
                    </p>
                    <span className="text-gold text-sm font-sans font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Ler Mais <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}