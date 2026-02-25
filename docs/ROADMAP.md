# Development Roadmap

## Phase 1: Foundation
**Status:** Complete

Core platform infrastructure: authentication (Facebook OAuth + email/password), community classifieds with five categories, admin moderation queue, listing auto-expiry, trusted member auto-approval, and centralized audit logging. Full integration test suite covering auth flows, listing CRUD, and admin operations.

- [x] Facebook OAuth + email/password authentication
- [x] Member profiles with person records
- [x] Classifieds CRUD (jobs, housing, roommates, services, for sale)
- [x] Full-text search with category filtering and pagination
- [x] Admin moderation workflow (approve, reject, suspend)
- [x] 30-day auto-expiry with renewal
- [x] Trusted member auto-approval bypass
- [x] Immutable audit logging
- [x] Integration test suite

## Phase 2: Communication
**Status:** Complete

Member-to-member messaging tied to listings, in-app notification system with event-driven delivery, and conversation management.

- [x] Direct messaging threads
- [x] Listing-linked conversations
- [x] Message delivery and read tracking
- [x] In-app notification inbox
- [x] Notification dispatcher service
- [x] Conversation archival

## Phase 3: Events + Security Hardening
**Status:** Complete

Calendar event management, RSVP with capacity enforcement, recurring series support, and a full security audit with remediation.

- [x] Calendar event CRUD (admin)
- [x] RSVP with capacity management (no overselling)
- [x] Recurring event series via iCalendar rules
- [x] Event lifecycle tracking
- [x] Security audit and remediation
  - [x] Parameterized all database queries
  - [x] Fixed conversation access control
  - [x] Added row-level locking for capacity
  - [x] Hardened CORS configuration
  - [x] Secured OAuth cookie handling
- [x] 18 integration tests

## Phase 4: Frontend
**Status:** In Progress

Server-side rendered pages with the "floating glass over photography" visual theme.

- [x] Landing page with hero section
- [x] Listing browse page (category tabs, search, pagination)
- [x] Listing detail page
- [x] Post listing form
- [x] Admin dashboard with sidebar layout
- [x] Admin moderation queue UI
- [ ] Messages page
- [ ] Events calendar page
- [ ] Mobile responsive refinement

## Phase 5: WordPress Migration
**Status:** Planned

Full replacement of the existing WordPress site. Broken into five sprints.

### 5A: Theme & Layout
Visual implementation of the GAF brand design system.

- [ ] Floating glass CSS system over adventure photography
- [ ] GAF color palette (ocean teal, sunset orange, golden amber)
- [ ] Background image rotation with photographer credits
- [ ] Scroll-based reveal effects
- [ ] Mobile responsive layout
- [ ] 9 curated adventure background images (WebP)

### 5B: CMS & Content Pages
Block-based content management for static pages.

- [ ] CMS page and block infrastructure
- [ ] Page templates: Home, About, Join, Contact
- [ ] Block types: hero, rich text, image gallery, CTA, embed
- [ ] Asset management with WebP variant generation
- [ ] Admin page editor
- [ ] WordPress content import

### 5C: Adventures as Encounters
Upgrade events to the full encounter lifecycle model.

- [ ] 14 adventure types (hiking, kayaking, sailing, snorkeling, diving, whale watching, camping, off-roading, national parks, surfing, water sports, social, holiday, travel)
- [ ] Encounter lifecycle: Scheduled → Active → Completed → Cancelled
- [ ] Attendance roster with check-in tracking
- [ ] Recurring adventure series
- [ ] iCal export and Google Calendar subscription
- [ ] WordPress event history import

### 5D: Membership & Payments
Replace WeTravel with integrated Stripe billing.

- [ ] Four tiers: Basic (free), Supporter ($29/yr), Frequent Flyer ($59/yr), Gold Star ($180/yr)
- [ ] Stripe subscription management
- [ ] Variable one-time donations
- [ ] Webhook-driven payment sync
- [ ] Tier-based event access gating
- [ ] Join flow with tier comparison and checkout

### 5E: Liability Waivers
Adventure liability management.

- [ ] Waiver creation at RSVP time
- [ ] Public token-based signing (no auth required)
- [ ] Signature capture with device fingerprinting
- [ ] Annual renewal tracking
- [ ] Check-in enforcement for unsigned waivers
- [ ] Admin waiver management

## Phase 6: Polish
**Status:** Planned

Final refinements before full production launch.

- [ ] Real-time messaging via WebSocket
- [ ] Per-channel notification preferences
- [ ] Adventure reviews and ratings
- [ ] Post-event photo galleries
- [ ] SEO optimization (meta tags, Open Graph, sitemaps)
- [ ] Performance tuning (lazy loading, caching, CDN)
- [ ] Accessibility audit (WCAG 2.1 AA)
