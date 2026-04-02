"use strict";
/**
 * SignatureBlock.tsx
 * Professional Authorized Signatory section with a built-in digital signature
 * and an Emerald watermark "AUTHORIZED" stamp effect.
 */

"use client";

interface SignatureBlockProps {
  /** The name of the authorized person to render in the cursive script */
  signatureName?: string;
  /** Label underneath the signature line */
  label?: string;
  className?: string;
}

export function SignatureBlock({
  signatureName = "Authorized Signable",
  label = "Authorized Signatory",
  className = "",
}: SignatureBlockProps) {
  return (
    <div className={`relative flex flex-col items-end pt-12 overflow-hidden ${className}`}>
      
      {/* Background Watermark Stamp */}
      <div 
        className="absolute top-4 right-8 pointer-events-none select-none opacity-20 transform -rotate-12"
        style={{ zIndex: 0 }}
      >
        <div className="border-[3px] border-emerald-500 text-emerald-500 uppercase tracking-[0.3em] font-bold text-xl py-1 px-3 rounded-sm opacity-80" style={{ fontFamily: 'system-ui' }}>
          AUTHORIZED
        </div>
      </div>

      {/* The Cursive Signature text */}
      <div className="relative z-10 w-48 text-center mb-1">
        <span 
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-4xl text-slate-800 opacity-90 block leading-none"
        >
          {signatureName}
        </span>
      </div>

      {/* The Signature Line */}
      <div className="w-56 border-t border-slate-300 relative z-10" />

      {/* The Label */}
      <div className="w-56 text-center mt-1.5 relative z-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {label}
        </span>
      </div>
      
    </div>
  );
}

export default SignatureBlock;
