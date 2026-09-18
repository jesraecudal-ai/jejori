import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GoldButton from "../components/shared/GoldButton";
import { MapPin, Globe } from "lucide-react";
import { useOperation } from "@/lib/OperationContext";
import { brasilContent, uruguaiContent, aboutImages } from "@/data/aboutContent";

const langLabels = { pt: "Português", es: "Español", en: "English" };

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-gold whitespace-nowrap">{children}</h2>
      <div className="flex-1 h-px bg-ember/30" />
    </div>);
}

export default function About() {
  const { operation } = useOperation();
  const isUruguai = operation === "uruguai";
  const content = isUruguai ? uruguaiContent : brasilContent;
  const images = aboutImages[isUruguai ? "uruguai" : "brasil"];

  const [lang, setLang] = useState(isUruguai ? "es" : "pt");
  const [langOpen, setLangOpen] = useState(false);
  const t = content[lang];

  // When the visitor switches operation, land them on that operation's native language.
  useEffect(() => {
    setLang(isUruguai ? "es" : "pt");
  }, [isUruguai]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Language Switcher */}
      <div className="fixed top-20 right-4 z-40">
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 bg-[#0B0B0B]/90 border border-[#D4AF37]/30 text-gold font-sans text-xs font-semibold tracking-widest uppercase px-3 py-2 rounded-sm backdrop-blur-sm hover:border-gold/60 transition-all">
            <Globe size={13} />
            {langLabels[lang]}
          </button>
          {langOpen &&
          <div className="absolute right-0 top-full mt-1 bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-sm overflow-hidden shadow-xl">
              {Object.entries(langLabels).map(([code, label]) =>
            <button
              key={code}
              onClick={() => {setLang(code);setLangOpen(false);}}
              className={`block w-full text-left px-4 py-2 font-sans text-xs tracking-widest uppercase transition-colors ${
              lang === code ? "text-gold bg-gold/10" : "text-[#F2F2F2]/60 hover:text-gold hover:bg-gold/5"}`
              }>
                  {label}
                </button>
            )}
            </div>
          }
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={images.hero} alt="Jejori" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="block text-gold font-sans text-xs tracking-[0.4em] uppercase mb-3">{t.heroTag}</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F2F2F2]">
              {isUruguai ? <>Jejori <span className="text-gold">Montevideo</span></> : <>Jejori <span className="text-gold">Asian Haus</span></>}
            </h1>
            <p className="text-[#F2F2F2]/50 font-sans text-base mt-4 max-w-xl mx-auto">{t.heroSub}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-20">

        {/* Identity */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.identity.title}</SectionTitle>
          <div className="space-y-5">
            {t.identity.body.map((p, i) =>
            <p key={i} className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]">{p}</p>
            )}
          </div>
        </motion.div>

        {/* Chef at heart / Kamayan */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.kamayan.title}</SectionTitle>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10">
            <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.9]" dangerouslySetInnerHTML={{ __html: t.kamayan.body }} />
          </div>
        </motion.div>

        {/* Cultural Anchors */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.anchors.title}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.anchors.items.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 border border-[#D4AF37]/10 rounded-lg hover:border-gold/30 transition-all duration-500">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-serif text-base font-bold text-gold mb-1">{item.label}</p>
                  <p className="text-[#F2F2F2]/50 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Founder Story */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.story.title}</SectionTitle>
          <div className="space-y-6">
            <div className="border border-[#D4AF37]/10 rounded-lg p-6 bg-walnut/5">
              <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9]" dangerouslySetInnerHTML={{ __html: t.story.jesrae }} />
            </div>
            {t.story.marjorie && (
            <div className="border border-[#D4AF37]/10 rounded-lg p-6 bg-walnut/5">
              <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9]" dangerouslySetInnerHTML={{ __html: t.story.marjorie }} />
            </div>
            )}
          </div>
        </motion.div>

        {/* Founder Photo */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <div className="relative inline-block">
            <img
              src={images.founder}
              alt={t.founderNames}
              className="w-full max-w-xl mx-auto rounded-lg object-cover border border-[#D4AF37]/20" />
            <div className="mt-4">
              <p className="text-gold font-serif text-lg font-semibold">{t.founderNames}</p>
              <p className="text-[#F2F2F2]/45 font-sans text-sm mt-1">{t.founderCard}</p>
            </div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.journey.title}</SectionTitle>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-ember/30 to-transparent" />
            <div className="space-y-10 pl-12">
              {t.journey.stops.map((stop, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative">
                  <div className="absolute -left-12 top-1 w-3 h-3 rounded-full bg-gold border-2 border-[#0B0B0B] ring-2 ring-gold/30" />
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-gold shrink-0" />
                    <h3 className="font-serif text-xl font-bold text-gold">{stop.place}</h3>
                  </div>
                  <p className="text-[#F2F2F2]/60 font-sans text-sm leading-relaxed">{stop.desc}</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Where it came together / Why Uruguay */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.together.title}</SectionTitle>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10 mb-6">
            <p className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9] mb-6" dangerouslySetInnerHTML={{ __html: t.together.body }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Jesrae</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">{t.together.jesrae}</p>
                </div>
              </div>
              {t.together.marjorie && (
              <div className="flex items-start gap-3 p-4 border border-[#D4AF37]/10 rounded-lg">
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0 mt-2" />
                <div>
                  <p className="text-gold font-sans text-sm font-semibold mb-1">Marjorie</p>
                  <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">{t.together.marjorie}</p>
                </div>
              </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Interior Image */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-lg overflow-hidden">
          <img src={images.interior} alt="Jejori" className="w-full h-72 md:h-[26rem] object-cover" />
        </motion.div>

        {/* Name Change */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.nameChange.title}</SectionTitle>
          <div className="border border-[#D4AF37]/15 rounded-lg p-8 bg-walnut/10 space-y-5">
            {t.nameChange.body.map((p, i) =>
            <p key={i} className="text-[#F2F2F2]/65 font-sans text-base leading-[1.9]" dangerouslySetInnerHTML={{ __html: p }} />
            )}
          </div>
        </motion.div>

        {/* Next chapter (Brasil → Uruguay handover) */}
        {t.nextChapter && (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.nextChapter.title}</SectionTitle>
          <div className="border border-[#D4AF37]/20 rounded-lg p-8 bg-gradient-to-br from-walnut/15 to-transparent">
            <p className="text-[#F2F2F2]/70 font-sans text-base md:text-lg leading-[1.9] first-letter:font-serif first-letter:text-3xl first-letter:text-gold first-letter:mr-1" dangerouslySetInnerHTML={{ __html: t.nextChapter.body }} />
          </div>
        </motion.div>
        )}

        {/* Mission / Vision / Commitment */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <SectionTitle>{t.pillars.title}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.pillars.items.map((p, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border border-[#D4AF37]/15 rounded-lg p-6 text-center hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-500">
                <h3 className="font-serif text-xl font-bold text-gold mb-3">{p.label}</h3>
                <p className="text-[#F2F2F2]/55 font-sans text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 text-center bg-gradient-to-t from-walnut/10 to-transparent">
        <p className="text-[#F2F2F2]/40 font-sans text-sm tracking-widest uppercase mb-3">{t.cta.tag}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-8">
          {t.cta.title} <span className="text-gold">{t.cta.highlight}</span>
        </h2>
        <GoldButton to="/menu">{t.cta.btn}</GoldButton>
      </div>
    </div>);
}