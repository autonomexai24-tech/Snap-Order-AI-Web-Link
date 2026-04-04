import React from "react"
import type { ComputedTotals } from "../../types"
import { formatINR } from "../../utils"

interface PremiumTotalsSectionProps {
  totals: ComputedTotals;
}

export function PremiumTotalsSection({ totals }: PremiumTotalsSectionProps) {
  return (
    <section className="flex flex-col items-end w-full mt-6 py-4">
      <div className="flex flex-col gap-2 w-1/2 min-w-[300px]">
        <div className="flex justify-between items-center px-4">
          <span className="text-sm uppercase tracking-widest font-semibold">Subtotal</span>
          <span className="tabular-nums font-medium">{formatINR(totals.subTotal)}</span>
        </div>
        
        {totals.discountAmount > 0 && (
          <div className="flex justify-between items-center px-4">
            <span className="text-sm uppercase tracking-widest font-semibold">Discount</span>
            <span className="tabular-nums font-medium">- {formatINR(totals.discountAmount)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center px-4 pt-2">
          <span className="text-sm uppercase tracking-widest font-semibold">Tax (GST)</span>
          <span className="tabular-nums font-medium">{formatINR(totals.totalGst)}</span>
        </div>

        <div className="flex justify-between items-center px-4 py-3 mt-4">
          <span className="text-sm uppercase tracking-widest font-bold">Total Amount</span>
          <span className="text-xl tabular-nums font-bold">{formatINR(totals.grandTotal)}</span>
        </div>
      </div>
    </section>
  )
}
