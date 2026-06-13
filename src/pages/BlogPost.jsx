import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = window.location.pathname.split("/blog/")[1];

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => base44.entities.BlogPost.list("-created_date", 200),
  });

  const post = posts.find((p) => p.slug === slug || p.id === slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] pt-32 text-center px-6">
        <h1 className="font-serif text-3xl text-gold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-gold font-sans text-sm hover:underline">
          ← Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-24">
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-sm font-sans mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {post.cover_image_url && (
          <div className="rounded-lg overflow-hidden mb-10 h-64 md:h-96">
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <p className="text-gold/50 text-xs font-sans uppercase tracking-widest mb-4">
          {post.author || "Jejori"} · {new Date(post.created_date).toLocaleDateString()}
        </p>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-8">
          {post.title}
        </h1>

        <div className="prose prose-invert prose-gold max-w-none">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="text-[#F2F2F2]/70 font-sans text-base leading-[1.8] mb-6">{children}</p>,
              h2: ({ children }) => <h2 className="font-serif text-2xl text-gold mt-10 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="font-serif text-xl text-gold mt-8 mb-3">{children}</h3>,
              a: ({ children, ...props }) => <a {...props} className="text-gold hover:underline">{children}</a>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-gold pl-6 my-6 italic text-[#F2F2F2]/50">{children}</blockquote>
              ),
            }}
          >
            {post.content || ""}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}