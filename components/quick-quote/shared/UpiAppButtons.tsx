"use client"

import { cn } from "@/lib/utils"

interface UpiAppButtonsProps {
  upiId: string
  upiName: string
  amount: number
  txnRef: string
  className?: string
}

function buildUpiParams(
  upiId: string,
  name: string,
  amount: number,
  txnRef: string
): URLSearchParams {
  return new URLSearchParams({
    pa: upiId,
    pn: name,
    am: amount.toFixed(2),
    cu: "INR",
    tn: txnRef,
  })
}

export function UpiAppButtons({
  upiId,
  upiName,
  amount,
  txnRef,
  className,
}: UpiAppButtonsProps) {
  const params = buildUpiParams(upiId, upiName, amount, txnRef)

  const apps = [
    {
      name: "PhonePe",
      href: "phonepe://pay?" + params.toString(),
      fallback: "upi://pay?" + params.toString(),
      bgClass: "bg-[color:var(--upi-purple)]",
      textClass: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 7.5h-2.25v5.25l-4.5-5.25H7.5v9h2.25V11.25l4.5 5.25H16.5v-9z" />
        </svg>
      ),
    },
    {
      name: "GPay",
      href: "tez://upi/pay?" + params.toString(),
      fallback: "upi://pay?" + params.toString(),
      bgClass: "bg-white border border-border",
      textClass: "text-[color:var(--upi-blue)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path d="M12 11.5v1.5h3.5c-.14.9-.56 1.66-1.2 2.18l1.93 1.5C17.4 15.6 18 13.9 18 12c0-.5-.04-1-.12-1.5H12v1z" fill="#4285F4"/>
          <path d="M6.5 14.16l.44.37 1.56-1.21A5.5 5.5 0 0 1 8 12a5.5 5.5 0 0 1 .5-2.32L7 8.47A7.5 7.5 0 0 0 6.5 12c0 .76.1 1.5.28 2.16H6.5z" fill="#FBBC05"/>
          <path d="M12 6.5c1.24 0 2.36.44 3.24 1.16l1.42-1.42A7.5 7.5 0 0 0 12 4.5a7.5 7.5 0 0 0-6.5 3.77l1.76 1.37A5.5 5.5 0 0 1 12 6.5z" fill="#EA4335"/>
          <path d="M12 17.5a5.5 5.5 0 0 1-4.74-2.74L5.5 16.13A7.5 7.5 0 0 0 12 19.5a7.5 7.5 0 0 0 5-1.9l-1.93-1.5c-.74.57-1.7.9-3.07.4z" fill="#34A853"/>
        </svg>
      ),
    },
    {
      name: "Paytm",
      href: "paytmmp://pay?" + params.toString(),
      fallback: "upi://pay?" + params.toString(),
      bgClass: "bg-[color:var(--upi-blue)]",
      textClass: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9zM8.5 14.5V9.5h2v5h-2zm3 0V9.5h2v5h-2zm3 0V9.5h2v5h-2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className={cn("flex gap-3 justify-center", className)}>
      {apps.map((app) => (
        <a
          key={app.name}
          href={app.href}
          className={cn(
            "flex flex-col items-center gap-1.5 min-w-[72px] min-h-[72px] justify-center",
            "rounded-2xl p-3 transition-all active:scale-[0.97]",
            app.bgClass,
            app.textClass
          )}
          aria-label={"Pay via " + app.name}
        >
          {app.icon}
          <span className={"text-xs font-medium " + app.textClass}>{app.name}</span>
        </a>
      ))}
    </div>
  )
}
