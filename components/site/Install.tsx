"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const STEPS = [
  "git clone https://github.com/MikeCHOKKI/lfa-cli-ai.git",
  "cd lfa-cli-ai",
  "make build",
];

const STEPS_CROSS = [
  "make build-all",
];

function CopyRow({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-border bg-surface-1/70 px-4 py-3 font-mono text-[13px] backdrop-blur transition-colors hover:border-cyan/40">
      <span className="select-none text-cyan-glow">$</span>
      <span className="flex-1 truncate text-foreground">{cmd}</span>
      <button
        onClick={() => {
          navigator.clipboard.writeText(cmd);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
        className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all ${
          copied
            ? "border-emerald/40 bg-emerald/10 text-emerald"
            : "border-border-strong bg-surface-2 text-muted-foreground hover:border-cyan/50 hover:text-foreground"
        }`}
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copié" : "Copy"}
      </button>
    </div>
  );
}

export function Install() {
  return (
    <section id="installation" className="py-20">
      <SectionHeader label="Installation" title="Depuis les sources" />
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-3">
          {STEPS.map((s) => (
            <CopyRow key={s} cmd={s} />
          ))}
        </div>
      </Reveal>

      <div className="mt-12">
        <SectionHeader label="Compilation croisée" title="Toutes les plateformes" />
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-3">
            {STEPS_CROSS.map((s) => (
              <CopyRow key={s} cmd={s} />
            ))}
            <p className="pt-3 text-center text-xs text-muted-foreground">
              Les binaires sont générés dans le répertoire{" "}
              <code className="rounded bg-cyan/10 px-2 py-0.5 font-mono text-cyan-glow">
                dist/
              </code>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}