import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pack 360 Pro | Biblioteca de Artes 360° para Copos",
  description: "Biblioteca de artes 360° organizada por temas para personalização de copos a laser, com curso LightBurn e LaserGRBL, planilha de precificação e guia de vendas.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="utmify"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
