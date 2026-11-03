import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const marketplaceExamples = [
  {
    src: "/laserpro/marketplace/mercado-vasco.webp",
    alt: "Anúncio de copo caneca inox 360 personalizado com tema de futebol em marketplace",
  },
  {
    src: "/laserpro/marketplace/mercado-flamengo.webp",
    alt: "Anúncio de copo térmico inox personalizado 360 com tema de futebol em marketplace",
  },
  {
    src: "/laserpro/marketplace/mercado-mario.webp",
    alt: "Anúncio de copo térmico com gravação 360 em marketplace",
  },
  {
    src: "/laserpro/marketplace/mercado-death-note.webp",
    alt: "Anúncio de copo térmico personalizado 360 com tema de anime em marketplace",
  },
];

export function MarketProofSection() {
  return (
    <section className="py-12 md:py-20 bg-black border-b border-[var(--color-dark-border)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center rounded-full border border-[var(--color-brand-orange)]/60 bg-[var(--color-brand-orange)]/10 px-4 py-1.5 mb-5">
            <span className="text-[10px] md:text-xs font-display font-black uppercase tracking-[0.14em] text-[var(--color-brand-orange)]">
              O mercado já existe
            </span>
          </div>

          <h2 className="text-[30px] sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-[1.02]">
            Olha o que já aparece à venda na{" "}
            <span className="text-[var(--color-brand-orange)]">Shopee e no Mercado Livre</span>
          </h2>

          <p className="mt-5 text-sm md:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Não é preciso imaginar o produto. Veja exemplos reais de anúncios de copos personalizados em 360° que já aparecem nos marketplaces.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {marketplaceExamples.map((item) => (
            <FadeIn key={item.src} className="h-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), 50vw"
                  quality={78}
                  className="object-contain"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-6 md:mt-8 text-center max-w-3xl mx-auto">
          <p className="text-[10px] md:text-xs leading-relaxed text-white/45">
            Imagens de anúncios de terceiros. Preços e disponibilidade são definidos pelos respectivos vendedores; os exemplos não representam vendas ou resultados garantidos do Pack 360 Pro.
          </p>

          <div className="mt-6">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto px-9 shadow-lg shadow-[var(--color-brand-orange)]/15">
              <a href="#planos">VER ARTES PARA PRODUZIR</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
