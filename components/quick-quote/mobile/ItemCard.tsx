"use client"

import { formatINR, calcLineTotal } from "../utils"
import type { LineItem } from "../types"

interface ItemCardProps {
  item: LineItem
  index: number
}

export function ItemCard({ item, index }: ItemCardProps) {
  const lineTotal = calcLineTotal(item)

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-border p-4 flex flex-col gap-3 active:scale-[0.98] transition-transform"
      role="listitem"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <span className="min-w-[22px] h-[22px] rounded-full bg-[color:var(--brand-indigo-light)] text-[color:var(--brand-indigo)] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
            {index + 1}
          </span>
          <p className="text-sm font-semibold text-foreground leading-snug">
            {item.description}
          </p>
        </div>
        <p className="text-sm font-bold text-foreground tabular-nums flex-shrink-0">
          {formatINR(lineTotal)}
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap pl-7">
        <span className="text-xs font-mono bg-neutral-50 border border-border text-muted-foreground rounded px-2 py-0.5">
          HSN {item.hsnCode}
        </span>
        <span className="text-xs bg-neutral-50 border border-border text-muted-foreground rounded-full px-2 py-0.5">
          {item.unit}
        </span>
        <span className="text-xs bg-[color:var(--brand-amber-light)] text-[color:var(--brand-amber)] border border-[color:var(--brand-amber)]/20 rounded-full px-2 py-0.5 font-medium">
          GST {item.gstRate}%
        </span>
      </div>

      <div className="flex items-center gap-1 pl-7 text-xs text-muted-foreground">
        <span className="tabular-nums">
          {item.qty.toLocaleString("en-IN")} {item.unit}
        </span>
        <span className="text-muted-foreground/50">&times;</span>
        <span className="tabular-nums">{formatINR(item.rate)}</span>
        <span className="text-muted-foreground/50">=</span>
        <span className="tabular-nums font-medium text-foreground">{formatINR(lineTotal)}</span>
      </div>
    </div>
  )
}
