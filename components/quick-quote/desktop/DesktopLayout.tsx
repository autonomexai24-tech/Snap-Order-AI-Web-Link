"use client"

/**
 * DesktopLayout — Desktop Specialist (Overhauled)
 *
 * "Executive A4" document view for large screens.
 * Simulates a physical A4 paper sheet (794px wide) with multi-layer box-shadow,
 * linen-grey atmosphere background, and an emerald GeometricSidebar on the left edge.
 *
 * Design Tokens (Desktop):
 *   --ds-paper-bg:         #FFFFFF       (paper surface)
 *   --ds-page-bg:          #F0EDE6       (linen-grey atmosphere)
 *   --ds-paper-border:     #E5E2DC       (warm off-white border)
 *   --ds-shadow:           multi-layer paper drop-shadow
 *   --ds-sidebar-w:        14px          (geometric accent strip)
 *
 * Print rules:
 *   - Sidebar hidden, shadow stripped, background forced white.
 */

import { useState } from "react"
import type { QuotationDocument } from "../types"
import { computeTotals } from "../utils"
import { TopActionBar } from "./TopActionBar"
import { DocumentHeader } from "./DocumentHeader"
import { PartyInfoRow } from "./PartyInfoRow"
import { QuoteMeta } from "./QuoteMeta"
import { LineItemsTable } from "./LineItemsTable"
import { GSTBreakupTable } from "./GSTBreakupTable"
import { TotalsBlock } from "./TotalsBlock"
import { BankDetailsBlock } from "./BankDetailsBlock"
import { NotesFooter } from "./NotesFooter"
import { UpiQrModal } from "./UpiQrModal"
import { GeometricSidebar } from "./GeometricSidebar"
import { SignatureBlock } from "../shared/SignatureBlock"

interface DesktopLayoutProps {
  quote: QuotationDocument
}

export function DesktopLayout({ quote }: DesktopLayoutProps) {
  const [isPayModalOpen, setIsPayModalOpen] = useState(false)
  const totals = computeTotals(quote.items, quote.discount, quote.isInterState)

  return (
    /**
     * Page atmosphere — linen-grey (#F0EDE6)
     * Gives the impression of a textured desk surface under the paper.
     */
    <div
      id="desktop-page-atmosphere"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0EDE6",
        backgroundImage: `
          radial-gradient(ellipse at 20% 10%, rgba(6,95,70,0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 90%, rgba(15,23,42,0.06) 0%, transparent 50%)
        `,
      }}
    >
      {/* ── Action bar (above paper) ─────────────────────────────────────── */}
      <TopActionBar
        quote={quote}
        grandTotal={totals.grandTotal}
        onPayClick={() => setIsPayModalOpen(true)}
      />

      {/* ── Paper stage ──────────────────────────────────────────────────── */}
      <main
        id="desktop-paper-stage"
        style={{
          padding: "48px 24px 72px",
        }}
      >
        {/* A4 Paper ─ 794px = 210mm @ 96 dpi */}
        <article
          id="desktop-a4-paper"
          aria-label={"Quotation " + quote.quoteNumber}
          style={{
            position: "relative",
            maxWidth: "794px",
            marginInline: "auto",
            minHeight: "1123px",   /* A4 height: 297mm @ 96dpi ≈ 1123px */
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E2DC",
            borderRadius: "2px",
            /* Multi-layer paper shadow — mimics ambient light on physical paper */
            boxShadow: [
              "0 1px 2px  rgba(15,23,42,0.04)",
              "0 4px 12px rgba(15,23,42,0.08)",
              "0 16px 40px rgba(15,23,42,0.12)",
              "0 32px 80px rgba(15,23,42,0.08)",
              "0 0  0 0.5px rgba(15,23,42,0.06)",
            ].join(", "),
            overflow: "hidden",
          }}
        >
          {/* Emerald geometric accent sidebar */}
          <GeometricSidebar height="100%" />

          {/* Paper content — offset from sidebar */}
          <div
            id="desktop-paper-content"
            style={{
              marginLeft: "14px", /* sidebar width */
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {/* Document header (logo + quote number) */}
            <DocumentHeader quote={quote} />

            {/* Body sections */}
            <div
              id="desktop-paper-body"
              style={{
                padding: "36px 40px 56px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                flex: 1,
              }}
            >
              <PartyInfoRow seller={quote.seller} buyer={quote.buyer} />
              <QuoteMeta quote={quote} />
              <LineItemsTable items={quote.items} />

              {/* GST + Totals row */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <GSTBreakupTable
                  gstLines={totals.gstLines}
                  isInterState={quote.isInterState}
                />
                <TotalsBlock totals={totals} />
              </div>

              <BankDetailsBlock bankDetails={quote.bankDetails} />
              <NotesFooter notes={quote.notes} terms={quote.termsAndConditions} />
              <SignatureBlock className="self-end mt-4 mb-8" signatureName={quote.seller.name} />
            </div>

            {/* Paper footer — page reference strip */}
            <footer
              id="desktop-paper-footer"
              style={{
                borderTop: "1px solid #E5E2DC",
                padding: "10px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#FAFAF9",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "#94A3B8",
                  fontFamily: "monospace",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {quote.quoteNumber} — Quotation Document
              </span>
              <span
                style={{
                  fontSize: "10px",
                  color: "#CBD5E1",
                  letterSpacing: "0.04em",
                }}
              >
                Page 1 of 1
              </span>
            </footer>
          </div>
        </article>
      </main>

      {/* UPI Pay Modal */}
      <UpiQrModal
        open={isPayModalOpen}
        onOpenChange={setIsPayModalOpen}
        upiId={quote.upiId}
        upiName={quote.upiName}
        amount={totals.grandTotal}
        txnRef={quote.quoteNumber}
      />
    </div>
  )
}
