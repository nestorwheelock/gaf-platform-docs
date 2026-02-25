# WordPress Migration Plan

Gay Adventure Friends currently runs on WordPress with multiple plugins. This document describes the transition to the purpose-built GAF platform.

## Current Stack Mapping

| WordPress Component | Function | GAF Replacement |
|---------------------|----------|-----------------|
| Elementor | Page builder | Server-side rendered templates with block-based CMS |
| The Events Calendar | Event management | Calendar + encounter system with capacity management |
| Ultimate Member | Member profiles, registration | Authentication system with Facebook OAuth + profiles |
| WooCommerce | E-commerce (limited use) | Stripe integration for subscriptions and donations |
| WeTravel | Membership tiers, trip payments | Built-in 4-tier membership with Stripe billing |
| Yoast SEO | Search engine optimization | Server-rendered HTML with meta tags and Open Graph |
| WP Mail | Email notifications | Notification service with multi-channel delivery |

## Content Migration

### Pages
The following WordPress pages will be migrated to the CMS:

| Page | Content Type | Notes |
|------|-------------|-------|
| Home | Hero + upcoming events + highlights | Block-based: hero, event list, testimonials |
| About | Rich text + photos | History, mission, team |
| Join | Membership tiers + checkout | Tier comparison table + Stripe flow |
| Contact | Contact form + info | Form submission + location/social links |
| Events | Calendar listing | Replaced by native events system |

Content is migrated by extracting text and images from Elementor JSON, then importing into the CMS as content blocks (hero, rich text, image gallery, call-to-action, embed).

### Events
- **Past events** — Imported as completed encounters for historical record
- **Future events** — Imported as scheduled encounters with calendar events
- **Recurring events** — Mapped to iCalendar recurrence rules
- **RSVP data** — Imported as encounter participants where available

### Media
- WordPress uploads directory exported and processed
- Images converted to WebP format with automatic variant generation (thumbnail, medium, large)
- Photo galleries migrated as asset collections
- Adventure background images (9 curated photos) served from static assets

### Members
- Member profiles imported from Ultimate Member into persons + users tables
- Facebook-linked accounts map directly to Facebook OAuth records
- Email-only accounts receive a password reset on first login
- Membership tier history mapped to billing subscription records
- Member roles (admin, moderator) mapped to tenant roles (owner, admin)

## Zero-Downtime Cutover Strategy

The migration follows a staged approach to avoid disruption:

### Phase 1: Parallel Operation
- GAF platform deployed on a staging subdomain (e.g., `new.gayadventurefriends.com`)
- WordPress remains the primary site
- Data sync runs nightly: new WordPress members and events replicated to GAF
- Community leaders preview and validate the new platform

### Phase 2: Feature Parity Validation
- All WordPress features confirmed operational on GAF
- Member accounts verified (login, profile, history)
- Event creation and RSVP tested with real community events
- Payment flow validated with Stripe test mode, then live

### Phase 3: DNS Cutover
- WordPress placed in read-only mode
- Final data sync executed
- DNS updated: `gayadventurefriends.com` points to GAF platform
- WordPress redirects all traffic to new platform
- 72-hour monitoring window with rollback plan

### Phase 4: Decommission
- WordPress instance maintained in read-only archive for 90 days
- After confirmation period, WordPress hosting cancelled
- Domain fully consolidated on GAF infrastructure

## Domain Transition

| Record | Before | After |
|--------|--------|-------|
| `gayadventurefriends.com` | WordPress hosting | GAF application server |
| `www.gayadventurefriends.com` | WordPress hosting | Redirect to apex domain |
| MX records | Current email provider | No change |
| SSL | WordPress host managed | Let's Encrypt / Caddy auto-TLS |

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Member confusion during transition | Email announcement + banner on WordPress with timeline |
| Facebook OAuth redirect URI change | Update Facebook App settings before DNS cutover |
| Lost content during migration | Full WordPress backup + parallel operation validates completeness |
| Stripe webhook delivery | Configure webhooks on new domain before cutover |
| SEO ranking impact | 301 redirects for all existing URLs + sitemap submission |
