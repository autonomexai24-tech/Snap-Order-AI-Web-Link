/**
 * GeometricSidebar — Desktop Specialist
 *
 * Decorative emerald geometric accent strip for the A4 document left edge.
 * Renders a repeating SVG pattern of triangles + diamonds in Slate & Emerald tones.
 * Width: 14px (print edge). Hidden on @media print.
 */

interface GeometricSidebarProps {
  height?: number | string
}

/** Emerald & Slate palette */
const COLORS = {
  emeraldDeep:   "#065F46", // --emerald-900
  emeraldMid:    "#059669", // --emerald-600
  emeraldLight:  "#34D399", // --emerald-400
  emeraldFaint:  "#A7F3D0", // --emerald-200
  slateDark:     "#0F172A", // --slate-900
  slateAccent:   "#1E293B", // --slate-800
}

export function GeometricSidebar({ height = "100%" }: GeometricSidebarProps) {
  const patternId = "geo-sidebar-pattern"
  const cellH = 28  // height of one repeating cell
  const cellW = 14  // sidebar width

  return (
    <div
      aria-hidden="true"
      className="geometric-sidebar"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: cellW,
        height: height,
        overflow: "hidden",
        flexShrink: 0,
        // Hidden on print
        printColorAdjust: "exact",
        WebkitPrintColorAdjust: "exact",
      }}
    >
      <svg
        width={cellW}
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={cellW}
            height={cellH}
            patternUnits="userSpaceOnUse"
          >
            {/* Base fill — deep emerald */}
            <rect x={0} y={0} width={cellW} height={cellH} fill={COLORS.emeraldDeep} />

            {/* Top triangle — dark slate pointing right */}
            <polygon
              points={`0,0 ${cellW},0 0,${cellH * 0.45}`}
              fill={COLORS.slateDark}
              opacity="0.55"
            />

            {/* Mid diamond — mid emerald */}
            <polygon
              points={`${cellW / 2},${cellH * 0.3} ${cellW},${cellH * 0.52} ${cellW / 2},${cellH * 0.74} 0,${cellH * 0.52}`}
              fill={COLORS.emeraldMid}
              opacity="0.7"
            />

            {/* Small accent dot — emerald light */}
            <circle
              cx={cellW / 2}
              cy={cellH * 0.52}
              r={1.8}
              fill={COLORS.emeraldLight}
              opacity="0.9"
            />

            {/* Bottom-right triangle — faint emerald */}
            <polygon
              points={`${cellW},${cellH * 0.6} ${cellW},${cellH} 0,${cellH}`}
              fill={COLORS.slateAccent}
              opacity="0.45"
            />

            {/* Edge shimmer line */}
            <line
              x1={cellW - 1}
              y1={0}
              x2={cellW - 1}
              y2={cellH}
              stroke={COLORS.emeraldLight}
              strokeWidth="0.5"
              opacity="0.4"
            />
          </pattern>
        </defs>

        <rect
          x={0}
          y={0}
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  )
}
