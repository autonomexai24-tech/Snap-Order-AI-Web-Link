"use client"

import { ItemCard } from "./ItemCard"
import { calcLineTotal } from "../utils"
import type { LineItem } from "../types"

interface ItemCardListProps {
  items: LineItem[]
}

/**
 * ItemCardList — Focuses on the "Ghost Row" table approach visually.
 *
 * Design principles:
 * - Flush alignment to allow alternating stripes in child components.
 * - Bold 'Item Description' and 'Amount' pseudo-header mimicking the visual reference.
 */
export function ItemCardList({ items }: ItemCardListProps) {
  const subtotal = items.reduce((sum, item) => sum + calcLineTotal(item), 0)

  return (
    <section aria-label="Line items" className="mt-2 text-slate-800">
      
      {/* Pseudo-Header: Split Colorway Mimicking Desktop */}
      <div className="flex w-full px-4 pt-4 pb-2">
        <div className="flex items-center px-4 py-2.5 bg-tpl-secondary rounded-l-md flex-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">
            Item Description
          </span>
        </div>
        <div className="flex items-center justify-end px-4 py-2.5 bg-tpl-primary rounded-r-md min-w-[100px]">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">
            Amount
          </span>
        </div>
      </div>

      {/* Item rows sitting flush together */}
      <div role="list" className="flex flex-col rounded-b-xl overflow-hidden shadow-sm border border-slate-100 bg-white">
        {items.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Basic subtotal line before the big banner handles the Grand Total */}
      <div className="flex items-center justify-between px-6 mt-4 pt-4 border-t border-slate-200">
        <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Subtotal
        </span>
        <span className="text-sm font-bold tabular-nums text-slate-800">
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
