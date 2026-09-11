"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { assets, CHECKOUT_URLS } from "@/config/assets";
import { Check, X } from "lucide-react";

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const starterBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) setIsModalOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsModalOpen(false);
  };

  return (
    <section id="planos" className="py-10 md:py-16 bg-[#000000] border-b border-[var(--color-dark-border)] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[60%] bg-[var(--color-brand-orange)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-2">
            Escolha o seu plano
          </h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
            Comece pelo pack reduzido ou leve a biblioteca completa com curso, ferramentas e bônus.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.1} className="w-full md:w-1/2 flex">
            <div className="bg-[var(--color-dark-charcoal)] border-2 border-[var(--color-brand-orange)] rounded-2xl p-6 relative shadow-[0_0_50px_rgba(255,107,0,0.25)] flex flex-col w-full transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-brand-orange)] text-white text-[10px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg">
                🏆 O MAIS COMPLETO
              </div>

              <div className="text-center mt-2 mb-4">
                <span className="text-xs text-[var(--color-brand-orange)] font-bold uppercase tracking-widest">PACK 360 PRO</span>
              </div>

              <div className="w-full relative mb-6 flex justify-center items-center h-48 sm:h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assets.hero.image} alt="Pack 360 Pro" className="w-full max-w-[330px] h-full object-contain mx-auto drop-shadow-2xl rounded-xl" />
              </div>

              <div className="mb-6 border-b border-[var(--color-dark-border)] pb-4 text-center">
                <span className="text-4xl font-black text-white drop-shadow-md">R$ {siteConfig.plans.pro.price}</span>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-medium">ou {siteConfig.plans.pro.installments}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6 text-sm font-medium">
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> <b>Biblioteca com +550 artes 360°</b></li>
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> <b>Organização por temas e categorias</b></li>
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> <b>Curso 360 do Zero — LightBurn + LaserGRBL</b></li>
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> <b>Planilha de Precificação 360</b></li>
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> <b>Guia Rápido de Vendas</b></li>
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> <b>Coleções bônus</b></li>
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-brand-emerald)] mr-2 flex-shrink-0 mt-0.5" /> Acesso digital e pagamento único</li>
                </ul>
              </div>

              <div className="mt-auto">
                <Button asChild size="lg" className="w-full text-sm sm:text-base h-14 bg-[var(--color-brand-emerald)] hover:bg-[var(--color-brand-emerald)]/90 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  <a href={CHECKOUT_URLS.pro}>QUERO O PACK 360 PRO COMPLETO</a>
                </Button>
                <p className="text-center text-[10px] text-[var(--color-text-secondary)] mt-3 mb-4">Pagamento único · Acesso digital</p>

                <div className="pt-4 border-t border-[var(--color-dark-border)] flex flex-col items-center gap-3">
                  <p className="text-[10px] text-[var(--color-text-secondary)] text-center">Configure os links do checkout antes de publicar.</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.plans.paymentMethods} alt="Formas de pagamento" className="w-full max-w-[280px] h-auto object-contain opacity-80" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assets.plans.security} alt="Compra Segura" className="w-full max-w-[280px] h-auto object-contain opacity-80" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="w-full md:w-1/2 flex">
            <div className="bg-[var(--color-dark-graphite)] border border-[var(--color-dark-border)] rounded-2xl p-6 flex flex-col w-full opacity-80 mt-4 md:mt-0">
              <h3 className="text-lg font-bold text-white mb-1">{siteConfig.plans.starter.name}</h3>
              <div className="mb-4 border-b border-[var(--color-dark-border)] pb-4">
                <span className="text-2xl font-bold text-white">R$ {siteConfig.plans.starter.price}</span>
                <p className="text-[10px] text-[var(--color-text-secondary)] mt-1">pagamento único</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-start text-white"><Check className="w-4 h-4 text-[var(--color-text-secondary)] mr-2 flex-shrink-0 mt-0.5" /> Pack reduzido</li>
                  <li className="flex items-start text-[var(--color-text-secondary)]"><X className="w-4 h-4 text-[var(--color-dark-border)] mr-2 flex-shrink-0 mt-0.5" /> Sem biblioteca completa de +550 artes</li>
                  <li className="flex items-start text-[var(--color-text-secondary)]"><X className="w-4 h-4 text-[var(--color-dark-border)] mr-2 flex-shrink-0 mt-0.5" /> Sem Curso 360 do Zero</li>
                  <li className="flex items-start text-[var(--color-text-secondary)]"><X className="w-4 h-4 text-[var(--color-dark-border)] mr-2 flex-shrink-0 mt-0.5" /> Sem Planilha e Guia</li>
                  <li className="flex items-start text-[var(--color-text-secondary)]"><X className="w-4 h-4 text-[var(--color-dark-border)] mr-2 flex-shrink-0 mt-0.5" /> Sem coleções bônus</li>
                </ul>
              </div>

              <Button ref={starterBtnRef} variant="outline" size="lg" className="w-full mt-auto text-sm h-12 md:h-14" onClick={() => setIsModalOpen(true)}>
                COMEÇAR PELO STARTER
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={handleBackdropClick} role="dialog" aria-modal="true">
          <div ref={modalRef} tabIndex={-1} className="bg-[#fafafa] w-full max-w-lg rounded-2xl border-2 border-[var(--color-brand-orange)] shadow-2xl relative overflow-hidden focus:outline-none flex flex-col max-h-[90vh]">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors z-10" onClick={() => setIsModalOpen(false)} aria-label="Fechar">
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-center mb-5">
                <span className="inline-block bg-[var(--color-brand-orange)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  COMPARE ANTES DE FICAR SÓ COM O BÁSICO
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">
                  POR APENAS R$ 17 A MAIS, VOCÊ LEVA O PRO COMPLETO
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  O Starter é a porta de entrada. O Pro libera a biblioteca completa, curso, ferramentas e bônus.
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 text-sm font-semibold text-gray-700">
                <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" /> Biblioteca com +550 artes 360°</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" /> Curso LightBurn + LaserGRBL</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" /> Planilha de Precificação</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" /> Guia de Vendas</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" /> Coleções bônus</li>
              </ul>

              <div className="flex flex-col space-y-3">
                <Button asChild size="lg" className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg text-sm sm:text-base">
                  <a href={CHECKOUT_URLS.pro}>SIM, QUERO O PRO POR R$ {siteConfig.plans.pro.price}</a>
                </Button>
                <Button asChild variant="outline" className="w-full text-xs sm:text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100 h-10 border-transparent bg-transparent">
                  <a href={CHECKOUT_URLS.starter}>NÃO, QUERO APENAS O STARTER POR R$ {siteConfig.plans.starter.price}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
