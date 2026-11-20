# moment·e Docs — Project Memory

Docusaurus 3 documentation site for the moment·e research app (CUTA Lab, SDSU).

## Tech Stack

- **Docusaurus 3** (React 19, MDX)
- **GitHub Pages** — auto-deploys from `main` branch via GitHub Actions
- **Google Drive** (`namir@sdsu.edu`) — private staging for drafts and videos

## Key Commands

```bash
npm install       # install dependencies (always run first on a new machine)
npm start         # local dev server → http://localhost:3000/moment_e_docs/
npm run build     # production build
npm run serve     # preview production build
```

## URLs

- Live site: https://nader938.github.io/moment_e_docs/
- Repo: https://github.com/nader938/moment_e_docs
- Google Drive: https://drive.google.com/drive/u/2/folders/1_lAwsv4bis71omvi7URWbyxLNm_wPub6

## Project Structure

```
docs/              ← documentation pages (.md / .mdx)
src/pages/         ← custom React pages (index.js = homepage)
src/components/    ← reusable components (DocCardGrid, VideoEmbed)
static/            ← images, videos, static assets
docusaurus.config.js
sidebars.js
```

## Architecture Decisions

- `routeBasePath: '/'` — docs served at root (e.g. `/about` not `/docs/about`)
- `onBrokenLinks: 'warn'` — build warns on broken links (do not change to throw without fixing all links)
- Homepage is a custom React page at `src/pages/index.js` (not a doc)
- Squash merge strategy on GitHub — always create a fresh branch from `main` for new work

## Draft → Publish Workflow

1. Draft docs/videos in Google Drive (`namir@sdsu.edu`) under `moment_e_docs/drafts/` or `videos/`
2. When approved, copy `.md/.mdx` to `docs/` and push to `main`
3. For videos: upload to YouTube → add embed URL to `docs/videos.mdx`
4. GitHub Actions deploys automatically on push to `main`

## Google Drive Folder Structure

```
moment_e_docs/ (Google Drive)
├── drafts/        ← draft doc files
├── videos/
│   ├── raw/       ← raw recordings
│   └── edited/    ← edited, pending approval
├── assets/        ← screenshots, QR codes, images
└── review/        ← feedback and approval notes
```

## Components

- **DocCardGrid** (`src/components/DocCardGrid/`) — responsive card grid for MDX pages
- **VideoEmbed** (`src/components/VideoEmbed/`) — YouTube/Vimeo embed with placeholder

## Google Drive Connector

Connect to `namir@sdsu.edu` (not naderami@gmail.com) in claude.ai Settings → Connectors.
Search/list is broken for this account via the API — use `create_file` and `update_file` with known folder IDs instead.

## Video Files

Raw `.mov` screen recordings are committed to the repo root (large files — consider moving to Google Drive or Git LFS in future).
