"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (el.style as CSSStyleDeclaration).transitionDelay = `${delay}ms`;
            el.classList.add("visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: React.ReactNode;
}) {
  return (
    <Reveal className="mb-10 text-center">
      <div className="mb-3 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
        {label}
      </div>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </Reveal>
  );
}
