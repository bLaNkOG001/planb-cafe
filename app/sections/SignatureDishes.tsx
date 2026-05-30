"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const signatureDishes = [
  {
    name: "Graveyard Burger",
    category: "Plan B Signatures",
    price: "₹260",
    description: "Triple-layered monster burger with premium patties, melted cheese, and secret sauce",
    rating: 4.8,
    veg: false,
    emoji: "🍔",
  },
  {
    name: "Texas Burger",
    category: "Plan B Signatures",
    price: "₹300",
    description: "Smoky BBQ flavor with crispy onion rings and cheddar cheese",
    rating: 4.7,
    veg: false,
    emoji: "🍔",
  },
  {
    name: "Indiana Burger",
    category: "Plan B Signatures",
    price: "₹270",
    description: "Classic American style with fresh lettuce, tomato, and special mayo",
    rating: 4.6,
    veg: false,
    emoji: "🍔",
  },
  {
    name: "Big Daddy's Burger",
    category: "Plan B Signatures",
    price: "₹260",
    description: "Double patty feast with caramelized onions and double cheese",
    rating: 4.9,
    veg: false,
    emoji: "🍔",
  },
  {
    name: "Atlantic Burger",
    category: "Plan B Signatures",
    price: "₹200",
    description: "Seafood-inspired with crispy fish fillet and tartar sauce",
    rating: 4.5,
    veg: false,
    emoji: "🐟",
  },
  {
    name: "Tower Burger",
    category: "Plan B Signatures",
    price: "₹200",
    description: "Stacked high with multiple layers of flavor and texture",
    rating: 4.7,
    veg: true,
    emoji: "🍔",
  },
  {
    name: "Spicy Triple Tango Pizza",
    category: "Pizza",
    price: "₹240",
    description: "Triple cheese blend with spicy peri-peri chicken and jalapeños",
    rating: 4.8,
    veg: false,
    emoji: "🍕",
  },
  {
    name: "Nutella Coffee Frio",
    category: "Beverages",
    price: "₹190",
    description: "Rich Nutella blended with premium coffee and whipped cream",
    rating: 4.9,
    veg: true,
    emoji: "☕",
  },
];

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".dish-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section
      id="signatures"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
          >
            Chef's Selection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6"
          >
            Signature Dishes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-ivory/60 max-w-2xl mx-auto text-lg"
          >
            Handpicked favorites that define the Plan B experience. Each dish is crafted with passion and premium ingredients.
          </motion.p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((dish, i) => (
            <motion.div
              key={i}
              className="dish-card group relative glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Card Header with Emoji */}
              <div className="relative h-48 bg-gradient-to-b from-gold/10 to-transparent flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {dish.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-matte/80 to-transparent" />

                {/* Veg/Non-veg badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      dish.veg
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {dish.veg ? "Veg" : "Non-Veg"}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gold/80 uppercase tracking-wider">
                    {dish.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-gold fill-gold" />
                    <span className="text-xs text-ivory/70">{dish.rating}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-ivory mb-2 group-hover:text-gold transition-colors">
                  {dish.name}
                </h3>

                <p className="text-sm text-ivory/50 mb-4 line-clamp-2">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gold">{dish.price}</span>
                  <button className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <ArrowUpRight size={14} className="text-gold" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
