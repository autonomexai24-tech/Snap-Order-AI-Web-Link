"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatINR, calcLineTotal } from "../utils"
import type { LineItem } from "../types"

interface LineItemsTableProps {
  items: LineItem[]
}

export function LineItemsTable({ items }: LineItemsTableProps) {
  const subTotal = items.reduce((acc, item) => acc + calcLineTotal(item), 0)

  return (
    <div>
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
        Line Items
      </h2>
      <div className="border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-neutral-50 hover:bg-neutral-50">
              <TableHead className="w-8 text-center text-xs">#</TableHead>
              <TableHead className="text-xs">Description</TableHead>
              <TableHead className="text-xs font-mono">HSN Code</TableHead>
              <TableHead className="text-right text-xs">Qty</TableHead>
              <TableHead className="text-xs">Unit</TableHead>
              <TableHead className="text-right text-xs">Rate (&#8377;)</TableHead>
              <TableHead className="text-right text-xs">GST %</TableHead>
              <TableHead className="text-right text-xs font-semibold">Amount (&#8377;)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => {
              const lineTotal = calcLineTotal(item)
              return (
                <TableRow
                  key={item.id}
                  className={index % 2 === 1 ? "bg-neutral-50/50" : "bg-white"}
                >
                  <TableCell className="text-center text-xs text-muted-foreground w-8">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium text-sm max-w-[220px]">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {item.hsnCode}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums">
                    {item.qty.toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {item.unit}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums">
                    {formatINR(item.rate)}
                  </TableCell>
                  <TableCell className="text-right text-xs text-muted-foreground">
                    {item.gstRate}%
                  </TableCell>
                  <TableCell className="text-right text-sm font-semibold tabular-nums">
                    {formatINR(lineTotal)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <div className="flex justify-end px-4 py-3 bg-neutral-50 border-t border-border">
          <div className="flex items-center gap-8">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="text-sm font-bold tabular-nums w-32 text-right">
              {formatINR(subTotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
