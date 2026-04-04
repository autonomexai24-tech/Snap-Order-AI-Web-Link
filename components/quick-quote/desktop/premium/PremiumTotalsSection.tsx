import React from "react"
import type { ComputedTotals } from "../../types"
import { formatINR } from "../../utils"

interface PremiumTotalsSectionProps {
  totals: ComputedTotals;
}

export function PremiumTotalsSection({ totals }: PremiumTotalsSectionProps) {
  return (
    <section className="flex flex-col items-end w-full mt-2 py-6 border-t border-slate-100">
      <div className="flex flex-col gap-3 w-1/2 min-w-[320px] text-tpl-secondary">
        <div className="flex justify-between items-center px-4">
          <span className="text-[11px] uppercase tracking-[0.2em] opacity-70">Subtotal</span>
          <span className="tabular-nums font-medium text-sm">{formatINR(totals.subTotal)}</span>
        </div>
        
        {totals.discountAmount > 0 && (
          <div className="flex justify-between items-center px-4 text-tpl-primary">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Discount</span>
            <span className="tabular-nums font-bold text-sm">- {formatINR(totals.discountAmount)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center px-4 pt-2">
          <span className="text-[11px] uppercase tracking-[0.2em] opacity-70">Tax (GST)</span>
          <span className="tabular-nums font-medium text-sm">{formatINR(totals.totalGst)}</span>
        </div>

        <div className="flex justify-between items-center px-4 py-5 mt-4 bg-slate-50 border border-slate-100 rounded-lg">
          <span className="text-xs uppercase tracking-[0.2em] font-bold">Total Amount</span>
          <span className="text-2xl tabular-nums font-extrabold tracking-tight">{formatINR(totals.grandTotal)}</span>
        </div>
      </div>
    </section>
  )
}
