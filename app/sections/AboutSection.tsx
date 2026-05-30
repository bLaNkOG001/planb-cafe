"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Utensils, Music, Gamepad2, Cake, Coffee, Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Utensils, label: "Gourmet Cuisine", desc: "Premium ingredients" },
  { icon: Music, label: "Live Music", desc: "Weekend performances" },
  { icon: Gamepad2, label: "Game Nights", desc: "Fun & entertainment" },
  { icon: Cake, label: "Birthday Parties", desc: "Custom celebrations" },
  { icon: Coffee, label: "Coffee Frio", desc: "Signature beverages" },
  { icon: Flame, label: "Live Kitchen", desc: "Fresh preparation" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".about-text-line", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
            >
              Our Story
            </motion.span>

            <h2 className="about-text-line font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-8 leading-tight">
              Where Every Meal
              <br />
              <span className="text-gold-gradient">is Plan A</span>
            </h2>

            <div className="space-y-6 text-ivory/70 text-lg leading-relaxed">
              <p className="about-text-line">
                Welcome to Plan B Resto Cafe, your ultimate destination for
                mouth-watering burgers, authentic pizzas, and delightful
                continental cuisine in the heart of Visakhapatnam.
              </p>
              <p className="about-text-line">
                Located in MVP Sector 5, we offer a chill and relaxed atmosphere
                perfect for casual dining, live music evenings, fun games, and
                memorable birthday celebrations.
              </p>
              <p className="about-text-line">
                Whether you are craving a loaded cheese burger, a spicy dragon
                chicken, or a comforting bowl of ramen, Plan B has something
                special for everyone.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-gold">100+</span>
                <p className="text-xs text-ivory/50 mt-1 uppercase tracking-wider">Menu Items</p>
              </div>
              <div className="w-px h-12 bg-ivory/10" />
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-gold">4.0</span>
                <p className="text-xs text-ivory/50 mt-1 uppercase tracking-wider">Zomato Rating</p>
              </div>
              <div className="w-px h-12 bg-ivory/10" />
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-gold">₹250</span>
                <p className="text-xs text-ivory/50 mt-1 uppercase tracking-wider">For Two</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Features Grid */}
          <div className="features-grid grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card glass rounded-2xl p-6 hover-lift group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-ivory mb-1">{feature.label}</h3>
                <p className="text-sm text-ivory/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
