import { MdImage, MdLock, MdVerifiedUser } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const LINES = [
  { label: "Subtotal (0 items)", value: "00 000 DH" },
  { label: "Discount", value: "- 0 000 DH", highlight: true },
  { label: "Shipping", value: "Free", highlight: true },
];

export function CheckoutSummary() {
  return (
    <Card className="sticky top-28 gap-5 p-6">
      <h2 className="text-xl font-bold tracking-tight">Your order</h2>

      <ul className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="relative flex size-16 shrink-0 items-center justify-center rounded-md border bg-muted text-muted-foreground">
              <MdImage className="size-6" aria-hidden />
              <span className="absolute -end-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground tabular-nums">
                1
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Product name placeholder</p>
              <p className="truncate text-xs text-muted-foreground">Spec one • Spec two</p>
            </div>
            <span className="text-sm font-semibold tabular-nums">00 000 DH</span>
          </li>
        ))}
      </ul>

      <Separator />

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

      <div className="flex items-start gap-2.5">
        <Checkbox id="terms" className="mt-0.5" />
        <Label htmlFor="terms" className="text-sm font-normal leading-snug text-muted-foreground">
          I have read and accept the terms and conditions and the return policy.
        </Label>
      </div>

      <Button size="lg" className="w-full">
        <MdLock className="size-[18px]" aria-hidden />
        Place order
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <MdVerifiedUser className="size-4 text-success" aria-hidden />
        Secure payment placeholder
      </p>
    </Card>
  );
}