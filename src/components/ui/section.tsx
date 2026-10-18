import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Page section rhythm: full-bleed bands (`Section`) with constrained
 * content (`Container`). Alternate `tint` to separate bands.
 *
 * @example
 * ```tsx
 * import {
 *   Container,
 *   Section,
 *   SectionDescription,
 *   SectionHeader,
 *   SectionLink,
 *   SectionMainTitle,
 *   SectionTitle,
 * } from "@/components/ui/section"
 *
 * export function MaterialsSection() {
 *   return (
 *     <Section tint>
 *       <Container>
 *         <SectionHeader>
 *           <div className="flex w-full flex-wrap items-center justify-between gap-2">
 *             <SectionTitle>
 *               <SectionMainTitle>Materiales más cotizados</SectionMainTitle>
 *             </SectionTitle>
 *             <SectionLink>Ver catálogo</SectionLink>
 *           </div>
 *           <SectionDescription>Precio mayorista por unidad.</SectionDescription>
 *         </SectionHeader>
 *         // grid of cards goes here
 *       </Container>
 *     </Section>
 *   )
 * }
 * ```
 *
 * Rules: one `Container` per `Section`; content components stay bare
 * (no card wrappers at page level); `SectionLink` for the header action.
 */

type SectionProps = ComponentProps<"section"> & {
  /** Tinted band with the house secondary background. */
  tint?: boolean
}

/**
 * Full-width section block: vertical rhythm + bottom divider.
 * Content width is gated by `Container`, not here.
 */
function Section({ className, tint = false, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("flex w-full flex-col py-14", tint && "bg-secondary-background", className)}
      {...props}
    >
      {children}
    </section>
  )
}

/** Max-width gate: full-bleed backgrounds on `Section`, constrained content here. */
function Container({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-7xl flex-col px-6 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function SectionHeader({
  children,
  className,
  align = "start",
  ...props
}: ComponentProps<"div"> & { align?: "start" | "center" }) {
  return (
    <div
      className={cn(
        "mb-4 flex flex-col gap-2",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SectionEyebrow({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SectionMainTitle({
  children,
  className,
  as = "h2",
  ...props
}: ComponentProps<"h1"> & { as?: "h1" | "h2" | "h3" }) {
  const Comp = as
  return (
    <Comp
      className={cn(
        "font-heading font-bold",
        as === "h1" && "text-3xl md:text-4xl",
        as === "h2" && "text-xl",
        as === "h3" && "text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function SectionTitle({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {children}
    </div>
  )
}

function SectionDescription({ children, className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("m-0 max-w-[42rem] text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

/** Header action in the SectionLink slot: neutral sketchy button. */
function SectionLink({
  className,
  ...props
}: Omit<ComponentProps<typeof Button>, "variant" | "size">) {
  return <Button variant="neutral" size="sm" className={cn("w-fit", className)} {...props} />
}

export {
  Container,
  Section,
  SectionDescription,
  SectionEyebrow,
  SectionHeader,
  SectionLink,
  SectionMainTitle,
  SectionTitle,
}
