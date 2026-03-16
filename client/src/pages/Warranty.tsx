import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, AlertCircle, Phone } from "lucide-react";

export default function Warranty() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Warranty" }]} />

      <h1 className="font-display text-2xl font-bold mt-4 mb-6">Warranty Information</h1>

      <div className="space-y-6">
        {[
          { icon: ShieldCheck, title: "Manufacturer Warranty", text: "All Unibor products sold through Texas Hole Makers carry the manufacturer's standard warranty. SITEH3RO tools and magnetic drills are covered against defects in materials and workmanship under normal use conditions." },
          { icon: AlertCircle, title: "What's Not Covered", text: "Normal wear and tear, damage from misuse or modification, and consumable items (such as annular cutters or drill bits) are not covered under warranty. Always follow the manufacturer's operating guidelines." },
          { icon: Phone, title: "Warranty Claims", text: "To make a warranty claim, contact us with your order number and a description of the issue. We'll work with Unibor to resolve the claim as quickly as possible. Most claims are processed within 5–10 business days." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
            <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-sm">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
