import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const CATEGORIES = ["Category one", "Category two", "Category three", "Category four"];
const BRANDS = ["Brand one", "Brand two", "Brand three", "Brand four", "Brand five"];
const AVAILABILITY = ["In stock", "On promotion", "Pickup available"];

function CheckList({ prefix, items }: { prefix: string; items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => {
        const id = `${prefix}-${i}`;
        return (
          <li key={id} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Checkbox id={id} />
              <Label htmlFor={id} className="font-normal">
                {item}
              </Label>
            </div>
            <span className="text-xs tabular-nums text-muted-foreground">(00)</span>
          </li>
        );
      })}
    </ul>
  );
}

export function CatalogFilters({ idPrefix = "filters" }: { idPrefix?: string }) {
  return (
    <Accordion
      multiple
      defaultValue={["category", "price", "brand", "availability"]}
      className="w-full"
    >
      <AccordionItem value="category">
        <AccordionTrigger>Category</AccordionTrigger>
        <AccordionContent>
          <CheckList prefix={`${idPrefix}-cat`} items={CATEGORIES} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="price">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <Slider defaultValue={[20, 80]} max={100} step={1} className="mt-2" />
          <div className="flex items-center gap-2">
            <Input placeholder="Min" aria-label="Minimum price" className="tabular-nums" />
            <span className="text-muted-foreground">–</span>
            <Input placeholder="Max" aria-label="Maximum price" className="tabular-nums" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="brand">
        <AccordionTrigger>Brand</AccordionTrigger>
        <AccordionContent>
          <CheckList prefix={`${idPrefix}-brand`} items={BRANDS} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="availability" className="border-b-0">
        <AccordionTrigger>Availability</AccordionTrigger>
        <AccordionContent>
          <CheckList prefix={`${idPrefix}-avail`} items={AVAILABILITY} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}