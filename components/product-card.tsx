import { MdAddShoppingCart, MdImage } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  showDiscount?: boolean;
};

export function ProductCard({ showDiscount = false }: ProductCardProps) {
  return (
    <Card className="h-full justify-between gap-4 p-4 transition-colors hover:border-primary">
      <div className="flex flex-col gap-3">
        {/* Image placeholder */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-muted text-muted-foreground">
          <MdImage className="size-10" aria-hidden />
          {showDiscount && (
            <Badge variant="destructive" className="absolute start-2.5 top-2.5 tabular-nums">
              -00%
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-primary">Brand</span>
            <Badge variant="secondary">In stock</Badge>
          </div>
          <h3 className="font-semibold">Product name placeholder</h3>
          <p className="text-sm text-muted-foreground">Spec one • Spec two • Spec three</p>
        </div>
      </div>

      <footer className="flex items-center justify-between gap-2 border-t pt-3">
        <div className="flex flex-col">
          {showDiscount && (
            <span className="text-xs font-medium tabular-nums text-muted-foreground line-through">
              00 000 DH
            </span>
          )}
          <span className="text-lg font-bold tabular-nums">00 000 DH</span>
        </div>
        <Button size="sm">
          <MdAddShoppingCart className="size-[18px]" aria-hidden />
          Add
        </Button>
      </footer>
    </Card>
  );
}