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
            className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-muted-foreground/40 hover:bg-muted hover:text-foreground"
            activeProps={{
              className:
                "!border-brand/50 !bg-brand-soft !text-brand-dark hover:!text-brand-dark",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
