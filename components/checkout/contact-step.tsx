import { Input } from "@/components/ui/input";
import { CheckoutSection } from "@/components/checkout/checkout-section";
import { Field } from "@/components/checkout/field";

export function ContactStep() {
  return (
    <CheckoutSection step={1} title="Contact information">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="phone" label="Phone number">
          <div className="flex">
            <span className="inline-flex items-center rounded-s-md border border-e-0 bg-muted px-3 text-sm font-medium tabular-nums text-muted-foreground">
              +212
            </span>
            <Input
              id="phone"
              type="tel"
              placeholder="6 00 00 00 00"
              className="rounded-s-none tabular-nums"
            />
          </div>
        </Field>
        <Field id="email" label="Email" optional>
          <Input id="email" type="email" placeholder="name@example.com" />
        </Field>
      </div>
    </CheckoutSection>
  );
}