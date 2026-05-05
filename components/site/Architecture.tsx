import { Reveal, SectionHeader } from "./Reveal";

const TREE = [
  ["lfa-cli-ai/", "# Racine du projet"],
  ["├── cmd/", "# Commandes CLI via Cobra"],
  ["│   ├── root.go", "# Commande racine"],
  ["│   ├── setup.go", "# Configuration des éditeurs"],
  ["│   ├── init.go", "# Initialisation de projet"],
  ["│   ├── doctor.go", "# Diagnostic environnement"],
  ["│   ├── dashboard.go", "# Dashboard TUI"],
  ["│   ├── plugin.go", "# Générateur de plugins MCP"],
  ["│   ├── uninstall.go", "# Suppression de config"],
  ["│   └── upgrade.go", "# Mise à jour workflows/skills"],
  ["├── internal/", ""],
  ["│   ├── config/", "# Logique de déploiement et config MCP"],
  ["│   ├── detect/", "# Détection intelligente des chemins"],
  ["│   ├── install/", "# Installation dans les éditeurs"],
  ["│   ├── osinfo/", "# Détection du système d'exploitation"],
  ["│   ├── project/", "# Initialisation de projet"],
  ["│   └── ui/", "# Utilitaires UI (prompts, TUI)"],
  ["├── data/", "# Ressources embarquées"],
  ["│   ├── mcp-server/", "# Serveur MCP + skills"],
  ["│   └── templates/", "# Templates (gitignore, rules)"],
  ["├── tests/", "# Suite de tests"],
  ["├── Makefile", "# Build, test, CI, cross-compilation"],
  ["└── main.go", "# Point d'entrée"],
];

export function Architecture() {
  return (
    <section id="architecture" className="py-20">
      <SectionHeader label="Architecture" title="Structure du projet" />
      <Reveal>
        <pre className="mx-auto max-w-3xl overflow-x-auto rounded-xl border border-border bg-surface-1/70 p-6 font-mono text-[11px] leading-6 backdrop-blur">
          {TREE.map(([code, note], i) => (
            <div key={i}>
              <span className="text-foreground">{code.padEnd(24)}</span>
              <span className="text-muted-foreground">{note}</span>
            </div>
          ))}
        </pre>
      </Reveal>
    </section>
  );
}