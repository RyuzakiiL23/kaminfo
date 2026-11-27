import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";

type FieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
};

export function Field({ id, label, optional, className, children }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <Label htmlFor={id}>
        {label}
        {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children}
    </div>
  );
}