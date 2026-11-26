# Ratesboard Web

Marketing site for **Ratesboard** — an enterprise-grade mortgage pricing engine (PPE) for lenders, brokers, and lock desks.

## Stack

- Next.js 15 (App Router) + TypeScript
- Netlify Next.js runtime (`@netlify/plugin-nextjs`)
- Static marketing pages only (no backend, auth, or data layer)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint (Next.js) |
| `npm run typecheck` | `tsc --noEmit` |

## Netlify build settings

Use these exact values when linking the site:

| Setting | Value |
| --- | --- |
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Node version** | `22` (set in `netlify.toml` as `NODE_VERSION`) |

Framework: Netlify auto-detects Next.js; `netlify.toml` is included for build command, publish directory, Node version, and the Next.js plugin.

## Brand assets

Logo SVGs live in `public/brand/`. Favicons reference `public/brand/favicon.ico` and `ratesboard-icon-color.svg`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — product overview and capabilities |
| `/platform` | Platform deep dive |
| `/contact` | Request a demo (mailto) |
| `/privacy` | Privacy placeholder |
| `/terms` | Terms placeholder |

## Footer

© [Knowe LLC](https://knowe.one)