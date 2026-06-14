## web application/stitch/projects/12055917550945601139/screens/14922371484744642456

version: alpha
name: Achala Motors
description: Warm automotive dealership design system with 3D customer-facing pages and a functional admin dashboard.
colors:
primary: "#ff6b35"
primary-active: "#e55a25"
primary-dark: "#c85228"
canvas: "#ffffff"
surface-soft: "#f9f9f9"
surface-card: "#f5f5f5"
surface-strong: "#e8e8e8"
surface-dark: "#0a1929"
surface-dark-elevated: "#1a2d42"
hairline: "#e0e0e0"
hairline-strong: "#b8b8b8"
ink: "#1a1a1a"
body: "#333333"
body-strong: "#0a0a0a"
muted: "#666666"
muted-soft: "#999999"
success: "#4caf50"
warning: "#ff9800"
error: "#f44336"
on-primary: "#ffffff"
on-dark: "#ffffff"
typography:
display-xl:
fontFamily: Poppins
fontSize: 48px
fontWeight: 700
lineHeight: 1.2
display-l:
fontFamily: Poppins
fontSize: 36px
fontWeight: 700
lineHeight: 1.2
display-m:
fontFamily: Poppins
fontSize: 28px
fontWeight: 700
lineHeight: 1.3
heading-1:
fontFamily: Poppins
fontSize: 24px
fontWeight: 700
lineHeight: 1.3
heading-2:
fontFamily: Poppins
fontSize: 20px
fontWeight: 600
lineHeight: 1.4
heading-3:
fontFamily: Inter
fontSize: 18px
fontWeight: 600
lineHeight: 1.4
body:
fontFamily: Inter
fontSize: 16px
fontWeight: 400
lineHeight: 1.6
body-small:
fontFamily: Inter
fontSize: 14px
fontWeight: 400
lineHeight: 1.5
caption:
fontFamily: Inter
fontSize: 12px
fontWeight: 400
lineHeight: 1.4
button:
fontFamily: Inter
fontSize: 14px
fontWeight: 600
lineHeight: 1.2
spacing:
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
section: 64px
rounded:
sm: 6px
md: 8px
lg: 12px
full: 9999px

---

# Achala Motors Design System

## Overview

Achala Motors is a trusted, 20+ year established car dealership offering new and used vehicles, as well as vehicle exchanges. The website design reflects **warmth, reliability, and accessibility** while maintaining a modern, professional aesthetic.

The interface uses a **friendly, inviting color palette** with smooth animations and 3D vehicle showcases (powered by Three.js) on customer-facing pages. The design emphasizes trust and ease of navigation, with clear CTAs for contacting the dealership via WhatsApp or phone.

Admin pages maintain a clean, functional design focused on analytics and vehicle management without unnecessary clutter. A warm welcome bar replaces typical metrics dashboards.

**Key Characteristics:**

