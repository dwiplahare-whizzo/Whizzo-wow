# Whizzo Group — Web

Next.js 16 (App Router) + Tailwind v4. One codebase, three themed branches per the
Website Redesign & Navigation Brief; all copy from the Website Source of Truth.

## Run

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
npm run build
```

Routes: `/` group index · `/business` (whizzo.com) · `/works` (whizzo.work) · `/wow` (WhizzoWow).

## Structure

| Path | Purpose |
|---|---|
| `src/app/globals.css` | Fluid type scale, 12-col grid, per-branch theme tokens via `[data-brand]` |
| `src/components/ui.css` | Shared component styles (themed only through tokens) |
| `src/components/primitives.tsx` | Hero, PageHero, StatBand, MaterialCardGrid, ProcessDiagram, FeatureGrid, LogoWall, LeadershipGrid, ProjectGrid, SpecList, CtaBand, AnnounceBar, Button, Section |
| `src/components/{Accordion,Reveal,MobileMenu,ContactForm}.tsx` | Client components |
| `src/components/BrandShell.tsx` | Header + mobile menu + footer + cross-brand switcher + skip link |
| `src/lib/company.ts` | Corporate facts (from Source of Truth) |
| `src/lib/content/{business,works,wow}.ts` | Page content — Sanity swap seam |
| `src/lib/nav.ts` · `src/lib/routes.ts` | Navigation + sitemap route list |
| `src/lib/notify.ts` | Outbound seam for contact submissions |
| `src/app/{sitemap,robots}.ts` · `src/app/business/layout.tsx` | SEO + Organization JSON-LD |
| `src/app/api/contact/route.ts` | Form intake (validation + notify) |

## Product photography

Real product photos for the four materials-science platforms (Technical
Textiles, Engineered Fashion, Yarn, Fiber) live in `public/images/products/<slug>/`
and are synced from a local CDN drop folder:

```
Website/PRODUCTS/{TECHNICAL TEXTILES, Fashion, Yarn, Fibre}/*.{jpg,jpeg,png}
```

Whenever images are added to (or removed from) those folders, re-run:

```bash
npm run sync:images
```

This copies/normalizes them into `public/images/products/`, and regenerates
`src/lib/content/product-images.generated.ts` (the typed `slug -> paths` map
the site imports — don't hand-edit that file). It always does a full resync,
so it's safe to re-run any time. The source path is hardcoded to this
machine (`scripts/sync-product-images.py`) — update `SOURCE_DIR` there if
the drop folder moves.

Used by: the Materials Science hub cards (first photo per platform), each
platform's detail-page gallery (all synced photos, bento layout), and the
homepage's two floating image marquees (up to 3 photos per platform, mixed).

## Status

- [x] Phase 0 — scaffold, tooling, design tokens
- [x] Phase 1 — shared design system + reusable components
- [x] Phase 2 — whizzo.com full site (rebuilt from Source of Truth)
- [x] Phase 3 — whizzo.work full site
- [x] Phase 4 — WhizzoWow site (conversion is via Contact / WhatsApp, no RFQ form)
- [x] Phase 5 — cross-brand integration, mobile nav, a11y skip link, sitemap/robots,
      Organization JSON-LD, legal pages, 404, legacy-URL redirects, notify seam
- [ ] Post-launch — wire Sanity CMS, real imagery + catalogue PDF, connect `notify()`
      to email/CRM, real WhatsApp number, analytics + consent, Lighthouse pass

## Notes

- Google Fonts (Fraunces / Inter / JetBrains Mono) via `next/font`; fall back to
  system fonts where the build host can't reach fonts.google.com.
- whizzo.work / WhizzoWow copy is drafted from the brief; whizzo.com is verbatim
  from the Source of Truth. Swap `NEXT_PUBLIC_SITE_URL` per deployed domain.
