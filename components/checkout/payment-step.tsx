import { MdCreditCard, MdPayments, MdAccountBalance, MdInfoOutline } from "react-icons/md";
import { RadioGroup } from "@/components/ui/radio-group";
import { CheckoutSection } from "@/components/checkout/checkout-section";
import { OptionCard } from "@/components/checkout/option-card";

export function PaymentStep() {
  return (
    <CheckoutSection step={4} title="Payment method">
      <RadioGroup defaultValue="cash" className="gap-3">
        <OptionCard
          value="cash"
          id="pay-cash"
          title="Cash on delivery"
          description="Pay when you receive your order"
          Icon={MdPayments}
        />
        <OptionCard
          value="card"
          id="pay-card"
          title="Bank card"
          description="Secure payment placeholder"
          Icon={MdCreditCard}
        />
        <OptionCard
          value="transfer"
          id="pay-transfer"
          title="Bank transfer"
          description="Transfer details are sent after you place the order"
          Icon={MdAccountBalance}
        />
      </RadioGroup>

      <p className="flex items-start gap-2 rounded-md bg-muted p-3 text-sm text-muted-foreground">
        <MdInfoOutline className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
        Redirect note placeholder: explain what happens after the customer picks a card payment.
      </p>
    </CheckoutSection>
  );
}