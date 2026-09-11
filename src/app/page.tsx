import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { MarketProofSection } from "@/components/sections/MarketProofSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { RevealTourSection } from "@/components/sections/RevealTourSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { CourseToolsSection } from "@/components/sections/CourseToolsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqGuaranteeSection } from "@/components/sections/FaqGuaranteeSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { ExitPopup } from "@/components/ui/ExitPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-dark-deep)] selection:bg-[var(--color-brand-orange)]/30 selection:text-white">
      <HeroSection />
      <PainSection />
      <MarketProofSection />
      <CategoriesSection />
      <RevealTourSection />
      <BonusSection />
      <CourseToolsSection />
      <SocialProofSection />
      <PricingSection />
      <FaqGuaranteeSection />
      <FooterSection />

      <StickyCTA />
      <ExitPopup />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Isso é um Drive com arquivos soltos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não. O Pack 360 Pro é apresentado como uma biblioteca organizada por temas e categorias para facilitar a busca das artes.",
                },
              },
              {
                "@type": "Question",
                name: "Preciso saber desenhar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não. Você parte de artes prontas e faz os ajustes necessários para o seu copo e equipamento.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
