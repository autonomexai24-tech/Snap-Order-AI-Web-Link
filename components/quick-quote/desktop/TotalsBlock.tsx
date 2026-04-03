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
    <div className="flex justify-end mt-2 mb-2">
      <div className="w-full max-w-[420px] flex flex-col items-end">
        {/* Upper details (Right aligned, clean typography) */}
        <div className="w-full flex flex-col gap-3 mb-6 pr-4">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between"
            >
              <span
                className={[
                  "text-[12px] tracking-widest",
                  row.isMuted
                    ? "text-slate-400 font-semibold uppercase"
                    : "text-tpl-secondary font-bold uppercase",
                ].join(" ")}
              >
                {row.label}
              </span>
              <span
                className={[
                  "text-[15px] tabular-nums font-mono drop-shadow-sm",
                  row.isNegative
                    ? "text-red-500 font-bold"
                    : row.isMuted
                    ? "text-slate-500 font-medium"
                    : "font-bold text-tpl-secondary",
                ].join(" ")}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* 
          Full-width Orange color-block for the Grand Total 
          Pure White text for premium contrast
        */}
        <div className="w-full bg-tpl-primary shadow-lg flex items-center justify-between px-6 py-6 -mr-6 rounded-l-sm">
          <span className="text-[14px] font-extrabold text-white uppercase tracking-[0.15em] drop-shadow-sm">
            Total Due
          </span>
          <span className="text-2xl tabular-nums font-mono font-extrabold text-white drop-shadow-md">
            {formatINR(totals.grandTotal)}
          </span>
        </div>
      </div>
    </div>
  )
}
