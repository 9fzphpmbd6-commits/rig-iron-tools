import { useEffect } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ShoppingCart, ArrowRight } from "lucide-react";

/**
 * Cart page — Snipcart manages the real cart UI via its sidebar overlay.
 * When the user navigates to /cart, we automatically open the Snipcart cart.
 * We also show a lightweight landing view with a prompt to browse or open cart.
 */
export default function Cart() {
  useEffect(() => {
    // Auto-open the Snipcart cart sidebar when user navigates to /cart
    const tryOpen = () => {
      if (typeof window !== "undefined" && (window as any).Snipcart) {
        (window as any).Snipcart.api.theme.cart.open();
      }
    };

    // Snipcart may still be loading, so try immediately and then with a short delay
    tryOpen();
    const timeout = setTimeout(tryOpen, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
      <Breadcrumbs items={[{ label: "Cart" }]} />
      <div className="text-center py-16 space-y-5">
        <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mx-auto" />
        <h1 className="font-display text-xl font-bold">Your Cart</h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Your shopping cart should have opened automatically. If it didn't, click the button below to view your items and checkout.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            className="snipcart-checkout gap-2"
            size="lg"
            data-testid="button-open-cart"
          >
            <ShoppingCart className="w-4 h-4" />
            Open Cart
            <span className="snipcart-items-count ml-1 bg-primary-foreground/20 text-primary-foreground text-xs font-bold min-w-[1.25rem] h-5 rounded-full inline-flex items-center justify-center px-1" />
          </Button>
          <Link href="/products">
            <Button variant="outline" size="lg" className="gap-2" data-testid="button-browse-products">
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Yard Crew promo */}
        <div className="mt-8 max-w-sm mx-auto">
          <Link href="/members">
            <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 hover:bg-primary/10 transition-colors text-sm text-primary font-medium">
              🔩 Not a Yard Crew member? Join now and save 15% on every order.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
