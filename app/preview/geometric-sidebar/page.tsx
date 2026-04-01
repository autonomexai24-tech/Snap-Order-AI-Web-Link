/**
 * /app/preview/geometric-sidebar/page.tsx
 * Foundation verification page — NOT for production use.
 * Lets the browser sub-agent visually confirm the GeometricSidebar looks
 * "Classic Corporate" and professional before the Desktop/Mobile agents proceed.
 */
import { GeometricSidebar, GeometricPattern } from "@/components/quick-quote/shared/GeometricSidebar"

export const metadata = {
  title: "GeometricSidebar Preview — Foundation Verification",
  description: "Visual UAT page for the Premium Slate & Emerald sidebar pattern.",
}

export default function GeometricSidebarPreviewPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
        padding: "40px",
      }}
    >
      {/* ── Page Header ── */}
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Foundation Verification · GeometricSidebar
        </h1>
        <p style={{ fontSize: "13px", color: "#64748B", marginTop: "6px" }}>
          Premium Slate &amp; Emerald Geometric Quotation — visual UAT
        </p>
      </div>

      {/* ── Demo 1: Sidebar in context (simulated document card) ── */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#10B981",
            marginBottom: "16px",
          }}
        >
          Demo 1 — 72 px Compact Accent Strip (Desktop)
        </h2>
        <div
          style={{
            display: "flex",
            height: "420px",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            border: "1px solid #E2E8F0",
          }}
        >
          {/* Sidebar */}
          <GeometricSidebar
            label="QUOTATION"
            subLabel="PRQ-2025-047"
            width={72}
          />
          {/* Simulated document body */}
          <div
            style={{
              flex: 1,
              background: "#FFFFFF",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ height: 20, width: "60%", background: "#F1F5F9", borderRadius: 4 }} />
            <div style={{ height: 14, width: "80%", background: "#F1F5F9", borderRadius: 4 }} />
            <div style={{ height: 14, width: "40%", background: "#F1F5F9", borderRadius: 4 }} />
            <div style={{ marginTop: 16, height: 80, background: "#F8FAFC", borderRadius: 4, border: "1px solid #E2E8F0" }} />
            <div style={{ height: 14, width: "70%", background: "#F1F5F9", borderRadius: 4 }} />
            <div style={{ height: 14, width: "50%", background: "#F1F5F9", borderRadius: 4 }} />
          </div>
        </div>
      </section>

      {/* ── Demo 2: Wider sidebar ── */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#10B981",
            marginBottom: "16px",
          }}
        >
          Demo 2 — 120 px Wide Panel
        </h2>
        <div
          style={{
            display: "flex",
            height: "320px",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
        >
          <GeometricSidebar label="QUOTATION" width={120} />
          <div style={{ flex: 1, background: "#1E293B" }} />
        </div>
      </section>

      {/* ── Demo 3: Raw pattern tile strip ── */}
      <section>
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#10B981",
            marginBottom: "16px",
          }}
        >
          Demo 3 — Raw Emerald Triangle/Diamond Tile (288 × 288 px)
        </h2>
        <div
          style={{
            display: "inline-block",
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid #10B981",
          }}
        >
          <GeometricPattern width={288} height={288} />
        </div>
      </section>
    </div>
  )
}
