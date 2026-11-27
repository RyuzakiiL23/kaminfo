import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/headers";
import { Footer } from "@/components/footer";
import { ProductSection } from "@/components/product-section";
import { ProductBreadcrumb } from "@/components/product/product-breadcrumb";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";

export default function ProductPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <ProductBreadcrumb />

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProductGallery />
          </div>
          <div className="lg:col-span-5">
            <ProductInfo />
          </div>
        </section>

        <ProductTabs />

        <ProductSection title="Similar products" linkLabel="View all" count={4} />
      </main>
      <Footer />
    </>
  );
}