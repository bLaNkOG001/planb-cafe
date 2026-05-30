"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Phone, Heart } from "lucide-react";

const footerLinks = {
  menu: [
    { label: "Plan B Signatures", href: "#menu" },
    { label: "Burgers", href: "#menu" },
    { label: "Pizza", href: "#menu" },
    { label: "Korean Specials", href: "#menu" },
    { label: "Beverages", href: "#menu" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Reserve Table", href: "#reserve" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cancellation Policy", href: "#" },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 px-6" style={{ background: "#0a0a0a" }}>
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-black mb-4">
              <span className="text-gold-gradient">Plan</span>
              <span className="text-ivory"> B</span>
            </h3>
            <p className="text-ivory/50 text-sm leading-relaxed mb-6 max-w-sm">
              Your ultimate destination for gourmet dining in Visakhapatnam. 
              Premium burgers, artisanal pizzas, and unforgettable experiences.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/planbrestocafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
              >
                <Instagram size={18} className="text-ivory/60" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
              >
                <Facebook size={18} className="text-ivory/60" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-6">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-ivory/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-ivory/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-ivory/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ivory/30 text-sm flex items-center gap-1">
              Made with <Heart size={12} className="text-red-400 fill-red-400" /> in Visakhapatnam
            </p>
            <p className="text-ivory/30 text-sm">
              &copy; {new Date().getFullYear()} Plan B Resto Cafe. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-ivory/30 text-sm">
              <MapPin size={12} />
              <span>MVP Colony, Vizag</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
