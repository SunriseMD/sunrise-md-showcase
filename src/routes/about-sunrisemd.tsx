import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/about-sunrisemd")({
  head: () => ({
    meta: [
      { title: "Our Approach — SunriseMD" },
      {
        name: "description",
        content:
          "Our Approach: an independent healthcare consulting practice partnering with founders and operators to build the next generation of health technology.",
      },
      { property: "og:title", content: "Our Approach — SunriseMD" },
      {
        property: "og:description",
        content:
          "About SunriseMD: an independent healthcare consulting practice partnering with founders and operators to build the next generation of health technology.",
      },
    ],
  }),
  component: AboutSunriseMDPage,
});

function AboutSunriseMDPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
        Our Approach
      </h1>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Healthcare consulting, built around clinical reality
      </p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
        <p>
          SunriseMD is an independent consulting practice supporting healthcare and health
          technology companies at pivotal moments: launching a product, entering a new
          market, preparing for fundraising, or redesigning a clinical workflow that is
          not performing the way it should.
        </p>
        <p>
          The work is hands-on and highly practical. Engagements are intentionally
          focused, with close collaboration on strategy, product positioning, clinical
          validation, provider partnerships, diligence preparation, and workflow design.
        </p>
        <p>
          Every engagement is grounded in a simple belief: healthcare strategy works best
          when business goals, clinical reality, and implementation are aligned from the
          start.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="font-serif text-2xl">How I help</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Strategy", body: "Market entry, positioning, and growth planning." },
            { title: "Commercial", body: "Provider partnerships, payer strategy, and GTM." },
            { title: "Product", body: "Clinical workflow design and product validation." },
            { title: "Fundraising", body: "Diligence prep, narrative, and investor materials." },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-foreground/80">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
