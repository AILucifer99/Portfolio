# Snehan Biswas — Portfolio

A fast, single-page React portfolio built with [Vite](https://vitejs.dev). No backend, no database — everything is static, so it deploys free on Vercel, Netlify, or GitHub Pages.

## Project structure

```
src/
  data/content.js     ← all site text (name, experience, skills, projects…) — edit this first
  components/         ← one .jsx + .css file per section
  App.jsx, main.jsx    ← app shell
public/
  resume.pdf           ← downloaded when a visitor clicks "Résumé"
  favicon.svg
```

To update the content (new role, new project, changed phone number, etc.), edit **`src/data/content.js`** — you generally won't need to touch any component code.

To swap your résumé, replace `public/resume.pdf` with a new file of the same name.

## Run it locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173` link in your browser. The page hot-reloads as you edit files.

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. `npm run preview` serves that build locally so you can check it before deploying.

## Deploy for free

### Option A — Vercel (recommended, zero config)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Leave the defaults (`npm run build`, output `dist`) and click **Deploy**.
4. You'll get a free `your-project.vercel.app` URL, with HTTPS and auto-deploys on every push.

### Option B — Netlify (also zero config)

1. Push this folder to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Pick the repo. Netlify reads the included `netlify.toml` and sets the build command and publish folder automatically.
4. Click **Deploy site**. You'll get a free `your-project.netlify.app` URL.

You can also skip Git entirely: run `npm run build`, then drag the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

### Option C — GitHub Pages

1. Push this folder to a GitHub repository, e.g. `github.com/AILucifer99Languages/portfolio`.
2. In `vite.config.js`, uncomment the `base` line and set it to your repo name:
   ```js
   base: '/portfolio/',
   ```
3. Install the deploy helper (already listed in `package.json`) and run it:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch.
4. In your GitHub repo, go to **Settings → Pages** and set the source to the `gh-pages` branch.
5. Your site will be live at `https://<your-username>.github.io/portfolio/`.

## Using a custom domain

All three platforms support free custom domains (you only pay your domain registrar). Look for **Domains** in the Vercel/Netlify project settings, or **Custom domain** under GitHub Pages settings, and follow the DNS instructions shown there.

## Tech stack

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- Plain CSS with custom properties (no UI framework) — see `src/index.css` for the design tokens
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels) via Google Fonts
