# Patrícia Patrão de Carvalho — Software Developer Portfolio

## Overview

This repository contains the professional Software Developer portfolio of **Patrícia Patrão de Carvalho**.

The site presents:

- professional experience;
- software development projects;
- frontend and backend experience;
- a data-oriented technical background;
- technical skills.

It is a deliberately designed Angular application, not a default scaffold.

## Tech Stack

Technologies used by this portfolio application:

| Area | Technology |
| --- | --- |
| Framework | Angular (standalone components, lazy-loaded routes) |
| Language | TypeScript |
| Styling | SCSS |
| Routing | Angular Router (anchor scrolling and scroll position restoration) |
| Reactive utilities | RxJS (including Angular `rxjs-interop`) |
| UI library configuration | PrimeNG with Aura theme via `@primeuix/themes` |
| Testing | Vitest (Angular unit-test builder) |
| Version control | Git / GitHub |
| Hosting | Vercel |

PrimeNG is configured in the application bootstrap. The portfolio interface is primarily custom SCSS rather than PrimeNG component templates.

## Architecture

The application is organised as follows:

```text
src/app/
├── app.ts / app.config.ts / app.routes.ts   # Application shell and routing
├── core/
│   ├── seo/          # Page title and meta tags
│   └── theme/        # Light / dark theme
├── features/
│   ├── portfolio/    # Main page composition
│   ├── home/
│   ├── about/
│   ├── experience/
│   ├── projects/     # Listing, shared project data, detail pages
│   ├── skills/
│   ├── contact/
│   └── not-found/
└── shared/
    ├── components/navbar/
    └── components/footer/
```

### Routes

| Path | Purpose |
| --- | --- |
| `/` | Single-page portfolio (Home, About, Experience, Projects, Skills, Contact) |
| `/projects/:slug` | Project detail page |
| `**` | Custom 404 page |

The shell renders the navbar and a router outlet. Feature areas are lazy-loaded where appropriate.

## Features

Implemented functionality in the current application:

- single-page portfolio experience with dedicated sections;
- navbar section navigation via URL fragments;
- light and dark themes, with preference persisted in `localStorage`;
- project listing on the main page;
- project detail pages driven by slug and shared project data;
- responsive layout across desktop and mobile breakpoints;
- custom 404 handling for unknown routes;
- SEO metadata (document title and description);
- Open Graph and Twitter social metadata (static defaults in `index.html`, updated dynamically per route via `PageMetaService`);
- unit tests for the application shell;
- Vercel deployment with SPA client-side routing support.

## Projects

The portfolio documents the following professional projects at a high level:

- **GreenWatch** — Frontend Developer. Production web application for monitoring and analysing land and forest areas, combining geospatial information with environmental metrics and portfolio insights.
- **Newspace-Riscos** — Full-Stack Developer. Climate-risk platform for defining an area of interest, running staged calculations, inspecting geospatial layers, and producing reports.
- **Newspace-3D** — Frontend Developer. Web viewer for selecting a predefined area, starting a satellite surface-reconstruction job, and inspecting the textured 3D result with risk metadata.
- **Forms Platform** — Full-Stack Developer. Survey platform for designing structured questionnaires, distributing them to respondents, collecting answers, and reviewing results.
- **MetaFacturing** — Full-Stack Developer. Website and API for exploring welding process data within an EU digital-twin project, complemented by related exploitation and business planning work.

Further detail is available on each project’s page within the site. This repository does not include confidential client systems, credentials, or private APIs.

## Development

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

This runs `ng serve`. Open `http://localhost:4200/` in the browser. The app reloads on source changes.

### Run tests

```bash
npm test
```

This runs `ng test` with the Vitest-based Angular unit-test builder.

### Production build

```bash
npm run build
```

This runs `ng build` and writes artefacts to `dist/`.

## Deployment

The application is deployed on **Vercel** and connected to the **GitHub** repository.

[`vercel.json`](vercel.json) configures:

- `outputDirectory` as `dist/patricia-portfolio/browser`;
- a rewrite of all routes to `/index.html` so Angular client-side routing works in production.

No environment secrets are required for the static portfolio build.

## Author

**Patrícia Patrão de Carvalho**  
Software Developer

- GitHub: [github.com/PatriciaPatrao](https://github.com/PatriciaPatrao)
- LinkedIn: [linkedin.com/in/patriciapatrao](https://www.linkedin.com/in/patriciapatrao/)
