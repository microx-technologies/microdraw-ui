import fs from "fs"
import path from "path"

import colors, { ColorMode, ColorPalette } from "@/data/colors"

const SITE_URL = "https://microx-technologies.github.io/microdraw-ui"

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

// Monochromatic palettes keep their original file names (e.g. blue.json),
// duotone palettes get a "-duotone" suffix (e.g. blue-duotone.json).
const PALETTES = (Object.keys(colors) as ColorMode[]).flatMap((mode) =>
  colors[mode].map((color: ColorPalette) => ({
    ...color,
    id: mode === "monochromatic" ? color.name : `${color.name}-${mode}`,
    title:
      mode === "monochromatic"
        ? `Neobrutalism ${capitalize(color.name)}`
        : `Neobrutalism ${capitalize(color.name)} ${capitalize(mode)}`,
  })),
)

// Everything below mirrors src/styling/globals.css. Each palette compiles to
// a registry:style item that `shadcn init <url>` writes into a fresh
// project's globals.css, so it has to carry every token and rule the ui
// components depend on, not just the palette colours. Keep the two in sync.

// @theme inline tokens. The CLI adds a --color-* entry for every colour in
// cssVars.light on its own; the rest are listed here.
const THEME = {
  "color-main": "var(--main)",
  "color-background": "var(--background)",
  "color-secondary-background": "var(--secondary-background)",
  "color-foreground": "var(--foreground)",
  "color-main-foreground": "var(--main-foreground)",
  "color-border": "var(--border)",
  "color-ring": "var(--ring)",
  "color-overlay": "var(--overlay)",
  "color-chart-1": "var(--chart-1)",
  "color-chart-2": "var(--chart-2)",
  "color-chart-3": "var(--chart-3)",
  "color-chart-4": "var(--chart-4)",
  "color-chart-5": "var(--chart-5)",
  "spacing-boxShadowX": "2px",
  "spacing-boxShadowY": "2px",
  "spacing-reverseBoxShadowX": "-2px",
  "spacing-reverseBoxShadowY": "-2px",
  "spacing-boxShadowX-half": "1px",
  "spacing-boxShadowY-half": "1px",
  "spacing-reverseBoxShadowX-half": "-1px",
  "spacing-reverseBoxShadowY-half": "-1px",
  "radius-base": "255px 25px 225px 25px / 25px 225px 25px 255px",
  "radius-sketchy": "255px 25px 225px 25px / 25px 225px 25px 255px",
  "radius-sketchy-lg": "55px 225px 15px 25px / 25px 25px 35px 355px",
  "radius-sketchy-sm": "255px 25px 225px 25px / 25px 225px 25px 255px",
  "radius-sketchy-card": "15px 6px 12px 5px / 5px 12px 6px 15px",
  "radius-sketchy-card-header": "13px 4px 0 0 / 3px 10px 0 0",
  "radius-sketchy-modal": "15px 5px 5px 25px / 5px 25px 25px 5px",
  "radius-sketchy-popover": "45px 85px 15px 25px / 15px 10px 35px 555px",
  "radius-sketchy-dropdown": "555px 25px 25px 25px / 25px 25px 25px 555px",
  "radius-sketchy-toast": "10px 10px 15px 5px / 5px 15px 5px 15px",
  "radius-sketchy-tab": "45px 15px 225px 5px / 25px 225px 25px 255px",
  "radius-sketchy-table": "5px 25px 5px 25px / 25px 5px 25px 5px",
  "radius-sketchy-table-cell": "5px 5px 25px 4px / 5px 4px 3px 5px",
  "radius-sketchy-checkbox": "2px 8px 2px 4px / 5px 3px 5px 3px",
  "radius-sketchy-radio": "50% 45% 40% 50% / 40% 50% 50% 45%",
  "radius-sketchy-switch": "30% 35% 30% 30% / 30% 50% 30% 45%",
  "radius-sketchy-page": "425px 255px 25px 25px / 25px 25px 5px 25px",
  "radius-sketchy-item": "255px 5px 225px 5px / 25px 225px 25px 255px",
  "radius-sketchy-pill": "7rem 8rem 8rem 8rem / 4rem 5rem 6rem 6rem",
  "font-weight-base": "500",
  "font-weight-heading": "700",
  "shadow-shadow": "var(--shadow)",
  "shadow-shadow-half": "1px 1px 0px 0px var(--border)",
  "animate-marquee": "marquee 5s linear infinite",
  "animate-marquee2": "marquee2 5s linear infinite",
}

