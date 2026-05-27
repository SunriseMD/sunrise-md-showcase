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
      { property: "og:description", content: siteConfig.tagline },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <section className="pt-10 pb-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex-shrink-0">
            <div className="h-44 w-44 rounded-full border-2 border-brand/30 bg-card p-1.5 sm:h-52 sm:w-52">
              <div className="h-full w-full overflow-hidden rounded-full bg-muted">
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

          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Hi, I'm
              <br />
              <span className="text-brand">{siteConfig.name}</span>
            </h1>

            <p className="mt-5 text-base font-semibold text-brand sm:text-lg">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Chief Fellow — Pulmonary, Critical Care,
              <br className="hidden sm:block" /> and Sleep Medicine Fellowship — NYC
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="h-1 w-full bg-gradient-to-r from-brand/60 via-brand to-brand/60" />
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
              {siteConfig.bio}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
