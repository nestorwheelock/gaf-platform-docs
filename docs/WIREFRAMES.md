# Wireframes

Visual designs for the 10 core screens of the GAF platform. The visual theme is "floating glass over photography" — frosted translucent content cards layered over full-bleed adventure photography, with an ocean teal and sunset orange color palette derived from actual GAF adventure photos.

---

## 1. Home Page

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  About  Events  Listings  Join  Login│
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │             ░░ FROSTED GLASS HERO ░░               │  │
│  │                                                    │  │
│  │         Gay Adventure Friends                      │  │
│  │         Friends Make Life Better                   │  │
│  │                                                    │  │
│  │  5,700+ members · SoCal adventures · Since 2015   │  │
│  │                                                    │  │
│  │        [ Join the Community ]  [ See Events ]      │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌─── Upcoming Adventures ────────────────────────────┐  │
│  │                                                    │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │  │
│  │  │ 🏔 Hiking │  │ 🚣 Kayak │  │ ⛵ Sail  │        │  │
│  │  │ Mar 15   │  │ Mar 22   │  │ Apr 5    │        │  │
│  │  │ 12/20    │  │ 8/12     │  │ 5/6      │        │  │
│  │  │ spots    │  │ spots    │  │ spots    │        │  │
│  │  └──────────┘  └──────────┘  └──────────┘        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌─── Community Highlights ───────────────────────────┐  │
│  │  "Best hiking group in SoCal"                      │  │
│  │  "Made lifelong friends on the kayak trip"         │  │
│  │  "The whale watching changed my life"              │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025 · About · Contact       │
└──────────────────────────────────────────────────────────┘
│  ░░░░░ BACKGROUND IMAGE REVEAL ZONE ░░░░░░░░░░░░░░░░░  │
│  ░░░░░ Photo: Whale watching, La Paz ░░░░░░░░░░░░░░░░  │
│  ░░░░░ Credit: Photographer Name ░░░░░░░░░░░░░░░░░░░░  │
```

The home page opens with a full-viewport hero over a rotating adventure photograph. The frosted glass hero card carries the community tagline and primary calls to action. Below, upcoming events display as cards with capacity indicators. The footer fades on scroll to reveal the background image and photographer credit.

---

## 2. Login / Register

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  About  Events  Listings  Join  Login│
├──────────────────────────────────────────────────────────┤
│                                                          │
│         ┌──────────────────────────────┐                 │
│         │     ░░ FROSTED GLASS ░░      │                 │
│         │                              │                 │
│         │    Welcome Back / Join Us    │                 │
│         │                              │                 │
│         │  ┌──────────────────────┐   │                 │
│         │  │  Continue with       │   │                 │
│         │  │     Facebook         │   │                 │
│         │  └──────────────────────┘   │                 │
│         │                              │                 │
│         │  ─────── or ───────         │                 │
│         │                              │                 │
│         │  Email   [________________] │                 │
│         │  Password[________________] │                 │
│         │                              │                 │
│         │  [ Log In ]   [ Register ]  │                 │
│         │                              │                 │
│         │  Forgot password?           │                 │
│         └──────────────────────────────┘                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

A centered glass card over the adventure photo background. Facebook OAuth is the primary action — a large button at the top. Email/password fields appear below as a fallback. The same form handles both login and registration, toggling between modes.

---

## 3. Listings Browse

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  Events  Listings  Messages  Profile │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Community Classifieds                             │  │
│  │                                                    │  │
│  │  [All] [Jobs] [Housing] [Roommates] [Services]    │  │
│  │  [For Sale]                                        │  │
│  │                                                    │  │
│  │  Search: [________________________] [Search]       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐             │
│  │ ★ FEATURED       │  │                  │             │
│  │ Room for Rent    │  │ Dog Walker       │             │
│  │ West Hollywood   │  │ Experienced,     │             │
│  │ $1,200/mo        │  │ references avail │             │
│  │ Housing · 2d ago │  │ Services · 5d ago│             │
│  └──────────────────┘  └──────────────────┘             │
│  ┌──────────────────┐  ┌──────────────────┐             │
│  │ Web Developer    │  │ Moving Sale      │             │
│  │ Remote, React +  │  │ Furniture, decor │             │
│  │ Rust preferred   │  │ WeHo pickup only │             │
│  │ Jobs · 1w ago    │  │ For Sale · 3d ago│             │
│  └──────────────────┘  └──────────────────┘             │
│                                                          │
│  [ ← Prev ]  Page 1 of 12  [ Next → ]                  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

Category tabs filter listings by type. A search bar provides full-text search across listing content and metadata. Results display as a responsive card grid with featured listings highlighted. Each card shows the title, excerpt, category badge, and age. Pagination controls appear at the bottom.

---

## 4. Listing Detail

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  Events  Listings  Messages  Profile │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Room for Rent — West Hollywood          ★ Featured│  │
│  │                                                    │  │
│  │  ┌─────────────┐                                  │  │
│  │  │             │  Category:  Housing               │  │
│  │  │   Photo 1   │  Price:     $1,200/month          │  │
│  │  │             │  Location:  West Hollywood, CA    │  │
│  │  └─────────────┘  Posted:    February 20, 2025     │  │
│  │  [1] [2] [3]      Expires:   March 22, 2025        │  │
│  │                                                    │  │
│  │  ─────────────────────────────────────────────    │  │
│  │                                                    │  │
│  │  Spacious room in a 2BR apartment near Santa      │  │
│  │  Monica Blvd. Shared kitchen and living room.     │  │
│  │  Laundry in unit. Street parking. LGBTQ+ friendly │  │
│  │  household. Available March 1.                     │  │
│  │                                                    │  │
│  │  Keywords: #housing #weho #roomshare              │  │
│  │                                                    │  │
│  │  ┌────────────────────────────┐                   │  │
│  │  │  Message About This Listing │                   │  │
│  │  └────────────────────────────┘                   │  │
│  │                                                    │  │
│  │  Posted by: Alex M.                               │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

A single glass card presents the full listing. Photos display in a small gallery with thumbnail navigation. Metadata fields (category, price, location, dates) appear in a structured sidebar. The listing body renders below. A prominent "Message About This Listing" button opens a conversation thread with the poster.

---

## 5. Events List

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  Events  Listings  Messages  Profile │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Upcoming Adventures                               │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐   │  │
│  │  │  Sunset Cliffs Hike                        │   │  │
│  │  │  Sat, Mar 15 · 8:00 AM · Sunset Cliffs    │   │  │
│  │  │  ████████████████░░░░  16/20 spots         │   │  │
│  │  │  Hiking · Organizer: Jeffrey               │   │  │
│  │  │                            [ RSVP ]        │   │  │
│  │  └────────────────────────────────────────────┘   │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐   │  │
│  │  │  Channel Islands Kayaking                  │   │  │
│  │  │  Sat, Mar 22 · 7:00 AM · Ventura Harbor   │   │  │
│  │  │  ████████████░░░░░░░░  8/12 spots          │   │  │
│  │  │  Kayaking · Organizer: Mike                │   │  │
│  │  │                            [ RSVP ]        │   │  │
│  │  └────────────────────────────────────────────┘   │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐   │  │
│  │  │  San Diego Bay Sailing                     │   │  │
│  │  │  Sat, Apr 5 · 10:00 AM · Harbor Island    │   │  │
│  │  │  █████████████████░░░  5/6 spots           │   │  │
│  │  │  Sailing · Organizer: David                │   │  │
│  │  │                            [ RSVP ]        │   │  │
│  │  └────────────────────────────────────────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

Events display chronologically in a vertical stack. Each event card shows the title, date/time, location, adventure type, organizer, and a capacity progress bar. The RSVP button is prominent on each card. Full events show "Waitlist" or "Full" instead of RSVP.

---

## 6. Event Detail

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  Events  Listings  Messages  Profile │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Sunset Cliffs Hike                                │  │
│  │                                                    │  │
│  │  Date:      Saturday, March 15, 2025               │  │
│  │  Time:      8:00 AM – 12:00 PM                     │  │
│  │  Location:  Sunset Cliffs Natural Park, San Diego  │  │
│  │  Type:      Hiking                                 │  │
│  │  Organizer: Jeffrey                                │  │
│  │                                                    │  │
│  │  ─────────────────────────────────────────────    │  │
│  │                                                    │  │
│  │  Join us for a morning hike along the stunning    │  │
│  │  Sunset Cliffs coastline. Moderate difficulty,    │  │
│  │  approximately 4 miles round trip. Bring water,   │  │
│  │  sunscreen, and sturdy shoes.                     │  │
│  │                                                    │  │
│  │  ─────────────────────────────────────────────    │  │
│  │                                                    │  │
│  │  Capacity                                         │  │
│  │  ████████████████████████░░░░░░  16 / 20 spots    │  │
│  │                                                    │  │
│  │  ┌──────────────────────┐                         │  │
│  │  │    RSVP — Join This  │                         │  │
│  │  │      Adventure       │                         │  │
│  │  └──────────────────────┘                         │  │
│  │                                                    │  │
│  │  ─────────────────────────────────────────────    │  │
│  │                                                    │  │
│  │  Who's Going (16)                                 │  │
│  │  Alex M. · Chris T. · David R. · Jason L. ·      │  │
│  │  Kevin P. · Mark S. · ... and 10 more             │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

The event detail shows full information in a single glass card. A large capacity progress bar with exact numbers makes availability clear. The RSVP button is the primary action. Below, an attendee list shows who's going. For users who have already RSVP'd, the button changes to "Cancel RSVP."

---

## 7. Messages Inbox

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  Events  Listings  Messages  Profile │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Messages                                          │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐   │  │
│  │  │ ● Alex M.                          2h ago  │   │  │
│  │  │   Re: Room for Rent                        │   │  │
│  │  │   "Sounds great, when can I come see..."   │   │  │
│  │  └────────────────────────────────────────────┘   │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐   │  │
│  │  │   Chris T.                         1d ago  │   │  │
│  │  │   Re: Dog Walking Services                 │   │  │
│  │  │   "Thanks for the info! I'll keep you..."  │   │  │
│  │  └────────────────────────────────────────────┘   │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐   │  │
│  │  │   Mark S.                          3d ago  │   │  │
│  │  │   Re: Kayak trip question                  │   │  │
│  │  │   "Do I need to bring my own life vest?"   │   │  │
│  │  └────────────────────────────────────────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

The inbox displays conversations in reverse chronological order. Each row shows the other participant's name, the conversation subject, a message preview, and the timestamp. Unread conversations are marked with a dot indicator. Clicking a conversation opens the thread view.

---

## 8. Conversation Thread

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  Events  Listings  Messages  Profile │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  ← Back to Messages                               │  │
│  │  Re: Room for Rent — West Hollywood                │  │
│  │                                                    │  │
│  │  ┌─────────────────────────────────────┐          │  │
│  │  │ You                      Feb 20, 3pm│          │  │
│  │  │ Hi! I saw your listing for the room │          │  │
│  │  │ in WeHo. Is it still available?     │          │  │
│  │  └─────────────────────────────────────┘          │  │
│  │                                                    │  │
│  │          ┌─────────────────────────────────────┐  │  │
│  │          │ Alex M.              Feb 20, 4:15pm │  │  │
│  │          │ Yes! It's still open. Want to come  │  │  │
│  │          │ see it this weekend?                │  │  │
│  │          └─────────────────────────────────────┘  │  │
│  │                                                    │  │
│  │  ┌─────────────────────────────────────┐          │  │
│  │  │ You                      Feb 20, 5pm│          │  │
│  │  │ Saturday morning works for me.      │          │  │
│  │  └─────────────────────────────────────┘          │  │
│  │                                                    │  │
│  │          ┌─────────────────────────────────────┐  │  │
│  │          │ Alex M.              Feb 21, 10am   │  │  │
│  │          │ Sounds great, when can I come see   │  │  │
│  │          │ the place? How about 10am?          │  │  │
│  │          └─────────────────────────────────────┘  │  │
│  │                                                    │  │
│  │  ┌──────────────────────────────────────────┐     │  │
│  │  │ Type a message...                  [Send]│     │  │
│  │  └──────────────────────────────────────────┘     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

Messages display in a threaded view with alternating alignment — the current user's messages on the left, the other participant's on the right. Each bubble shows the sender name and timestamp. A text input with send button sits at the bottom. The conversation subject links back to the related listing when applicable.

---

## 9. Admin Dashboard

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF Admin                              [Profile] │
├──────────┬───────────────────────────────────────────────┤
│          │                                               │
│ Dashboard│  Dashboard                                    │
│ Listings │                                               │
│ Members  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐    │
│ Events   │  │  5   │  │  47  │  │ 312  │  │ 1.2k │    │
│ Audit Log│  │Pending│  │Active│  │Members│  │Events│    │
│          │  └──────┘  └──────┘  └──────┘  └──────┘    │
│          │                                               │
│          │  Moderation Queue                             │
│          │  ┌────────────────────────────────────────┐  │
│          │  │ "Room for Rent" · Housing · 2h ago     │  │
│          │  │ by Alex M.    [Approve] [Reject]       │  │
│          │  ├────────────────────────────────────────┤  │
│          │  │ "Dog Walker Available" · Services · 5h │  │
│          │  │ by Chris T.   [Approve] [Reject]       │  │
│          │  └────────────────────────────────────────┘  │
│          │                                               │
│          │  Recent Activity                              │
│          │  ┌────────────────────────────────────────┐  │
│          │  │ Jeffrey approved "Web Dev" · 1h ago    │  │
│          │  │ Mark registered via Facebook · 3h ago  │  │
│          │  │ System expired 3 listings · 6h ago     │  │
│          │  │ Jeffrey created "Kayak Trip" · 1d ago  │  │
│          │  └────────────────────────────────────────┘  │
│          │                                               │
├──────────┴───────────────────────────────────────────────┤
│  Gay Adventure Friends Admin · © 2025                    │
└──────────────────────────────────────────────────────────┘
```

