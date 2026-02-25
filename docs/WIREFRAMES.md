# Wireframes

Visual designs for all 30 screens of the GAF platform (32 mockup HTML files counting each profile page individually). The visual theme is "floating glass over photography" -- frosted translucent content cards layered over full-bleed adventure photography, with an ocean teal and sunset orange color palette derived from actual GAF adventure photos. All admin pages share a sidebar + content layout.

**30 pages total:** 6 public, 17 authenticated (including 10 member profiles), 7 admin.

---

# Public Pages

## 1. Home (`home.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home About Events Community Contact   Join |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |            ## FROSTED GLASS HERO ##                | |
|  |           [Logo photo - circular]                  | |
|  |          Gay Adventure Friends                     | |
|  |          Friends Make Life Better                  | |
|  |  5,700+ members . SoCal adventures . Since 2015   | |
|  |       [ Join the Community ] [ See Events ]        | |
|  +---------------------------------------------------+ |
|                                                         |
|  +--- Upcoming Adventures ----------------------------+ |
|  | +----------+ +----------+ +----------+             | |
|  | |[sq photo]| |[sq photo]| |[sq photo]|             | |
|  | | Hiking   | | Kayaking | | Sailing  |             | |
|  | | Mar 15   | | Mar 22   | | Apr 5    |             | |
|  | | ####__ | | ####__ | | ####__ |             | |
|  | | 16/20    | | 8/12     | | 5/6      |             | |
|  | | [RSVP]   | | [RSVP]   | | [RSVP]   |             | |
|  | +----------+ +----------+ +----------+             | |
|  +----------------------------------------------------+ |
|                                                         |
|  +--- What Members Say ------------------------------+ |
|  | "Best hiking group..." "Made lifelong friends..."  | |
|  | -- Alex M., 2019      -- Chris T., 2021           | |
|  |            "Whale watching changed my life"        | |
|  |            -- David R., 2018                       | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025 . About . Events . etc  |
+---------------------------------------------------------+
| ### BACKGROUND IMAGE REVEAL ZONE ###                    |
```

The home page opens with a full-viewport hero over adventure photography. A circular logo and frosted glass card carry the community tagline and primary CTAs. Upcoming events display as square-thumbnail cards in a 3-column grid with capacity bars and RSVP buttons. Testimonials appear below with member attributions. The footer fades on scroll to reveal the background image.

---

## 2. Login / Register (`login.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home About Events Community Contact   Join |
+---------------------------------------------------------+
|                                                         |
|        +------------------------------+                 |
|        |    ## FROSTED GLASS ##       |                 |
|        |                              |                 |
|        |   Welcome Back / Join Us     |                 |
|        |                              |                 |
|        |  +------------------------+  |                 |
|        |  | Continue with Facebook |  |                 |
|        |  +------------------------+  |                 |
|        |                              |                 |
|        |  ---------- or ----------   |                 |
|        |                              |                 |
|        |  Email   [________________]  |                 |
|        |  Password[________________]  |                 |
|        |                              |                 |
|        |  [ Log In ]   [ Register ]   |                 |
|        |                              |                 |
|        |  Forgot password?            |                 |
|        +------------------------------+                 |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

A centered glass card over the adventure photo background. Facebook OAuth is the primary action -- a large blue button at the top. Email/password fields appear below as a fallback. The same form toggles between login and registration modes.

---

## 3. Join / Membership (`join.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home About Events Community Contact   Join |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  Join Gay Adventure Friends                        | |
|  |  Choose the membership that fits your adventure    | |
|  |  style.                                            | |
|  |                                                    | |
|  | +----------++----------++----------++----------+   | |
|  | |  Basic   || Supporter|| Frequent || Gold Star|   | |
|  | |          ||          ||  Flyer   ||          |   | |
|  | |  Free    ||  $29/yr  ||  $59/yr  || $180/yr  |   | |
|  | |          ||          ||          ||          |   | |
|  | | . Email  || . Most   || . Almost || . ALL    |   | |
|  | |   list   ||   events ||   all    ||   events |   | |
|  | | . Select || . Listing||   events || . First  |   | |
|  | |   events ||   badge  || . Early  ||   access |   | |
|  | |          || . Some   ||   access || . Exclus-|   | |
|  | |          ||   disc-  || . Event  ||   ives   |   | |
|  | |          ||   ounts  ||   disc-  || . All    |   | |
|  | |          ||          ||   ounts  ||   disc-  |   | |
|  | |          ||          ||          ||   ounts  |   | |
|  | | [Join]   || [Join]   || [Join]   || [Join]   |   | |
|  | +----------++----------++----------++----------+   | |
|  |                                                    | |
|  |  ------------------------------------------------  | |
|  |                                                    | |
|  |  Or make a one-time donation:                      | |
|  |  Amount: [$_______]  [ Donate ]                    | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

Four membership tiers in a side-by-side comparison layout. Each card shows name, annual price, and bullet-point benefits. The Join button on each card initiates Stripe checkout. Below the tiers, a variable-amount donation field allows one-time contributions.

---

