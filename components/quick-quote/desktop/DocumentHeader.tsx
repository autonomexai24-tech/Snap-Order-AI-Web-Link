"use client"

import { StatusBadge } from "../shared/StatusBadge"
import type { Quote } from "../types"

interface DocumentHeaderProps {
  quote: Quote
}

export function DocumentHeader({ quote }: DocumentHeaderProps) {
  return (
    <div className="px-10 py-8 border-b border-border flex items-start justify-between gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary tracking-tight">
            QuickQuote
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Digital Quotation Platform
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-foreground font-mono tracking-tight">
            {quote.quoteNumber}
          </h1>
          <StatusBadge status={quote.status} />
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          Quotation
        </p>
      </div>
    </div>
  )
}
