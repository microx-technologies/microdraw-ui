"use client"

import * as React from "react"

export type PortalScopeContainer = HTMLElement | ShadowRoot | null

const PortalScopeContext = React.createContext<PortalScopeContainer>(null)

export function PortalScopeProvider({
  container,
  children,
}: {
  container: PortalScopeContainer
  children: React.ReactNode
}) {
  return (
    <PortalScopeContext.Provider value={container}>
      {children}
    </PortalScopeContext.Provider>
  )
}

export function usePortalScope() {
  return React.useContext(PortalScopeContext)
}

export function useIsScoped(scoped?: boolean) {
  const container = usePortalScope()
  return scoped ?? container != null
}

export type PortalContainerProp =
  PortalScopeContainer | React.RefObject<PortalScopeContainer>

export function resolvePortalContainer(
  explicit: PortalContainerProp | undefined,
  fallback: PortalScopeContainer,
): PortalContainerProp | undefined {
  return explicit ?? fallback ?? undefined
}
