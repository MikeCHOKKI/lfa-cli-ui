import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 text-center">
      <pre className="mx-auto mb-8 animate-fade-up text-[8px] leading-none text-cyan-glow sm:text-[10px]" style={{ animationDelay: "0s" }}>
{`██╗     ███████╗ █████╗        ██████╗██╗     ██╗      █████╗ ██╗
██║     ██╔════╝██╔══██╗      ██╔════╝██║     ██║     ██╔══██╗██║
██║     █████╗  ███████║      ██║     ██║     ██║     ███████║██║
██║     ██╔══╝  ██╔══██║      ██║     ██║     ██║     ██╔══██║██║
███████╗██║     ██║  ██║      ╚██████╗███████╗██║     ██║  ██║██║
╚══════╝╚═╝     ╚═╝  ╚═╝       ╚═════╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝`}
      </pre>

      <div
        className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-cyan/30 bg-cyan/10 px-5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-glow backdrop-blur"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="pulse-dot" />
        Go 1.21+ · Apache 2.0 · Linux/Darwin
      </div>

      <h1
        className="mt-6 animate-fade-up text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
        style={{ animationDelay: "0.15s" }}
      >
        lfa<span className="text-gradient">-cli</span>-ai
      </h1>

      <p
        className="mx-auto mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg"
        style={{ animationDelay: "0.2s" }}
      >
        Configure instantanément vos environnements de développement IA sur{" "}
        <strong className="text-foreground">Linux</strong> —{" "}
        <strong className="text-foreground">Antigravity</strong>,{" "}
        <strong className="text-foreground">Cursor</strong>,{" "}
        <strong className="text-foreground">VS Code</strong> et{" "}
        <strong className="text-foreground">Windsurf</strong> — avec workflows, règles, skills MCP et serveur MCP portable.
      </p>

      <div
        className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: "0.25s" }}
      >
        <a
          href="#installation"
          className="group inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface-1/60 px-6 py-3 font-mono text-xs font-semibold tracking-wide text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-surface-2"
        >
          Installation
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#commandes"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan/40 bg-gradient-to-br from-cyan to-cyan/70 px-6 py-3 font-mono text-xs font-semibold tracking-wide text-black shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(6,182,212,0.55)]"
        >
          <TerminalIcon className="h-4 w-4" />
          Commandes
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </div>

      <div
        className="mx-auto mt-12 flex animate-fade-up flex-wrap items-center justify-center gap-4 text-xs font-mono"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1.5 text-violet-glow">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
          Build passing
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1.5 text-violet-glow">
          13 MCP Skills Anthropic
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1.5 text-violet-glow">
          8 Skills open source
        </span>
      </div>
    </section>
  );
}