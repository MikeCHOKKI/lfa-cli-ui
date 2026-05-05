"use client";

import { useEffect, useState } from "react";
import { GitFork, Menu, X } from "lucide-react";

const NAV = [
  { href: "#installation", label: "Installation" },
  { href: "#commandes", label: "Commandes" },
  { href: "#editeurs", label: "Éditeurs" },
  { href: "#skills", label: "MCP Skills" },
  { href: "#architecture", label: "Architecture" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-background/90 border-border-strong shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-background/60 border-border"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-bold tracking-tight">
            lfa<span className="text-gradient">-cli</span>-ai
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="group relative text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded bg-gradient-to-r from-cyan to-violet transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MikeCHOKKI/lfa-cli-ai"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan/40 bg-gradient-to-br from-cyan to-cyan/70 px-4 py-2 font-mono text-[11px] font-bold text-black shadow-[0_4px_15px_rgba(6,182,212,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(6,182,212,0.45)]"
            >
              <GitFork className="h-3.5 w-3.5" />
              GitHub
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[64px] z-40 border-b border-border bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden animate-fade-up">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}