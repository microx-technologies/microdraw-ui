import * as React from "react"

import { cn } from "@/lib/utils"

type StatPillProps = {
  tone?: "default" | "main"
  className?: string
  children: React.ReactNode
}

/** Small metric pill for hero asides (m² totals, status flags). */
function StatPill({ tone = "default", className, children }: StatPillProps) {
  return (
    <span
      className={cn(
        "rounded-sketchy-pill border-2 border-border px-2 py-0.5 text-xs font-bold",
        tone === "default" ? "bg-secondary-background" : "bg-main text-main-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}

export { StatPill }
