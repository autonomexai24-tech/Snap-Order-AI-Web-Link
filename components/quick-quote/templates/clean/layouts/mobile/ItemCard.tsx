"use client"

import { formatINR, calcLineTotal } from "../../../../utils"
import type { LineItem } from "../../../../types"

interface ItemCardProps {
  item: LineItem
  index: number // Only kept for prop compatibility
}

/**
 * ItemCard — Clean Mobile
 *
 * Design principles:
 * - Explicit borders around cards, avoiding any empty whitespace ghost logic.
 * - Plain typography layout: Item name top left, amount bottom right or right aligned.
 */
export function ItemCard({ item }: ItemCardProps) {
  const lineTotal = calcLineTotal(item)

  return (
    <div
      className="bg-white rounded-lg border border-neutral-200 p-4 flex flex-col gap-3"
      role="listitem"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold text-neutral-900 leading-snug">
          {item.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-1">
        <p className="text-xs font-medium text-neutral-500 flex items-center gap-1.5">
          <span className="tabular-nums">
            {item.qty.toLocaleString("en-IN")} {item.unit}
          </span>
          <span className="text-neutral-300">×</span>
          <span className="tabular-nums text-neutral-500">
            {formatINR(item.rate)}
          </span>
        </p>
        <p className="text-sm font-bold tabular-nums text-neutral-900">
          {formatINR(lineTotal)}
        </p>
      </div>
    </div>
  )
}
