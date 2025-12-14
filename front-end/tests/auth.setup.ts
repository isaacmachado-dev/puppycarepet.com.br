import { test as setup, expect } from '@playwright/test';
import path from 'path';
import * as fs from 'fs';

const authFile = path.join(__dirname, '.auth/user.json');
const EMAIL = process.env.PLAYWRIGHT_TEST_EMAIL || '';
const PASSWORD = process.env.PLAYWRIGHT_TEST_PASSWORD || ''

setup('Setup de login com estado salvo', async ({ page }) => {

    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Agende agora' }).click();
    await page.getByRole('link', { name: 'Acesse sua conta' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).fill(EMAIL);
    await page.getByRole('textbox', { name: 'E-mail' }).press('Tab');
    await page.getByRole('textbox', { name: 'Senha' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'Entrar' }).click();
    // 1) Ver para onde você foi


    const heading = page.getByText(/Atendimentos\s*Chegando/i);
    await expect(heading).toBeVisible({ timeout: 15000 });

    const authDir = path.dirname(authFile);
    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, { recursive: true });
    }


    console.log('Logado com sucesso!');
    console.log('Salvando estado de autenticação em:', authFile);

    await page.context().storageState({ path: authFile });


});

