<p align="center">
  <img src="assets/gaf-logo.png" alt="GAF Logo" width="160">
</p>

# Gay Adventure Friends — Platform Documentation

**Friends Make Life Better**

Gay Adventure Friends is a community platform serving 5,700+ members across Southern California. The platform replaces a legacy WordPress site with a purpose-built application designed for community classifieds, adventure events, direct messaging, and membership management.

---

## What This Repository Contains

This is the **public documentation** for the GAF platform. It describes the system architecture, database design, API contract, feature set, and migration plan. No source code is included.

## How It's Built

This is **rapid development with Rust**.

The platform is assembled from a library of **Rust primitive crates** — reusable, test-driven components I built for database-driven systems, originally for tourism and hospitality software in Mexico. Each crate handles one domain: authentication, multi-tenancy, party/membership modeling, encounter scheduling, billing, messaging, content management, audit logging. Each ships with its own unit test suite and PostgreSQL migrations.

Building a new platform means wiring these components together and writing the domain-specific logic on top. GAF needed adventure types, liability waivers, RSVP capacity management, and a WordPress migration path — that's the custom layer. Everything underneath it already existed and was already tested.

| Layer | Technology |
|-------|-----------|
| Language | Rust |
| Domain Models | Rust Primitives — auth, tenancy, parties, encounters, billing, messaging, CMS, audit |
| Web Framework | Axum |
| Database | PostgreSQL |
| Templates | Server-side rendered HTML |
| Styling | Tailwind CSS |
| Auth | Facebook OAuth + email/password |
| Payments | Stripe |

## Development Phases

| Phase | Description |
|-------|-------------|
| Phase 1 | Foundation — Auth, classifieds, moderation, audit |
| Phase 2 | Communication — Messaging, notifications |
| Phase 3 | Events + Security — Calendar, RSVP, security audit |
| Phase 4 | Frontend — SSR pages, admin dashboard, 30 interactive mockups |
| Phase 5 | WordPress Migration — Theme, CMS, encounters, billing, waivers |
| Phase 6 | Polish — Real-time, accessibility, SEO, performance |

## Documentation

| Document | Description |
|----------|-------------|
| [Branding](docs/BRANDING.md) | Color palette, typography, glass design, visual identity |
| [Architecture](docs/ARCHITECTURE.md) | System design, component diagram, tech justification |
| [Database](docs/DATABASE.md) | Full entity-relationship diagram (24 tables) |
| [API](docs/API.md) | Complete route contract (50 endpoints) |
| [Features](docs/FEATURES.md) | Feature catalog with status badges (Membership, CMS, Waivers: In Progress) |
| [Security](docs/SECURITY.md) | Security posture overview |
| [Mockups](docs/MOCKUPS.md) | Screenshot gallery of all 30 interactive pages |
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

## Screenshots

30 pages built on a shared frosted-glass-over-photography design system. Click any thumbnail for full size.

<table>
<tr>
<td align="center"><a href="screenshots/home.png"><img src="screenshots/thumbs/home.png" width="220"><br><b>Home</b></a></td>
<td align="center"><a href="screenshots/events.png"><img src="screenshots/thumbs/events.png" width="220"><br><b>Events</b></a></td>
<td align="center"><a href="screenshots/rsvp.png"><img src="screenshots/thumbs/rsvp.png" width="220"><br><b>RSVP + Waiver</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/messages.png"><img src="screenshots/thumbs/messages.png" width="220"><br><b>Messages</b></a></td>
<td align="center"><a href="screenshots/profile-jeffrey.png"><img src="screenshots/thumbs/profile-jeffrey.png" width="220"><br><b>Member Profile</b></a></td>
<td align="center"><a href="screenshots/admin-subscribers.png"><img src="screenshots/thumbs/admin-subscribers.png" width="220"><br><b>Admin Panel</b></a></td>
</tr>
</table>

**[View all 30 screenshots with descriptions &rarr;](docs/MOCKUPS.md)**

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
