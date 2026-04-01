"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { QuoteStatus } from "../types"

interface StatusBadgeProps {
  status: QuoteStatus
  className?: string
}

const STATUS_CONFIG: Record<
  QuoteStatus,
  { label: string; className: string }
> = {
  draft: {
    label: "Draft",
    className: "bg-neutral-100 text-neutral-600 border-neutral-200",
  },
  sent: {
    label: "Sent",
    className:
      "bg-[color:var(--brand-indigo-light)] text-[color:var(--brand-indigo)] border-[color:var(--brand-indigo)]/20",
  },
  accepted: {
    label: "Accepted",
    className:
      "bg-[color:var(--brand-success-light)] text-[color:var(--brand-success)] border-[color:var(--brand-success)]/20",
  },
  paid: {
    label: "Paid",
    className:
      "bg-[color:var(--brand-success-light)] text-[color:var(--brand-success)] border-[color:var(--brand-success)]/20 font-semibold",
  },
  expired: {
    label: "Expired",
    className:
      "bg-red-50 text-red-600 border-red-200",
  },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status]
  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs font-medium px-2.5 py-0.5 rounded-full border",
        config.className,
        className
      )}
    >
      {config.label}
    </Badge>
  )
}
