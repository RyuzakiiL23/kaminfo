import { MdArrowForward } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

export function Offers() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="mb-6 flex flex-col items-start justify-between gap-6 rounded-lg bg-foreground p-8 text-primary-foreground lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2">
          <Badge className="w-fit font-semibold py-3 bg-destructive">
            Offres Flash Maroc
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Promotions de la semaine jusqu&apos;à -2 000 DH
          </h2>
          <p className="max-w-prose text-sm opacity-80">
            Stocks limités disponibles immédiatement à notre dépôt de Casablanca
            avec expédition le jour même.
          </p>
        </div>
        <Button className="rounded-sm px-4 py-6 cursor-pointer font-bold bg-ring">
          Voir toutes les offres
          <MdArrowForward className="size-[18px]" aria-hidden />
        </Button>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProductCard key={i} showDiscount />
        ))}
      </div>
    </section>
  );
}
