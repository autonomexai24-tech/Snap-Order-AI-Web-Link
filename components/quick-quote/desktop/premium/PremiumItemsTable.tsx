import React from "react"
import type { LineItem, ComputedTotals } from "../../types"
import { formatINR } from "../../utils"

interface PremiumItemsTableProps {
  items: LineItem[];
  totals: ComputedTotals;
}

export function PremiumItemsTable({ items, totals }: PremiumItemsTableProps) {
  return (
    <section className="w-full mt-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest text-center">SN</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest">Description</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest">HSN</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest text-center">QTY</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest">UNIT</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest text-right">Rate</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest text-center">GST</th>
            <th className="py-2 px-4 text-xs font-semibold uppercase tracking-widest text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {items.map((item, index) => {
            const itemAmount = item.qty * item.rate
            return (
              <tr key={item.id}>
                <td className="py-3 px-4 text-center tabular-nums">{String(index + 1).padStart(2, '0')}</td>
                <td className="py-3 px-4 font-medium">{item.description}</td>
                <td className="py-3 px-4">{item.hsnCode}</td>
                <td className="py-3 px-4 text-center tabular-nums">{item.qty}</td>
                <td className="py-3 px-4">{item.unit}</td>
                <td className="py-3 px-4 text-right tabular-nums">{formatINR(item.rate)}</td>
                <td className="py-3 px-4 text-center">{item.gstRate}%</td>
                <td className="py-3 px-4 text-right tabular-nums font-semibold">{formatINR(itemAmount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
