import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { portfolio } from "@/lib/site-config";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Advising Portfolio — SunriseMD" },
      {
        name: "description",
        content:
          "A selection of healthcare and health technology companies SunriseMD has advised.",
      },
      { property: "og:title", content: "Advising Portfolio — SunriseMD" },
      {
        property: "og:description",
        content:
          "A selection of healthcare and health technology companies SunriseMD has advised.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <PageShell>
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Advising Portfolio
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Companies I&apos;ve Partnered With
        </p>
      </header>

      <div className="space-y-10 border-t border-border pt-12 pb-16">
        {portfolio.map((company) => (
          <article
            key={company.name}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/60 via-brand to-brand/60" />

            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {company.name}
              </h2>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-brand-dark"
                aria-label={`Visit ${company.name}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            {company.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/40 bg-brand-soft px-3 py-1 text-xs font-medium text-brand-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              {company.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {company.focusAreas.length > 0 && (
              <div className="mt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">
                  Advisory Focus Areas
                </h3>
                <ul className="mt-3 space-y-2 text-base text-foreground/85 marker:text-brand-dark">
                  <ul className="list-disc space-y-2 pl-5 marker:text-brand-dark">
                    {company.focusAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
