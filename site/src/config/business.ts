/** Single source of truth for commercial values — edit here only. */
export const business = {
  brand: {
    groupName: "Tasami Group",
    groupNameAr: "مجموعة تسامي",
    aiName: "Tasami AI",
    aiNameAr: "تسامي للذكاء الصناعي",
    domain: "https://www.tasamify.com",
  },
  contact: {
    email: "hello@tasamify.com",
    whatsappE164: "+966500000000",
    whatsappDisplay: "+966 50 000 0000",
    diagnosisInbox: "hello@tasamify.com",
  },
  trust: {
    yearsExperience: 15,
    companiesCount: 3,
  },
  diagnosis: {
    defaultHourlyCostSar: 80,
    defaultWeeklyHours: 20,
    defaultEmployees: 8,
    automationCaptureRate: 0.45,
  },
  services: {
    "sales-automation": { fromPriceSar: 18000, durationWeeks: "4–8" },
    "ai-agents": { fromPriceSar: 22000, durationWeeks: "5–10" },
    "ops-automation": { fromPriceSar: 16000, durationWeeks: "4–8" },
    "ai-content": { fromPriceSar: 12000, durationWeeks: "3–6" },
    "interactive-ai": { fromPriceSar: 25000, durationWeeks: "6–12" },
    "team-training": { fromPriceSar: 8000, durationWeeks: "2–4" },
  },
  companies: [
    {
      id: "graphics-house",
      nameEn: "Graphics House",
      nameAr: "جرافيكس هاوس",
      roleEn: "Marketing tools & visual content production",
      roleAr: "أدوات تسويقية وإنتاج محتوى بصري",
      href: "https://3dgraphicshouse.com",
    },
    {
      id: "bees-motion",
      nameEn: "Bees Motion",
      nameAr: "بيز موشن",
      roleEn: "Creative production & digital marketing",
      roleAr: "إنتاج إبداعي وتسويق رقمي",
      href: "https://beesmotion.com",
    },
    {
      id: "turriva",
      nameEn: "Turriva",
      nameAr: "توريفا",
      roleEn: "Spatial execution & physical delivery",
      roleAr: "تنفيذ مكاني وتسليم مادي",
      href: "https://www.turriva.com/en",
    },
  ],
  serviceSlugs: [
    "sales-automation",
    "ai-agents",
    "ops-automation",
    "ai-content",
    "interactive-ai",
    "team-training",
  ] as const,
} as const;

export type ServiceSlug = (typeof business.serviceSlugs)[number];

export function whatsappHref(message: string): string {
  const digits = business.contact.whatsappE164.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function whatsappDefaultMessage(locale: string): string {
  return locale === "ar"
    ? `مرحباً، أرغب بحجز تشخيص مجاني مع ${business.brand.aiNameAr}.`
    : `Hello, I would like to book a free diagnosis with ${business.brand.aiName}.`;
}
