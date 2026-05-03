import React from "react";
import { motion } from "framer-motion";
import GoldButton from "../components/shared/GoldButton";

const HERO_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/aae1a996d_generated_68b9d686.png";
const INTERIOR_IMAGE = "https://media.base44.com/images/public/69f7a7217f4aea931ae30c1c/5c65208d5_generated_e66787bc.png";

const sections = [
  {
    title: "The Story",
    text: "Jejori was born from a love affair between Brazilian warmth and Asian precision. We set out to create a space where the energy of the night meets the artistry of the kitchen — a place where every dish is a conversation, every cocktail a moment, and every visit a memory etched in smoke and gold.",
  },
  {
    title: "The Experience",
    text: "Step through our doors and the world outside fades. Brick walls breathe with the warmth of amber lanterns. The scent of charcoal and ginger fills the air. Our chefs work with open flame and ancient techniques, transforming simple ingredients into something that moves you. This isn't just dinner — it's a ritual.",
  },
  {
    title: "The Vision",
    text: "We believe dining is the last great social art. In a world moving faster every day, Jejori slows time. We're building a movement — not just restaurants, but gathering places for people who crave connection, flavor, and the intoxicating energy of the night. Two locations today. Tomorrow, everywhere.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={HERO_IMAGE} alt="Jejori interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-6"
          >
            <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F2F2F2]">
              About <span className="text-gold">Jejori</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Story Sections */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold">
                {section.title}
              </h2>
              <div className="flex-1 h-px bg-ember/30" />
            </div>
            <p className="text-[#F2F2F2]/65 font-sans text-base md:text-lg leading-[1.8]">
              {section.text}
            </p>
          </motion.div>
        ))}

        {/* Interior Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden mb-20"
        >
          <img
            src={INTERIOR_IMAGE}
            alt="Jejori restaurant interior with warm ambient lighting and brick walls"
            className="w-full h-80 md:h-[28rem] object-cover"
          />
        </motion.div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 text-center bg-gradient-to-t from-walnut/10 to-transparent">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-4">
          Come <span className="text-gold">Experience</span> It
        </h2>
        <p className="text-[#F2F2F2]/50 font-sans mb-8">
          The story continues every night — at your table
        </p>
        <GoldButton to="/reserve" className="animate-pulse-glow">
          Reserve a Table
        </GoldButton>
      </div>
    </div>
  );
}