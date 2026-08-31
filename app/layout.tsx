import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himperfilme.com.br"), // PLACEHOLDER — domínio definitivo
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }], // adicionar quando a imagem OG existir
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
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
    <html lang="pt-BR" className={`${oswald.variable} ${manrope.variable}`}>
      <body className="antialiased bg-brand-black text-brand-white">
        {children}
      </body>
    </html>
  );
}
