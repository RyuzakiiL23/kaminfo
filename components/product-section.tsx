import { MdChevronRight } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

type ProductSectionProps = {
  title: string;
  linkLabel: string;
  count?: number;
  /** Full Tailwind class so it isn't purged, e.g. "lg:grid-cols-4" */
  columns?: string;
  showDiscount?: boolean;
};

export function ProductSection({
  title,
  linkLabel,
  count = 4,
  columns = "lg:grid-cols-4",
  showDiscount = false,
}: ProductSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <Button variant="link" className="gap-1 px-0 font-semibold cursor-pointer">
          {linkLabel}
          <MdChevronRight className="size-[18px]" aria-hidden />
        </Button>
      </div>

      <div className={`grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 ${columns}`}>
        {Array.from({ length: count }).map((_, i) => (
          <ProductCard key={i} showDiscount={showDiscount} />
        ))}
      </div>
    </section>
  );
}
