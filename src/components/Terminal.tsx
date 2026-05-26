import { useEffect, useRef, useState } from "react";

const lines = [
  { text: "> lfa doctor", type: "cmd" },
  { text: "✓ OS detected: Linux (Fedora 40)", type: "success" },
  { text: "✓ OpenCode found", type: "success" },
  { text: "✓ Ollama reachable (http://localhost:11434)", type: "success" },
  { text: "→ 22 agents available", type: "info" },
  { text: "→ 18 skills available", type: "info" },
  { text: "✓ System ready for configuration", type: "success" },
  { text: "", type: "empty" },
  { text: "> lfa setup --ollama", type: "cmd" },
  { text: "✓ Config directory created (~/.config/opencode)", type: "success" },
  { text: "✓ Agents deployed (22/22)", type: "success" },
  { text: "✓ Skills deployed (18/18)", type: "success" },
  { text: "✓ Ollama linked as LLM provider", type: "success" },
  { text: "✓ OpenCode configuration complete", type: "success" },
  { text: "", type: "empty" },
  { text: "── LFA CLI ──────────────────────", type: "divider" },
  { text: "🚀 Environment ready", type: "highlight" },
  { text: "🔧 Type 'lfa dashboard' to launch", type: "highlight" },
  { text: "─────────────────────────────────", type: "divider" },
];

function Line({ line, index }: { line: (typeof lines)[0]; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Vitesse d'écriture légèrement accélérée (300ms) pour un effet plus dynamique
    const timer = setTimeout(() => setVisible(true), index * 350);
    return () => clearTimeout(timer);
  }, [index]);

  // On garde la ligne dans le DOM avec height minimale ou on l'affiche seulement si visible
  // pour éviter les sauts brutaux.
  if (!visible) return null;

  const colorClass = {
    cmd: "text-lfa-accent",
    success: "text-lfa-success",
    info: "text-lfa-warning",
    empty: "h-4", // Évite le collapse des lignes vides
    divider: "text-lfa-text/40",
    highlight: "text-lfa-text font-bold",
  }[line.type];

  return (
    <div
      className={`animate-fade-in whitespace-pre-wrap min-h-[1.5rem] ${colorClass}`}
    >
      {line.text}
    </div>
  );
}

export default function Terminal() {
  const [showCursor, setShowCursor] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalDelay = lines.length * 350 + 200;
    const cursorTimer = setTimeout(() => setShowCursor(true), totalDelay);
    return () => clearTimeout(cursorTimer);
  }, []);

  // Auto-scroll interne ultra-propre limité AU TERMINAL SEUL
  useEffect(() => {
    const container = terminalBodyRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Scroll fluide uniquement à l'intérieur du div du terminal
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    };

    // On check et scroll toutes les 200ms pendant l'animation
    const interval = setInterval(handleScroll, 200);

    // Sécurité : On arrête le scroll automatique après la fin de l'animation
    const totalDelay = lines.length * 350 + 500;
    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
    }, totalDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-lfa-accent/30 shadow-2xl bg-[#0D1117]">
      {/* Barre supérieure du Terminal */}
      <div className="bg-[#161B22] px-4 py-2.5 flex items-center gap-2 border-b border-lfa-accent/10 select-none">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs font-mono text-lfa-text/50">
          terminal — lfa setup
        </span>
      </div>

      {/* Corps du Terminal avec hauteur fixe et scroll interne */}
      <div
        ref={terminalBodyRef}
        className="p-5 h-[360px] font-mono text-sm leading-relaxed overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-lfa-surface"
      >
        <div className="flex flex-col gap-1">
          {lines.map((line, i) => (
            <Line key={i} line={line} index={i} />
          ))}

          {showCursor && (
            <div className="flex items-center min-h-[1.5rem]">
              <span className="inline-block w-2 h-4 bg-lfa-accent animate-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
