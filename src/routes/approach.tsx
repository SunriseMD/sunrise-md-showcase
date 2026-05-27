import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

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

const helpItems = [
  {
    emoji: "🎯",
    title: "Strategy",
    body: "Focused support on market positioning, clinical use cases, and founder-level strategic decisions.",
  },
  {
    emoji: "🤝",
    title: "Commercial",
    body: "Provider-facing perspective on adoption barriers, stakeholder needs, clinical value propositions, and partnership strategy.",
  },
  {
    emoji: "🔬",
    title: "Product",
    body: "Clinical workflow review, product feedback, implementation considerations, and real-world usability insight.",
  },
  {
    emoji: "📈",
    title: "Fundraising",
    body: "Support with diligence preparation, clinical narrative, evidence framing, and investor-facing materials.",
  },
];

function AboutSunriseMDPage() {
  return (
    <PageShell>
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Approach
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Healthcare Consulting, Built Around Clinical Reality
        </p>
      </header>

      <section className="border-t border-border pt-12">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/60 via-brand to-brand/60" />
          <div className="space-y-5 text-base leading-relaxed text-foreground/85">
            <p>
              SunriseMD is an independent consulting practice supporting healthcare and
              health technology companies at pivotal moments: launching a product,
              entering a new market, preparing for fundraising, or redesigning a
              clinical workflow that is not performing the way it should.
            </p>
            <p>
              The work is grounded in a physician&apos;s on-the-ground perspective. I
              help teams understand the clinical need of the hour, pressure-test
              assumptions, and evaluate whether a strategy, product, or workflow is
              likely to make sense for the clinicians and health systems expected to
              use it.
            </p>
            <p>
              Engagements are intentionally focused and hands-on, with support across
              product positioning, clinical workflow review, provider-facing strategy,
              diligence preparation, and investor-facing materials.
            </p>
            <div className="mt-2 flex gap-3 rounded-xl border-l-4 border-brand bg-brand-soft/70 px-4 py-3 text-foreground/90">
              <span className="text-brand not-italic" aria-hidden>
                ✦
              </span>
              <p className="italic">
                Healthcare strategy works best when business goals, clinical reality,
                and implementation are aligned from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How I Help
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {helpItems.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-2xl" aria-hidden>
                {item.emoji}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
