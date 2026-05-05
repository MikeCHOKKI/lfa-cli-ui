"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Terminal } from "@/components/site/Terminal";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { Install } from "@/components/site/Install";
import { Commands } from "@/components/site/Commands";
import { Editors } from "@/components/site/Editors";
import { Skills } from "@/components/site/Skills";
import { Architecture } from "@/components/site/Architecture";
import { Libs } from "@/components/site/Libs";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="grid-bg" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <Hero />
        <Terminal />
        <Stats />
        <Features />
        <div className="mx-auto my-6 h-px max-w-3xl bg-linear-to-r from-transparent via-border-strong to-transparent" />
        <Install />
        <Commands />
        <div className="mx-auto my-6 h-px max-w-3xl bg-linear-to-r from-transparent via-border-strong to-transparent" />
        <Editors />
        <Skills />
        <div className="mx-auto my-6 h-px max-w-3xl bg-linear-to-r from-transparent via-border-strong to-transparent" />
        <Architecture />
        <Libs />
        <Footer />
      </main>
    </div>
  );
}