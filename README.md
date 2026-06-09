# Flavour Haven — Restaurant Landing Page

A fully responsive, performance-focused restaurant landing page built with **Next.js 16**, **TypeScript**, and **SCSS**. The design features warm amber/orange/crimson tones with elegant serif and cursive typography.

---

## Tech Stack

| Technology        | Version | Purpose                                |
| ----------------- | ------- | -------------------------------------- |
| Next.js           | 16.2.6  | React framework (App Router, SSR/SSG)  |
| React             | 19.2.4  | UI library                             |
| TypeScript        | 5.x     | Type safety                            |
| Sass (SCSS)       | 1.99.x  | Styling with variables, mixins, nesting|
| Google Fonts      | —       | Playfair Display, Lora, Pacifico       |

---

## Project Structure

```
flavour-haven/
├── public/
│   └── images/              # Placeholder images (replace with real photos)
├── scripts/
│   └── generate-placeholders.js  # Script to regenerate placeholder images
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout — fonts, metadata, global styles
│   │   └── page.tsx         # Landing page — assembles all 9 sections
│   ├── components/
│   │   └── sections/        # One component per section
│   │       ├── Navbar.tsx       # (Client) Fixed navbar with mobile drawer
│   │       ├── Hero.tsx         # (Server) Full-screen hero with CTA
│   │       ├── About.tsx        # (Server) Story + image grid + badge
│   │       ├── Specials.tsx     # (Server) Featured dish cards
│   │       ├── Menu.tsx         # (Server) Menu list with category tabs
│   │       ├── Chefs.tsx        # (Server) Chef team cards
│   │       ├── Testimonials.tsx # (Server) Reviews + stats counters
│   │       ├── Gallery.tsx      # (Server) Masonry-style image grid
│   │       ├── Reservation.tsx  # (Server) Booking form + contact info
│   │       └── Footer.tsx       # (Server) Links, hours, newsletter
│   └── styles/
│       ├── _variables.scss  # Colors, typography, spacing, breakpoints
│       ├── _mixins.scss     # Responsive, layout, button, typography mixins
│       ├── globals.scss     # CSS reset, base styles, utility classes
│       ├── page.scss        # Imports all section styles
│       └── sections/        # One SCSS partial per section
│           ├── _navbar.scss
│           ├── _hero.scss
│           ├── _about.scss
│           ├── _specials.scss
│           ├── _menu.scss
│           ├── _chefs.scss
│           ├── _testimonials.scss
│           ├── _gallery.scss
│           ├── _reservation.scss
│           ├── _footer.scss
│           └── _index.scss  # Forwards all section partials
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Landing Page Sections (9 total)

| #  | Section         | Design Approach                                                    |
| -- | --------------- | ------------------------------------------------------------------ |
| 1  | **Navbar**      | Fixed transparent → solid on scroll, mobile hamburger drawer       |
| 2  | **Hero**        | Full-viewport with parallax BG, gradient overlay, scroll indicator |
| 3  | **About**       | Split layout: image collage (left) + story content (right) + badge|
| 4  | **Specials**    | Card grid with one featured wide card spanning full width          |
| 5  | **Menu**        | Dark section, category tabs, price list with dot leaders           |
| 6  | **Chefs**       | Portrait cards with hover social links overlay                     |
| 7  | **Testimonials**| Quote cards with star ratings + stats counters below               |
| 8  | **Gallery**     | Masonry grid (first item 2x2), hover overlay with zoom icon        |
| 9  | **Reservation** | Split: contact info (left) + booking form (right), parallax BG     |
| 10 | **Footer**      | 4-column: brand, links, hours, newsletter                         |

---

## Color Palette

| Name       | Hex       | Usage                          |
| ---------- | --------- | ------------------------------ |
| Gold       | `#D4A017` | Accents, highlights            |
| Amber      | `#E8A317` | Primary accent, links          |
| Orange     | `#E65100` | CTAs, buttons                  |
| Burnt      | `#BF360C` | Gradient endpoints             |
| Crimson    | `#C62828` | Gradient endpoints, badges     |
| Cream      | `#FFF8E1` | Light section backgrounds      |
| Charcoal   | `#1A1A1A` | Dark sections, text            |

---

## Fonts

- **Playfair Display** (serif) — Headings and titles
- **Lora** (serif) — Body text and paragraphs
- **Pacifico** (cursive) — Taglines and decorative accents

All loaded via `next/font/google` for optimal performance (zero layout shift).

---

## CSS Architecture

### Fluid Sizing with `clamp()`
All font-sizes (except `$fs-xs` and `$fs-sm`) and spacing values (`$sp-lg` and above) use `clamp()` for smooth scaling between mobile and desktop — no media query breakpoints needed for size changes.

### Common Classes in `globals.scss`
Shared patterns are extracted into reusable classes to avoid duplication:
- `.section` / `.section--lazy` — section padding + content-visibility
- `.section-header` / `.section-header--light` — centered tagline+title+desc
- `.content-tagline` / `.content-title` / `.content-desc` — inline text blocks
- `.grid-1-2-3` / `.split-grid` — common responsive grid layouts
- `.img-fill` / `.card-hover` — image containers and card animations
- `.btn-primary` / `.btn-outline--light` / `.section-cta` — buttons

### `content-visibility: auto`
All below-the-fold sections use `content-visibility: auto` via the `.section--lazy` class, so the browser skips rendering them until they're about to scroll into view.

---

## Replacing Placeholder Images

The `public/images/` folder contains Unsplash photos. Replace them with your own `.jpg` photos if needed:

- `hero-bg.jpg` — Full-width restaurant/food hero image (1920×1080)
- `reservation-bg.jpg` — Atmospheric background (1920×1080)
- `about-1.jpg`, `about-2.jpg`, `about-3.jpg` — About section photos
- `special-1.jpg` to `special-4.jpg` — Dish photos for specials
- `menu-1.jpg` to `menu-8.jpg` — Small menu item thumbnails (160×160)
- `chef-1.jpg` to `chef-3.jpg` — Chef portraits (400×530)
- `avatar-1.jpg` to `avatar-3.jpg` — Reviewer avatars (100×100)
- `gallery-1.jpg` to `gallery-7.jpg` — Gallery photos (400×400+)

---

## Performance Notes

- **8 of 10 components are Server Components** — zero client JS shipped
- Only `Navbar.tsx` uses `"use client"` (for scroll detection + mobile toggle)
- SCSS is compiled at build time — no runtime CSS-in-JS overhead
- `next/font/google` fonts are self-hosted (no external requests)
- `next/image` provides automatic optimization, lazy loading, WebP conversion
- Static generation (SSG) — the page is pre-rendered at build time
- `clamp()` fluid sizing — fewer media queries, smaller CSS output
- `content-visibility: auto` — off-screen sections skip rendering until needed
- DRY common classes — no CSS duplication across sections

---

## What's Next

- [ ] Add real food photography
- [ ] Wire up the reservation form with a Server Action or API route
- [ ] Add page transitions / scroll-triggered animations
- [ ] Add more pages (individual menu page, about page, etc.)
- [ ] Add dark mode support
