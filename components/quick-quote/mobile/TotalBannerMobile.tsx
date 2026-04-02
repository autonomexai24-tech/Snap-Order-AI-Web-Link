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
    <div className="-mx-4 mt-8 pt-8 pb-12 flex flex-col gap-6"
         style={{ background: "linear-gradient(to right, #F59E0B, #EA580C)" }}
    >
      
      {/* Breakdown lines - minimalist support (White text on colorful bg) */}
      <div className="flex flex-col gap-2 px-6">
        {totals.discountAmount > 0 && (
          <div className="flex items-center justify-between text-orange-50 font-medium">
            <span className="text-sm tracking-wide">Subtotal</span>
            <span className="text-sm tabular-nums">
              {formatINR(totals.subTotal)}
            </span>
          </div>
        )}
        {totals.discountAmount > 0 && (
          <div className="flex items-center justify-between text-white font-bold">
            <span className="text-sm tracking-wide">Discount</span>
            <span className="text-sm tabular-nums">
              - {formatINR(totals.discountAmount)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-orange-100 font-medium">
          <span className="text-sm tracking-wide">Total GST</span>
          <span className="text-sm tabular-nums">
            {formatINR(totals.totalGst)}
          </span>
        </div>
      </div>

      {/* Hero Grand Total - Heavy Edge-to-Edge Block Focus */}
      <div className="flex items-center justify-between px-6 bg-white/10 py-5 shadow-inner backdrop-blur-sm border-t border-b border-white/20">
        <div className="flex flex-col gap-1.5">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-orange-100">
            Total Payable
          </span>
          <span className="text-4xl font-extrabold tabular-nums tracking-tighter text-white drop-shadow-sm">
            {formatINR(totals.grandTotal)}
          </span>
        </div>
        
        <button
          type="button"
          onClick={onViewGST}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 active:scale-95 transition-all shrink-0"
          aria-label="View GST Breakup"
        >
          <ChevronRight className="w-5 h-5 drop-shadow-sm" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
