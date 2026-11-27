import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/headers";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { ProductSection } from "@/components/product-section";
import { Offers } from "@/components/offers";
import { Trust } from "@/components/trust";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <ProductSection title="Best sellers" linkLabel="View all" />
        <Offers />
        <ProductSection title="Gaming & components" linkLabel="Explore gaming" />
        <ProductSection title="Accessories & peripherals" linkLabel="All accessories" />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}