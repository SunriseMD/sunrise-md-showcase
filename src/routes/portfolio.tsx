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

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {portfolio.map((company) => (
          <a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
          >
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-muted">
              {company.logoUrl ? (
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="font-serif text-2xl text-muted-foreground">
                  {company.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <h2 className="font-serif text-xl">{company.name}</h2>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              {company.description}
            </p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
