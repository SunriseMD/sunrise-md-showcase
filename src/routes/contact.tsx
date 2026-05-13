import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, FileText } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SunriseMD" },
      {
        name: "description",
        content: `Get in touch with ${siteConfig.company} about healthcare consulting engagements.`,
      },
      { property: "og:title", content: "Contact Us — SunriseMD" },
      {
        property: "og:description",
        content: `Get in touch with ${siteConfig.company} about healthcare consulting engagements.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const links = [
    {
      Icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: siteConfig.linkedin,
      external: true,
    },
    {
      Icon: FileText,
      label: "CV",
      value: "Download CV (PDF)",
      href: siteConfig.cvUrl,
      external: true,
    },
  ];

  return (
    <PageShell>
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Get in touch</h1>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Let's talk about your work
      </p>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
        <p>
          Whether you're building a healthcare product, redesigning a clinical workflow, or
          evaluating a company at the intersection of medicine and technology, I'd be glad to
          connect.
        </p>
        <p>
          I work with founders, operators, and investors who are looking for practical clinical
          insight from a physician currently working within the healthcare system.
        </p>
      </div>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {links.map(({ Icon, label, value, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 py-5 transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </span>
                <span className="mt-0.5 text-base text-foreground">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
