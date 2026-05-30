"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Users, Phone, Mail, Check, PartyPopper } from "lucide-react";

export default function ReservationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const occasions = ["Casual Dining", "Birthday", "Anniversary", "Date Night", "Group Party", "Corporate"];

  return (
    <section
      id="reserve"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
            >
              Book Your Table
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-ivory mb-6"
            >
              Reserve Your
              <br />
              <span className="text-gold-gradient">Experience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-ivory/60 text-lg mb-10 leading-relaxed"
            >
              Plan your visit to Plan B Resto Cafe. Whether it's a casual dinner,
              birthday celebration, or corporate event - we've got you covered.
            </motion.p>

            {/* Quick Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Clock, label: "Open Hours", value: "11:00 AM - 11:00 PM" },
                { icon: Phone, label: "Call Us", value: "072079 12121" },
                { icon: PartyPopper, label: "Events", value: "Live Music, Game Nights, Parties" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-ivory/40 uppercase tracking-wider">{item.label}</p>
                    <p className="text-ivory font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ivory mb-2">Reservation Requested!</h3>
                <p className="text-ivory/60">
                  We'll call you shortly at {formData.phone} to confirm your booking.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/50"
                      placeholder="072079 12121"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Date</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/40" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory focus:outline-none focus:border-gold/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Time</label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/40" />
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory focus:outline-none focus:border-gold/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Guests</label>
                    <div className="relative">
                      <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/40" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory focus:outline-none focus:border-gold/50 appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Occasion</label>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        type="button"
                        onClick={() => setFormData({ ...formData, occasion: occ })}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          formData.occasion === occ
                            ? "bg-gold text-matte font-medium"
                            : "bg-ivory/5 text-ivory/60 hover:bg-ivory/10"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-ivory/40 uppercase tracking-wider mb-2 block">Special Requests</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-matte border border-ivory/10 rounded-xl text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/50 resize-none"
                    placeholder="Any dietary restrictions or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-gold to-amber text-matte font-bold rounded-xl hover:shadow-[0_0_40px_rgba(244,197,66,0.3)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Request Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
