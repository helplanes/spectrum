import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    zone: "A",
    bonus_seconds: "15",
    distance: "50",
    depth: "15",
  },
  {
    zone: "B",
    bonus_seconds: "30",
    distance: "65",
    depth: "10"
  },
  {
    zone: "C",
    bonus_seconds: "20",
    distance: "75",
    depth: "15",
  },
]

export function TableInfo() {
  return (
    <Table className="text-gray-600">
      <TableCaption>Bonus seconds will be awarded according to this table :</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Zone</TableHead>
          <TableHead>Bonus Seconds</TableHead>
          <TableHead>* Distance from firing line /m</TableHead>
          <TableHead className="text-right">Depth of the Zone /m</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.zone}>
            <TableCell className="font-medium">{invoice.zone}</TableCell>
            <TableCell>{invoice.bonus_seconds}</TableCell>
            <TableCell>{invoice.distance}</TableCell>
            <TableCell className="text-right">{invoice.depth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>* so eg. zone A starts 50m and ends 65m from the firing line.</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
