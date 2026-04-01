"use client"

import { useState } from "react"
import type { Quote } from "../types"
import { computeTotals } from "../utils"
import { TopActionBar } from "./TopActionBar"
import { DocumentHeader } from "./DocumentHeader"
import { PartyInfoRow } from "./PartyInfoRow"
import { QuoteMeta } from "./QuoteMeta"
import { LineItemsTable } from "./LineItemsTable"
import { GSTBreakupTable } from "./GSTBreakupTable"
import { TotalsBlock } from "./TotalsBlock"
import { BankDetailsBlock } from "./BankDetailsBlock"
import { NotesFooter } from "./NotesFooter"
import { UpiQrModal } from "./UpiQrModal"

interface DesktopLayoutProps {
  quote: Quote
}

export function DesktopLayout({ quote }: DesktopLayoutProps) {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false)
  const totals = computeTotals(quote.items, quote.discount, quote.isInterState)

  return (
    <div className="min-h-screen bg-neutral-100">
      <TopActionBar
        quote={quote}
        grandTotal={totals.grandTotal}
        onPayClick={() => setIsPayModalOpen(true)}
      />

      <main className="py-10 px-4">
        <article
          className="max-w-[794px] mx-auto bg-white shadow-xl rounded-sm border border-neutral-200"
          aria-label={"Quotation " + quote.quoteNumber}
        >
          <DocumentHeader quote={quote} />

          <div className="px-10 pb-10 flex flex-col gap-8">
            <PartyInfoRow seller={quote.seller} buyer={quote.buyer} />
            <QuoteMeta quote={quote} />
            <LineItemsTable items={quote.items} />
            <div className="flex flex-col gap-4">
              <GSTBreakupTable gstLines={totals.gstLines} isInterState={quote.isInterState} />
              <TotalsBlock totals={totals} />
            </div>
            <BankDetailsBlock bankDetails={quote.bankDetails} />
            <NotesFooter notes={quote.notes} terms={quote.termsAndConditions} />
          </div>
        </article>
      </main>

      <UpiQrModal
        open={isPayModalOpen}
        onOpenChange={setIsPayModalOpen}
        upiId={quote.upiId}
        upiName={quote.upiName}
        amount={totals.grandTotal}
        txnRef={quote.quoteNumber}
      />
    </div>
  )
}
