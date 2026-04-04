"use client"

import { Building2 } from "lucide-react"
import type { BankDetails } from "../../../../types"

interface BankDetailsBlockProps {
  bankDetails: BankDetails
}

export function BankDetailsBlock({ bankDetails }: BankDetailsBlockProps) {
  return (
    <div className="border border-border bg-white mt-4">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border bg-neutral-50">
        <Building2 className="w-4 h-4 text-slate-800" aria-hidden="true" />
        <span className="text-sm font-bold text-tpl-secondary uppercase tracking-widest">Bank Details</span>
        <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold ml-2">
          (NEFT / RTGS / IMPS)
        </span>
      </div>

      <div className="px-6 py-5 bg-white">
        <div className="grid grid-cols-3 gap-y-6 gap-x-8">
          {[
            { label: "Account Holder", value: bankDetails.accountHolder },
            { label: "Bank Name", value: bankDetails.bankName },
            { label: "Account Number", value: bankDetails.accountNumber, mono: true, large: true },
            { label: "IFSC Code", value: bankDetails.ifsc, mono: true, bold: true },
            { label: "Branch", value: bankDetails.branch },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                {field.label}
              </p>
              <p
                className={[
                  "text-sm text-tpl-secondary",
                  field.mono ? "font-mono tracking-wider" : "font-medium",
                  field.large ? "text-[15px] font-bold" : "",
                  field.bold ? "font-bold text-emerald-800" : ""
                ].filter(Boolean).join(" ")}
              >
                {field.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
