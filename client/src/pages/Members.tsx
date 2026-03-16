import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Users, Percent, Rocket, Award, Star, Check } from "lucide-react";

export default function Members() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Welcome to The Yard Crew", description: "We'll send your member code shortly." });
  }

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
        {/* Free */}
        <div className="bg-card border border-card-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Free Member</h2>
            <Badge variant="secondary">Free</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Join the crew and start saving immediately.</p>
          <ul className="space-y-2">
            {[
              { icon: Percent, text: "5% recurring discount on SITEH3RO tools" },
              { icon: Rocket, text: "Early access to new magnetic drill releases" },
              { icon: Award, text: "Eligible for Featured Builds listing" },
              { icon: Star, text: "Email-only promotions and bundle deals" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2.5 text-sm">
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Crew Partner */}
        <div className="bg-card border-2 border-primary rounded-xl p-6 space-y-4 relative">
          <div className="absolute -top-3 left-6">
            <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
          </div>
          <div className="flex items-center justify-between pt-1">
            <h2 className="font-display text-lg font-bold">Crew Partner</h2>
            <Badge variant="outline">By Invitation</Badge>
          </div>
          <p className="text-sm text-muted-foreground">For established crews placing regular orders.</p>
          <ul className="space-y-2">
            {[
              { icon: Percent, text: "10% recurring discount on all products" },
              { icon: Rocket, text: "Priority early access and pre-order" },
              { icon: Award, text: "Featured listing with priority badge" },
              { icon: Star, text: "Occasional free tool-bundle promos" },
              { icon: Users, text: "Dedicated support for crew orders" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2.5 text-sm">
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sign-up form */}
      <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
        <h2 className="font-display text-lg font-bold mb-1">Sign Up for Free Membership</h2>
        <p className="text-sm text-muted-foreground mb-6">Member discounts are applied via unique codes emailed to you.</p>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <p className="font-semibold">You're in.</p>
            <p className="text-sm text-muted-foreground">Watch your inbox for your Yard Crew discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-member-name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-member-email" />
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
            <div>
              <label className="block text-sm font-medium mb-1">How many people on your crew?</label>
              <input type="number" min="1" className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" />
            </div>
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium">What kind of work do you do?</legend>
              {["I install structural steel", "I do plant maintenance", "I work on bridges/infrastructure", "I do metal fabrication"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  {opt}
                </label>
              ))}
            </fieldset>
            <Button type="submit" size="lg" className="w-full" data-testid="button-member-signup">
              Join The Yard Crew
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
