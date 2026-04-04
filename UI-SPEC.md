# UI Design Specification (UI-SPEC)
**Project**: Quotation System (Multi-Template)
**Phase Status**: Design Blueprinting

---

## 1. Layout Sections

Both the "Clean" and "Premium" templates share a unified structural grid to map the same backend payload, but dramatically alter the visual presentation layer.

**A. Header**
- Contains the Document Title (QUOTATION), Document ID, and Status Badge.
- Includes the primary Brand Logo or Platform branding (top-left).

**B. Company / Client Block**
- Left side: **"FROM"** details (Company Name, Address, GSTIN, Contact).
- Right side: **"PREPARED FOR"** details (Client Name, Address, GSTIN, Contact).

**C. Meta Info Row**
- A horizontal strip containing critical timeline data: `Issue Date`, `Valid Until`, `PO Reference`, and `Supply State`.

**D. Table Structure**
- Fixed Column Headers: `SN` (Serial), `DESCRIPTION`, `HSN`, `QTY`, `UNIT`, `RATE`, `GST`, and `TOTAL`.
- Data rows containing item lines with responsive padding to ensure clear readability.

**E. Totals Section**
- Summary area containing `Subtotal`, `Tax`, and `Discount`.
- **Grand Total area**: A highly emphasized section detailing the final payable amount.
- Optional Tax Breakdown sub-table at the very bottom.

**F. Footer**
- Payment Details (Bank Account, IFSC, SWIFT).
- Terms & Conditions.
- **Signature Block**: "Authorized Signature" with an overlying digital script font or cursive stroke.

---

## 2. Design System

### Typography Hierarchy
*   **Brand / Document Titles:** 
    *   *Clean*: Black/Extrabold Sans Serif (e.g., `Inter` or `Roboto`, 900 weight, uppercase).
    *   *Premium*: Elegant Sans Serif with generous letter-spacing or refined Serif (e.g., `Outfit` or `Playfair Display`).
*   **Section Headers (FROM / PREPARED FOR):** 
    *   *Clean*: 10px-11px, bold, uppercase, wide tracking (`tracking-widest`), muted slate.
    *   *Premium*: 11px, medium weight, subtle uppercase with gold/amber tracking.
*   **Data & Financials (Numbers):** 
    *   *Both*: Tabular numbers (`tabular-nums`) to perfectly align decimal points. A monospace font (e.g., `JetBrains Mono` or `Roboto Mono`) is strictly enforced for financial data.
*   **Body Text:** 
    *   12px–14px Sans Serif, optimized for legibility.

### Spacing System
*   **Micro**: `4px` - `8px` (used for tightly grouping related metadata like city and state).
*   **Component**: `16px` - `24px` (padding inside individual cards or table cells).
*   **Macro (Section Breaks)**: `40px` - `64px` (clear semantic separation between the Info Row, the Table, and the Totals).

### Alignment Rules
*   **Left-Aligned**: All descriptive text, addresses, item descriptions, and terms.
*   **Right-Aligned**: All numerical data, rates, taxes, and totals to ensure scannability.
*   **Center-Aligned**: The SN (Serial Number) and UNIT columns.

---

## 3. Template Difference

### Template 1: Clean (Corporate & Structured)
*   **Core Aesthetic**: High contrast, razor-sharp geometric lines, absolute clarity. Designed for physical printing or stark corporate environments.
*   **Color Palette**: Deep Obsidian (`#0F172A`), Industrial Orange (`#F97316`), Soft Slate backgrounds (`#F1F5F9`).
*   **Shapes**: Sharp edges mixed with subtle 8px radii. Use of heavy color-blocking (e.g., solid orange top border, solid split-color table headers).
*   **Highlight Totals**: Handled via edge-to-edge solid color blocks (Orange / Slate) that visually anchor the bottom of the document.

### Template 2: Premium (Luxury & Spacious)
*   **Core Aesthetic**: Glassmorphism, ethereal glowing elements, vast negative space. Designed strictly for high-end digital consumption (vogue/luxury feel).
*   **Color Palette**: Midnight Cosmos / Navy (`#0A0B1A`), Pale Gold / Champagne (`#D4AF37`), Frosted White (`rgba(255,255,255, 0.4)`).
*   **Shapes**: Extremely soft rounded corners (`16px`+), heavy use of backdrop-blurs, 1px bright shimmering borders to simulate frosted glass.
*   **Highlight Totals**: Financial emphasis is placed on **floating elevated cards** rather than flat background stripes. The main "Total Estimate" card floats at the top right, while the table grand total acts as an inset glowing pill.

---

## 4. Reusable Component Definitions

To successfully swap these vastly different templates without rewriting React code, the architecture must support "Theme Tokens" mapped to the following components:

1.  **`StandardContainer`**: 
    - The main wrapper. (Clean = solid white A4 paper; Premium = frosted glass panel with drop shadows).
2.  **`HeaderBlock`**: 
    - Adjusts internal arrangement. (Clean = Orange geometric slash; Premium = Subtle glowing text and floating total card).
3.  **`EntityInfoCard`**: 
    - Handles "From/To" details. (Clean = Minimal text blocks; Premium = Frosted translucent `<divs>` with glowing borders).
4.  **`DataTable`**: 
    - (Clean = Solid colored `<th>` backgrounds; Premium = Border-bottom only, translucent cells).
5.  **`TotalsDisplay`**: 
    - (Clean = Solid, edge-to-edge orange blocks; Premium = Floating gradient pills).
6.  **`SignatureModule`**: 
    - Reusable cursive overlay with dynamic line stroke color.
