"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#080808" }}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 3 === 0 ? "#F4C542" : i % 3 === 1 ? "#FF8C42" : "#F8F5F0",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 mb-12"
          >
            <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-gold-gradient">Plan</span>
              <span className="text-ivory"> B</span>
            </h1>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-gold via-amber to-gold mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="text-ivory/60 text-sm tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Preparing your experience
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-0.5 bg-ivory/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-amber rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.p
            className="text-gold/80 text-xs mt-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
