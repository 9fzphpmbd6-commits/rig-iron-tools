# Rig Iron Tools — Texas Power Tool Storefront

A production-ready, mobile-first dropshipping storefront for Unibor SITEH3RO impact-ready tools and magnetic drills. Texas-themed niche store built with React, TypeScript, Tailwind CSS, and Vite.

## Quick Start

```bash
npm install
npm run dev      # Start dev server on port 5000
npm run build    # Production build
```

Deploy to Netlify:
```bash
npm run build
# Deploy dist/public/ as the publish directory
```

## Stack

- **Framework**: Vite + React 18 (SPA with hash routing)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + shadcn/ui components
- **State**: React hooks only (useCart global hook)
- **Data**: Mocked locally in `client/src/data/`
- **No backend required** — all data is client-side

## Project Structure

```
client/src/
├── data/
│   ├── products.ts         # 16 products (8 SITEH3RO + 8 mag drills)
│   ├── featuredBuilds.ts   # 8 featured build entries
│   └── siteConfig.ts       # Brand name, social links, shipping info
├── lib/
│   ├── cart.ts             # useCart hook (in-memory, global state)
│   ├── commerce.ts         # Checkout stubs (Stripe/Shopify/Snipcart hooks)
│   ├── social.ts           # Social media integration stubs
│   └── recommendations.ts  # Product recommendation logic
├── components/
│   ├── Header.tsx          # Sticky nav, search, cart count, dark mode
│   ├── Footer.tsx          # Links, social icons, attribution
│   ├── Logo.tsx            # SVG logo component
│   ├── ProductCard.tsx     # Product card with badges, price, add-to-cart
│   ├── ProductGrid.tsx     # Responsive product grid
│   ├── Breadcrumbs.tsx     # Breadcrumb navigation
│   ├── VideoPlaceholder.tsx # Video slot placeholder
│   ├── ShippingInfo.tsx    # Shipping/trust badges component
│   ├── BuildCard.tsx       # Featured build card
│   ├── EmailCapture.tsx    # Email signup component
│   └── MembershipBanner.tsx # Yard Crew promotion banner
├── pages/
│   ├── Home.tsx            # Homepage with all sections
│   ├── Products.tsx        # All products with filters/sort
│   ├── ProductDetail.tsx   # Product detail with tabs, video, recommendations
│   ├── SiteH3RO.tsx        # SITEH3RO category landing
│   ├── MagneticDrills.tsx  # Magnetic drills category landing
│   ├── Members.tsx         # Yard Crew membership page
│   ├── FeaturedBuilds.tsx  # Featured builds gallery with filters
│   ├── About.tsx           # About the store
│   ├── Contact.tsx         # Contact form
│   ├── Cart.tsx            # Cart with checkout placeholder
│   ├── Shipping.tsx        # Shipping & returns policy
│   └── Warranty.tsx        # Warranty information
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/products` | All products with filters |
| `/products/[slug]` | Product detail |
| `/siteh3ro` | SITEH3RO category |
| `/magnetic-drills` | Magnetic drills category |
| `/members` | Yard Crew membership |
| `/featured-builds` | Featured builds gallery |
| `/about` | About page |
| `/contact` | Contact form |
| `/cart` | Shopping cart |
| `/shipping` | Shipping & returns |
| `/warranty` | Warranty info |

Note: Uses hash routing (`/#/products`) for deployment compatibility.

## How to Change Products

Edit `client/src/data/products.ts`. Each product follows the `Product` type:

```typescript
type Product = {
  id: string;
  slug: string;
  name: string;
  category: "siteh3ro" | "magnetic-drill";
  subcategory?: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
  videoPlaceholderUrl?: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  idealFor?: string[];
};
```

To add a product:
1. Add an entry to the `products` array
2. Use a unique `id` and URL-friendly `slug`
3. Set `imageUrl` to a real image path in `client/public/images/`
4. Set `videoPlaceholderUrl` to a real video path when ready

## How to Change Memberships

Edit the tier cards in `client/src/pages/Members.tsx`. The member program name ("The Yard Crew") is defined in `client/src/data/siteConfig.ts`.

## How to Plug In Checkout

All commerce logic is in `client/src/lib/commerce.ts` with stub functions:

1. **Stripe**: Replace `createCheckoutSession()` with Stripe Checkout API call
2. **Shopify**: Replace with Shopify Storefront API / Buy SDK
3. **Snipcart**: Add Snipcart `data-*` attributes to product cards

The cart page's "Proceed to Checkout" button currently shows a placeholder modal. Replace the `setShowCheckout(true)` call in `Cart.tsx` with a real checkout redirect.

## How to Add Real Images

Replace SVG placeholders in `client/public/images/` with real product photos. Update `imageUrl` in each product entry in `products.ts`.

## How to Add Real Videos

Replace `videoPlaceholderUrl` values with actual video paths. Upload MP4 files to `client/public/videos/`. The `VideoPlaceholder` component in product details can be swapped with a `<video>` element.

## Brand Configuration

All brand settings are centralized in `client/src/data/siteConfig.ts`:
- Store name, tagline, description
- Social media links
- Contact information
- Shipping copy
- Member program name
- Brand hashtag

See `BRANDING_NOTES.md` for the full color palette, brand name candidates, and design rationale.

## Netlify Deployment

1. Connect your repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/public`
4. Node version: 18+

For SPA routing, add a `_redirects` file to `client/public/`:
```
/*    /index.html   200
```

## License

MIT
