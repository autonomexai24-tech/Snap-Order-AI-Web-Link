# Premium Design Specification (PREMIUM-UI-SPEC)
**Target:** Luxury Quotation Interface ("Premium" Template)
**Core Aesthetic:** Ethereal, Spacious, Refined Glassmorphism

---

## 1. Layout Structure Blueprint

The Premium template breaks free from strict edge-to-edge geometric constraints in favor of a **floating, card-based** structural flow.

*   **Header Module**
    *   Left: Sleek Brand Logo & Typography (e.g., AURELIA Design Lab style).
    *   Right: Subtle, spaced-out "QUOTATION" text.
*   **Highlight & Summary Section (Floating Overlap)**
    *   Top Left: "Quotation For" target client block nested gently under the header.
    *   Top Right: A distinct **"Total Estimate" floating card** (glassmorphic or distinctly elevated) showing the grand amount, issue date, and validity.
*   **Items Table**
    *   A minimalist borderless/soft grid floating within a subtle bounding box.
*   **Totals Integration**
    *   Rather than a bottom banner, the Summary (Subtotal, Tax, Discount) is aligned strictly to the right edge.
    *   The **"Grand Total"** is presented as a distinct, elevated, pill-shaped overlay block bridging the table and the summary area.
*   **Footer Matrix**
    *   Left: Payment Details (Bank, Swift) & Terms/Conditions formatted in elegant columns.
    *   Right: The Authorization signature, styled with a sophisticated cursive overlay.
    *   Bottom Strip: Contact icons (phone, email, web, address) spanning the exact width of the document.

---

## 2. Design System Tokens

### Typography (Elegant Hierarchy)
*   **Display Font:** Sophisticated Sans Serif with wide tracking for titles (e.g., `Outfit`, `Plus Jakarta Sans`, or `Cinzel` for pure luxury).
*   **Data Font:** Ultra-clean monospaced or tabular num-set for financial sums in light/medium weights. Avoid heavy black fonts.
*   **Body Font:** Neutral, high-legibility sans-serif (e.g., `Inter` or `Roobert`), utilizing distinct `text-slate-500` for labels and `text-slate-800` for values.

### Spacing (Premium = Breathable)
*   Massive negative space. Sections should utilize `gap-8` to `gap-16` equivalent spacing.
*   The overall layout needs robust padding (e.g., `p-12` or `p-16` on the main container) mimicking a premium parchment margin.

### Alignment & Grouping
*   **Card-Based Grouping:** Instead of relying on hard separating lines, sections are visually grouped by placing them inside soft, bounding-box cards with generous internal padding.
*   **Asymmetrical Balance:** The heavy "Total Estimate" card on the top right is counterbalanced by the heavy "Payment Details" matrix on the bottom left.

---

## 3. Visual Style (The Luxury Execution)

To ensure it is "printable and clean" while maintaining the luxury reference, we translate the "dark space" glow of the concept art into a **daylight premium glass UX**:

*   **Base Canvas:** Pure White (`#FFFFFF`) or Frosted Alabaster (`#FCFCFB`).
*   **Accents:** Pale Champagne Gold (`#D4AF37`) and Deep Velvet Navy (`#111827`) for typography accents.
*   **Borders:** Extremely subtle 1px frames (`border-slate-200/60` or `border-[#D4AF37]/30`). No harsh geometric cuts.
*   **Shadows (No Glow):** Soft, diffuse, elegant elevation. Utilizing drop shadows like `box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05)` rather than neon blooms. The total pills appear physically lifted rather than emitting light.

---

## 4. Component System Abstraction

1.  **`PremiumContainer`:** The main wrapper utilizing the massive padding and soft border radius (`rounded-3xl` equivalent) with a subtle drop shadow.
2.  **`ElevatedEstimateCard`:** Reusable glass card primitive. Has an internal gradient (e.g., extremely soft white-to-slate gradient to simulate embossing) and a soft border. Houses the main headline figure.
3.  **`FloatingTotalPill`:** A unique component specifically for the final total at the bottom of the table. Features a deep velvet navy background (`bg-slate-900`) layered with gold text (`text-[#D4AF37]`), completely detached from the table edges.
4.  **`SoftTable`:** Table headers (`<th>`) use microscopic text (10px) with wide letter tracking and NO background colors. Just a simple bottom border isolating the header from the soft table rows.
5.  **`FooterMatrix`:** A highly structured flex-grid for the footer. Contains standardized icon-prefix text strings for Contact info and a graceful cursive overlay for the Signature section.
