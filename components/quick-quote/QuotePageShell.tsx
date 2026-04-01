"use client"

import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import type { Quote } from "./types"
import { MobileLayout } from "./mobile/MobileLayout"
import { DesktopLayout } from "./desktop/DesktopLayout"

interface QuotePageShellProps {
  quote: Quote
}

export function QuotePageShell({ quote }: QuotePageShellProps) {
  const isMobile = useIsMobile()
  // Track whether the hook has measured the viewport yet.
  // useIsMobile() returns false both on SSR and pre-measurement, so we use
  // a mounted flag to avoid a flash of the desktop layout on a mobile device.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    )
  }

  return isMobile ? (
    <MobileLayout quote={quote} />
  ) : (
    <DesktopLayout quote={quote} />
  )
}
