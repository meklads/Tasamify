"use client";

import { useEffect, useState } from "react";

type Step = { key: string; label: string };

export function HeroFlow({
  label,
  steps,
  replayLabel,
}: {
  label: string;
  steps: Step[];
  replayLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [runId, setRunId] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setActive(steps.length - 1);
      return;
    }
    setActive(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      if (i >= steps.length) {
        window.clearInterval(id);
        return;
      }
      setActive(i);
    }, 1100);
    return () => window.clearInterval(id);
  }, [runId, steps.length]);

  return (
    <div className="surface-card p-5 md:p-7" aria-label={label}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow m-0">{label}</p>
        <button
          type="button"
          className="btn btn-secondary text-sm"
          onClick={() => {
            if (reduced) {
              setActive(steps.length - 1);
              return;
            }
            setRunId((v) => v + 1);
          }}
        >
          {replayLabel}
        </button>
      </div>

      <svg viewBox="0 0 640 160" className="h-auto w-full" role="img" aria-hidden>
        <defs>
          <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0F3D3E" />
            <stop offset="100%" stopColor="#E39A2D" />
          </linearGradient>
        </defs>
        <path
          d="M40 80 H200 H360 H520 H600"
          fill="none"
          stroke="url(#flowLine)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={0.35}
        />
        {steps.map((step, index) => {
          const x = 40 + index * 160;
          const on = index <= active;
          return (
            <g key={step.key} className={`flow-stage ${on ? "is-active" : ""}`}>
              <circle
                cx={x}
                cy={80}
                r={16}
                className={`flow-dot ${index === active ? "is-active" : ""}`}
                fill={on ? "#E39A2D" : "#CBD5DA"}
              />
              <text
                x={x}
                y={120}
                textAnchor="middle"
                fontSize="12"
                fill="#16212B"
                fontFamily="var(--font-body), sans-serif"
              >
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>

      <ol className="mt-4 grid gap-2 p-0 md:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.key}
            className={`list-none rounded-xl border px-3 py-3 text-sm ${
              index <= active ? "border-amber bg-white text-ink" : "border-line text-slate"
            }`}
          >
            {step.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
