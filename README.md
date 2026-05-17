# Hamel Hawks Site — 1926–2026 Centennial

Marketing + community site for the Hamel Hawks town ball team. Class B · North Star League.

## Stack

- **Astro** (TypeScript, static output)
- **Express** for production static-file serving on Railway
- No React/Vue runtime — the design handoff used React-via-Babel-CDN (dev-only); production is plain HTML/CSS with small dollops of vanilla JS for interactivity (timeline fade-in, schedule/roster filters, sortable stat tables, roster card-flip, hero monogram tilt).

## Local dev

```bash
pnpm install
pnpm dev          # astro dev, http://localhost:4321
pnpm build        # static output to dist/
pnpm preview      # serve dist/ via astro preview
pnpm start        # serve dist/ via Express (production mode)
```

## Pages

- `/` — home (hero, decade timeline, championship banners, history video, notable figures, upcoming games, field, sponsor wall, centennial CTA)
- `/schedule` — 2026 season with filters, month groupings, special-events sidebar
- `/roster` — 25 players with flip-cards, filters; coaches section
- `/stats` — team leaders + sortable hitting/pitching tables
- `/standings` — Class B + Class C tables
- `/field` — Paul Fortin Memorial Field tour with diamond diagram
- `/sponsors` — premier + supporting partners
- `/news` — feature article + story rows
- `/shop` — centennial merchandise grid
- `/contact` — form + direct-line cards

## Data

All site content lives in `src/data/`:

- `decades.ts` — timeline + notable figures
- `schedule.ts` — full 2026 schedule
- `roster.ts` — players + coaches
- `stats.ts` — hitting, pitching, standings
- `news.ts` — feature story + news rows
- `sponsors.ts` — partner tiers
- `shop.ts` — merchandise

To update content, edit the relevant `.ts` file and redeploy. No CMS yet; intentional for v1.

## Deployment

- **Host:** Railway (Nixpacks builder)
- **Build:** `npm run build` (produces `dist/`)
- **Serve:** `npm run start` (Express on `$PORT`)
- **Healthcheck:** `/healthz`

## TODO

- [ ] Replace placeholder roster/schedule/stats data with real Greg-confirmed content
- [ ] Wire up contact form backend (Formspree or serverless function)
- [ ] Custom domain pointing at Railway
- [ ] Open Graph image (currently uses logo)
