import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import malawiOxygenImg from "@/assets/malawi-oxygen-repair.jpg";
import pneumaShoePrototypeImg from "@/assets/pneumashoe-prototype.jpg";
import pneumaShoeDisplayImg from "@/assets/pneumashoe-display.jpg";
import atsAwardPresentationImg from "@/assets/ats-award-presentation.jpg";
import indiaHomeAssessmentImg from "@/assets/india-home-assessment.jpg";
import indiaAirPurifierPartsImg from "@/assets/india-air-purifier-parts.jpg";
import indiaPatientInterviewImg from "@/assets/india-patient-interview.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tahir — SunriseMD" },
      {
        name: "description",
        content:
          "Tahir Hafeez Malik, MD — pulmonary, critical care, and sleep medicine physician at Mount Sinai. Founder of SunriseMD healthcare consulting.",
      },
      { property: "og:title", content: "About Tahir — SunriseMD" },
      {
        property: "og:description",
        content:
          "Tahir Hafeez Malik, MD — pulmonary, critical care, and sleep medicine physician at Mount Sinai. Founder of SunriseMD healthcare consulting.",
      },
    ],
  }),
  component: AboutPage,
});

type GalleryImage = { src: string; alt: string; caption: string };
type Gallery = {
  afterParagraph: number;
  columns: 1 | 2 | 3;
  images: GalleryImage[];
  variant?: "floatRight" | "smallLeft";
};
type Callout = { kind: "callout"; emoji: string; html: string };
type Heading = { kind: "heading"; text: string };
type BulletList = { kind: "bullets"; intro: string; items: string[] };
type Block = string | Callout | Heading | BulletList;

type Section = {
  title: string;
  subtitle: string;
  body: Block[];
  galleries?: Gallery[];
};

