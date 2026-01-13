"use client";

import { useEffect, useMemo, useState } from "react";

const statsData = [
  {
    label: "Years of Experience",
    target: 15,
    suffix: "+",
    format: (value: number) => `${Math.round(value)}+`,
  },
  {
    label: "Events Covered",
    target: 1700,
    suffix: "K+",
    format: (value: number) => `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K+`,
  },
  {
    label: "Satisfied Clients",
    target: 1500,
    suffix: "K+",
    format: (value: number) => `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K+`,
  },
  {
    label: "Customer Rating",
    target: 48,
    suffix: "",
    format: (value: number) => (value / 10).toFixed(1),
  },
];

export default function StatsStrip() {
  const [progress, setProgress] = useState(0);
  const formatted = useMemo(
    () =>
      statsData.map((stat) => ({
        label: stat.label,
        display: stat.format(Math.min(stat.target, stat.target * progress)),
      })),
    [progress]
  );

  useEffect(() => {
    let animationFrame: number;
    const start = performance.now();
    const duration = 1800;

    const animate = (time: number) => {
      const elapsed = time - start;
      const value = Math.min(elapsed / duration, 1);
      setProgress(value);
      if (value < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-white/90 py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10 px-4 text-center text-slate-900">
        {formatted.map((stat) => (
          <div key={stat.label} className="min-w-[140px]">
            <p className="text-4xl font-semibold leading-none">{stat.display}</p>
            <p className="mt-2 text-sm font-light uppercase tracking-widest text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
