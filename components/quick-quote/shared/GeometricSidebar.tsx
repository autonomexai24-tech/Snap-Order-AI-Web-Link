/**
 * GeometricSidebar.tsx
 * Foundation: Premium Slate & Emerald Geometric Quotation
 *
 * A Classic Corporate sidebar panel built on a deep Slate (#0F172A) base with a
 * repeating Emerald Triangle + Diamond SVG tile pattern. Designed to serve as
 * the left accent column on the Desktop layout and as a header band on Mobile.
 *
 * STRICT SCOPE: shared/ only — do NOT import inside desktop/ or mobile/ directly;
 * use the re-export from index if needed.
 */

"use client"

import { useMemo } from "react"

// ─── Design Tokens ────────────────────────────────────────────────────────────
const COLOR = {
  /** Deep corporate slate — background */
  slateDark: "#0F172A",
  /** Mid slate for subtle grid lines */
  slateMid: "#1E293B",
  /** Bright emerald accent */
  emerald: "#10B981",
  /** Muted emerald for secondary shapes */
  emeraldDim: "#059669",
  /** Almost-white for text on dark */
  textLight: "#F1F5F9",
  /** Subdued label colour */
  textMuted: "#94A3B8",
} as const

// ─── SVG Tile: Emerald Triangle + Diamond ─────────────────────────────────────
/**
 * Returns an SVG <pattern> definition plus a single tile preview rect.
 * Each cell (48×48 px) contains:
 *   • An upward-pointing triangle (emerald fill, low opacity) — top-left quadrant
 *   • A diamond / rotated square (outline only, bright emerald) — centred right
 *   • A thin emerald horizontal rule at the bottom for grid rhythm
 */
function buildTilePattern(id: string) {
  const size = 48
  const half = size / 2
  // Triangle vertices: upward-pointing, fills top-left quadrant
  const tri = `${half * 0.1},${half * 0.95} ${half * 0.95},${half * 0.95} ${half * 0.525},${half * 0.1}`
  // Diamond centre point and half-size
  const dc = { x: half * 1.55, y: half * 0.55 }
  const dr = 10 // radius (half-diagonal)
  const diamond = `${dc.x},${dc.y - dr} ${dc.x + dr},${dc.y} ${dc.x},${dc.y + dr} ${dc.x - dr},${dc.y}`

  return { id, size, tri, diamond }
}

// ─── Component: GeometricPattern (raw SVG canvas) ─────────────────────────────
interface GeometricPatternProps {
  /** Width of the rendered SVG canvas */
  width?: number
  /** Height of the rendered SVG canvas */
  height?: number
  className?: string
}

