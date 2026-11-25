# Selvaraj Ganesan — Minimal Portfolio

A clean, typography-focused personal portfolio built with **React 18**, **TypeScript**, and **Tailwind CSS**, strictly aligned with resume experience.

🌐 **Live:** [sganesan03.github.io/selvaraj-ganesan-minimal-portfolio](https://sganesan03.github.io/selvaraj-ganesan-minimal-portfolio/)

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| Framework   | React 18 + TypeScript                           |
| Styling     | Tailwind CSS 3, PostCSS, SCSS                   |
| Build Tool  | Vite 8                                          |
| Deployment  | GitHub Pages via GitHub Actions                 |

---

## Project Structure

```
selvaraj-ganesan-minimal-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — auto-deploy on push to main
├── src/
│   ├── components/
│   │   ├── GrafanaDemoPanel.tsx
│   │   ├── Label.tsx
│   │   └── ProjectPreview.tsx
│   ├── data/
│   │   └── resumePortfolioData.ts  # Single source of truth for all content
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions on every push to `main`.

**Manual setup (one-time):**

1. Create a public GitHub repository named `selvaraj-ganesan-minimal-portfolio`.
2. Push this folder to the `main` branch.
3. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` handles build and publish automatically.

The Vite base path is pre-configured:
```ts
// vite.config.ts
base: '/selvaraj-ganesan-minimal-portfolio/'
```

---

## Content Management

All portfolio content (profile, experience, skills, education) lives in a single file:

```
src/data/resumePortfolioData.ts
```

Update that file to reflect any resume changes — no other files need to be touched.

---

## License

Personal portfolio — not licensed for reuse.
