import React from "react"
import type { QuotationDocument } from "../../types"

interface PremiumFooterProps {
  quote: QuotationDocument;
}

export function PremiumFooter({ quote }: PremiumFooterProps) {
  return (
    <footer className="flex justify-between items-start w-full mt-12 pt-8">
      {/* Left Side: Notes and Bank Details */}
      <div className="flex flex-col gap-6 w-1/2">
        {quote.notes && (
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase font-bold tracking-widest">Notes</span>
            <p className="text-sm leading-relaxed">{quote.notes}</p>
          </div>
        )}

        {quote.termsAndConditions && (
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase font-bold tracking-widest">Terms & Conditions</span>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{quote.termsAndConditions}</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase font-bold tracking-widest">Bank Details</span>
          <div className="flex flex-col text-sm">
            <span><strong>Bank:</strong> {quote.bankDetails.bankName}</span>
            <span><strong>A/C No:</strong> {quote.bankDetails.accountNumber}</span>
            <span><strong>IFSC:</strong> {quote.bankDetails.ifsc}</span>
            <span><strong>Name:</strong> {quote.bankDetails.accountHolder}</span>
          </div>
        </div>
      </div>

      {/* Right Side: Signature */}
      <div className="flex flex-col items-center justify-end h-full gap-2">
        <div className="w-48 h-24 flex items-center justify-center mb-2">
          <span className="italic text-2xl placeholder-signature">
            {quote.authorizedSignatory.name}
          </span>
        </div>
        <div className="w-full flex justify-center">
          <span className="text-xs uppercase tracking-widest font-semibold">Authorized Signatory</span>
        </div>
      </div>
    </footer>
  )
}
