import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/headers";
import { Footer } from "@/components/footer";
import { ProductSection } from "@/components/product-section";
import { CartHeading } from "@/components/cart/cart-heading";
import { CartItems } from "@/components/cart/cart-items";
import { OrderSummary } from "@/components/cart/order-summary";

export default function CartPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <CartHeading />

        <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartItems />
          </div>
          <div className="lg:col-span-4">
            <OrderSummary />
          </div>
        </section>

        <ProductSection title="You may also like" linkLabel="View all" count={4} />
      </main>
      <Footer />
    </>
  );
}