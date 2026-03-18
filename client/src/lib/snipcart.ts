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
 *
 * When variant info is provided, use the variant SKU as the item ID
 * and append the variant label to the product name.
 */
export function getSnipcartAttributes(
  product: Product,
  quantity = 1,
  variant?: { sku: string; label: string; price: number },
) {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://texasholemakers.com";
  const productUrl = `${origin}/#/products/${product.slug}`;

  const itemId = variant ? variant.sku : product.sku;
  const itemName = variant ? `${product.name} — ${variant.label}` : product.name;
  const itemPrice = variant ? variant.price : product.price;

  return {
    className: "snipcart-add-item",
    "data-item-id": itemId,
    "data-item-name": itemName,
    "data-item-price": itemPrice.toFixed(2),
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