## 4. Contact (`contact.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home About Events Community Contact   Join |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  Get in Touch                                      | |
|  |  Have a question? Drop us a message or connect.    | |
|  |                                                    | |
|  |  +--- Form ----+  +--- Sidebar ----+              | |
|  |  | Name  [____] |  | Connect With Us|              | |
|  |  | Email [____] |  |                |              | |
|  |  | Subject [v]  |  | +--[f]------+ |              | |
|  |  |   General    |  | | Facebook   | |              | |
|  |  |   Membership |  | | 5,700+     | |              | |
|  |  |   Event      |  | +------------+ |              | |
|  |  |   Partner    |  |                |              | |
|  |  | Message      |  | +--[IG]-----+ |              | |
|  |  | [__________] |  | | Instagram  | |              | |
|  |  | [__________] |  | | @gayadv... | |              | |
|  |  |              |  | +------------+ |              | |
|  |  | [Send]       |  |                |              | |
|  |  +--------------+  | Based in SoCal |              | |
|  |                     | SD.OC.PS.LA   |              | |
|  |                     +---------------+              | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

A two-column glass card. The left column contains a contact form with name, email, subject dropdown (General, Membership, Event, Partnership, Other), message textarea, and send button. The right column shows social media cards for Facebook and Instagram with icons and descriptions, plus a region info card listing SoCal coverage areas.

---

## 5. Events List (`events.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  Upcoming Adventures                               | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [photo] Sunset Cliffs Hike                    | | |
|  |  | Sat, Mar 15 . 8:00 AM . Sunset Cliffs        | | |
|  |  | ################____  16/20 spots             | | |
|  |  | [Hiking] Organizer: Jeffrey          [RSVP]   | | |
|  |  +----------------------------------------------+ | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [photo] Channel Islands Kayaking              | | |
|  |  | Sat, Mar 22 . 7:00 AM . Ventura Harbor       | | |
|  |  | ############________  8/12 spots              | | |
|  |  | [Kayaking] Organizer: Mike           [RSVP]   | | |
|  |  +----------------------------------------------+ | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [photo] San Diego Bay Sailing                 | | |
|  |  | Sat, Apr 5 . 10:00 AM . Harbor Island        | | |
|  |  | #################___  5/6 spots               | | |
|  |  | [Sailing] Organizer: David           [RSVP]   | | |
|  |  +----------------------------------------------+ | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

Events display chronologically in a vertical stack. Each event card shows a photo, title, date/time, location, adventure type badge, organizer, and a capacity progress bar. The RSVP button is prominent on each card. Full events show "Waitlist" or "Full" instead.

---

## 6. Event Detail (`event-detail.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  [========= HERO PHOTO (full width) ===========]  | |
|  |                                                    | |
|  |  Sunset Cliffs Coastal Hike         [Hiking]       | |
|  |                                                    | |
|  |  +--- Meta Grid (2-col) -----------------------+  | |
|  |  | DATE    Sat, March 15  | LOCATION  Sunset Cl.|  | |
|  |  | TIME    8 AM - 12 PM   | ORGANIZER Jeffrey L.|  | |
|  |  | TYPE    Hiking         | DIFFICULTY Moderate  |  | |
|  |  +---------------------------------------------+  | |
|  |                                                    | |
|  |  Join us for a morning hike along the stunning     | |
|  |  Sunset Cliffs coastline...                        | |
|  |                                                    | |
|  |  What to Bring: water, sunscreen, shoes, snacks    | |
|  |                                                    | |
|  |  Capacity                                          | |
|  |  ########################______  16 / 20 spots     | |
|  |                                                    | |
|  |  +--------------------+  Waiver required           | |
|  |  |  RSVP - Join This  |  before participation      | |
|  |  |    Adventure       |                            | |
|  |  +--------------------+                            | |
|  |                                                    | |
|  |  Who's Going (16)                                  | |
|  |  [pic] [pic] [pic] [pic] [pic] [pic] [pic] [pic]  | |
|  |  [pic] [pic] [pic] [pic] [pic] [pic] [pic] [pic]  | |
|  |  Alex M.  Chris T.  David R.  Jason L.  ...        | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

The event detail opens with a full-width hero photo. A metadata grid shows date, time, location, organizer, type, and difficulty. The description and "What to Bring" checklist follow. A large capacity bar with exact numbers makes availability clear. The RSVP button is the primary action. Below, 16 attendees display as circular profile photo thumbnails with names. A waiver link notes that signing is required.

---

# Authenticated Pages

