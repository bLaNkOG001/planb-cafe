"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Animate floating elements
      gsap.to(".floating-ingredient", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToReserve = () => {
    const el = document.getElementById("reserve");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, rgba(244, 197, 66, 0.15) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Floating Food Ingredients */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { emoji: "🍔", x: "10%", y: "20%", delay: 0 },
          { emoji: "🍕", x: "85%", y: "15%", delay: 0.5 },
          { emoji: "🍟", x: "75%", y: "70%", delay: 1 },
          { emoji: "🥗", x: "15%", y: "75%", delay: 1.5 },
          { emoji: "☕", x: "50%", y: "10%", delay: 2 },
          { emoji: "🍜", x: "90%", y: "50%", delay: 0.8 },
          { emoji: "🧇", x: "5%", y: "50%", delay: 1.2 },
          { emoji: "🍗", x: "60%", y: "80%", delay: 1.8 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="floating-ingredient absolute text-4xl md:text-5xl opacity-20"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: item.delay + 0.5, duration: 1 }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(244, 197, 66, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 197, 66, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-gold/80">
            MVP Colony, Visakhapatnam
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
        >
          <span className="text-gold-gradient">Plan</span>
          <span className="text-ivory"> B</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-display text-xl md:text-2xl text-ivory/80 tracking-wide mb-4"
        >
          Resto Cafe
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-ivory/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Where Flavor Meets Experience
        </motion.p>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center justify-center gap-6 text-ivory/50 text-sm mb-12"
        >
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" />
            1-90-15, MVP Sector 5, Vizag
          </span>
          <span className="w-1 h-1 rounded-full bg-ivory/30" />
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-gold" />
            072079 12121
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToMenu}
            className="btn-premium px-8 py-4 bg-gradient-to-r from-gold to-amber text-matte font-semibold rounded-full hover:shadow-[0_0_40px_rgba(244,197,66,0.3)] transition-all duration-300 hover:scale-105"
          >
            Explore Menu
          </button>
          <button
            onClick={scrollToReserve}
            className="btn-premium px-8 py-4 border border-gold/50 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 hover:scale-105"
          >
            Reserve Table
          </button>
        </motion.div>

        {/* Hours Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-ivory/60">Open Now • 11:00 AM - 11:00 PM</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-ivory/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
