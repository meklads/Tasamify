"use client";

import { business, whatsappHref } from "@/config/business";

export function WhatsAppFloat({ label, message }: { label: string; message?: string }) {
  const href = whatsappHref(message ?? business.whatsappMessages.general);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 end-4 z-50 inline-flex min-h-12 items-center rounded-full bg-[#128C7E] px-4 text-sm font-semibold text-white shadow-lg no-underline"
      aria-label={label}
    >
      {label}
    </a>
  );
}
