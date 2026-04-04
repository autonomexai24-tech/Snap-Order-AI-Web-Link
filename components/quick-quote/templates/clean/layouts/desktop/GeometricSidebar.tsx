"use client"

import { useId } from "react"

/**
 * GeometricSidebar — Desktop Identity Block (Navy & Amber standard)
 *
 * Implements a wide, subtle repeating geometric watermark representing the
 * brand identity. Blended using mask-image over a Navy background.
 * Hidden on @media print.
 */

interface GeometricSidebarProps {
  width?: string | number
  height?: string | number
}

// Navy & Amber Tokens
const COLORS = {
  navy: "#1E3A8A",
  amberVibrant: "#F59E0B",
  amberDeep: "#B45309",
  amberFaint: "#FDE68A",
}

export function GeometricSidebar({
  width = "160px",
  height = "100%",
}: GeometricSidebarProps) {
  const patternId = useId() + "-geo-pattern"
  
  // Define a larger, structured cell for the premium repeating pattern
  const cellW = 80
  const cellH = 120

  return (
    <div
      aria-hidden="true"
      className="hidden md:block select-none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: width,
        height: height,
        overflow: "hidden",
        flexShrink: 0,
        zIndex: 0, // Sit behind the absolute paper body foreground
        backgroundColor: COLORS.navy, // Deep Navy base
        // Create an elegant fade from the Navy edge fading out into transparency
        maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
        pointerEvents: "none",
        printColorAdjust: "exact",
        WebkitPrintColorAdjust: "exact",
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", mixBlendMode: "screen", opacity: 0.2 }}
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
            {/* Primary Diamond - Vibrant Amber */}
            <polygon
              points={`${cellW / 2},10 ${cellW - 10},${cellH / 2} ${cellW / 2},${cellH - 10} 10,${cellH / 2}`}
              stroke={COLORS.amberVibrant}
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            {/* Inner Solid Triangle */}
            <polygon
              points={`${cellW / 2},30 ${cellW - 30},${cellH / 2} 30,${cellH / 2}`}
              fill={COLORS.amberDeep}
              opacity="0.6"
            />
            {/* Base Floating Accent Dot */}
            <circle
              cx={cellW / 2}
              cy={cellH - 30}
              r="3"
              fill={COLORS.amberFaint}
              opacity="1.0"
            />
            {/* Connecting Mesh Lines */}
            <line x1={cellW / 2} y1={0} x2={cellW / 2} y2={10} stroke={COLORS.amberDeep} strokeWidth="1" />
            <line x1={cellW / 2} y1={cellH - 10} x2={cellW / 2} y2={cellH} stroke={COLORS.amberDeep} strokeWidth="1" />
            <line x1={0} y1={cellH / 2} x2={10} y2={cellH / 2} stroke={COLORS.amberDeep} strokeWidth="1" />
            <line x1={cellW - 10} y1={cellH / 2} x2={cellW} y2={cellH / 2} stroke={COLORS.amberDeep} strokeWidth="1" />
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  )
}
