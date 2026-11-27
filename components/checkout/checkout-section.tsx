import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type CheckoutSectionProps = {
  step: number;
  title: string;
  children: ReactNode;
};

export function CheckoutSection({ step, title, children }: CheckoutSectionProps) {
  return (
    <Card className="gap-5 p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground tabular-nums">
          {step}
        </span>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </Card>
  );
}