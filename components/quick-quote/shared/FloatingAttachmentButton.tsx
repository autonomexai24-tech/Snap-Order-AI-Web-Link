"use client"

import { useState } from "react"
import { Paperclip, FileText, FolderArchive, Image as ImageIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingAttachmentButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto flex flex-col items-end gap-3 no-print">
        {/* Popover Menu for Attachments */}
        {isOpen && (
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-2 w-64 origin-bottom-right animate-in zoom-in-95 fade-in-0 duration-200">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
              <h3 className="text-sm font-bold text-slate-800">Attached Documents</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex flex-col gap-1">
              {/* Mock Document Type 1 */}
              <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-md transition-colors text-left group">
                <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-orange-600 transition-colors">
                    Technical_Specs_v2.pdf
                  </span>
                  <span className="text-[10px] text-slate-400">PDF • 2.4 MB</span>
                </div>
              </button>

              {/* Mock Document Type 2 */}
              <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-md transition-colors text-left group">
                <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <FolderArchive className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-blue-600 transition-colors">
                    CAD_Source_Files.zip
                  </span>
                  <span className="text-[10px] text-slate-400">ZIP • 14.8 MB</span>
                </div>
              </button>
              
              {/* Mock Document Type 3 */}
              <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-md transition-colors text-left group">
                <div className="w-8 h-8 rounded bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-green-600 transition-colors">
                    Site_Reference_Photos.jpg
                  </span>
                  <span className="text-[10px] text-slate-400">JPG • 4.1 MB</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* The Action Button */}
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl bg-slate-900 hover:bg-slate-800 text-white transition-all transform hover:-translate-y-1 active:scale-95"
          aria-label="View Documents"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform" />
          ) : (
            <Paperclip className="w-6 h-6 transition-transform" />
          )}
        </Button>
      </div>
    </>
  )
}
