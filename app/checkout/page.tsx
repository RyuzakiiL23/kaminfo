import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/headers";
import { Footer } from "@/components/footer";
import { CheckoutHeading } from "@/components/checkout/checkout-heading";
import { ContactStep } from "@/components/checkout/contact-step";
import { AddressStep } from "@/components/checkout/address-step";
import { DeliveryStep } from "@/components/checkout/delivery-step";
import { PaymentStep } from "@/components/checkout/payment-step";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";

export default function CheckoutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <CheckoutHeading />

        <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 pb-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <ContactStep />
            <AddressStep />
            <DeliveryStep />
            <PaymentStep />
          </div>
          <div className="lg:col-span-5">
            <CheckoutSummary />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}