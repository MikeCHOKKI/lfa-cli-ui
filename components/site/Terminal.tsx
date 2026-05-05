"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "cmd" | "out" | "ok" | "info"; text: string };

const LINES: Line[] = [
  { type: "cmd", text: "./lfa-cli-ai setup" },
  { type: "out", text: "  Detecting editors..." },
  { type: "ok", text: "  ✓ Cursor found" },
  { type: "ok", text: "  ✓ VS Code found" },
  { type: "ok", text: "  ✓ Windsurf found" },
  { type: "out", text: "  Deploying 13 MCP skills..." },
  { type: "ok", text: "  ✓ MCP server configured" },
  { type: "info", text: "  ✓ Workflows → /feat /fix /audit /securite" },
  { type: "ok", text: "  Setup complete in 1.2s" },
];

export function Terminal() {
  const [typed, setTyped] = useState("");
  const [out, setOut] = useState<Line[]>([]);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  function startSequence() {
    const text = LINES[0].text;
    let i = 0;
    const tick = () => {
      i++;
      setTyped(text.slice(0, i));
      if (i < text.length) {
        setTimeout(tick, 35 + Math.random() * 25);
      } else {
        setDone(true);
        let delay = 250;
        for (let k = 1; k < LINES.length; k++) {
          const line = LINES[k];
          setTimeout(() => setOut((p) => [...p, line]), delay);
          delay += line.type === "out" ? 450 : 200;
        }
      }
    };
    setTimeout(tick, 600);
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            startSequence();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border-strong bg-surface-1/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.22_25)]" />
        <span className="h-3 w-3 rounded-full bg-amber" />
        <span className="h-3 w-3 rounded-full bg-emerald" />
        <span className="ml-3 font-mono text-[11px] text-muted-foreground">
          bash — lfa-cli-ai
        </span>
      </div>
      <div className="px-6 py-5 font-mono text-[13px] leading-relaxed">
        <div>
          <span className="text-cyan-glow">$ </span>
          <span className="text-foreground">{typed}</span>
          {!done && <span className="cursor-blink ml-0.5 text-foreground">▋</span>}
        </div>
        <div className="mt-2 space-y-0.5">
          {out.map((l, i) => (
            <div
              key={i}
              className={`animate-fade-up ${
                l.type === "ok"
                  ? "text-emerald"
                  : l.type === "info"
                    ? "text-cyan"
                    : "text-muted-foreground"
              }`}
            >
              {l.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}