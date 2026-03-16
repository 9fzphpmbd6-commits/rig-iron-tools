import { getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Magnet, Cpu, Shield } from "lucide-react";

const magDrills = getProductsByCategory("magnetic-drill");

export default function MagneticDrills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: "Magnetic Drills" }]} />

      {/* Hero banner */}
      <div className="bg-secondary text-secondary-foreground rounded-xl p-6 sm:p-10 mb-8">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2">
            <Magnet className="w-6 h-6 text-primary" />
            <h1 className="font-display text-2xl sm:text-3xl font-bold">Magnetic Drills</h1>
          </div>
          <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed">
            Unibor magnetic drills designed in Sheffield, England. From the flagship Elite series with Smart Controls and DrillSmart technology, to the reliable Professional line, down to the budget-friendly Commando range.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: Cpu, text: "Smart Controls & DrillSmart" },
              { icon: Shield, text: "LiftShield magnet safety" },
              { icon: Magnet, text: "Up to 22,000N magnet force" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{magDrills.length} magnetic drills</p>
      <ProductGrid products={magDrills} />
    </div>
  );
}
