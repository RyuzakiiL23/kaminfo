import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

type OptionCardProps = {
  value: string;
  id: string;
  title: string;
  description: string;
  Icon: IconType;
  trailing?: ReactNode;
};

export function OptionCard({ value, id, title, description, Icon, trailing }: OptionCardProps) {
  return (
    <Label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-4 rounded-md border bg-card p-4 transition-colors hover:border-primary has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-secondary/40"
    >
      <RadioGroupItem value={value} id={id} />
      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="font-semibold">{title}</span>
        <span className="text-sm font-normal text-muted-foreground">{description}</span>
      </div>
      {trailing}
    </Label>
  );
}