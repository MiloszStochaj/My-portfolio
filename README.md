# My Portfolio

Personal portfolio site built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment (Netlify)

The repository includes `netlify.toml` with:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA redirects:** all routes serve `index.html` for React Router

Connect the GitHub repository in the Netlify dashboard; builds run automatically on push to `main`.

## Content & i18n

Localized copy lives in `content/pl/` and `content/en/` as JSON files, loaded at build time via Vite aliases.
