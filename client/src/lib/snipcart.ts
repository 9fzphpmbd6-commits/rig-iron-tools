/**
 * Snipcart integration stub.
 * To activate:
 * 1. Sign up at https://snipcart.com
 * 2. Get your public API key
 * 3. Replace SNIPCART_API_KEY below
 * 4. Uncomment the Snipcart script tags in index.html
 */

export const SNIPCART_API_KEY = "YOUR_SNIPCART_API_KEY_HERE";
export const SNIPCART_ENABLED = false; // Set to true when ready

export function getSnipcartAttributes(product: {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  shortDescription: string;
}) {
  return {
    "data-item-id": product.id,
    "data-item-name": product.name,
    "data-item-price": product.price.toFixed(2),
    "data-item-url": `/products/${product.slug}`,
    "data-item-description": product.shortDescription,
    "data-item-image": product.imageUrl,
  };
}
