# Convert SunriseMD to a single page using the Editorial Studio layout

Template reference: https://lovable.dev/templates/websites/portfolio/editorial-portfolio (live demo: https://editorial-portfolio-9d8e325b.lovable.app)

Use the template's layout, section by section, with SunriseMD's current colors, fonts, photos and wording. Leave out the template's sideways-scrolling photo strip. Section order follows Option 1.

## Header (same as template)
- "SunriseMD" in plain text on the left, with four text links on the right: About, Approach, Portfolio, Contact. No pills, no numbers, no underline bars.
- On phones, the links fold into a small menu.

## 1. Intro (template hero)
- Two columns. On the left: a small uppercase line ("Healthcare Consulting"), a large headline with one word in italics, one sentence from the bio, and a "Get in touch →" text link. On the right: Tahir's portrait as a tall rectangle with square corners, in place of the current circle.
- A thin down-arrow scroll marker under the intro, as in the template.
- Proposed headline (please confirm or reword): "Physician-led consulting for health technology built on *clinical reality*."

## 2. Our Approach (template "What I Do" services row)
- Small uppercase label "Our Approach", heading "How I Help".
- Strategy, Commercial, Product and Fundraising as plain text columns with titles and short descriptions. No cards, emojis or borders.
- The intro paragraphs sit above the columns. The quote "Healthcare strategy works best when…" is styled like the template's large pull quote.

## 3. Advising Portfolio (template "Selected Work / Projects" grid)
- Small label "Advising Portfolio", heading "Companies I've Partnered With".
- Regard and Impiricus as two tiles side by side. Each tile shows the company name, its tags in small grey text (where the template shows category and year), and a "Visit →" link.
- The full description and advisory focus areas appear under each tile in the same quiet text style. Nothing scrolls sideways.

## 4. About Tahir (template "About" block, then the full story)
- The template's About layout: pull quote and short intro text on the left, portrait on the right.
- After that come the four existing sections (Biomedical Engineering, Global Health, Outcomes Research, Leadership), with all photos, the wrapped Malawi photo and the bulleted awards. Headings are restyled to match the template, with no callout boxes or emojis.

## 5. Contact (template closing call-to-action, then the form)
- A large centered line: "Let's build something *meaningful.*" with the current contact sentence under it.
- Under that sit the existing Email, LinkedIn and CV links and the message form. Fields become simple underlined inputs with square corners, as in the template.

## Footer
- A simple line in the template's style: company name and year on the left, Email, LinkedIn and CV links on the right.

## Style rules taken from the template
- Square corners, no shadows, no gradient bars, lots of white space, and thin divider lines between sections.
- Colors and fonts stay the same as the current site. The blue is used only for links and small accents.

## Navigation
- Header links scroll smoothly to each section. Links like sunrisemd.com/#portfolio open straight to that section.
- Old addresses (/about, /approach, /portfolio, /contact) send visitors to the matching section of the new page.

## Technical details
- Add section components in `src/components/sections/` (Hero, Approach, Portfolio, About, Contact), reusing the existing content and GalleryBlock logic from about.tsx and contact.tsx.
- `index.tsx` renders the sections with `id`s and `scroll-mt` offsets. The header uses plain `<a href="#id">` anchors and a shadcn Sheet on mobile.
- Change `about`, `approach`, `portfolio` and `contact` into redirect-only routes (`beforeLoad`, redirect to `/` with `hash`).
- Rewrite SiteHeader and SiteFooter. Leave the design tokens in styles.css unchanged, and add `html { scroll-behavior: smooth }`.
- Merge the head() metadata into the index route.
