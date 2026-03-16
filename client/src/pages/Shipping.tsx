import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Truck, RotateCcw, Clock, MapPin } from "lucide-react";

export default function Shipping() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Shipping & Returns" }]} />

      <h1 className="font-display text-2xl font-bold mt-4 mb-6">Shipping &amp; Returns</h1>

      <div className="space-y-6">
        {[
          { icon: Truck, title: "Shipping", text: "All orders ship within 1–3 business days. Standard delivery takes 5–10 business days from US warehouses. Tracking information is emailed once your order ships." },
          { icon: MapPin, title: "Delivery Area", text: "We ship to all 50 US states. International shipping is not currently available but may be offered in the future." },
          { icon: Clock, title: "Processing Time", text: "Orders placed before 2 PM CT on business days are typically processed the same day. Weekend orders are processed the following Monday." },
          { icon: RotateCcw, title: "Returns", text: "We accept returns within 30 days of delivery for unused items in original packaging. Contact us to initiate a return. Shipping costs for returns are the customer's responsibility unless the item is defective." },
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
