import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getQuoteById } from "@/components/quick-quote/mock-data"
import { QuotePageShell } from "@/components/quick-quote/QuotePageShell"
import { QuoteNotFound } from "@/components/quick-quote/shared/QuoteNotFound"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const quote = getQuoteById(id)
  if (!quote) {
    return { title: "Quote Not Found" }
  }
  return {
    title: `Quote ${quote.documentNumber} from ${quote.seller.name}`,
    description: `Review and pay your quotation of ${new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(0)} from ${quote.seller.name} via UPI.`,
  }
}

export default async function QuotePage({ params }: PageProps) {
  const { id } = await params
  const quote = getQuoteById(id)

  if (!quote) {
    return <QuoteNotFound id={id} />
  }

  return <QuotePageShell quote={quote} />
}
