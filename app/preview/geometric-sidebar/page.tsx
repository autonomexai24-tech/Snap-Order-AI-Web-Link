/**
 * /app/preview/geometric-sidebar/page.tsx
 * Foundation verification page — NOT for production use.
 * Lets the browser sub-agent visually confirm the Emerald Identity Block
 */
import { GeometricSidebar } from "@/components/quick-quote/templates/clean/layouts/desktop/GeometricSidebar"

export const metadata = {
  title: "Emerald Identity Block Preview",
  description: "Visual UAT page for the Premium Slate & Emerald watermark pattern.",
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
          Foundation Verification · Emerald Identity Block
        </h1>
        <p style={{ fontSize: "13px", color: "#64748B", marginTop: "6px" }}>
          Premium Obsidian &amp; Emerald Watermark — visual UAT
        </p>
      </div>

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
          Demo — Absolute Watermark Insertion 
        </h2>
        
        {/* Simulated Document Paper */}
        <div
          style={{
            position: "relative",
            width: "800px",
            height: "500px",
            borderRadius: "0.5rem", // 8px rule enforced
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(15,23,42,0.12)",
            background: "#F1F5F9", /* Soft Slate/Parchment */
            border: "none", /* Zero borders rule */
          }}
        >
          {/* Identity Block */}
          <GeometricSidebar width="200px" height="100%" />
          
          {/* Simulated content stacking on top */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div style={{ paddingLeft: "100px" }}>
              <div style={{ height: 28, width: "30%", background: "#0F172A", borderRadius: "0.5rem" }} />
              <div style={{ marginTop: 12, height: 16, width: "15%", background: "#10B981", borderRadius: "0.5rem" }} />
              
              <div style={{ marginTop: 40, height: 120, background: "#FFFFFF", borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }} />
              <div style={{ marginTop: 24, height: 16, width: "70%", background: "#E2E8F0", borderRadius: "0.5rem" }} />
              <div style={{ marginTop: 12, height: 16, width: "50%", background: "#E2E8F0", borderRadius: "0.5rem" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
