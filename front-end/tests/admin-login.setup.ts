import { test as setup, expect } from '@playwright/test';
import path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
require('dotenv').config();


const authFile = path.join(__dirname, './.auth/user.json');
setup.use({ storageState: authFile });



setup('Setup de login com estado salvo', async ({ page }) => {
    const EMAIL = process.env.PLAYWRIGHT_TEST_EMAIL || '';
    const PASSWORD = process.env.PLAYWRIGHT_TEST_PASSWORD || ''

    await page.goto('http://localhost:3000/');
    await page.locator('Link:has-text("Agende agora"), a[href="/cart"]:has-text("Agende agora").mt-5').click();
    await page.getByRole('link', { name: 'Acesse sua conta' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).fill(EMAIL);
    await page.getByRole('textbox', { name: 'E-mail' }).press('Tab');
    await page.getByRole('textbox', { name: 'Senha' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'Entrar' }).click();

    await page.context().storageState({ path: authFile });

    const authDir = path.dirname(authFile);
    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, { recursive: true });
    }

    await page.waitForLoadState('networkidle');
    await page.goto('http://localhost:3000/admin')

    await page.context().storageState({ path: authFile });


    console.log('Logado com sucesso!');
    console.log('Salvando estado de autenticação em:', authFile);



});

