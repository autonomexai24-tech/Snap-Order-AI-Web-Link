"use client"

import { ChevronRight } from "lucide-react"
import { formatINR } from "../utils"
import type { ComputedTotals } from "../types"

interface TotalBannerMobileProps {
  totals: ComputedTotals
  onViewGST: () => void
}

export function TotalBannerMobile({ totals, onViewGST }: TotalBannerMobileProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
      <div className="px-4 py-4 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          {totals.discountAmount > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Subtotal</span>
              <span className="text-xs tabular-nums text-muted-foreground">
                {formatINR(totals.subTotal)}
              </span>
            </div>
          )}
          {totals.discountAmount > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Discount</span>
              <span className="text-xs tabular-nums text-red-500 font-medium">
                - {formatINR(totals.discountAmount)}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Total GST</span>
            <span className="text-xs tabular-nums text-muted-foreground">
              {formatINR(totals.totalGst)}
            </span>
          </div>
        </div>

        <div className="h-px bg-border" aria-hidden="true" />

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Grand Total
            </span>
            <span className="text-2xl font-bold text-foreground tabular-nums">
              {formatINR(totals.grandTotal)}
            </span>
          </div>
          <button
            type="button"
            onClick={onViewGST}
            className="flex items-center gap-1 text-[color:var(--brand-indigo)] text-xs font-medium min-h-[44px] px-3 rounded-xl active:scale-[0.97] transition-transform"
          >
            View GST Breakup
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
