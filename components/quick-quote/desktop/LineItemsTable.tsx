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
      {/* 
        Professional Data Grid 
        Sharp border, no radius.
      */}
      <div className="border border-border">
        <Table>
          <TableHeader className="bg-slate-900 overflow-hidden">
            <TableRow className="hover:bg-slate-900 border-none">
              <TableHead className="w-8 text-center text-[11px] text-white uppercase tracking-widest font-semibold py-3 h-auto">#</TableHead>
              <TableHead className="text-[11px] text-white uppercase tracking-widest font-semibold py-3 h-auto">Description</TableHead>
              <TableHead className="text-[11px] text-zinc-300 uppercase tracking-widest font-mono py-3 h-auto">HSN Code</TableHead>
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-semibold py-3 h-auto">Qty</TableHead>
              <TableHead className="text-[11px] text-white uppercase tracking-widest font-semibold py-3 h-auto">Unit</TableHead>
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-semibold py-3 h-auto">Rate (&#8377;)</TableHead>
              <TableHead className="text-right text-[11px] text-zinc-300 uppercase tracking-widest font-semibold py-3 h-auto">GST %</TableHead>
              <TableHead className="text-right text-[11px] text-emerald-300 uppercase tracking-widest font-bold py-3 h-auto">Amount (&#8377;)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => {
              const lineTotal = calcLineTotal(item)
              return (
                <TableRow
                  key={item.id}
                  className={index % 2 === 1 ? "bg-[#F8FAFC] border-b border-border" : "bg-white border-b border-border"}
                >
                  <TableCell className="text-center text-xs text-muted-foreground w-8 py-4">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium text-sm max-w-[220px] py-4">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground py-4">
                    {item.hsnCode}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums py-4 font-mono font-medium">
                    {item.qty.toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground py-4">
                    {item.unit}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums py-4 font-mono font-medium">
                    {formatINR(item.rate)}
                  </TableCell>
                  <TableCell className="text-right text-xs text-muted-foreground py-4 font-mono">
                    {item.gstRate}%
                  </TableCell>
                  <TableCell className="text-right text-sm font-semibold tabular-nums py-4 font-mono">
                    {formatINR(lineTotal)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {/* Bold Subtotal Footer Bar */}
        <div className="flex justify-end px-5 py-3.5 bg-[#F1F5F9] border-t-2 border-border">
          <div className="flex items-center gap-8">
            <span className="text-[13px] font-semibold text-slate-700 uppercase tracking-widest">Subtotal</span>
            <span className="text-[15px] font-bold tabular-nums w-32 text-right font-mono text-slate-900">
              {formatINR(subTotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
