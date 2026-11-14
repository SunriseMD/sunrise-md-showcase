import { useState } from "react";
import { Linkedin, Mail, FileText, ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";


export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const links = [
    {
      Icon: Calendar,
      label: "Calendly",
      value: "Book a 30-minute call",
      href: siteConfig.calendly,
      external: true,
    },
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
    <section id="contact" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s build something <em className="text-brand">meaningful.</em>
        </h2>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        {/* Left: intro + contact links */}
        <div className="">
          

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
                  className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:text-brand"
                >
                  <span className="flex h-8 w-8 items-center justify-center text-brand">
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
        <div className="">
          

          <h2 className="text-xl font-bold tracking-tight text-foreground">Send a Message</h2>

          {submitted ? (
            <div className="mt-6 border-t border-brand py-6 text-center">
              
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
                  className="mt-1.5 w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-0"
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
                  className="mt-1.5 w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
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
        className="mt-1.5 w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-0"
      />
    </label>
  );
}
