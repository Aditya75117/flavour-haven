# Next.js Concepts Used in This Project

A learning guide that explains every Next.js and related concept used in the Flavour Haven project. Each section includes **what it is**, **why we use it**, and **where to find it** in this codebase.

---

## Table of Contents

1. [App Router](#1-app-router)
2. [Server Components vs Client Components](#2-server-components-vs-client-components)
3. [Layouts](#3-layouts)
4. [Metadata API](#4-metadata-api)
5. [next/font — Google Fonts Optimization](#5-nextfont--google-fonts-optimization)
6. [next/image — Image Optimization](#6-nextimage--image-optimization)
7. [CSS/SCSS Modules & Global Styles](#7-cssscss-modules--global-styles)
8. [Static Site Generation (SSG)](#8-static-site-generation-ssg)
9. [TypeScript in Next.js](#9-typescript-in-nextjs)
10. [Project Structure & File Conventions](#10-project-structure--file-conventions)
11. [SCSS Architecture (BEM + 7-1 Pattern)](#11-scss-architecture-bem--7-1-pattern)
12. [Responsive Design with SCSS Mixins](#12-responsive-design-with-scss-mixins)
13. [Performance Optimization Techniques](#13-performance-optimization-techniques)

---

## 1. App Router

### What is it?
The **App Router** is Next.js's file-system based routing introduced in Next.js 13. Files inside `src/app/` automatically become routes.

### How it works
```
src/app/
├── layout.tsx   →  wraps every page (persistent across navigations)
├── page.tsx     →  renders at "/" (the homepage)
└── about/
    └── page.tsx →  would render at "/about"
```

### Key rules
- `page.tsx` makes a route **publicly accessible**
- `layout.tsx` wraps child routes and **persists** across navigations (doesn't re-render)
- Other files like components, styles, or utils in `app/` do NOT become routes

### In this project
- `src/app/layout.tsx` — Root layout with fonts and global CSS
- `src/app/page.tsx` — The landing page at `/`

### Learn more
- [Next.js Docs: App Router](https://nextjs.org/docs/app)

---

## 2. Server Components vs Client Components

### What is it?
By default, all components in the App Router are **Server Components**. They render on the server and send only HTML to the browser — **no JavaScript is shipped** for them.

**Client Components** are opted-in with `"use client"` at the top of the file. They render on the server first (for SEO), then **hydrate** on the client with JavaScript for interactivity.

### When to use each

| Use Server Component when...          | Use Client Component when...          |
| ------------------------------------- | ------------------------------------- |
| Displaying static content             | You need `useState`, `useEffect`      |
| Fetching data                         | You need event handlers (onClick, etc)|
| Accessing backend resources           | You need browser APIs (window, etc.)  |
| Keeping sensitive info server-side    | You need third-party client libraries |

### In this project
```
Server Components (no JS shipped):     Client Components ("use client"):
├── Hero.tsx                            ├── Navbar.tsx  ← useState + useEffect
├── About.tsx                           │                  for scroll & mobile menu
├── Specials.tsx                        └── Menu.tsx    ← useState
├── Chefs.tsx                                              for tab filtering
├── Testimonials.tsx
├── Gallery.tsx
├── Reservation.tsx
└── Footer.tsx
```

### Why this matters for performance
Only `Navbar.tsx` and `Menu.tsx` send JavaScript to the browser. The other 8 components send **zero JS** — just HTML and CSS. This makes the page extremely fast.

### Learn more
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

---

## 3. Layouts

### What is it?
A **Layout** is a component that wraps one or more pages. It persists across page navigations without re-rendering, which is great for shared UI like headers, navbars, and providers.

### How it works
```tsx
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

The `{children}` prop receives the current page content. When you navigate between pages, the layout stays mounted.

### In this project
Our `layout.tsx` does three things:
1. Loads Google Fonts with CSS variables
2. Sets HTML metadata (title, description)
3. Imports global SCSS styles

### Learn more
- [Next.js Docs: Layouts](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates)

---

## 4. Metadata API

### What is it?
Next.js provides a built-in way to define `<head>` metadata (title, description, Open Graph tags, etc.) using a typed `metadata` export.

### How it works
```tsx
// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flavour Haven — Fine Dining Restaurant",
  description: "Experience exquisite cuisine...",
  keywords: ["restaurant", "fine dining"],
};
```

Next.js automatically converts this object into the correct `<head>` tags. No need for `<Head>` component like in the Pages Router.

### Why it's better than manual `<head>` tags
- **Type-safe** — TypeScript tells you all available options
- **Automatic deduplication** — no duplicate tags
- **Template support** — `title.template` can add suffixes like "| Flavour Haven"
- **Works with Server Components** — no client JS needed

### Learn more
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

## 5. next/font — Google Fonts Optimization

### What is it?
`next/font` automatically **self-hosts** Google Fonts at build time. Instead of making a request to `fonts.googleapis.com`, the fonts are downloaded and served from your own domain.

### How it works
```tsx
import { Playfair_Display, Lora, Pacifico } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],        // Only include Latin characters
  variable: "--font-playfair", // CSS custom property name
  display: "swap",           // Font-display strategy
  weight: ["400", "700"],    // Only include needed weights
});
```

Then applied to `<html>`:
```tsx
<html className={`${playfair.variable} ${lora.variable} ${pacifico.variable}`}>
```

And used in SCSS via the fallback fonts (since SCSS can't read CSS variables at compile time, we define font stacks):
```scss
$ff-serif: "Playfair Display", Georgia, serif;
```

### Benefits
- **Zero layout shift** — fonts are preloaded, preventing text flicker (CLS = 0)
- **No external requests** — fonts are bundled with your app
- **Smaller payload** — only requested weights/subsets are included
- **Privacy** — no requests to Google's servers from your users

### In this project
We load 3 fonts in `layout.tsx`:
| Font              | Type    | Usage in Project         |
| ----------------- | ------- | ------------------------ |
| Playfair Display  | Serif   | Headings, titles, buttons|
| Lora              | Serif   | Body text, paragraphs   |
| Pacifico          | Cursive | Taglines, logo, accents |

### Learn more
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## 6. next/image — Image Optimization

### What is it?
The `<Image>` component from `next/image` is a drop-in replacement for `<img>` that automatically optimizes images.

### Two ways to use `<Image>`

**Option A: Fixed size** — Use `width` and `height` props when the image has a known, fixed size (like avatars, thumbnails).
```tsx
import Image from "next/image";

<Image
  src="/images/avatar-1.jpg"
  alt="Sarah Mitchell"
  width={50}
  height={50}
/>
```
This renders an `<img>` with exact pixel dimensions. Good for small, fixed-size images.

**Option B: Fill container** — Use the `fill` prop when the image should stretch to fill its parent container (like hero backgrounds, cards, galleries).
```tsx
// Parent MUST have: position: relative + defined dimensions (width/height or aspect-ratio)
<div style={{ position: "relative", aspectRatio: "16/9" }}>
  <Image
    src="/images/about-1.jpg"
    alt="Restaurant interior"
    fill
    sizes="(max-width: 992px) 100vw, 50vw"
  />
</div>
```
The `fill` prop makes the image `position: absolute` and stretches it to cover the parent. You then use CSS `object-fit: cover` on the `img` to crop nicely.

### When to use which?

| Use `width` + `height` when...       | Use `fill` when...                     |
| ------------------------------------- | -------------------------------------- |
| Image has a fixed pixel size          | Image should fill its container        |
| Small images (avatars, icons, thumbs) | Large images (heroes, cards, galleries)|
| You know the exact dimensions         | Container has `aspect-ratio` or height |

### The `sizes` prop (important for `fill`)
When using `fill`, always add `sizes` to tell the browser how wide the image will be at different screen sizes. Without it, the browser may download an image that's too large.
```tsx
sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
//      on mobile: full width   on tablet: half      on desktop: third
```

### What it does automatically
| Feature              | Explanation                                      |
| -------------------- | ------------------------------------------------ |
| **Lazy loading**     | Images below the fold load only when scrolled to |
| **Responsive sizes** | Generates srcset for different screen sizes      |
| **WebP/AVIF**        | Converts to modern formats for smaller file size |
| **Prevents CLS**     | Reserves space using width/height ratio          |
| **Caching**          | Optimized images are cached for repeat visits    |

### `priority` prop
Add `priority` to images that are **above the fold** (visible without scrolling). This tells Next.js to preload them. Only the hero image should have this.

### In this project

**Using `fill` (container-fill images):**
- About section — 3 images fill their `aspect-ratio` containers
- Specials cards — 4 images fill card image areas
- Chef portraits — 3 images fill `3:4` ratio containers
- Gallery grid — 7 images fill `1:1` square containers

**Using `width` + `height` (fixed-size images):**
- Menu thumbnails — 8 images at 80×80px
- Review avatars — 3 images at 50×50px

### Learn more
- [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

## 7. CSS/SCSS Modules & Global Styles

### What is it?
Next.js supports three styling approaches:
1. **Global CSS** — Applied to all pages (imported in `layout.tsx`)
2. **CSS Modules** — Scoped to a component (`.module.css`)
3. **Sass/SCSS** — CSS preprocessor with variables, mixins, nesting

### Our approach: Global SCSS with BEM naming
We chose **global SCSS** with **BEM naming convention** instead of CSS Modules because:
- It closely mirrors writing real HTML/CSS (great for learning)
- BEM naming prevents class conflicts without module scoping
- SCSS variables/mixins are shared across all sections via `@use`

### How SCSS imports work
```scss
// In globals.scss
@use "variables" as *;   // Import all variables without prefix
@use "mixins" as *;      // Import all mixins without prefix
```

```scss
// In section files
@use "../variables" as *;
@use "../mixins" as *;
```

### `@use` vs `@import` in SCSS
- `@import` is **deprecated** in modern Sass
- `@use` is the replacement — it namespaces by default and only loads once
- `as *` removes the namespace (so you can write `$clr-orange` instead of `variables.$clr-orange`)

### Learn more
- [Next.js CSS Support](https://nextjs.org/docs/app/building-your-application/styling/css)

---

## 8. Static Site Generation (SSG)

### What is it?
Static Site Generation means the page HTML is generated **at build time** (when you run `npm run build`), not when a user requests it. The pre-built HTML is served instantly.

### How Next.js decides
Next.js automatically uses SSG when:
- Your page has **no dynamic data fetching** (no `fetch` with `cache: 'no-store'`)
- Your page doesn't use **dynamic route segments**
- You're not using `cookies()` or `headers()`

### In this project
Our landing page is **100% static**. When you build:
```
Route (app)
┌ ○ /              ← ○ means "static"
└ ○ /_not-found
```

The `○` symbol means the page is **statically generated**. It loads instantly because it's just a pre-built HTML file.

### Why SSG is fast
1. No server processing per request
2. HTML can be served from a CDN edge location
3. Time to First Byte (TTFB) is minimal
4. Works even without a running Node.js server

### Learn more
- [Static and Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)

---

## 9. TypeScript in Next.js

### What is it?
TypeScript adds **static type checking** to JavaScript. Next.js has built-in TypeScript support — no configuration needed.

### Key TypeScript features used

**Type imports:**
```tsx
import type { Metadata } from "next";  // "type" means it's removed at build time
```

**Props typing:**
```tsx
export default function RootLayout({
  children,
}: Readonly<{           // Readonly prevents accidental mutation
  children: React.ReactNode;  // Accepts any valid React child
}>) { ... }
```

**`Readonly<T>`** — Makes all properties read-only, catching accidental mutations at compile time.

### Learn more
- [TypeScript in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

---

## 10. Project Structure & File Conventions

### Next.js special files
| File          | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `layout.tsx`  | Shared wrapper that persists across navigations      |
| `page.tsx`    | Makes a route publicly accessible                    |
| `loading.tsx` | Loading UI shown while page content loads            |
| `error.tsx`   | Error boundary for a route segment                   |
| `not-found.tsx` | Custom 404 page                                    |

### Our organizational choices
```
src/
├── app/          # Routes and layouts (Next.js convention)
├── components/   # Reusable React components
│   └── sections/ # Page-specific section components
└── styles/       # All SCSS files
    └── sections/ # One SCSS partial per section
```

**Why separate `components/` from `app/`?**
- `app/` is for routing — keeps it clean
- `components/` is for UI — easy to find and reuse
- This separation scales well as the project grows

### Learn more
- [Project Organization](https://nextjs.org/docs/app/getting-started/project-structure)

---

## 11. SCSS Architecture (BEM + 7-1 Pattern)

### BEM Naming Convention
**BEM** = Block Element Modifier

```
.block                  →  .navbar
.block__element         →  .navbar__link
.block__element--mod    →  .navbar__link--active
.block--modifier        →  .navbar--scrolled
```

| Part       | Meaning                    | Example              |
| ---------- | -------------------------- | -------------------- |
| Block      | Standalone component       | `.hero`              |
| Element    | Child that belongs to block| `.hero__title`       |
| Modifier   | Variant or state           | `.hero__btn--active` |

### Why BEM?
- **No naming collisions** — each class is unique by convention
- **Self-documenting** — you know `navbar__link` belongs to `navbar`
- **Flat specificity** — no deep nesting needed, easy to override

### File organization (inspired by 7-1 pattern)
```
styles/
├── _variables.scss     # Design tokens (colors, sizes, breakpoints)
├── _mixins.scss        # Reusable SCSS logic (@mixin, @include)
├── globals.scss        # Reset, base styles, utility classes
└── sections/           # One file per BEM block
    ├── _navbar.scss
    ├── _hero.scss
    └── ...
```

---

## 12. Fluid Typography & Spacing with `clamp()`

### What is `clamp()`?
`clamp(min, preferred, max)` is a CSS function that lets a value scale fluidly between a minimum and maximum, based on a preferred (usually viewport-based) value.

```
clamp(minimum, preferred, maximum)
       │          │          │
       │          │          └─ never exceeds this
       │          └─ scales with viewport (usually vw-based)
       └─ never goes below this
```

### Why use it instead of media queries for font sizes?
**Before (3 breakpoints = 3 declarations):**
```scss
.hero__title {
  font-size: 2rem;              // mobile
  @include respond(md) { font-size: 2.5rem; }  // tablet
  @include respond(lg) { font-size: 3.5rem; }  // desktop
}
```

**After (1 line, smooth scaling):**
```scss
$fs-5xl: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);

.hero__title {
  font-size: $fs-5xl;  // auto-scales from 36px → 60px
}
```

### How we calculate clamp values
The formula: `clamp(min-rem, base-rem + Xvw, max-rem)`
- The `vw` part makes it scale with viewport width
- The `rem` base ensures it doesn't scale too aggressively
- Example: `clamp(1.75rem, 1.3rem + 1.8vw, 2.625rem)` = 28px on 320px screen → 42px on 1400px screen

### Our fluid scale

**Font sizes:**
| Variable   | Value                                         | Range          |
| ---------- | --------------------------------------------- | -------------- |
| `$fs-xs`   | `0.75rem` (fixed)                             | 12px           |
| `$fs-sm`   | `0.875rem` (fixed)                            | 14px           |
| `$fs-base` | `clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)`| 15px → 17px    |
| `$fs-xl`   | `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)`   | 20px → 26px    |
| `$fs-4xl`  | `clamp(2rem, 1.4rem + 2.5vw, 3.25rem)`       | 32px → 52px    |
| `$fs-6xl`  | `clamp(2.75rem, 1.8rem + 3.8vw, 4.75rem)`    | 44px → 76px    |

**Spacing:**
| Variable  | Value                                       | Range          |
| --------- | ------------------------------------------- | -------------- |
| `$sp-xs`  | `0.25rem` (fixed)                           | 4px            |
| `$sp-md`  | `1rem` (fixed)                              | 16px           |
| `$sp-xl`  | `clamp(1.5rem, 1.2rem + 0.8vw, 2.25rem)`   | 24px → 36px    |
| `$sp-3xl` | `clamp(2.5rem, 1.8rem + 2.2vw, 4.25rem)`   | 40px → 68px    |
| `$sp-5xl` | `clamp(4.5rem, 3rem + 4vw, 8.25rem)`       | 72px → 132px   |

### Benefits
- **Fewer media queries** → smaller CSS output
- **Smooth scaling** → no jarring size jumps at breakpoints
- **Less code** → one declaration instead of three
- **Consistent rhythm** → spacing and type scale together

### Learn more
- [MDN: clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

---

## 13. `content-visibility` for Rendering Performance

### What is it?
`content-visibility: auto` tells the browser to **skip rendering** sections that are off-screen. The browser only lays out and paints the section when it's about to scroll into view.

### How we use it
```scss
.section--lazy {
  content-visibility: auto;
  contain-intrinsic-size: auto 800px;
}
```

```tsx
// Every section below the fold gets this class:
<section className="about section section--lazy" id="about">
```

### What each property does
| Property                    | Purpose                                                    |
| --------------------------- | ---------------------------------------------------------- |
| `content-visibility: auto`  | Skip rendering until the element is near the viewport      |
| `contain-intrinsic-size`    | Give the browser an estimated height so scrollbar is stable|

### Why `contain-intrinsic-size: auto 800px`?
Without it, the browser doesn't know how tall the un-rendered section is, so the scrollbar jumps around. `auto 800px` means:
- Use `800px` as initial estimate
- `auto` remembers the real height once rendered, so it doesn't re-estimate

### Which sections use it?
| Section       | `section--lazy`? | Why                                      |
| ------------- | ---------------- | ---------------------------------------- |
| Hero          | No               | Above-the-fold, must render immediately  |
| Navbar        | No               | Fixed element, always visible            |
| About         | Yes              | Below the fold                           |
| Specials      | Yes              | Below the fold                           |
| Menu          | Yes              | Below the fold                           |
| Chefs         | Yes              | Below the fold                           |
| Testimonials  | Yes              | Below the fold                           |
| Gallery       | Yes              | Below the fold                           |
| Reservation   | Yes              | Below the fold                           |
| Footer        | No               | Small, not worth the overhead            |

### Performance impact
On a page with 9 sections, only 1 (Hero) is rendered on initial load. The other 7 lazy sections save the browser from:
- Calculating layout for ~7000+ DOM nodes
- Decoding and painting off-screen images
- Running style calculations for hidden content

This significantly improves **First Contentful Paint (FCP)** and **Largest Contentful Paint (LCP)**.

### Learn more
- [MDN: content-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)
- [web.dev: content-visibility](https://web.dev/articles/content-visibility)

---

## 14. DRY CSS — Common Classes in `globals.scss`

### The problem: CSS duplication
Before refactoring, many sections had identical patterns repeated:
- "Tagline + Title + Description" blocks (About, Hero, Reservation)
- Dark section header color overrides (Menu, Gallery)
- 1→2→3 column responsive grids (Specials, Chefs, Testimonials)
- Hover-lift card animations (Specials, Testimonials)
- Fill-image containers (About, Specials, Chefs, Gallery)
- Bottom CTA links (Menu, Gallery)

### The solution: shared utility classes
We extracted these into `globals.scss` as reusable classes:

| Class                  | What it does                                      | Used by                          |
| ---------------------- | ------------------------------------------------- | -------------------------------- |
| `.section`             | Base padding for all sections (fluid `$sp-5xl`)   | All 7 below-the-fold sections    |
| `.section--lazy`       | `content-visibility: auto` for off-screen perf    | All below-the-fold sections      |
| `.section__inner`      | Container wrapper inside sections                 | Menu, Chefs, Testimonials, etc.  |
| `.section-header`      | Centered tagline + title + desc + divider         | 5 sections                       |
| `.section-header--light`| White text variant for dark backgrounds           | Menu, Gallery                    |
| `.content-tagline`     | Cursive accent text (non-centered)                | Hero, About, Reservation         |
| `.content-title`       | Serif heading (non-centered)                      | About, Reservation               |
| `.content-desc`        | Body text block (non-centered)                    | Hero, About, Reservation         |
| `.grid-1-2-3`          | 1col → 2col → 3col responsive grid               | Specials, Chefs, Testimonials    |
| `.split-grid`          | Two-column content+visual layout                  | About, Reservation               |
| `.img-fill`            | Container for `next/image fill` with hover zoom   | About, Specials, Chefs, Gallery  |
| `.card-hover`          | Hover lift + shadow animation                     | Specials, Testimonials           |
| `.btn-primary`         | Orange gradient CTA button                        | About, Reservation               |
| `.btn-outline--light`  | Outline button for dark backgrounds               | Menu, Gallery                    |
| `.section-cta`         | Centered CTA at section bottom                    | Menu, Gallery                    |

### How composition works
```tsx
// Before: each section repeated its own grid, padding, and image styles
<section className="chefs">
  <div className="chefs__inner">
    <div className="chefs__grid">
      <div className="chefs__card-img">

// After: compose common classes + section-specific classes
<section className="chefs section section--lazy">
  <div className="section__inner">
    <div className="grid-1-2-3">
      <div className="chefs__card-img img-fill">
```

Section SCSS files now only contain **unique** styles for that section. Common layout, typography, and interaction patterns come from `globals.scss`.

---

## 15. Responsive Design with SCSS Mixins

### Our responsive mixin
```scss
@mixin respond($breakpoint) {
  @if $breakpoint == sm  { @media (min-width: 576px)  { @content; } }
  @if $breakpoint == md  { @media (min-width: 768px)  { @content; } }
  @if $breakpoint == lg  { @media (min-width: 992px)  { @content; } }
  @if $breakpoint == xl  { @media (min-width: 1200px) { @content; } }
}
```

### When to use `@include respond()` vs `clamp()`

| Use `clamp()` for...                     | Use `@include respond()` for...          |
| ---------------------------------------- | ---------------------------------------- |
| Font sizes that scale smoothly           | Layout changes (1col → 2col grid)        |
| Padding/margins that grow with viewport  | Showing/hiding elements                  |
| Any single-value that just needs scaling | Switching flex-direction                 |
|                                          | Anything that changes *behavior*         |

### Breakpoints used
| Name | Width    | Target                    |
| ---- | -------- | ------------------------- |
| sm   | ≥ 576px  | Large phones (landscape)  |
| md   | ≥ 768px  | Tablets                   |
| lg   | ≥ 992px  | Laptops / small desktops  |
| xl   | ≥ 1200px | Large desktops            |
| xxl  | ≥ 1400px | Extra large screens       |

---

## 16. Performance Optimization Techniques

### What makes this project fast

| Technique                    | Impact                                          |
| ---------------------------- | ----------------------------------------------- |
| Server Components (default)  | 90% of components ship zero JavaScript          |
| `next/font` self-hosting     | No external font requests, zero CLS             |
| `next/image` optimization    | Automatic WebP, lazy loading, responsive sizes   |
| Static Generation (SSG)      | Pre-built HTML served instantly from CDN         |
| SCSS (compiled at build)     | No runtime CSS overhead                         |
| Minimal client components    | Only Navbar needs client-side JS                |
| `display: "swap"`           | Text visible immediately while fonts load        |
| `clamp()` fluid sizing       | Fewer media queries = smaller CSS bundle         |
| `content-visibility: auto`   | Skips rendering off-screen sections              |
| DRY common classes           | Less CSS duplication = smaller stylesheet         |

### What the browser receives
For the landing page, the browser gets:
1. **Pre-rendered HTML** — full page content, instant First Contentful Paint
2. **Compiled CSS** — from SCSS, no runtime processing
3. **Optimized fonts** — self-hosted, preloaded
4. **Tiny JS bundle** — only Navbar hydration code (~2-3 KB gzipped)
5. **Lazy-loaded images** — only above-fold images load initially
6. **Deferred rendering** — 7 sections skip paint until scrolled to

---

## Quick Reference: Key Imports

```tsx
// Framework
import type { Metadata } from "next";

// Font optimization
import { Playfair_Display, Lora, Pacifico } from "next/font/google";

// Image optimization
import Image from "next/image";

// Global styles (import once in layout)
import "@/styles/globals.scss";

// Section styles (import once in page)
import "@/styles/page.scss";
```

---

## Further Reading

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Sass/SCSS Documentation](https://sass-lang.com/documentation/)
- [BEM Methodology](https://getbem.com/)
