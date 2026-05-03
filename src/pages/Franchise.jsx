import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { TrendingUp, Users, MapPin, Award, Loader2, CheckCircle } from "lucide-react";
import GoldButton from "../components/shared/GoldButton";

const stats = [
  { icon: TrendingUp, label: "Table Turnover", value: "140%" },
  { icon: Users, label: "Monthly Guests", value: "8,000+" },
  { icon: MapPin, label: "Locations", value: "2" },
  { icon: Award, label: "Brand Recognition", value: "Top 10" },
];

const benefits = [
  "Strong, recognizable brand identity",
  "Night dining culture with high margins",
  "Proven operational playbook",
  "Full marketing and design support",
  "Menu innovation pipeline",
  "Community-driven growth model",
];

export default function Franchise() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    investment_range: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.FranchiseInquiry.create(form);
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero */}
      <div className="py-24 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-4 block">
            Invest in the Night
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F2F2F2] mb-6">
            Own a <span className="text-gold">Jejori</span> Experience
          </h1>
          <p className="text-[#F2F2F2]/50 font-sans text-lg max-w-2xl mx-auto">
            Join a brand that turns every night into an event. Jejori is more than a restaurant — it's a lifestyle franchise built for the future of dining.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[#D4AF37]/15 rounded-lg p-6 text-center hover:border-gold/40 transition-all duration-500"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="font-serif text-3xl font-bold text-gold mb-1">{stat.value}</p>
              <p className="text-[#F2F2F2]/40 text-xs font-sans tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why It Works */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
            Why Jejori Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-4 px-5 border border-[#D4AF37]/10 rounded-lg"
              >
                <div className="w-2 h-2 rotate-45 bg-gold shrink-0" />
                <span className="text-[#F2F2F2]/70 font-sans text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-2xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#D4AF37]/15 rounded-lg p-8 md:p-12 bg-walnut/10"
        >
          <h3 className="font-serif text-2xl font-bold text-gold mb-2 text-center">
            Start the Conversation
          </h3>
          <p className="text-[#F2F2F2]/40 text-sm font-sans text-center mb-8">
            Tell us about yourself — we'll reach out with details
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h4 className="font-serif text-xl text-[#F2F2F2] mb-2">Thank You</h4>
              <p className="text-[#F2F2F2]/50 font-sans text-sm">
                Our franchise team will contact you within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  required
                  className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
                />
                <Input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
                />
                <Input
                  placeholder="City / Region"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
                />
              </div>
              <Select onValueChange={(val) => setForm({ ...form, investment_range: val })}>
                <SelectTrigger className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2]">
                  <SelectValue placeholder="Investment Range" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/15">
                  <SelectItem value="under_100k">Under R$ 100K</SelectItem>
                  <SelectItem value="100k_250k">R$ 100K – 250K</SelectItem>
                  <SelectItem value="250k_500k">R$ 250K – 500K</SelectItem>
                  <SelectItem value="above_500k">Above R$ 500K</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us about your background or vision"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gold text-[#0B0B0B] py-3 font-sans font-semibold tracking-widest uppercase rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                Submit Inquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}