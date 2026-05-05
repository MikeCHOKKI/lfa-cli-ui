import { Reveal, SectionHeader } from "./Reveal";

const EDITORS = [
  { icon: "✦", name: "Antigravity (Gemini)", id: "antigravity", path: "~/.gemini/antigravity/", desc: "IA CLI Gemini" },
  { icon: "◈", name: "Cursor", id: "cursor", path: "~/cursor/", desc: "IDE IA basé sur VS Code" },
  { icon: "⬡", name: "VS Code", id: "vs-code", path: "~/.vscode/", desc: "Éditeur Microsoft" },
  { icon: "◎", name: "Windsurf", id: "windsurf", path: "~/.codeium/windsurf/", desc: "IDE IA de Codeium" },
];

export function Editors() {
  return (
    <section id="editeurs" className="py-20">
      <SectionHeader label="Éditeurs supportés" title="4 environnements configurés" />
      <Reveal>
        <div className="mx-auto overflow-hidden rounded-xl border border-border bg-surface-1/60 backdrop-blur">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2/50 text-left">
                <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Éditeur</th>
                <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Identifiant</th>
                <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Chemin</th>
              </tr>
            </thead>
            <tbody>
              {EDITORS.map((e, i) => (
                <tr key={e.id} className={`transition-colors hover:bg-surface-2/40 ${i !== 0 ? "border-t border-border" : ""}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl text-cyan-glow">{e.icon}</span>
                      <span className="font-semibold">{e.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <code className="rounded bg-cyan/10 px-2 py-1 font-mono text-xs text-cyan-glow">
                      {e.id}
                    </code>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-muted-foreground hidden md:table-cell">
                    {e.path}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}