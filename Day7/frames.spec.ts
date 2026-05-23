import{test,expect,Locator} from '@playwright/test'

test("iframe",async({page})=>{
await page.goto("https://www.leafground.com/frame.xhtml")
const frame=page.frameLocator(`[src="default.xhtml"]`)
const content=frame.locator('#Click')
await content.click();
 await page.waitForTimeout(2000)
const innercontent=await content.innerText();    
 console.log(innercontent)
const noofframes = page.frames();
console.log("Total no of frames " , noofframes.length);
//nested iframe
const outerframe=page.frameLocator(`[src="page.xhtml"]`)
const innerframe=outerframe.frameLocator(`[src="framebutton.xhtml"]`)
await page.waitForTimeout(3000)
const button=innerframe.locator('#Click')
await button.click()
const text=await button.innerText()
console.log(text)


})