import { MdLocalShipping, MdStorefront } from "react-icons/md";
import { RadioGroup } from "@/components/ui/radio-group";
import { CheckoutSection } from "@/components/checkout/checkout-section";
import { OptionCard } from "@/components/checkout/option-card";

export function DeliveryStep() {
  return (
    <CheckoutSection step={3} title="Delivery method">
      <RadioGroup defaultValue="home" className="gap-3">
        <OptionCard
          value="home"
          id="delivery-home"
          title="Home delivery"
          description="Delivery time placeholder"
          Icon={MdLocalShipping}
          trailing={<span className="text-sm font-semibold text-success">Free</span>}
        />
        <OptionCard
          value="pickup"
          id="delivery-pickup"
          title="Showroom pickup"
          description="Pickup address and time placeholder"
          Icon={MdStorefront}
          trailing={<span className="text-sm font-semibold text-success">Free</span>}
        />
      </RadioGroup>
    </CheckoutSection>
  );
}