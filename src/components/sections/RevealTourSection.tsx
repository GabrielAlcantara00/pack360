import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { assets } from "@/config/assets";
import { Package, Search, MonitorPlay } from "lucide-react";

export function RevealTourSection() {
  return (
    <section className="py-10 md:py-16 bg-[#000000] relative overflow-hidden border-b border-[var(--color-dark-border)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl h-[50%] bg-[var(--color-brand-orange)]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
            A sua biblioteca 360 começa aqui
          </h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
            Não é um link com arquivos largados em pastas. A proposta é navegar por uma biblioteca organizada e chegar mais rápido à arte certa.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden border border-[var(--color-dark-border)] bg-[var(--color-dark-charcoal)] shadow-xl group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.hero.image} alt="Biblioteca Pack 360 Pro organizada por temas" className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <FadeIn className="w-full md:w-1/2 space-y-3 md:space-y-4">
            <div className="bg-[var(--color-dark-charcoal)] border border-[var(--color-dark-border)] p-4 rounded-xl flex items-center space-x-4">
              <Package className="w-6 h-6 text-[var(--color-brand-orange)] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Organizada por temas</h4>
                <p className="text-xs text-[var(--color-text-secondary)]">Mais fácil de navegar do que um Drive cheio de arquivos soltos.</p>
              </div>
            </div>
            <div className="bg-[var(--color-dark-charcoal)] border border-[var(--color-dark-border)] p-4 rounded-xl flex items-center space-x-4">
              <Search className="w-6 h-6 text-[var(--color-brand-orange)] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Encontre o tema do pedido</h4>
                <p className="text-xs text-[var(--color-text-secondary)]">Escolha a categoria, encontre a arte e leve para o seu software.</p>
              </div>
            </div>
            <div className="bg-[var(--color-dark-charcoal)] border border-[var(--color-dark-border)] p-4 rounded-xl flex items-center space-x-4">
              <MonitorPlay className="w-6 h-6 text-[var(--color-brand-orange)] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Curso para quem está começando</h4>
                <p className="text-xs text-[var(--color-text-secondary)]">LightBurn + LaserGRBL, do arquivo até a preparação da gravação.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="text-center mt-10">
          <Button asChild size="lg" className="w-full sm:w-auto px-10">
            <a href="#planos">QUERO ACESSAR A BIBLIOTECA</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
