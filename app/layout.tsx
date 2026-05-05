import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const DEFAULT_SITE_URL = "https://mikechokki.github.io/lfa-cli-ui";

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.NODE_ENV === "production") {
    return DEFAULT_SITE_URL;
  }
  return "http://localhost:3000";
};

const finalSiteUrl = getSiteUrl();
const OG_IMAGE = `${finalSiteUrl}/og-image.jpg`;
const OG_IMAGE_SQUARE = `${finalSiteUrl}/og-image-square.jpg`;

const TITLE = "lfa-cli-ai — CLI pour configurer vos environnements de développement IA";
const DESCRIPTION =
  "Configurez instantanément vos environnements de développement IA sur Linux — Antigravity, Cursor, VS Code et Windsurf — avec workflows, règles, 21 MCP skills et serveur MCP portable.";

export const metadata: Metadata = {
  metadataBase: new URL(finalSiteUrl),
  title: {
    default: TITLE,
    template: "%s | lfa-cli-ai",
  },
  description: DESCRIPTION,
  keywords: [
    "lfa-cli-ai",
    "CLI",
    "Go",
    "MCP",
    "Model Context Protocol",
    "Cursor",
    "VS Code",
    "Windsurf",
    "Antigravity",
    "AI development environment",
    "development setup",
    "IA",
    "workflows",
    "MCP skills",
  ],
  authors: [
    {
      name: "@Ekim's",
      url: "https://github.com/MikeCHOKKI",
    },
  ],
  creator: "@Ekim's",
  publisher: "GitHub",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: finalSiteUrl,
    siteName: "lfa-cli-ai",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "lfa-cli-ai — CLI pour environnements de développement IA",
        type: "image/jpeg",
      },
      {
        url: OG_IMAGE_SQUARE,
        width: 1200,
        height: 1200,
        alt: "lfa-cli-ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@MikeCHOKKI",
  },
  alternates: {
    canonical: finalSiteUrl,
    languages: {
      fr: finalSiteUrl,
    },
  },
  other: {
    "og:site_name": "lfa-cli-ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}