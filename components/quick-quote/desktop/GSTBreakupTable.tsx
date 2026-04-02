"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatINR } from "../utils"
import type { GSTLine } from "../types"

interface GSTBreakupTableProps {
  gstLines: GSTLine[]
  isInterState: boolean
}

export function GSTBreakupTable({ gstLines, isInterState }: GSTBreakupTableProps) {
  return (
    <div className="flex justify-end">
      <div className="w-full max-w-[500px]">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 pl-2">
          Tax Breakdown
        </h2>
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow className="border-none hover:bg-transparent">
                <TableHead className="text-[10px] text-white uppercase tracking-widest font-bold py-3 h-auto bg-slate-900 rounded-tl-sm">Tax Type</TableHead>
                <TableHead className="text-right text-[10px] text-slate-300 uppercase tracking-widest font-bold py-3 h-auto bg-slate-900">Taxable Value</TableHead>
                {!isInterState && (
                  <>
                    <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-3 h-auto bg-orange-500">CGST</TableHead>
                    <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-3 h-auto bg-orange-500">SGST</TableHead>
                  </>
                )}
                {isInterState && (
                  <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-3 h-auto bg-orange-500">IGST</TableHead>
                )}
                <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-extrabold py-3 h-auto pr-4 bg-orange-500 rounded-tr-sm">Total Tax</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gstLines.map((line) => (
                <TableRow 
                  key={line.label} 
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <TableCell className="text-xs font-bold text-slate-800 py-4">{line.label}</TableCell>
                  <TableCell className="text-right text-[13px] font-mono font-medium text-slate-600 py-4">
                    {formatINR(line.taxableAmount)}
                  </TableCell>
                  {!isInterState && (
                    <>
                      <TableCell className="text-right text-[13px] font-mono font-medium text-slate-600 py-4">
                        {formatINR(line.cgst)}
                      </TableCell>
                      <TableCell className="text-right text-[13px] font-mono font-medium text-slate-600 py-4">
                        {formatINR(line.sgst)}
                      </TableCell>
                    </>
                  )}
                  {isInterState && (
                    <TableCell className="text-right text-[13px] font-mono font-medium text-slate-600 py-4">
                      {formatINR(line.igst)}
                    </TableCell>
                  )}
                  <TableCell className="text-right text-[14px] font-mono font-bold text-slate-900 pr-4 py-4">
                    {formatINR(line.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
