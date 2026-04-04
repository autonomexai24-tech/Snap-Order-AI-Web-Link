"use client"

import { Share2, Download } from "lucide-react"
import { formatINR } from "../../../../utils"
import { useState } from "react"
import type { QuotationDocument } from "../../../../types"
import {
  Drawer as UIDrawer,
  DrawerContent as UIDrawerContent,
  DrawerHeader as UIDrawerHeader,
  DrawerTitle as UIDrawerTitle,
  DrawerDescription as UIDrawerDescription,
} from "@/components/ui/drawer"
import { UpiAppButtons } from "../../../../shared/UpiAppButtons"
import { Button } from "@/components/ui/button"

interface StickyActionBarProps {
  quote: QuotationDocument
  grandTotal: number
}

/**
 * StickyActionBar — Clean Mobile
 *
 * Design Principles:
 * - Solid white background with top border.
 * - Spans full width, detaching from the floating oval concept.
 * - Functional and clear buttons.
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
      <div id="mobile-action-bar" className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-neutral-200 pb-safe">
        <div className="flex items-center justify-between p-4 gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={handleShare}
              aria-label="Share quote"
              className="w-12 h-12 rounded-lg border-neutral-200 text-neutral-600"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Download PDF"
              className="w-12 h-12 rounded-lg border-neutral-200 text-neutral-600"
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>

          <Button
            onClick={() => setIsDrawerOpen(true)}
            className="flex-1 h-12 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm"
          >
            Pay {formatINR(grandTotal)}
          </Button>
        </div>
      </div>

      <UIDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <UIDrawerContent className="pb-8">
          <UIDrawerHeader>
            <UIDrawerTitle className="text-center text-xl font-bold text-neutral-900">
              Pay {formatINR(grandTotal)}
            </UIDrawerTitle>
            <UIDrawerDescription className="text-center text-neutral-500">
              Select an installed UPI app on your phone.
            </UIDrawerDescription>
          </UIDrawerHeader>
          <div className="px-5 pt-6">
            <UpiAppButtons 
              upiId={quote.upiId} 
              upiName={quote.upiName} 
              amount={grandTotal} 
              txnRef={quote.documentNumber || quote.id} 
              className="justify-between"
            />
          </div>
        </UIDrawerContent>
      </UIDrawer>
    </>
  )
}
