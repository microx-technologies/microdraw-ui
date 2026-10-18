import * as React from "react"

import { cn } from "@/lib/utils"

type BrowserWindowProps = {
  /** Text shown in the fake address bar (e.g. "mysite.com/pricing"). */
  url?: string
  className?: string
  children: React.ReactNode
}

/**
 * Fake browser window shell: traffic lights + address bar on top,
 * page content below. Docs/draft chrome only, no navigation logic.
 *
 * @example
 * ```tsx
 * import { BrowserWindow } from "@/components/ui/browser-window"
 *
 * export function HomePage() {
 *   return (
 *     <BrowserWindow url="mysite.com">
 *       <main>// page sections...</main>
 *       <footer>// footer...</footer>
 *     </BrowserWindow>
 *   )
 * }
 * ```
 *
 * Rules: pass the display URL via `url` (omit it for a bare shell);
 * keep the bar visual only (`aria-hidden` dots, no router wiring).
 */
function BrowserWindow({ url, className, children, ...props }: BrowserWindowProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-sketchy-card border-2 border-border bg-background shadow-shadow",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b-2 border-border bg-secondary-background px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full border-2 border-border bg-background" />
          <span className="size-2.5 rounded-full border-2 border-border bg-background" />
          <span className="size-2.5 rounded-full border-2 border-border bg-main" />
        </div>
        {url ? (
          <div className="flex-1">
            <div className="mx-auto w-fit min-w-80 rounded-sketchy-sm border-2 border-border bg-background px-3 py-0.5 text-[11px] text-muted-foreground">
              {url}
            </div>
          </div>
        ) : null}
      </div>
      {children}
    </div>
  )
}

export { BrowserWindow }
