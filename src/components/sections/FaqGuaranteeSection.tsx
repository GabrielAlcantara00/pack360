import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { assets } from "@/config/assets";

export function FaqGuaranteeSection() {
  const faqItems = [
    { question: "1. Isso é um Drive com arquivos soltos?", answer: "Não. A proposta do Pack 360 Pro é funcionar como uma biblioteca organizada por temas e categorias, facilitando encontrar a arte que você quer usar." },
    { question: "2. Preciso saber desenhar?", answer: "Não. Você parte de artes já prontas e faz os ajustes necessários para o seu copo, equipamento e fluxo de gravação." },
    { question: "3. Preciso dominar LightBurn ou LaserGRBL?", answer: "Não. O Plano Pro inclui um curso prático com LightBurn e LaserGRBL para ajudar quem ainda está começando." },
    { question: "4. Funciona com qualquer laser?", answer: "A compatibilidade final depende do seu equipamento, software, acessório rotativo, material e configuração. As artes são a base; potência, velocidade e medidas devem ser ajustadas à sua máquina." },
    { question: "5. Quantas artes vêm no Pro?", answer: "A oferta está estruturada para uma biblioteca com mais de 550 artes 360° no plano completo, além de coleções bônus." },
    { question: "6. Como recebo o acesso?", answer: "Após a confirmação do pagamento, o acesso deve ser liberado pelo fluxo configurado no seu checkout. Ajuste essa entrega antes de publicar a página." },
    { question: "7. O acesso é vitalício?", answer: "A página está estruturada como pagamento único e sem mensalidade. Confirme a política final de acesso da sua oferta antes de publicar." },
  ];

  return (
    <>
      <section className="py-8 bg-[var(--color-dark-charcoal)] border-b border-[var(--color-dark-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex items-center justify-center gap-4 md:gap-6 bg-[var(--color-dark-graphite)] border border-[var(--color-dark-border)] rounded-xl p-4 shadow-lg">
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.guarantee.badge} alt="Garantia de 7 dias" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-tight">7 dias de garantia</h2>
              <p className="text-xs md:text-sm text-[var(--color-text-secondary)] max-w-md">
                Entre, navegue e conheça a biblioteca. Confirme que o prazo do checkout está configurado igual antes de publicar.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="faq" className="py-10 md:py-16 bg-[var(--color-dark-deep)] border-b border-[var(--color-dark-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight">Dúvidas Frequentes</h2>
          </FadeIn>
          <FadeIn><Accordion items={faqItems} defaultOpenCount={2} /></FadeIn>
        </div>
      </section>
    </>
  );
}
