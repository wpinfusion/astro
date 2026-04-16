# Copilot Instructions

This is a personal Astro starter template — a reusable base for new projects. Changes here should generalize well, not be project-specific.

## Stack

- **Astro 6** (static output) + **Tailwind CSS v4** (via `@tailwindcss/vite`, no config file)
- **`@tailwindplus/elements`** — custom element library for popovers, dialogs, disclosures (`<el-popover>`, `<el-dialog>`, `<el-disclosure>`, etc.). Imported once in `Layout.astro` via `<script>`.
- **`tailwind-merge`** — use `twMerge()` for all dynamic class merging (never `class:list`)
- **`tailwind-variants`** — use `tv()` for multi-variant components (see `Button.astro`)
- **`unplugin-icons`** — import icons as components: `import LucideX from "~icons/lucide/x"`
- **Biome** — linter + formatter (tabs, double quotes). No ESLint/Prettier.

## Path Aliases

`@/*` maps to `src/*`. Always use `@/` for imports within `src/`:
```ts
import Layout from "@/layouts/Layout.astro"
import { siteName } from "@/data/config"
```

## Project Conventions

### Data lives in `src/data/`
- `config.ts` — site-wide settings (name, lang, GTM ID, contact info, feature flags like `enableCookieModal`)
- `menus.ts` — nav structure as `NavMenu` (typed array of `NavItem`)

### Types live in `src/types.ts`
All component prop interfaces are defined here and imported with `import type`. The `NavItem` interface uses an index signature (`[key: string]: unknown`) to allow extra anchor attributes.

### Component pattern
Props are destructured from `Astro.props` with an explicit `Props` type:
```astro
---
import type { SectionProps as Props } from "@/types";
const { id, class: className = "bg-white" } = Astro.props;
---
```

For interactive/variant-heavy components, use `tailwind-variants`:
```astro
const button = tv({ base: [...], variants: { variant: {...}, size: {...} } });
```

### Classname merging
Always use `twMerge()` when combining default classes with user-supplied overrides. The `class` prop on `NavItem` and components extends/overrides defaults intelligently.

### `target="_blank"` handling
When a `NavItem` has `target="_blank"`, `noopener noreferrer` is automatically prepended to `rel`. Do not add it manually in data.

## Layout Structure

Every page wraps in `<Layout>` which provides `<Header>`, `<Footer>`, `<ModalCookies>`, global CSS, and the `@tailwindplus/elements` script. Use the `head` slot for page-specific `<meta>` or `<script>` tags.

Page composition pattern:
```astro
<Layout title="Page Title">
  <Section>
    <Container>...</Container>
  </Section>
</Layout>
```

`Container` uses the custom `@utility container` from `global.css` (centered, responsive padding). `Section` defaults to `bg-white`.

## Dev Commands

```sh
npm run dev      # localhost:4321
npm run build    # output to ./dist/
astro check      # TypeScript type checking
```

## Tailwind CSS v4 Notes

- No `tailwind.config.*` — theme tokens go in `@theme {}` inside `global.css`
- Custom utilities go in `@utility {}` (see the `container` utility)
- Typography plugin loaded via `@plugin "@tailwindcss/typography"`
