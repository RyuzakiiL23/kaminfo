import { MdClose } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MobileFilters } from "@/components/catalog/mobile-filters";

const ACTIVE_FILTERS = ["Category one", "Brand two", "00 – 00 000 DH"];

export function CatalogToolbar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">1–12</span> of{" "}
          <span className="font-semibold text-foreground">00</span> products
        </p>

        <div className="flex items-center gap-3">
          <MobileFilters />
          <Select defaultValue="featured">
            <SelectTrigger className="w-48" aria-label="Sort products">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: low to high</SelectItem>
              <SelectItem value="price-desc">Price: high to low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="rating">Best rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active filter chips */}
      <div className="flex flex-wrap items-center gap-2">
        {ACTIVE_FILTERS.map((label) => (
          <Badge key={label} variant="secondary" className="gap-1.5 py-1 pe-1.5">
            {label}
            <MdClose className="size-3.5" aria-hidden />
          </Badge>
        ))}
      </div>
    </div>
  );
}