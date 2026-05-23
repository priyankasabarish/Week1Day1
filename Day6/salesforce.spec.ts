import {test,expect} from '@playwright/test'

test('salesforce',async({page})=>{
page.goto('https://login.salesforce.com/')
await page.locator('#username').fill(' priyankainfoece24.a9a6630ea91a@agentforce.com');
await page.locator('#password').fill('testleaf@2026');
await page.locator('Login').click();
await page.waitForTimeout(3000) 
await page.getByRole('button',{name:'App Launcher'}).click()
await page.getByRole('button',{name:'View All Applications'}).click()
const searchbox=await page.locator('[placeholder="Search apps and items..."]')
searchbox.fill('Accounts')
searchbox.press('Enter')
await page.locator(`//div[text()='New']`).click()


})