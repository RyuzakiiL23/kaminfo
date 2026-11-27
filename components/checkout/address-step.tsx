import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckoutSection } from "@/components/checkout/checkout-section";
import { Field } from "@/components/checkout/field";

const CITIES = ["City one", "City two", "City three", "City four", "City five"];

export function AddressStep() {
  return (
    <CheckoutSection step={2} title="Delivery address">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="first-name" label="First name">
          <Input id="first-name" autoComplete="given-name" />
        </Field>
        <Field id="last-name" label="Last name">
          <Input id="last-name" autoComplete="family-name" />
        </Field>

        <Field id="address" label="Street address" className="sm:col-span-2">
          <Input id="address" autoComplete="street-address" placeholder="Number, street, building" />
        </Field>

        <Field id="city" label="City">
          <Select>
            <SelectTrigger id="city" className="w-full">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {CITIES.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field id="district" label="District / neighborhood">
          <Input id="district" />
        </Field>

        <Field id="postal" label="Postal code" optional>
          <Input id="postal" inputMode="numeric" className="tabular-nums" />
        </Field>
        <Field id="landmark" label="Landmark" optional>
          <Input id="landmark" placeholder="Near..." />
        </Field>

        <Field id="notes" label="Delivery notes" optional className="sm:col-span-2">
          <Textarea id="notes" rows={3} placeholder="Instructions for the courier" />
        </Field>
      </div>
    </CheckoutSection>
  );
}