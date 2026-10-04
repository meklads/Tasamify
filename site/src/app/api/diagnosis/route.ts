import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { business } from "@/config/business";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  sector: z.string().trim().min(2).max(80),
  companySize: z.string().trim().min(1).max(40),
  phone: z.string().trim().min(8).max(40),
  challenge: z.string().trim().min(10).max(4000),
  locale: z.enum(["ar", "en"]).optional(),
  website: z.string().optional(), // honeypot
});

const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || row.reset < now) {
    hits.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (row.count >= 5) return false;
  row.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid", details: parsed.error.flatten() }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, company, sector, companySize, phone, challenge, locale } = parsed.data;
  const subject = `[Tasami AI Diagnosis] ${company} — ${name}`;
  const body = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Sector: ${sector}`,
    `Size: ${companySize}`,
    `Phone: ${phone}`,
    `Locale: ${locale ?? "ar"}`,
    "",
    challenge,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "Tasami AI <onboarding@resend.dev>";
    await resend.emails.send({
      from,
      to: [business.contact.diagnosisInbox],
      subject,
      text: body,
    });
  } else {
    console.info("[diagnosis] accepted without RESEND_API_KEY\n", body);
  }

  return NextResponse.json({ ok: true });
}
