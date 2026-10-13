"use client";

import { useState } from "react";

export function GateForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      window.location.assign("/ar");
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="gate-form" dir="rtl">
      <label className="gate-label">
        <span>كلمة المرور</span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          inputMode="numeric"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="gate-input"
          dir="ltr"
          required
        />
      </label>
      <button type="submit" className="btn hero-cta--solid gate-submit" disabled={sending}>
        {sending ? "…" : "دخول"}
      </button>
      {error ? <p className="gate-error">كلمة المرور غير صحيحة.</p> : null}
    </form>
  );
}
