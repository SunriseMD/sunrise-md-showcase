import { Linkedin, Mail, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const items = [
    { href: siteConfig.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail, external: false },
    { href: siteConfig.cvUrl, label: "CV", Icon: FileText, external: true },
  ];

  return (
    <footer className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10">
      <div className="border-t border-border pt-8">
        <div className="flex items-center justify-center gap-4">
          {items.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
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
