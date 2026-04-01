"use client"

import type { Party } from "../types"

interface PartyCardMobileProps {
  seller: Party
  buyer: Party
}

function PartyMiniCard({ label, party }: { label: string; party: Party }) {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-sm border border-border p-4">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        {label}
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-foreground leading-tight">{party.name}</p>
        <p className="text-xs text-muted-foreground">
          {party.city}, {party.state}
        </p>
        <span className="text-xs font-mono text-muted-foreground bg-neutral-50 border border-border rounded px-1.5 py-0.5 w-fit">
          {party.gstin}
        </span>
      </div>
    </div>
  )
}

export function PartyCardMobile({ seller, buyer }: PartyCardMobileProps) {
  return (
    <div className="flex flex-col gap-3">
      <PartyMiniCard label="From" party={seller} />
      <PartyMiniCard label="Bill To" party={buyer} />
    </div>
  )
}
