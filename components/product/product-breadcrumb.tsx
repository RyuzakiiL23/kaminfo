import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function ProductBreadcrumb() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-6 pt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Category One</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Product name placeholder</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}