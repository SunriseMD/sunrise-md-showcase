import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Tahir" },
  { to: "/about-sunrisemd", label: "About SunriseMD" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="w-full pt-10 pb-6">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 px-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="rounded-full border border-border bg-background px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{
              className:
                "rounded-full border border-foreground bg-foreground px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-background",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
