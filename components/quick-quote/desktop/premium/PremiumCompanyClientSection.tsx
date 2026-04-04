import React from "react"
import type { QuotationDocument } from "../../types"

interface PremiumCompanyClientSectionProps {
  quote: QuotationDocument
}

export function PremiumCompanyClientSection({ quote }: PremiumCompanyClientSectionProps) {
  return (
    <section className="grid grid-cols-2 gap-8 w-full mt-8">
      {/* FROM: Company Details */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest mb-1">From</span>
        <span className="font-bold">{quote.seller.name}</span>
        <span className="text-sm">{quote.seller.address}</span>
        <span className="text-sm">{quote.seller.city}, {quote.seller.state}</span>
        <span className="text-xs uppercase mt-2">GSTIN: {quote.seller.gstin}</span>
        {quote.seller.phone && <span className="text-xs">{quote.seller.phone}</span>}
        {quote.seller.email && <span className="text-xs">{quote.seller.email}</span>}
      </div>

      {/* PREPARED FOR: Client Details */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest mb-1">Prepared For</span>
        <span className="font-bold">{quote.buyer.name}</span>
        <span className="text-sm">{quote.buyer.address}</span>
        <span className="text-sm">{quote.buyer.city}, {quote.buyer.state}</span>
        <span className="text-xs uppercase mt-2">GSTIN: {quote.buyer.gstin}</span>
        {quote.buyer.phone && <span className="text-xs">{quote.buyer.phone}</span>}
        {quote.buyer.email && <span className="text-xs">{quote.buyer.email}</span>}
      </div>
    </section>
  )
}
