"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Camera, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { emoji: "🍔", title: "Signature Burgers", desc: "Gourmet creations" },
  { emoji: "🍕", title: "Artisanal Pizza", desc: "Wood-fired perfection" },
  { emoji: "🍜", title: "Korean Ramen", desc: "Authentic flavors" },
  { emoji: "☕", title: "Coffee Frio", desc: "Signature beverages" },
  { emoji: "🧇", title: "Waffles", desc: "Sweet indulgence" },
  { emoji: "🍗", title: "Wings & Starters", desc: "Crispy delights" },
  { emoji: "🥟", title: "Momos", desc: "Steamed perfection" },
  { emoji: "🍛", title: "Biryanis", desc: "Aromatic rice" },
  { emoji: "🍝", title: "Pasta", desc: "Italian classics" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".gallery-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.7)",
    });
  }, { scope: sectionRef });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-ivory/60 max-w-2xl mx-auto text-lg"
          >
            A glimpse into the Plan B experience. Every dish is a work of art.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-card group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
              } ${i === 3 ? "md:row-span-2" : ""}`}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-amber/10 to-matte" />

              {/* Emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                  {img.emoji}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-matte via-transparent to-transparent opacity-60" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-sm text-ivory/50">{img.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} className="text-gold" />
                  </div>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/planbrestocafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-gold/10 transition-colors group"
          >
            <Camera size={18} className="text-gold" />
            <span className="text-ivory group-hover:text-gold transition-colors">Follow on Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
