// @ts-check
const { test, expect } = require('@playwright/test');

// Paths are relative (no leading slash) so they resolve under the
// /moment_e_docs/ baseURL.

test('homepage loads with title and hero heading', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/moment·e/);
  await expect(
    page.getByRole('heading', { level: 1, name: 'moment·e' })
  ).toBeVisible();
});

test('sidebar links navigate to every main section', async ({ page }) => {
  await page.goto('./');
  const sidebar = page.locator('nav.menu');
  await expect(sidebar.getByRole('link', { name: 'Home' })).toBeVisible();

  await sidebar.getByRole('link', { name: 'App Screens' }).click();
  await expect(
    page.getByRole('heading', { level: 1, name: 'App Screens' })
  ).toBeVisible();

  await sidebar.getByRole('link', { name: 'About' }).click();
  await expect(
    page.getByRole('heading', { level: 1, name: /About moment·e/ })
  ).toBeVisible();
});

test('install page is reachable directly', async ({ page }) => {
  await page.goto('./install');
  await expect(
    page.getByRole('heading', { level: 1, name: /Install moment·e/ })
  ).toBeVisible();
});

test('navbar Report a Bug link works', async ({ page }) => {
  await page.goto('./');
  await page
    .getByRole('navigation', { name: 'Main' })
    .getByRole('link', { name: 'Report a Bug' })
    .click();
  await expect(
    page.getByRole('heading', { level: 1, name: /Report a Bug/ })
  ).toBeVisible();
});

test('theme toggle cycles to dark mode', async ({ page }) => {
  await page.goto('./');
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'light');

  // respectPrefersColorScheme makes the toggle 3-state: system -> light -> dark
  const toggle = page.getByRole('button', {
    name: /switch between dark and light/i,
  });
  await toggle.click();
  await expect(html).toHaveAttribute('data-theme-choice', 'light');
  await toggle.click();
  await expect(html).toHaveAttribute('data-theme', 'dark');
});
