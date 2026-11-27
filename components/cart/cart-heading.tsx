import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CartHeading() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pb-6 pt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Cart</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Your cart</h1>
        <span className="text-sm text-muted-foreground">0 items</span>
      </div>
    </div>
  );
}