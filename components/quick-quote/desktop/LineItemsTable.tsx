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
      {/* 
        Professional Print Data Grid 
        NO vertical borders.
      */}
      <div className="w-full">
        <Table>
          <TableHeader className="bg-[#1E3A8A]">
            <TableRow className="hover:bg-[#1E3A8A] border-none">
              <TableHead className="w-10 text-center text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto">SN</TableHead>
              <TableHead className="text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto">Description</TableHead>
              <TableHead className="text-[11px] text-blue-200 uppercase tracking-widest font-mono py-3.5 h-auto">HSN Code</TableHead>
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto">Qty</TableHead>
              <TableHead className="text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto ml-2">Unit</TableHead>
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto">Rate (&#8377;)</TableHead>
              <TableHead className="text-right text-[11px] text-blue-200 uppercase tracking-widest font-bold py-3.5 h-auto">GST</TableHead>
              <TableHead className="text-right text-[11px] text-[#F59E0B] uppercase tracking-widest font-extrabold py-3.5 h-auto pr-4">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => {
              const lineTotal = calcLineTotal(item)
              return (
                <TableRow
                  key={item.id}
                  className={[
                    "border-b border-slate-100", 
                    index % 2 === 1 ? "bg-[#FEF3C7]/50" : "bg-white" // Amber Ghost Row
                  ].join(" ")}
                >
                  <TableCell className="text-center text-xs text-slate-400 w-10 py-4 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </TableCell>
                  <TableCell className="font-bold text-sm text-[#1E3A8A] max-w-[220px] py-4">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-slate-500 py-4">
                    {item.hsnCode}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums py-4 font-mono font-medium text-slate-700">
                    {item.qty.toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 py-4 font-mono pl-2">
                    {item.unit}
                  </TableCell>
                  <TableCell className="text-right text-[15px] tabular-nums py-4 font-mono font-bold text-[#1E3A8A]">
                    {formatINR(item.rate)}
                  </TableCell>
                  <TableCell className="text-right text-[11px] text-slate-500 py-4 font-mono font-medium">
                    {item.gstRate}%
                  </TableCell>
                  <TableCell className="text-right text-[15px] tabular-nums py-4 pr-4 font-mono font-extrabold text-[#1E3A8A]">
                    {formatINR(lineTotal)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {/* Clean Subtotal Footer Bar */}
        <div className="flex justify-end px-5 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-8">
            <span className="text-[12px] font-bold text-[#1E3A8A] uppercase tracking-widest">Subtotal</span>
            <span className="text-[16px] font-extrabold tabular-nums w-32 text-right font-mono text-[#1E3A8A]">
              {formatINR(subTotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
