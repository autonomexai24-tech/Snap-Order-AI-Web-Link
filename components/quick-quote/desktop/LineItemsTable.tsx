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
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow className="border-none hover:bg-transparent">
              {/* Left Side: Solid Charcoal */}
              <TableHead className="w-10 text-center text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto bg-slate-900 rounded-tl-sm">
                SN
              </TableHead>
              <TableHead className="text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto bg-slate-900">
                Description
              </TableHead>
              <TableHead className="text-[11px] text-slate-300 uppercase tracking-widest font-mono py-3.5 h-auto bg-slate-900">
                HSN
              </TableHead>
              
              {/* Right Side: Solid Orange */}
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto bg-orange-500">
                Qty
              </TableHead>
              <TableHead className="text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto ml-2 bg-orange-500">
                Unit
              </TableHead>
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-bold py-3.5 h-auto bg-orange-500">
                Rate (&#8377;)
              </TableHead>
              <TableHead className="text-right text-[11px] text-orange-100 uppercase tracking-widest font-bold py-3.5 h-auto bg-orange-500">
                GST
              </TableHead>
              <TableHead className="text-right text-[11px] text-white uppercase tracking-widest font-extrabold py-3.5 h-auto pr-4 bg-orange-500 rounded-tr-sm">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => {
              const lineTotal = calcLineTotal(item)
              return (
                <TableRow
                  key={item.id}
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <TableCell className="text-center text-xs text-slate-400 w-10 py-5 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </TableCell>
                  <TableCell className="font-bold text-sm text-slate-900 max-w-[220px] py-5">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-slate-400 py-5">
                    {item.hsnCode}
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums py-5 font-mono font-medium text-slate-600">
                    {item.qty.toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell className="text-xs text-slate-400 py-5 font-mono pl-2">
                    {item.unit}
                  </TableCell>
                  <TableCell className="text-right text-[14px] tabular-nums py-5 font-mono font-semibold text-slate-800">
                    {formatINR(item.rate)}
                  </TableCell>
                  <TableCell className="text-right text-[11px] text-slate-400 py-5 font-mono">
                    {item.gstRate}%
                  </TableCell>
                  <TableCell className="text-right text-[14px] tabular-nums py-5 pr-4 font-mono font-bold text-slate-900">
                    {formatINR(lineTotal)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {/* Clean Subtotal Footer Bar */}
        <div className="flex justify-end px-5 py-4 bg-white border-b border-slate-200">
          <div className="flex items-center gap-8">
            <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Subtotal</span>
            <span className="text-[16px] font-extrabold tabular-nums w-32 text-right font-mono text-slate-900">
              {formatINR(subTotal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
