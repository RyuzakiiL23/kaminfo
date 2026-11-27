import { MdCheckCircle } from "react-icons/md";

const HIGHLIGHTS = [
  "Highlight placeholder one",
  "Highlight placeholder two",
  "Highlight placeholder three",
  "Highlight placeholder four",
];

export function ProductDescription() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex max-w-prose flex-col gap-4 lg:col-span-7">
        <h2 className="text-2xl font-bold tracking-tight">Description heading placeholder</h2>
        <p className="text-pretty text-muted-foreground">
          Paragraph placeholder. Describe the product in a few sentences: what it is, who it
          is for and what makes it different from similar products.
        </p>
        <p className="text-pretty text-muted-foreground">
          Second paragraph placeholder. Add more detail about performance, design,
          materials or anything else a buyer would want to know before purchasing.
        </p>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 font-semibold">Key highlights</h3>
          <ul className="flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <MdCheckCircle className="mt-0.5 size-[18px] shrink-0 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}