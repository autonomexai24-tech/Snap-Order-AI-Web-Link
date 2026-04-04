"use client"

import { StatusBadge } from "../../../../shared/StatusBadge"
import { Component } from "lucide-react"
import type { QuotationDocument } from "../../../../types"

interface DocumentHeaderProps {
  quote: QuotationDocument
}

export function DocumentHeader({ quote }: DocumentHeaderProps) {
  return (
    <div className="shrink-0 bg-white border-b border-slate-200">
      <div className="px-12 pt-14 pb-8 flex items-start justify-between gap-6">
        {/* Left: Dynamic Company Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border border-slate-200 rounded flex items-center justify-center shrink-0">
            <Component className="w-6 h-6 text-tpl-primary" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-xl font-black text-slate-800 tracking-tight leading-none uppercase">
              BHARAT STEEL
            </h2>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1.5 ml-0.5">
              Industrial Hardware
            </p>
          </div>
        </div>

        {/* Right: The 'QUOTATION' Hero Title */}
        <div className="flex flex-col items-end text-right">
          <h1 className="text-4xl font-light text-slate-400 tracking-wider uppercase mb-3">
            Quotation
          </h1>
          
          <div className="flex items-center justify-end gap-3">
            <span className="text-lg font-medium font-mono text-slate-900">
              {quote.documentNumber}
            </span>
            <StatusBadge status={quote.status} />
          </div>
        </div>
      </div>
    </div>
  )
}
