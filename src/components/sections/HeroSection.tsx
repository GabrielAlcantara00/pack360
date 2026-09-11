import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { assets } from "@/config/assets";
import { CheckCircle2, Zap } from "lucide-react";

const compatibility = ["LIGHTBURN", "LASERGRBL", "GRAVAÇÃO 360°", "ACESSÓRIO ROTATIVO", "LASER DIODO", "LASER CO₂"];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-dark-deep)] text-[var(--color-text-primary)]">
      <div className="w-full h-9 bg-[var(--color-dark-charcoal)] flex items-center justify-center px-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] relative z-10 border-b border-[var(--color-dark-border)]">
        <Zap className="w-3.5 h-3.5 text-[var(--color-brand-orange)] mr-2 flex-shrink-0 fill-current" />
        <span className="text-center">
          BIBLIOTECA DE ARTES 360° PARA QUEM JÁ TEM LASER <span className="hidden sm:inline">·</span><br className="sm:hidden" /> PAGAMENTO ÚNICO · ACESSO DIGITAL
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 md:pt-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-center">
          <StaggerContainer className="order-1 lg:col-start-1 lg:row-start-1 space-y-5 md:space-y-6 text-center lg:text-left">
            <StaggerItem>
              <div className="inline-flex items-center space-x-2 bg-[var(--color-dark-graphite)] border border-[var(--color-dark-border)] rounded-full px-4 py-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-orange)] flex-shrink-0 shadow-[0_0_8px_var(--color-brand-orange)]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                  {siteConfig.descriptor}
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black leading-tight tracking-tight uppercase max-w-[390px] mx-auto lg:max-w-none">
                Transforme seu laser em uma <span className="text-[var(--color-brand-orange)]">linha de copos personalizados para produzir e vender</span>
              </h1>
            </StaggerItem>
          </StaggerContainer>

          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex justify-center lg:justify-end w-full relative self-center">
            <div className="w-full max-w-[430px] mx-auto lg:max-w-xl relative z-10 rounded-2xl overflow-hidden border-4 border-[var(--color-dark-graphite)] shadow-2xl shadow-black/50 bg-[var(--color-dark-charcoal)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.hero.image}
                alt="Pack 360 Pro com biblioteca de artes 360 graus para copos"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-brand-orange)]/10 blur-[120px] rounded-full pointer-events-none" />
          </div>

          <StaggerContainer className="order-3 lg:col-start-1 lg:row-start-2 text-left max-w-[350px] mx-auto lg:mx-0">
            <StaggerItem>
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-5 text-center lg:text-left">
                Você não recebe um monte de arquivos soltos em um Drive. No Premium, entra em uma biblioteca organizada por temas para encontrar a arte, ajustar e colocar o copo para gravar.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-left">
                {[
                  "+550 artes 360° no plano completo",
                  "Biblioteca organizada por temas",
                  "Curso prático com LightBurn + LaserGRBL",
                  "Planilha de precificação + guia de vendas",
                  "Acesso imediato e pagamento único",
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="order-4 lg:col-start-1 lg:row-start-3 pt-2 text-center lg:text-left w-full overflow-hidden">
            <StaggerItem>
              <Button asChild size="xl" className="w-full sm:w-auto text-wrap text-center h-auto py-4">
                <a href="#planos">QUERO ACESSAR A BIBLIOTECA 360</a>
              </Button>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)] font-medium max-w-md mx-auto lg:mx-0">
                Escolha o tema, encontre a arte e leve para o seu fluxo de gravação sem começar toda encomenda do zero.
              </p>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 opacity-90">
                <div className="flex -space-x-2">
                  {[assets.socialProof.whatsapp[0], assets.socialProof.whatsapp[1], assets.socialProof.whatsapp[2]].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[var(--color-dark-deep)] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="Feedback real" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Feedbacks reais de compradores</span>
                </div>
              </div>

              <div className="w-full h-px bg-[var(--color-dark-border)] my-8"></div>

              <div className="w-full text-center lg:text-left">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-6">
                  Pensado para o fluxo de gravação a laser
                </h3>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes marquee-hero { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                  .animate-marquee-hero { display: flex; width: max-content; animation: marquee-hero 20s linear infinite; }
                `}} />
                <div className="relative w-full flex overflow-hidden group">
                  <div className="animate-marquee-hero items-center gap-4 pr-4">
                    {[...compatibility, ...compatibility].map((item, i) => (
                      <span key={`${item}-${i}`} className="whitespace-nowrap rounded-full border border-[var(--color-dark-border)] bg-[var(--color-dark-graphite)] px-4 py-2 text-[10px] md:text-xs font-black tracking-wider text-[var(--color-text-secondary)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
