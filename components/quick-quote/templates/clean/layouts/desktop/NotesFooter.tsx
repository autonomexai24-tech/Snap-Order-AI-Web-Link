"use client"

interface NotesFooterProps {
  notes: string
  terms: string
}

export function NotesFooter({ notes, terms }: NotesFooterProps) {
  return (
    <footer className="border-t border-slate-200 mt-12 pt-8 flex flex-col gap-8">
      
      {/* 2-Column Desktop Grid for Notes & Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {notes && (
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-tpl-accent/20 block" /> Remarks
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {notes}
            </p>
          </div>
        )}

        {terms && (
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-tpl-accent block" /> Terms &amp; Conditions
            </h3>
            <ul className="flex flex-col gap-1.5 pl-0">
              {terms.split("\n").map((line, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed font-medium flex gap-2">
                  <span className="text-tpl-accent font-bold opacity-70">•</span>
                  <span>{line.replace(/^\d+\.\s*/, '') /* Strip numbers if present to use custom bullet */}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-tpl-accent" />
          <p className="text-sm font-semibold tracking-wide text-slate-700">
            Thank you for choosing us for your business.
          </p>
        </div>
        <p className="text-xs text-slate-400 font-medium tracking-wide">
          Generated via <span className="text-slate-700 font-semibold">Quotation System</span>
        </p>
      </div>
    </footer>
  )
}
