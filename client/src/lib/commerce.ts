/**
 * Commerce integration layer.
 * Stub functions for future Stripe / Shopify / Snipcart integration.
 * All checkout logic lives here — swap in real API calls later.
 */

import type { CartItem } from "./cart";

export type CheckoutSession = {
  id: string;
  status: "pending" | "completed" | "failed";
  total: number;
};

/** Create a checkout session — replace with Stripe/Shopify call */
export async function createCheckoutSession(
  _items: CartItem[]
): Promise<CheckoutSession> {
  // TODO: Replace with real provider
  // Stripe example: const session = await stripe.checkout.sessions.create({ ... })
  // Shopify example: const checkout = await shopifyClient.checkout.create({ ... })
  // Snipcart: handled client-side via data attributes
  return {
    id: "placeholder-session-" + Date.now(),
    status: "pending",
    total: _items.reduce((s, i) => s + i.product.price * i.quantity, 0),
  };
}

/** Validate a discount/promo code — replace with real validation */
export async function validatePromoCode(
  _code: string
): Promise<{ valid: boolean; discount: number }> {
  // TODO: Validate against Stripe coupons or your own DB
  return { valid: false, discount: 0 };
}

/** Generate an invoice — hook for AI automation */
export async function generateInvoice(
  _sessionId: string
): Promise<{ url: string }> {
  // TODO: Auto-generate via Stripe Invoicing or PDF lib
  // Perplexity automation: auto-generate and email invoices
  return { url: "#" };
}

/** Send order status email — hook for AI automation */
export async function sendOrderStatusEmail(
  _sessionId: string,
  _status: string
): Promise<void> {
  // TODO: Integrate with SendGrid, Resend, or Perplexity automation
  // Perplexity automation: email order status updates
}

/** Retry failed payment — hook for AI automation */
export async function retryFailedPayment(
  _sessionId: string
): Promise<void> {
  // TODO: Stripe retry or send follow-up email
  // Perplexity automation: write follow-up emails for failed payments
}
