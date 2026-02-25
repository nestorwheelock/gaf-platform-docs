# API Contract

The GAF platform exposes 50 endpoints organized by access level. All routes are served over HTTPS. API routes return JSON; page routes return server-rendered HTML.

## Authentication Model

- **Primary:** Facebook OAuth — redirects to Facebook, exchanges code for token, creates or updates user
- **Secondary:** Email/password with Argon2 hashing
- **Session:** Signed JWT in HTTP-only cookie, 24-hour expiry
- **Roles:** Owner, Admin, Member, Guest (tenant-scoped)

## Public Routes

No authentication required.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Home page with recent listings |
| GET | `/login` | Login page |
| GET | `/register` | Registration page |
| GET | `/listings` | Browse approved listings with search and category filters |
| GET | `/listings/:id` | View listing details |
| GET | `/health` | Health check |

## Auth Routes

Form submissions and OAuth flow. No prior authentication required.

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/register` | Register via email/password |
| POST | `/auth/login` | Login via email/password |
| GET | `/auth/logout` | Logout and clear session cookie |
| GET | `/api/auth/facebook` | Redirect to Facebook OAuth |
| GET | `/api/auth/facebook/callback` | Facebook OAuth callback |

## Member API

Requires authenticated session (any role).

### Profile

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/me` | Get current user profile |
| PUT | `/api/me` | Update profile (name, phone) |

### Listings

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/listings` | List approved listings with pagination |
| POST | `/api/listings` | Create new listing |
| GET | `/api/listings/:id` | Get listing details |
| PUT | `/api/listings/:id` | Update own listing |
| DELETE | `/api/listings/:id` | Delete own listing |
| POST | `/api/listings/:id/renew` | Renew listing for another 30 days |
| GET | `/api/my-listings` | List own listings (all statuses) |
| GET | `/listings/new` | New listing form page |
| POST | `/listings/create` | Submit listing form |
| GET | `/my-listings` | Own listings page |

### Conversations

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/conversations` | List conversations |
| POST | `/api/conversations` | Start new conversation |
| GET | `/api/conversations/:id` | Get conversation with messages |
| POST | `/api/conversations/:id/messages` | Send message |

### Events

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/events` | List upcoming events |
| GET | `/api/events/:id` | Get event details with RSVP status |
| POST | `/api/events/:id/rsvp` | RSVP to event |
| DELETE | `/api/events/:id/rsvp` | Cancel RSVP |

### Notifications

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/notifications` | List notifications |
| PUT | `/api/notifications/:id/read` | Mark notification as read |

## Admin API

Requires Owner or Admin role.

### Listings Moderation

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/admin/listings/pending` | Get moderation queue |
| PUT | `/api/admin/listings/:id/approve` | Approve listing |
| PUT | `/api/admin/listings/:id/reject` | Reject listing with notes |
| PUT | `/api/admin/listings/:id/suspend` | Suspend listing |
| PUT | `/api/admin/listings/:id/feature` | Toggle featured status |

### Members

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/admin/members` | List all members |
| PUT | `/api/admin/members/:id/role` | Change member role |
| PUT | `/api/admin/members/:id/trust` | Toggle trusted status |
| DELETE | `/api/admin/members/:id` | Remove member |

### Events

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/admin/events` | List all events |
| POST | `/api/admin/events` | Create event |
| PUT | `/api/admin/events/:id` | Update event |
| DELETE | `/api/admin/events/:id` | Cancel event |

### Audit

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/admin/audit` | Get audit log |

## Admin Pages

Server-rendered admin interface. Requires Owner or Admin role.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/admin` | Dashboard with stats and recent activity |
| GET | `/admin/listings` | Listings management with status filter |
| POST | `/admin/listings/:id/approve` | Approve listing (form) |
| POST | `/admin/listings/:id/reject` | Reject listing (form) |
| POST | `/admin/listings/:id/suspend` | Suspend listing (form) |
| GET | `/admin/members` | Member management |
| POST | `/admin/members/:id/role` | Change role (form) |
| GET | `/admin/audit` | Audit log viewer |

## Route Summary

| Group | Count |
|-------|-------|
| Public | 6 |
| Auth | 5 |
| Member API | 20 |
| Admin API | 13 |
| Admin Pages | 8 |
| **Total** | **52** |
