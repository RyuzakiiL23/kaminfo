import { MdLock } from "react-icons/md";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CheckoutHeading() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pb-6 pt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Cart</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Checkout</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MdLock className="size-4 text-success" aria-hidden />
          Secure checkout
        </span>
      </div>
    </div>
  );
}