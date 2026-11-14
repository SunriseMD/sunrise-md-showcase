import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

const title = "SunriseMD — Physician-Led Healthcare Consulting";
const description =
  "Tahir Malik, MD — physician-led strategy, product, and go-to-market advising for health technology companies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ApproachSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </PageShell>
  );
}