- Light, welcoming `{colors.canvas}` (#ffffff) as base surface
- Warm accent color `{colors.primary}` (#ff6b35) for CTAs and highlights
- Deep navy `{colors.surface-dark}` (#0a1929) for hero sections and accents
- Smooth animations and transitions on customer-facing pages
- 3D vehicle visualization on home and detail pages using Three.js
- Grid-based layout for vehicle listings
- Clear contact CTAs (WhatsApp, Phone) on product pages
- Admin dashboard with friendly welcome bar and essential analytics

## Colors

### Brand & Accent

- **Primary Orange** (`{colors.primary}` — #ff6b35): The brand action color for CTAs, links, and interactive elements. Conveys warmth and approachability. Press state: `{colors.primary-active}` (#e55a25).
- **Primary Dark** (`{colors.primary-dark}` — #c85228): Darker shade for hover states and secondary actions.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): Default page surface and card backgrounds.
- **Surface Soft** (`{colors.surface-soft}` — #f9f9f9): Soft grey for footer, sub-navigation, and subtle backgrounds.
- **Surface Card** (`{colors.surface-card}` — #f5f5f5): Light plate behind vehicle cards.
- **Surface Strong** (`{colors.surface-strong}` — #e8e8e8): Section dividers and subtle borders.
- **Surface Dark** (`{colors.surface-dark}` — #0a1929): Dark navy for hero sections, navigation bar, and large dark CTAs.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1a2d42): Lighter dark shade for nested elements on dark backgrounds.

### Hairlines & Borders

- **Hairline** (`{colors.hairline}` — #e0e0e0): 1px divider for inputs, cards, and table borders.
- **Hairline Strong** (`{colors.hairline-strong}` — #b8b8b8): More visible 1px outline for disabled elements.

### Text

- **Ink** (`{colors.ink}` — #1a1a1a): Display and primary text.
- **Body** (`{colors.body}` — #333333): Default running text.
- **Body Strong** (`{colors.body-strong}` — #0a0a0a): Emphasized paragraphs and lead text.
- **Muted** (`{colors.muted}` — #666666): Captions, breadcrumbs, secondary information.
- **Muted Soft** (`{colors.muted-soft}` — #999999): Disabled text, fine-print.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text on orange buttons.
- **On Dark** (`{colors.on-dark}` — #ffffff): White text on dark backgrounds.

### Status & Semantic

- **Success** (`{colors.success}` — #4caf50): Available, positive states.
- **Warning** (`{colors.warning}` — #ff9800): Limited inventory, caution states.
- **Error** (`{colors.error}` — #f44336): Out of stock, negative states.

## Typography

### Fonts

- **Primary Font:** Inter (Open Source Google Font) - clean, modern, highly legible
- **Display Font:** Poppins (Open Source Google Font) - warm, friendly, distinctive heading presence
- **Monospace:** IBM Plex Mono - technical specs and pricing details

### Scale & Weights

| Role       | Font    | Size | Weight | Line Height |
| ---------- | ------- | ---- | ------ | ----------- |
| Display XL | Poppins | 48px | 700    | 1.2         |
| Display L  | Poppins | 36px | 700    | 1.2         |
| Display M  | Poppins | 28px | 700    | 1.3         |
| Heading 1  | Poppins | 24px | 700    | 1.3         |
| Heading 2  | Poppins | 20px | 600    | 1.4         |
| Heading 3  | Inter   | 18px | 600    | 1.4         |
| Body       | Inter   | 16px | 400    | 1.6         |
| Body Small | Inter   | 14px | 400    | 1.5         |
| Caption    | Inter   | 12px | 400    | 1.4         |
| Button     | Inter   | 14px | 600    | 1.2         |

### Usage

- **Display XL/L/M:** Hero sections, page titles, major CTAs
- **Heading 1-3:** Section headers, vehicle titles, feature categories
- **Body:** Primary narrative text, vehicle descriptions
- **Body Small:** Feature lists, specifications, secondary information
- **Caption:** Photo captions, metadata (year, mileage, price)
- **Button:** All interactive button text

## Spacing

### Tokens

- `{spacing.xs}` — 4px
- `{spacing.sm}` — 8px
- `{spacing.md}` — 16px
- `{spacing.lg}` — 24px
- `{spacing.xl}` — 32px
- `{spacing.section}` — 64px

### Usage

- Padding inside components: `{spacing.md}` (16px) or `{spacing.lg}` (24px)
- Margin between sections: `{spacing.section}` (64px)
- Gap between grid items: `{spacing.md}` (16px) or `{spacing.lg}` (24px)
- Padding for hero sections: `{spacing.section}` vertical, max-width 1200px horizontal

## Shapes

- Interactive controls and cards use soft, approachable corners.
- Primary buttons and inputs use `{rounded.sm}` for a subtle, modern feel.
- Vehicle cards and panels use `{rounded.md}` to keep the layout friendly and slightly elevated.
- Chips, badges, and circular avatars use `{rounded.full}` when a pill shape is needed.

## Components

### Buttons

**Primary Button (CTA)**

- Background: `{colors.primary}` (#ff6b35)
- Text: `{colors.on-primary}` (#ffffff)
- Padding: `{spacing.md}` vertical, `{spacing.lg}` horizontal (16px × 24px)
- Border Radius: 6px
- Font: Button weight 600, 14px
- Hover: Background shifts to `{colors.primary-active}` (#e55a25)
- Active: Slight scale down (98%), shadow increases
- Transition: All 200ms ease

**Secondary Button**

- Background: `{colors.surface-card}` (#f5f5f5)
- Border: 1px `{colors.hairline}` (#e0e0e0)
- Text: `{colors.ink}` (#1a1a1a)
- Padding: Same as primary
- Border Radius: 6px
- Hover: Background becomes `{colors.surface-strong}` (#e8e8e8)

**Dark Button (Inverse)**

- Background: `{colors.surface-dark}` (#0a1929)
- Text: `{colors.on-dark}` (#ffffff)
- Used for CTAs on light backgrounds or hero sections

**Contact Button (WhatsApp/Call)**

- Primary: Used for WhatsApp contact with green accent `#25d366`
- Dark: Used for phone call with dark background
- Positioning: Fixed or sticky on vehicle detail pages

### Cards

**Vehicle Card**

- Background: `{colors.canvas}` (#ffffff)
- Border: 1px `{colors.hairline}` (#e0e0e0)
- Border Radius: 8px
- Padding: `{spacing.lg}` (24px)
- Image Area: 100% width, aspect ratio 16:9, border radius 6px
- Title: Heading 2, `{colors.ink}`
- Metadata: Body Small, `{colors.muted}` (year, mileage, transmission)
- Price: Display M, `{colors.primary}`, bold
- Footer: CTA button spanning bottom
- Hover: Slight shadow increase (0 4px 12px rgba(0,0,0,0.1)), translateY(-2px)
- Transition: All 300ms ease-out

**Information Card (Admin)**

- Similar to vehicle card but for analytics/information
- Used in admin dashboard for metrics and insights

### Input Fields

- Border: 1px `{colors.hairline}` (#e0e0e0)
- Border Radius: 6px
- Padding: `{spacing.md}` (16px)
- Focus: Border becomes `{colors.primary}` (#ff6b35), 2px, outline none
- Background: `{colors.canvas}` (#ffffff)
- Text: `{colors.body}` (#333333)
- Placeholder: `{colors.muted-soft}` (#999999)
- Transition: Border 200ms ease

### Filters & Chips

- Background: `{colors.surface-card}` (#f5f5f5)
- Text: `{colors.body}` (#333333)
- Border: 1px `{colors.hairline}` (#e0e0e0)
- Border Radius: 20px (pill shape)
- Padding: `{spacing.sm}` vertical, `{spacing.md}` horizontal (8px × 16px)
- Active: Background becomes `{colors.primary}` (#ff6b35), text becomes white
- Transition: All 200ms ease

## Layouts

### Navigation Bar (Desktop)

- Height: 64px
- Background: `{colors.surface-dark}` (#0a1929)
- Padding: `{spacing.md}` horizontal (16px) on each side
- Logo: Left-aligned, white text, 24px
- Links: Center-aligned, white text, hover becomes `{colors.primary}` (#ff6b35)
- Right Section: Login, Sign-up button, Search icon
- Sticky: Fixed to top on scroll
- Z-index: 1000

### Hero Section

- Height: 80vh (customer pages), 10vh (admin welcome bar)
- Background: `{colors.surface-dark}` (#0a1929)
- Text: White (`{colors.on-dark}`)
- 3D Visualization Area: Right side, 50% width on desktop
- Content Area: Left side, 50% width with copy and CTA
- Animation: Smooth fade-in on page load, subtle parallax on scroll
- Responsive: Full-width stacked on mobile

### Vehicle Grid

- Columns: 4 columns on desktop, 2 on tablet, 1 on mobile
- Gap: `{spacing.lg}` (24px)
- Max-width: 1200px, centered
- Padding: `{spacing.section}` (64px) top/bottom, `{spacing.md}` sides
- Card Height: Auto based on content

### Filter Sidebar (Listing Page)

- Width: 280px on desktop
- Position: Left side, sticky on scroll
- Background: `{colors.surface-soft}` (#f9f9f9)
- Border-right: 1px `{colors.hairline}` (#e0e0e0)
- Padding: `{spacing.lg}` (24px)
- Filter Groups: Separated by `{spacing.md}` (16px)
- Hidden on mobile, shows as modal drawer

### Admin Welcome Bar

- Height: 10vh
- Background: Gradient from `{colors.primary}` (#ff6b35) to `{colors.primary-dark}` (#c85228)
- Content: Greeting text ("Welcome back, Admin name"), centered
- Text: Display M, white, friendly tone
- SVG Decoration: Subtle background pattern or accent shapes

## Animations & Transitions

### Timing

- Quick interactions: 200ms
- Page transitions: 300ms
- Scroll animations: 500ms ease-out
- 3D vehicle rotation: Smooth continuous or on-hover

### Effects

- **Fade In:** Opacity 0 → 1 over 300ms on page load
- **Slide Up:** TranslateY(20px) → translateY(0) over 400ms for card reveals
- **Hover Lift:** Cards translateY(-2px) on hover over 200ms
- **Button Press:** Scale(0.98) on click, return on release
- **3D Rotation:** Vehicle model rotates smoothly on cursor movement or auto-rotates slowly
- **Parallax Scroll:** Hero text moves slower than background over 500ms
- **Smooth Scroll:** All page navigation uses smooth scroll behavior

## Pages

### 1. Home Page

**Structure:**

- Hero: 80vh with 3D vehicle showcase (Three.js), welcome headline, CTA
- Featured Section: 3-4 featured vehicles as cards
- Why Choose Us: 4-column layout with icons and short copy
- Recent Listings: Grid of latest vehicles (6-8 shown)
- Testimonials: Carousel of customer reviews with 5-star ratings
- CTA Section: "Start Your Journey" with contact options
- Footer: Navigation links, contact info, social media

**Animations:**

- Hero vehicle: Auto-rotate or rotate on hover
- Featured section: Stagger card reveals on scroll
- Numbers/stats: Count-up animation as they come into view
- Testimonial carousel: Smooth fade between slides

### 2. Vehicle Listing Page

**Structure:**

- Hero: Smaller hero with "Browse Our Inventory"
- Filter Sidebar: Filter by type, brand, price, mileage, transmission, condition
- Results Grid: Vehicle cards in 4-column grid
- Sorting: Sort by price, newest, featured
- Pagination or infinite scroll
- Footer

**Animations:**

- Filter animations: Quick 200ms transitions
- Card reveals: Staggered animation on load and filter change
- Smooth scroll to top when filters change

### 3. Vehicle Detail Page

**Structure:**

- Breadcrumb: Home > Listings > Vehicle Name
- Image Gallery: Large primary image with thumbnails below
- 3D View Toggle: Option to view vehicle in 3D (if available)
- Right Sidebar:
  - Vehicle title and price
  - Status badge (Available, Limited, etc)
  - Key specs: Year, mileage, transmission, fuel type
  - Contact buttons: WhatsApp (green), Call (dark)
- Below:
  - Description: Detailed vehicle information
  - Features: 2-column layout of included features
  - Specifications: Table of technical details
  - Related Vehicles: 3-4 similar vehicles carousel
- Footer

**Animations:**

- Image gallery: Smooth fade between images
- 3D model: Rotate on click/drag or auto-rotate
- Sticky contact bar: Scrolls into view on mobile
- Related vehicles: Fade transitions between carousel slides

### 4. Admin Dashboard

**Structure:**

- Top: Welcome bar (10vh) with greeting and warm message
- Main Grid (2-3 columns):
  - Quick Actions: Add vehicle, Update pricing, View reports
  - Essential Metrics: Total inventory, vehicles listed this week, pending approvals (optional)
  - Market Price Tracker: Vehicle price trends (simple chart)
  - Recent Activity: Latest vehicle updates
- Sidebar Navigation: Dashboard, Vehicles (CRUD), Market Data, Settings

**Animations:**

- Minimal animations, functional transitions
- Metric cards: No unnecessary animations, clean data presentation
- Sidebar collapse: 200ms slide transition

### 5. Admin Vehicle Management

**Structure:**

- List View: Table of all vehicles with columns (ID, Name, Price, Status, Actions)
- Actions: Edit, Delete, Toggle Featured
- Create/Edit Modal: Form for vehicle details, images, specifications
- Bulk Actions: Featured toggle, delete multiple, update prices

**Animations:**

- Form field validation: Subtle red outline on error
- Modal open/close: 200ms fade
- Delete confirmation: Modal confirmation

## Responsive Breakpoints

- **Desktop:** 1200px+ (4-column grid, full sidebar)
- **Tablet:** 768px-1199px (2-column grid, collapsible sidebar)
- **Mobile:** <768px (1-column grid, bottom sheet filters)

## 3D Vehicle Integration (Three.js)

### Home Page Hero

- Full viewport 3D vehicle model centered-right
- Auto-rotates slowly (360° over 20 seconds)
- On hover: Rotation speed increases
- Simple lighting: One key light + ambient
- Minimal post-processing: No bloom or complex effects
- Fallback: Static image for low-end devices

### Vehicle Detail Page (Optional)

- 3D model toggle above gallery
- Interactive rotation: Drag to rotate
- Zoom: Mouse wheel or pinch to zoom
- Download model option (optional)
- Performance: Auto-disable on mobile for smooth experience

## Accessibility

- All interactive elements: Keyboard accessible, tab order logical
- Buttons: Clear focus states, minimum 44px touch target
- Images: Alt text for all vehicle photos
- Forms: Labels associated with inputs, error messages clear
- Color: Not the only means of information (use icons + text)
- Contrast: WCAG AA compliant (4.5:1 for body text)
- Motion: Respect `prefers-reduced-motion` media query

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers: Safari iOS, Chrome Android
