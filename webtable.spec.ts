import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {

  
await page.goto("https://the-internet.herokuapp.com/tables")
const table=await page.locator('#table1')
const column=await page.locator("//table[@id='table1']//th")
console.log(await column.count())
expect(await column.count()).toBe(6)
const row=await page.locator("//table[@id='table1']//tr")
const rowcount=await row.count()
expect(await row.count()).toBe(5)

//let data=await page.locator(`//td[text()='Smith']/../td`).allInnerTexts();
//console.log(data)
//td[text()='Smith']/../td




const lastNames = page.locator(`//table[@id='table1']/tbody/tr/td[1]`);
const names = await lastNames.allInnerTexts();
const sorted = [...names].sort();
console.log(names)

// retieving value from demo webtable
//   await page.goto("https://demoqa.com/webtables")
// const userdata=await page.locator(`//td[text()='Cierra']/following-sibling::td`).allInnerTexts();
// console.log(userdata);

// await page.locator(`//td[text()='Cierra']/following-sibling::td//span[@title='Edit']`).click()















// await page.goto("https://demo.guru99.com/test/web-table-element.php")
// const row=await page.locator(`//a[contains(text(),'Navin Fluorine Inter')]/ancestor::tr/td`).allTextContents();


// console.log(row)

 })
