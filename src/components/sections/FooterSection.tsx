import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Zap, Repeat } from "lucide-react";

interface FooterSectionProps { priceOverride?: string; }

export function FooterSection({ priceOverride }: FooterSectionProps = {}) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section id="cta-final" className="py-12 md:py-16 bg-[var(--color-dark-charcoal)] relative border-b border-[var(--color-dark-border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
              Você já tem o laser.<br />
              <span className="text-[var(--color-brand-orange)]">Agora tenha a biblioteca de artes.</span>
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-8">
              Biblioteca 360° organizada, curso prático, planilha e guia para transformar o próximo pedido em um processo mais simples.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex justify-center mb-4">
              <span className="text-3xl font-black text-white">R$ {priceOverride || siteConfig.plans.pro.price}</span>
            </div>
            <Button asChild size="xl" className="w-full sm:w-auto px-10 h-14 md:h-16 text-base md:text-lg">
              <a href="#planos">ACESSAR O PACK 360 PRO COMPLETO</a>
            </Button>
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center text-[10px] md:text-xs text-[var(--color-text-secondary)]"><ShieldCheck className="w-3 h-3 text-[var(--color-brand-emerald)] mr-1" /> Compra segura</div>
              <div className="flex items-center text-[10px] md:text-xs text-[var(--color-text-secondary)]"><Zap className="w-3 h-3 text-[var(--color-brand-orange)] mr-1" /> Acesso digital</div>
              <div className="flex items-center text-[10px] md:text-xs text-[var(--color-text-secondary)]"><Repeat className="w-3 h-3 text-[var(--color-brand-emerald)] mr-1" /> Sem mensalidade</div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-[var(--color-dark-deep)] py-8 text-[var(--color-text-secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            <h2 className="text-white font-display font-black text-lg">{siteConfig.name}</h2>
          </div>
          <div className="text-[9px] md:text-[10px] leading-relaxed text-[var(--color-dark-border)] text-center max-w-3xl mx-auto space-y-2">
            <p>Produto digital. Resultados comerciais variam conforme equipamento, execução, preço, mercado e divulgação.</p>
            <p className="pt-2">© {currentYear} {siteConfig.name} · Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
