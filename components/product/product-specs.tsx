import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

const SPEC_GROUPS = [
  {
    title: "General",
    rows: ["Brand", "Model", "Color", "Weight"],
  },
  {
    title: "Performance",
    rows: ["Processor", "Memory", "Storage", "Graphics"],
  },
  {
    title: "Display & connectivity",
    rows: ["Screen size", "Resolution", "Ports", "Wireless"],
  },
];

export function ProductSpecs() {
  return (
    <div className="flex max-w-3xl flex-col gap-8">
      <h2 className="text-2xl font-bold tracking-tight">Technical specifications</h2>

      {SPEC_GROUPS.map((group) => (
        <div key={group.title} className="overflow-hidden rounded-lg border bg-card">
          <div className="border-b bg-muted px-4 py-2.5 text-sm font-semibold">
            {group.title}
          </div>
          <Table>
            <TableBody>
              {group.rows.map((label) => (
                <TableRow key={label}>
                  <TableHead className="w-1/3 font-medium text-muted-foreground">
                    {label}
                  </TableHead>
                  <TableCell>Value placeholder</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}