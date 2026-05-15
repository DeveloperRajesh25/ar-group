# AL Group — Premium Real Estate Website

A production-ready Next.js 14 site for AL Group, a real estate marketing company in Visakhapatnam, Andhra Pradesh. Editorial design inspired by mahindralifespaces.com and prestigeconstructions.com — large serif headlines, warm beige palette, gold accents, generous whitespace, smooth motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **CMS:** Sanity v3 — embedded studio at `/studio`
- **Animations:** Framer Motion + Lenis (smooth scroll)
- **Forms:** Formspree (no backend required)
- **Icons:** lucide-react
- **Fonts:** Cormorant Garamond (display) + Inter (body) via `next/font`

## Running Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Required Configuration

The site renders with full static content out of the box. To enable Sanity-powered editing and live form submissions, fill in `.env.local`:

| Variable | Where to get it | Required? |
| --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | https://sanity.io/manage → create project | Optional (static fallback runs without it) |
| `NEXT_PUBLIC_SANITY_DATASET` | Defaults to `production` | Optional |
| `SANITY_REVALIDATE_SECRET` | Any random string — paste into Sanity webhook | Optional |
| `NEXT_PUBLIC_CONTACT_FORM_ID` | https://formspree.io → new form → ID after `/f/` | **Required for contact form** |
| `NEXT_PUBLIC_VISIT_FORM_ID` | Formspree — second form for site-visit requests | **Required for venture forms** |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | Optional |
| `NEXT_PUBLIC_SITE_URL` | Public URL (used in canonical / sitemap / OG) | Recommended |

## Sanity Setup (Optional)

The site ships with all 4 ventures and 2 partners hardcoded in `lib/data.ts` so it renders fully without Sanity. To enable CMS editing:

1. **Create a Sanity project**: https://sanity.io/manage → New project. Copy the project ID.
2. **Add it to `.env.local`** under `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. **Visit `/studio`** in your dev server — log in with Sanity to authorize.
4. **Create venture and partner documents** in the studio. The schemas mirror the shape in `lib/data.ts`, so data swaps in seamlessly. When Sanity returns content, queries in `lib/sanity/queries.ts` prefer it over the static fallback.

### Webhook for instant revalidation

In Sanity → API → Webhooks, add a webhook pointing to:

```
https://your-site.com/api/revalidate?secret=YOUR_SECRET
```

Match `YOUR_SECRET` with `SANITY_REVALIDATE_SECRET` in your env.

## Formspree Setup

1. Sign up at https://formspree.io (free tier OK).
2. Create two forms:
   - **AL Group — Contact** → take the form ID (last segment of the endpoint URL).
   - **AL Group — Site Visit** → ditto.
3. Paste both into `.env.local`.
4. Configure email recipients in the Formspree dashboard.

## Replacing Placeholders Before Launch

| What | Where |
| --- | --- |
| Logo SVG | `public/logo.svg` (currently a typographic placeholder) |
| Favicon | `app/icon.tsx` (currently rendered via Next image API) |
| OG image | `app/opengraph-image.tsx` (auto-generated; replace if a static asset is preferred) |
| Hero/property photos | `lib/data.ts` (Unsplash URLs) — swap for client-supplied images, ideally uploaded via Sanity |
| Formspree form IDs | `.env.local` |
| Sanity project ID | `.env.local` |
| Google Maps embed URLs | `lib/constants.ts` and per-venture in `lib/data.ts` |
| Brochure PDFs | Upload via Sanity (`venture.brochurePdf`) — or put files in `public/` and reference the URL |

## Structure

```
app/
├── (site)/                  # Public pages — Navbar + Footer + WhatsApp float
│   ├── page.tsx             # Homepage
│   ├── about/
│   ├── managing-partners/
│   ├── ventures/            # /ventures + /ventures/[slug]
│   └── contact/
├── studio/[[...tool]]/      # Embedded Sanity Studio at /studio
├── api/revalidate/          # Sanity webhook endpoint
├── icon.tsx                 # Auto-generated favicon
├── opengraph-image.tsx      # Auto-generated 1200×630 OG
├── sitemap.ts               # Dynamic sitemap
└── robots.ts                # robots.txt

components/
├── layout/                  # Navbar, Footer, WhatsAppFloat, SmoothScroll, Logo
├── ui/                      # Button, Container, SectionHeading, FadeIn, Divider
├── sections/                # Hero, AboutPreview, WhyChooseUs, etc.
├── ventures/                # Card, Gallery, FloorPlan, LocationMap, BookVisitForm
├── partners/                # PartnerCard
└── seo/                     # StructuredData (JSON-LD)

lib/
├── constants.ts             # Phone, email, addresses, nav links
├── data.ts                  # Static fallback for ventures + partners
├── utils.ts                 # cn(), whatsappLink(), telLink()
└── sanity/                  # client, queries, schemas
```

## Design Tokens

| Token | Hex | Use |
| --- | --- | --- |
| `--navy` | `#1F2A44` | Primary text |
| `--navy-deep` | `#141C32` | Footer, dark sections |
| `--beige` | `#E8DCC8` | Page background |
| `--beige-warm` | `#F1E8D6` | Alternate sections |
| `--beige-soft` | `#FAF5EC` | Cards |
| `--gold` | `#C6A75E` | Accents, primary CTA |
| `--gold-deep` | `#A88947` | Gold hover |
| `--text-muted` | `#6B6657` | Secondary text |

Display font: **Cormorant Garamond** (300 weight by default — light + large = premium).
Body font: **Inter** (400/500/600).

## Animations

- **Lenis** drives smooth scroll site-wide (`components/layout/SmoothScroll.tsx`).
- **Framer Motion** powers fade-in / parallax / hero stagger via `components/ui/FadeIn.tsx`.
- Most sections fade up on viewport entry with `once: true` so revisiting doesn't replay.

## Deployment

Push to GitHub, then connect to Vercel:

```bash
git init
git add .
git commit -m "Initial commit — AL Group site"
git remote add origin <your-repo-url>
git push -u origin main
```

In Vercel, add the same env vars from `.env.local`.

## Going Live Checklist

- [ ] Replace `public/logo.svg` with the official AL Group logo.
- [ ] Replace Unsplash placeholders with real client photos (ideally via Sanity).
- [ ] Wire up Sanity project ID + create content in Studio.
- [ ] Wire up Formspree form IDs.
- [ ] Update `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Verify Google Maps embed URLs for each venture.
- [ ] Upload brochure PDFs in Sanity.
- [ ] Confirm phone, email, social URLs in `lib/constants.ts`.
- [ ] Set up Google Search Console and submit the sitemap.
- [ ] Run Lighthouse; target 90+ Performance / 95+ Accessibility / 100 SEO.

## License

© AL Group. All rights reserved.
