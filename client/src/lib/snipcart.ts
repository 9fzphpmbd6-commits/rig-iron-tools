/**
 * Snipcart integration — LIVE
 * Products are defined by data attributes on buy buttons.
 * Snipcart crawls the product URL to validate the price.
 */

import type { Product } from "@/data/products";

export const SNIPCART_ENABLED = true;

/**
 * Returns the data-item-* attributes needed for a Snipcart buy button.
 * The `data-item-url` must point to a publicly accessible page where
 * Snipcart can crawl and find the same button with matching price.
 */
export function getSnipcartAttributes(product: Product, quantity = 1) {
  // Use current origin so this works on any deploy URL (Netlify, custom domain, etc.)
  // Snipcart crawls this URL to validate the price matches the data attributes.
  const origin = typeof window !== "undefined" ? window.location.origin : "https://texasholemakers.com";
  const productUrl = `${origin}/#/products/${product.slug}`;

  return {
    className: "snipcart-add-item",
    "data-item-id": product.id,
    "data-item-name": product.name,
    "data-item-price": product.price.toFixed(2),
    "data-item-url": productUrl,
    "data-item-description": product.shortDescription,
    "data-item-image": product.imageUrl,
    "data-item-quantity": String(quantity),
  };
}

/**
 * Returns props to open the Snipcart cart summary (for header cart icon).
 */
export function getCartToggleAttributes() {
  return {
    className: "snipcart-checkout",
  };
}

/**
 * Returns the Snipcart item count badge class.
 */
export function getCartCountClass() {
  return "snipcart-items-count";
}

/**
 * Returns the Snipcart total price class.
 */
export function getCartTotalClass() {
  return "snipcart-total-price";
}
