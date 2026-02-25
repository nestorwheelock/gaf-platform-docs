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

## Phase 4: Frontend / SSR
**Status:** In Progress (significant progress)

Server-side rendered pages with the "floating glass over photography" visual theme. 32 HTML mockup pages complete with full design system, all page templates built, and interactive elements working (signature pad, accept-all, disabled-until-complete buttons).

- [x] Landing page with hero section
- [x] Listing browse page (category tabs, search, pagination)
- [x] Listing detail page
- [x] Post listing form
- [x] Admin dashboard with sidebar layout
- [x] Admin moderation queue UI
- [x] Messages page
- [x] Events calendar page
- [x] Mobile responsive refinement
- [x] 32 HTML mockup pages with full design system
- [x] All page templates built
- [x] Interactive elements (signature pad, accept-all, disabled-until-complete buttons)

## Phase 5: WordPress Migration
**Status:** Mockups Complete, Ready for Implementation

Full replacement of the existing WordPress site. Broken into five sprints. All sprints now have approved mockups and wireframes ready for backend integration and implementation.

### 5A: Theme & Layout (Sprint 1)
Design system complete — `gaf-theme.css` with full color palette, frosted glass effects, typography scale, 20-photo background slideshow with crossfade transitions, and responsive nav/footer.

- [x] Floating glass CSS system over adventure photography
- [x] GAF color palette (ocean teal, sunset orange, golden amber)
- [x] Full `gaf-theme.css` design system with frosted glass and typography
- [x] 20-photo background slideshow with crossfade transitions
- [x] Photographer credits via bg-reveal section
- [x] Scroll-based reveal effects (nav/footer fade)
- [x] Mobile responsive layout
- [ ] WebP optimization pipeline for background images

### 5B: CMS & Content Pages (Sprint 2)
Home, About, Join, and Contact pages mockup'd with real GAF content and brand photography.

- [x] Page templates: Home, About, Join, Contact (mockups with real content)
- [ ] CMS page and block infrastructure (backend)
- [ ] Block types: hero, rich text, image gallery, CTA, embed
- [ ] Asset management with WebP variant generation
- [ ] Admin page editor
- [ ] WordPress content import

### 5C: Adventures as Encounters (Sprint 3)
Events list, event detail, RSVP + waiver flow complete with capacity bars, attendee lists, and emergency contact collection.

- [x] Events list page mockup
- [x] Event detail page mockup
- [x] RSVP + waiver flow with capacity progress bars
- [x] Attendee list display
- [x] Emergency contact collection
- [ ] 14 adventure types (hiking, kayaking, sailing, snorkeling, diving, whale watching, camping, off-roading, national parks, surfing, water sports, social, holiday, travel)
- [ ] Encounter lifecycle: Scheduled → Active → Completed → Cancelled
- [ ] Attendance roster with check-in tracking
- [ ] Recurring adventure series
- [ ] iCal export and Google Calendar subscription
- [ ] WordPress event history import

### 5D: Membership & Payments (Sprint 4)
4-tier comparison page, Stripe checkout mockup, and admin subscriber dashboard with MRR, churn, and revenue-by-tier metrics.

- [x] Four-tier comparison page mockup
- [x] Stripe checkout flow mockup
- [x] Admin subscriber dashboard mockup (MRR, churn, revenue-by-tier)
- [ ] Stripe subscription management (backend)
- [ ] Variable one-time donations
- [ ] Webhook-driven payment sync
- [ ] Tier-based event access gating
- [ ] Join flow backend integration

### 5E: Liability Waivers (Sprint 5)
Full liability waiver, image release, and photo/video release with digital signature capture, legal checkboxes, and device fingerprinting.

- [x] Liability waiver mockup with legal checkboxes
- [x] Image release waiver mockup
- [x] Photo/video release waiver mockup
- [x] Digital signature pad (canvas-based capture)
- [x] Device fingerprinting for signature verification
- [x] Accept-all and disabled-until-complete button patterns
- [ ] Waiver creation at RSVP time (backend)
- [ ] Public token-based signing (no auth required)
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
