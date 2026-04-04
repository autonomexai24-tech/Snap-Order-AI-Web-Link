"use client"

import { formatINR } from "../../../../utils"
import type { ComputedTotals } from "../../../../types"
import { Button } from "@/components/ui/button"

interface TotalBannerMobileProps {
  totals: ComputedTotals
}

/**
 * TotalBannerMobile — Clean Mobile
 *
 * Design Principles:
 * - Functional breakdown block with standard borders.
 * - Solid colors, no gradients or heavy full-bleed backgrounds.
 */
export function TotalBannerMobile({ totals }: TotalBannerMobileProps) {
  return (
    <div className="mt-4 mb-2 flex flex-col gap-3 bg-white border border-neutral-200 rounded-lg p-5">
      <h3 className="text-sm font-bold tracking-tight text-neutral-900 mb-1">
        Payment Summary
      </h3>

      <div className="flex flex-col gap-2.5 border-b border-neutral-100 pb-4">
        {totals.discountAmount > 0 && (
          <div className="flex items-center justify-between text-neutral-500 font-medium">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm tabular-nums text-neutral-700">
              {formatINR(totals.subTotal)}
            </span>
          </div>
        )}
        {totals.discountAmount > 0 && (
          <div className="flex items-center justify-between text-neutral-500 font-medium">
            <span className="text-sm">Discount</span>
            <span className="text-sm tabular-nums text-neutral-700">
              - {formatINR(totals.discountAmount)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-neutral-500 font-medium">
          <span className="text-sm">Total GST</span>
          <span className="text-sm tabular-nums text-neutral-700">
            {formatINR(totals.totalGst)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <span className="text-sm font-bold text-neutral-900">
          Grand Total
        </span>
        <span className="text-xl font-bold tabular-nums text-neutral-900">
          {formatINR(totals.grandTotal)}
        </span>
      </div>
    </div>
  )
}
