import { useState, useRef } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useYardCrew } from "@/lib/yardCrew";
import { Users, Percent, Rocket, Award, Star, Check, Gift, ShieldCheck } from "lucide-react";

export default function Members() {
  const { toast } = useToast();
  const { isMember, memberInfo, joinYardCrew } = useYardCrew();
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleFreeSignUp(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    joinYardCrew(name, email);
    setSubmitted(true);
    toast({ title: "Account created! 🔩", description: "You now have a free account. Upgrade to Yard Crew for 15% off!" });
  }

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "The Yard Crew" }]} />

      {/* Hero */}
      <div className="text-center py-8 sm:py-12 space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold">Join The Yard Crew</h1>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Our member program for steel erection crews, fabricators, and maintenance teams. Get discounts, early access, and recognition for your work.
        </p>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Free Account */}
        <div className="bg-card border border-card-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Free Account</h2>
            <Badge variant="secondary">Free</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Create an account and start shopping with perks.</p>
          <ul className="space-y-2">
            {[
              { icon: Star, text: "Order tracking and history" },
              { icon: Award, text: "Wishlist and saved items" },
              { icon: Rocket, text: "Early access to new products" },
              { icon: Percent, text: "Email-only promotions and deals" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2.5 text-sm">
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Yard Crew Lifetime */}
        <div className="bg-card border-2 border-primary rounded-xl p-6 space-y-4 relative">
          <div className="absolute -top-3 left-6">
            <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
          </div>
          <div className="flex items-center justify-between pt-1">
            <h2 className="font-display text-lg font-bold">Yard Crew Lifetime</h2>
            <Badge variant="outline" className="font-bold">$100 one-time</Badge>
          </div>
          <p className="text-sm text-muted-foreground">One payment. 15% off every order. Forever.</p>
          <ul className="space-y-2">
            {[
              { icon: Percent, text: "15% off EVERY order for life" },
              { icon: Gift, text: "2 free SITEH3RO™ Holders (1/2\" + 3/4\")" },
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
          <button
            className="snipcart-add-item w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-sm font-medium transition-colors"
            data-item-id="yard-crew-lifetime"
            data-item-name="Yard Crew Lifetime Membership"
            data-item-price="100.00"
            data-item-url={`${origin}/#/members`}
            data-item-description="One-time lifetime membership — 15% off every order + 2 free SITEH3RO holders"
            data-item-image="/images/mascot.png"
            data-item-quantity="1"
            data-item-max-quantity="1"
          >
            Join The Yard Crew — $100 Lifetime 🔩
          </button>
        </div>
      </div>

      {/* Free sign-up form */}
      <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
        {isMember && memberInfo ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <p className="font-display text-lg font-bold">You're in The Yard Crew! 🔩</p>
            <p className="text-sm text-muted-foreground">
              Welcome, <strong>{memberInfo.name}</strong> ({memberInfo.email}). Your 15% discount is applied automatically.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-lg font-bold mb-1">Create Free Account</h2>
            <p className="text-sm text-muted-foreground mb-6">Sign up for a free account to get started. Upgrade to Yard Crew Lifetime anytime.</p>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <p className="font-semibold">Account created! 🔩</p>
                <p className="text-sm text-muted-foreground">Upgrade to Yard Crew Lifetime above for 15% off every order.</p>
              </div>
            ) : (
              <form onSubmit={handleFreeSignUp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input ref={nameRef} required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-member-name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input ref={emailRef} type="email" required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-member-email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <input placeholder="e.g. Foreman, Superintendent" className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full" data-testid="button-member-signup">
                  Create Free Account
                </Button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
