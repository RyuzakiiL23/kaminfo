import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/headers";
import { Footer } from "@/components/footer";
import { CatalogHeading } from "@/components/catalog/catalog-heading";
import { CatalogSidebar } from "@/components/catalog/catalog-sidebar";
import { CatalogToolbar } from "@/components/catalog/catalog-toolbar";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { CatalogPagination } from "@/components/catalog/catalog-pagination";

export default function CatalogPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <CatalogHeading />

        <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 pb-14 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <CatalogSidebar />
          </aside>

          <div className="flex flex-col gap-6 lg:col-span-9">
            <CatalogToolbar />
            <CatalogGrid />
            <CatalogPagination />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}