import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useOperation } from "@/lib/OperationContext";
import { operations } from "@/data/operations";
import GoldButton from "@/components/shared/GoldButton";
import { Loader2, CheckCircle, MapPin } from "lucide-react";

const op = operations.uruguai;

export default function UruguayLanding() {
  const { setOperation } = useOperation();
  const [form, setForm] = useState({ full_name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setOperation("uruguai");
  }, [setOperation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await base44.entities.OpeningInterest.create({
        ...form,
        city: "Montevideo",
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0B0B0B]">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={op.heroImage} alt="Jejori Montevideo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-5 block"
          >
            {op.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F2F2F2] mb-6 leading-[0.95]"
          >
            {op.hero.title}
            <br />
            <span className="text-gold">{op.hero.highlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#F2F2F2]/60 font-sans text-base md:text-lg max-w-lg mb-4"
          >
            {op.hero.subtitle}
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-block mt-2 bg-[#0B0B0B]/70 border border-[#D4AF37]/30 text-gold text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-2 rounded-sm animate-pulse"
          >
            ✦ {op.openingNote}
          </motion.span>
        </div>
      </section>

      {/* Teaser / brand story */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-6">
            {op.teaser.title}
          </h2>
          <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]">
            {op.teaser.body}
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-ember" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-ember" />
          </div>
        </motion.div>
      </section>

      {/* Service Model */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-4 text-center">
            {op.serviceModel.title}
          </h2>
          <p className="text-[#F2F2F2]/60 font-sans text-base leading-[1.8] text-center mb-12 max-w-2xl mx-auto">
            {op.serviceModel.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { ...op.serviceModel.takeAway, badge: "Disponible al abrir" },
              { ...op.serviceModel.delivery, badge: "Disponible al abrir" },
              { ...op.serviceModel.dineIn, badge: "Por confirmar" },
            ].map((s) => (
              <div
                key={s.label}
                className={`border rounded-lg p-6 transition-all duration-500 hover:border-gold/40 ${
                  s.badge === "Por confirmar"
                    ? "border-[#D4AF37]/15 opacity-70 hover:opacity-100"
                    : "border-[#D4AF37]/25 hover:shadow-[0_0_24px_rgba(212,175,55,0.08)]"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-4 ${
                    s.badge === "Por confirmar"
                      ? "bg-muted text-[#F2F2F2]/50"
                      : "bg-gold/15 border border-gold/30 text-gold"
                  }`}
                >
                  {s.badge === "Por confirmar" ? "✦ Por confirmar" : "✓ " + s.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F2F2F2] mb-2">{s.label}</h3>
                <p className="text-[#F2F2F2]/50 font-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Notify CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-walnut/10 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto border border-[#D4AF37]/15 rounded-lg p-8 md:p-12 bg-walnut/10"
        >
          <h3 className="font-serif text-3xl font-bold text-[#F2F2F2] mb-3 text-center">
            {op.notify.title}
          </h3>
          <p className="text-[#F2F2F2]/50 font-sans text-sm mb-8 text-center">
            {op.notify.subtitle}
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-[#F2F2F2]/70 font-sans text-sm">{op.notify.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder={op.notify.namePlaceholder}
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                required
                className="w-full bg-[#0B0B0B] border border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold rounded-sm px-4 py-3 text-sm font-sans outline-none"
              />
              <input
                type="email"
                placeholder={op.notify.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-[#0B0B0B] border border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold rounded-sm px-4 py-3 text-sm font-sans outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gold text-[#0B0B0B] py-3.5 font-sans font-semibold tracking-widest uppercase rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {op.notify.submit}
              </button>
            </form>
          )}
        </motion.div>
      </section>

      {/* City */}
      <section className="py-20 px-6 text-center">
        <MapPin className="w-6 h-6 text-gold mx-auto mb-3" />
        <p className="text-[#F2F2F2]/50 font-sans text-sm tracking-widest uppercase">
          {op.city}
        </p>
      </section>

      {/* Preview CTA to menu/blog */}
      <div className="py-16 px-6 text-center border-t border-[#D4AF37]/10">
        <GoldButton to="/menu" variant="ghost">
          Ver Menú
        </GoldButton>
      </div>
    </div>
  );
}