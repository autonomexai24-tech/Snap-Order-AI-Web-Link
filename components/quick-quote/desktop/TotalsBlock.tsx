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
    {
      label: "Grand Total",
      value: formatINR(totals.grandTotal),
      isGrand: true,
    },
  ]

  return (
    <div className="flex justify-end">
      <div className="w-full max-w-[360px] border border-border rounded-lg overflow-hidden">
        <div className="flex flex-col divide-y divide-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className={[
                "flex items-center justify-between px-5",
                row.isGrand
                  ? "py-4 bg-primary"
                  : "py-2.5 bg-white",
              ].join(" ")}
            >
              <span
                className={[
                  "text-sm",
                  row.isGrand
                    ? "font-bold text-primary-foreground"
                    : row.isMuted
                    ? "text-muted-foreground"
                    : "text-foreground font-medium",
                ].join(" ")}
              >
                {row.label}
              </span>
              <span
                className={[
                  "text-sm tabular-nums",
                  row.isGrand
                    ? "font-bold text-primary-foreground text-base"
                    : row.isNegative
                    ? "text-red-600 font-medium"
                    : row.isMuted
                    ? "text-muted-foreground"
                    : "font-semibold text-foreground",
                ].join(" ")}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
