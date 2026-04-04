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
    <div className="w-full bg-[#f8f9fa] py-16 flex flex-col items-center min-h-screen">
      {/* Structural Wrapper for the Template */}
      <main className="w-full max-w-[900px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 rounded-2xl p-16 flex flex-col relative overflow-hidden">
        {/* Very faint ambient gold splash behind the content but inside the card */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tpl-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
        
        <div className="relative z-10 w-full flex flex-col">
          <PremiumHeader quote={quote} />
          
          <PremiumCompanyClientSection quote={quote} />
          
          <PremiumSummarySection quote={quote} totals={totals} />
          
          <PremiumItemsTable items={quote.items} totals={totals} />
          
          <PremiumTotalsSection totals={totals} />
          
          <PremiumFooter quote={quote} />
        </div>
      </main>
    </div>
  )
}
