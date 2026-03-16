import { Truck, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/data/siteConfig";

export function ShippingInfo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Truck className="w-3.5 h-3.5" />
        <span>{SITE.shipping.estimate}. {SITE.shipping.note}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-accent/30 rounded-lg border border-border">
      <div className="flex items-start gap-2.5">
        <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium">{SITE.shipping.estimate}</p>
          <p className="text-xs text-muted-foreground">{SITE.shipping.note}</p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium">Secure Checkout</p>
          <p className="text-xs text-muted-foreground">Trusted Unibor specialist</p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium">Easy Returns</p>
          <p className="text-xs text-muted-foreground">30-day return policy</p>
        </div>
      </div>
    </div>
  );
}
