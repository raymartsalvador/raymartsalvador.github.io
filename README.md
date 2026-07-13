# raymartsalvador.github.io

Personal portfolio for **Raymart Salvador** — full-stack developer.

Built with **Next.js (App Router)** + **Tailwind CSS**, statically exported and
deployed to **GitHub Pages**.

## Stack

- Next.js 15 (`output: 'export'` — static HTML, no server)
- React 19 + TypeScript
- Tailwind CSS 3
- Self-hosted Google Fonts via `next/font` (Archivo, Space Grotesk, JetBrains Mono)
- Dark-mode-first with a light-mode toggle (persisted in `localStorage`)

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build      # static export → ./out
```

## Project structure

```
app/                  App Router entry (layout, page, global CSS)
components/           UI sections (Nav, Hero, Work, Experience, Stack, Contact, Footer)
                      + client bits (ThemeToggle, CopyEmailButton, RevealObserver)
data/projects.ts      Single source of truth for projects — add one object to add a project
public/               Static assets served from the domain root
  assets/images/projects/   Project screenshots
  assets/files/             Résumé PDF
.github/workflows/    GitHub Pages deploy (build → upload ./out → deploy)
```

## Adding a project

Append an object to `featuredProjects` (large alternating rows) or `miniProjects`
(the "More projects" grid) in `data/projects.ts`. No markup to copy.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it via the **GitHub Actions** Pages source.

> One-time setup: GitHub → repo → **Settings → Pages → Build and deployment →
> Source = "GitHub Actions"**.

> Earlier versions of this site were an Angular 15 app, then a single static
> `index.html`. Both were removed in favor of this Next.js app; history is
> preserved in git.
