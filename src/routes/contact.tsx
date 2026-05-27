import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
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
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

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
      value: "Download CV",
      href: siteConfig.cvUrl,
      external: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("firstName") ?? "");
    const last = String(data.get("lastName") ?? "");
    const email = String(data.get("email") ?? "");
    const role = String(data.get("role") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Name: ${first} ${last}%0D%0AEmail: ${email}%0D%0ARole: ${role}%0D%0A%0D%0A${encodeURIComponent(
      message,
    )}`;
    setFirstName(first);
    setSubmitted(true);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "New inquiry via SunriseMD",
    )}&body=${body}`;
  };

  return (
    <PageShell>
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Let&apos;s Talk About Your Work
        </p>
      </header>

      <div className="grid gap-8 border-t border-border pt-12 pb-16 md:grid-cols-2">
        {/* Left: intro + contact links */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/60 via-brand to-brand/60" />

          <div className="space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Whether you&apos;re building a healthcare product, redesigning a clinical workflow,
              or evaluating a company at the intersection of medicine and technology, I&apos;d be
              glad to connect.
            </p>
            <p>
              I work with founders, operators, and investors who are looking for practical
              clinical insight from a physician currently working within the healthcare system.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {links.map(({ Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-brand/50 hover:bg-brand-soft/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-0.5 text-base font-medium text-foreground">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/60 via-brand to-brand/60" />

          <h2 className="text-xl font-bold tracking-tight text-foreground">Send a Message</h2>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-brand/30 bg-brand-soft/50 p-6 text-center">
              <div className="text-3xl">✅</div>
              <p className="mt-2 text-base font-medium text-foreground">
                Thanks for reaching out{firstName ? `, ${firstName}` : ""}!
              </p>
              <p className="mt-1 text-sm text-muted-foreground">I&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First Name" name="firstName" placeholder="Jane" required />
                <Field label="Last Name" name="lastName" placeholder="Smith" required />
              </div>
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
              <div>
                <Label>I am a</Label>
                <select
                  name="role"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                >
                  <option value="" disabled>
                    Select your role…
                  </option>
                  <option>Founder / CEO</option>
                  <option>Operator / Executive</option>
                  <option>Investor / VC</option>
                  <option>Clinician</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Label>How can I help?</Label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or question…"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </label>
  );
}
