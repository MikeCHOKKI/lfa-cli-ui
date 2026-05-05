import { Reveal, SectionHeader } from "./Reveal";

type Cat = "anthropic" | "opensource";
const SKILLS: { name: string; cat: Cat; desc: string }[] = [
  // Anthropic (Apache 2.0)
  { name: "algorithmic-art", cat: "anthropic", desc: "Génération d'art algorithmique avec p5.js" },
  { name: "canvas-design", cat: "anthropic", desc: "Création de posters et visuels" },
  { name: "frontend-design", cat: "anthropic", desc: "Composants UI production-grade" },
  { name: "web-artifacts-builder", cat: "anthropic", desc: "Artifacts React/Tailwind complexes" },
  { name: "slack-gif-creator", cat: "anthropic", desc: "GIFs animés pour Slack" },
  { name: "claude-api", cat: "anthropic", desc: "Intégration Claude API / Anthropic SDK" },
  { name: "mcp-builder", cat: "anthropic", desc: "Création de serveurs MCP pour LLMs" },
  { name: "webapp-testing", cat: "anthropic", desc: "Tests d'applications web avec Playwright" },
  { name: "doc-coauthoring", cat: "anthropic", desc: "Co-rédaction de documentation" },
  { name: "skill-creator", cat: "anthropic", desc: "Création et évaluation de skills" },
  { name: "brand-guidelines", cat: "anthropic", desc: "Application des guidelines Anthropic" },
  { name: "internal-comms", cat: "anthropic", desc: "Rédaction de communications internes" },
  { name: "theme-factory", cat: "anthropic", desc: "Application de thèmes visuels" },
  // Open source
  { name: "code-review", cat: "opensource", desc: "Revue de code systématique" },
  { name: "security-checklist", cat: "opensource", desc: "Audit OWASP Top 10" },
  { name: "accessibility-a11y", cat: "opensource", desc: "Conformité WCAG 2.1/2.2" },
  { name: "docker-containers", cat: "opensource", desc: "Bonnes pratiques Docker" },
  { name: "python-utilities", cat: "opensource", desc: "Python 3.10+, type hints" },
  { name: "flutter", cat: "opensource", desc: "Architecture widgets, state management" },
  { name: "nextjs", cat: "opensource", desc: "App Router, Server Components" },
  { name: "php", cat: "opensource", desc: "PHP 8+, patterns Laravel" },
];



export function Skills() {
  return (
    <section id="skills" className="py-20">
      <SectionHeader label="MCP Skills" title="21 skills déployables" />
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-1/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-surface-2 hover:text-foreground"
              title={s.desc}
            >
              <span className={`h-2 w-2 rounded-full ${s.cat === 'anthropic' ? 'bg-violet shadow-[0_0_8px_var(--violet-glow)]' : 'bg-emerald shadow-[0_0_8px_var(--emerald)]'}`} />
              {s.name}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet shadow-[0_0_8px_var(--violet-glow)]" /> 13 Anthropic (Apache 2.0)
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald shadow-[0_0_8px_var(--emerald)]" /> 8 Open source (Apache 2.0)
          </span>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Skills déployés via{" "}
          <code className="rounded bg-cyan/10 px-1.5 py-0.5 font-mono text-cyan-glow">
            go:embed
          </code>{" "}
          dans le binaire (~500 Ko)
        </p>
      </Reveal>
    </section>
  );
}