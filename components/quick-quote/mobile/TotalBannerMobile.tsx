"use client"

import { ChevronRight } from "lucide-react"
import { formatINR } from "../utils"
import type { ComputedTotals } from "../types"

interface TotalBannerMobileProps {
  totals: ComputedTotals
  onViewGST: () => void
}

/**
 * TotalBannerMobile — Visual Reference Translation
 *
 * Design Principles:
 * - Edge-to-edge color block mirroring desktop invoice footers.
 * - Entirely avoids black. Uses a vibrant, unique Amber/Orange scheme.
 * - Negative margins to break out of the parent padding and touch the screen edges.
 */
export function TotalBannerMobile({ totals, onViewGST }: TotalBannerMobileProps) {
  return (
    <div className="mt-8 mb-4 flex flex-col bg-slate-100 w-[calc(100%+2rem)] -ml-4">
      
      {/* Breakdown lines - Slate-900 Block */}
      <div className="flex flex-col gap-3 px-6 pt-8 pb-6 bg-tpl-secondary">
        {totals.discountAmount > 0 && (
          <div className="flex items-center justify-between text-slate-300 font-medium">
            <span className="text-xs uppercase tracking-[0.1em]">Subtotal</span>
            <span className="text-sm rounded-sm font-mono tabular-nums text-white">
              {formatINR(totals.subTotal)}
            </span>
          </div>
        )}
        {totals.discountAmount > 0 && (
          <div className="flex items-center justify-between text-tpl-primary/80 font-bold">
            <span className="text-xs uppercase tracking-[0.1em]">Discount</span>
            <span className="text-sm font-mono tabular-nums">
              - {formatINR(totals.discountAmount)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-slate-400 font-medium border-t border-slate-700/50 pt-3">
          <span className="text-xs uppercase tracking-[0.1em]">Total GST</span>
          <span className="text-sm font-mono tabular-nums text-slate-200">
            {formatINR(totals.totalGst)}
          </span>
        </div>
      </div>

      {/* Hero Grand Total - Orange Edge-to-Edge Block */}
      <div className="flex items-center justify-between px-6 bg-tpl-primary py-6 border-t-[3px] border-tpl-secondary relative">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-white/80">
            Total Payable
          </span>
          <span className="text-4xl font-extrabold tabular-nums tracking-tighter text-white drop-shadow-sm">
            {formatINR(totals.grandTotal)}
          </span>
        </div>
        
        <button
          type="button"
          onClick={onViewGST}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-tpl-primary hover:bg-tpl-primary/10 active:scale-95 transition-all shrink-0 shadow-lg"
          aria-label="View GST Breakup"
        >
          <ChevronRight className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
