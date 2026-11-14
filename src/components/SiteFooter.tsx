import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const items = [
    { href: `mailto:${siteConfig.email}`, label: "Email", external: false },
    { href: siteConfig.linkedin, label: "LinkedIn", external: true },
    { href: siteConfig.cvUrl, label: "CV", external: true },
  ];
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.company}
        </p>
        <div className="flex gap-8">
          {items.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
