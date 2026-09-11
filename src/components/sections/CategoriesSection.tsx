import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { assets } from "@/config/assets";

export function CategoriesSection() {
  const categories = [
    { title: "Torcidas", desc: "Paixão e identidade", img: assets.previews[0] },
    { title: "Geek", desc: "Cultura pop e presentes", img: assets.previews[1] },
    { title: "Música", desc: "Artistas e referências", img: assets.previews[2] },
    { title: "Símbolos", desc: "Estilos e nichos específicos", img: assets.previews[3] },
    { title: "Frases", desc: "Humor e presentes", img: assets.previews[4] },
    { title: "Signos", desc: "Astrologia e personalização", img: assets.previews[5] },
  ];

  return (
    <section className="py-10 md:py-16 bg-[var(--color-dark-charcoal)] border-b border-[var(--color-dark-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
            Personalize para públicos diferentes sem precisar desenhar tudo do zero
          </h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
            Alguns exemplos do tipo de variedade que a biblioteca permite explorar no mesmo produto base.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
          {categories.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-[var(--color-dark-deep)] border border-[var(--color-dark-border)] rounded-xl overflow-hidden group">
                <div className="aspect-square w-full relative bg-[var(--color-dark-graphite)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute top-2 left-2 bg-[var(--color-brand-orange)] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {item.title}
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="text-[10px] sm:text-xs text-[var(--color-text-secondary)] font-medium">{item.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#planos">VER A BIBLIOTECA 360 COMPLETA</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
