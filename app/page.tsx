"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SignatureDishes from "./sections/SignatureDishes";
import MenuSection from "./sections/MenuSection";
import GallerySection from "./sections/GallerySection";
import ReviewSection from "./sections/ReviewSection";
import ReservationSection from "./sections/ReservationSection";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && mainRef.current) {
      const ctx = gsap.context(() => {
        ScrollTrigger.refresh();
      }, mainRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <main ref={mainRef} className="relative">
        <Navbar />

        <HeroSection />
        <AboutSection />
        <SignatureDishes />
        <MenuSection />
        <GallerySection />
        <ReviewSection />
        <ReservationSection />

        <Footer />
      </main>
    </>
  );
}
```
