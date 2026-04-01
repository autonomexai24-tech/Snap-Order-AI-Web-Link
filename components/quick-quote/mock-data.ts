import type { Quote } from "./types"

export const MOCK_QUOTES: Record<string, Quote> = {
  "QQ-2025-047": {
    id: "QQ-2025-047",
    quoteNumber: "QQ-2025-047",
    status: "sent",
    issuedAt: "2025-06-10",
    validUntil: "2025-07-10",
    poRef: "PO-RCP-8821",
    isInterState: false,

    seller: {
      name: "Bharat Steel & Hardware Traders",
      gstin: "27AABFB1234C1Z5",
      address: "Shop No. 14, Industrial Estate, Kurla West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400070",
      phone: "+91 98201 44321",
      email: "sales@bharatsteel.in",
    },

    buyer: {
      name: "Ravi Constructions Pvt. Ltd.",
      gstin: "27AACFR5678D1Z3",
      address: "Plot 22, Phase II, MIDC",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411018",
      phone: "+91 97654 12345",
      email: "accounts@raviconst.co.in",
    },

    items: [
      {
        id: "item-001",
        description: "GI Pipe B-Class (1\" x 6 mtr)",
        hsnCode: "73063010",
        qty: 120,
        unit: "Pcs",
        rate: 285.0,
        gstRate: 18,
      },
      {
        id: "item-002",
        description: "MS Angle Iron (50x50x5 mm, 6 mtr)",
        hsnCode: "72163100",
        qty: 80,
        unit: "Pcs",
        rate: 410.0,
        gstRate: 18,
      },
      {
        id: "item-003",
        description: "Hex Bolt Grade 8.8 (M12 x 75mm) — Box of 50",
        hsnCode: "73181500",
        qty: 40,
        unit: "Box",
        rate: 520.0,
        gstRate: 18,
      },
      {
        id: "item-004",
        description: "GI Welded Wire Mesh (10 Gauge, 4'x8' sheet)",
        hsnCode: "73144100",
        qty: 25,
        unit: "Sheet",
        rate: 960.0,
        gstRate: 18,
      },
      {
        id: "item-005",
        description: "HDPE Binding Wire (20 Gauge, 25kg Coil)",
        hsnCode: "73170090",
        qty: 10,
        unit: "Coil",
        rate: 2100.0,
        gstRate: 18,
      },
      {
        id: "item-006",
        description: "PVC Conduit Pipe (25mm dia, 3 mtr) ISI Mark",
        hsnCode: "39173200",
        qty: 60,
        unit: "Pcs",
        rate: 48.0,
        gstRate: 12,
      },
    ],

    discount: 2500,

    notes:
      "Payment due within 15 days from invoice date. Late payment will attract 1.5% interest per month. Goods once sold will not be accepted back without prior written approval.",

    termsAndConditions:
      "1. Prices are ex-warehouse Mumbai. Freight at actuals will be charged extra.\n2. Goods remain property of Bharat Steel & Hardware Traders until full payment is received.\n3. Any disputes subject to Mumbai jurisdiction only.\n4. GSTIN must be provided at time of order to avail GST credit.",

    bankDetails: {
      bankName: "Axis Bank Ltd.",
      accountNumber: "9210 0145 6789 03",
      ifsc: "UTIB0001234",
      accountHolder: "Bharat Steel & Hardware Traders",
      branch: "Kurla West Branch, Mumbai",
    },

    upiId: "bharatsteel@okaxis",
    upiName: "Bharat Steel & Hardware",
  },

  demo: {
    id: "demo",
    quoteNumber: "QQ-2025-001",
    status: "sent",
    issuedAt: "2025-06-01",
    validUntil: "2025-07-01",
    poRef: undefined,
    isInterState: false,

    seller: {
      name: "Bharat Steel & Hardware Traders",
      gstin: "27AABFB1234C1Z5",
      address: "Shop No. 14, Industrial Estate, Kurla West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400070",
      phone: "+91 98201 44321",
      email: "sales@bharatsteel.in",
    },

    buyer: {
      name: "Ravi Constructions Pvt. Ltd.",
      gstin: "27AACFR5678D1Z3",
      address: "Plot 22, Phase II, MIDC",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411018",
      phone: "+91 97654 12345",
      email: "accounts@raviconst.co.in",
    },

    items: [
      {
        id: "item-001",
        description: "GI Pipe B-Class (1\" x 6 mtr)",
        hsnCode: "73063010",
        qty: 120,
        unit: "Pcs",
        rate: 285.0,
        gstRate: 18,
      },
      {
        id: "item-002",
        description: "MS Angle Iron (50x50x5 mm, 6 mtr)",
        hsnCode: "72163100",
        qty: 80,
        unit: "Pcs",
        rate: 410.0,
        gstRate: 18,
      },
      {
        id: "item-003",
        description: "Hex Bolt Grade 8.8 (M12 x 75mm) — Box of 50",
        hsnCode: "73181500",
        qty: 40,
        unit: "Box",
        rate: 520.0,
        gstRate: 18,
      },
      {
        id: "item-004",
        description: "GI Welded Wire Mesh (10 Gauge, 4'x8' sheet)",
        hsnCode: "73144100",
        qty: 25,
        unit: "Sheet",
        rate: 960.0,
        gstRate: 18,
      },
      {
        id: "item-005",
        description: "HDPE Binding Wire (20 Gauge, 25kg Coil)",
        hsnCode: "73170090",
        qty: 10,
        unit: "Coil",
        rate: 2100.0,
        gstRate: 18,
      },
    ],

    discount: 0,

    notes: "Payment due within 15 days. Freight at actuals extra.",

    termsAndConditions:
      "1. Prices are ex-warehouse Mumbai.\n2. Goods remain property of seller until full payment received.\n3. Disputes subject to Mumbai jurisdiction.",

    bankDetails: {
      bankName: "Axis Bank Ltd.",
      accountNumber: "9210 0145 6789 03",
      ifsc: "UTIB0001234",
      accountHolder: "Bharat Steel & Hardware Traders",
      branch: "Kurla West Branch, Mumbai",
    },

    upiId: "bharatsteel@okaxis",
    upiName: "Bharat Steel & Hardware",
  },
}

export function getQuoteById(id: string): Quote | null {
  return MOCK_QUOTES[id] ?? null
}
