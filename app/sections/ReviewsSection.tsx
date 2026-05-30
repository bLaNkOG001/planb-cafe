"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "The Graveyard Burger is absolutely insane! Three layers of pure bliss. Plan B has become my go-to spot for weekend hangouts. The live music on Fridays is a cherry on top.",
    date: "2 weeks ago",
    platform: "Zomato",
  },
  {
    name: "Priya Reddy",
    rating: 5,
    text: "Best cafe in MVP Colony hands down. The Coffee Frio with Nutella is to die for. Love the ambiance and the staff is super friendly. Perfect for birthday celebrations!",
    date: "1 month ago",
    platform: "Google",
  },
  {
    name: "Arjun Kumar",
    rating: 4,
    text: "Great food at reasonable prices. The Korean Ramen and Chicken Tenders are authentic and delicious. The game nights are super fun. Highly recommend for groups.",
    date: "3 weeks ago",
    platform: "Zomato",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    text: "The waffles here are the best in Vizag! Brownie Waffle is my absolute favorite. The place has such a chill vibe - perfect for both dates and friend groups.",
    date: "2 months ago",
    platform: "Google",
  },
  {
    name: "Vikram Rao",
    rating: 4,
    text: "Amazing variety on the menu. From burgers to biryanis to Korean food - they have it all. The Texas Burger is a must-try. Delivery is quick too.",
    date: "1 week ago",
    platform: "Zomato",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6"
          >
            What People Say
          </motion.h2>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-ivory/60">4.0 on Zomato</span>
            <span className="w-1 h-1 rounded-full bg-ivory/30" />
            <span className="text-ivory/60">500+ Reviews</span>
          </motion.div>
        </div>

        {/* Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <Quote size={40} className="text-gold/20 mb-6" />

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed mb-8 font-light">
                "{reviews[activeIndex].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-ivory text-lg">
                    {reviews[activeIndex].name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <span className="text-xs text-ivory/40">
                      {reviews[activeIndex].date} • {reviews[activeIndex].platform}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft size={20} className="text-ivory" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-gold w-6"
                      : "bg-ivory/20 hover:bg-ivory/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
            >
              <ChevronRight size={20} className="text-ivory" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
