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

## Membership & Payments ![In Progress](https://img.shields.io/badge/status-in%20progress-yellow)

- Four membership tiers: Basic (free), Supporter ($29/yr), Frequent Flyer ($59/yr), Gold Star ($180/yr)
- Tier comparison page with feature breakdown and pricing cards
- Stripe subscription management (create, upgrade, cancel, renew)
- Variable one-time donations
- Webhook-driven payment status sync
- Tier-based feature gating for events
- Join flow with tier comparison and checkout
- Admin subscriber dashboard with MRR tracking, churn rate, and revenue-by-tier breakdown

## Content Management ![In Progress](https://img.shields.io/badge/status-in%20progress-yellow)

- CMS pages: Home, Contact, Join (mockups complete)
- Block-based content editing (hero, rich text, image gallery, call-to-action, embed)
- Photo management with automatic WebP variant generation
- Admin page editor
- WordPress content import (one-time migration)

## Liability Waivers ![In Progress](https://img.shields.io/badge/status-in%20progress-yellow)

- All adventures require a signed waiver before attendance
- Automatic waiver creation at RSVP time
- Full liability waiver, image release, and photo & video release integrated into RSVP flow
- Digital signature canvas capture
- Five legal checkboxes with accept-all convenience toggle
- Public token-based signing page (no authentication required)
- Signature capture with device fingerprinting
- Annual renewal tracking with configurable validity period
- Check-in blocked for unsigned or expired waivers
- Admin waiver management interface

## RSVP Flow ![In Progress](https://img.shields.io/badge/status-in%20progress-yellow)

- Combined RSVP and waiver page (single-step completion)
- Emergency contact collection (name, phone, relationship)
- Three-step progress indicator: Event details, RSVP & Waiver, Confirmed
- Submit button greyed out and disabled until all required fields and checkboxes are completed
- Device fingerprint capture on signature submission
- Capacity-enforced RSVP with automatic waitlist

## Admin Dashboard ![In Progress](https://img.shields.io/badge/status-in%20progress-yellow)

- Seven-page admin panel: Dashboard, Members, Events, Community, Subscribers, Audit Log, Settings
- Subscription revenue tracking with MRR ($14,847 sample), churn rate (2.1%), and net growth metrics
- Revenue breakdown by membership tier
- Content moderation queue with approve and reject workflows
- Member management with search, filter, and pagination
- Event administration with create, edit, and cancel controls
- Audit log viewer with filtering and export

## Photo & Video Release ![In Progress](https://img.shields.io/badge/status-in%20progress-yellow)

- Detailed release clause covering four usage categories: social media, website and marketing, event recaps and highlights, print materials
- Integrated into RSVP waiver flow as a dedicated legal section
- Opt-out process available via email request to the organization
- 30-day removal commitment for opt-out requests
- Separate checkbox acknowledgment for photo and video release terms
