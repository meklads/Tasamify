"use client";

import { useState } from "react";

type Labels = {
  formTitle: string;
  name: string;
  company: string;
  sector: string;
  companySize: string;
  phone: string;
  challenge: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  sectors: Record<string, string>;
  sizes: Record<string, string>;
};

export function DiagnosisForm({ labels, locale }: { labels: Labels; locale: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return <p className="surface-card p-6 text-petrol font-semibold">{labels.success}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="surface-card grid gap-4 p-5 md:p-7">
      <h2 className="display text-2xl m-0">{labels.formTitle}</h2>
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -start-[10000px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <label className="grid gap-1 text-sm">
        <span>{labels.name}</span>
        <input required name="name" className="min-h-11 rounded-lg border border-line bg-mist px-3" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>{labels.company}</span>
        <input required name="company" className="min-h-11 rounded-lg border border-line bg-mist px-3" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span>{labels.sector}</span>
          <select required name="sector" className="min-h-11 rounded-lg border border-line bg-mist px-3">
            {Object.entries(labels.sectors).map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span>{labels.companySize}</span>
          <select required name="companySize" className="min-h-11 rounded-lg border border-line bg-mist px-3">
            {Object.entries(labels.sizes).map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span>{labels.phone}</span>
        <input required name="phone" type="tel" className="min-h-11 rounded-lg border border-line bg-mist px-3" dir="ltr" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>{labels.challenge}</span>
        <textarea required name="challenge" rows={4} className="rounded-lg border border-line bg-mist px-3 py-2" />
      </label>
      <button type="submit" className="btn btn-primary justify-self-start" disabled={status === "loading"}>
        {status === "loading" ? labels.sending : labels.submit}
      </button>
      {status === "err" ? <p className="text-sm text-red-700 m-0">{labels.error}</p> : null}
    </form>
  );
}
