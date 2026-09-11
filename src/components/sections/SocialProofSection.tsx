import { FadeIn } from "@/components/ui/FadeIn";
import { InfiniteCarousel } from "@/components/ui/InfiniteCarousel";
import { Button } from "@/components/ui/Button";
import { assets } from "@/config/assets";

export function SocialProofSection() {
  const firstRow = assets.socialProof.whatsapp.slice(0, 3);
  const secondRow = assets.socialProof.whatsapp.slice(3);

  return (
    <section className="py-10 md:py-16 bg-[var(--color-dark-deep)] border-b border-[var(--color-dark-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
            Quem já recebeu o material
          </h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
            Feedbacks reais sobre qualidade das artes, organização do pack e uso na produção.
          </p>
        </FadeIn>
      </div>

      <div className="w-full space-y-4 md:space-y-6 mb-10">
        <InfiniteCarousel items={firstRow} direction="left" speed="normal" />
        <InfiniteCarousel items={secondRow} direction="right" speed="slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-[var(--color-text-primary)] mb-6 font-medium px-4">
            Agora é a sua vez de entrar na biblioteca, escolher as artes e colocar o próximo copo para gravar.
          </p>
          <Button asChild size="xl" className="w-full sm:w-auto px-10">
            <a href="#planos">QUERO ACESSAR O PACK 360 PRO</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
