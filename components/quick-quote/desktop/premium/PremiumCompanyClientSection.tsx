import React from "react"
import type { QuotationDocument } from "../../types"

interface PremiumCompanyClientSectionProps {
  quote: QuotationDocument
}

export function PremiumCompanyClientSection({ quote }: PremiumCompanyClientSectionProps) {
  return (
    <section className="grid grid-cols-2 gap-10 w-full mb-10">
      {/* FROM: Company Details */}
      <div className="flex flex-col gap-1.5 p-6 rounded-lg border border-slate-100 bg-slate-50/30 shadow-sm text-tpl-secondary">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tpl-primary mb-2">From</span>
        <span className="text-lg font-bold tracking-wide">{quote.seller.name}</span>
        <span className="text-sm opacity-80 mt-1">{quote.seller.address}</span>
        <span className="text-sm opacity-80">{quote.seller.city}, {quote.seller.state}</span>
        <span className="text-[11px] font-mono opacity-60 mt-3 pt-3 border-t border-slate-200 w-fit">GSTIN: {quote.seller.gstin}</span>
        {quote.seller.phone && <span className="text-xs opacity-70 mt-1">{quote.seller.phone}</span>}
        {quote.seller.email && <span className="text-xs opacity-70">{quote.seller.email}</span>}
      </div>

      {/* PREPARED FOR: Client Details */}
      <div className="flex flex-col gap-1.5 p-6 rounded-lg border border-slate-100 bg-slate-50/30 shadow-sm text-tpl-secondary">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tpl-primary mb-2">Prepared For</span>
        <span className="text-lg font-bold tracking-wide">{quote.buyer.name}</span>
        <span className="text-sm opacity-80 mt-1">{quote.buyer.address}</span>
        <span className="text-sm opacity-80">{quote.buyer.city}, {quote.buyer.state}</span>
        <span className="text-[11px] font-mono opacity-60 mt-3 pt-3 border-t border-slate-200 w-fit">GSTIN: {quote.buyer.gstin}</span>
        {quote.buyer.phone && <span className="text-xs opacity-70 mt-1">{quote.buyer.phone}</span>}
        {quote.buyer.email && <span className="text-xs opacity-70">{quote.buyer.email}</span>}
      </div>
    </section>
  )
}
