# UCR Belonging Map

![React](https://img.shields.io/badge/React-FF4154?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23407ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Authors**

[![Static Badge](https://img.shields.io/badge/Xiyuan%20Wu-path?style=for-the-badge&color=%2387CEEB)](https://github.com/XiyuanWu)
[![Static Badge](https://img.shields.io/badge/Christopher%20Amaya-path?style=for-the-badge&color=%2390EE90)](https://github.com/Chris301000)
[![Static Badge](https://img.shields.io/badge/Michelle%20Nieto-path?style=for-the-badge&color=%23CBC3E3)](https://github.com/michellenieto5)


## Overview

The UCR Belonging Map is a web experience that helps students, staff, faculty, and visitors find places and programs that support a sense of belonging at UC Riverside and nearby. It brings together campus services and off‑campus spots—advising offices, cultural events, dining, faith spaces, student organizations, and more—so people can explore what exists, where it is, and how to connect.

The site is organized around community hubs (for example Hispanic or Latino, Asian / AAPI, and others). Each hub pairs a map with resource cards so filters stay in sync with what you see in the list. The aim is to improve visibility, access, and connection to spaces that reflect diverse cultures, identities, and histories.

## Inspiration

The project takes cues from Sacramento State’s Belonging Maps idea: one platform that blends institutional resources with neighborhood and regional points of interest, presented in a clear, student‑friendly way. This implementation is independent and tailored to UCR and the Inland Empire context.

## Page View
![](./data/Homepage.png)
![](./data/Subpage.png)

## Getting started

From the repository root:

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
```

Set `VITE_GOOGLE_MAPS_API_KEY` in a `.env` file at the project root (this file is gitignored).

## Deploy to GitHub Pages

### Option A — GitHub Actions (matches “Deploy from GitHub Actions” / workflow on `main`)

1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions** (not “Deploy from a branch” unless you only publish `dist` on `main`).
2. Push `main`; the workflow in `.github/workflows/pages.yml` runs `npm ci`, `npm run build`, and uploads `dist/`.
3. **`vite.config.js` `base`:** use `"/"` for a site at `https://<user>.github.io` (typical `username.github.io` repo). Use `"/YourRepoName/"` only for project pages at `https://<user>.github.io/YourRepoName/`.
4. Optional: add repository secret **`VITE_GOOGLE_MAPS_API_KEY`** so the map works in production builds.

### Option B — `gh-pages` branch (`npm run deploy`)

From the repo root:

```bash
npm run deploy
```

Then in **Settings → Pages**, set Source to the **`gh-pages`** branch and `/ (root)`. Ensure `base` in `vite.config.js` matches the real URL path (see step 3 above).

