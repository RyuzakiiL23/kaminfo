import { MdBolt, MdArrowForward, MdImage, MdCheckCircleOutline, MdOutlinePayments } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-8">
      <div className="grid grid-cols-1 items-center gap-8 rounded-lg border bg-card p-8 text-card-foreground lg:grid-cols-12 lg:p-10">
        {/* Text */}
        <div className="flex flex-col items-start gap-5 lg:col-span-6">
          <Badge variant="secondary" className="gap-1.5 px-3 py-3 font-semibold">
            <MdBolt className="size-4" aria-hidden />
            Semaine Tech Maroc — Jusqu&apos;à -20%
          </Badge>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hero headline placeholder goes here.
          </h1>

          <p className="max-w-prose text-pretty text-muted-foreground">
            Short supporting paragraph placeholder. Describe the main offer or
            value of the store in a sentence or two.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button className='rounded-sm px-4 py-6 cursor-pointer'>
              Découvrir les PC Portables
              <MdArrowForward className="size-[18px]" aria-hidden />
            </Button>
            <Button className='rounded-sm px-4 py-6 cursor-pointer' variant="outline">
              Voir les promos en DH
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MdCheckCircleOutline className="size-[18px] text-green-700" aria-hidden />
              À partir de 6 490 DH
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MdOutlinePayments className="size-[18px] text-green-700" aria-hidden />
              Highlight two
            </span>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="lg:col-span-6">
          <div className="flex aspect-[16/10] items-center justify-center rounded-md border bg-muted text-muted-foreground">
            <MdImage className="size-12" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}