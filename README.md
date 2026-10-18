# microdraw-ui ✏️

Hand-drawn, sketchy neobrutalist components built for [shadcn/ui](https://ui.shadcn.com) and Tailwind CSS v4.

`microdraw-ui` gives your applications a distinctive hand-crafted, doodled aesthetic with organic wobbly borders, crisp high-contrast black-and-white lines, and bold brutalist drop shadows — while maintaining full accessibility and radix/base-ui primitives.

---

## 🎨 Features

- **Sketchy / Hand-Drawn Borders**: Custom Tailwind CSS v4 `@utility` borders (`rounded-sketchy`, `rounded-sketchy-sm`, `rounded-sketchy-lg`, `rounded-sketchy-pill`, `rounded-sketchy-input`, etc.) simulating natural pen-and-paper strokes.
- **Monochrome & High Contrast**: Minimalist black & white default neobrutalism palette with deep solid offsets.
- **Full Chart Color Support**: Classic multi-color palettes preserved for data visualization and charts.
- **shadcn/ui Compatible**: Install components directly into any Next.js or React project using the standard shadcn CLI.
- **Pure Tailwind CSS v4**: Built natively with `@theme inline` and modern CSS utility layers.

---

## 🚀 Quick Start

> [!IMPORTANT]
> **Tailwind CSS v4 Prerequisite:**
> Ensure your main stylesheet (e.g. `src/index.css` or `app/globals.css`) contains `@import "tailwindcss";` before adding components or themes. Running `shadcn add` on a completely empty (0-byte) stylesheet triggers a known upstream PostCSS crash in the shadcn CLI (`TypeError: Cannot read properties of undefined (reading 'proxyOf')`).

### 1. Register the `@microdraw` Namespace (Recommended)

Register the registry in your `components.json`:

```bash
# Bun
bun x shadcn registry add @microdraw=https://microx-technologies.github.io/microdraw-ui/r/{name}.json

# pnpm
pnpm dlx shadcn registry add @microdraw=https://microx-technologies.github.io/microdraw-ui/r/{name}.json

# npm / npx
npx shadcn registry add @microdraw=https://microx-technologies.github.io/microdraw-ui/r/{name}.json
```

---

### 2. Add the Sketchy Base Theme

Install the base theme and sketchy Tailwind utility tokens into your project:

#### Using Registry Alias
```bash
bun x shadcn add @microdraw/styling/neutral
# or: npx shadcn add @microdraw/styling/neutral
```

#### Using Direct URL
```bash
bun x --bun shadcn add https://microx-technologies.github.io/microdraw-ui/r/styling/neutral.json
# or: npx shadcn add https://microx-technologies.github.io/microdraw-ui/r/styling/neutral.json
```

---

### 3. Add Components

#### Using Registry Alias
```bash
bun x shadcn add @microdraw/button @microdraw/card @microdraw/dialog
# or: npx shadcn add @microdraw/button @microdraw/card @microdraw/dialog
```

#### Using Direct URLs
```bash
bun x --bun shadcn add https://microx-technologies.github.io/microdraw-ui/r/button.json
```

---

## 📦 Component Catalog

All components are hosted at `https://microx-technologies.github.io/microdraw-ui/r/<component>.json`:

| Category | Components |
|---|---|
| **Buttons & Actions** | [`button`](https://microx-technologies.github.io/microdraw-ui/r/button.json), [`button-group`](https://microx-technologies.github.io/microdraw-ui/r/button-group.json), [`toggle`](https://microx-technologies.github.io/microdraw-ui/r/toggle.json), [`toggle-group`](https://microx-technologies.github.io/microdraw-ui/r/toggle-group.json), [`kbd`](https://microx-technologies.github.io/microdraw-ui/r/kbd.json) |
| **Forms & Inputs** | [`input`](https://microx-technologies.github.io/microdraw-ui/r/input.json), [`input-group`](https://microx-technologies.github.io/microdraw-ui/r/input-group.json), [`input-otp`](https://microx-technologies.github.io/microdraw-ui/r/input-otp.json), [`textarea`](https://microx-technologies.github.io/microdraw-ui/r/textarea.json), [`checkbox`](https://microx-technologies.github.io/microdraw-ui/r/checkbox.json), [`radio-group`](https://microx-technologies.github.io/microdraw-ui/r/radio-group.json), [`select`](https://microx-technologies.github.io/microdraw-ui/r/select.json), [`native-select`](https://microx-technologies.github.io/microdraw-ui/r/native-select.json), [`combobox`](https://microx-technologies.github.io/microdraw-ui/r/combobox.json), [`slider`](https://microx-technologies.github.io/microdraw-ui/r/slider.json), [`switch`](https://microx-technologies.github.io/microdraw-ui/r/switch.json), [`form`](https://microx-technologies.github.io/microdraw-ui/r/form.json), [`field`](https://microx-technologies.github.io/microdraw-ui/r/field.json), [`calendar`](https://microx-technologies.github.io/microdraw-ui/r/calendar.json) |
| **Data & Display** | [`badge`](https://microx-technologies.github.io/microdraw-ui/r/badge.json), [`card`](https://microx-technologies.github.io/microdraw-ui/r/card.json), [`image-card`](https://microx-technologies.github.io/microdraw-ui/r/image-card.json), [`table`](https://microx-technologies.github.io/microdraw-ui/r/table.json), [`data-table`](https://microx-technologies.github.io/microdraw-ui/r/data-table.json), [`chart`](https://microx-technologies.github.io/microdraw-ui/r/chart.json), [`avatar`](https://microx-technologies.github.io/microdraw-ui/r/avatar.json), [`marker`](https://microx-technologies.github.io/microdraw-ui/r/marker.json), [`marquee`](https://microx-technologies.github.io/microdraw-ui/r/marquee.json), [`progress`](https://microx-technologies.github.io/microdraw-ui/r/progress.json), [`skeleton`](https://microx-technologies.github.io/microdraw-ui/r/skeleton.json), [`spinner`](https://microx-technologies.github.io/microdraw-ui/r/spinner.json), [`empty`](https://microx-technologies.github.io/microdraw-ui/r/empty.json), [`bubble`](https://microx-technologies.github.io/microdraw-ui/r/bubble.json), [`stat-pill`](https://microx-technologies.github.io/microdraw-ui/r/stat-pill.json), [`section`](https://microx-technologies.github.io/microdraw-ui/r/section.json) |
| **Feedback & Overlays** | [`alert`](https://microx-technologies.github.io/microdraw-ui/r/alert.json), [`alert-dialog`](https://microx-technologies.github.io/microdraw-ui/r/alert-dialog.json), [`dialog`](https://microx-technologies.github.io/microdraw-ui/r/dialog.json), [`drawer`](https://microx-technologies.github.io/microdraw-ui/r/drawer.json), [`sheet`](https://microx-technologies.github.io/microdraw-ui/r/sheet.json), [`popover`](https://microx-technologies.github.io/microdraw-ui/r/popover.json), [`tooltip`](https://microx-technologies.github.io/microdraw-ui/r/tooltip.json), [`hover-card`](https://microx-technologies.github.io/microdraw-ui/r/hover-card.json), [`toast`](https://microx-technologies.github.io/microdraw-ui/r/toast.json) |
| **Navigation & Layout** | [`accordion`](https://microx-technologies.github.io/microdraw-ui/r/accordion.json), [`breadcrumb`](https://microx-technologies.github.io/microdraw-ui/r/breadcrumb.json), [`command`](https://microx-technologies.github.io/microdraw-ui/r/command.json), [`context-menu`](https://microx-technologies.github.io/microdraw-ui/r/context-menu.json), [`dropdown-menu`](https://microx-technologies.github.io/microdraw-ui/r/dropdown-menu.json), [`menubar`](https://microx-technologies.github.io/microdraw-ui/r/menubar.json), [`navigation-menu`](https://microx-technologies.github.io/microdraw-ui/r/navigation-menu.json), [`pagination`](https://microx-technologies.github.io/microdraw-ui/r/pagination.json), [`resizable`](https://microx-technologies.github.io/microdraw-ui/r/resizable.json), [`scroll-area`](https://microx-technologies.github.io/microdraw-ui/r/scroll-area.json), [`sidebar`](https://microx-technologies.github.io/microdraw-ui/r/sidebar.json), [`tabs`](https://microx-technologies.github.io/microdraw-ui/r/tabs.json), [`carousel`](https://microx-technologies.github.io/microdraw-ui/r/carousel.json), [`collapsible`](https://microx-technologies.github.io/microdraw-ui/r/collapsible.json), [`browser-window`](https://microx-technologies.github.io/microdraw-ui/r/browser-window.json) |
| **Interactive & Messaging** | [`message`](https://microx-technologies.github.io/microdraw-ui/r/message.json), [`message-scroller`](https://microx-technologies.github.io/microdraw-ui/r/message-scroller.json), [`attachment`](https://microx-technologies.github.io/microdraw-ui/r/attachment.json), [`direction`](https://microx-technologies.github.io/microdraw-ui/r/direction.json), [`questionnaire`](https://microx-technologies.github.io/microdraw-ui/r/questionnaire.json), [`item`](https://microx-technologies.github.io/microdraw-ui/r/item.json), [`label`](https://microx-technologies.github.io/microdraw-ui/r/label.json) |

---

## 🛠️ Development

Requirements: [Bun](https://bun.sh) (v1.0+)

```bash
# Install dependencies
bun install

# Generate registry definitions
bun run registry:generate

# Build registry JSON distribution files into public/r
bun run registry:build

# Build everything (registry + copy root registry.json to public)
bun run build
```

---

## 📄 License

MIT © [microx-technologies](https://github.com/microx-technologies)
