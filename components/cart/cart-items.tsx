import { MdArrowBack } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/cart-item";

export function CartItems() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <CartItem key={i} />
      ))}

      <Button variant="link" className="gap-1.5 self-start px-0">
        <MdArrowBack className="size-[18px]" aria-hidden />
        Continue shopping
      </Button>
    </div>
  );
}