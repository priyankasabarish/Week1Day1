import {test,expect} from '@playwright/test'
import path from 'path';
// test('download',async({page})=>{


//     await page.goto("https://leafground.com/file.xhtml");
//     const filePromise = page.waitForEvent("download") // Here we are asking playwright to listen to the downloaded file action
//     await page.locator('//span[text()="Download"]').click();
//     const fDown = await filePromise // resolving the download action after click action
//    //Exact filename while we download
//    await fDown.saveAs(path.join(__dirname,`../../Data/${fDown.suggestedFilename()}`)) // Testleaf


//     await page.waitForTimeout(3000)
    
// })

test('download',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/download")
const down=page.waitForEvent('download')
page.locator(`//a[text()='upload-me.txt']`).click()
const file=await down
await file.saveAs(path.join(__dirname,`../../Data/${file.suggestedFilename()}`))
await page.waitForTimeout(3000)


})



