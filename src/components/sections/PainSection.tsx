import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { X } from "lucide-react";

export function PainSection() {
  const painPoints = [
    "Você recebe um pedido e perde tempo procurando uma arte que combine.",
    "Tem arquivos espalhados em pastas e drives, mas não encontra rápido o que precisa.",
    "Cada novo tema vira uma nova busca, download e retrabalho antes de gravar.",
    "O cliente quer opções, mas você acaba mostrando sempre os mesmos modelos.",
    "Outros personalizadores parecem ter um catálogo maior mesmo usando máquinas parecidas.",
  ];

  return (
    <section className="py-10 md:py-16 bg-[#000000] border-b border-[var(--color-dark-border)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-[var(--color-brand-orange)] shadow-[0_0_20px_var(--color-brand-orange)] rounded-b-md" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase text-white mb-8 tracking-tight">
            Seu laser pode estar pronto. O que trava é não ter a arte certa na hora do pedido.
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-3 md:space-y-4 text-left max-w-2xl mx-auto mb-12">
          {painPoints.map((point, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center space-x-4 bg-[var(--color-dark-charcoal)] p-4 rounded-xl border border-[var(--color-dark-border)]">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-sm md:text-base font-bold text-[var(--color-text-secondary)]">{point}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="bg-[var(--color-dark-graphite)] p-6 md:p-8 rounded-2xl border border-[var(--color-dark-border)] shadow-xl max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl leading-tight font-display font-black text-white uppercase tracking-tight mb-4">
            O problema não é a sua máquina.<br/>
            <span className="text-[var(--color-brand-orange)]">É depender de arquivo solto quando você precisa de variedade e velocidade.</span>
          </h3>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            Com uma biblioteca organizada por temas, você deixa de começar do zero a cada pedido e passa a ter opções prontas para apresentar ao cliente.
          </p>
          <p className="text-base md:text-xl font-display font-bold text-white">
            Mesmo copo. Mesmo laser. <span className="text-[var(--color-brand-emerald)]">Arte diferente.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
