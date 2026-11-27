import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Button } from "@/components/ui/button";

const PAGES = [1, 2, 3, 4, 5];

export function CatalogPagination() {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 pt-4">
      <Button variant="outline" size="icon" aria-label="Previous page" disabled>
        <MdChevronLeft className="size-5" aria-hidden />
      </Button>
      {PAGES.map((page) => (
        <Button
          key={page}
          variant={page === 1 ? "default" : "outline"}
          size="icon"
          aria-current={page === 1 ? "page" : undefined}
          className="tabular-nums"
        >
          {page}
        </Button>
      ))}
      <Button variant="outline" size="icon" aria-label="Next page">
        <MdChevronRight className="size-5" aria-hidden />
      </Button>
    </nav>
  );
}