import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Instrument Sans desde 02/10/2026, no redesenho em fundo branco: grotesca
// de desenho aberto, lê bem grande no título e pequena no formulário.
const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const TITULO = "InnovAdapt | Tecnologia que se adapta ao seu negócio";
const DESCRICAO =
  "Sistemas sob medida com inteligência artificial: atendimento no WhatsApp, portal de operações e fiscal, DRE gerencial e consolidação de rede. Construídos por quem escreve o código, no ar em fases.";
const URL_SITE = "https://innovadapt.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: TITULO,
  description: DESCRICAO,
  keywords: [
    "software sob medida",
    "sistema sob medida com IA",
    "sistema para concessionária",
    "CRM concessionária",
    "agente de IA WhatsApp",
    "DRE gerencial concessionária",
    "BI automotivo",
    "gestão de rentabilidade concessionária",
    "InnovAdapt",
  ],
  alternates: { canonical: URL_SITE },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    url: URL_SITE,
    type: "website",
    locale: "pt_BR",
    siteName: "InnovAdapt",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "InnovAdapt, tecnologia que se adapta ao seu negócio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InnovAdapt",
  legalName: "Sampaio Consultoria LTDA",
  taxID: "57.411.230/0001-60",
  url: URL_SITE,
  logo: `${URL_SITE}/logo.png`,
  description: DESCRICAO,
  email: "roger.sampaio@innovadapt.com.br",
  telephone: "+55-11-98266-7293",
  areaServed: "BR",
  knowsAbout: [
    "CRM com inteligência artificial",
    "Automação de atendimento no WhatsApp",
    "Portal de operações e fiscal",
    "DRE gerencial e rentabilidade de concessionárias",
    "Consolidação de dados de rede de dealers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
        {children}
      </body>
    </html>
  );
}
