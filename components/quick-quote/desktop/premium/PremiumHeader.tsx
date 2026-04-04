import React from "react"
import type { QuotationDocument } from "../../types"

interface PremiumHeaderProps {
  quote: QuotationDocument
}

export function PremiumHeader({ quote }: PremiumHeaderProps) {
  return (
    <header className="flex justify-between items-start w-full border-b border-tpl-primary/30 pb-10 mb-8">
      <div className="flex flex-col gap-3">
        {/* Placeholder for Logo */}
        <div className="w-16 h-16 bg-slate-100 flex items-center justify-center rounded text-xs text-slate-400 font-medium">LOGO</div>
        <div className="flex flex-col text-tpl-secondary">
          <span className="font-bold text-lg tracking-wide uppercase">{quote.seller.name}</span>
          <span className="text-sm tracking-widest uppercase opacity-60">Industrial Profile</span>
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-2 text-tpl-secondary">
        <h1 className="text-5xl uppercase font-bold tracking-tight text-tpl-secondary mb-1">Quotation</h1>
        <div className="flex items-center gap-3">
          <span className="text-lg font-mono font-medium tracking-widest">{quote.documentNumber}</span>
          <span className="uppercase text-[10px] tracking-widest font-bold px-3 py-1 bg-tpl-primary/10 text-tpl-primary border border-tpl-primary/20 rounded-full">{quote.status}</span>
        </div>
      </div>
    </header>
  )
}
