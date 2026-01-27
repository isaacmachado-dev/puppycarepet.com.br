
import { test, expect } from '@playwright/test';
import path from 'path';

const STORAGE_STATE_PATH = path.join(__dirname, './.auth/user.json');

test.use({ storageState: STORAGE_STATE_PATH }); // Puxar do save

test('Testando página select dos meses do gráfico de visitantes mensais...', async ({ page }) => {
    await page.goto('http://localhost:3000/admin');
    await page.locator('div').filter({ hasText: 'Usuários' }).nth(5).click();

    await page.getByRole('textbox', { name: 'Digite o nome...' }).click();
    await page.getByRole('textbox', { name: 'Digite o nome...' }).fill('mônica');
    await page.getByRole('button', { name: 'Open menu' }).click();

    await page.getByRole('menuitem', { name: 'Editar' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();

    await page.getByRole('button', { name: 'Administradores' }).click();
    await page.getByRole('menuitemcheckbox', { name: 'Condutores' }).click();
    await page.getByRole('button', { name: 'Administradores Condutores' }).click();
    await page.getByRole('menuitemcheckbox', { name: 'Colaborador' }).click();
    await page.getByRole('button', { name: 'Salvar' }).click();


});