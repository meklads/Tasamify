import { business } from "@/config/business";

export function GET() {
  const body = `# Tasami Group

> Parent group for specialist companies and Tasami AI.

## Companies
- Graphics House: ${business.companies[0].href}
- Bees Motion: ${business.companies[1].href}
- Turriva: ${business.companies[2].href}

## Tasami AI
Commercial arm for turning repetitive company operations into working intelligent systems.
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
