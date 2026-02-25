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
| Phase 4 | Frontend — SSR pages, admin dashboard | In Progress |
| Phase 5 | WordPress Migration — Theme, CMS, encounters, billing, waivers | Planned |
| Phase 6 | Polish — Real-time, accessibility, SEO, performance | Planned |

## Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/ARCHITECTURE.md) | System design, component diagram, tech justification |
| [Database](docs/DATABASE.md) | Full entity-relationship diagram (24 tables) |
| [API](docs/API.md) | Complete route contract (50 endpoints) |
| [Features](docs/FEATURES.md) | Feature catalog with status badges |
| [Security](docs/SECURITY.md) | Security posture overview |
| [Wireframes](docs/WIREFRAMES.md) | Screen designs for 10 core views |
| [Migration](docs/MIGRATION.md) | WordPress to GAF transition plan |
| [Roadmap](docs/ROADMAP.md) | Phase timeline with completion status |

## Key Numbers

- **5,700+** community members
- **24** database tables across 10 domains
- **50** API endpoints
- **12** feature modules
- **14** adventure types (hiking, kayaking, sailing, diving, and more)
- **4** membership tiers
- **6** development phases

---

*Documentation provided for evaluation purposes. See [LICENSE](LICENSE) for terms.*
