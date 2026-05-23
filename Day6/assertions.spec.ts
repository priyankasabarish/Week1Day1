import{test,expect} from '@playwright/test'
test('Launch Browser',async({page})=>{

    await page.goto("https://leafground.com/input.xhtml")
    await expect.soft(page.locator(`[placeholder="Babu Manickam"]`)).toBeDisabled()

    await expect(page.locator(`//input[@value='Chennai']`)).toBeEditable()
    await page.locator(`//input[@value='Chennai']`).clear();
    await page.locator(`//input[@value='Chennai']`).fill('coimbatore');


})