import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      toast({ title: "You're on the list", description: "Watch your inbox for member-only deals." });
      setEmail("");
    }
  }

  return (
    <section className="bg-secondary text-secondary-foreground py-12 sm:py-16">
      <div className="max-w-xl mx-auto px-4 text-center space-y-4">
        <Mail className="w-8 h-8 mx-auto text-primary" />
        <h2 className="font-display text-xl font-bold">Get Member-Only Discounts</h2>
        <p className="text-sm text-secondary-foreground/70">
          Sign up for the Texas Hole Makers mailing list. Be first to know about new arrivals, crew specials, and Yard Crew perks.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="flex-1 px-4 py-2.5 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-sm placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
            data-testid="input-email-capture"
          />
          <Button type="submit" className="shrink-0" data-testid="button-email-capture">
            Get Deals
          </Button>
        </form>
      </div>
    </section>
  );
}
