"use client"

import { ItemCard } from "./ItemCard"
import type { LineItem } from "../types"

interface ItemCardListProps {
  items: LineItem[]
}

export function ItemCardList({ items }: ItemCardListProps) {
  return (
    <section aria-label="Line items">
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-0.5">
        Items ({items.length})
      </h2>
      <div role="list" className="flex flex-col gap-3">
        {items.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
