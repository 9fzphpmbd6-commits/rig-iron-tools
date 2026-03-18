import { Link } from "wouter";
import { ShoppingCart, Star, Zap, Gift, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useYardCrew } from "@/lib/yardCrew";
import { getSnipcartAttributes } from "@/lib/snipcart";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { isMember, getDiscountedPrice } = useYardCrew();

  const hasVariants = product.variants && product.variants.length > 0;

  const displayPrice = isMember && product.subcategory !== "holder"
    ? getDiscountedPrice(product.price)
    : product.price;

  const snipcartProps = !hasVariants
    ? getSnipcartAttributes({ ...product, price: displayPrice })
    : {};

  const categoryDisplay = product.category === "siteh3ro"
    ? "SITEH3RO"
    : product.category === "magnetic-drill"
      ? "Magnetic Drill"
      : "Accessory";

  return (
    <div className="group bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-md transition-shadow" data-testid={`card-product-${product.id}`}>
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square bg-secondary/5 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
            {product.isBestSeller && (
              <Badge className="bg-primary text-primary-foreground text-xs">
                <Star className="w-3 h-3 mr-1" />
                Best Seller
              </Badge>
            )}
            {product.category === "siteh3ro" && (
              <Badge variant="outline" className="bg-background/80 text-xs">
                <Zap className="w-3 h-3 mr-1" />
                Impact-Ready
              </Badge>
            )}
            {isMember && product.subcategory === "holder" ? (
              <Badge className="bg-green-600 text-white text-xs gap-1">
                <Gift className="w-3 h-3" /> FREE
              </Badge>
            ) : isMember ? (
              <Badge className="bg-green-600 text-white text-xs">
                🔩 -15%
              </Badge>
            ) : product.subcategory === "holder" ? (
              <Badge className="bg-primary text-primary-foreground text-xs gap-1">
                <Gift className="w-3 h-3" /> Free w/ Yard Crew
              </Badge>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {categoryDisplay}
          {product.subcategory && ` · ${product.subcategory.replace(/-/g, " ")}`}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-sm leading-snug hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground line-clamp-2">{product.shortDescription}</p>

        {/* Key spec */}
        {product.specs && Object.entries(product.specs).slice(0, 1).map(([key, val]) => (
          <p key={key} className="text-xs text-muted-foreground">
            <span className="font-medium">{key}:</span> {val}
          </p>
        ))}

        <div className="flex items-end justify-between pt-2">
          <div>
            {hasVariants ? (
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">From ${product.price.toFixed(2)}</span>
                {product.compareAtPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>
            ) : isMember && product.subcategory !== "holder" ? (
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-green-600">${displayPrice.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">
                  ${(product.compareAtPrice || product.price).toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </div>
            )}
          </div>
          {hasVariants ? (
            <Link href={`/products/${product.slug}`}>
              <Button size="sm" variant="outline" className="gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                View Options
              </Button>
            </Link>
          ) : (
            <Button
              size="sm"
              className="gap-1.5"
              data-testid={`button-add-to-cart-${product.id}`}
              {...snipcartProps}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add
            </Button>
          )}
        </div>

        <Link href={`/products/${product.slug}`}>
          <span className="text-xs text-primary font-medium hover:underline">View Details</span>
        </Link>
      </div>
    </div>
  );
}
