"use client"

import { useState } from "react"
import type { Quote } from "../types"
import { computeTotals } from "../utils"
import { MobileHeader } from "./MobileHeader"
import { PartyCardMobile } from "./PartyCardMobile"
import { ItemCardList } from "./ItemCardList"
import { TotalBannerMobile } from "./TotalBannerMobile"
import { StickyActionBar } from "./StickyActionBar"
import { GSTSummaryDrawer } from "./GSTSummaryDrawer"

interface MobileLayoutProps {
  quote: Quote
}

export function MobileLayout({ quote }: MobileLayoutProps) {
  const [isGSTDrawerOpen, setIsGSTDrawerOpen] = useState(false)
  const totals = computeTotals(quote.items, quote.discount, quote.isInterState)

  return (
    <div className="min-h-screen bg-neutral-50 pb-32">
      <MobileHeader quote={quote} />

      <div className="flex flex-col gap-4 px-4 pt-4">
        <PartyCardMobile seller={quote.seller} buyer={quote.buyer} />
        <ItemCardList items={quote.items} />
        <TotalBannerMobile
          totals={totals}
          onViewGST={() => setIsGSTDrawerOpen(true)}
        />
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
