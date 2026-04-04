"use client"

import { Download, Share2, Printer, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatINR } from "../../../../utils"
import type { QuotationDocument } from "../../../../types"

interface TopActionBarProps {
  quote: QuotationDocument
  grandTotal: number
  onPayClick: () => void
}

export function TopActionBar({ quote, grandTotal, onPayClick }: TopActionBarProps) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "Quote " + quote.documentNumber,
        text: "Review your quotation from " + quote.seller.name,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  function handlePrint() {
    window.print()
  }

  return (
    <header id="top-action-bar" className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[794px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-primary tracking-tight">
            Quotation
          </span>
          <div className="h-4 w-px bg-border" aria-hidden="true" />
          <span className="text-sm text-muted-foreground font-mono">
            {quote.documentNumber}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="min-h-[44px] min-w-[44px] text-muted-foreground"
            onClick={handlePrint}
            aria-label="Print quote"
          >
            <Printer className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Print</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="min-h-[44px] min-w-[44px] text-muted-foreground"
            onClick={handleShare}
            aria-label="Share quote link"
          >
            <Share2 className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Share</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="min-h-[44px] gap-1.5 text-muted-foreground"
            aria-label="Download PDF"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline text-sm">Download PDF</span>
          </Button>

          <Button
            onClick={onPayClick}
            className="min-h-[44px] gap-2 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-transform font-semibold px-5"
          >
            <QrCode className="w-4 h-4" aria-hidden="true" />
            Pay {formatINR(grandTotal)}
          </Button>
        </div>
      </div>
    </header>
  )
}
