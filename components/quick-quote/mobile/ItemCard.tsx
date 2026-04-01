"use client"

import { formatINR, calcLineTotal } from "../utils"
import type { LineItem } from "../types"

interface ItemCardProps {
  item: LineItem
  index: number
}

/**
 * ItemCard — Premium Receipt style (Mobile Specialist Stage 3)
 *
 * Design principles:
 * - Pure typographic structural layout with zero borders or shadows.
 * - Heavy top padding for generous negative space.
 * - Bold Slate Item Name, Bold Emerald far-right Total on row 1.
 * - Muted Qty x Rate as sub-line on row 2.
 */
export function ItemCard({ item, index }: ItemCardProps) {
  const lineTotal = calcLineTotal(item)

  return (
    <div
      className="pt-6 pb-2 cursor-default select-none flex flex-col gap-1"
      role="listitem"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-base font-bold leading-snug text-slate-900 tracking-tight flex-1">
          {item.description}
        </p>
        <p className="text-base font-bold tabular-nums text-emerald-600 flex-shrink-0">
          {formatINR(lineTotal)}
        </p>
      </div>

      <div className="flex items-center text-sm text-slate-500">
        <span className="tabular-nums">
          {item.qty.toLocaleString("en-IN")}
        </span>
        <span className="mx-1.5 text-slate-300">×</span>
        <span className="tabular-nums">
          {formatINR(item.rate)}
        </span>
      </div>
    </div>
  )
}
