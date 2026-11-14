const helpItems = [
  { title: "Strategy", body: "Focused support on market positioning, clinical use cases, and founder-level strategic decisions." },
  { title: "Commercial", body: "Provider-facing perspective on adoption barriers, stakeholder needs, clinical value propositions, and partnership strategy." },
  { title: "Product", body: "Clinical workflow review, product feedback, implementation considerations, and real-world usability insight." },
  { title: "Fundraising", body: "Support with diligence preparation, clinical narrative, evidence framing, and investor-facing materials." },
];

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-24 border-t border-border py-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Our Approach
      </p>
      <blockquote className="mt-6 max-w-3xl text-2xl font-bold italic leading-snug tracking-tight text-foreground sm:text-4xl">
        &ldquo;Healthcare strategy works best when business goals, clinical reality, and
        implementation are aligned from the start.&rdquo;
      </blockquote>
      <div className="mt-10 grid gap-6 text-base leading-relaxed text-foreground/80 md:grid-cols-2 md:gap-12">
        <p>
          SunriseMD is an independent consulting practice supporting healthcare and health
          technology companies at pivotal moments: launching a product, entering a new market,
          preparing for fundraising, or redesigning a clinical workflow that is not performing
          the way it should.
        </p>
        <p>
          The work is grounded in a physician&apos;s on-the-ground perspective. I help teams
          understand the clinical need of the hour, pressure-test assumptions, and evaluate
          whether a strategy, product, or workflow is likely to make sense for the clinicians
          and health systems expected to use it. Engagements are intentionally focused and
          hands-on.
        </p>
      </div>

      <h2 className="mt-24 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How I Help
      </h2>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {helpItems.map((item) => (
          <div key={item.title}>
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
