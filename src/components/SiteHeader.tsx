import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Tahir" },
  { to: "/about-sunrisemd", label: "Our Approach" },
  { to: "/portfolio", label: "Advising Portfolio" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  return (
    <header className="w-full border-b border-border bg-card">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 px-4 py-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="rounded-full px-5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            activeProps={{
              className:
                "rounded-full bg-brand-soft px-5 py-2 text-sm font-medium text-brand",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
