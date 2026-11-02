"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { CHECKOUT_URLS } from "@/config/assets";
import { Check, X } from "lucide-react";

export function StarterPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="w-full md:w-1/2 flex">
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

          <Button variant="outline" size="lg" className="w-full mt-auto text-sm h-12 md:h-14" onClick={() => setIsModalOpen(true)}>
            COMEÇAR PELO STARTER
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm popup-backdrop" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)} role="dialog" aria-modal="true">
          <div ref={modalRef} tabIndex={-1} className="bg-[#fafafa] w-full max-w-lg rounded-2xl border-2 border-[var(--color-brand-orange)] shadow-2xl relative overflow-hidden focus:outline-none flex flex-col max-h-[90vh] popup-panel">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors z-10" onClick={() => setIsModalOpen(false)} aria-label="Fechar">
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-center mb-5">
                <span className="inline-block bg-[var(--color-brand-orange)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">COMPARE ANTES DE FICAR SÓ COM O BÁSICO</span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">POR APENAS R$ 17 A MAIS, VOCÊ LEVA O PRO COMPLETO</h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">O Starter é a porta de entrada. O Pro libera a biblioteca completa, curso, ferramentas e bônus.</p>
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
    </>
  );
}
