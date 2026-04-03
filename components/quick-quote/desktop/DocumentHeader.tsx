"use client"

import { StatusBadge } from "../shared/StatusBadge"
import { Component } from "lucide-react"
import type { Quote } from "../types"

interface DocumentHeaderProps {
  quote: Quote
}

export function DocumentHeader({ quote }: DocumentHeaderProps) {
  return (
    <div className="relative shrink-0 min-h-[160px] pb-8 bg-white">
      {/* 
        Modern Geometric Corner Mesh
        Utilizes overlapping CSS clip-paths to simulate the reference image's triangle pattern.
      */}
      <div className="absolute top-0 right-0 w-[450px] h-[280px] pointer-events-none z-0">
        {/* Deep Navy Backdrop */}
        <div className="absolute top-0 right-0 w-full h-[85%] bg-tpl-secondary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        {/* Vibrant Primary Spear */}
        <div className="absolute top-0 right-0 w-[75%] h-[100%] bg-tpl-primary" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 70%)' }} />
        {/* Accent Mid-tone Triangle */}
        <div className="absolute top-0 right-[15%] w-[60%] h-[60%] bg-tpl-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
        {/* Light Overlay Detail */}
        <div className="absolute top-[15%] right-[25%] w-[35%] h-[40%] bg-white/10 backdrop-blur-sm" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
      </div>

      {/* Foreground Content */}
      <div className="relative px-12 pt-14 flex items-start justify-between gap-6">
        {/* Left: Dynamic Company Logo */}
        <div className="flex items-center gap-3 mt-1">
          <div className="w-12 h-12 bg-tpl-primary rounded flex items-center justify-center shrink-0 shadow-md">
            <Component className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <h2 className="text-xl font-black text-slate-800 tracking-tight leading-none">
              BHARAT STEEL
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
              Industrial Hardware
            </p>
          </div>
        </div>

        {/* Right: The 'QUOTATION' Hero Title */}
        <div className="flex flex-col items-end text-right z-10">
          <div className="flex flex-col items-end mb-4">
            <h1 className="text-[42px] font-black text-tpl-secondary tracking-tighter leading-none">
              QUOTATION
            </h1>
            <div className="h-[5px] w-20 bg-tpl-primary mt-2 mr-0.5 shadow-sm" />
          </div>
          
          <div className="flex items-center justify-end gap-3 mt-1">
            <span className="text-xl font-bold font-mono text-tpl-secondary">
              {quote.documentNumber}
            </span>
            <StatusBadge status={quote.status} />
          </div>
        </div>
      </div>
    </div>
  )
}
