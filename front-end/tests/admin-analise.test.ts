
import { test, expect } from '@playwright/test';
import path from 'path';

const STORAGE_STATE_PATH = path.join(__dirname, './.auth/user.json');

test.use({ storageState: STORAGE_STATE_PATH }); // Puxar do save


test('Testando página select dos meses do gráfico de visitantes mensais...', async ({ page }) => {
    await page.goto('http://localhost:3000/admin');
    await page.locator('div').filter({ hasText: 'Análise' }).nth(5).click();

    await page.locator('button').filter({ hasText: 'Janeiro' }).click();
    await page.getByRole('option', { name: 'Fevereiro' }).click();

    await page.locator('button').filter({ hasText: 'Fevereiro' }).click();
    await page.getByRole('option', { name: 'Março' }).click();

    await page.locator('button').filter({ hasText: 'Março' }).click();
    await page.getByRole('option', { name: 'Abril' }).click();

    await page.locator('button').filter({ hasText: 'Abril' }).click();
    await page.getByRole('option', { name: 'Maio' }).click();

    await page.locator('button').filter({ hasText: 'Maio' }).click();
    await page.getByRole('option', { name: 'Junho' }).click();

    await page.locator('button').filter({ hasText: 'Junho' }).click();
    await page.getByRole('option', { name: 'Julho' }).click();

    await page.locator('button').filter({ hasText: 'Julho' }).click();
    await page.getByRole('option', { name: 'Agosto' }).click();

    await page.locator('button').filter({ hasText: 'Agosto' }).click();
    await page.getByRole('option', { name: 'Setembro' }).click();

    await page.locator('button').filter({ hasText: 'Setembro' }).click();
    await page.getByRole('option', { name: 'Outubro' }).click();

    await page.locator('button').filter({ hasText: 'Outubro' }).click();
    await page.getByRole('option', { name: 'Novembro' }).click();

    await page.locator('button').filter({ hasText: 'Novembro' }).click();
    await page.getByRole('option', { name: 'Dezembro' }).click();
    console.log('Teste do Gráfico de visitantes mensais passou com sucesso!');

    // GRáfico de vendas:
    await page.locator('button').filter({ hasText: 'Últimos 90 dias' }).click();
    await page.getByRole('option', { name: 'Últimos 90 dias' }).click();

    await page.locator('button').filter({ hasText: 'Últimos 90 dias' }).click();
    await page.getByRole('option', { name: 'Últimos 30 dias' }).click();

    await page.locator('button').filter({ hasText: 'Últimos 30 dias' }).click();
    await page.getByRole('option', { name: 'Últimos 7 dias' }).click();
    console.log('Teste do Gráfico de vendas passou com sucesso!');

});