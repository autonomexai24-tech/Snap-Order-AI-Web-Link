import React from "react"
import type { QuotationDocument, ComputedTotals } from "../../types"
import { formatINR } from "../../utils"

interface PremiumSummarySectionProps {
  quote: QuotationDocument;
  totals: ComputedTotals;
}

export function PremiumSummarySection({ quote, totals }: PremiumSummarySectionProps) {
  return (
    <section className="flex flex-col gap-4 mt-8 mb-8 p-4 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          {/* Important Highlight Information */}
          <span className="text-xs uppercase tracking-widest font-semibold">Important Meta Information</span>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase">Issue Date</span>
              <span className="font-semibold">{quote.issuedAt}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase">Valid Until</span>
              <span className="font-semibold">{quote.validUntil}</span>
            </div>
            {quote.poRef && (
              <div className="flex flex-col">
                <span className="text-xs uppercase">PO Reference</span>
                <span className="font-semibold">{quote.poRef}</span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xs uppercase">Supply State</span>
              <span className="font-semibold">{quote.isInterState ? "Inter-State" : "Intra-State"}</span>
            </div>
          </div>
        </div>

        {/* Highlighted Total Block Placeholder */}
        <div className="flex flex-col items-end gap-1 px-6 py-4">
          <span className="text-xs uppercase font-bold tracking-widest">Total Valuation</span>
          <span className="text-2xl font-bold tabular-nums">
            {formatINR(totals.grandTotal)}
          </span>
        </div>
      </div>
    </section>
  )
}
