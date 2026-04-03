"use client"

import { useState, useEffect } from "react"
import type { QuotationDocument } from "./types"
import { MobileLayout } from "./mobile/MobileLayout"
import { DesktopLayout } from "./desktop/DesktopLayout"
import { ThemeSwitcher } from "./shared/ThemeSwitcher"

interface QuotePageShellProps {
  quote: QuotationDocument
}

export function QuotePageShell({ quote: initialQuote }: QuotePageShellProps) {
  const [quote, setQuote] = useState<QuotationDocument>(initialQuote)

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const dataParam = params.get('data')
      if (dataParam) {
        // Handle Base64 encoded JSON parameter
        const decodedString = atob(dataParam)
        const parsedData = JSON.parse(decodedString)
        if (parsedData && typeof parsedData === 'object') {
           setQuote(parsedData as QuotationDocument)
        }
      }
    } catch (error) {
      console.error("Failed to parse dynamic quote data from URL:", error)
      // On failure, we gracefully fallback to initialQuote
    }
  }, [])

  return (
    <>
      <div className="block lg:hidden">
        <MobileLayout quote={quote} />
      </div>
      <div className="hidden lg:block relative">
        <DesktopLayout quote={quote} />
      </div>
      
      {/* Client-side Theme Switcher for testing templates */}
      <ThemeSwitcher />
    </>
  )
}
