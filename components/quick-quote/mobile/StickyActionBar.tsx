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
 * StickyActionBar — Premium Minimalist Receipt (Airy Redesign)
 *
 * Design Principles:
 * - Floating bottom action bar leveraging `bg-white/80 backdrop-blur-md`.
 * - Detaches visually from bottom edge.
 * - Pill-shaped Emerald CTA for thumb-friendly payment trigger.
 */
export function StickyActionBar({ quote, grandTotal }: StickyActionBarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "Quote " + quote.documentNumber,
        text: "Review and break down your quotation from " + quote.seller.name,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <>
      <div id="mobile-action-bar" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-2rem)] max-w-sm">
        {/* ── Glassmorphic Action Bar ── */}
        <div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-sm rounded-[2rem] p-1.5 flex items-center gap-2">
          
          {/* Ghost Icons */}
          <div className="flex shrink-0">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share quote"
              className="w-12 h-12 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100/50 active:scale-95 transition-all"
            >
              <Share2 className="w-5 h-5 mx-auto" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Download PDF"
              className="w-12 h-12 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100/50 active:scale-95 transition-all"
            >
              <Download className="w-5 h-5 mx-auto" aria-hidden="true" />
            </button>
          </div>

          {/* Emerald Pill CTA */}
          <button
            id="sticky-pay-btn"
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="flex-1 h-[48px] rounded-full font-bold text-sm tracking-wide flex items-center justify-center text-white active:scale-95 transition-all overflow-hidden"
            style={{ backgroundColor: "#10B981" }}
          >
            Pay Now {formatINR(grandTotal)}
          </button>
        </div>
      </div>

      {/* ── UPI Payment Drawer  ── */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="pb-8">
          <DrawerHeader>
            <DrawerTitle className="text-center text-xl font-bold text-slate-900">
              Pay {formatINR(grandTotal)}
            </DrawerTitle>
            <DrawerDescription className="text-center text-slate-500">
              Select an installed UPI app on your phone.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-5 pt-6">
            <UpiAppButtons 
              upiId={quote.upiId} 
              upiName={quote.upiName} 
              amount={grandTotal} 
              txnRef={quote.documentNumber || quote.id} 
              className="justify-between"
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
