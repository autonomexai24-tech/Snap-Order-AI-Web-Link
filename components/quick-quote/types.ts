export type QuoteStatus = "draft" | "sent" | "accepted" | "paid" | "expired"

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

export interface Quote {
  id: string
  quoteNumber: string
  status: QuoteStatus
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
