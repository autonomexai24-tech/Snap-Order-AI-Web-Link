"use client"

import { StatusBadge } from "../../../../shared/StatusBadge"
import { formatDate } from "../../../../utils"
import { Component } from "lucide-react"
import type { QuotationDocument } from "../../../../types"

interface MobileHeaderProps {
  quote: QuotationDocument
}

/**
 * MobileHeader — Clean Layout
 * 
 * Design Principles:
 * - Functional and minimal, matching Clean Desktop standard.
 * - Solid white background, simple border, dark typography.
 * - No geometric backgrounds or abstract styling.
 */
export function MobileHeader({ quote }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-neutral-200">
      <div className="flex flex-col px-4 pt-6 pb-4">
        {/* Company Identity */}
        <div className="flex flex-row items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-neutral-900 rounded-md flex items-center justify-center shrink-0">
              <Component className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-neutral-900 leading-tight">
                {quote.seller.name}
              </h1>
            </div>
          </div>
          <StatusBadge status={quote.status} />
        </div>

        {/* Document Meta */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">
            Quotation
          </h2>
          <p className="text-sm font-mono text-neutral-600 font-bold mb-1">
            {quote.documentNumber}
          </p>
          <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
            <span>Valid till {formatDate(quote.validUntil)}</span>
            {quote.poRef && (
              <span className="bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-sm">
                PO: {quote.poRef}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
