"use client"

import { ItemCard } from "./ItemCard"
import { calcLineTotal } from "../utils"
import type { LineItem } from "../types"

interface ItemCardListProps {
  items: LineItem[]
}

/**
 * ItemCardList — Premium Receipt style (Mobile Specialist v2)
 *
 * Design principles:
 * - Hairline 1px dividers between rows, NOT around the section block
 * - Section label: ultra-light overline — emerald dot + "ITEMS (n)" in slate-500
 * - No cards, no shadows → the list breathes like a Michelin receipt
 * - Subtotal row pinned at bottom — slate text | emerald amount
 */
export function ItemCardList({ items }: ItemCardListProps) {
  const subtotal = items.reduce((sum, item) => sum + calcLineTotal(item), 0)

  return (
    <section aria-label="Line items">
      {/* Overline header */}
      <div className="flex items-center gap-1.5 mb-1" aria-hidden="true">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "var(--emerald-500, #10b981)" }}
        />
        <h2
          className="text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--slate-400, #94a3b8)" }}
        >
          Items ({items.length})
        </h2>
      </div>

      {/* Hairline top edge */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: "var(--slate-100, #f1f5f9)" }}
        aria-hidden="true"
      />

      {/* Item rows — separated by hairlines */}
      <div role="list">
        {items.map((item, index) => (
          <div key={item.id}>
            <ItemCard item={item} index={index} />
            {/* Hairline divider — skips after the last item */}
            {index < items.length - 1 && (
              <div
                className="w-full h-px"
                style={{ backgroundColor: "var(--slate-100, #f1f5f9)" }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {/* Subtotal footer row */}
      <div
        className="flex items-center justify-between pt-3 pb-1 border-t"
        style={{ borderColor: "var(--slate-200, #e2e8f0)" }}
      >
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--slate-400, #94a3b8)" }}
        >
          Subtotal
        </span>
        <span
          className="text-sm font-bold tabular-nums"
          style={{ color: "var(--slate-700, #334155)" }}
        >
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
          }).format(subtotal)}
        </span>
      </div>
    </section>
  )
}
