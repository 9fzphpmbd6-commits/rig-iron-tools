import { Link } from "wouter";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MembershipBanner() {
  return (
    <section className="bg-gradient-to-r from-secondary via-secondary to-primary/20 py-10 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Users className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1 text-secondary-foreground">
          <h2 className="font-display text-lg font-bold">Join The Yard Crew</h2>
          <p className="text-sm text-secondary-foreground/70 mt-1">
            $100 one-time lifetime membership — 15% off every order, early access to new mag drills, and a chance to feature your crew's work.
          </p>
        </div>
        <Link href="/members">
          <Button variant="default" size="lg" className="shrink-0" data-testid="button-join-yard-crew">
            See Member Perks
          </Button>
        </Link>
      </div>
    </section>
  );
}
