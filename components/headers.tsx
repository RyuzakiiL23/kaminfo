import {
  MdSearch,
  MdPerson,
  MdShoppingCart,
  MdStorefront,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const NAV_ITEMS = [
  "Category One",
  "Category Two",
  "Category Three",
  "Category Four",
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
        {/* Logo placeholder */}
        <div className="flex relative h-14 w-36 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-muted-foreground">
          <Image
            src="/images/nbg-logo.png"
            alt="Image"
            fill
            className="object-contain"
          />
        </div>

        {/* Search */}
        <div className="relative max-w-xl flex-1">
          <Input
            type="search"
            placeholder="Rechercher un PC portable, RTX 4070, MacBook, SSD..."
            aria-label="Search"
            className="h-10 rounded-full pe-12 ps-4"
          />
          <Button
            size="icon"
            aria-label="Search"
            className="absolute end-1 top-1 size-8 rounded-full"
          >
            <MdSearch className="size-[18px]" aria-hidden />
          </Button>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <Button variant="outline" className='text-sm font-semibold rounded-md px-5 py-5 hover:border-blue-500 cursor-pointer border-blue-200 bg-muted'>
            <MdOutlineShoppingCart className="text-primary !w-5 !h-5  " />
            Panier
            <Badge className="h-5 min-w-5 rounded-full px-1.5 ">
              2
            </Badge>
          </Button>
        </div>
      </div>

      {/* Primary navigation */}
      <nav aria-label="Primary" className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <ul className="flex items-center gap-6 overflow-x-auto py-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="whitespace-nowrap text-sm font-medium">
                {item}
              </li>
            ))}
            <li className="whitespace-nowrap text-sm font-medium text-destructive">
              Special Offers
            </li>
          </ul>
          <span className="hidden items-center gap-1.5 text-xs font-medium text-muted-foreground md:inline-flex">
            <MdStorefront className="size-4" aria-hidden />
            Showroom info placeholder
          </span>
        </div>
      </nav>
    </header>
  );
}
