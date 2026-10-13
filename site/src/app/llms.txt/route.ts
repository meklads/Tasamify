import { business } from "@/config/business";

export function GET() {
  const body = `# Tasami Group

> Parent group for specialist companies and Tasami AI.

## Companies
${business.companies.map((c) => `- ${c.nameEn}: ${c.href.startsWith("/") ? `${business.brand.domain}/ar${c.href}` : c.href}`).join("\n")}

## Tasami AI
AI transformation for companies: from the first assessment to a team that uses it every day.
Primary CTA: free diagnosis at ${business.brand.domain}/ar/ai/diagnosis

## Services
${business.serviceSlugs.map((slug) => `- ${slug}: ${business.brand.domain}/ar/ai/services/${slug}`).join("\n")}

## Key pages
- Home: ${business.brand.domain}/ar
- Tasami AI: ${business.brand.domain}/ar/ai
- Case studies: ${business.brand.domain}/ar/ai/case-studies
- Insights: ${business.brand.domain}/ar/insights
- Companies: ${business.brand.domain}/ar/companies
- Contact: ${business.brand.domain}/ar/contact
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
