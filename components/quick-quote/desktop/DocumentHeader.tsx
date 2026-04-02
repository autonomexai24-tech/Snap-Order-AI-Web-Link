"use client"

import { StatusBadge } from "../shared/StatusBadge"
import type { Quote } from "../types"

interface DocumentHeaderProps {
  quote: Quote
}

export function DocumentHeader({ quote }: DocumentHeaderProps) {
  return (
    <div className="relative shrink-0 min-h-[160px] pb-8 bg-white">
      {/* 
        Simple but Premium Top Border 
        Instead of a massive block, this provides a sharp, 
        tailored graphic accent at the very top edge.
      */}
      <div className="absolute top-0 left-0 w-full h-[18px] flex">
        <div className="w-[35%] h-full bg-slate-900" />
        <div 
          className="w-[25px] h-full bg-slate-900" 
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div className="flex-1 h-full bg-orange-500" />
      </div>

      {/* Foreground Content */}
      <div className="relative px-12 pt-14 flex items-start justify-between gap-6">
        {/* Left: Metadata / Brand Tagline */}
        <div className="flex flex-col gap-1 mt-1">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
            Digital Platform
          </h2>
          <p className="text-xs font-semibold text-slate-500 mt-0.5 tracking-wider">
            Reference Document
          </p>
        </div>

        {/* Right: The 'QUOTATION' Hero Title */}
        <div className="flex flex-col items-end text-right">
          <h1 className="text-[42px] font-black text-orange-500 tracking-tighter leading-none mb-3">
            QUOTATION
          </h1>
          
          <div className="flex items-center justify-end gap-3 mt-1">
            <span className="text-xl font-bold font-mono text-slate-900">
              {quote.documentNumber}
            </span>
            <StatusBadge status={quote.status} />
          </div>
        </div>
      </div>
    </div>
  )
}
