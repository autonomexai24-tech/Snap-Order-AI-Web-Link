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
 * - Massive text-orange-500 Hero header.
 */
export function MobileHeader({ quote }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-20 pb-5 bg-white shadow-sm overflow-hidden">
      {/* 
        The Exact 18px Top Border replicated from DocumentHeader.tsx 
      */}
      <div className="absolute top-0 left-0 w-full h-[18px] flex">
        <div className="w-[35%] h-full bg-slate-900" />
        <div 
          className="w-[25px] h-full bg-slate-900" 
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div className="flex-1 h-full bg-orange-500" />
      </div>

      <div className="flex items-start justify-between px-5 pt-10 pb-2">
        <div className="flex flex-col text-left">
          <h1 className="text-3xl font-black text-orange-500 tracking-tighter leading-none mb-3">
            QUOTATION
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center shrink-0 shadow-sm">
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
        <p className="text-sm font-bold font-mono tracking-widest text-slate-900">
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
