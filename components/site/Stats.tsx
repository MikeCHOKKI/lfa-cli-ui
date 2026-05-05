"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 21, label: "MCP Skills" },
  { value: 4, label: "Éditeurs supportés" },
  { value: 15, label: "Workflows IA" },
  { value: 8, label: "Plateformes" },
];

function Counter({ target }: { target: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const duration = 1400;
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-gradient text-4xl font-bold tracking-tight md:text-5xl">
      {v}
    </div>
  );
}

export function Stats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="group relative overflow-hidden rounded-xl border border-border bg-surface-1/60 p-5 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.4)]"
        >
          <Counter target={s.value} />
          <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {s.label}
          </div>
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}