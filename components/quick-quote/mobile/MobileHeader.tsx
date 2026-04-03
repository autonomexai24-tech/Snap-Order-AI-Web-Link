"use client"

import { StatusBadge } from "../shared/StatusBadge"
import { formatDate } from "../utils"
import { Component } from "lucide-react"
import type { QuotationDocument } from "../types"

interface MobileHeaderProps {
  quote: QuotationDocument
}

/**
 * MobileHeader — Industrial Geometric Redesign
 * 
 * Translates the Desktop DocumentHeader completely:
 * - Pure white core.
 * - 18px top-border with Slate-900 / Polygon Slash / Orange-500.
 * - Massive text-tpl-primary Hero header.
 */
export function MobileHeader({ quote }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-20 pb-5 bg-white shadow-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-[280px] h-[180px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[85%] bg-tpl-secondary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        <div className="absolute top-0 right-0 w-[75%] h-[100%] bg-tpl-primary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 70%)' }} />
        <div className="absolute top-0 right-[15%] w-[60%] h-[60%] bg-tpl-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
      </div>

      <div className="flex items-start justify-between px-5 pt-10 pb-2 relative z-10">
        <div className="flex flex-col text-left">
          <div className="flex flex-col items-start mb-4">
            <h1 className="text-3xl font-black text-tpl-secondary tracking-tighter leading-none">
              QUOTATION
            </h1>
            <div className="h-[4px] w-14 bg-tpl-primary mt-1.5 shadow-sm" />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-8 h-8 bg-tpl-primary rounded flex items-center justify-center shrink-0 shadow-sm">
              <Component className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-black text-slate-800 tracking-tight leading-none">
                BHARAT STEEL
              </h2>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">
                Industrial Hardware
              </p>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <StatusBadge status={quote.status} />
        </div>
      </div>

      <div className="px-5 flex flex-col gap-1 mt-1 text-slate-800">
        <p className="text-sm font-bold font-mono tracking-widest text-tpl-secondary">
          {quote.documentNumber}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">
            Valid till {formatDate(quote.validUntil)}
          </p>
          {quote.poRef && (
            <p className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm">
              PO: {quote.poRef}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
