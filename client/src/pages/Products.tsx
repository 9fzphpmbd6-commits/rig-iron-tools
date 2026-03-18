import { useState, useMemo } from "react";
import { products, type Category, type Subcategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

const SUBCATEGORY_LABELS: Record<string, string> = {
  "step-reamer": "Step Reamers",
  "step-drill": "Step Drills",
  "car-reamer": "Car Reamers",
  "tap": "Taps",
  "kit": "Kits",
  "holder": "Holders",
  "elite-magnetic-drill": "Elite Series",
  "pro-magnetic-drill": "Professional Series",
  "budget-magnetic-drill": "Commando Series",
  "drill-tap-combo": "Drill/Tap Combos",
  "unibor-tap": "Unibor Taps",
  "combi-drill-tap-kit": "Combi Drill/Tap Kits",
  "countersink": "Countersinks",
  "arbor": "Arbors",
  "chuck": "Chucks",
  "extension": "Extensions",
  "adaptor": "Adaptors",
  "cutting-fluid": "Cutting Fluid",
  "drill-tap-set": "Drill/Tap Sets",
};

export default function Products({ initialCategory }: { initialCategory?: Category }) {
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">(initialCategory || "all");
  const [subcategoryFilter, setSubcategoryFilter] = useState<Subcategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (categoryFilter !== "all") result = result.filter((p) => p.category === categoryFilter);
    if (subcategoryFilter !== "all") result = result.filter((p) => p.subcategory === subcategoryFilter);

    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "featured": result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)); break;
    }
    return result;
  }, [categoryFilter, subcategoryFilter, sort]);

  const subcategories = useMemo(() => {
    const cats = categoryFilter === "all" ? products : products.filter((p) => p.category === categoryFilter);
    return [...new Set(cats.map((p) => p.subcategory).filter(Boolean))] as Subcategory[];
  }, [categoryFilter]);

  const hasFilters = categoryFilter !== "all" || subcategoryFilter !== "all";

  const pageTitle = initialCategory === "accessory"
    ? "Accessories"
    : "All Products";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: pageTitle }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-xl font-bold">{pageTitle}</h1>
          <p className="text-sm text-muted-foreground mt-1">{filtered.length} tools available</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-1.5 sm:hidden"
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm px-3 py-1.5 bg-card border border-border rounded-md"
            data-testid="select-sort"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters — hidden on mobile unless toggled */}
        <aside className={`${showFilters ? "block" : "hidden"} sm:block w-full sm:w-48 shrink-0 space-y-5`}>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Category</h3>
            <div className="space-y-1">
              {[
                { val: "all" as const, label: "All" },
                { val: "siteh3ro" as const, label: "SITEH3RO" },
                { val: "magnetic-drill" as const, label: "Magnetic Drills" },
                { val: "accessory" as const, label: "Accessories" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => { setCategoryFilter(opt.val); setSubcategoryFilter("all"); }}
                  className={`block w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                    categoryFilter === opt.val ? "bg-primary text-primary-foreground font-medium" : "hover:bg-accent text-muted-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {subcategories.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Type</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSubcategoryFilter("all")}
                  className={`block w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                    subcategoryFilter === "all" ? "bg-primary text-primary-foreground font-medium" : "hover:bg-accent text-muted-foreground"
                  }`}
                >
                  All Types
                </button>
                {subcategories.map((sc) => (
                  <button
                    key={sc}
                    onClick={() => setSubcategoryFilter(sc)}
                    className={`block w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                      subcategoryFilter === sc ? "bg-primary text-primary-foreground font-medium" : "hover:bg-accent text-muted-foreground"
                    }`}
                  >
                    {SUBCATEGORY_LABELS[sc] || sc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { setCategoryFilter(initialCategory || "all"); setSubcategoryFilter("all"); }}
              className="gap-1 text-destructive"
            >
              <X className="w-3.5 h-3.5" /> Clear filters
            </Button>
          )}
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <ProductGrid products={filtered} columns={3} />
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
