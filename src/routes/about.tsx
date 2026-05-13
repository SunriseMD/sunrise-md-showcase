import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SunriseMD" },
      {
        name: "description",
        content:
          "Tahir Hafeez Malik, MD — pulmonary, critical care, and sleep medicine fellow and Chief Fellow in NYC. Founder of SunriseMD healthcare consulting.",
      },
      { property: "og:title", content: "About — SunriseMD" },
      {
        property: "og:description",
        content:
          "Tahir Hafeez Malik, MD — pulmonary, critical care, and sleep medicine fellow and Chief Fellow in NYC. Founder of SunriseMD healthcare consulting.",
      },
    ],
  }),
  component: AboutPage,
});

const experiences = [
  {
    title: "Biomedical Engineering",
    subtitle: "Designing for clinical need, cost, durability, and implementation",
    body: "At Rice, I trained as a biomedical engineer and worked on technologies designed for low-resource settings. My senior design project, PneumaShoe, was a low-cost pneumatic compression device for VTE prevention that required not only engineering design, but also an understanding of usability, supply constraints, durability, and real-world clinical deployment.",
    skills:
      "Needs assessment, prototyping, technical design, resource-conscious product development, early feasibility evaluation.",
  },
  {
    title: "Global Health & Implementation Science",
    subtitle: "Building tools that work across settings",
    body: "In medical school, I worked on global health projects involving clinical workflow evaluation, needs assessments, and implementation planning in resource-limited environments. These experiences taught me that successful healthcare innovation depends on local context, stakeholder alignment, and the ability to design around real-world constraints.",
    skills:
      "Implementation planning, stakeholder management, cross-cultural collaboration, workflow evaluation, systems thinking.",
  },
  {
    title: "Outcomes Research & Due Diligence",
    subtitle: "Evaluating whether high-stakes clinical decisions are evidence-based",
    body: "My transplant outcomes research focused on organ discard and allocation decisions—areas where imperfect data, clinical uncertainty, and operational pressures intersect. By developing organ discard risk indices and studying donor utilization, I gained experience evaluating whether decisions are clinically justified, statistically defensible, and aligned with patient outcomes.",
    skills:
      "Clinical due diligence, risk modeling, outcomes research, data interpretation, evidence-based decision support.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">About</h1>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {siteConfig.company} — Healthcare consulting, built around clinical reality
      </p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
        <p>
          Tahir Hafeez Malik, MD is a pulmonary, critical care, and sleep medicine fellow and
          Chief Fellow in New York City, with a background in bioengineering, global health,
          outcomes research, and health system implementation. He trained in bioengineering at
          Rice University, where he focused on global health technologies, and earned his MD
          from Baylor College of Medicine with distinctions in medical education, service,
          quality improvement, health policy, and global health.
        </p>
        <p>
          Before becoming a physician, Tahir worked as a biomedical engineer designing practical
          technologies for resource-limited settings. His senior design team developed
          PneumaShoe, a low-cost, durable intermittent pneumatic compression device for venous
          thromboembolism prevention in low-resource environments. The device was recognized
          with multiple national and institutional awards, including the Rice Department of
          Bioengineering Outstanding Senior Design Project Award, the 2017 Willy Revolution
          Award for Engineering Innovation, and 3rd place at the National Biomedical
          Engineering Society Undergraduate Design Competition.
        </p>
        <p>
          During medical school, Tahir continued to focus on the question that still drives his
          work: how do we know whether an intervention will actually work for the people and
          systems it is meant to serve? Through global health projects in Malawi and The Gambia,
          he developed needs assessments, worked across international teams, and designed
          culturally tailored tools for evaluating clinical workflows in low-resource settings.
        </p>
        <p>
          His research later expanded into transplant outcomes and organ utilization, where he
          helped develop discard risk indices for pediatric liver, heart, and lung allografts.
          This work strengthened his ability to evaluate complex clinical datasets, identify the
          drivers of high-stakes decisions, and build risk models that inform whether scarce
          medical resources are being used appropriately.
        </p>
        <p>
          Across these experiences, Tahir developed a practical lens for healthcare innovation:
          good ideas are not enough. They need clinical relevance, operational feasibility,
          thoughtful implementation, and rigorous evaluation. {siteConfig.company} is built
          around that lens.
        </p>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <h2 className="font-serif text-3xl tracking-tight">Experience</h2>
        <div className="mt-8 space-y-6">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.title}
              </p>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl">{item.subtitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                {item.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                <span className="font-medium text-foreground/90">Skills built:</span>{" "}
                {item.skills}
              </p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
