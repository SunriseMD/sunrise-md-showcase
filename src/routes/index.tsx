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
      <div className="flex flex-col items-center text-center">
        <div className="h-40 w-40 overflow-hidden rounded-full bg-muted ring-1 ring-border">
          {/* Replace /portrait.jpg in /public to show your photo */}
          <img
            src={siteConfig.portraitUrl}
            alt={`Portrait of ${siteConfig.name}`}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <h1 className="mt-8 font-serif text-4xl tracking-tight sm:text-5xl">
          Hi, I'm {siteConfig.name}
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {siteConfig.tagline}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {siteConfig.subTagline}
        </p>

        <div className="mt-10 w-full border-t border-border" />

        <p className="mt-10 text-base leading-relaxed text-foreground/80 sm:text-lg">
          {siteConfig.bio}
        </p>
      </div>
    </PageShell>
  );
}
