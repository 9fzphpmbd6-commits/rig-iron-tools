import { useState, useRef } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useYardCrew } from "@/lib/yardCrew";
import { Users, Percent, Rocket, Award, Star, Check, Gift, ShieldCheck, ChevronRight, Truck, Wrench } from "lucide-react";

export default function Members() {
  const { toast } = useToast();
  const { isMember, memberInfo, joinYardCrew } = useYardCrew();
  const [selectedTier, setSelectedTier] = useState<"free" | "lifetime" | null>(null);
  const [freeSubmitted, setFreeSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleFreeSignUp(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    if (!name || !email) return;
    joinYardCrew(name, email);
    setFreeSubmitted(true);
    toast({ title: "You're in! 🔩", description: "Free account created. Welcome to The Yard Crew!" });
  }

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  // Already a member — show welcome state
  if (isMember && memberInfo) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: "The Yard Crew" }]} />
        <div className="text-center py-16 space-y-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold">You're in The Yard Crew! 🔩</h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Welcome, <strong>{memberInfo.name}</strong>. Your 15% Yard Crew discount is applied automatically at checkout.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "The Yard Crew" }]} />

      {/* Hero */}
      <div className="text-center py-8 sm:py-10 space-y-3">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Users className="w-7 h-7 text-primary" />
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold">Join The Yard Crew</h1>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Pick your membership below. Click a box to get started.
        </p>
      </div>

      {/* Two clickable tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">

        {/* ─── FREE ACCOUNT CARD ─── */}
        <div
          onClick={() => setSelectedTier("free")}
          className={`relative bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
            selectedTier === "free"
              ? "border-primary ring-2 ring-primary/20 shadow-lg"
              : "border-card-border hover:border-primary/50 hover:shadow-md"
          }`}
          data-testid="card-free-membership"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-bold">Free Account</h2>
            <Badge variant="secondary" className="text-xs">Free</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Create a free account to track orders and get email-only deals.</p>
          <ul className="space-y-2 mb-5">
            {[
              { icon: Star, text: "Order tracking and history" },
              { icon: Award, text: "Wishlist and saved items" },
              { icon: Rocket, text: "Early access to new products" },
              { icon: Percent, text: "Email-only promotions" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2.5 text-sm">
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item.text}
              </li>
            ))}
          </ul>

          {/* Inline sign-up form — shows when this card is selected */}
          {selectedTier === "free" && !freeSubmitted && (
            <form onSubmit={handleFreeSignUp} className="space-y-3 pt-3 border-t border-border" onClick={(e) => e.stopPropagation()}>
              <div>
                <label className="block text-xs font-medium mb-1">Name</label>
                <input
                  ref={nameRef}
                  required
                  placeholder="Your name"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  data-testid="input-free-name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  data-testid="input-free-email"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-free-signup">
                Sign Up Free 🔩
              </Button>
            </form>
          )}

          {selectedTier === "free" && freeSubmitted && (
            <div className="pt-3 border-t border-border text-center space-y-2">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-sm font-semibold">Account created! 🔩</p>
              <p className="text-xs text-muted-foreground">Welcome to The Yard Crew.</p>
            </div>
          )}

          {selectedTier !== "free" && (
            <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-primary pt-2">
              Click to sign up free <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* ─── YARD CREW LIFETIME CARD ─── */}
        <div
          onClick={() => setSelectedTier("lifetime")}
          className={`relative bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
            selectedTier === "lifetime"
              ? "border-primary ring-2 ring-primary/20 shadow-lg"
              : "border-primary/40 hover:border-primary hover:shadow-md"
          }`}
          data-testid="card-lifetime-membership"
        >
          <div className="absolute -top-3 left-6">
            <Badge className="bg-primary text-primary-foreground text-xs">Best Value</Badge>
          </div>
          <div className="flex items-center justify-between mb-3 pt-1">
            <h2 className="font-display text-lg font-bold">Yard Crew Lifetime</h2>
            <Badge variant="outline" className="font-bold text-xs">$25 one-time</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">One payment. 15% off every order + FREE shipping. Forever.</p>
          <ul className="space-y-2 mb-5">
            {[
              { icon: Percent, text: "15% off EVERY order for life" },
              { icon: Truck, text: "FREE shipping on every order" },
              { icon: Gift, text: "2 free SITEH3RO\u2122 Holders (1/2\" + 3/4\")" },
              { icon: Wrench, text: "30% off holders when bundled with tools" },
              { icon: ShieldCheck, text: "Priority support" },
              { icon: Award, text: "Featured Builds listing" },
              { icon: Star, text: "Exclusive bundle deals" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2.5 text-sm">
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item.text}
              </li>
            ))}
          </ul>

          {/* Snipcart buy button — always visible when this card is selected */}
          {selectedTier === "lifetime" ? (
            <div className="pt-3 border-t border-border" onClick={(e) => e.stopPropagation()}>
              <button
                className="snipcart-add-item w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-sm font-semibold transition-colors"
                data-item-id="yard-crew-lifetime"
                data-item-name="Yard Crew Lifetime Membership"
                data-item-price="25.00"
                data-item-url={`${origin}/#/members`}
                data-item-description="One-time lifetime membership — 15% off every order + FREE shipping + 2 free SITEH3RO holders"
                data-item-image="/images/mascot.png"
                data-item-quantity="1"
                data-item-max-quantity="1"
                data-item-categories="membership"
                data-testid="button-lifetime-purchase"
              >
                Join The Yard Crew — $25 Lifetime 🔩
              </button>
              <p className="text-xs text-muted-foreground text-center mt-2">Secure checkout via Snipcart + Stripe</p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-primary pt-2">
              Click to join for $25 <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-2xl mx-auto space-y-4 pb-8">
        <h2 className="font-display text-lg font-bold text-center mb-4">Common Questions</h2>
        {[
          { q: "How does the 15% discount work?", a: "After purchasing the Lifetime membership, you'll receive a discount code that applies 15% off every order automatically. It never expires." },
          { q: "What are the 2 free SITEH3RO Holders?", a: "Lifetime members get a free 1/2\" and 3/4\" SITEH3RO Impact-Ready Annular Cutter Holder shipped with their first tool order." },
          { q: "Can I upgrade from Free to Lifetime later?", a: "Yes, you can upgrade anytime. Just come back to this page and click the Lifetime box." },
          { q: "Is the $25 fee recurring?", a: "No. It's a one-time payment. Your 15% discount, free shipping, and all perks last forever." },
        ].map((faq) => (
          <details key={faq.q} className="group bg-card border border-card-border rounded-lg">
            <summary className="px-4 py-3 text-sm font-medium cursor-pointer list-none flex items-center justify-between">
              {faq.q}
              <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
            </summary>
            <p className="px-4 pb-3 text-sm text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
