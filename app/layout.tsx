import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const TITULO = "InnovAdapt · Plataforma de dados e IA para o varejo automotivo";
const DESCRICAO =
  "CRM com agente de IA atendendo no WhatsApp, portal de operações e fiscal, DRE gerencial por departamento e consolidação de rede de dealers. Plataforma sob medida, construída por quem escreve o código.";
const URL_SITE = "https://innovadapt.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: TITULO,
  description: DESCRICAO,
  keywords: [
    "sistema para concessionária",
    "CRM concessionária",
    "agente de IA WhatsApp",
    "DRE gerencial concessionária",
    "BI automotivo",
    "gestão de rentabilidade concessionária",
    "software sob medida",
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
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "InnovAdapt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
    images: ["/logo.png"],
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
  email: "contato@innovadapt.com.br",
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
    <html lang="pt-BR" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
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