const sections: Section[] = [
  {
    title: "Biomedical Engineering & Device Design",
    subtitle: "Building Around Clinical Need, Cost, and Durability",
    body: [
      "Before becoming a physician, I trained as a biomedical engineer. That background taught me to approach healthcare problems by first understanding the user, the environment, the constraints, and the failure points.",
      "At Rice, I helped develop PneumaShoe, a low-cost, durable intermittent pneumatic compression device designed to prevent venous thromboembolism in low-resource settings. The project required understanding clinical workflows, cost constraints, durability requirements, and the realities of deployment in settings where conventional medical devices may be too expensive or difficult to maintain.",
      {
        kind: "bullets",
        intro: "The project received multiple recognitions, including:",
        items: [
          "Rice Department of Bioengineering Outstanding Senior Design Project Award",
          "2017 Willy Revolution Award for Engineering Innovation",
          "Selection for the Design of Medical Devices Conference Student Design Showcase",
          "Selection for the Rice 360° Global Health Design Competition",
          "3rd place at the National Biomedical Engineering Society Undergraduate Design Competition",
        ],
      },
      "That experience shaped how I think about innovation: a device, tool, or intervention is only as valuable as its ability to solve a real problem in the environment where it will actually be used.",
    ],
    galleries: [
      {
        afterParagraph: 2,
        columns: 2,
        images: [
          {
            src: pneumaShoePrototypeImg,
            alt: "Inside view of the medium-fidelity PneumaShoe prototype.",
            caption: "Inside of the medium-fidelity PneumaShoe prototype.",
          },
          {
            src: pneumaShoeDisplayImg,
            alt: "PneumaShoe user display and cuff.",
            caption: "PneumaShoe user display and cuff.",
          },
        ],
      },
    ],
  },
  {
    title: "Global Health & Implementation Science",
    subtitle: "Designing Interventions Around Real-World Constraints",
    body: [
      "My global health work has focused on a central implementation question: how do we design healthcare interventions that are not only evidence-based, but feasible in the environments where they need to work?",
      { kind: "heading", text: "Malawi & The Gambia — Field Work in Low-Resource Settings" },
      "Earlier in my training, I worked on global health projects in Malawi and The Gambia that taught me how to approach clinical problems through the lens of local context. In Malawi, I investigated failure modes in oxygen concentrators and helped design durable, locally sourced engineering solutions for low-resource settings. In The Gambia, I helped develop needs assessments and surveys to evaluate maternal and newborn safety workflows across rural and urban clinical sites.",
      { kind: "heading", text: "NYU — Implementation Research in India" },
      "During residency at NYU, I worked with Dr. Rajesh Vedanthan's global health lab studying whether air purifiers could affect the progression of heart failure in India. As part of the Exposures Committee, I helped design study protocols with long-term human-resource and financial constraints in mind. Through the Capacity Building Committee, I contributed to coursework and SMART goals intended to strengthen local research infrastructure in India.",
      {
        kind: "callout",
        emoji: "💡",
        html: "This work was supported by a <strong>$20,000 Institutes of Health Collaboration grant</strong> and deepened my interest in implementation science, capacity building, and pragmatic evaluation in low- and middle-income settings.",
      },
      "Together, these experiences shaped how I evaluate healthcare innovation today. A promising idea is only meaningful if it can survive contact with real-world constraints: staffing, cost, culture, infrastructure, incentives, and the daily workflow of the people expected to use it.",
    ],
    galleries: [
      {
        afterParagraph: 2,
        columns: 1,
        variant: "floatRight",
        images: [
          {
            src: malawiOxygenImg,
            alt: "Repairing an oxygen concentrator at Kamuzu Central Hospital in Lilongwe, Malawi.",
            caption: "Repairing an oxygen concentrator at Kamuzu Central Hospital in Lilongwe, Malawi.",
          },
        ],
      },
      {
        afterParagraph: 5,
        columns: 3,
        images: [
          {
            src: indiaHomeAssessmentImg,
            alt: "Assessing a patient's home in India for air purifier placement.",
            caption: "Assessing a patient's home in India for air purifier placement.",
          },
          {
            src: indiaAirPurifierPartsImg,
            alt: "Parts for a novel low-cost air purifier used in the study.",
            caption: "Parts for a novel low-cost air purifier used in the study.",
          },
          {
            src: indiaPatientInterviewImg,
            alt: "Baseline patient interview with a participant in Delhi.",
            caption: "Baseline patient interview with a participant in Delhi.",
          },
        ],
      },
    ],
  },
  {
    title: "Outcomes Research & Clinical Due Diligence",
    subtitle: "Evaluating High-Stakes Decisions with Evidence",
    body: [
      "My research has also focused on high-stakes clinical decisions where data, uncertainty, and resource constraints intersect.",
      "In transplantation, I helped develop organ discard risk indices designed to better understand why donor organs are accepted or discarded. This work included research on pediatric liver allograft discard, heart transplantation discard risk, and machine-learning approaches to donor lung discard.",
      {
        kind: "callout",
        emoji: "🏆",
        html: "The lung discard work was recognized with the <strong>American Thoracic Society Public Advisory Roundtable Scholarship</strong>.",
      },
      "This research strengthened the way I approach due diligence in healthcare. When evaluating a clinical product, intervention, or system-level strategy, the key questions are rarely just, \u201CDoes this work?\u201D",
      "For whom does it work? Under what conditions? Compared to what? At what cost? And what would it take to implement it safely and sustainably?",
      "Those are the questions that connect outcomes research to real-world decision-making.",
    ],
    galleries: [
      {
        afterParagraph: 2,
        columns: 1,
        variant: "smallLeft",
        images: [
          {
            src: atsAwardPresentationImg,
            alt: "Presenting the Machine Learning Lung Allograft Discard Risk Index at ATS.",
            caption: "Presenting the Machine Learning Lung Allograft Discard Risk Index at ATS.",
          },
        ],
      },
    ],
  },
  {
    title: "Management & Cross-Functional Leadership",
    subtitle: "Turning Ideas into Coordinated Action",
    body: [
      "Healthcare implementation depends on more than evidence. It requires coordination across people, institutions, incentives, and timelines.",
      "Throughout my training, I have worked across multidisciplinary teams that required both operational planning and stakeholder management. During the COVID-19 pandemic, I founded and coordinated city-wide blood drives in Houston, facilitating collaboration between trauma surgery leadership, the Gulf Coast Regional Blood Center, Rice EMS, and medical student volunteers. The effort collected more than <strong>300 bags of blood across five drives</strong> during a period of national shortage.",
      "I have also led student, research, and clinical teams, including serving as Chief Fellow at Mount Sinai. These experiences have helped me understand that implementation is not simply about having the right idea — it is about building the structure, relationships, and execution plan needed to make that idea work.",
    ],
  },
];

