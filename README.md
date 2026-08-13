# Portfolio

A personal portfolio site built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Install & run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  assets/img/avatar.svg     placeholder monogram avatar (swap for a real photo/illustration)
  components/                one component per section, no hardcoded content
  data/portfolio.json        ALL profile / skills / experience / project / testimonial content
  hooks/usePortfolio.ts      typed accessor for portfolio.json
  types/portfolio.ts         TypeScript types for the content shape
  index.css                  Tailwind layers, chrome-gradient text, marquee keyframes
```

## Editing content

Everything you see on the page — name, tagline, bio, skills, work history, projects,
education, and testimonials — lives in `src/data/portfolio.json`. Edit that file and
the site updates; no component code needs to change for content edits.

- **profile** — name, tagline, bio, avatar path, and social links. Leave any `social`
  field (`github`, `linkedin`, `instagram`, `website`, `phone`) as an empty string `""`
  to hide that link/row automatically.
- **skills.categories[]** — grouped skill chips shown in the Skills & Experience section.
- **experience[]** — work history rows, numbered in the order listed. Only the first
  3 items of each `highlights[]` array are shown.
- **projects[]** — set `"highlight": true` to pin a project to the top of the list.
  Leave `"link"` empty to hide the "Live project" button, and leave `"image"` empty
  to fall back to a dark placeholder card with the title overlaid.
- **education[]** — currently used for reference; add a section if you want it
  rendered on the page.
- **testimonials[]** — the current entries are **placeholders** (marked "Placeholder
  Name") since none were supplied — replace with real quotes before publishing, or
  clear the array to hide the section entirely.

### Avatar

`profile.avatarSvg` points at `src/assets/img/avatar.svg`, a stylized monogram
placeholder. Replace that file (or point the field at a photo in `src/assets/img/`)
with a real headshot or illustration when you have one.

### Services section

The "What I do" section (Backend / AI-LLM / Frontend / Cloud) is currently hardcoded
in `src/components/ServicesSection.tsx` — see the `TODO` comment at the top of that
file for moving it into `portfolio.json` once a `services[]` field is added to the
schema.

## Notes

- Fully responsive from mobile up.
- Respects `prefers-reduced-motion` (testimonial marquee falls back to a
  scroll-snap row, and other animation durations are minimized).
- Empty social/contact fields and empty project links/images are hidden
  automatically — no broken links or blank buttons.
