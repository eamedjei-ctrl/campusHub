---
name: Campus Loop
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fd'
  surface-container: '#ededf8'
  surface-container-high: '#e7e7f2'
  surface-container-highest: '#e1e2ec'
  on-surface: '#191b23'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3038'
  inverse-on-surface: '#f0f0fb'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#994700'
  on-secondary: '#ffffff'
  secondary-container: '#fb7800'
  on-secondary-container: '#592600'
  tertiary: '#7b2600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a33500'
  on-tertiary-container: '#ffc6b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68b'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753400'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ec'
  campus-blue: '#0052CC'
  education-orange: '#FF7A00'
  success-green: '#22C55E'
  pending-amber: '#F59E0B'
  error-red: '#EF4444'
  surface-gray: '#F8F9FA'
  border-subtle: '#E5E7EB'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 1rem
  gutter-sm: 0.75rem
  gutter-md: 1.5rem
  stack-xs: 0.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  container-max: 1280px
---

## Brand & Style

The design system is engineered for a high-velocity, campus-specific marketplace. It targets a student demographic that values speed, utility, and peer-to-peer trust. The brand personality is **utilitarian, energetic, and organized**, prioritizing product discovery and clear transactional flows over decorative elements.

The visual style is **Corporate / Modern** with a lean towards **High-Information Density**. It draws inspiration from established e-commerce giants like Amazon and Jumia, utilizing a "Clean White" foundation to make user-generated content (item photos) the focal point. The aesthetic remains professional to foster trust in peer-to-peer bartering and sales, while the vibrant accent color injects a youthful, academic energy.

Key characteristics include:
- **High-Information Density:** Minimal whitespace in grids to maximize the number of visible listings.
- **Utility-First:** Visual hierarchy is strictly dictated by price, item condition, and trade status.
- **Academic Context:** UI categories and tags are optimized for student life (e.g., "Textbooks," "Dorm Gear," "Meal Swaps").

## Colors

The color palette is anchored by **Campus Blue** (`#0052CC`) as the primary brand driver, used for navigation, primary buttons, and active states. **Education Orange** (`#FF7A00`) serves as a high-contrast secondary color for notifications, urgent CTAs, and "Special Offers."

The system operates on a **light default mode** to maintain the "clean marketplace" feel. 
- **Neutral Palette:** Uses a range of cool grays for borders and backgrounds to define structure without adding visual noise. 
- **Status Colors:** Explicitly defined for the trade lifecycle—Amber for "Pending," Green for "Completed," and Red for "Cancelled."
- **Price/Value:** High-contrast Black (`#111827`) is reserved for titles and prices to ensure immediate legibility against the white surface.

## Typography

This design system uses **Plus Jakarta Sans** across all levels to maintain a contemporary, approachable, and highly readable feel. 

The scale is tuned for **information density**. Body text is kept at a standard 14px-16px, while labels for "Condition" or "Category" use a specialized uppercase style to differentiate metadata from content. Price displays are treated with specific weight and size to ensure they are the first thing a user sees on a card. For mobile views, heading sizes are aggressively scaled down to preserve vertical screen real estate.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high density. 

- **Mobile (0-600px):** 2-column grid for item listings with 12px gutters. This maximizes "items per scroll."
- **Tablet (601-1024px):** 3 or 4-column grid with 16px gutters.
- **Desktop (1025px+):** 6-column grid within a 1280px max-width container.

**Spacing Rhythm:** A strict 4px/8px base unit is used. Marketplace cards use condensed internal padding (12px) to keep the emphasis on the product image. Chat interfaces utilize "Safe Area" margins to ensure messaging feels airy and readable, contrasting with the dense marketplace grid.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines**. 

- **Background:** The primary canvas is `#FFFFFF`. Secondary surfaces (like search bars or background sections) use `#F8F9FA`.
- **Cards:** Instead of heavy shadows, cards use a `1px` solid border in `#E5E7EB`. A very soft, diffused shadow (4px blur, 2% opacity) is applied only on hover to indicate interactivity.
- **Floating Elements:** Primary action buttons (like "Post Listing") and Chat Bubbles use a slightly higher elevation with a 10% opacity tinted shadow to appear "lifted" from the dense grid.
- **Modals:** Use a standard 40% black backdrop blur to isolate the "Offer Trade" flow from the marketplace background.

## Shapes

The design system adopts a **Soft (1)** shape language. This provides a professional, "SaaS-like" precision that fits the Amazon/Jumia inspiration.

- **Standard Elements:** 4px (`0.25rem`) radius for small components like checkboxes and tags.
- **Cards & Inputs:** 8px (`0.5rem`) radius to provide a friendly but structured container for images.
- **Buttons:** 8px (`0.5rem`) for a sturdy, clickable feel.
- **Avatars:** Circular (Full rounded) to distinguish people (traders) from products (rectilinear cards).

## Components

### Buttons
- **Primary:** Campus Blue background, white text. 8px border radius.
- **Secondary:** Education Orange for "Buy Now" or "Hot Trade" actions.
- **Outline:** 1px border for secondary actions like "Message Seller."

### Item Cards
- **Structure:** Top-aligned image (aspect ratio 4:3), followed by 12px padding container.
- **Contents:** Title (Max 2 lines), Price/Trade Icon, Rating, and Location Tag.
- **Badge:** A "Condition" tag (e.g., "Like New") positioned in the top-left corner of the image.

### Chips & Tags
- Used for categories like **Academic**, **Tech**, or **Services**.
- Styling: Neutral gray background with dark text; 4px radius.

### Input Fields
- White background with `#E5E7EB` borders. 
- Focus state: Border changes to Campus Blue with a 2px outer halo.

### Chat Bubbles
- **Sender:** Campus Blue background with white text; right-aligned.
- **Recipient:** Light gray (`#F3F4F6`) background with black text; left-aligned.
- **Metadata:** Small 10px timestamps tucked into the bottom corner of the bubble.

### Progress Indicators
- A horizontal stepper used during the "Trade Offer" flow to show status (Offer Made -> Negotiating -> Meeting -> Complete).