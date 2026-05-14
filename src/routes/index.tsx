import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SunriseMD — Healthcare Consulting" },
      {
        name: "description",
        content: `${siteConfig.tagline}. ${siteConfig.bio.slice(0, 120)}`,
      },
      { property: "og:title", content: "SunriseMD — Healthcare Consulting" },
      {
        property: "og:description",
        content: siteConfig.tagline,
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        <div className="flex-shrink-0">
          <div className="h-64 w-64 rounded-sm border border-border bg-background p-1.5 md:h-80 md:w-80">
            <div className="h-full w-full overflow-hidden rounded-sm bg-muted">
              <img
                src={siteConfig.portraitUrl}
                alt={`Portrait of ${siteConfig.name}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <h1 className="mb-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            Hi, I'm {siteConfig.name}
          </h1>

          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-xs font-light text-muted-foreground/80 sm:text-sm">
              {siteConfig.subTagline}
            </p>
          </div>

          <div className="my-8 h-px w-full bg-border" />

          <p className="max-w-lg text-base leading-relaxed text-foreground/80">
            {siteConfig.bio}
          </p>
        </div>
      </div>
    </PageShell>
  );
}
