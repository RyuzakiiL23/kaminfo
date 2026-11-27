"use client";

import {
  MdImage,
  MdRemove,
  MdAdd,
  MdDeleteOutline,
  MdClose,
  MdLocalShipping,
  MdLock,
} from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const FAKE_ITEMS = [
  {
    id: 1,
    brand: "Apple",
    name: 'MacBook Air 13" M3',
    specs: "M3 • 16 GB • 512 GB SSD",
    price: "13 990 DH",
    oldPrice: "14 990 DH",
    qty: 1,
  },
  {
    id: 2,
    brand: "HyperX",
    name: "Wireless Gaming Headset Pro",
    specs: "7.1 audio • 30h battery",
    price: "990 DH",
    qty: 1,
  },
  {
    id: 3,
    brand: "Logitech G",
    name: "Mechanical Keyboard + Mouse Pack",
    specs: "Tactile switches • Lightspeed",
    price: "1 490 DH",
    qty: 2,
  },
];

type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  return (
    <Drawer swipeDirection="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="data-[swipe-direction=right]:w-full sm:data-[swipe-direction=right]:max-w-md">
        {/* Header */}
        <DrawerHeader className="flex-row items-start justify-between gap-4 border-b text-start">
          <div className="flex flex-col gap-1">
            <DrawerTitle className="text-xl font-bold">Your cart (4)</DrawerTitle>
            <DrawerDescription>Review your items before checkout.</DrawerDescription>
          </div>
          <DrawerClose
            render={<Button variant="ghost" size="icon" aria-label="Close cart" />}
          >
            <MdClose className="size-5" aria-hidden />
          </DrawerClose>
        </DrawerHeader>

        {/* Items */}
        <ul className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {FAKE_ITEMS.map((item) => (
            <li key={item.id} className="flex gap-3 rounded-md border bg-card p-3">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <MdImage className="size-7" aria-hidden />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-primary">{item.brand}</span>
                    <p className="truncate text-sm font-semibold">{item.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{item.specs}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="-me-1 -mt-1 size-8 shrink-0 text-muted-foreground"
                    aria-label={`Remove ${item.name}`}
                  >
                    <MdDeleteOutline className="size-[18px]" aria-hidden />
                  </Button>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center rounded-md border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      aria-label="Decrease quantity"
                    >
                      <MdRemove className="size-4" aria-hidden />
                    </Button>
                    <span className="w-7 text-center text-sm font-semibold tabular-nums">
                      {item.qty}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      aria-label="Increase quantity"
                    >
                      <MdAdd className="size-4" aria-hidden />
                    </Button>
                  </div>

                  <div className="flex flex-col items-end">
                    {item.oldPrice && (
                      <span className="text-xs tabular-nums text-muted-foreground line-through">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-sm font-bold tabular-nums">{item.price}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <DrawerFooter className="gap-4 border-t bg-muted/40">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-sm font-medium">
              <MdLocalShipping className="size-[18px] text-success" aria-hidden />
              You qualify for free shipping
            </p>
            <Progress value={100} className="h-2" />
          </div>

          <Separator />

          <div className="flex items-end justify-between">
            <span className="text-sm text-muted-foreground">Subtotal (incl. VAT)</span>
            <span className="text-2xl font-extrabold tabular-nums">18 450 DH</span>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" className="w-full">
              <MdLock className="size-[18px]" aria-hidden />
              Checkout
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              View cart
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}