// Extra CSS the components need beyond tokens: the tw-animate-css import
// (dialogs, sheets and so on use its animate-in utilities), the base font
// weights, the marquee keyframes and the scrollbar styling used by
// scroll-area. The CLI places @keyframes inside @theme inline, like
// globals.css does.
const CSS = {
  '@import "tw-animate-css"': {},
  "@layer base": {
    body: {
      "font-weight": "var(--font-weight-base)",
      color: "var(--foreground)",
    },
    "h1, h2, h3, h4, h5, h6": {
      "font-weight": "var(--font-weight-heading)",
    },
  },
  "@keyframes marquee": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "@keyframes marquee2": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "body, .scrollbar": {
    "--sb-track-color": "#ffffff",
    "--sb-thumb-color": "#000000",
  },
  ".scrollbar::-webkit-scrollbar": { width: "12px" },
  ".scrollbar::-webkit-scrollbar-track": {
    background: "var(--sb-track-color)",
  },
  ".scrollbar::-webkit-scrollbar-thumb": {
    background: "var(--sb-thumb-color)",
  },
  "@supports not selector(::-webkit-scrollbar)": {
    ".scrollbar": {
      "scrollbar-color": "var(--sb-thumb-color) var(--sb-track-color)",
    },
  },
}

const STYLES = PALETTES.map((color) => ({
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: `neobrutalism-${color.id}`,
  type: "registry:style",
  // A palette is the whole theme, so init starts from this item alone
  // instead of layering it over shadcn's default style. "utils" is
  // shadcn's own item for lib/utils.ts, which every component imports.
  extends: "none",
  title: color.title,
  description:
    "A collection of neobrutalism-styled components based on shadcn/ui.",
  dependencies: ["tw-animate-css", "class-variance-authority", "lucide-react"],
  // Button is installed alongside the theme so init scaffolds a project
  // with something already on the page.
  registryDependencies: ["utils", `${SITE_URL}/r/button.json`],
  cssVars: {
    light: {
      background: color.bg,
      "secondary-background": "oklch(100% 0 0)",
      main: color.main,
      ring: "oklch(0% 0 0)",
      foreground: "oklch(0% 0 0)",
      "main-foreground": color.mainForeground ?? "oklch(0% 0 0)",
      border: "oklch(0% 0 0)",
      overlay: "oklch(0% 0 0 / 0.8)",
      shadow: "2px 2px 0px 0px var(--border)",
      "chart-1": color.chart1,
      "chart-2": color.chart2,
      "chart-3": color.chart3,
      "chart-4": color.chart4,
      "chart-5": color.chart5,
      "chart-active-dot": "#000",
    },
    theme: THEME,
  },
  css: CSS,
}))

// Create directory if it doesn't exist
const dir = path.join(process.cwd(), "public", "r", "styling")
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

// Write all styles to files
STYLES.forEach((style) => {
  fs.writeFileSync(
    path.join(dir, `${style.name.replace("neobrutalism-", "")}.json`),
    JSON.stringify(style, null, 2),
  )
})

// Normalize line endings inside the generated registry items so the output
// does not depend on the line endings of the checkout (git autocrlf on Windows).
// The file contents are JSON strings, so CRLF shows up as the escaped "\r\n".
const registryDir = path.join(process.cwd(), "public", "r")
fs.readdirSync(registryDir)
  .filter((file) => file.endsWith(".json"))
  .forEach((file) => {
    const filePath = path.join(registryDir, file)
    fs.writeFileSync(
      filePath,
      fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n"),
    )
  })

console.log(`Wrote ${STYLES.length} styling items to ${dir}`)
