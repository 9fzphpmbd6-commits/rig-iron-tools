import { products, type Product } from "@/data/products";

/** Get product recommendations based on category and subcategory */
export function useRecommendations(currentProduct: Product, limit = 3): Product[] {
  // First: same subcategory, excluding current
  const sameSubcat = products.filter(
    (p) => p.id !== currentProduct.id && p.subcategory === currentProduct.subcategory
  );
  // Second: same category, excluding current and already matched
  const sameCat = products.filter(
    (p) =>
      p.id !== currentProduct.id &&
      p.category === currentProduct.category &&
      p.subcategory !== currentProduct.subcategory
  );
  // Combine and limit
  return [...sameSubcat, ...sameCat].slice(0, limit);
}

/** Get cross-category suggestions (e.g., "Pair this mag drill with these SITEH3RO tools") */
export function getCrossSell(currentProduct: Product, limit = 2): Product[] {
  const otherCategory = currentProduct.category === "siteh3ro" ? "magnetic-drill" : "siteh3ro";
  return products
    .filter((p) => p.category === otherCategory && p.isFeatured)
    .slice(0, limit);
}
