"use client"

import { formatINR, calcLineTotal } from "../utils"
import type { LineItem } from "../types"

interface ItemCardProps {
  item: LineItem
  index: number
}

/**
 * ItemCard — Ghost Row (Visual Reference Translation)
 *
 * Design principles:
 * - Pure whitespace background, completely devoid of boxes or shadows.
 * - Extremely minimal, alternating faint stripe effect (via parent) or just white.
 * - Bold Slate Item Name, Bold emerald-like accent on Price.
 * - Qty x Rate is small and neatly tucked under the title.
 */
export function ItemCard({ item, index }: ItemCardProps) {
  const lineTotal = calcLineTotal(item)

  return (
    <div
      className="bg-white px-6 py-4 flex items-start justify-between border-b border-slate-100 cursor-default select-none transition-colors"
      role="listitem"
    >
      <div className="flex flex-col gap-1 flex-1 pr-4">
        <p className="text-base font-bold text-slate-800 leading-tight">
          {item.description}
        </p>
        <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
          <span className="tabular-nums font-mono">
            {item.qty.toLocaleString("en-IN")} {item.unit}
          </span>
          <span className="text-slate-300">×</span>
          <span className="tabular-nums font-mono text-slate-400">
            {formatINR(item.rate)}
          </span>
        </p>
      </div>

      <div className="flex-shrink-0 text-right pt-0.5">
        <p className="text-sm font-bold font-mono tabular-nums text-tpl-secondary">
          {formatINR(lineTotal)}
        </p>
      </div>
    </div>
  )
}
