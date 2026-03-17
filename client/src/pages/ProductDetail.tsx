import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ShoppingCart, Minus, Plus, Star, Zap, ArrowRight, Hash, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { ShippingInfo } from "@/components/ShippingInfo";
import { ProductCard } from "@/components/ProductCard";
import { getProductBySlug } from "@/data/products";
import { useRecommendations } from "@/lib/recommendations";
import { useYardCrew } from "@/lib/yardCrew";
import { getSnipcartAttributes } from "@/lib/snipcart";
import { SITE } from "@/data/siteConfig";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug || "";
  const product = getProductBySlug(slug);
  const [qty, setQty] = useState(1);
  const { isMember, getDiscountedPrice } = useYardCrew();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-xl font-bold mb-2">Product not found</h1>
        <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
        <Link href="/products"><Button>Browse All Products</Button></Link>
      </div>
    );
  }

  const related = useRecommendations(product, 3);
  const categoryLabel = product.category === "siteh3ro" ? "SITEH3RO" : "Magnetic Drills";
  const categoryHref = product.category === "siteh3ro" ? "/siteh3ro" : "/magnetic-drills";

  const displayPrice = isMember && product.subcategory !== "holder"
    ? getDiscountedPrice(product.price)
    : product.price;

  const snipcartProps = getSnipcartAttributes(
    { ...product, price: displayPrice },
    qty,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[
        { label: "Products", href: "/products" },
        { label: categoryLabel, href: categoryHref },
        { label: product.name },
      ]} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {/* Left: Image + Video */}
        <div className="space-y-4">
          <div className="aspect-square bg-secondary/5 rounded-xl border border-border overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {product.youtubeVideoId && (
            <YouTubeEmbed
              videoId={product.youtubeVideoId}
              title={`${product.name} — Demo Video`}
            />
          )}
        </div>

        {/* Right: Details */}
        <div className="space-y-5">
          {/* Badges */}
          <div className="flex gap-2 flex-wrap">
            {product.isBestSeller && (
              <Badge className="bg-primary text-primary-foreground gap-1">
                <Star className="w-3 h-3" /> Best Seller
              </Badge>
            )}
            {product.category === "siteh3ro" && (
              <Badge variant="outline" className="gap-1">
                <Zap className="w-3 h-3" /> Impact-Ready
              </Badge>
            )}
          </div>

          <h1 className="font-display text-xl sm:text-2xl font-bold leading-tight">{product.name}</h1>

          <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
            {categoryLabel}
            {product.subcategory && ` · ${product.subcategory.replace(/-/g, " ")}`}
          </p>

          <div className="flex items-baseline gap-3">
            {isMember && product.subcategory !== "holder" ? (
              <>
                <span className="text-2xl font-bold text-green-600">
                  ${displayPrice.toFixed(2)}
                </span>
                <span className="text-base text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <>
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.compareAtPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Yard Crew promo */}
          {product.subcategory === "holder" ? (
            isMember ? (
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-center gap-3">
                <Gift className="w-5 h-5 text-green-600 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-green-700">FREE with Yard Crew Membership</p>
                  <p className="text-xs text-green-600">This holder is included free as a Yard Crew member when you purchase any SITEH3RO cutting tool.</p>
                </div>
              </div>
            ) : (
              <Link href="/members" className="block">
                <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 hover:bg-primary/10 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">🔩 Get This Holder FREE</span>
                  </div>
                  <p className="text-xs text-primary/70">Join The Yard Crew and get a free SITEH3RO Holder when you buy any SITEH3RO cutting tool — plus 15% off everything.</p>
                </div>
              </Link>
            )
          ) : isMember ? (
            <p className="text-sm font-medium text-green-600">
              🔩 Yard Crew Price — You're saving 15%!
            </p>
          ) : (
            <Link href="/members" className="block">
              <div className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 text-sm text-primary font-medium hover:bg-primary/10 transition-colors">
                🔩 Join The Yard Crew for 15% Off
              </div>
            </Link>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed">{product.shortDescription}</p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center border border-border rounded-lg">
              <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setQty(Math.max(1, qty - 1))} data-testid="button-qty-minus">
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-10 text-center text-sm font-medium" data-testid="text-qty">{qty}</span>
              <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setQty(qty + 1)} data-testid="button-qty-plus">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <Button
              size="lg"
              className="gap-2 flex-1 sm:flex-none"
              data-testid="button-add-to-cart"
              {...snipcartProps}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>

          <ShippingInfo />

          {/* Compare link */}
          <Link href={categoryHref} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline">
            Compare to other {categoryLabel} tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <Tabs defaultValue="overview">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="ideal-for">Ideal For</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="pt-4 space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{product.longDescription}</p>
            <div>
              <h3 className="font-semibold text-sm mb-2">Key Features</h3>
              <ul className="space-y-1.5">
                {product.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="pt-4">
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([key, val], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-accent/30" : ""}>
                      <td className="px-4 py-2.5 font-medium text-muted-foreground w-1/3">{key}</td>
                      <td className="px-4 py-2.5">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="ideal-for" className="pt-4">
            {product.idealFor ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.idealFor.map((job) => (
                  <div key={job} className="bg-accent/30 border border-border rounded-lg p-3 text-center text-sm font-medium">
                    {job}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">General-purpose tool suitable for various steel and metal applications.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Social tag section */}
      <div className="mt-8 p-4 bg-accent/30 rounded-lg border border-border flex items-center gap-3">
        <Hash className="w-5 h-5 text-primary shrink-0" />
        <p className="text-sm text-muted-foreground">
          Tag your builds with <strong className="text-foreground">{SITE.brandHashtag}</strong> on Instagram or TikTok for a chance to be featured.
        </p>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-lg font-bold mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
