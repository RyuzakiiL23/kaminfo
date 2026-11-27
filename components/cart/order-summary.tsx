import { MdLocalShipping, MdLock, MdVerifiedUser } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const LINES = [
  { label: "Subtotal (0 items)", value: "00 000 DH" },
  { label: "Discount", value: "- 0 000 DH", highlight: true },
  { label: "Shipping", value: "Free", highlight: true },
];

export function OrderSummary() {
  return (
    <Card className="sticky top-28 gap-5 p-6">
      <h2 className="text-xl font-bold tracking-tight">Order summary</h2>

      {/* Free shipping progress */}
      <div className="flex flex-col gap-2 rounded-md bg-muted p-3">
        <p className="flex items-center gap-2 text-sm font-medium">
          <MdLocalShipping className="size-[18px] text-success" aria-hidden />
          Free shipping progress placeholder
        </p>
        <Progress value={70} className="h-2" />
      </div>

      {/* Promo code */}
      <div className="flex flex-col gap-2">
        <label htmlFor="promo" className="text-sm font-medium">
          Promo code
        </label>
        <div className="flex gap-2">
          <Input id="promo" placeholder="Enter code" />
          <Button variant="outline">Apply</Button>
        </div>
      </div>

      <Separator />

      {/* Price lines */}
      <dl className="flex flex-col gap-3 text-sm">
        {LINES.map(({ label, value, highlight }) => (
          <div key={label} className="flex items-center justify-between">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className={highlight ? "font-medium tabular-nums text-success" : "font-medium tabular-nums"}>
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <Separator />

      <div className="flex items-end justify-between">
        <span className="font-semibold">Total (incl. VAT)</span>
        <span className="text-3xl font-extrabold tabular-nums">00 000 DH</span>
      </div>

      <Button size="lg" className="w-full">
        <MdLock className="size-[18px]" aria-hidden />
        Proceed to checkout
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <MdVerifiedUser className="size-4 text-success" aria-hidden />
        Secure payment placeholder
      </p>
    </Card>
  );
}