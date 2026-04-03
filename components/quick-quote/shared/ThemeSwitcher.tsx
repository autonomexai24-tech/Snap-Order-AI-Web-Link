"use client"

import { useEffect, useState } from "react"
import { Palette } from "lucide-react"

type ThemeType = "clean" | "modern" | "premium"

const themes: { id: ThemeType; label: string; color: string }[] = [
  { id: "clean", label: "Clean (Orange & Slate)", color: "bg-orange-500" },
  { id: "modern", label: "Modern (Azure & Zinc)", color: "bg-blue-500" },
  { id: "premium", label: "Premium (Gold & Velvet)", color: "bg-yellow-500" },
]

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeType>("clean")
  const [isOpen, setIsOpen] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("snapquote-theme") as ThemeType
    if (saved && themes.some((t) => t.id === saved)) {
      setActiveTheme(saved)
      document.documentElement.setAttribute("data-theme", saved)
    } else {
      document.documentElement.setAttribute("data-theme", "clean")
    }
  }, [])

  const toggleTheme = (themeId: ThemeType) => {
    setActiveTheme(themeId)
    localStorage.setItem("snapquote-theme", themeId)
    document.documentElement.setAttribute("data-theme", themeId)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 no-print">
      {isOpen && (
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 mb-2 w-48 flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-xs font-semibold text-slate-500 px-2 pt-1 pb-2 uppercase tracking-widest">
            Select Template
          </p>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => toggleTheme(theme.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors font-medium ${
                activeTheme === theme.id
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className={`w-4 h-4 rounded-full shadow-sm ${theme.color}`} />
              {theme.label.split(" (")[0]}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white border border-slate-200 text-slate-700 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all"
        aria-label="Toggle Template Theme"
      >
        <Palette className="w-5 h-5 text-slate-700" />
      </button>
    </div>
  )
}
