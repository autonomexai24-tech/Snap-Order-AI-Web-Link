"use client"

import { FileX2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuoteNotFound({ id }: { id: string }) {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm">
        <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
          <FileX2 className="w-8 h-8 text-neutral-400" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-foreground">
            Quote not found
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The quote{" "}
            <span className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">
              {id}
            </span>{" "}
            does not exist or has been removed by the sender.
          </p>
        </div>
        <Button
          variant="outline"
          className="min-h-[44px] min-w-[44px]"
          onClick={() => window.history.back()}
        >
          Go back
        </Button>
      </div>
    </div>
  )
}
