import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductDescription } from "@/components/product/product-description";
import { ProductSpecs } from "@/components/product/product-specs";
import { ProductReviews } from "@/components/product/product-reviews";

export function ProductTabs() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <Tabs defaultValue="description" className="gap-8">
        <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto p-1 sm:w-fit">
          <TabsTrigger value="description" className="px-4 py-2">
            Description
          </TabsTrigger>
          <TabsTrigger value="specs" className="px-4 py-2">
            Specifications
          </TabsTrigger>
          <TabsTrigger value="reviews" className="px-4 py-2">
            Reviews (00)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <ProductDescription />
        </TabsContent>
        <TabsContent value="specs">
          <ProductSpecs />
        </TabsContent>
        <TabsContent value="reviews">
          <ProductReviews />
        </TabsContent>
      </Tabs>
    </section>
  );
}