import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InnovAdapt — Tecnologia que se adapta ao seu negócio",
  description:
    "Desenvolvimento web, CRM com IA, automações e integrações WhatsApp para transformar o seu negócio.",
  keywords: ["desenvolvimento web", "CRM com IA", "automações", "WhatsApp Business", "tecnologia"],
  openGraph: {
    title: "InnovAdapt — Tecnologia que se adapta ao seu negócio",
    description:
      "Desenvolvimento web, CRM com IA, automações e integrações WhatsApp para transformar o seu negócio.",
    type: "website",
    locale: "pt_BR",
    siteName: "InnovAdapt",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovAdapt — Tecnologia que se adapta ao seu negócio",
    description:
      "Desenvolvimento web, CRM com IA, automações e integrações WhatsApp para transformar o seu negócio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
