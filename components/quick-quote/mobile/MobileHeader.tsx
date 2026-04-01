"use client"

import { StatusBadge } from "../shared/StatusBadge"
import { formatDate } from "../utils"
import type { QuotationDocument } from "../types"

interface MobileHeaderProps {
  quote: QuotationDocument
}

export function MobileHeader({ quote }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        <span className="text-lg font-bold text-primary tracking-tight">
          Quotation
        </span>
        <StatusBadge status={quote.status} />
      </div>

      <div className="px-4 pb-3 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <p className="text-xs font-mono text-muted-foreground">
            {quote.documentNumber}
          </p>
          <p className="text-xs text-muted-foreground">
            Valid till {formatDate(quote.validUntil)}
          </p>
        </div>
        {quote.poRef && (
          <p className="text-xs text-muted-foreground bg-neutral-50 border border-border rounded-md px-2 py-1">
            PO: {quote.poRef}
          </p>
        )}
      </div>
    </header>
  )
}
