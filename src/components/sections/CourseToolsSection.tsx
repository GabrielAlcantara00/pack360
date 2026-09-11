import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { assets } from "@/config/assets";

export function CourseToolsSection() {
  const tools = [
    {
      title: "Curso 360 do Zero",
      icon: "🎓",
      img: assets.courseTools.course,
      bullets: [
        "LightBurn + LaserGRBL",
        "Do arquivo à preparação da gravação",
        "Passo a passo para quem está começando",
      ],
    },
    {
      title: "Planilha de Precificação 360",
      icon: "🧮",
      img: assets.courseTools.calculator,
      bullets: [
        "Organize os custos do copo e da produção",
        "Defina sua margem de lucro",
        "Tenha uma base para o preço de venda",
      ],
    },
    {
      title: "Guia Rápido de Vendas",
      icon: "📈",
      img: assets.courseTools.guide,
      bullets: [
        "Como apresentar seus produtos",
        "WhatsApp + Instagram",
        "Do interesse até o pedido",
      ],
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-[var(--color-dark-charcoal)] border-b border-[var(--color-dark-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-2">
            Curso + Ferramentas
          </h2>
          <p className="text-sm md:text-lg text-[var(--color-text-secondary)]">
            A biblioteca entrega as artes. O treinamento e as ferramentas ajudam você a transformar essas artes em produção, preço e venda.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <StaggerItem key={i}>
              <div className="bg-[var(--color-dark-graphite)] border border-[var(--color-dark-border)] rounded-xl overflow-hidden flex flex-col h-full">
                <div className="w-full relative bg-[var(--color-dark-deep)] border-b border-[var(--color-dark-border)] sm:aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.img} alt={tool.title} className="w-full h-auto object-contain sm:h-full sm:object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-white text-base md:text-lg mb-3 flex items-center">
                    <span className="mr-2">{tool.icon}</span> {tool.title}
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-[var(--color-text-secondary)]">
                    {tool.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start">
                        <span className="text-[var(--color-brand-orange)] mr-2">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
