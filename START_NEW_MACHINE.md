# Starting on a New Machine

Quick reference for getting the moment·e docs site running from scratch.

---

## 1. Prerequisites

- **Node.js 20+** — [nodejs.org](https://nodejs.org)
- **Git** — usually pre-installed on Mac
- **npm** — comes with Node

---

## 2. Clone the Repo

```bash
git clone https://github.com/nader938/moment_e_docs.git
cd moment_e_docs
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Run Locally (live preview)

```bash
npm start
```

Opens at **http://localhost:3000/moment_e_docs/** — changes reload automatically.

---

## 5. Build & Preview Production

```bash
npm run build
npm run serve
```

Opens at **http://localhost:3000/moment_e_docs/**

---

## 6. Deploy to GitHub Pages

Just push to `main` — GitHub Actions deploys automatically within ~2 minutes.

```bash
git add .
git commit -m "your message"
git push origin main
```

Live site: **https://nader938.github.io/moment_e_docs/**

---

## Project Structure

```
moment_e_docs/
├── docs/              ← all documentation pages (.md / .mdx)
├── src/
│   ├── pages/         ← custom React pages (homepage at index.js)
│   └── components/    ← reusable React components
├── static/            ← images, videos, other static files
├── docusaurus.config.js  ← site title, URL, navbar, footer
├── sidebars.js        ← sidebar navigation order
└── package.json       ← scripts and dependencies
```

---

## Adding a New Doc Page

1. Create `docs/your-page.md` (or `.mdx` for React components)
2. Add frontmatter at the top:
   ```
   ---
   id: your-page
   title: Your Page Title
   ---
   ```
3. Add the `id` to `sidebars.js` in the right position
4. Push to `main` to deploy

---

## Workflow: Draft → Publish

| Stage | Where | Who sees it |
|-------|-------|-------------|
| Draft content | Google Drive (`namir@sdsu.edu`) → `moment_e_docs/drafts/` | Lab only |
| Draft videos | Google Drive → `moment_e_docs/videos/raw/` then `videos/edited/` | Lab only |
| Approved docs | Copy `.md` file to `docs/` → push to `main` | Public |
| Approved videos | Upload to YouTube → add embed URL to `docs/videos.mdx` → push | Public |

---

## Working with Claude Code

1. Open the project folder in Claude Code (desktop app or web)
2. It reads `CLAUDE.md` automatically for full project context
3. Push changes via `git push origin main`

**Google Drive connector:** Connect to `namir@sdsu.edu` account in claude.ai Settings → Connectors

---

## Key Links

| | |
|-|-|
| Live site | https://nader938.github.io/moment_e_docs/ |
| GitHub repo | https://github.com/nader938/moment_e_docs |
| Google Drive folder | https://drive.google.com/drive/u/2/folders/1_lAwsv4bis71omvi7URWbyxLNm_wPub6 |
