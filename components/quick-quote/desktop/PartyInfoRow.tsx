"use client"

import type { Party } from "../types"

interface PartyInfoRowProps {
  seller: Party
  buyer: Party
}

function PartyBlock({ label, party }: { label: string; party: Party }) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        {label}
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold text-foreground leading-tight">
          {party.name}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {party.address}
          <br />
          {party.city}, {party.state} — {party.pincode}
        </p>
        <p className="text-xs font-mono bg-neutral-50 border border-border rounded px-2 py-1 w-fit mt-1 text-muted-foreground">
          GSTIN: {party.gstin}
        </p>
        <p className="text-xs text-muted-foreground">{party.phone}</p>
        <p className="text-xs text-muted-foreground">{party.email}</p>
      </div>
    </div>
  )
}

export function PartyInfoRow({ seller, buyer }: PartyInfoRowProps) {
  return (
    <div className="flex gap-8">
      <PartyBlock label="From" party={seller} />
      <div className="w-px bg-border flex-shrink-0" aria-hidden="true" />
      <PartyBlock label="Bill To" party={buyer} />
    </div>
  )
}
