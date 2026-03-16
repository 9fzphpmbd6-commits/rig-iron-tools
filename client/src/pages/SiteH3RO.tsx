import { getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Zap, Shield, Wrench } from "lucide-react";

const siteh3roProducts = getProductsByCategory("siteh3ro");

export default function SiteH3RO() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: "SITEH3RO" }]} />

      {/* Hero banner */}
      <div className="bg-secondary text-secondary-foreground rounded-xl p-6 sm:p-10 mb-8">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <h1 className="font-display text-2xl sm:text-3xl font-bold">SITEH3RO Tools</h1>
          </div>
          <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed">
            Impact-wrench ready step reamers, step drills, car reamers, and taps — all with the proprietary SITEH3RO coating for up to 75% longer tool life. From individual tools to the complete Ultimate Kit.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: Shield, text: "75% longer tool life" },
              { icon: Wrench, text: "Impact-wrench compatible" },
              { icon: Zap, text: "Covers common bolt sizes" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{siteh3roProducts.length} SITEH3RO products</p>
      <ProductGrid products={siteh3roProducts} />
    </div>
  );
}
