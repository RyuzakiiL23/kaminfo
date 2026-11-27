import { MdImage, MdRemove, MdAdd, MdDeleteOutline, MdFavoriteBorder } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CartItem() {
  return (
    <Card className="flex-col gap-4 p-4 sm:flex-row sm:items-center">
      {/* Image placeholder */}
      <div className="flex size-24 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground sm:size-28">
        <MdImage className="size-8" aria-hidden />
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-xs font-medium text-primary">Brand</span>
        <h3 className="font-semibold">Product name placeholder</h3>
        <p className="text-sm text-muted-foreground">Spec one • Spec two • Spec three</p>
        <div className="flex items-center gap-3 pt-1">
          <Badge className="bg-success-container text-success-container-foreground">
            In stock
          </Badge>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <MdFavoriteBorder className="size-4" aria-hidden />
            Save for later
          </button>
        </div>
      </div>

      {/* Quantity + price */}
      <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:gap-3">
        <div className="flex items-center rounded-md border">
          <Button variant="ghost" size="icon" aria-label="Decrease quantity">
            <MdRemove className="size-[18px]" aria-hidden />
          </Button>
          <span className="w-9 text-center text-sm font-semibold tabular-nums">1</span>
          <Button variant="ghost" size="icon" aria-label="Increase quantity">
            <MdAdd className="size-[18px]" aria-hidden />
          </Button>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs font-medium tabular-nums text-muted-foreground line-through">
            00 000 DH
          </span>
          <span className="text-lg font-bold tabular-nums">00 000 DH</span>
        </div>
      </div>

      <Button variant="ghost" size="icon" aria-label="Remove item" className="self-start text-muted-foreground sm:self-center">
        <MdDeleteOutline className="size-5" aria-hidden />
      </Button>
    </Card>
  );
}