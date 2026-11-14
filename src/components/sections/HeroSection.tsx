import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section id="top" className="pt-16 pb-16 sm:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Healthcare Consulting
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Physician-led consulting for health technology built on{" "}
            <em className="text-brand">clinical reality.</em>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m {siteConfig.name}, a physician-engineer and the founder of{" "}
            {siteConfig.company}, a consulting firm that helps health-tech companies decide
            whether an idea is clinically meaningful, operationally feasible, and ready for
            real-world implementation.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <img
          src={siteConfig.portraitUrl}
          alt={`Portrait of ${siteConfig.name}`}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
    </section>
  );
}
