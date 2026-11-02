import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { assets, CHECKOUT_URLS } from "@/config/assets";
import { Check } from "lucide-react";
import { StarterPlan } from "@/components/ui/StarterPlan";

export function PricingSection() {
  return (
    <section id="planos" className="py-10 md:py-16 bg-[#000000] border-b border-[var(--color-dark-border)] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[60%] bg-[var(--color-brand-orange)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-2">Escolha o seu plano</h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">Comece pelo pack reduzido ou leve a biblioteca completa com curso, ferramentas e bônus.</p>
        </FadeIn>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
          <FadeIn delay={0.1} className="w-full md:w-1/2 flex">
            <div className="bg-[var(--color-dark-charcoal)] border-2 border-[var(--color-brand-orange)] rounded-2xl p-6 relative shadow-[0_0_50px_rgba(255,107,0,0.25)] flex flex-col w-full transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-brand-orange)] text-white text-[10px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg">🏆 O MAIS COMPLETO</div>

              <div className="text-center mt-2 mb-4">
                <span className="text-xs text-[var(--color-brand-orange)] font-bold uppercase tracking-widest">PACK 360 PRO</span>
              </div>

              <div className="w-full relative mb-6 flex justify-center items-center h-48 sm:h-56">
                <Image
                  src={assets.hero.image}
                  alt="Pack 360 Pro"
                  width={640}
                  height={480}
                  sizes="(max-width: 768px) 85vw, 330px"
                  quality={72}
                  className="w-full max-w-[330px] h-full object-contain mx-auto drop-shadow-2xl rounded-xl"
                />
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
                  <Image src={assets.plans.paymentMethods} alt="Formas de pagamento" width={572} height={47} sizes="280px" quality={75} className="w-full max-w-[280px] h-auto object-contain opacity-80" />
                  <Image src={assets.plans.security} alt="Compra Segura" width={1024} height={147} sizes="280px" quality={75} className="w-full max-w-[280px] h-auto object-contain opacity-80" />
                </div>
              </div>
            </div>
          </FadeIn>

          <StarterPlan />
        </div>
      </div>
    </section>
  );
}
