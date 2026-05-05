import { Reveal, SectionHeader } from "./Reveal";
import {
  Zap,
  Puzzle,
  RefreshCw,
  Stethoscope,
  Plug,
  Globe,
  ArrowUpCircle,
  Trash2,
  LayoutDashboard,
  FolderGit2,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Setup automatisé",
    desc: "Configure Antigravity, Cursor, VS Code et Windsurf en quelques secondes",
  },
  {
    icon: Puzzle,
    title: "21 MCP Skills",
    desc: "Serveur MCP portable avec 13 skills Anthropic (Apache 2.0) et 8 skills open source",
  },
  {
    icon: RefreshCw,
    title: "Workflows & Règles",
    desc: "Suite /feat, /fix, /audit, /securite prête à l'emploi",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard TUI",
    desc: "Tableau de bord interactif en terminal (bubbletea/lipgloss)",
  },
  {
    icon: Stethoscope,
    title: "Doctor",
    desc: "Audit complet — OS, éditeurs, dépendances, fichiers de config",
  },
  {
    icon: FolderGit2,
    title: "Project Init",
    desc: "Git, .gitignore optimisé et génération de prompt IA",
  },
  {
    icon: Plug,
    title: "Plugin Generator",
    desc: "Créez vos propres plugins MCP, avec support Docker",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrade",
    desc: "Met à jour workflows et skills sans réinstaller",
  },
  {
    icon: Globe,
    title: "Cross-platform",
    desc: "linux/amd64, linux/arm64, darwin/amd64, darwin/arm64",
  },
  {
    icon: Trash2,
    title: "Uninstall",
    desc: "Suppression propre et ciblée par éditeur",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="py-20">
      <SectionHeader label="Fonctionnalités" title="Tout ce dont vous avez besoin" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 60}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface-1/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-surface-2/70 hover:shadow-[0_20px_40px_-20px_rgba(6,182,212,0.4)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-gradient-to-br from-cyan/20 to-cyan-glow/10 text-cyan-glow transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}