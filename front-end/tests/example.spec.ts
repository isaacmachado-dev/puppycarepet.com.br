import { test, expect } from '@playwright/test';

test('Home page has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Puppy Care/);
});

test('Admin page has title', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Admin - Puppy Care/);
});

test('Apertando botao Admin', async ({ page }) => {
  await page.goto('http://localhost:3000/admin');
  // Click the get started link.
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.locator('div').filter({ hasText: 'Clientes' }).nth(5).click();
  await page.locator('div').filter({ hasText: 'Análise' }).nth(5).click();
  await page.getByText('Usuários').click();



  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
