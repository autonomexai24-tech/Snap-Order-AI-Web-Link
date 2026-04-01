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
      <div className="w-full max-w-[480px]">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
          GST Breakup
        </h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-50 hover:bg-neutral-50">
                <TableHead className="text-xs">Tax Type</TableHead>
                <TableHead className="text-right text-xs">Taxable Value</TableHead>
                {!isInterState && (
                  <>
                    <TableHead className="text-right text-xs">CGST</TableHead>
                    <TableHead className="text-right text-xs">SGST</TableHead>
                  </>
                )}
                {isInterState && (
                  <TableHead className="text-right text-xs">IGST</TableHead>
                )}
                <TableHead className="text-right text-xs font-semibold">Tax Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gstLines.map((line) => (
                <TableRow key={line.label} className="bg-white">
                  <TableCell className="text-xs font-medium">{line.label}</TableCell>
                  <TableCell className="text-right text-xs tabular-nums">
                    {formatINR(line.taxableAmount)}
                  </TableCell>
                  {!isInterState && (
                    <>
                      <TableCell className="text-right text-xs tabular-nums">
                        {formatINR(line.cgst)}
                      </TableCell>
                      <TableCell className="text-right text-xs tabular-nums">
                        {formatINR(line.sgst)}
                      </TableCell>
                    </>
                  )}
                  {isInterState && (
                    <TableCell className="text-right text-xs tabular-nums">
                      {formatINR(line.igst)}
                    </TableCell>
                  )}
                  <TableCell className="text-right text-xs font-semibold tabular-nums">
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
