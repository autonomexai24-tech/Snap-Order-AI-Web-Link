"use client"

import { formatINR } from "../utils"
import type { ComputedTotals } from "../types"

interface TotalsBlockProps {
  totals: ComputedTotals
}

interface TotalRow {
  label: string
  value: string
  isGrand?: boolean
  isMuted?: boolean
  isNegative?: boolean
}

export function TotalsBlock({ totals }: TotalsBlockProps) {
  const rows: TotalRow[] = [
    { label: "Subtotal", value: formatINR(totals.subTotal) },
    ...(totals.discountAmount > 0
      ? [
          {
            label: "Discount",
            value: "- " + formatINR(totals.discountAmount),
            isNegative: true,
          },
          {
            label: "Taxable Amount",
            value: formatINR(totals.taxableAmount),
            isMuted: false,
          },
        ]
      : []),
    ...(!totals.igst
      ? [
          {
            label: "CGST",
            value: formatINR(totals.cgst),
            isMuted: true,
          },
          {
            label: "SGST",
            value: formatINR(totals.sgst),
            isMuted: true,
          },
        ]
      : [
          {
            label: "IGST",
            value: formatINR(totals.igst),
            isMuted: true,
          },
        ]),
    {
      label: "Total GST",
      value: formatINR(totals.totalGst),
    },
  ]

  return (
    <div className="flex justify-end mt-2">
      {/* Container max-w matching GSTBreakupTable or slightly tighter, flush to right edge natively or fixed width. Let's fix width. */}
      <div className="w-full max-w-[420px] border border-border bg-white flex flex-col">
        {/* Upper details */}
        <div className="flex flex-col divide-y divide-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between px-6 py-2.5 bg-white"
            >
              <span
                className={[
                  "text-[13px] tracking-wide",
                  row.isMuted
                    ? "text-muted-foreground font-medium"
                    : "text-slate-700 font-semibold uppercase",
                ].join(" ")}
              >
                {row.label}
              </span>
              <span
                className={[
                  "text-sm tabular-nums font-mono",
                  row.isNegative
                    ? "text-red-600 font-semibold"
                    : row.isMuted
                    ? "text-muted-foreground font-medium"
                    : "font-semibold text-slate-900",
                ].join(" ")}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Full-width Emerald Green color-block for the Grand Total */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#059669] text-white">
          <span className="text-[14px] font-bold uppercase tracking-widest">
            Grand Total
          </span>
          <span className="text-xl tabular-nums font-mono font-bold text-emerald-50">
            {formatINR(totals.grandTotal)}
          </span>
        </div>
      </div>
    </div>
  )
}
