import { MdImage } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const THUMBNAILS = [0, 1, 2, 3];

export function ProductGallery() {
  return (
    <div className="flex flex-col gap-4">
      {/* Main image placeholder */}
      <div className="relative flex aspect-square items-center justify-center rounded-lg border bg-muted text-muted-foreground">
        <MdImage className="size-16" aria-hidden />
        <Badge
          variant="destructive"
          className="absolute start-4 top-4 bg-destructive text-white tabular-nums"
        >
          -00%
        </Badge>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {THUMBNAILS.map((i) => (
          <div
            key={i}
            className={cn(
              "flex aspect-square items-center justify-center rounded-md border bg-muted text-muted-foreground",
              i === 0 && "border-primary ring-1 ring-primary"
            )}
          >
            <MdImage className="size-6" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}