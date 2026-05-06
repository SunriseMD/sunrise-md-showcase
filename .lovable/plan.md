## SunriseMD — Healthcare Consulting Site

A clean, minimalist multi-page site inspired by shermanleung.com: lots of whitespace, centered narrow column, serif-tinged typography, pill-shaped nav, circular portrait, subtle dividers, and small icon-row for socials in the footer.

### Design system
- Light, airy palette: near-white background (`oklch(0.99 0 0)`), dark slate text, subtle gray dividers.
- Pill-button nav at top, centered.
- Serif headings (e.g. system serif / Georgia stack via `font-serif`), sans body.
- Narrow max-width content column (~640px), generous vertical spacing.
- Update `src/styles.css` tokens + meta tags in `__root.tsx` (title: "SunriseMD — Healthcare Consulting").

### Pages (separate TanStack routes)
1. `src/routes/index.tsx` — Home
   - Circular portrait placeholder
   - "Hi, I'm [Your Name]" heading (placeholder, easy to edit)
   - Tagline: "Founder, SunriseMD — Healthcare Consulting"
   - Short bio paragraph (placeholder)
   - Footer icon row: LinkedIn, Email, CV
2. `src/routes/about.tsx` — About / SunriseMD
   - What SunriseMD does, approach, services overview
3. `src/routes/portfolio.tsx` — Portfolio
   - Grid of company cards: logo + name + 1-2 line description of role
   - 3 placeholder companies ready to be swapped out
4. `src/routes/contact.tsx` — Contact
   - LinkedIn link, email, link to CV PDF

### Shared layout
- Header component (`src/components/SiteHeader.tsx`) with pill nav: Home / About / Portfolio / Contact, using `<Link>` with `activeProps` for the active state.
- Footer component (`src/components/SiteFooter.tsx`) with LinkedIn, email, CV (PDF) icons using lucide-react.
- Render both inside `__root.tsx`'s `RootComponent` wrapping `<Outlet />`.

### CV & LinkedIn handling
- CV link points to `/cv.pdf` — you drop the PDF into `public/cv.pdf` later. Until then, link still renders (no-op until file added).
- LinkedIn URL set as a constant in `src/lib/site-config.ts` (placeholder `https://www.linkedin.com/in/your-handle`) — single place to edit.
- Same file holds: name, tagline, bio, email, portfolio companies array → so you can edit content without hunting through components.

### Per-route SEO
Each route sets its own `head()` with title + description + og tags (e.g. "Portfolio — SunriseMD").

### What you'll edit later
- `src/lib/site-config.ts` — name, bio, LinkedIn, email, portfolio companies (logo URL, name, description, link)
- `public/cv.pdf` — drop in your CV
- Optional: `public/portrait.jpg` for homepage photo
