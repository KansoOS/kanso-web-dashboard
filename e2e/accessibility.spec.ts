import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Scan automatisé WCAG (règles wcag2a/wcag2aa/wcag21aa d'axe-core), sur les
// écrans réellement accessibles sans backend : connexion, inscription, et le
// dashboard une fois connecté avec un espace affiché.
test.describe('accessibilité (axe-core)', () => {
    test("écran de connexion", async ({ page }) => {
        await page.goto('/');
        await page.getByLabel('Adresse e-mail').waitFor();

        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        expect(results.violations).toEqual([]);
    });

    test("écran d'inscription", async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'Créer un compte' }).click();
        await page.getByLabel('Adresse e-mail').waitFor();

        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        expect(results.violations).toEqual([]);
    });

    test('dashboard avec espace et mandat affichés', async ({ page }) => {
        await page.goto('/');
        await page.getByLabel('Adresse e-mail').fill('nomfa@kanso.test');
        await page.getByLabel('Mot de passe').fill('nomfa1234');
        await page.getByRole('button', { name: 'Se connecter' }).click();
        await page.getByLabel("Identifiant de l'espace").fill('space-1');
        await page.getByRole('button', { name: 'Afficher' }).click();
        await page.getByText('Espace de Léo').waitFor();

        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        expect(results.violations).toEqual([]);
    });
});
