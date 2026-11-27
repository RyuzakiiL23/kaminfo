import { MdOutlineLocalShipping, MdOutlineVerifiedUser, MdLockOutline } from "react-icons/md";
import type { IconType } from "react-icons";
import { Card } from "@/components/ui/card";

const ITEMS: { title: string; text: string; Icon: IconType }[] = [
  {
    title: "Trust point one",
    text: "Short description placeholder explaining this guarantee or service.",
    Icon: MdOutlineVerifiedUser,
  },
  {
    title: "Trust point two",
    text: "Short description placeholder explaining this guarantee or service.",
    Icon: MdOutlineLocalShipping,
  },
  {
    title: "Trust point three",
    text: "Short description placeholder explaining this guarantee or service.",
    Icon: MdLockOutline,
  },
];

export function Trust() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14">
      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {ITEMS.map(({ title, text, Icon }) => (
          <Card key={title} className="h-full flex-row items-start gap-4 p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
              <Icon className="size-6" aria-hidden />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}