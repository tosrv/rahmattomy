# Rahmat Tomy — Portfolio

Personal portfolio website of **Rahmat Tomy Apriliyanto**, Full Stack Developer based in Jakarta, Indonesia.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- Single-page layout: Hero → Projects → Work → About → Contact
- Dark mode toggle that follows the system preference and remembers the visitor's choice
- Responsive navbar with an animated burger menu on mobile
- Live local clock (WIB / UTC+7) in the hero
- Content kept in plain TypeScript data files for easy editing
- SEO basics: meta/Open Graph tags, canonical URL, and an auto-generated sitemap
- Self-hosted [Satoshi](https://www.fontshare.com/fonts/satoshi) font

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── fonts/              # Satoshi .woff2 files
├── src/
│   ├── components/         # Navbar, Hero, Projects, Work, About, Contact, Footer
│   ├── data/
│   │   ├── site.ts         # Profile, SEO, nav, socials, section text
│   │   ├── experience.ts   # Work experience entries
│   │   └── projects.ts     # Project cards
│   ├── layouts/
│   │   └── Layout.astro    # <head>, SEO tags, theme init script
│   ├── pages/
│   │   └── index.astro     # Homepage
│   └── styles/
│       └── global.css      # Tailwind, fonts, dark mode palette
├── astro.config.mjs
└── package.json
```

## Getting Started

Requires **Node.js 22.12+**.

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Editing Content

All content lives in `src/data/` — components only handle layout.

- **Profile, SEO, nav, socials, Hero, About, Contact, Footer, section titles** — edit `src/data/site.ts`
- **Projects** — edit `src/data/projects.ts`
- **Work experience** — edit `src/data/experience.ts`
- **Site URL** (used for the sitemap and canonical links) — set `site` in `astro.config.mjs`

## Dark Mode

Dark mode is class-based (`.dark` on `<html>`). In `src/styles/global.css` the `neutral-*` and `white` colors are flipped under `.dark`, so components using those colors adapt automatically. For any other color, add a `dark:` variant.
