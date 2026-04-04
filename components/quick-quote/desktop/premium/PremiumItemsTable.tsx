import React from "react"
import type { LineItem, ComputedTotals } from "../../types"
import { formatINR } from "../../utils"

interface PremiumItemsTableProps {
  items: LineItem[];
  totals: ComputedTotals;
}

export function PremiumItemsTable({ items, totals }: PremiumItemsTableProps) {
  return (
    <section className="w-full mt-4 mb-2">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-tpl-primary/30 text-tpl-secondary">
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-center opacity-80">SN</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Description</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">HSN</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-center opacity-80">QTY</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">UNIT</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-right opacity-80">Rate</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-center opacity-80">GST</th>
            <th className="py-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-right opacity-80">Amount</th>
          </tr>
        </thead>
        <tbody className="text-sm text-slate-700">
          {items.map((item, index) => {
            const itemAmount = item.qty * item.rate
            return (
              <tr key={item.id} className="border-b border-slate-100/50 hover:bg-slate-50/50 transition-colors">
                <td className="py-5 px-4 text-center tabular-nums font-mono text-xs opacity-50">{String(index + 1).padStart(2, '0')}</td>
                <td className="py-5 px-4 font-medium text-slate-800">{item.description}</td>
                <td className="py-5 px-4 text-xs font-mono opacity-70">{item.hsnCode}</td>
                <td className="py-5 px-4 text-center tabular-nums font-medium">{item.qty}</td>
                <td className="py-5 px-4 text-xs opacity-80">{item.unit}</td>
                <td className="py-5 px-4 text-right tabular-nums text-slate-600">{formatINR(item.rate)}</td>
                <td className="py-5 px-4 text-center text-xs opacity-70">{item.gstRate}%</td>
                <td className="py-5 px-4 text-right tabular-nums font-bold text-tpl-secondary">{formatINR(itemAmount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
