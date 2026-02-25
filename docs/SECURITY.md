# Security Posture

This document describes the security architecture of the GAF platform at a high level. Implementation details and specific vulnerability mitigations are maintained internally.

## Authentication & Sessions

- **Password storage** uses a memory-hard hashing algorithm resistant to GPU-based cracking
- **JWT tokens** are signed, have a 24-hour expiry, and are delivered in HTTP-only cookies inaccessible to JavaScript
- **Session revocation** is supported — tokens can be invalidated server-side before expiry
- **Login attempts** are logged with IP address and user agent for anomaly detection
- **Facebook OAuth** follows the authorization code flow with server-side token exchange (no client-side token exposure)
- **Cookie security** flags: `HttpOnly`, `Secure`, `SameSite=Lax`

## Authorization

- **Four-tier RBAC** — Owner, Admin, Member, Guest — enforced at the middleware layer before handlers execute
- **Tenant scoping** — Every database query filters by tenant ID. There is no cross-tenant data access path.
- **Ownership verification** — Members can only modify their own resources. Admin endpoints verify role before execution.
- **Principle of least privilege** — Guest role has read-only access. Member role cannot access admin functions. Admin cannot reassign the owner role.

## Data Protection

- **Parameterized queries** — All database queries use compile-time verified parameterized statements. No string concatenation or interpolation in SQL.
- **Input validation** — Request payloads are validated against typed schemas before reaching business logic. Invalid input is rejected with structured error responses.
- **Soft deletes** — Records are never physically removed. A `deleted_at` timestamp supports data recovery, audit compliance, and GDPR-style lifecycle management.
- **JSONB metadata** — Flexible fields are stored as typed JSON validated at the application layer, preventing schema injection.

## Audit & Compliance

- **Immutable audit log** — Database-level rules prevent updates and deletes on audit records. The log is append-only by design, not by convention.
- **Field-level diffs** — Every modification records the before and after values of changed fields.
- **Sensitivity classification** — Audit entries are tagged as normal, sensitive, or secret to support access-tiered log review.
- **Full moderation history** — Every listing approval, rejection, suspension, role change, and member action is permanently recorded with actor identity and timestamp.

## Digital Waivers & Legal Compliance

- **Inline legal presentation** — Liability waiver, image release, and photo/video release are presented inline during the RSVP flow. Users cannot proceed without reviewing each document in context.
- **Granular acknowledgement** — Five individual legal checkboxes must be independently affirmed before submission. Bulk "agree to all" is not offered; each obligation requires explicit, informed consent.
- **Digital signature capture** — Signatures are collected via an HTML5 canvas element supporting both mouse and touch input. The captured signature image is stored as an immutable artifact linked to the signing event.
- **Device fingerprinting at signing** — Every waiver execution records the signer's IP address, browser and operating system identifiers, and an ISO 8601 timestamp. This evidence chain supports legal enforceability and dispute resolution.
- **Enforced completion gate** — The RSVP submission control remains disabled until all legal requirements are satisfied. There is no client-side bypass path; server-side validation independently verifies completeness before accepting the registration.
- **Waiver expiration** — Signed waivers are valid for one year from the signing date. Expired waivers must be re-executed before participating in subsequent events.
- **Emergency contact collection** — Outdoor adventure RSVPs require emergency contact information. This data is collected as part of the waiver flow and is accessible only to event organizers and administrators.
- **Photo/video release with opt-out** — The release grants usage rights for community promotion. Members may revoke consent via written request, triggering a 30-day removal window for previously published media.
- **Immutable signing audit trail** — Waiver signing events are recorded in the append-only audit log with actor identity, device fingerprint, and document version. These records cannot be modified or deleted after creation.

## Infrastructure

- **Server-side rendering** — HTML is rendered on the server. There is no client-side JavaScript framework, eliminating entire classes of XSS, CSRF token leakage, and DOM manipulation vulnerabilities common in single-page applications.
- **CORS** — Configured with an explicit origin allowlist. Wildcard origins are not permitted.
- **Connection pooling** — Database connections are managed through a bounded pool to prevent resource exhaustion.
- **Request IDs** — Every request receives a unique identifier propagated through the audit log for end-to-end tracing.
- **No secrets in client** — All sensitive operations (OAuth token exchange, payment processing, session management) happen server-side. The browser never receives API keys, tokens, or secrets.

## Capacity & Race Conditions

- **Row-level locking** — Event RSVP and capacity management use database-level row locks within transactions to prevent overselling.
- **Hold expiration** — Temporary reservation holds expire automatically, preventing indefinite seat hoarding.
- **Idempotent operations** — Notification delivery and other async operations use idempotency keys to prevent duplicate processing.
