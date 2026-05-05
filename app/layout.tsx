import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mikechokki.github.io/lfa-cli-ui";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const OG_IMAGE_SQUARE = `${SITE_URL}/og-image-square.jpg`;
const TITLE = "lfa-cli-ui — Interface Next.js pour configurer vos environnements de développement";
const DESCRIPTION =
  "UI Next.js open-source pour configurer instantanément vos environnements IA (Cursor, VS Code, Windsurf, Antigravity) avec workflows, composants et intégrations. Stack moderne React + TypeScript + Tailwind.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "lfa-cli-ui, Next.js UI, React, TypeScript, Tailwind CSS, shadcn/ui, Cursor, VS Code, Windsurf, environnement de développement",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "lfa-cli-ui — Interface Next.js pour environnements de développement",
        type: "image/jpeg",
      },
      {
        url: OG_IMAGE_SQUARE,
        width: 1200,
        height: 1200,
        alt: "lfa-cli-ui — Interface Next.js",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
