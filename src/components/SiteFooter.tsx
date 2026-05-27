import { Linkedin, Mail, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const items = [
    { href: siteConfig.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail, external: false },
    { href: siteConfig.cvUrl, label: "CV", Icon: FileText, external: true },
  ];

  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="flex items-center justify-center gap-3">
          {items.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-brand-soft hover:text-brand"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
