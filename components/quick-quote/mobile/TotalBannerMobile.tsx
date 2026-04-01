"use client"

import { ChevronRight } from "lucide-react"
import { formatINR } from "../utils"
import type { ComputedTotals } from "../types"

interface TotalBannerMobileProps {
  totals: ComputedTotals
  onViewGST: () => void
}

/**
 * TotalBannerMobile — Premium Receipt style
 * Design Principles:
 * - Edge-to-edge solid emerald block.
 * - Grand Total is the hero (Large typography, white text).
 * - Breakdown elements clearly visible in translucent whites.
 */
export function TotalBannerMobile({ totals, onViewGST }: TotalBannerMobileProps) {
  return (
    <div className="bg-emerald-600 rounded-2xl shadow-lg mt-6 overflow-hidden">
      <div className="px-5 py-6 flex flex-col gap-5">
        
        {/* Breakdown elements */}
        <div className="flex flex-col gap-2.5">
          {totals.discountAmount > 0 && (
            <div className="flex items-center justify-between text-emerald-100">
              <span className="text-sm font-medium tracking-wide">Subtotal</span>
              <span className="text-sm tabular-nums">
                {formatINR(totals.subTotal)}
              </span>
            </div>
          )}
          {totals.discountAmount > 0 && (
            <div className="flex items-center justify-between text-white font-semibold">
              <span className="text-sm tracking-wide">Discount</span>
              <span className="text-sm tabular-nums">
                - {formatINR(totals.discountAmount)}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between text-emerald-100">
            <span className="text-sm font-medium tracking-wide">Total GST</span>
            <span className="text-sm tabular-nums">
              {formatINR(totals.totalGst)}
            </span>
          </div>
        </div>

        <div className="h-px bg-emerald-500/50" aria-hidden="true" />

        {/* Hero Grand Total */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 text-white">
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-emerald-100">
              Grand Total
            </span>
            <span className="text-3xl font-extrabold tabular-nums tracking-tight">
              {formatINR(totals.grandTotal)}
            </span>
          </div>
          
          <button
            type="button"
            onClick={onViewGST}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white active:bg-white/20 transition-colors"
            aria-label="View GST Breakup"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
