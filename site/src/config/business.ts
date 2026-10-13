/** Single source of truth for commercial values — edit here only. */
export const groupCompanies = [
  {
    id: "graphics-house",
    nameEn: "Graphics House",
    nameAr: "جرافيكس هاوس",
    verbEn: "CREATE",
    verbAr: "ابتكار",
    roleEn: "Marketing tools & visual content production",
    roleAr: "أدوات تسويقية وإنتاج محتوى بصري",
    marketEn: "Real Estate Developers / Marketing Teams",
    marketAr: "المطورون العقاريون / فرق التسويق",
    leadEn:
      "A complete visual system that turns architectural information into market-ready launch assets — CGI, cinematic film, sales visuals, and digital campaign materials.",
    leadAr:
      "منظومة بصرية متكاملة تحوّل المعلومات المعمارية إلى أصول إطلاق جاهزة للسوق — إظهار معماري، أفلام سينمائية، مواد بيع، وأصول حملات رقمية.",
    href: "https://3dgraphicshouse.com",
    tone: "gh" as const,
    logo: "/brands/graphics-house.png",
  },
  {
    id: "bees-motion",
    nameEn: "Bees Motion",
    nameAr: "بيز موشن",
    verbEn: "PRODUCE",
    verbAr: "إنتاج",
    roleEn: "Marketing & Content Production",
    roleAr: "التسويق والإنتاج الفني للمحتوى",
    marketEn: "Brands / Marketing & Campaign Teams",
    marketAr: "العلامات / فرق التسويق والحملات",
    leadEn:
      "Campaign-ready marketing and content under one production team — film, product video, social creative, and motion.",
    leadAr:
      "تسويق ومحتوى جاهز للحملة تحت فريق إنتاج واحد — أفلام، فيديو المنتجات، محتوى السوشيال، والموشن.",
    href: "https://beesmotion.com",
    tone: "bm" as const,
    logo: "/brands/bees-motion.png",
  },
  {
    id: "turriva",
    nameEn: "Turriva",
    nameAr: "توريفا",
    verbEn: "EXECUTE",
    verbAr: "تنفيذ",
    roleEn: "Spatial execution & physical delivery",
    roleAr: "تنفيذ مكاني وتسليم مادي",
    marketEn: "Interior / Exhibitions / Furnishing",
    marketAr: "الداخلي والمعارض والتأثيث",
    leadEn:
      "Physical delivery when the project needs installation and field execution — interiors, exhibitions, and on-site finish.",
    leadAr:
      "تسليم ميداني حين يحتاج المشروع التركيب والتنفيذ — الداخلي والمعارض والإنهاء في الموقع.",
    href: "https://www.turriva.com/en",
    tone: "tu" as const,
    logo: "/brands/turriva.png",
  },
] as const;

export const tasamiAi = {
  id: "tasami-ai",
  nameEn: "Tasami AI",
  nameAr: "تسامي AI",
  verbEn: "TRANSFORM",
  verbAr: "تحويل",
  roleEn: "AI Transformation for Companies",
  roleAr: "تحويل الشركات للعمل بالذكاء الاصطناعي",
  audienceEn: "Companies / Leadership & Operations Teams",
  audienceAr: "الشركات / الإدارة وفرق التشغيل",
  leadEn: "We help companies work with AI, from the first assessment to a team that uses it every day.",
  leadAr: "نساعد الشركات على العمل بالذكاء الاصطناعي، من التقييم الأول حتى فريق يستخدمه كل يوم.",
  href: "/ai",
} as const;

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
  companies: groupCompanies,
  tasamiAi,
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
