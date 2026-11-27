import { MdTune } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CatalogFilters } from "@/components/catalog/catalog-filters";

export function CatalogSidebar() {
  return (
    <Card className="sticky top-28 hidden gap-2 p-5 lg:flex">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold">
          <MdTune className="size-5 text-primary" aria-hidden />
          Filters
        </h2>
        <Button variant="link" size="sm" className="px-0">
          Clear all
        </Button>
      </div>
      <CatalogFilters idPrefix="desktop" />
    </Card>
  );
}