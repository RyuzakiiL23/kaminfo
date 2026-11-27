"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdSearch, MdClose, MdStorefront } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartTrigger } from "@/components/cart/cart-trigger";

const NAV_ITEMS = [
  "Category One",
  "Category Two",
  "Category Three",
  "Category Four",
];

const CART_COUNT = 2;

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3.5 lg:gap-6">
        {/* Logo */}
        <div className="relative h-10 w-28 shrink-0 sm:h-14 sm:w-36">
          <Image
            src="/images/nbg-logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Search bar: large screens */}
        <div className="relative hidden max-w-xl flex-1 lg:block">
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
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Search icon: phones and small tablets */}
          <Button
            variant="ghost"
            size="icon"
            className="size-10 lg:hidden"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            {searchOpen ? (
              <MdClose className="size-6" aria-hidden />
            ) : (
              <MdSearch className="size-6" aria-hidden />
            )}
          </Button>

          <CartTrigger count={CART_COUNT} onClick={() => setCartOpen(true)} />
        </div>
      </div>

      {/* Search row: phones and small tablets */}
      {searchOpen && (
        <div className="border-t lg:hidden">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto max-w-7xl px-4 py-3 sm:px-6"
          >
            <div className="relative">
              <MdSearch
                className="pointer-events-none absolute start-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                ref={inputRef}
                type="search"
                placeholder="Rechercher un PC portable, RTX 4070, MacBook, SSD..."
                aria-label="Search"
                className="h-11 rounded-full ps-10"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false);
                }}
              />
            </div>
          </form>
        </div>
      )}

      {/* Primary navigation */}
      <nav aria-label="Primary" className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <ul className="flex items-center gap-5 overflow-x-auto py-2.5 sm:gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item} className="whitespace-nowrap text-sm font-medium">
                {item}
              </li>
            ))}
            <li className="whitespace-nowrap text-sm font-medium text-destructive">
              Special Offers
            </li>
          </ul>
          <span className="hidden shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground md:inline-flex">
            <MdStorefront className="size-4" aria-hidden />
            Showroom info placeholder
          </span>
        </div>
      </nav>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}