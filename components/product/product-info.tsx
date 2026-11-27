import {
  MdStar,
  MdStarHalf,
  MdFavoriteBorder,
  MdRemove,
  MdAdd,
  MdAddShoppingCart,
  MdMemory,
  MdStorage,
  MdLaptopMac,
  MdLocalShipping,
  MdVerifiedUser,
  MdLock,
  MdStorefront,
} from "react-icons/md";
import type { IconType } from "react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const KEY_SPECS: { label: string; value: string; Icon: IconType }[] = [
  { label: "Spec one", value: "Value placeholder", Icon: MdMemory },
  { label: "Spec two", value: "Value placeholder", Icon: MdStorage },
  { label: "Spec three", value: "Value placeholder", Icon: MdLaptopMac },
];

const PERKS: { title: string; text: string; Icon: IconType }[] = [
  { title: "Delivery placeholder", text: "Short delivery description", Icon: MdLocalShipping },
  { title: "Warranty placeholder", text: "Short warranty description", Icon: MdVerifiedUser },
  { title: "Payment placeholder", text: "Short payment description", Icon: MdLock },
];

export function ProductInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Title block */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-primary">Brand</span>
        <h1 className="text-balance text-3xl font-bold tracking-tight">
          Product name placeholder goes here
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center text-primary" aria-hidden>
            <MdStar className="size-[18px]" />
            <MdStar className="size-[18px]" />
            <MdStar className="size-[18px]" />
            <MdStar className="size-[18px]" />
            <MdStarHalf className="size-[18px]" />
          </span>
          <span className="font-medium">0.0</span>
          <span>(00 reviews)</span>
          <Separator orientation="vertical" className="h-4" />
          <span>SKU: 000000</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-end gap-3">
        <span className="text-4xl font-extrabold tabular-nums">00 000 DH</span>
        <span className="pb-1 text-lg font-medium tabular-nums text-muted-foreground line-through">
          00 000 DH
        </span>
        <Badge className="mb-1.5 bg-destructive text-white tabular-nums">Save 0 000 DH</Badge>
      </div>

      {/* Stock */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge className="bg-success-container text-success-container-foreground">In stock</Badge>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <MdStorefront className="size-4 text-success" aria-hidden />
          Pickup availability placeholder
        </span>
      </div>

      <p className="text-pretty text-muted-foreground">
        Short product summary placeholder. One or two sentences describing the main
        benefits of this product.
      </p>

      {/* Key specs */}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {KEY_SPECS.map(({ label, value, Icon }) => (
          <li key={label} className="flex items-center gap-3 rounded-md border bg-card p-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
              <Icon className="size-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-muted-foreground">{label}</p>
              <p className="truncate text-sm font-semibold">{value}</p>
            </div>
          </li>
        ))}
      </ul>

      <Separator />

      {/* Quantity + actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-md border">
          <Button variant="ghost" size="icon" aria-label="Decrease quantity">
            <MdRemove className="size-[18px]" aria-hidden />
          </Button>
          <span className="w-10 text-center text-sm font-semibold tabular-nums">1</span>
          <Button variant="ghost" size="icon" aria-label="Increase quantity">
            <MdAdd className="size-[18px]" aria-hidden />
          </Button>
        </div>
        <Button size="lg" className="flex-1">
          <MdAddShoppingCart className="size-5" aria-hidden />
          Add to cart
        </Button>
        <Button variant="outline" size="icon" className="size-10" aria-label="Add to wishlist">
          <MdFavoriteBorder className="size-5" aria-hidden />
        </Button>
      </div>

      {/* Perks */}
      <Card className="gap-0 divide-y p-0">
        {PERKS.map(({ title, text, Icon }) => (
          <div key={title} className="flex items-center gap-3 p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Icon className="size-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}