export function GeometricPattern({
  width = 240,
  height = 800,
  className,
}: GeometricPatternProps) {
  const tile = useMemo(() => buildTilePattern("emerald-geo-tile"), [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-hidden="true"
      className={className}
      style={{ display: "block" }}
    >
      <defs>
        {/* Repeating tile pattern */}
        <pattern
          id={tile.id}
          x="0"
          y="0"
          width={tile.size}
          height={tile.size}
          patternUnits="userSpaceOnUse"
        >
          {/* Subtle grid cell background */}
          <rect
            width={tile.size}
            height={tile.size}
            fill={COLOR.slateDark}
          />
          {/* Cell divider — thin emerald rule at bottom */}
          <line
            x1="0"
            y1={tile.size - 0.5}
            x2={tile.size}
            y2={tile.size - 0.5}
            stroke={COLOR.emeraldDim}
            strokeWidth="0.4"
            opacity="0.25"
          />
          {/* Vertical divider */}
          <line
            x1={tile.size - 0.5}
            y1="0"
            x2={tile.size - 0.5}
            y2={tile.size}
            stroke={COLOR.emeraldDim}
            strokeWidth="0.4"
            opacity="0.25"
          />
          {/* Upward Triangle — emerald fill */}
          <polygon
            points={tile.tri}
            fill={COLOR.emerald}
            opacity="0.18"
          />
          {/* Triangle outline for crispness */}
          <polygon
            points={tile.tri}
            fill="none"
            stroke={COLOR.emerald}
            strokeWidth="0.8"
            opacity="0.55"
          />
          {/* Diamond — outline only */}
          <polygon
            points={tile.diamond}
            fill={COLOR.emerald}
            opacity="0.09"
          />
          <polygon
            points={tile.diamond}
            fill="none"
            stroke={COLOR.emerald}
            strokeWidth="0.9"
            opacity="0.65"
          />
        </pattern>

        {/* Vertical fade mask: fully visible in centre, fades top & bottom */}
        <linearGradient id="geo-fade-y" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={COLOR.slateDark} stopOpacity="1" />
          <stop offset="12%"  stopColor={COLOR.slateDark} stopOpacity="0" />
          <stop offset="88%"  stopColor={COLOR.slateDark} stopOpacity="0" />
          <stop offset="100%" stopColor={COLOR.slateDark} stopOpacity="1" />
        </linearGradient>
        <mask id="geo-mask-y">
          <rect width={width} height={height} fill="url(#geo-fade-y)" />
        </mask>
      </defs>

      {/* Pattern fill covering full canvas */}
      <rect
        width={width}
        height={height}
        fill={`url(#${tile.id})`}
      />

      {/* Gradient overlay to soften top/bottom edges */}
      <rect
        width={width}
        height={height}
        fill={COLOR.slateDark}
        mask="url(#geo-mask-y)"
      />

      {/* Right-edge accent line — surgical 2 px emerald border */}
      <line
        x1={width - 1}
        y1="0"
        x2={width - 1}
        y2={height}
        stroke={COLOR.emerald}
        strokeWidth="2"
        opacity="0.45"
      />
    </svg>
  )
}

// ─── Component: GeometricSidebar (full sidebar panel) ─────────────────────────
interface GeometricSidebarProps {
  /** Label shown at the top of the sidebar — defaults to the document type */
  label?: string
  /** Optional sub-label below the main label */
  subLabel?: string
  /** Optional: override sidebar width (px). Default 72 px — compact accent strip. */
  width?: number
  className?: string
}

/**
 * GeometricSidebar
 *
 * A narrow vertical accent panel with:
 *   - Deep slate (#0F172A) base
 *   - Repeating Emerald Triangle + Diamond SVG tile
 *   - Vertically rotated "QUOTATION" label in light text
 *   - Right-edge accent rule in Emerald
 *
 * Usage (Desktop):
 *   <GeometricSidebar label="QUOTATION" subLabel="PRQ-2025-047" width={72} />
 *
 * Usage (Mobile band):
 *   <GeometricSidebar label="QUOTATION" width={48} />
 */
export function GeometricSidebar({
  label = "QUOTATION",
  subLabel,
  width = 72,
  className,
}: GeometricSidebarProps) {
  return (
    <aside
      aria-label="Document type sidebar"
      style={{
        position: "relative",
        width,
        minHeight: "100%",
        background: COLOR.slateDark,
        flexShrink: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={className}
    >
      {/* Full-height geometric pattern canvas — absolute positioned */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <GeometricPattern
          width={width}
          height={2400}   /* oversized — CSS clips it */
          className="h-full w-full"
          // height governed by parent; SVG stretches via CSS
        />
      </div>

      {/* Emerald gradient overlay — left strip pop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(
            to right,
            ${COLOR.slateDark}CC 0%,
            transparent 100%
          )`,
        }}
      />

      {/* Rotated label block */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          transform: "rotate(-90deg)",
          transformOrigin: "center center",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: COLOR.emerald,
          }}
        >
          {label}
        </span>

        {subLabel && (
          <span
            style={{
              fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: COLOR.textMuted,
            }}
          >
            {subLabel}
          </span>
        )}
      </div>

      {/* Bottom emerald dot — corporate punctuation */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          width: 6,
          height: 6,
          borderRadius: "1px", /* diamond feel */
          background: COLOR.emerald,
          transform: "translateX(-50%) rotate(45deg)",
          opacity: 0.75,
        }}
      />
    </aside>
  )
}

// Default export for convenient imports
export default GeometricSidebar
