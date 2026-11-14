# Convert SunriseMD to a single scrolling page

Keep the current colors, fonts, photos and wording. Change the layout to one long page in the "Practice First" order, with a cleaner editorial-style header.

## New page order
1. **Intro**: round portrait, "Hi, I'm Tahir", tagline, bio card, plus a "Get in touch" button that scrolls to Contact
2. **Our Approach**: intro card with the ✦ quote, then the 2x2 "How I Help" cards
3. **Advising Portfolio**: Regard and Impiricus cards, stacked vertically (no sideways scrolling)
4. **About Tahir**: the full background with all four sections, photo galleries, the Malawi photo with wrapped text, and the awards list
5. **Contact Us**: the two side-by-side panels (links and message form)
6. Footer (unchanged)

## Editorial-style touches
- **Header**: "SunriseMD" name on the left, plain text links on the right (About, Approach, Portfolio, Contact). No pills. The current section gets a thin blue underline. The header stays at the top of the screen while scrolling, with a light divider line.
- **Phone layout**: the links fold into a small menu button on the right.
- **Section openers**: each section starts with a small blue numbered label (e.g. "01 — Our Approach"), a large left-aligned heading, and a thin line, in place of the current centered headings.
- **Spacing**: more room between sections, and a slightly wider page for the Portfolio and Contact sections.

## Navigation
- Clicking a link scrolls smoothly to its section. The header covers no content because each section leaves room for it.
- The link for the section on screen is highlighted automatically as you scroll.
- Shared links like sunrisemd.com/#portfolio open straight to that section.
- Old addresses (/about, /approach, /portfolio, /contact) send visitors to the matching section of the new page, so existing links keep working.

## Technical details
- Move each page's content into its own section component (`src/components/sections/*`), reusing the existing JSX and the GalleryBlock helpers from about.tsx.
- `src/routes/index.tsx` renders the sections in order, each with `id` and `scroll-mt-*` set.
- Rewrite SiteHeader: wordmark plus right-aligned anchor links, an IntersectionObserver scroll spy, and a Sheet menu on mobile.
- Replace the old route files with small redirect routes (`beforeLoad`, redirect to `/` with a `hash`), so URLs stay valid.
- Merge the head() metadata into the index route.
- Leave styles.css tokens unchanged. Add `scroll-behavior: smooth` to html.
