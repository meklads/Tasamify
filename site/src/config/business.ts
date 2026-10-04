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
    whatsappIntl: "966502786513",
    whatsappDisplay: "+966 50 278 6513",
    whatsappLink: "https://wa.me/966502786513",
    telephone: "+966502786513",
    diagnosisInbox: "hello@tasamify.com",
  },
  whatsappMessages: {
    general: "السلام عليكم، أرغب بحجز تشخيص مجاني لشركتي.",
    calculator: "السلام عليكم، استخدمت حاسبة التوفير وأرغب بمناقشة النتيجة.",
    service: (serviceName: string) => `السلام عليكم، أرغب بالاستفسار عن خدمة ${serviceName}.`,
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
    budgetOptions: [
      { id: "under-25", ar: "أقل من 25 ألف ريال", en: "Under 25k SAR" },
      { id: "25-75", ar: "من 25 إلى 75 ألف ريال", en: "25k to 75k SAR" },
      { id: "75-200", ar: "من 75 إلى 200 ألف ريال", en: "75k to 200k SAR" },
      { id: "over-200", ar: "أكثر من 200 ألف ريال", en: "Over 200k SAR" },
      { id: "undecided", ar: "لم أحدد بعد", en: "Not decided yet" },
    ] as const,
  },
  services: {
    "sales-automation": {
      durationAr: "من 4 إلى 8 أسابيع",
      durationEn: "4 to 8 weeks",
    },
    "ai-agents": {
      durationAr: "من 5 إلى 10 أسابيع",
      durationEn: "5 to 10 weeks",
    },
    "ops-automation": {
      durationAr: "من 4 إلى 8 أسابيع",
      durationEn: "4 to 8 weeks",
    },
    "ai-content": {
      durationAr: "من 3 إلى 6 أسابيع",
      durationEn: "3 to 6 weeks",
    },
    "interactive-ai": {
      durationAr: "من 6 إلى 12 أسبوعاً",
      durationEn: "6 to 12 weeks",
    },
    "team-training": {
      durationAr: "من 2 إلى 4 أسابيع",
      durationEn: "2 to 4 weeks",
    },
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
  return `${business.contact.whatsappLink}?text=${encodeURIComponent(message)}`;
}

export function serviceDuration(slug: ServiceSlug, locale: string): string {
  const row = business.services[slug];
  return locale === "ar" ? row.durationAr : row.durationEn;
}
