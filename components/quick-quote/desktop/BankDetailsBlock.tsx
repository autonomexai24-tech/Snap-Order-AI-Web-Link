"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Building2 } from "lucide-react"
import type { BankDetails } from "../types"

interface BankDetailsBlockProps {
  bankDetails: BankDetails
}

export function BankDetailsBlock({ bankDetails }: BankDetailsBlockProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors min-h-[44px]"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-sm font-medium text-foreground">Bank Details</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            — NEFT / RTGS / IMPS
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="px-5 py-4 border-t border-border bg-white">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Account Holder", value: bankDetails.accountHolder },
              { label: "Bank Name", value: bankDetails.bankName },
              { label: "Account Number", value: bankDetails.accountNumber, mono: true },
              { label: "IFSC Code", value: bankDetails.ifsc, mono: true },
              { label: "Branch", value: bankDetails.branch },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-0.5">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {field.label}
                </p>
                <p
                  className={[
                    "text-sm font-medium text-foreground",
                    field.mono ? "font-mono tracking-wide" : "",
                  ].join(" ")}
                >
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
