"use client"

import { formatDate } from "../utils"
import type { Quote } from "../types"

interface QuoteMetaProps {
  quote: Quote
}

export function QuoteMeta({ quote }: QuoteMetaProps) {
  const fields = [
    { label: "Issue Date", value: formatDate(quote.issuedAt) },
    { label: "Valid Until", value: formatDate(quote.validUntil) },
    ...(quote.poRef ? [{ label: "PO Reference", value: quote.poRef }] : []),
    {
      label: "Supply State",
      value: quote.isInterState ? "Inter-State" : "Intra-State (Maharashtra)",
    },
  ]

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3 p-4 bg-neutral-50 rounded-lg border border-border">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col gap-0.5 min-w-[120px]">
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            {field.label}
          </p>
          <p className="text-sm font-semibold text-foreground">{field.value}</p>
        </div>
      ))}
    </div>
  )
}
