import type { LineItem, ComputedTotals, GSTLine } from "./types"

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatINRCompact(amount: number): string {
  if (amount >= 100000) {
    return "\u20B9" + (amount / 100000).toFixed(2) + "L"
  }
  if (amount >= 1000) {
    return "\u20B9" + (amount / 1000).toFixed(1) + "K"
  }
  return "\u20B9" + amount.toFixed(2)
}

export function calcLineTotal(item: LineItem): number {
  return item.qty * item.rate
}

export function calcLineTotalWithGST(item: LineItem): number {
  const base = calcLineTotal(item)
  return base + (base * item.gstRate) / 100
}

interface GSTSplit {
  cgst: number
  sgst: number
  igst: number
}

export function calcGSTSplit(
  taxableAmount: number,
  gstRate: number,
  isInterState: boolean
): GSTSplit {
  const totalTax = (taxableAmount * gstRate) / 100
  if (isInterState) {
    return { cgst: 0, sgst: 0, igst: totalTax }
  }
  return { cgst: totalTax / 2, sgst: totalTax / 2, igst: 0 }
}

export function computeTotals(
  items: LineItem[],
  discount: number,
  isInterState: boolean
): ComputedTotals {
  const subTotal = items.reduce((acc, item) => acc + calcLineTotal(item), 0)
  const discountAmount = discount
  const taxableAmount = subTotal - discountAmount

  const rateGroups: Record<number, number> = {}
  for (const item of items) {
    const base = calcLineTotal(item)
    const itemTaxable = base - (base / subTotal) * discountAmount
    rateGroups[item.gstRate] = (rateGroups[item.gstRate] ?? 0) + itemTaxable
  }

  let totalCgst = 0
  let totalSgst = 0
  let totalIgst = 0
  const gstLines: GSTLine[] = []

  for (const [rateStr, taxable] of Object.entries(rateGroups)) {
    const rate = Number(rateStr)
    const split = calcGSTSplit(taxable, rate, isInterState)
    totalCgst += split.cgst
    totalSgst += split.sgst
    totalIgst += split.igst
    gstLines.push({
      label: isInterState ? "IGST " + rate + "%" : "GST " + rate + "%",
      taxableAmount: taxable,
      rate,
      cgst: split.cgst,
      sgst: split.sgst,
      igst: split.igst,
      total: split.cgst + split.sgst + split.igst,
    })
  }

  const totalGst = totalCgst + totalSgst + totalIgst
  const grandTotal = taxableAmount + totalGst

  return {
    subTotal,
    discountAmount,
    taxableAmount,
    cgst: totalCgst,
    sgst: totalSgst,
    igst: totalIgst,
    totalGst,
    grandTotal,
    gstLines,
  }
}

interface UpiUriParams {
  upiId: string
  name: string
  amount: number
  txnRef: string
  note?: string
}

export function buildUpiUri(params: UpiUriParams): string {
  const { upiId, name, amount, txnRef, note } = params
  const q = new URLSearchParams({
    pa: upiId,
    pn: name,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note ?? txnRef,
    tr: txnRef,
  })
  return "upi://pay?" + q.toString()
}

export function buildPhonePeUri(params: UpiUriParams): string {
  const { upiId, name, amount, txnRef, note } = params
  const q = new URLSearchParams({
    pa: upiId,
    pn: name,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note ?? txnRef,
  })
  return "phonepe://pay?" + q.toString()
}

export function buildGPayUri(params: UpiUriParams): string {
  const { upiId, name, amount, txnRef, note } = params
  const q = new URLSearchParams({
    pa: upiId,
    pn: name,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note ?? txnRef,
  })
  return "tez://upi/pay?" + q.toString()
}

export function buildPaytmUri(params: UpiUriParams): string {
  const { upiId, name, amount, txnRef } = params
  const q = new URLSearchParams({
    pa: upiId,
    pn: name,
    am: amount.toFixed(2),
    cu: "INR",
    tn: txnRef,
  })
  return "paytmmp://pay?" + q.toString()
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr))
}
