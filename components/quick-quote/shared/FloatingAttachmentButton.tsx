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
        <div className="relative group">
          {/* Subtle pulse ring to draw the eye initially */}
          {!isOpen && (
            <div className="absolute -inset-1 rounded-full bg-orange-500 opacity-20 animate-ping" style={{ animationDuration: '3s' }} />
          )}
          <Button 
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="relative h-14 px-6 rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 bg-orange-500 hover:bg-orange-600 text-white transition-all transform hover:-translate-y-1 active:scale-95 border-2 border-white"
            aria-label="View Documents"
          >
            {isOpen ? (
              <>
                <X className="w-5 h-5 mr-2" />
                <span className="font-bold text-base tracking-wide">Close</span>
              </>
            ) : (
              <>
                <Paperclip className="w-5 h-5 mr-2" />
                <span className="font-bold text-base tracking-wide">3 Attachments</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  )
}
