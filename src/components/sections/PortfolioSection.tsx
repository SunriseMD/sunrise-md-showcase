import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/site-config";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-24 border-t border-border py-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Advising Portfolio
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Companies I&apos;ve Partnered With
      </h2>
      <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-12">
        {portfolio.map((company) => (
          <article key={company.name}>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-[4/3] items-center justify-center bg-brand-soft transition-colors hover:bg-muted"
            >
              <span className="text-4xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-5xl">
                {company.name}
              </span>
            </a>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold text-foreground">{company.name}</h3>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                Visit <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{company.tags.join(" · ")}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              {company.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Advisory Focus Areas
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/80 marker:text-brand-dark">
              {company.focusAreas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
