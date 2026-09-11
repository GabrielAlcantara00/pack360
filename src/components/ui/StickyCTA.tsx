"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "./Button";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.35;
      const hideSections = ["planos", "faq", "cta-final"];
      const isOverSection = hideSections.some(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      const isNearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 500;
      setIsVisible(window.scrollY > scrollThreshold && !isOverSection && !isNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-[var(--color-dark-charcoal)] border-t border-[var(--color-brand-orange)]/50 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] px-4 py-3 flex items-center justify-between"
        >
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm uppercase">PACK 360 PRO <span className="text-[10px] font-normal text-[var(--color-text-secondary)]">· pag. único</span></span>
            <span className="text-[var(--color-brand-emerald)] font-black text-lg leading-tight">
              R$ {siteConfig.plans.pro.price} <span className="text-[10px] font-normal text-[var(--color-text-secondary)] ml-1">ou {siteConfig.plans.pro.installments}</span>
            </span>
          </div>
          <Button asChild size="default" className="h-10 text-sm px-4">
            <a href="#planos">VER PLANOS</a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