## 7. RSVP + Waiver (`rsvp.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Community Contact   Profile    |
+---------------------------------------------------------+
|                                                         |
|  <- Back to Event                                       |
|                                                         |
|  (1) Event ------- (2) RSVP & Waiver --- (3) Confirmed |
|   [done]              [active]              [pending]   |
|                                                         |
|  +--- Event Summary --------------------------------+   |
|  | [photo] MAR  Sunset Cliffs Coastal Hike    4     |   |
|  |         15   Sat, Mar 15 . 8:00 AM       spots   |   |
|  |              Led by Jeffrey L.            left    |   |
|  +--------------------------------------------------+   |
|                                                         |
|  YOUR INFO                                              |
|  Name [Jeffrey Lehmann]  Email [jeffery@gaf...]         |
|  Phone [___________]     Tier  [Gold Star]              |
|  -------------------------------------------------     |
|  EMERGENCY CONTACT                                      |
|  ! Required for outdoor adventures                      |
|  Name [___________]  Relationship [v Select]            |
|  Phone [__________]  Medical [optional]                 |
|  -------------------------------------------------     |
|  LIABILITY WAIVER & IMAGE RELEASE                       |
|  +-- scrollable text (260px) ----------------------+    |
|  | Liability Release...                            |    |
|  | Image Release...                                |    |
|  | Photo & Video Release (a)(b)(c)(d)...           |    |
|  | Acknowledgement...  Duration: 1 year            |    |
|  +------------------------------------------------+    |
|                                                         |
|  [== Check all acknowledgements ==] [Accept All]        |
|                                                         |
|  [x] I have read and understand the liability release   |
|  [x] I grant permission for image use                   |
|  [x] I consent to Photo & Video Release                 |
|  [x] Waiver valid for one year                          |
|  [x] Emergency contact info is accurate                 |
|  -------------------------------------------------     |
|  SIGNATURE                                              |
|  Name [Jeffrey Lehmann]   Date [Feb 25, 2026]          |
|  +-- dashed canvas ------+                              |
|  | Sign here with mouse  |  [Clear]                    |
|  +-----------------------+                              |
|  -------------------------------------------------     |
|  IP: 72.134.xxx.xxx                                     |
|  Device: Chrome 122 / macOS   [Cancel] [RSVP & Sign]   |
|  Timestamp: 2026-02-25                 (greyed until    |
|                                         all complete)   |
+---------------------------------------------------------+
```

A combined RSVP and waiver flow in a single page. A 3-step progress indicator shows progress. The event summary card shows the photo, date, title, and remaining spots. Pre-filled member info and an emergency contact section come first. The full waiver text (liability, image release, photo/video release, acknowledgement, duration) displays in a scrollable box. An "Accept All" bar with teal gradient checks all 5 legal acknowledgement checkboxes at once. A signature canvas with clear button captures the digital signature. The submit button remains greyed out and disabled until all checkboxes are checked and a signature is drawn. Device fingerprint info (IP, browser, timestamp) is captured at the bottom.

---

## 8. Waiver Sign (Standalone) (`waiver-sign.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Community Contact   Profile    |
+---------------------------------------------------------+
|                                                         |
|  [clipboard icon]  Liability Waiver                     |
|  Please review and sign the liability waiver below.     |
|                                                         |
|  (1) RSVP ------- (2) Waiver ------- (3) Confirmed     |
|   [done]           [active]            [pending]        |
|                                                         |
|  +--- Event Card ----+                                  |
|  | MAR  Channel Islands Sea Cave Kayak                  |
|  | 22   Sat, Mar 22 . 7:00 AM . Ventura  [Pending]     |
|  +--------------------+                                 |
|                                                         |
|  +-- scrollable waiver text (300px) ---------------+    |
|  | Liability Release...  Image Release...           |    |
|  | Photo & Video Release...  Acknowledgement...     |    |
|  | Duration: 1 year                                 |    |
|  +-------------------------------------------------+    |
|                                                         |
|  Name [Jeffrey Lehmann]   Date [Feb 25, 2026]          |
|  +-- dashed canvas ------+                              |
|  | Draw your signature   |  [Clear]                     |
|  +-----------------------+                              |
|                                                         |
|  [x] I have read and understand the releases            |
|  [x] The signature above is my own                      |
|                                                         |
|  IP: 72.134.xxx.xxx                                     |
|  Device: Chrome 122 / macOS   [Cancel] [Sign Waiver]   |
|  Timestamp: 2026-02-25                                  |
+---------------------------------------------------------+
```

A standalone waiver signing page for members who RSVP'd but haven't completed the waiver. Uses the same 3-step progress indicator as RSVP but starts at step 2. Shows a compact event card with "Waiver Pending" badge. The full waiver text scrolls in a 300px box. Signature canvas with clear button, two agreement checkboxes, and device fingerprint capture. Simpler than the combined RSVP page -- no emergency contact or "Accept All" bar.

---

## 9. Listings Browse (`listings.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  Community Classifieds                             | |
|  |                                                    | |
|  |  [All] [Jobs] [Housing] [Roommates] [Services]    | |
|  |  [For Sale]                                        | |
|  |                                                    | |
|  |  Search: [________________________] [Search]       | |
|  +----------------------------------------------------+ |
|                                                         |
|  +------------------+  +------------------+             |
|  | * FEATURED       |  |                  |             |
|  | Room for Rent    |  | Dog Walker       |             |
|  | West Hollywood   |  | Experienced,     |             |
|  | $1,200/mo        |  | references avail |             |
|  | Housing . 2d ago |  | Services . 5d ago|             |
|  +------------------+  +------------------+             |
|  +------------------+  +------------------+             |
|  | Web Developer    |  | Moving Sale      |             |
|  | Remote, React +  |  | Furniture, decor |             |
|  | Rust preferred   |  | WeHo pickup only |             |
|  | Jobs . 1w ago    |  | For Sale . 3d ago|             |
|  +------------------+  +------------------+             |
|                                                         |
|  [ <- Prev ]  Page 1 of 12  [ Next -> ]                |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

Category tabs filter listings by type. A search bar provides full-text search across listing content and metadata. Results display as a responsive card grid with featured listings highlighted. Each card shows title, excerpt, category badge, and age. Pagination controls appear at the bottom.

---

