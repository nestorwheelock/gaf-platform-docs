# Feature Catalog

## Authentication & Accounts ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Facebook OAuth login (primary authentication flow)
- Email/password registration and login (fallback)
- JWT session management with 24-hour expiry
- Session tracking with revocation support
- Login attempt logging for security monitoring
- Automatic user profile creation on first login

## Community Classifieds ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Five listing categories: jobs, housing, roommates, services, items for sale
- Flexible metadata per category (salary ranges, rent, availability, etc.)
- Full-text search across listing content and metadata
- Category and keyword filtering with pagination
- Photo uploads with sort ordering
- 30-day auto-expiry with renewal option
- Trusted member auto-approval bypass

## Content Moderation ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Admin moderation queue for pending listings
- Approve, reject, and suspend workflows with reviewer notes
- Featured listing promotion
- Full moderation history in audit log
- Trusted member designation for auto-approval

## Direct Messaging ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Conversation threads between members
- Listing-linked conversations (inquire about a listing)
- Message delivery and read tracking
- Conversation archival
- Tenant-scoped message isolation

## Events & Adventures ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Calendar event creation with date, time, location, and capacity
- RSVP with capacity enforcement (no overselling)
- Recurring event series support via iCalendar rules
- Event lifecycle tracking (scheduled → active → completed)
- Attendee role assignment (organizer, attendee)
- Admin event management (create, update, cancel)

## Notifications ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- In-app notification inbox
- Event-driven notifications (new message, RSVP confirmation, listing moderation)
- Read/unread tracking
- Idempotent delivery (no duplicate notifications)
- Configurable per-channel preferences with quiet hours

## Member Management ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Four-tier role system: owner, admin, member, guest
- Invitation flow with token-based acceptance
- Role management by admins
- Trust flag for content auto-approval
- Member removal with soft delete
- Profile editing (name, phone, email)

## Audit Trail ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Immutable, append-only audit log
- Field-level change tracking (before/after diffs)
- Sensitivity classification (normal, sensitive, secret)
- Actor identification with IP and user agent
- Request and trace ID correlation
- Admin audit log viewer

## Background Jobs ![Complete](https://img.shields.io/badge/status-complete-brightgreen)

- Listing expiry checker (30-day window)
- Notification dispatch service
- Recurring event series generator
- Session and hold cleanup
- Configurable retry with structured error tracking
- Job status monitoring (pending → processing → completed/failed)

## Membership & Payments ![Planned](https://img.shields.io/badge/status-planned-lightgrey)

- Four membership tiers: Basic (free), Supporter ($29/yr), Frequent Flyer ($59/yr), Gold Star ($180/yr)
- Stripe subscription management (create, upgrade, cancel, renew)
- Variable one-time donations
- Webhook-driven payment status sync
- Tier-based feature gating for events
- Join flow with tier comparison and checkout

## Content Management ![Planned](https://img.shields.io/badge/status-planned-lightgrey)

- CMS pages: Home, About, Join, Contact
- Block-based content editing (hero, rich text, image gallery, call-to-action, embed)
- Photo management with automatic WebP variant generation
- Admin page editor
- WordPress content import (one-time migration)

## Liability Waivers ![Planned](https://img.shields.io/badge/status-planned-lightgrey)

- All adventures require a signed waiver before attendance
- Automatic waiver creation at RSVP time
- Public token-based signing page (no authentication required)
- Signature capture with device fingerprinting
- Annual renewal tracking with configurable validity period
- Check-in blocked for unsigned or expired waivers
- Admin waiver management interface
