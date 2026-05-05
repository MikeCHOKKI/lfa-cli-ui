import { Reveal, SectionHeader } from "./Reveal";

const LIBS = [
  { name: "spf13/cobra", desc: "Framework CLI" },
  { name: "charmbracelet/bubbletea", desc: "Framework TUI" },
  { name: "charmbracelet/lipgloss", desc: "Style terminal" },
  { name: "charmbracelet/huh", desc: "Formulaires interactifs" },
];

export function Libs() {
  return (
    <section id="libs" className="py-20">
      <SectionHeader label="Bibliothèques" title="Stack Go" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LIBS.map((l, i) => (
          <Reveal key={l.name} delay={i * 70}>
            <div className="group rounded-xl border border-border bg-surface-1/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-surface-2/70">
              <div className="font-mono text-sm font-semibold text-foreground transition-colors group-hover:text-gradient">
                {l.name}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{l.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}