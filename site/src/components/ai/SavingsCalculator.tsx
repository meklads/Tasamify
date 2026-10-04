"use client";

import { useMemo, useState } from "react";
import { business, whatsappHref } from "@/config/business";
import { formatEstimate } from "@/lib/utils";

export function SavingsCalculator({
  locale,
  labels,
}: {
  locale: string;
  labels: {
    title: string;
    employees: string;
    weeklyHours: string;
    hourlyCost: string;
    sector: string;
    monthlySave: string;
    yearlySave: string;
    estimateNote: string;
    whatsappQuote: string;
    orBookForm: string;
    sectors: Record<string, string>;
  };
}) {
  const [employees, setEmployees] = useState<number>(business.diagnosis.defaultEmployees);
  const [weeklyHours, setWeeklyHours] = useState<number>(business.diagnosis.defaultWeeklyHours);
  const [hourlyCost, setHourlyCost] = useState<number>(business.diagnosis.defaultHourlyCostSar);
  const [sector, setSector] = useState("realestate");

  const { monthly, yearly } = useMemo(() => {
    const weeklyCost = employees * weeklyHours * hourlyCost;
    const captured = weeklyCost * business.diagnosis.automationCaptureRate;
    const monthlySave = captured * 4.33;
    return { monthly: monthlySave, yearly: monthlySave * 12 };
  }, [employees, weeklyHours, hourlyCost]);

  return (
    <div className="surface-card p-5 md:p-7">
      <h2 className="display text-2xl m-0">{labels.title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span>{labels.employees}</span>
          <input
            type="number"
            min={1}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value) || 0)}
            className="min-h-11 rounded-lg border border-line bg-mist px-3"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>{labels.weeklyHours}</span>
          <input
            type="number"
            min={1}
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(Number(e.target.value) || 0)}
            className="min-h-11 rounded-lg border border-line bg-mist px-3"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>{labels.hourlyCost}</span>
          <input
            type="number"
            min={1}
            value={hourlyCost}
            onChange={(e) => setHourlyCost(Number(e.target.value) || 0)}
            className="min-h-11 rounded-lg border border-line bg-mist px-3"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>{labels.sector}</span>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="min-h-11 rounded-lg border border-line bg-mist px-3"
          >
            {Object.entries(labels.sectors).map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-mist p-4">
          <p className="eyebrow m-0">{labels.monthlySave}</p>
          <p className="display mt-2 text-3xl text-petrol">{formatEstimate(monthly, locale)}</p>
        </div>
        <div className="rounded-xl border border-line bg-mist p-4">
          <p className="eyebrow m-0">{labels.yearlySave}</p>
          <p className="display mt-2 text-3xl text-petrol">{formatEstimate(yearly, locale)}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate m-0">{labels.estimateNote}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappHref(business.whatsappMessages.calculator)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {labels.whatsappQuote}
        </a>
        <a href="#diagnosis-form" className="btn btn-secondary">
          {labels.orBookForm}
        </a>
      </div>
    </div>
  );
}
