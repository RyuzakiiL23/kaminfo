"use client";

import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CartTriggerProps = {
  count: number;
  onClick: () => void;
};

export function CartTrigger({ count, onClick }: CartTriggerProps) {
  return (
    <>
      {/* Icon only: phones and small tablets */}
      <div className="relative lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="size-10 cursor-pointer"
          aria-label={`Cart, ${count} items`}
          onClick={onClick}
        >
          <MdOutlineShoppingCart className="size-6 text-primary" aria-hidden />
        </Button>
        <Badge className="pointer-events-none absolute -end-1 -top-1 h-5 min-w-5 justify-center rounded-full bg-primary px-1.5 text-xs tabular-nums text-primary-foreground">
          {count}
        </Badge>
      </div>

      {/* Label and badge: large screens */}
      <Button
        variant="outline"
        className="hidden cursor-pointer rounded-md border-blue-200 bg-muted px-5 py-5 text-sm font-semibold hover:border-blue-500 lg:inline-flex"
        onClick={onClick}
      >
        <MdOutlineShoppingCart className="!h-5 !w-5 text-primary" aria-hidden />
        Panier
        <Badge className="h-5 min-w-5 justify-center rounded-full bg-primary px-1.5 tabular-nums text-primary-foreground">
          {count}
        </Badge>
      </Button>
    </>
  );
}