import {test,expect} from '@playwright/test'

test('launch app and search',async({page})=>{
await page.goto("https://dev331650.service-now.com/")
await page.waitForLoadState("domcontentloaded")
await page.getByRole('textbox',{name:'User name'}).fill('admin')
await page.getByRole('textbox',{name:'Password'}).fill('Ig@-R6iFfOv1')
await page.getByRole('button',{name:'Log in'}).click()
// const title=await page.title()
// console.log(title);
// await expect(page).toHaveTitle('ServiceNow')
await page.getByRole('menuitem',{name:'All'}).click()
await page.getByRole('link',{name:'Service Catalog'}).click()
const frame=page.frameLocator(`[title="Main Content"]`)
await frame.locator(`//span[contains(text(),'Cell phones')]`).click()
//await page.waitForTimeout(2000);
await frame.getByRole('link',{name:'Apple iPhone 13 pro'}).click()
await frame.locator(`//label[text()='Yes']`).click()
await frame.locator(`//span[@aria-label="What was the original phone number?"]/../../following-sibling::div/input[2]`).fill('99');

//dropdown value from frame
frame.locator(`[class="form-control cat_item_option "]`).selectOption({ value: "unlimited" })


await frame.locator(`//label[text()='Graphite']`).click()
await frame.locator(`//label[contains(text(),'512 GB [add $300.00]')]`).click()
await frame.getByRole('button',{name:'Add to cart'}).click()
await frame.getByRole('button',{name:'Proceed to Checkout'}).click()
}) 