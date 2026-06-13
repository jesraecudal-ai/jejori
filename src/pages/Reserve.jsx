import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, CheckCircle, MapPin, Clock, Users } from "lucide-react";

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM", "11:00 PM",
];

export default function Reserve() {
  const [form, setForm] = useState({
    guest_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    party_size: "",
    location: "",
    special_requests: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Reservation.create({
      ...form,
      party_size: parseInt(form.party_size),
    });
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Reservation submitted! We'll confirm shortly.");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      <div className="py-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-4 block">
            Your Table Awaits
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F2F2F2] mb-4">
            Reserve a <span className="text-gold">Table</span>
          </h1>
          <p className="text-[#F2F2F2]/50 font-sans text-lg">
            Secure your seat for an unforgettable night
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-ember" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 bg-ember" />
          </div>
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-[#D4AF37]/15 rounded-lg p-8 md:p-12 bg-walnut/10"
        >
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-[#F2F2F2] mb-2">Reservation Received</h3>
              <p className="text-[#F2F2F2]/50 font-sans text-sm mb-6">
                We'll send a confirmation to your email shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ guest_name: "", email: "", phone: "", date: "", time: "", party_size: "", location: "", special_requests: "" }); }}
                className="text-gold font-sans text-sm hover:underline"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={form.guest_name}
                  onChange={(e) => setForm({ ...form, guest_name: e.target.value })}
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

              <Input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                    className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] focus:border-gold"
                  />
                </div>
                <Select onValueChange={(val) => setForm({ ...form, time: val })} required>
                  <SelectTrigger className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2]">
                    <SelectValue placeholder="Select Time *" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/15">
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select onValueChange={(val) => setForm({ ...form, party_size: val })} required>
                  <SelectTrigger className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2]">
                    <SelectValue placeholder="Party Size *" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/15">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={(val) => setForm({ ...form, location: val })} required>
                  <SelectTrigger className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2]">
                    <SelectValue placeholder="Location *" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/15">
                    <SelectItem value="centro_gravatai">Centro Gravataí</SelectItem>
                    <SelectItem value="cidade_baixa">Cidade Baixa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Special requests (optional)"
                value={form.special_requests}
                onChange={(e) => setForm({ ...form, special_requests: e.target.value })}
                rows={3}
                className="bg-[#0B0B0B] border-[#D4AF37]/15 text-[#F2F2F2] placeholder:text-[#F2F2F2]/30 focus:border-gold"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gold text-[#0B0B0B] py-3.5 font-sans font-semibold tracking-widest uppercase rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                Confirm Reservation
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}