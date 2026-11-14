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
              className="inline-flex items-center rounded-full border border-brand/50 bg-brand-soft px-5 py-1.5 text-2xl font-semibold tracking-tight text-brand-dark transition-colors hover:border-brand hover:bg-brand/10"
            >
              {company.name}
            </a>
            <p className="mt-3 text-sm text-muted-foreground">{company.tags.join(" · ")}</p>
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
