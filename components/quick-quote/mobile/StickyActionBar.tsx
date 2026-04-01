"use client"

import { useState } from "react"
import { Share2, Download, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatINR, buildUpiUri, buildPhonePeUri, buildGPayUri, buildPaytmUri } from "../utils"
import type { Quote } from "../types"

interface StickyActionBarProps {
  quote: Quote
  grandTotal: number
}

export function StickyActionBar({ quote, grandTotal }: StickyActionBarProps) {
  const [isUpiExpanded, setIsUpiExpanded] = useState(false)

  const upiParams = {
    upiId: quote.upiId,
    name: quote.upiName,
    amount: grandTotal,
    txnRef: quote.quoteNumber,
    note: "Payment for " + quote.quoteNumber,
  }

  const upiApps = [
    {
      name: "PhonePe",
      href: buildPhonePeUri(upiParams),
      bgClass: "bg-[color:var(--upi-purple)]",
      textClass: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 7.5h-2.25v5.25l-4.5-5.25H7.5v9h2.25V11.25l4.5 5.25H16.5v-9z" />
        </svg>
      ),
    },
    {
      name: "GPay",
      href: buildGPayUri(upiParams),
      bgClass: "bg-white border border-border",
      textClass: "text-[color:var(--upi-blue)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path d="M12 11.5v1.5h3.5c-.14.9-.56 1.66-1.2 2.18l1.93 1.5C17.4 15.6 18 13.9 18 12c0-.5-.04-1-.12-1.5H12v1z" fill="#4285F4"/>
          <path d="M6.5 14.16l.44.37 1.56-1.21A5.5 5.5 0 0 1 8 12a5.5 5.5 0 0 1 .5-2.32L7 8.47A7.5 7.5 0 0 0 6.5 12c0 .76.1 1.5.28 2.16H6.5z" fill="#FBBC05"/>
          <path d="M12 6.5c1.24 0 2.36.44 3.24 1.16l1.42-1.42A7.5 7.5 0 0 0 12 4.5a7.5 7.5 0 0 0-6.5 3.77l1.76 1.37A5.5 5.5 0 0 1 12 6.5z" fill="#EA4335"/>
          <path d="M12 17.5a5.5 5.5 0 0 1-4.74-2.74L5.5 16.13A7.5 7.5 0 0 0 12 19.5a7.5 7.5 0 0 0 5-1.9l-1.93-1.5c-.74.57-1.7.9-3.07.4z" fill="#34A853"/>
        </svg>
      ),
    },
    {
      name: "Paytm",
      href: buildPaytmUri(upiParams),
      bgClass: "bg-[color:var(--upi-blue)]",
      textClass: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9zM8.5 14.5V9.5h2v5h-2zm3 0V9.5h2v5h-2zm3 0V9.5h2v5h-2z" />
        </svg>
      ),
    },
    {
      name: "Any UPI",
      href: buildUpiUri(upiParams),
      bgClass: "bg-neutral-100 border border-border",
      textClass: "text-foreground",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
  ]

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "Quote " + quote.quoteNumber,
        text: "Review and pay your quotation from " + quote.seller.name,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      {isUpiExpanded && (
        <div className="bg-white border-t border-border px-4 py-5">
          <p className="text-xs text-center text-muted-foreground mb-4 font-medium uppercase tracking-wide">
            Choose payment app
          </p>
          <div className="grid grid-cols-4 gap-3">
            {upiApps.map((app) => (
              <a
                key={app.name}
                href={app.href}
                className={[
                  "flex flex-col items-center gap-2 rounded-2xl py-3 min-h-[72px] justify-center",
                  "active:scale-[0.97] transition-transform",
                  app.bgClass,
                  app.textClass,
                ].join(" ")}
                aria-label={"Pay via " + app.name}
              >
                {app.icon}
                <span className={"text-xs font-medium " + app.textClass}>
                  {app.name}
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs text-center text-muted-foreground mt-3">
            UPI ID:{" "}
            <span className="font-mono font-semibold text-foreground">
              {quote.upiId}
            </span>
          </p>
        </div>
      )}

      <div className="bg-white border-t border-border px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="min-h-[48px] min-w-[48px] rounded-xl"
            onClick={handleShare}
            aria-label="Share quote"
          >
            <Share2 className="w-4 h-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="min-h-[48px] min-w-[48px] rounded-xl"
            aria-label="Download PDF"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <Button
          className="flex-1 min-h-[48px] rounded-xl bg-primary text-primary-foreground font-semibold text-sm active:scale-[0.98] transition-transform gap-2"
          onClick={() => setIsUpiExpanded((prev) => !prev)}
        >
          {isUpiExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" aria-hidden="true" />
              Hide
            </>
          ) : (
            "Pay " + formatINR(grandTotal) + " via UPI"
          )}
        </Button>
      </div>
    </div>
  )
}
