"use client"

import { StatusBadge } from "../shared/StatusBadge"
import type { Quote } from "../types"

interface DocumentHeaderProps {
  quote: Quote
}

export function DocumentHeader({ quote }: DocumentHeaderProps) {
  return (
    <div className="relative overflow-hidden shrink-0 min-h-[160px] pb-6">
      {/* 
        Angled Geometric Background 
        - Deep Navy (#1E3A8A) primary wedge
        - Vibrant Amber (#F59E0B) secondary peak
      */}
      <div 
        className="absolute inset-x-0 top-0 h-[240px] bg-[#F59E0B] z-0" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 95%)" }} 
      />
      <div 
        className="absolute inset-x-0 top-0 h-[240px] bg-[#1E3A8A] z-0" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 85%)" }} 
      />
      
      {/* Amber Triangles Pattern Overlay */}
      <svg
        className="absolute inset-x-0 top-0 h-[240px] w-full z-0 opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 85%)" }}
      >
        <defs>
          <pattern id="amber-triangles" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="0,40 20,0 40,40" fill="none" stroke="#F59E0B" strokeWidth="1" />
            <polygon points="0,0 20,40 40,0" fill="none" stroke="#FBBF24" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#amber-triangles)" />
      </svg>

      {/* Foreground Content */}
      <div className="relative z-10 px-10 pt-10 flex items-start justify-between gap-4">
        {/* Left: Brand Identity in White */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
              Quotation
            </span>
          </div>
          <p className="text-sm font-medium text-amber-300 mt-1 uppercase tracking-widest">
            Digital Platform
          </p>
        </div>

        {/* Right: Meta Info (Needs dark contrast since it aligns against the Navy) */}
        <div className="flex flex-col items-end gap-2 text-white">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold font-mono tracking-tight text-white drop-shadow-sm">
              {quote.documentNumber}
            </h1>
            <StatusBadge status={quote.status} />
          </div>
          <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mt-1">
            Reference Document
          </p>
        </div>
      </div>
    </div>
  )
}
