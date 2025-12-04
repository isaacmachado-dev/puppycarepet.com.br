import { test, expect } from '@playwright/test';
import path from 'path';

const STORAGE_STATE_PATH = path.join(__dirname, '.auth/user.json');

test.use({ storageState: STORAGE_STATE_PATH }); // Use saved session

test('Logado com sucesso', async ({ page }) => {
  await page.goto('http://localhost:3000/admin');
  // Click the get started link.

  await page.getByRole('button', { name: 'Próximos' }).click();
  await page.getByRole('button', { name: 'Revisar' }).click();
  await page.getByRole('button', { name: 'Disponiblidade' }).click();
  await page.locator('div').filter({ hasText: 'Clientes' }).nth(5).click();
  await page.locator('div').filter({ hasText: 'Análise' }).nth(5).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
