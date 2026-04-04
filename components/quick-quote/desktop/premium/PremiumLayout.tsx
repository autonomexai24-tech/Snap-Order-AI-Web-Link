"use client"

import React from "react"
import type { QuotationDocument, ComputedTotals } from "../../types"

import { PremiumHeader } from "./PremiumHeader"
import { PremiumCompanyClientSection } from "./PremiumCompanyClientSection"
import { PremiumSummarySection } from "./PremiumSummarySection"
import { PremiumItemsTable } from "./PremiumItemsTable"
import { PremiumTotalsSection } from "./PremiumTotalsSection"
import { PremiumFooter } from "./PremiumFooter"

interface PremiumLayoutProps {
  quote: QuotationDocument;
  totals: ComputedTotals;
  onViewGST?: () => void;
  onGenerateQR?: () => void;
}

export function PremiumLayout({ quote, totals, onViewGST, onGenerateQR }: PremiumLayoutProps) {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-[1056px] p-12 flex flex-col items-center">
      {/* Structural Wrapper for the Template */}
      <main className="w-full flex flex-col">
        <PremiumHeader quote={quote} />
        
        <PremiumCompanyClientSection quote={quote} />
        
        <PremiumSummarySection quote={quote} totals={totals} />
        
        <PremiumItemsTable items={quote.items} totals={totals} />
        
        <PremiumTotalsSection totals={totals} />
        
        <PremiumFooter quote={quote} />
      </main>
    </div>
  )
}
