import { Reveal, SectionHeader } from "./Reveal";

const COMMANDS = [
  { name: "setup", desc: "Configure les éditeurs IA détectés en déployant les workflows, skills, règles et le serveur MCP", tag: "CORE" },
  { name: "init", desc: "Initialise un nouveau projet avec Git, .gitignore et un prompt IA professionnel", tag: "CORE" },
  { name: "doctor", desc: "Diagnostic de l'environnement — OS, éditeurs installés, dépendances, fichiers de configuration", tag: "UTILS" },
  { name: "dashboard", desc: "Affiche un tableau de bord interactif (TUI) montrant l'état de l'environnement", tag: "UTILS" },
  { name: "plugin [name]", desc: "Génère un plugin MCP personnalisé avec support Docker", tag: "EXT" },
  { name: "upgrade", desc: "Met à jour les workflows et skills pour les éditeurs déjà configurés", tag: "UPDATE" },
  { name: "uninstall [editor...]", desc: "Supprime la configuration d'un ou plusieurs éditeurs", tag: "UPDATE" },
] as const;

const tagClass: Record<string, string> = {
  CORE: "border-cyan/40 bg-cyan/15 text-cyan-glow",
  UTILS: "border-violet/40 bg-violet/15 text-violet-glow",
  EXT: "border-emerald/40 bg-emerald/15 text-emerald",
  UPDATE: "border-amber/40 bg-amber/15 text-amber",
};

export function Commands() {
  return (
    <section id="commandes" className="py-20">
      <SectionHeader label="Commandes" title="CLI lfa-cli-ai" />
      <Reveal>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-surface-1/60 backdrop-blur">
          {COMMANDS.map((c, i) => (
            <div
              key={c.name}
              className={`flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-surface-2/60 sm:flex-row sm:items-center sm:gap-4 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="font-mono text-sm font-semibold text-foreground sm:w-48">
                ./lfa-cli-ai {c.name}
              </span>
              <span className="flex-1 text-sm text-muted-foreground">{c.desc}</span>
              <span
                className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider ${tagClass[c.tag]}`}
              >
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}