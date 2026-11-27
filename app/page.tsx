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
        <ProductSection title="Meilleures ventes PC Portables" linkLabel="Voir tous les laptops" />
        <Offers />
      <ProductSection title="Gaming & components" linkLabel="Explorer le Gaming" />
        <ProductSection title="Accessories & peripherals" linkLabel="Tous les accessoires" />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}