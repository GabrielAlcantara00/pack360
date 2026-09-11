import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { assets } from "@/config/assets";

export function MarketProofSection() {
  const examples = [
    { title: "Torcidas & esportes", img: assets.previews[0], tag: "mesmo produto, nova identidade" },
    { title: "Geek & cultura pop", img: assets.previews[1], tag: "temas com forte apelo visual" },
    { title: "Música & referências", img: assets.previews[2], tag: "personalização por interesse" },
    { title: "Símbolos & estilos", img: assets.previews[3], tag: "nichos específicos e presentes" },
  ];

  return (
    <section className="py-10 md:py-16 bg-[var(--color-dark-deep)] border-b border-[var(--color-dark-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
              Um único copo pode virar várias ofertas diferentes
            </h2>
            <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
              O valor percebido muda quando a personalização conversa com a identidade, o gosto ou a ocasião do cliente.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8">
          {examples.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-[var(--color-dark-charcoal)] border border-[var(--color-dark-border)] rounded-xl overflow-hidden h-full flex flex-col">
                <div className="aspect-square w-full relative bg-[var(--color-dark-graphite)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-3 md:p-4 flex-grow flex flex-col justify-between">
                  <div className="text-[10px] md:text-xs font-bold text-[var(--color-brand-orange)] uppercase mb-1">
                    {item.title}
                  </div>
                  <div className="text-[10px] md:text-xs text-[var(--color-text-secondary)] border-t border-[var(--color-dark-border)] pt-2 mt-2">
                    {item.tag}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <div className="bg-[var(--color-dark-graphite)] border border-[var(--color-brand-orange)]/50 rounded-xl p-4 md:p-6 text-center shadow-lg">
            <h3 className="text-sm md:text-base font-bold text-white mb-1">A lógica do Pack 360</h3>
            <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">
              Você não precisa redesenhar cada ideia do zero. <strong className="text-[var(--color-brand-emerald)]">Escolhe o tema, encontra a arte na biblioteca, ajusta para o seu copo e grava.</strong>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