The admin dashboard uses a sidebar navigation layout. The top row shows key metrics: pending moderation items, active listings, member count, and total events. The moderation queue displays pending listings with inline approve/reject actions. Below, the recent activity feed shows the audit log in a human-readable format.

---

## 10. Join / Membership

```
┌──────────────────────────────────────────────────────────┐
│  [Logo] GAF    Home  About  Events  Listings  Join  Login│
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Join Gay Adventure Friends                        │  │
│  │  Choose the membership that fits your adventure    │  │
│  │  style.                                            │  │
│  │                                                    │  │
│  │  ┌──────────┐┌──────────┐┌──────────┐┌──────────┐│  │
│  │  │  Basic   ││ Supporter││ Frequent ││ Gold Star││  │
│  │  │          ││          ││  Flyer   ││          ││  │
│  │  │  Free    ││  $29/yr  ││  $59/yr  ││ $180/yr  ││  │
│  │  │          ││          ││          ││          ││  │
│  │  │ ○ Email  ││ ○ Most   ││ ○ Almost ││ ○ ALL    ││  │
│  │  │   list   ││   events ││   all    ││   events ││  │
│  │  │ ○ Select ││ ○ Suppo- ││   events ││ ○ First  ││  │
│  │  │   events ││   rter   ││ ○ Early  ││   access ││  │
│  │  │          ││   listing││   access ││ ○ Exclus- ││  │
│  │  │          ││ ○ Some   ││ ○ Event  ││   ives   ││  │
│  │  │          ││   disc-  ││   disc-  ││ ○ All    ││  │
│  │  │          ││   ounts  ││   ounts  ││   disc-  ││  │
│  │  │          ││          ││          ││   ounts  ││  │
│  │  │ [Join]   ││ [Join]   ││ [Join]   ││ [Join]   ││  │
│  │  └──────────┘└──────────┘└──────────┘└──────────┘│  │
│  │                                                    │  │
│  │  ─────────────────────────────────────────────    │  │
│  │                                                    │  │
│  │  Or make a one-time donation:                      │  │
│  │  Amount: [$_______]  [ Donate ]                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Gay Adventure Friends · © 2025                          │
└──────────────────────────────────────────────────────────┘
```

Four membership tiers display side by side in a comparison layout. Each tier card shows the name, annual price, and bullet-point benefits. The "Join" button on each card initiates the Stripe checkout flow. Below the tiers, a variable-amount donation field allows one-time contributions without a subscription commitment.
