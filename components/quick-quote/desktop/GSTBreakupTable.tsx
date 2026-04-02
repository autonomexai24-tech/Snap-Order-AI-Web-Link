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
            <TableHeader className="bg-[#1E3A8A]">
              <TableRow className="border-none hover:bg-[#1E3A8A]">
                <TableHead className="text-[10px] text-white uppercase tracking-widest font-bold py-2.5 h-auto">Tax Type</TableHead>
                <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-2.5 h-auto">Taxable Value</TableHead>
                {!isInterState && (
                  <>
                    <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-2.5 h-auto">CGST</TableHead>
                    <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-2.5 h-auto">SGST</TableHead>
                  </>
                )}
                {isInterState && (
                  <TableHead className="text-right text-[10px] text-white uppercase tracking-widest font-bold py-2.5 h-auto">IGST</TableHead>
                )}
                <TableHead className="text-right text-[10px] text-[#F59E0B] uppercase tracking-widest font-extrabold py-2.5 h-auto pr-4">Total Tax</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gstLines.map((line, idx) => (
                <TableRow 
                  key={line.label} 
                  className={[
                    "border-b border-slate-100", 
                    idx % 2 === 1 ? "bg-[#FEF3C7]/50" : "bg-white"
                  ].join(" ")}
                >
                  <TableCell className="text-xs font-bold text-[#1E3A8A]">{line.label}</TableCell>
                  <TableCell className="text-right text-[13px] font-mono font-medium text-[#1E3A8A]">
                    {formatINR(line.taxableAmount)}
                  </TableCell>
                  {!isInterState && (
                    <>
                      <TableCell className="text-right text-[13px] font-mono font-medium text-[#1E3A8A]">
                        {formatINR(line.cgst)}
                      </TableCell>
                      <TableCell className="text-right text-[13px] font-mono font-medium text-[#1E3A8A]">
                        {formatINR(line.sgst)}
                      </TableCell>
                    </>
                  )}
                  {isInterState && (
                    <TableCell className="text-right text-[13px] font-mono font-medium text-[#1E3A8A]">
                      {formatINR(line.igst)}
                    </TableCell>
                  )}
                  <TableCell className="text-right text-[14px] font-mono font-bold text-[#1E3A8A] pr-4">
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
