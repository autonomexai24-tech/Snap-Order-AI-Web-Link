"use client"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { formatINR } from "../../../../utils"
import type { ComputedTotals } from "../../../../types"

interface GSTSummaryDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  totals: ComputedTotals
  isInterState: boolean
}

export function GSTSummaryDrawer({
  open,
  onOpenChange,
  totals,
  isInterState,
}: GSTSummaryDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>GST Breakup</DrawerTitle>
          <DrawerDescription>
            {isInterState ? "Inter-state supply — IGST applied" : "Intra-state supply — CGST + SGST applied"}
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 pb-6 flex flex-col gap-4">
          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="bg-neutral-50 px-4 py-2.5 border-b border-border">
              <div className="grid grid-cols-3 gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Tax Type
                </span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center">
                  Taxable
                </span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-right">
                  Tax Amt
                </span>
              </div>
            </div>

            {totals.gstLines.map((line, index) => (
              <div
                key={line.label}
                className={[
                  "px-4 py-3 border-b border-border last:border-b-0",
                  index % 2 === 0 ? "bg-white" : "bg-neutral-50/50",
                ].join(" ")}
              >
                <div className="grid grid-cols-3 gap-2 items-center">
                  <span className="text-sm font-medium text-foreground">
                    {line.label}
                  </span>
                  <span className="text-sm tabular-nums text-muted-foreground text-center">
                    {formatINR(line.taxableAmount)}
                  </span>
                  <span className="text-sm tabular-nums font-semibold text-foreground text-right">
                    {formatINR(line.total)}
                  </span>
                </div>

                {!isInterState && (
                  <div className="grid grid-cols-2 gap-2 mt-1.5 pl-0">
                    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-2.5 py-1.5">
                      <span className="text-xs text-muted-foreground">CGST {line.rate / 2}%</span>
                      <span className="text-xs tabular-nums font-medium text-foreground">
                        {formatINR(line.cgst)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-2.5 py-1.5">
                      <span className="text-xs text-muted-foreground">SGST {line.rate / 2}%</span>
                      <span className="text-xs tabular-nums font-medium text-foreground">
                        {formatINR(line.sgst)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="flex flex-col divide-y divide-border">
              <div className="flex items-center justify-between px-4 py-3 bg-white">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-sm tabular-nums font-medium text-foreground">
                  {formatINR(totals.subTotal)}
                </span>
              </div>
              {totals.discountAmount > 0 && (
                <div className="flex items-center justify-between px-4 py-3 bg-white">
                  <span className="text-sm text-muted-foreground">Discount</span>
                  <span className="text-sm tabular-nums font-medium text-red-500">
                    - {formatINR(totals.discountAmount)}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between px-4 py-3 bg-white">
                <span className="text-sm text-muted-foreground">Total GST</span>
                <span className="text-sm tabular-nums font-medium text-foreground">
                  {formatINR(totals.totalGst)}
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-4 bg-primary">
                <span className="text-sm font-bold text-primary-foreground">Grand Total</span>
                <span className="text-base tabular-nums font-bold text-primary-foreground">
                  {formatINR(totals.grandTotal)}
                </span>
              </div>
            </div>
          </div>

          <DrawerClose asChild>
            <Button
              variant="outline"
              className="min-h-[48px] rounded-xl font-medium active:scale-[0.98] transition-transform"
            >
              Close
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
