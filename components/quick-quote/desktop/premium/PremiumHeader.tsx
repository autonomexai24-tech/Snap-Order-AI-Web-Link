import React from "react"
import type { QuotationDocument } from "../../types"

interface PremiumHeaderProps {
  quote: QuotationDocument
}

export function PremiumHeader({ quote }: PremiumHeaderProps) {
  return (
    <header className="flex justify-between items-start w-full">
      <div className="flex flex-col gap-2">
        {/* Placeholder for Logo */}
        <div className="w-12 h-12">LOGO</div>
        <div className="flex flex-col">
          <span className="font-bold uppercase">{quote.seller.name}</span>
          <span className="text-xs uppercase">Industrial Profile</span>
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-1">
        <h1 className="text-4xl uppercase font-bold">Quotation</h1>
        <div className="flex gap-2">
          <span>{quote.documentNumber}</span>
          <span className="uppercase text-xs">{quote.status}</span>
        </div>
      </div>
    </header>
  )
}
