import { MdLaptopMac, MdSportsEsports, MdDeveloperBoard, MdHeadphones, MdChevronRight } from "react-icons/md";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CATEGORIES: { title: string; subtitle: string; Icon: IconType }[] = [
  { title: "Category One", subtitle: "Short description", Icon: MdLaptopMac },
  { title: "Category Two", subtitle: "Short description", Icon: MdSportsEsports },
  { title: "Category Three", subtitle: "Short description", Icon: MdDeveloperBoard },
  { title: "Category Four", subtitle: "Short description", Icon: MdHeadphones },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Explorer par catégorie</h2>
        <Button variant="link" className="gap-1 px-0 font-semibold">
          Tout le catalogue
          <MdChevronRight className="size-[18px]" aria-hidden />
        </Button>
      </div>

      <div className="grid grid-cols-2 items-stretch gap-4 lg:grid-cols-4">
        {CATEGORIES.map(({ title, subtitle, Icon }) => (
          <Card
            key={title}
            className="flex-row items-center gap-3.5 p-4 transition-all border-muted cursor-pointer hover:border-blue-400 border"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
              <Icon className="size-[26px]" aria-hidden />
            </div>
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-xs font-medium text-muted-foreground font-semibold">{subtitle}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}