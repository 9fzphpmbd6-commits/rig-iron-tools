import { Link } from "wouter";
import { ShoppingCart, Star, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { useYardCrew } from "@/lib/yardCrew";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { isMember } = useYardCrew();
  const { toast } = useToast();

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  }

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
                🔩 -10%
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
          {product.category === "siteh3ro" ? "SITEH3RO" : "Magnetic Drill"}
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
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAdd}
            className="gap-1.5"
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>

        <Link href={`/products/${product.slug}`}>
          <span className="text-xs text-primary font-medium hover:underline">View Details</span>
        </Link>
      </div>
    </div>
  );
}
