<p align="center">
  <img src="assets/gaf-logo.png" alt="GAF Logo" width="160">
</p>

# Gay Adventure Friends — Platform Documentation

**Friends Make Life Better**

Gay Adventure Friends is a community platform serving 5,700+ members across Southern California. The platform replaces a legacy WordPress site with a purpose-built application designed for community classifieds, adventure events, direct messaging, and membership management.

---

## What This Repository Contains

This is the **public documentation** for the GAF platform. It describes the system architecture, database design, API contract, feature set, and migration plan. No source code is included.

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Language | Rust | Memory safety, performance, compile-time guarantees |
| Web Framework | Axum | Async, composable middleware, tower ecosystem |
| Database | PostgreSQL | JSONB for flexible metadata, GIN indexes for search, row-level locking for capacity |
| Templates | Server-side rendered HTML | No SPA complexity, eliminates entire classes of XSS, fast first paint |
| Styling | Tailwind CSS | Utility-first, small bundle, consistent design system |
| Auth | Facebook OAuth + email/password | Matches existing community login flow |
| Payments | Stripe | Subscriptions, one-time donations, webhook-driven |

## Platform Status

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Foundation — Auth, classifieds, moderation, audit | Complete |
| Phase 2 | Communication — Messaging, notifications | Complete |
| Phase 3 | Events + Security — Calendar, RSVP, security audit | Complete |
| Phase 4 | Frontend — SSR pages, admin dashboard, 32 HTML mockups | Complete |
| Phase 5 | WordPress Migration — Theme, CMS, encounters, billing, waivers | In Progress |
| Phase 6 | Polish — Real-time, accessibility, SEO, performance | Planned |

## Documentation

| Document | Description |
|----------|-------------|
| [Branding](docs/BRANDING.md) | Color palette, typography, glass design, visual identity |
| [Architecture](docs/ARCHITECTURE.md) | System design, component diagram, tech justification |
| [Database](docs/DATABASE.md) | Full entity-relationship diagram (24 tables) |
| [API](docs/API.md) | Complete route contract (50 endpoints) |
| [Features](docs/FEATURES.md) | Feature catalog with status badges (Membership, CMS, Waivers: In Progress) |
| [Security](docs/SECURITY.md) | Security posture overview |
| [Wireframes](docs/WIREFRAMES.md) | Screen designs for 10 core views |
| [Migration](docs/MIGRATION.md) | WordPress to GAF transition plan |
| [Roadmap](docs/ROADMAP.md) | Phase timeline with completion status |

## Try the Mockups

Want to see the platform in action? Download and open locally — no server required.

### Quick Start

1. **Download** — [Download ZIP](https://github.com/nestorwheelock/gaf-platform-docs/archive/refs/heads/master.zip)
2. **Unzip** the file anywhere on your computer
3. **Open** `gaf-platform-docs-master/mockups/home.html` in your browser

That's it. Click through the nav to explore all 32 pages — events, RSVP with digital signature, admin dashboard, member profiles, messaging, and more. Everything runs from static files, no internet connection needed after download.

> **Tip:** Use Chrome, Firefox, or Safari for the best experience. The frosted glass effects and background slideshow use modern CSS.

## Interactive Mockups

The [`mockups/`](mockups/) directory contains **32 interactive HTML mockup pages** built on a shared CSS design system. Open any file in a browser to see the full frosted-glass-over-photography theme in action.

### Design System

- **Frosted glass over photography** — fixed background with a 20-photo crossfade slideshow, translucent glass content cards
- **Shared CSS design system** — all 32 pages share `gaf-theme.css`, the same design tokens that will become Tailwind config in production
- **Responsive design** — mobile breakpoints across all pages

### Page Highlights

- **Public pages** — Home, About, Join, Events, Contact, Listings, and more
- **Full RSVP + waiver flow** — digital signature capture, legal checkboxes, liability acknowledgment
- **7-page admin panel** — revenue dashboard, member management, event moderation, content editing
- **10 member profile pages** — cropped face photos, membership cards, RSVP history, activity feeds
- **Authentication flows** — login, registration, password reset, Facebook OAuth

## Key Numbers

- **5,700+** community members
- **24** database tables across 10 domains
- **50** API endpoints
- **32** interactive HTML mockups
- **12** feature modules
- **14** adventure types (hiking, kayaking, sailing, diving, and more)
- **4** membership tiers
- **6** development phases

---

*Documentation provided for evaluation purposes. See [LICENSE](LICENSE) for terms.*
