
import { test, expect } from '@playwright/test';
import path from 'path';

const STORAGE_STATE_PATH = path.join(__dirname, './.auth/user.json');

test.use({ storageState: STORAGE_STATE_PATH }); // Puxar do save

test('4 - Testando página de Usuários...', async ({ page }) => {
    await page.goto('http://localhost:3000/admin');
    await page.locator('div').filter({ hasText: 'Usuários' }).nth(5).click();
    await expect(page.getByText('Carregando...')).toBeHidden({ timeout: 10000 });

    await page.getByRole('img', { name: 'Rock Lee' }).click();
    await page.locator('#radix-_r_c_').click();
    await page.getByRole('menuitem', { name: 'Editar' }).click();
    await page.getByRole('textbox', { name: 'Nome' }).fill('Rock Leee');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email' }).fill('Rock.lee@puppycarepet.com.br');
    await page.getByRole('button', { name: 'Condutores' }).click();
    await page.getByRole('menuitemcheckbox', { name: 'Colaborador' }).click();
    await page.getByRole('button', { name: 'Salvar' }).click();
    console.log('4.1 - Edição de usuário testada com sucesso!');

    await page.getByRole('button').nth(3).click({ timeout: 10000 });
    await page.getByRole('textbox', { name: 'Nome *' }).fill('teste');
    await page.getByRole('textbox', { name: 'Nome *' }).press('Tab');
    await page.getByRole('textbox', { name: 'Email *' }).fill('teste@puppycarepet.com.br');
    await page.getByRole('button', { name: 'Escolha' }).click();
    await page.getByRole('menuitemcheckbox', { name: 'Colaborador' }).click();
    await page.getByRole('button', { name: 'Criar usuário' }).click();
});