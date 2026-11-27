import { MdTune } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CatalogFilters } from "@/components/catalog/catalog-filters";

export function MobileFilters() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="lg:hidden" />}>
        <MdTune className="size-[18px]" aria-hidden />
        Filters
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full max-w-sm flex-col gap-0 p-0">
        <SheetHeader className="border-b">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4">
          <CatalogFilters idPrefix="mobile" />
        </div>
        <SheetFooter className="flex-row gap-2 border-t">
          <Button variant="outline" className="flex-1">
            Clear all
          </Button>
          <Button className="flex-1">Show results</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}