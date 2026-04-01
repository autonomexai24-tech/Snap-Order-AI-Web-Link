// Foundation: Premium Slate & Emerald Geometric Quotation
// Brand-neutral document status — no vendor-specific labels
export type DocumentStatus = "draft" | "sent" | "accepted" | "paid" | "expired"

/** @deprecated Use DocumentStatus */
export type QuoteStatus = DocumentStatus

export interface Party {
  name: string
  gstin: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
  email: string
}

export interface BankDetails {
  bankName: string
  accountNumber: string
  ifsc: string
  accountHolder: string
  branch: string
}

export interface LineItem {
  id: string
  description: string
  hsnCode: string
  qty: number
  unit: string
  rate: number
  gstRate: number // percentage e.g. 18
}

export interface GSTLine {
  label: string
  taxableAmount: number
  rate: number
  cgst: number
  sgst: number
  igst: number
  total: number
}

/** Brand-neutral quotation document — no "QuickQuote" / "Invoice" identifiers. */
export interface QuotationDocument {
  id: string
  /** Human-readable document reference, e.g. "PRQ-2025-047" */
  documentNumber: string
  status: DocumentStatus
  issuedAt: string   // ISO date string
  validUntil: string // ISO date string
  poRef?: string
  isInterState: boolean
  seller: Party
  buyer: Party
  items: LineItem[]
  discount: number   // absolute ₹ discount, 0 if none
  notes: string
  termsAndConditions: string
  bankDetails: BankDetails
  upiId: string
  upiName: string
}

/** @deprecated Use QuotationDocument */
export type Quote = QuotationDocument & { quoteNumber: string }

export interface ComputedTotals {
  subTotal: number
  discountAmount: number
  taxableAmount: number
  cgst: number
  sgst: number
  igst: number
  totalGst: number
  grandTotal: number
  gstLines: GSTLine[]
}
