/**
 * Validates that the Docusaurus configuration and sidebar stay in sync
 * with the actual files in docs/. Catches renamed or deleted docs that
 * would silently break navigation.
 */
const fs = require('fs');
const path = require('path');

const sidebars = require('../sidebars');
const config = require('../docusaurus.config');

const DOCS_DIR = path.join(__dirname, '..', 'docs');

function collectSidebarDocIds(items) {
  const ids = [];
  for (const item of items) {
    if (typeof item === 'string') {
      ids.push(item);
    } else if (item.type === 'doc') {
      ids.push(item.id);
    } else if (item.type === 'category') {
      ids.push(...collectSidebarDocIds(item.items));
    }
  }
  return ids;
}

function getDocIdsOnDisk() {
  return fs
    .readdirSync(DOCS_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => {
      const content = fs.readFileSync(path.join(DOCS_DIR, f), 'utf8');
      const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
      const idLine = frontmatter && frontmatter[1].match(/^id:\s*(\S+)/m);
      return idLine ? idLine[1] : f.replace(/\.mdx?$/, '');
    });
}

describe('sidebars.js', () => {
  const sidebarIds = collectSidebarDocIds(sidebars.docs);
  const diskIds = getDocIdsOnDisk();

  it('every sidebar entry points to an existing doc', () => {
    for (const id of sidebarIds) {
      expect(diskIds).toContain(id);
    }
  });

  it('every doc file appears in the sidebar', () => {
    for (const id of diskIds) {
      expect(sidebarIds).toContain(id);
    }
  });

  it('has no duplicate entries', () => {
    expect(new Set(sidebarIds).size).toBe(sidebarIds.length);
  });
});

describe('docusaurus.config.js', () => {
  it('has the required site fields', () => {
    expect(config.title).toBeTruthy();
    expect(config.url).toMatch(/^https:\/\//);
    expect(config.baseUrl).toMatch(/^\/.*\/$/);
    expect(config.favicon).toBeTruthy();
  });

  it('fails the build on broken links', () => {
    expect(config.onBrokenLinks).toBe('throw');
    expect(config.onBrokenMarkdownLinks).toBe('throw');
  });

  it('points the sidebar config at an existing file', () => {
    const docsOptions = config.presets[0][1].docs;
    const sidebarPath = path.join(__dirname, '..', docsOptions.sidebarPath);
    expect(fs.existsSync(sidebarPath)).toBe(true);
  });

  it('footer internal links point to existing docs', () => {
    const diskIds = getDocIdsOnDisk();
    const footerLinks = config.themeConfig.footer.links
      .flatMap((group) => group.items)
      .filter((item) => item.to)
      .map((item) => item.to.replace(/^\//, '').split('#')[0]);

    for (const link of footerLinks) {
      expect(diskIds).toContain(link);
    }
  });
});