## 10. Listing Detail (`listing-detail.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  Room for Rent -- West Hollywood        * Featured | |
|  |                                                    | |
|  |  +-----------+                                     | |
|  |  |           |  Category:  Housing                 | |
|  |  |  Photo 1  |  Price:     $1,200/month            | |
|  |  |           |  Location:  West Hollywood, CA      | |
|  |  +-----------+  Posted:    February 20, 2025       | |
|  |  [1] [2] [3]    Expires:   March 22, 2025          | |
|  |                                                    | |
|  |  ------------------------------------------------  | |
|  |                                                    | |
|  |  Spacious room in a 2BR apartment near Santa       | |
|  |  Monica Blvd. Shared kitchen and living room.      | |
|  |  Laundry in unit. LGBTQ+ friendly household.       | |
|  |                                                    | |
|  |  Tags: #housing #weho #roomshare                   | |
|  |                                                    | |
|  |  +------- Seller Profile --------+                 | |
|  |  | [photo] Alex M.               |                 | |
|  |  | Member since 2019             |                 | |
|  |  +-------------------------------+                 | |
|  |                                                    | |
|  |  +----------------------------+                    | |
|  |  | Message About This Listing |                    | |
|  |  +----------------------------+                    | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

A single glass card presents the full listing. Photos display in a small gallery with thumbnail navigation. Metadata fields (category, price, location, dates) appear in a structured sidebar. The listing body renders below with tags. A seller profile card shows the poster's photo, name, and member tenure. A prominent "Message About This Listing" button opens a conversation thread.

---

## 11. Messages Inbox (`messages.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  Messages                                          | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [pic] * Alex M.                      2h ago  | | |
|  |  |   Re: Room for Rent                          | | |
|  |  |   "Sounds great, when can I come see..."     | | |
|  |  +----------------------------------------------+ | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [pic]   Chris T.                     1d ago  | | |
|  |  |   Re: Dog Walking Services                   | | |
|  |  |   "Thanks for the info!"                     | | |
|  |  +----------------------------------------------+ | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [pic]   David R.                     2d ago  | | |
|  |  |   Re: Kayak trip question                    | | |
|  |  |   "Do I need to bring my own vest?"          | | |
|  |  +----------------------------------------------+ | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [pic]   Mark S.                      3d ago  | | |
|  |  |   Re: Trail running shoes                    | | |
|  |  |   "Those Hokas are great for trails"         | | |
|  |  +----------------------------------------------+ | |
|  |                                                    | |
|  |  +----------------------------------------------+ | |
|  |  | [pic] * Kevin P.                     5d ago  | | |
|  |  |   Re: Paddleboard for sale                   | | |
|  |  |   "Is this still available?"                 | | |
|  |  +----------------------------------------------+ | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

The inbox displays 5 conversations in reverse chronological order. Each row shows a circular profile photo, the other participant's name, conversation subject, message preview, and timestamp. Unread conversations are marked with a dot indicator (*). Clicking a conversation opens the thread view.

---

## 12. Conversation Thread (`conversation.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  <- Back to Messages                               | |
|  |  Re: Room for Rent -- West Hollywood               | |
|  |                                                    | |
|  |  +-----------------------------------+             | |
|  |  | You                    Feb 20, 3pm|             | |
|  |  | Hi! I saw your listing for the    |             | |
|  |  | room in WeHo. Is it available?    |             | |
|  |  +-----------------------------------+             | |
|  |                                                    | |
|  |         +-----------------------------------+      | |
|  |         | Alex M.            Feb 20, 4:15pm |      | |
|  |         | Yes! Want to come see it this     |      | |
|  |         | weekend?                          |      | |
|  |         +-----------------------------------+      | |
|  |                                                    | |
|  |  +-----------------------------------+             | |
|  |  | You                    Feb 20, 5pm|             | |
|  |  | Saturday morning works for me.    |             | |
|  |  +-----------------------------------+             | |
|  |                                                    | |
|  |         +-----------------------------------+      | |
|  |         | Alex M.            Feb 21, 10am   |      | |
|  |         | Sounds great, how about 10am?     |      | |
|  |         +-----------------------------------+      | |
|  |                                                    | |
|  |  +------------------------------------------+      | |
|  |  | Type a message...                  [Send]|      | |
|  |  +------------------------------------------+      | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

Messages display in a threaded view with alternating alignment -- the current user's messages on the left, the other participant's on the right. Each bubble shows the sender name and timestamp. A text input with send button sits at the bottom. The conversation subject links back to the related listing.

---

