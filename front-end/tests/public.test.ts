import { test, expect } from '@playwright/test';

test('5 - Página inicial...', async ({ page }) => {
    await page.goto('http://147.79.82.92');

    await expect(page).toHaveScreenshot('pagina-inicial.png', { fullPage: true });
    await expect(page.locator('main')).toMatchAriaSnapshot();
});

