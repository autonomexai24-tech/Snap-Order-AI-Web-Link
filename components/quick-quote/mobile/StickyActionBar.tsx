"use client"

import { Share2, Download } from "lucide-react"
import { formatINR } from "../utils"
import { useState } from "react"
import type { QuotationDocument } from "../types"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import { UpiAppButtons } from "../shared/UpiAppButtons"

interface StickyActionBarProps {
  quote: QuotationDocument
  grandTotal: number
}

/**
 * StickyActionBar — Slim Premium Bar (Action layout optimized)
 * Features:
 * - Two ghost icons (Share, Download)
 * - Wide high-contrast Pay [Amount] CTA in Emerald
 */
export function StickyActionBar({ quote, grandTotal }: StickyActionBarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "Quote " + quote.documentNumber,
        text: "Review and pay your quotation from " + quote.seller.name,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      {/* ── Main Action Bar ── */}
      <div className="bg-white/90 backdrop-blur-lg border-t border-slate-100 px-4 py-3 pb-8 flex items-center gap-3">
        {/* Ghost Icons */}
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share quote"
            className="w-12 h-12 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
          >
            <Share2 className="w-5 h-5" aria-hidden="true" />
          </button>
          
          <button
            type="button"
            aria-label="Download PDF"
            className="w-12 h-12 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Wide Pay CTA */}
        <button
          id="sticky-pay-btn"
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="flex-1 h-12 rounded-full font-bold text-base flex items-center justify-center text-white active:scale-[0.98] transition-all"
          style={{ backgroundColor: "var(--emerald-600, #059669)" }}
        >
          Pay {formatINR(grandTotal)}
        </button>
      </div>

      {/* ── UPI Payment Drawer  ── */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="pb-8">
          <DrawerHeader>
            <DrawerTitle className="text-center text-xl">Pay {formatINR(grandTotal)}</DrawerTitle>
            <DrawerDescription className="text-center">
              Select an installed UPI app on your phone.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pt-4">
            <UpiAppButtons 
              upiId={quote.upiId} 
              upiName={quote.upiName} 
              amount={grandTotal} 
              txnRef={quote.documentNumber || quote.id} 
              className="justify-around"
            />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
