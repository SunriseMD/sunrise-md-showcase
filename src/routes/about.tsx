import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import malawiOxygenImg from "@/assets/malawi-oxygen-repair.jpg";
import pneumaShoePrototypeImg from "@/assets/pneumashoe-prototype.jpg";
import pneumaShoeDisplayImg from "@/assets/pneumashoe-display.jpg";
import atsAwardPresentationImg from "@/assets/ats-award-presentation.jpg";
import atsAwardCheckImg from "@/assets/ats-award-check.jpg";

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

const sections = [
  {
    title: "Biomedical Engineering & Device Design",
    subtitle: "Building around clinical need, cost, and durability",
    gallery: {
      attachAfterParagraph: 2,
      images: [
        {
          src: pneumaShoePrototypeImg,
          alt: "Inside view of the medium-fidelity PneumaShoe prototype showing pumps, tubing, and circuitry.",
          caption: "Inside of the medium-fidelity PneumaShoe prototype.",
        },
        {
          src: pneumaShoeDisplayImg,
          alt: "PneumaShoe user display with status LEDs and a pressure readout next to the inflatable cuff.",
          caption: "PneumaShoe user display and cuff.",
        },
      ],
    },
    body: [
      "Before becoming a physician, I trained as a biomedical engineer. That background taught me to approach healthcare problems by first understanding the user, the environment, the constraints, and the failure points.",
      "At Rice, I helped develop PneumaShoe, a low-cost, durable intermittent pneumatic compression device designed to prevent venous thromboembolism in low-resource settings. The project required more than technical design. It required understanding clinical workflows, cost constraints, durability requirements, and the realities of deployment in settings where conventional medical devices may be too expensive or difficult to maintain.",
      "The project received multiple recognitions, including the Rice Department of Bioengineering Outstanding Senior Design Project Award, the 2017 Willy Revolution Award for Engineering Innovation, selection for the Design of Medical Devices Conference Student Design Showcase, selection for the Rice 360° Global Health Design Competition, and 3rd place at the National Biomedical Engineering Society Undergraduate Design Competition.",
      "That experience shaped how I think about innovation: a device, tool, or intervention is only as valuable as its ability to solve a real problem in the environment where it will actually be used.",
    ],
  },
  {
    title: "Global Health & Implementation Science",
    subtitle: "Designing interventions around real-world constraints",
    image: {
      src: malawiOxygenImg,
      alt: "Repairing an oxygen concentrator alongside a local technician at Kamuzu Central Hospital in Lilongwe, Malawi.",
      caption: "Repairing an oxygen concentrator at Kamuzu Central Hospital in Lilongwe, Malawi.",
      attachToParagraph: 2,
    },
    body: [
      "My global health work has focused on a central implementation question: how do we design healthcare interventions that are not only evidence-based, but feasible in the environments where they need to work?",
      { heading: "Malawi & The Gambia — Field Work in Low-Resource Settings" },
      "Earlier in my training, I worked on global health projects in Malawi and The Gambia that taught me how to approach clinical problems through the lens of local context. In Malawi, I investigated failure modes in oxygen concentrators and helped design durable, locally sourced engineering solutions for low-resource settings. In The Gambia, I helped develop needs assessments and surveys to evaluate maternal and newborn safety workflows across rural and urban clinical sites.",
      { heading: "NYU — Implementation Research in India" },
      "During residency at NYU, I worked with Dr. Rajesh Vedanthan's global health lab studying whether air purifiers could affect the progression of heart failure in India. As part of the Exposures Committee, I helped design study protocols with long-term human-resource and financial constraints in mind. Through the Capacity Building Committee, I contributed to coursework and SMART goals intended to strengthen local research infrastructure in India. This work was supported by a $20,000 Institutes of Health Collaboration grant and deepened my interest in implementation science, capacity building, and pragmatic evaluation in low- and middle-income settings.",
      "Together, these experiences shaped how I evaluate healthcare innovation today. A promising idea is only meaningful if it can survive contact with real-world constraints: staffing, cost, culture, infrastructure, incentives, and the daily workflow of the people expected to use it.",
    ],
  },
  {
    title: "Outcomes Research & Clinical Due Diligence",
    subtitle: "Evaluating high-stakes decisions with evidence",
    gallery: {
      attachAfterParagraph: 1,
      images: [
        {
          src: atsAwardPresentationImg,
          alt: "Presenting machine-learning research on donor lung discard at the American Thoracic Society conference.",
          caption: "Presenting the Machine Learning Lung Allograft Discard Risk Index at ATS.",
        },
        {
          src: atsAwardCheckImg,
          alt: "Receiving the ATS Public Advisory Roundtable Scholarship award.",
          caption: "Receiving the ATS Public Advisory Roundtable Scholarship for the Lung Allograft Discard Risk Index.",
        },
      ],
    },
    body: [
      "My research has also focused on high-stakes clinical decisions where data, uncertainty, and resource constraints intersect.",
      "In transplantation, I helped develop organ discard risk indices designed to better understand why donor organs are accepted or discarded. This work included research on pediatric liver allograft discard, heart transplantation discard risk, and machine-learning approaches to donor lung discard. The lung discard work was recognized with the American Thoracic Society Public Advisory Roundtable Scholarship.",
      "This research strengthened the way I approach due diligence in healthcare. When evaluating a clinical product, intervention, or system-level strategy, the key questions are rarely just, \u201CDoes this work?\u201D The better questions are:",
      "For whom does it work? Under what conditions? Compared to what? At what cost? And what would it take to implement it safely and sustainably?",
      "Those are the questions that connect outcomes research to real-world decision-making.",
    ],
  },
  {
    title: "Management & Cross-Functional Leadership",
    subtitle: "Turning ideas into coordinated action",
    body: [
      "Healthcare implementation depends on more than evidence. It requires coordination across people, institutions, incentives, and timelines.",
      "Throughout my training, I have worked across multidisciplinary teams that required both operational planning and stakeholder management. During the COVID-19 pandemic, I founded and coordinated city-wide blood drives in Houston, facilitating collaboration between trauma surgery leadership, the Gulf Coast Regional Blood Center, Rice EMS, and medical student volunteers. The effort collected more than 300 bags of blood across five drives during a period of national shortage.",
      "I have also led student, research, and clinical teams, including serving as Chief Fellow at Mount Sinai. These experiences have helped me understand that implementation is not simply about having the right idea. It is about building the structure, relationships, and execution plan needed to make that idea work.",
    ],
  },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="mt-10">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">About Me</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Physician · Biomedical Engineer · Implementation-Minded Strategist
        </p>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
          <p>
            I'm Tahir Hafeez Malik, MD, a pulmonary, critical care, and sleep medicine
            physician at Mount Sinai with a background in biomedical engineering, global
            health, outcomes research, and health system implementation. My work has
            consistently focused on one question:
          </p>
          <p className="border-l-2 border-foreground/30 pl-4 italic">
            How do we take promising healthcare ideas and determine whether they are
            clinically meaningful, operationally feasible, and ready for real-world
            implementation?
          </p>
          <p>That question is the foundation of SunriseMD.</p>
          <p>
            My path into medicine started through engineering. At Rice University, I
            studied bioengineering with a focus in global health technologies. At Baylor
            College of Medicine, I continued that work through health policy, global
            health, quality improvement, and clinical research. I later trained in
            internal medicine at NYU and am now completing fellowship in pulmonary,
            critical care, and sleep medicine at Mount Sinai, where I also serve as
            Chief Fellow.
          </p>
          <p>
            Across those experiences, I have built a practical framework for evaluating
            healthcare innovation: understand the clinical problem, assess the evidence,
            pressure-test feasibility, and design for implementation.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {section.subtitle}
          </p>
          <div className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg [&>p+p]:mt-5">
            {section.body.map((item, idx) => (
              <Fragment key={idx}>
                {section.image && section.image.attachToParagraph === idx && (
                  <figure className="mb-5 sm:float-right sm:ml-6 sm:mb-3 sm:w-[55%] md:w-[48%]">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full rounded-2xl border border-foreground/10 object-cover shadow-sm"
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-xs italic text-muted-foreground">
                      {section.image.caption}
                    </figcaption>
                  </figure>
                )}
                {typeof item === "string" ? (
                  <p>{item}</p>
                ) : (
                  <h3 className="mt-8 font-serif text-xl tracking-tight text-foreground first:mt-0 sm:text-2xl">
                    {item.heading}
                  </h3>
                )}
                {section.gallery && section.gallery.attachAfterParagraph === idx && (
                  <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {section.gallery.images.map((img) => (
                      <figure key={img.src}>
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full rounded-2xl border border-foreground/10 object-cover shadow-sm"
                          loading="lazy"
                        />
                        <figcaption className="mt-2 text-xs italic text-muted-foreground">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
            <div className="clear-both" />
          </div>
        </section>
      ))}

      <section className="mt-16">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Why SunriseMD</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
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
          <p>
            My goal with SunriseMD is to help bridge that gap: translating evidence into
            strategy, strategy into implementation, and implementation into measurable
            clinical value.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
