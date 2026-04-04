import React from "react"
import type { QuotationDocument, ComputedTotals } from "../../types"
import { formatINR } from "../../utils"

interface PremiumSummarySectionProps {
  quote: QuotationDocument;
  totals: ComputedTotals;
}

export function PremiumSummarySection({ quote, totals }: PremiumSummarySectionProps) {
  return (
    <section className="flex flex-col w-full mb-10 overflow-hidden rounded-xl border border-tpl-primary/20 shadow-sm bg-white">
      <div className="flex justify-between items-stretch w-full">
        {/* Meta Information Panel */}
        <div className="flex flex-col gap-3 flex-1 p-6 bg-slate-50/50">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1">Important Details</span>
          <div className="grid grid-cols-2 lg:flex lg:gap-10 gap-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-500">Issue Date</span>
              <span className="font-semibold text-sm text-tpl-secondary">{quote.issuedAt}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-500">Valid Until</span>
              <span className="font-semibold text-sm text-tpl-secondary">{quote.validUntil}</span>
            </div>
            {quote.poRef && (
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-500">PO Ref</span>
                <span className="font-semibold text-sm text-tpl-secondary">{quote.poRef}</span>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-500">Supply State</span>
              <span className="font-semibold text-sm text-tpl-secondary">{quote.isInterState ? "Inter-State" : "Intra-State"}</span>
            </div>
          </div>
        </div>

        {/* Highlighted Total Block */}
        <div className="flex flex-col items-end justify-center gap-1.5 px-8 bg-tpl-primary/5 border-l border-tpl-primary/20 min-w-[300px]">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-tpl-primary">Total Valuation</span>
          <span className="text-3xl font-extrabold tabular-nums tracking-tight text-tpl-secondary drop-shadow-sm">
            {formatINR(totals.grandTotal)}
          </span>
        </div>
      </div>
    </section>
  )
}
