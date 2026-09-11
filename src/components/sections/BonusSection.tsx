import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { assets } from "@/config/assets";

export function BonusSection() {
  const bonuses = [
    { title: "CULTURA POP & GEEK", desc: "Mais opções para presentes, fãs e temas de forte apelo visual.", img: assets.bonus[0] },
    { title: "PETS & ANIMAIS", desc: "Artes para quem quer personalizar por raça, paixão e estilo.", img: assets.bonus[1] },
    { title: "SÉRIES & ENTRETENIMENTO", desc: "Mais variedade para atender pedidos ligados a fandoms e referências populares.", img: assets.bonus[2] },
  ];

  return (
    <section className="py-10 md:py-16 bg-[var(--color-dark-deep)] border-b border-[var(--color-dark-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-[var(--color-brand-orange)] uppercase tracking-tight mb-4">
            Bônus inclusos no PRO
          </h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
            Coleções extras para ampliar ainda mais a variedade da sua vitrine de copos personalizados.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-6">
          {bonuses.map((bonus, i) => (
            <StaggerItem key={i}>
              <div className="bg-[var(--color-dark-charcoal)] border border-[var(--color-dark-border)] rounded-xl overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] w-full relative bg-[var(--color-dark-graphite)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-3 flex flex-col flex-grow text-center">
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">{bonus.title}</h3>
                  <p className="text-[10px] sm:text-xs text-[var(--color-text-secondary)]">{bonus.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center">
          <div className="inline-block bg-[var(--color-dark-graphite)] text-[var(--color-text-secondary)] text-xs md:text-sm px-4 py-2 rounded-full border border-[var(--color-dark-border)] shadow-md font-medium">
            Biblioteca principal + <strong className="text-white">coleções extras</strong> no plano completo.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
