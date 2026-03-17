import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RotateCcw, Clock, XCircle, ShieldCheck, Mail } from "lucide-react";

export default function Returns() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Return Policy" }]} />

      <h1 className="font-display text-2xl font-bold mt-4 mb-2">Return Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        We want you to be completely satisfied with your purchase. Here's our return policy.
      </p>

      <div className="space-y-4">
        <div className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
          <RotateCcw className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-sm">14-Day Free Returns</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Full refund, no questions asked. Item must be unused and in its original packaging.
              Contact us within 14 days of receiving your order.
            </p>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
          <Clock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-sm">15–45 Day Returns</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              50% refund on returns between 15 and 45 days after delivery. Item must be in resalable condition
              with original packaging.
            </p>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
          <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-sm">After 45 Days</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Unfortunately, we cannot accept returns after 45 days from delivery.
            </p>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-sm">Warranty Claims</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Warranty claims are handled separately through Unibor's manufacturer warranty and are not subject to
              the return windows above. Contact us with your order number and a description of the issue.
            </p>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
          <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-sm">How to Start a Return</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Email us at{" "}
              <a href="mailto:texasholemakers@gmail.com" className="text-primary hover:underline">
                texasholemakers@gmail.com
              </a>{" "}
              with subject line "Return Request" and your order number. We'll send you a return shipping label
              and instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
