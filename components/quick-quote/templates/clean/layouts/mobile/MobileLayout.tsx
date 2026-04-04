"use client"

import { useState } from "react"
import type { QuotationDocument } from "../../../../types"
import { computeTotals } from "../../../../utils"
import { MobileHeader } from "./MobileHeader"
import { PartyCardMobile } from "./PartyCardMobile"
import { ItemCardList } from "./ItemCardList"
import { TotalBannerMobile } from "./TotalBannerMobile"
import { StickyActionBar } from "./StickyActionBar"
import { GSTSummaryDrawer } from "./GSTSummaryDrawer"
import { SignatureBlock } from "../../../../shared/SignatureBlock"

interface MobileLayoutProps {
  quote: QuotationDocument
}

export function MobileLayout({ quote }: MobileLayoutProps) {
  const [isGSTDrawerOpen, setIsGSTDrawerOpen] = useState(false)
  const totals = computeTotals(quote.items, quote.discount, quote.isInterState)

  return (
    <div className="min-h-screen bg-neutral-50 pb-32 w-full max-w-[100vw] overflow-x-hidden relative">
      <MobileHeader quote={quote} />

      <div className="flex flex-col gap-4 px-4 pt-4">
        <PartyCardMobile seller={quote.seller} buyer={quote.buyer} />
        
        <ItemCardList items={quote.items} />
        
        {/* We place GST Drawer trigger inside the generic totals block */}
        <div className="flex justify-end">
          <button 
            type="button" 
            onClick={() => setIsGSTDrawerOpen(true)}
            className="text-xs font-bold text-neutral-600 underline underline-offset-2 px-2 py-1"
          >
            View GST Breakup
          </button>
        </div>
        
        <TotalBannerMobile totals={totals} />

        {/* Bank Details Section */}
        {quote.bankDetails && (
          <div className="bg-white border border-neutral-200 rounded-lg p-5 flex flex-col gap-2 mt-2">
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              Bank Details
            </h3>
            <div className="flex flex-col gap-1 text-sm text-neutral-800">
              <p><span className="text-neutral-500 w-24 inline-block">Bank Name:</span> {quote.bankDetails.bankName}</p>
              <p><span className="text-neutral-500 w-24 inline-block">Account Name:</span> {quote.bankDetails.accountHolder}</p>
              <p><span className="text-neutral-500 w-24 inline-block">Account No:</span> <span className="font-mono">{quote.bankDetails.accountNumber}</span></p>
              <p><span className="text-neutral-500 w-24 inline-block">IFSC Code:</span> <span className="font-mono">{quote.bankDetails.ifsc}</span></p>
              {quote.bankDetails.branch && (
                <p><span className="text-neutral-500 w-24 inline-block">Branch:</span> {quote.bankDetails.branch}</p>
              )}
            </div>
          </div>
        )}

        {/* Notes & Terms Section */}
        {quote.notes && (
          <div className="flex flex-col gap-1 px-1 mt-4">
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              Notes & Terms
            </h3>
            <p className="text-sm text-neutral-600 whitespace-pre-wrap leading-relaxed">
              {quote.notes}
            </p>
          </div>
        )}

        {/* Authorized Signatory Space */}
        <SignatureBlock className="mt-8 mb-6 pr-2" signatureName={quote.authorizedSignatory.name} />
      </div>

      <StickyActionBar
        quote={quote}
        grandTotal={totals.grandTotal}
      />

      <GSTSummaryDrawer
        open={isGSTDrawerOpen}
        onOpenChange={setIsGSTDrawerOpen}
        totals={totals}
        isInterState={quote.isInterState}
      />
    </div>
  )
}
