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
        Simple but Premium Top Border 
        Instead of a massive block, this provides a sharp, 
        tailored graphic accent at the very top edge.
      */}
      <div className="absolute top-0 left-0 w-full h-[18px] flex">
        <div className="w-[35%] h-full bg-tpl-secondary" />
        <div 
          className="w-[25px] h-full bg-tpl-secondary" 
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div className="flex-1 h-full bg-tpl-primary" />
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
        <div className="flex flex-col items-end text-right">
          <h1 className="text-[42px] font-black text-tpl-primary tracking-tighter leading-none mb-3">
            QUOTATION
          </h1>
          
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
