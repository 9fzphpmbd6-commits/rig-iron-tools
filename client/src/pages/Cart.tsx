import { useState } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Minus, Plus, Trash2, ShoppingBag, Bot, FileText, Mail, CreditCard, AlertCircle } from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeItem, clearCart, subtotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
        <Breadcrumbs items={[{ label: "Cart" }]} />
        <div className="text-center py-16 space-y-4">
          <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mx-auto" />
          <h1 className="font-display text-xl font-bold">Your cart is empty</h1>
          <p className="text-sm text-muted-foreground">Browse our SITEH3RO tools and magnetic drills to get started.</p>
          <Link href="/products">
            <Button data-testid="button-browse-products">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Cart" }]} />

      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-xl font-bold">Your Cart</h1>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive text-xs gap-1" data-testid="button-clear-cart">
          <Trash2 className="w-3.5 h-3.5" /> Clear
        </Button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.product.id} className="bg-card border border-card-border rounded-lg p-4 flex gap-4" data-testid={`cart-item-${item.product.id}`}>
            <div className="w-20 h-20 bg-secondary/5 rounded-md overflow-hidden shrink-0">
              <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <Link href={`/products/${item.product.slug}`}>
                <h3 className="font-semibold text-sm hover:text-primary transition-colors truncate">{item.product.name}</h3>
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.product.category === "siteh3ro" ? "SITEH3RO" : "Magnetic Drill"}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center border border-border rounded-md">
                  <button className="px-2 py-1 hover:bg-accent transition-colors" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-medium">{item.quantity}</span>
                  <button className="px-2 py-1 hover:bg-accent transition-colors" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-sm">${(item.product.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 bg-card border border-card-border rounded-lg p-5 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-muted-foreground">Calculated at checkout</span>
        </div>
        <div className="border-t border-border pt-3 flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg">${subtotal.toFixed(2)}</span>
        </div>
        <Button className="w-full" size="lg" onClick={() => setShowCheckout(true)} data-testid="button-checkout">
          <CreditCard className="w-4 h-4 mr-2" />
          Proceed to Checkout
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Yard Crew members: enter your discount code at checkout.
        </p>
      </div>

      {/* Checkout placeholder modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-card-border p-6 max-w-md w-full space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold">Checkout Coming Soon</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Checkout powered by <strong>[Your Provider Here]</strong> is coming soon. This is where Stripe, Shopify, or Snipcart will be integrated.
            </p>

            <div className="border-t border-border pt-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
                <Bot className="w-4 h-4 text-primary" />
                Automation Hooks for AI
              </h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  Auto-generating invoices from completed orders
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  Emailing order status updates to customers
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  Writing follow-up emails for failed payments
                </li>
              </ul>
            </div>

            <Button variant="outline" className="w-full" onClick={() => setShowCheckout(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
