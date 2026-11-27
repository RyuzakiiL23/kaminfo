import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CatalogHeading() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pb-6 pt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Category One</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Category title placeholder</h1>
        <p className="max-w-prose text-muted-foreground">
          Short category description placeholder. One sentence about what shoppers can find here.
        </p>
      </div>
    </div>
  );
}