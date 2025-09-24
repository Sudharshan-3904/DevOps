# MyStream (Vite + React)

Modern streaming‑style UI demonstrating category rails, responsive cards, search/filter, and a polished dark theme.

## Introduction

This project is a small React app scaffolded with Vite. It renders four content categories (Movies, TV Shows, Specials, Originals) with a responsive card grid, a hero section, a header with location controls, and lightweight placeholder posters so it runs out‑of‑the‑box without local assets.

## Features

- Responsive card grid using CSS Grid (auto‑fit columns)
- Hero section with search input and category filters
- Header with simple login toggle and location picker/detector
- Animated skeleton placeholders for cards
- Title‑based poster placeholders (no asset setup required)
- Clean dark theme and hover effects

## Tech Stack

- React 19, Vite 7
- Vanilla CSS (component styles + global)
- ESLint 9 (optional linting)

## Project Structure

```files
├─ index.html
├─ src
│  ├─ main.jsx              # App entry
│  ├─ App.jsx               # Root layout, sample data, hero, filters
│  ├─ App.css               # Global styles, grids, hero
│  ├─ index.css             # Base CSS + layout fixes
│  ├─ header.jsx / header.css
│  └─ components
│     ├─ Card.jsx / Card.css
│     ├─ Movies.jsx / Movies.css
│     ├─ TVShows.jsx / TVShows.css
│     ├─ Specials.jsx / Specials.css
│     └─ Originals.jsx / Originals.css
└─ public
   └─ pics/placeholder.svg  # Fallback poster
```

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build (production)

```bash
npm run build
```

### Preview built app

```bash
npm run preview
```

## Run with Docker

This repo includes a production‑ready multi‑stage Dockerfile (Node build → Nginx serve).

### Build image

```bash
docker build -t mystream:latest .
```

### Run container

```bash
docker run --rm -p 8080:80 mystream:latest
```

Open `http://localhost:8080`.

Notes:

- Nginx uses `nginx.conf` with SPA history fallback (serves `/index.html` for unknown routes).
- `.dockerignore` excludes `node_modules`, `dist`, VCS, editor folders to keep the image small.
- Multi‑stage build caches `npm install` to speed up subsequent builds.

## Available Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Assets

Posters are automatically generated as placeholders using the title text. To replace with real images, add files under `public/pics` and update paths in `src/App.jsx` (or keep the placeholder helper as is).

The fallback file `public/pics/placeholder.svg` is used when an image fails to load.

## Configuration

- Port: Vite defaults to 5173. To expose on LAN: `npm run dev -- --host`.
- Linting: Adjust rules in `eslint.config.js` if needed.

## Troubleshooting

- Blank space or narrow content: ensure `src/index.css` is in place so `html, body, #root` are full‑width and the body isn’t centered.
- Images not appearing: placeholders should render automatically; verify your network can reach `https://placehold.co`.
- Geolocation prompt blocked: location controls will fallback gracefully.

## Roadmap Ideas

- Persist search/filters in URL params
- Lazy‑load sections and images via IntersectionObserver
- Real data source integration (REST/GraphQL) and loading states

---
