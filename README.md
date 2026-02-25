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

## Screenshots

30 pages, all built on a shared frosted-glass-over-photography design system. Click any thumbnail for full size.

### Public Pages

<table>
<tr>
<td align="center"><a href="screenshots/home.png"><img src="screenshots/thumbs/home.png" width="220"><br><b>Home</b></a></td>
<td align="center"><a href="screenshots/events.png"><img src="screenshots/thumbs/events.png" width="220"><br><b>Events</b></a></td>
<td align="center"><a href="screenshots/event-detail.png"><img src="screenshots/thumbs/event-detail.png" width="220"><br><b>Event Detail</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/listings.png"><img src="screenshots/thumbs/listings.png" width="220"><br><b>Listings</b></a></td>
<td align="center"><a href="screenshots/listing-detail.png"><img src="screenshots/thumbs/listing-detail.png" width="220"><br><b>Listing Detail</b></a></td>
<td align="center"><a href="screenshots/contact.png"><img src="screenshots/thumbs/contact.png" width="220"><br><b>Contact</b></a></td>
</tr>
</table>

### RSVP & Waivers

<table>
<tr>
<td align="center"><a href="screenshots/rsvp.png"><img src="screenshots/thumbs/rsvp.png" width="220"><br><b>RSVP + Waiver</b></a></td>
<td align="center"><a href="screenshots/waiver-sign.png"><img src="screenshots/thumbs/waiver-sign.png" width="220"><br><b>Waiver Sign</b></a></td>
</tr>
</table>

### Auth & Membership

<table>
<tr>
<td align="center"><a href="screenshots/login.png"><img src="screenshots/thumbs/login.png" width="220"><br><b>Login</b></a></td>
<td align="center"><a href="screenshots/join.png"><img src="screenshots/thumbs/join.png" width="220"><br><b>Join / Membership</b></a></td>
</tr>
</table>

### Messaging

<table>
<tr>
<td align="center"><a href="screenshots/messages.png"><img src="screenshots/thumbs/messages.png" width="220"><br><b>Messages</b></a></td>
<td align="center"><a href="screenshots/conversation.png"><img src="screenshots/thumbs/conversation.png" width="220"><br><b>Conversation</b></a></td>
</tr>
</table>

### Member Profiles

<table>
<tr>
<td align="center"><a href="screenshots/member.png"><img src="screenshots/thumbs/member.png" width="220"><br><b>My Profile</b></a></td>
<td align="center"><a href="screenshots/profile-jeffrey.png"><img src="screenshots/thumbs/profile-jeffrey.png" width="220"><br><b>Jeffrey L.</b></a></td>
<td align="center"><a href="screenshots/profile-alex.png"><img src="screenshots/thumbs/profile-alex.png" width="220"><br><b>Alex M.</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/profile-chris.png"><img src="screenshots/thumbs/profile-chris.png" width="220"><br><b>Chris T.</b></a></td>
<td align="center"><a href="screenshots/profile-david.png"><img src="screenshots/thumbs/profile-david.png" width="220"><br><b>David R.</b></a></td>
<td align="center"><a href="screenshots/profile-jason.png"><img src="screenshots/thumbs/profile-jason.png" width="220"><br><b>Jason L.</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/profile-kevin.png"><img src="screenshots/thumbs/profile-kevin.png" width="220"><br><b>Kevin P.</b></a></td>
<td align="center"><a href="screenshots/profile-mark.png"><img src="screenshots/thumbs/profile-mark.png" width="220"><br><b>Mark S.</b></a></td>
<td align="center"><a href="screenshots/profile-miguel.png"><img src="screenshots/thumbs/profile-miguel.png" width="220"><br><b>Miguel S.</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/profile-carlos.png"><img src="screenshots/thumbs/profile-carlos.png" width="220"><br><b>Carlos M.</b></a></td>
<td align="center"><a href="screenshots/profile-ryan.png"><img src="screenshots/thumbs/profile-ryan.png" width="220"><br><b>Ryan T.</b></a></td>
<td></td>
</tr>
</table>

### Admin Panel

<table>
<tr>
<td align="center"><a href="screenshots/admin.png"><img src="screenshots/thumbs/admin.png" width="220"><br><b>Dashboard</b></a></td>
<td align="center"><a href="screenshots/admin-members.png"><img src="screenshots/thumbs/admin-members.png" width="220"><br><b>Members</b></a></td>
<td align="center"><a href="screenshots/admin-events.png"><img src="screenshots/thumbs/admin-events.png" width="220"><br><b>Events</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/admin-community.png"><img src="screenshots/thumbs/admin-community.png" width="220"><br><b>Community</b></a></td>
<td align="center"><a href="screenshots/admin-subscribers.png"><img src="screenshots/thumbs/admin-subscribers.png" width="220"><br><b>Subscribers</b></a></td>
<td align="center"><a href="screenshots/admin-audit.png"><img src="screenshots/thumbs/admin-audit.png" width="220"><br><b>Audit Log</b></a></td>
</tr>
<tr>
<td align="center"><a href="screenshots/admin-settings.png"><img src="screenshots/thumbs/admin-settings.png" width="220"><br><b>Settings</b></a></td>
<td></td>
<td></td>
</tr>
</table>

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
