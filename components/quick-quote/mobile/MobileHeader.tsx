"use client"

import { StatusBadge } from "../shared/StatusBadge"
import { formatDate } from "../utils"
import type { QuotationDocument } from "../types"

interface MobileHeaderProps {
  quote: QuotationDocument
}

/**
 * MobileHeader — Visual Reference Translation
 * 
 * Design Principles:
 * - Bold, asymmetrical color-blocking mimicking high-end invoice templates.
 * - Entirely avoids black. Uses a vibrant, unique Emerald/Teal gradient header.
 * - High-contrast white typography.
 */
export function MobileHeader({ quote }: MobileHeaderProps) {
  return (
    <header 
      className="sticky top-0 z-20 pb-6 rounded-b-[2rem] shadow-md overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
      }}
    >
      <div className="flex items-center justify-between px-6 pt-5 pb-4">
        <h1 className="text-2xl font-black text-white tracking-widest uppercase">
          Quotation
        </h1>
        {/* We keep StatusBadge but wrapped nicely over the vibrant background */}
        <div className="bg-white/20 backdrop-blur-md rounded-full px-1 py-0.5">
          <StatusBadge status={quote.status} />
        </div>
      </div>

      <div className="px-6 flex flex-col gap-1 text-emerald-50">
        <p className="text-sm font-bold tracking-widest text-emerald-200">
          DOC ID: {quote.documentNumber}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium">
            Valid till {formatDate(quote.validUntil)}
          </p>
          {quote.poRef && (
            <p className="text-xs font-semibold bg-white/10 px-2 py-0.5 rounded-sm">
              PO: {quote.poRef}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
