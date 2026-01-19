import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitória Soder | Desenvolvedora Fullstack Pleno",
  description:
    "Desenvolvedora Fullstack com 3 anos de experiência em React, TypeScript, Node.js, Python e UX Design. Especializada em criar soluções digitais robustas e interfaces intuitivas.",
  keywords: [
    "Desenvolvedora Fullstack",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "UX Design",
    "Frontend",
    "Backend",
    "Portfolio",
    "Desenvolvedora Pleno",
  ],
  authors: [{ name: "Vitória Soder" }],
  creator: "Vitória Soder",
  publisher: "Vitória Soder",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vitoriasoder.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vitoriasoder.dev",
    title: "Vitória Soder | Desenvolvedora Fullstack Pleno",
    description:
      "Desenvolvedora Fullstack com 3 anos de experiência. Especializada em React, TypeScript, Node.js e UX Design.",
    siteName: "Portfolio Vitória Soder",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vitória Soder - Desenvolvedora Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitória Soder | Desenvolvedora Fullstack Pleno",
    description:
      "Desenvolvedora Fullstack com 3 anos de experiência em React, TypeScript, Node.js e UX Design.",
    images: ["/og-image.png"],
    creator: "@vitoriasoder",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