## 13. My Profile (`member.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  | [XL photo] Jeffrey Lehmann                         | |
|  |            [Active Member] [Admin]                 | |
|  |            Email: jeffery@gaf...                   | |
|  |            Phone: (619) 555-0142                   | |
|  |            Member since: March 2015                | |
|  |            Adventures attended: 87                 | |
|  |            [Edit Profile] [Notification Settings]  | |
|  +----------------------------------------------------+ |
|                                                         |
|  +--- Left Column ---+  +--- Right Column ----------+  |
|  |                    |  |                            |  |
|  | +--- Membership -+ |  | My Listings               |  |
|  | | GOLD STAR      | |  | Inflatable Paddleboard    |  |
|  | | $180/year      | |  |   For Sale . $220 . Aprvd |  |
|  | | Renews Mar 15  | |  |   [Edit] [Renew]          |  |
|  | | All Events +   | |  | Dog Walking - North Park  |  |
|  | | First Access   | |  |   Services . $25 . Aprvd  |  |
|  | +----------------+ |  |   [Edit] [Renew]          |  |
|  |                    |  | [Post New Listing]         |  |
|  | My RSVPs           |  |                            |  |
|  | MAR 15 Sunset      |  | Recent Activity           |  |
|  |   Cliffs [Conf'd]  |  | RSVP'd to Sunset Cliffs   |  |
|  | MAR 22 Ch Islands   |  | Msg from Alex re Paddle   |  |
|  |   Kayak [Conf'd]   |  | "Dog Walking" approved    |  |
|  | APR 5  SD Bay Sail  |  | Completed Yosemite Hike   |  |
|  |   [Waitlist]        |  | Msg to Chris re Room      |  |
|  |                    |  |                            |  |
|  | My Waivers         |  |                            |  |
|  | Sunset Cliffs      |  |                            |  |
|  |   Signed [Active]  |  |                            |  |
|  | Ch Islands Kayak   |  |                            |  |
|  |   [Sign Now]       |  |                            |  |
|  | Annual General     |  |                            |  |
|  |   [Expired]        |  |                            |  |
|  +--------------------+  +----------------------------+  |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

The member's own profile page. A header card shows the XL profile photo, name, role badges (Active Member, Admin), contact info, join date, and adventure count with edit actions. Below is a two-column layout. Left column: gradient membership card (Gold Star tier with price and renewal date), upcoming RSVPs with status badges (Confirmed/Waitlist), and liability waivers (Signed/Sign Now/Expired). Right column: active listings with edit/renew actions and a "Post New Listing" CTA, plus a recent activity feed with timestamped entries.

---

## 14-23. Member Profiles (`profile-alex.html` ... `profile-ryan.html`)

```
+---------------------------------------------------------+
| [Logo] GAF   Home Events Listings Messages Profile      |
+---------------------------------------------------------+
|                                                         |
|  +---------------------------------------------------+ |
|  |  [XL photo]  Alex M.                              | |
|  |              Member since June 2019                | |
|  |              [Frequent Flyer]                      | |
|  |                                                    | |
|  |  +--------+  +--------+  +--------+               | |
|  |  |   34   |  |   3    |  |  2019  |               | |
|  |  | Advent.|  | Upcomng|  | Joined |               | |
|  |  +--------+  +--------+  +--------+               | |
|  |                                                    | |
|  |  Photographer by day, hiking enthusiast always.    | |
|  |  Moved to San Diego from Chicago in 2018...        | |
|  |                                                    | |
|  |  INTERESTS                                         | |
|  |  [Hiking] [Photography] [Kayaking] [Beach Days]    | |
|  |                                                    | |
|  |  RECENT ADVENTURES                                 | |
|  |  MAR 15  Sunset Cliffs Hike . San Diego            | |
|  |  FEB 8   Yosemite Winter Hike . Yosemite           | |
|  |  JAN 25  Torrey Pines Trail Run . Torrey Pines     | |
|  |                                                    | |
|  |  [Send Message]                                    | |
|  +----------------------------------------------------+ |
|                                                         |
+---------------------------------------------------------+
| Gay Adventure Friends (c) 2025                          |
+---------------------------------------------------------+
```

Ten individual member profile pages sharing the same layout. Each shows: XL circular cropped face photo, name, join date, and membership tier badge. A stats row displays total adventures, upcoming count, and join year. A bio paragraph follows. Interest tags render as pill-shaped badges. Recent adventures list chronologically with date blocks and location. A "Send Message" button at the bottom opens a conversation.

The 10 profiles are: Alex M. (profile-alex), Carlos M. (profile-carlos), Chris T. (profile-chris), David R. (profile-david), Jason L. (profile-jason), Jeffrey L. (profile-jeffrey), Kevin P. (profile-kevin), Mark S. (profile-mark), Miguel S. (profile-miguel), Ryan T. (profile-ryan).

---

# Admin Pages

All admin pages share a sidebar + content layout. The sticky sidebar contains navigation links: Dashboard, Members, Events, Community, Subscribers, Audit Log, Settings.

## 24. Admin Dashboard (`admin.html`)

```
+---------------------------------------------------------+
| [Logo] GAF Admin                             [Profile]  |
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd |  Dashboard                                    |
| Members |                                               |
| Events  |  +------+ +------+ +------+ +------+         |
| Commnty |  |  5   | | 47   | | 5,714| |  8   |         |
| Subscr. |  |Pendng| |Active| |Membrs| |Events|         |
| Audit   |  +------+ +------+ +------+ +------+         |
| Settngs |                                               |
|         |  Moderation Queue                             |
|         |  +----------------------------------------+   |
|         |  | "Spacious 1BR" . Housing . 2h ago      |   |
|         |  | by Alex M.     [Approve] [Reject]      |   |
|         |  |----------------------------------------|   |
|         |  | "Dog Walker" . Services . 5h ago        |   |
|         |  | by Chris T.    [Approve] [Reject]      |   |
|         |  +----------------------------------------+   |
|         |                                               |
|         |  Recent Members                               |
|         |  +----------------------------------------+   |
|         |  | Name       | Tier     | Joined | Status|   |
|         |  |------------|----------|--------|-------|   |
|         |  | Jeffrey L. | Gold Star| Mar 15 | Active|   |
|         |  | Alex M.    | Freq.Fly.| Jun 19 | Active|   |
|         |  | Ryan T.    | Basic    | Feb 26 | New   |   |
|         |  +----------------------------------------+   |
|         |                                               |
|         |  Recent Activity (Audit)                      |
|         |  +----------------------------------------+   |
|         |  | * Jeffrey approved "Dog Walking" . 1h   |   |
|         |  | * Mark registered via Facebook . 3h     |   |
|         |  | * System expired 3 listings . 6h        |   |
|         |  | * Jeffrey created "Kayak Trip" . 1d     |   |
|         |  +----------------------------------------+   |
|         |                                               |
+---------+-----------------------------------------------+
| Gay Adventure Friends Admin (c) 2025                    |
+---------------------------------------------------------+
```

The admin dashboard uses a sidebar navigation layout. The top row shows four stat cards: pending moderation items, active listings, total members, and upcoming events. The moderation queue displays pending listings with inline approve/reject actions. A recent members table shows the newest registrations with tier badges. The audit log shows recent activity in human-readable format with colored dot indicators.

---

## 25. Admin Members (`admin-members.html`)

```
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd |  Members                                      |
| Members*|                                               |
| Events  |  Search: [___________] [All Tiers v] [All v]  |
| Commnty |  [Search]                                     |
| Subscr. |                                               |
| Audit   |  Total: 5,714  Active: 5,602  New: 47         |
| Settngs |  Suspended: 12                                |
|         |                                               |
|         |  +------------------------------------------+ |
|         |  | Name      |Email     |Tier    |Joined|St.| |
|         |  |-----------|----------|--------|------|---| |
|         |  | Jeffrey L.|jeff@gaf  |Gold*   |Mar 15|Act| |
|         |  | Alex M.   |alex@ex   |Freq.F  |Jun 19|Act| |
|         |  | Chris T.  |chris@ex  |Support.|Mar 21|Act| |
|         |  | David R.  |david@ex  |Gold*   |Aug 18|Act| |
|         |  | Mark S.   |mark@ex   |Gold*   |Jan 20|Act| |
|         |  | Jason L.  |jason@ex  |Freq.F  |May 20|Act| |
|         |  | Kevin P.  |kevin@ex  |Support.|Jul 22|Act| |
|         |  | Miguel S. |miguel@ex |Support.|Nov 21|Act| |
|         |  | Carlos M. |carlos@ex |Freq.F  |Apr 20|Act| |
|         |  | Ryan T.   |ryan@ex   |Basic   |Feb 26|New| |
|         |  +------------------------------------------+ |
|         |                                               |
|         |  << 1 [2] [3] ... [572] >>                    |
|         |                                               |
+---------+-----------------------------------------------+
```

Full member management page. A search bar with text input, tier filter dropdown (All/Gold Star/Frequent Flyer/Supporter/Basic), and status filter (All/Active/Suspended/New). Summary stats show total members (5,714), active, new this month, and suspended counts. A 10-row table displays name (linked to profile), email, tier badge (color-coded), join date, status badge, and view action. Pagination supports 572 pages.

---

## 26. Admin Events (`admin-events.html`)

```
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd |  [All] [Upcoming] [Past] [Draft]  [Create Evt]|
| Members |                                               |
| Events* |  +------+ +------+ +------+ +------+         |
| Commnty |  |  8   | | 12   | | 156  | | 85%  |         |
| Subscr. |  |Upcomg| |Month | |RSVPs | | Avg  |         |
| Audit   |  +------+ +------+ +------+ +------+         |
| Settngs |                                               |
|         |  Events                                       |
|         |  +------------------------------------------+ |
|         |  |Event Name    |Date    |Loc   |RSVP|Cap|St| |
|         |  |--------------|--------|------|----|----|--| |
|         |  |Sunset Cliffs |Mar 15  |SD    |16  |20  |Alm| |
|         |  |Ch Islands Kay|Mar 22  |Vent. |8   |12  |Opn| |
|         |  |SD Bay Sail   |Apr 5   |SD    |5   |6   |1Lf| |
|         |  |Torrey Pines  |Apr 12  |SD    |3   |15  |Opn| |
|         |  |Borrego Wildfl|Apr 19  |Bor.  |0   |20  |Drf| |
|         |  |Cooking Thai  |May 3   |Hillc.|10  |12  |Alm| |
|         |  |La Jolla Kayak|May 10  |LaJ.  |0   |10  |Drf| |
|         |  |Whale Watching|Jun 1   |La Paz|12  |16  |Opn| |
|         |  +------------------------------------------+ |
|         |                                               |
|         |  << [1] [2] [3] >>                            |
|         |                                               |
+---------+-----------------------------------------------+
```

Event management with filter tabs (All/Upcoming/Past/Draft) and a "Create Event" CTA button. Four stat cards show upcoming count, this month total, total RSVPs, and average attendance percentage. An 8-row table displays event name (linked), date, location, RSVP count, capacity, status badge (Open/Almost Full/1 Left/Draft), and edit action. Pagination at the bottom.

---

## 27. Admin Community (`admin-community.html`)

```
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd |  [All] [Pending Review (5)] [Active]          |
| Members |  [Expired] [Flagged]                          |
| Events  |                                               |
| Commnty*|  +------+ +------+ +------+ +------+         |
| Subscr. |  |  5   | | 47   | | 12   | |  2   |         |
| Audit   |  |Pendng| |Active| | Week | |Flaggd|         |
| Settngs |  +------+ +------+ +------+ +------+         |
|         |                                               |
|         |  Listings Moderation        (5 pending)       |
|         |  +------------------------------------------+ |
|         |  |Title        |Cat    |By     |Age |St|Act | |
|         |  |-------------|-------|-------|----|----|---| |
|         |  |1BR Hillcrest|Housing|Alex M.|2h  |Pend|A/R| |
|         |  |Dog Walker   |Service|Chris  |5h  |Pend|A/R| |
|         |  |Sr Frontend  |Jobs   |Ryan T.|8h  |Pend|A/R| |
|         |  |Room N.Park  |Roommt.|Mark S.|1d  |Pend|A/R| |
|         |  |WeHo Sublease|Housing|David  |1d  |Pend|A/R| |
|         |  |Surfboard    |Sale   |Kevin  |2d  |Actv|Vw | |
|         |  |Pers.Trainer |Service|Mark S.|3d  |Actv|Vw | |
|         |  |Vintage Cam  |Sale   |Carlos |5d  |Actv|Vw | |
|         |  +------------------------------------------+ |
|         |   A/R = [Approve] [Reject]  Vw = [View]       |
|         |                                               |
+---------+-----------------------------------------------+
```

Listings moderation page. Filter tabs across the top: All, Pending Review (with count badge), Active, Expired, Flagged. Four stat cards: pending review, active listings, new this week, flagged. A table shows listing title, category badge, posted-by (linked to profile), age, status (Pending/Active), and actions. Pending listings get Approve/Reject buttons; active listings get a View button.

---

## 28. Admin Subscribers (`admin-subscribers.html`)

```
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd | +-- MRR Card (gradient) --+ +-- Churn ------+ |
| Members | | Monthly Recurring Rev.  | | Churn: 2.1%   | |
| Events  | | $14,847                 | | 76 cancellns  | |
| Commnty | | +$1,230 vs last (+9.0%) | | Down from 2.8%| |
| Subscr.*| | Annual: $178,164        | |               | |
| Audit   | +-------------------------+ | Net New: +134 | |
| Settngs |                             | 210 new - 76  | |
|         |                             | Growth: 3.7%  | |
|         |                             +---------------+ |
|         |                                               |
|         | +------+ +------+ +------+ +------+           |
|         | | 3,610| | 558  | | 1,205| | 1,847|           |
|         | | Paid | | Gold | | Freq | | Suppt|           |
|         | +------+ +------+ +------+ +------+           |
|         |                                               |
|         | Revenue by Tier                               |
|         | Gold Star    |==========|  558  $8,370/mo     |
|         | Freq. Flyer  |========  |  1,205 $5,925/mo    |
|         | Supporter    |=         |  1,847 $4,464/mo    |
|         | Basic (Free) |          |  2,104 $0           |
|         |                                               |
|         | Subscribers                                   |
|         | Search [______] [Tier v] [Status v] [Search]  |
|         | +------------------------------------------+  |
|         | |Name     |Tier   |Amt    |Since|Next |St |  |
|         | |---------|-------|-------|-----|-----|---|  |
|         | |Jeffrey  |Gold*  |$180/yr|2015 |2027 |Act|  |
|         | |David R. |Gold*  |$180/yr|2018 |2026 |Act|  |
|         | |Alex M.  |Freq.F |$59/yr |2019 |2026 |Act|  |
|         | |Carlos M.|Freq.F |$59/yr |2020 |2026 |Due|  |
|         | |Chris T. |Suppt  |$29/yr |2021 |2027 |Act|  |
|         | |Ryan T.  |Basic  |Free   |2026 | --  |Free| |
|         | +------------------------------------------+  |
|         | << [1] [2] [3] ... [361] >>                   |
|         |                                               |
+---------+-----------------------------------------------+
```

Subscription revenue management. A gradient MRR card shows $14,847 monthly recurring revenue with month-over-month change and annual run rate. Adjacent cards show churn rate (2.1%, down from 2.8%) and net new subscribers (+134, growth 3.7%/mo). Four stat cards break down paid subscribers by tier. A "Revenue by Tier" section shows horizontal bar charts with subscriber counts and monthly revenue per tier. Below, a filterable subscriber table shows name, tier badge, amount, start date, next billing date, status (Active/Past Due/Free), and Edit/Cancel actions. Pagination supports 361 pages.

---

## 29. Admin Audit Log (`admin-audit.html`)

```
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd |  Audit Log                                    |
| Members |                                               |
| Events  |  From [2026-01-01] To [2026-02-25]            |
| Commnty |  Action [All v]  Actor [All v]  [Filter]      |
| Subscr. |                                               |
| Audit*  |  +------+ +------+ +------+ +------+         |
| Settngs |  | 2,847| |  34  | |  12  | |  18  |         |
|         |  |Total | |Today | | Auth | |Contnt|         |
|         |  +------+ +------+ +------+ +------+         |
|         |                                               |
|         |  Activity Log                                 |
|         |  +------------------------------------------+ |
|         |  | * Jeffrey approved "Dog Walking"    1h   | |
|         |  | * Mark registered via Facebook      3h   | |
|         |  | * System expired 3 listings         6h   | |
|         |  | * Jeffrey created "Sunset Cliffs"   1d   | |
|         |  | * Alex signed liability waiver      1d   | |
|         |  | * Ryan registered via email         1d   | |
|         |  | * Jeffrey approved "Studio Sublease"2d   | |
|         |  | * Chris updated profile             2d   | |
|         |  | * System sent 47 reminder emails    2d   | |
|         |  | * Jeffrey promoted Mark to Gold Star 3d  | |
|         |  | * Kevin logged in via Facebook      3d   | |
|         |  | * System completed nightly backup   3d   | |
|         |  +------------------------------------------+ |
|         |                                               |
|         |  << [1] [2] [3] ... [285] >>                  |
|         |                                               |
+---------+-----------------------------------------------+
```

Filterable audit log. Filter bar at top with date range (From/To date pickers), action type dropdown (All/Auth/Content/Admin/System), actor dropdown (All/Jeffrey/Alex/System), and Filter button. Four stat cards: total events, today count, auth events, content changes. The activity log displays 12 entries with colored dot indicators (green for approvals, blue for auth, gray for system, orange for content creation, yellow for waivers). Each entry shows actor name (bold), action description, and relative timestamp. Pagination supports 285 pages.

---

## 30. Admin Settings (`admin-settings.html`)

```
+---------+-----------------------------------------------+
|         |                                               |
| Dashbrd |  Site Settings                                |
| Members |  Site Name  [Gay Adventure Friends      ]     |
| Events  |  Tagline    [Friends Make Life Better   ]     |
| Commnty |  Contact    [jeffery@gayadventure...    ]     |
| Subscr. |  Region     [Southern California        ]     |
| Audit   |  [Save Changes]                               |
| Settngs*|                                               |
|         |  Social Media                                 |
|         |  Facebook  [https://facebook.com/groups/...  ] |
|         |  Instagram [@gayadventurefriends             ] |
|         |  [Save]                                       |
|         |                                               |
|         |  Membership Tiers                             |
|         |  +------------------------------------------+ |
|         |  |Tier         |Price  |Features|Members|Act| |
|         |  |-------------|-------|--------|-------|---| |
|         |  |Basic        |Free   |3       |2,104  |Edt| |
|         |  |Supporter    |$29/yr |6       |1,847  |Edt| |
|         |  |Frequent Fly.|$59/yr |8       |1,205  |Edt| |
|         |  |Gold Star    |$180/yr|All     |558    |Edt| |
|         |  +------------------------------------------+ |
|         |                                               |
|         |  DANGER ZONE (red left border)                |
|         |  +------------------------------------------+ |
|         |  | Export All Data        [Export All Data]  | |
|         |  | Full site data download                  | |
|         |  |------------------------------------------|  |
|         |  | Purge Expired Listings [Purge Expired]    | |
|         |  | Removes listings > 90 days               | |
|         |  |------------------------------------------|  |
|         |  | Maintenance Mode       [Toggle Maint.]   | |
|         |  | Currently OFF                            | |
|         |  +------------------------------------------+ |
|         |                                               |
+---------+-----------------------------------------------+
```

Site configuration page with four sections. Site Settings: text inputs for site name, tagline, contact email, and region with a save button. Social Media: Facebook group URL and Instagram handle inputs. Membership Tiers: a table listing all four tiers with price, feature count, active member count, and edit link. Danger Zone (marked with a red left border): three destructive actions -- Export All Data, Purge Expired Listings (removes > 90 days), and Maintenance Mode toggle (currently OFF). Each danger item shows a description and an action button.

---

# Page Index

| # | Page | File | Section |
|---|------|------|---------|
| 1 | Home | `home.html` | Public |
| 2 | Login / Register | `login.html` | Public |
| 3 | Join / Membership | `join.html` | Public |
| 4 | Contact | `contact.html` | Public |
| 5 | Events List | `events.html` | Public |
| 6 | Event Detail | `event-detail.html` | Public |
| 7 | RSVP + Waiver | `rsvp.html` | Authenticated |
| 8 | Waiver Sign | `waiver-sign.html` | Authenticated |
| 9 | Listings Browse | `listings.html` | Authenticated |
| 10 | Listing Detail | `listing-detail.html` | Authenticated |
| 11 | Messages Inbox | `messages.html` | Authenticated |
| 12 | Conversation Thread | `conversation.html` | Authenticated |
| 13 | My Profile | `member.html` | Authenticated |
| 14 | Profile: Alex M. | `profile-alex.html` | Authenticated |
| 15 | Profile: Carlos M. | `profile-carlos.html` | Authenticated |
| 16 | Profile: Chris T. | `profile-chris.html` | Authenticated |
| 17 | Profile: David R. | `profile-david.html` | Authenticated |
| 18 | Profile: Jason L. | `profile-jason.html` | Authenticated |
| 19 | Profile: Jeffrey L. | `profile-jeffrey.html` | Authenticated |
| 20 | Profile: Kevin P. | `profile-kevin.html` | Authenticated |
| 21 | Profile: Mark S. | `profile-mark.html` | Authenticated |
| 22 | Profile: Miguel S. | `profile-miguel.html` | Authenticated |
| 23 | Profile: Ryan T. | `profile-ryan.html` | Authenticated |
| 24 | Admin Dashboard | `admin.html` | Admin |
| 25 | Admin Members | `admin-members.html` | Admin |
| 26 | Admin Events | `admin-events.html` | Admin |
| 27 | Admin Community | `admin-community.html` | Admin |
| 28 | Admin Subscribers | `admin-subscribers.html` | Admin |
| 29 | Admin Audit Log | `admin-audit.html` | Admin |
| 30 | Admin Settings | `admin-settings.html` | Admin |
