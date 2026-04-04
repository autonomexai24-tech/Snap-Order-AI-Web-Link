"use client"

import { ItemCard } from "./ItemCard"
import type { LineItem } from "../../../../types"

interface ItemCardListProps {
  items: LineItem[]
}

/**
 * ItemCardList — Clean Mobile
 *
 * Design principles:
 * - Direct vertical flow of cards instead of a horizontal table.
 * - Solid functional boundaries, separating items cleanly.
 */
export function ItemCardList({ items }: ItemCardListProps) {
  return (
    <section aria-label="Line items" className="flex flex-col gap-3 mt-2">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-sm font-bold tracking-tight text-neutral-900">
          Items
        </h3>
        <span className="text-xs font-medium text-neutral-500">
          {items.length} {items.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      <div role="list" className="flex flex-col gap-3">
        {items.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
