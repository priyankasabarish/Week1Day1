import {test,expect} from "@playwright/test"



test('basic test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.locator(`[name='q']`).fill('selenium')
  await page.locator(`///ul[@class='G43f7e']/li//div[@role='option']`).filter({hasText:'zink'}).click()
  // ...

  page.waitForTimeout(3000)
});








