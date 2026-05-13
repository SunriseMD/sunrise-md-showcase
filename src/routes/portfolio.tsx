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
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Advising Portfolio</h1>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Companies I've partnered with
      </p>

      <div className="mt-10 space-y-10">
        {portfolio.map((company) => (
          <article
            key={company.name}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-2xl">{company.name}</h2>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Visit ${company.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {company.tags.length > 0 && (
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {company.tags.join(" · ")}
              </p>
            )}

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/80">
              {company.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {company.focusAreas.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Advisory focus areas
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                  {company.focusAreas.map((area) => (
                    <li key={area} className="flex gap-2">
                      <span className="text-muted-foreground">—</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
