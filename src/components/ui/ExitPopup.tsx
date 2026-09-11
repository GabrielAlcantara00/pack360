"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "./Button";
import { Check, X } from "lucide-react";

export function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[var(--color-dark-deep)] border border-[var(--color-dark-border)] rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-[var(--color-text-secondary)] hover:text-white transition-colors" aria-label="Fechar">
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-[var(--color-text-secondary)] mb-2">Ainda não quer o Pack completo?</h4>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
              Comece com o Starter por <span className="text-[var(--color-brand-orange)]">R$ {siteConfig.plans.starter.price}</span>
            </h2>
          </div>

          <p className="text-center text-[var(--color-text-secondary)] mb-6">
            O Starter entrega um pack reduzido. O Pro libera a biblioteca completa com curso, ferramentas e bônus.
          </p>

          <div className="bg-[var(--color-dark-charcoal)] border border-[var(--color-dark-border)] rounded-xl p-4 mb-6">
            <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
              <div className="font-bold text-[var(--color-text-secondary)]"></div>
              <div className="font-bold text-center text-white border-b border-[var(--color-dark-border)] pb-2">Starter — R$ {siteConfig.plans.starter.price}</div>
              <div className="font-bold text-center text-[var(--color-brand-orange)] border-b border-[var(--color-brand-orange)]/50 pb-2">Pro — R$ {siteConfig.plans.pro.price}</div>

              <div className="py-2 text-[var(--color-text-secondary)]">Biblioteca</div>
              <div className="py-2 text-center text-white">Reduzida</div>
              <div className="py-2 text-center text-white font-bold">+550 artes</div>

              <div className="py-2 text-[var(--color-text-secondary)]">Curso + ferramentas</div>
              <div className="py-2 flex justify-center"><X className="w-4 h-4 text-red-500" /></div>
              <div className="py-2 flex justify-center"><Check className="w-4 h-4 text-[var(--color-brand-emerald)]" /></div>

              <div className="py-2 text-[var(--color-text-secondary)]">Coleções bônus</div>
              <div className="py-2 flex justify-center"><X className="w-4 h-4 text-red-500" /></div>
              <div className="py-2 flex justify-center"><Check className="w-4 h-4 text-[var(--color-brand-emerald)]" /></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center">
            <Button asChild size="lg" className="w-full">
              <a href="#planos" onClick={() => setIsOpen(false)}>VER OS PLANOS</a>
            </Button>
            <button onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors underline underline-offset-4">
              Prefiro continuar navegando
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
