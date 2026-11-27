import { ProductCard } from "@/components/product-card";

export function CatalogGrid() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 12 }).map((_, i) => (
        <ProductCard key={i} showDiscount={i % 3 === 0} />
      ))}
    </div>
  );
}