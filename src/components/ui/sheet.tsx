"use client"

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { X } from "lucide-react"

import * as React from "react"

import {
  resolvePortalContainer,
  useIsScoped,
  usePortalScope,
} from "@/components/ui/portal-scope"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  container: containerProp,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  const scope = usePortalScope()
  return (
    <SheetPrimitive.Portal
      data-slot="sheet-portal"
      container={resolvePortalContainer(containerProp, scope)}
      {...props}
    />
  )
}

function SheetOverlay({
  className,
  scoped,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Backdrop> & {
  scoped?: boolean
}) {
  const isScoped = useIsScoped(scoped)
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      data-scoped={isScoped ? "" : undefined}
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:duration-300 data-open:duration-500 fill-mode-forwards bg-overlay",
        isScoped ? "absolute inset-0 z-50" : "fixed inset-0 z-50",
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  scoped,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Popup> & {
  side?: "top" | "bottom" | "left" | "right"
  showCloseButton?: boolean
  scoped?: boolean
}) {
  const isScoped = useIsScoped(scoped)
  return (
    <SheetPortal>
      <SheetOverlay scoped={isScoped} />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        data-scoped={isScoped ? "" : undefined}
        className={cn(
          "bg-background data-open:animate-in data-closed:animate-out flex flex-col gap-4 rounded-sketchy-modal border-2 border-border outline-none transition ease-in-out data-closed:duration-300 data-open:duration-500",
          isScoped ? "absolute z-50" : "fixed z-50",
          side === "right" &&
            "data-closed:slide-out-to-right data-open:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-closed:slide-out-to-left data-open:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-closed:slide-out-to-top data-open:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-closed:slide-out-to-bottom data-open:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            className="absolute right-4 top-4 rounded-base ring-offset-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-3 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-heading", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-foreground font-base", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
