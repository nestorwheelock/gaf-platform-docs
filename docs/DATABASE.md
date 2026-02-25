# Database Design

The GAF platform uses PostgreSQL with 24 tables organized across 10 domains. The schema is designed around shared domain primitives — reusable models for identity, authorization, communication, scheduling, and capacity management.

## Entity-Relationship Diagrams

> Diagrams show key business columns. All tables include `id` (UUID PK), `created_at`, `updated_at` timestamps, and most carry `deleted_at` for soft delete.

### Identity & Access

```mermaid
erDiagram
    users {
        uuid id PK
        varchar email UK
        uuid person_id FK
        varchar facebook_id UK
        varchar status
    }
    sessions {
        uuid id PK
        uuid user_id FK
        varchar token
        timestamp expires_at
    }
    login_attempts {
        uuid id PK
        varchar email
        boolean success
        varchar ip_address
    }
    persons {
        uuid id PK
        varchar first_name
        varchar last_name
        varchar email
        varchar phone
    }
    organizations {
        uuid id PK
        varchar name
        varchar org_type
    }
    party_relationships {
        uuid id PK
        uuid from_party_id FK
        uuid to_party_id FK
        varchar relationship_type
    }
    tenants {
        uuid id PK
        varchar name
        varchar slug UK
    }
    tenant_members {
        uuid id PK
        uuid tenant_id FK
        uuid user_id FK
        enum role
        enum status
        boolean is_trusted
    }

    users ||--o| persons : "has profile"
    users ||--o{ sessions : "has sessions"
    users ||--o{ tenant_members : "belongs to"
    tenants ||--o{ tenant_members : "has members"
    persons ||--o{ party_relationships : "from"
    persons ||--o{ party_relationships : "to"
```

### Content & Communication

```mermaid
erDiagram
    directory_listings {
        uuid id PK
        uuid tenant_id FK
        uuid person_id FK
        varchar listing_type
        varchar status
        jsonb metadata
        boolean is_featured
        text bio
    }
    stored_files {
        uuid id PK
        varchar original_filename
        varchar content_type
        bigint size_bytes
    }
    listing_photos {
        uuid id PK
        uuid listing_id FK
        uuid file_id FK
        int sort_order
    }
    keywords {
        uuid id PK
        uuid tenant_id FK
        varchar name
        varchar slug UK
    }
    listing_keywords {
        uuid listing_id FK
        uuid keyword_id FK
    }
    taxonomy_terms {
        uuid id PK
        uuid tenant_id FK
        uuid parent_id FK
        varchar name
        varchar slug UK
    }
    conversations {
        uuid id PK
        uuid tenant_id FK
        varchar subject
        varchar status
        varchar conversation_type
    }
    chat_messages {
        uuid id PK
        uuid conversation_id FK
        text body_text
        varchar direction
    }
    notifications {
        uuid id PK
        uuid tenant_id FK
        uuid recipient_party_id FK
        varchar event_type
        varchar title
        varchar channel
    }
    notification_preferences {
        uuid id PK
        uuid party_id FK
        varchar channel
        boolean enabled
    }

    directory_listings ||--o{ listing_photos : "has photos"
    directory_listings ||--o{ listing_keywords : "tagged with"
    stored_files ||--o{ listing_photos : "stores"
    keywords ||--o{ listing_keywords : "applied to"
    taxonomy_terms ||--o{ taxonomy_terms : "parent of"
    conversations ||--o{ chat_messages : "contains"
```

### Events, Capacity & Operations

```mermaid
erDiagram
    calendar_events {
        uuid id PK
        uuid tenant_id FK
        varchar title
        varchar location
        timestamp starts_at
        timestamp ends_at
        uuid organizer_id FK
        varchar recurrence_rule
        int max_attendees
    }
    encounters {
        uuid id PK
        uuid tenant_id FK
        varchar encounter_type
        varchar status
        timestamp scheduled_start
        timestamp scheduled_end
    }
    encounter_participants {
        uuid id PK
        uuid encounter_id FK
        uuid party_id FK
        varchar role
        varchar status
    }
    capacity_pools {
        uuid id PK
        varchar name
        int total_capacity
        int available
    }
    holds {
        uuid id PK
        uuid pool_id FK
        uuid party_id FK
        int quantity
        timestamp expires_at
    }
    reservations {
        uuid id PK
        uuid pool_id FK
        uuid party_id FK
        int quantity
        varchar status
        uuid hold_id FK
    }
    audit_logs {
        uuid id PK
        varchar action
        uuid actor_id FK
        varchar model_label
        varchar object_id
        jsonb changes
        varchar sensitivity
    }
    background_jobs {
        uuid id PK
        varchar job_type
        varchar status
        jsonb payload
        int attempts
        int max_attempts
    }

    encounters ||--o{ encounter_participants : "has participants"
    encounters ||--o| capacity_pools : "manages capacity"
    capacity_pools ||--o{ holds : "has holds"
    capacity_pools ||--o{ reservations : "has reservations"
    holds ||--o| reservations : "converts to"
```

## Domain Narrative

### Authentication
Users authenticate via Facebook OAuth (primary) or email/password. Each user links to a person record for profile data. Sessions track active tokens with expiration and revocation support. Login attempts are logged for security monitoring regardless of success or failure.

### Parties
The parties domain models real-world identities. Persons represent individual community members. Organizations model businesses and groups. Party relationships capture connections between any two parties (family, organizational, social) — these are for identity modeling only, not authorization.

### Tenant & Authorization
Tenants represent isolated communities. Tenant members join with a role (owner, admin, member, guest) and status (invited, active, removed). The tenant boundary is the authorization perimeter — all data access is scoped to the tenant. Trusted members have their content auto-approved.

### Directory Listings
Classifieds with five categories: jobs, housing, roommates, services, and items for sale. Each listing carries type-specific metadata in a JSONB column with GIN indexing for full-text search. Listings go through a moderation workflow (pending → approved/rejected/suspended). Photos attach via a join table to stored files.

### Communication
Conversations are tenant-scoped threads that can optionally relate to another entity (such as a listing). Messages within a conversation track direction, delivery status, and read receipts. This powers both listing inquiries and general member-to-member messaging.

### Notifications
Event-driven notifications delivered via configurable channels (in-app, email, SMS, push). Each notification links to the entity that triggered it. Idempotency keys prevent duplicate delivery. Members configure per-channel preferences including quiet hours with timezone support.

### Calendar & Encounters
Calendar events model the public-facing schedule with support for recurring series via iCalendar RRULE. Encounters represent the operational lifecycle of an adventure — from scheduled through active to completed. An encounter links to its calendar event and tracks actual vs. planned timing. Participants RSVP with role and status tracking.

### Capacity Management
Capacity pools track available spots for events. The reservation system supports a two-phase flow: temporary holds (with expiration) convert to confirmed reservations. Row-level locking prevents overselling. This pattern handles everything from a 6-person kayak trip to a 50-person group hike.

### Audit
An immutable, append-only audit log records every significant action. Database rules prevent updates and deletes on the audit table. Each entry captures the actor, action, affected entity, field-level changes, sensitivity classification, and request metadata. This satisfies compliance requirements and enables full activity reconstruction.

### Background Jobs
Durable job processing for async operations: listing expiry checks, notification dispatch, recurring event series generation, and cleanup tasks. Jobs track attempts with configurable retry limits and store both payloads and results as structured JSON.
