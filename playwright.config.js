// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * E2E tests run against the production build (npm run build must be run
 * first). Set CHROMIUM_PATH to use a system Chromium instead of the
 * Playwright-managed browser.
 */
module.exports = defineConfig({
  testDir: './e2e',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000/moment_e_docs/',
    ...(process.env.CHROMIUM_PATH
      ? { launchOptions: { executablePath: process.env.CHROMIUM_PATH } }
      : {}),
  },
  webServer: {
    command: 'npm run serve -- --no-open --port 3000',
    url: 'http://localhost:3000/moment_e_docs/',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