function Paragraph({ html }: { html: string }) {
  return <p dangerouslySetInnerHTML={{ __html: html }} />;
}

function GalleryBlock({ gallery }: { gallery: Gallery }) {
  const colClass =
    gallery.columns === 3
      ? "sm:grid-cols-3"
      : gallery.columns === 2
        ? "sm:grid-cols-2"
        : "";
  return (
    <div className={`my-8 grid grid-cols-1 gap-4 ${colClass}`}>
      {gallery.images.map((img) => (
        <figure
          key={img.src}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-56 w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-3 py-2 text-xs text-muted-foreground">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function CalloutBlock({ emoji, html }: { emoji: string; html: string }) {
  return (
    <div className="my-6 flex gap-3 rounded-xl border-l-4 border-brand bg-brand-soft/70 px-4 py-3 text-foreground/90">
      <span className="text-xl leading-7" aria-hidden>
        {emoji}
      </span>
      <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {section.title}
      </h2>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {section.subtitle}
      </p>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
        {section.body.map((block, idx) => {
          const galleriesHere =
            section.galleries?.filter((g) => g.afterParagraph === idx) ?? [];
          return (
            <Fragment key={idx}>
              {typeof block === "string" ? (
                <Paragraph html={block} />
              ) : block.kind === "heading" ? (
                <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                  {block.text}
                </h3>
              ) : block.kind === "bullets" ? (
                <div>
                  <p>{block.intro}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-6">
                    {block.items.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <CalloutBlock emoji={block.emoji} html={block.html} />
              )}
              {galleriesHere.map((g, gi) => (
                <GalleryBlock key={gi} gallery={g} />
              ))}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About Me
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Physician · Biomedical Engineer · Implementation-Minded Strategist
        </p>
      </header>

      <section className="border-t border-border py-12">
        <div className="space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            I&apos;m Tahir Hafeez Malik, MD, a pulmonary, critical care, and sleep
            medicine physician at Mount Sinai with a background in biomedical
            engineering, global health, outcomes research, and health system
            implementation. My work has consistently focused on one question:
          </p>
          <div className="rounded-xl border-l-4 border-brand bg-brand-soft/70 px-5 py-4 italic text-foreground/90">
            How do we take promising healthcare ideas and determine whether they are
            clinically meaningful, operationally feasible, and ready for real-world
            implementation?
          </div>
          <p>That question is the foundation of SunriseMD.</p>
          <p>
            My path into medicine started through engineering. At Rice University, I
            studied bioengineering with a focus in global health technologies. At
            Baylor College of Medicine, I continued that work through health policy,
            global health, quality improvement, and clinical research. I later trained
            in internal medicine at NYU and am now completing fellowship in Pulmonary
            and Critical Care in New York City, where I serve as the Chief Fellow.
          </p>
          <p>
            Across those experiences, I have built a practical framework for evaluating
            healthcare innovation: understand the clinical problem, assess the evidence,
            pressure-test feasibility, and design for implementation.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <SectionBlock key={section.title} section={section} />
      ))}

      <section className="border-t border-border py-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Why SunriseMD
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            SunriseMD is built around the perspective I have developed across
            engineering, medicine, global health, implementation science, and outcomes
            research.
          </p>
          <p>
            I believe healthcare innovation needs disciplined evaluation. New
            technologies, clinical programs, and AI-enabled tools should not be judged
            by novelty alone. They should be evaluated by whether they address a
            meaningful clinical problem, whether the evidence is strong, whether the
            implementation pathway is realistic, and whether they can improve care
            without adding unnecessary complexity.
          </p>
          <div className="rounded-xl border-l-4 border-brand bg-brand-soft/70 px-5 py-4 italic text-foreground/90">
            My goal with SunriseMD is to help bridge that gap: translating evidence
            into strategy, strategy into implementation, and implementation into
            measurable clinical value.
          </div>
        </div>
      </section>
    </PageShell>
  );
}
