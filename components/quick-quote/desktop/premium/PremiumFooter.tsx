import React from "react"
import type { QuotationDocument } from "../../types"

interface PremiumFooterProps {
  quote: QuotationDocument;
}

export function PremiumFooter({ quote }: PremiumFooterProps) {
  return (
    <footer className="flex justify-between items-start w-full mt-16 pt-10 border-t border-tpl-primary/20 text-tpl-secondary">
      {/* Left Side: Notes and Bank Details */}
      <div className="flex flex-col gap-8 w-1/2">
        {quote.notes && (
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-tpl-primary">Notes</span>
            <p className="text-sm leading-relaxed opacity-80">{quote.notes}</p>
          </div>
        )}

        {quote.termsAndConditions && (
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-tpl-primary">Terms & Conditions</span>
            <p className="text-xs leading-relaxed whitespace-pre-wrap opacity-70">{quote.termsAndConditions}</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-tpl-primary">Bank Details</span>
          <div className="flex flex-col text-sm opacity-80 gap-0.5">
            <span><strong className="font-medium opacity-100">Bank:</strong> {quote.bankDetails.bankName}</span>
            <span><strong className="font-medium opacity-100">A/C No:</strong> {quote.bankDetails.accountNumber}</span>
            <span className="font-mono text-xs"><strong className="font-sans font-medium text-sm opacity-100">IFSC:</strong> {quote.bankDetails.ifsc}</span>
            <span><strong className="font-medium opacity-100">Name:</strong> {quote.bankDetails.accountHolder}</span>
          </div>
        </div>
      </div>

      {/* Right Side: Signature */}
      <div className="flex flex-col items-center justify-end h-full gap-2">
        <div className="w-56 h-32 flex items-center justify-center mb-1 bg-slate-50/50 rounded border border-slate-100">
          <span className="italic text-4xl opacity-80" style={{ fontFamily: '"Dancing Script", cursive', color: 'var(--tpl-secondary)' }}>
            {quote.authorizedSignatory.name}
          </span>
        </div>
        <div className="w-full flex justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Authorized Signatory</span>
        </div>
      </div>
    </footer>
  )
}
