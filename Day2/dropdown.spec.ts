import{test,expect} from '@playwright/test'

test('dropdown',async({page})=>{
page.goto("https://leafground.com/select.xhtml");
await page.selectOption('[class="ui-selectonemenu"]',{label:'Playwright'})
const dropdown=page.locator('[class="ui-selectonemenu"] option')
const count=dropdown.count()
console.log('Dropdown count is' ,count) 

const values=await dropdown.all();
for(const value of values){
 const text=await value.allTextContents()
 console.log(text)
}

//
await page.locator(`//label[text()='Select Country']`).click()
await page.locator(`li[data-label="Germany"]`).click()
await page.waitForTimeout(2000)
await page.locator(`//label[text()='Select City']`).click()
await page.waitForTimeout(2000)
await page.locator(`li[data-label="Frankfurt"]`).click()


})