import { test,expect } from "@playwright/test";
import path from "path";


//Method-1 - Learn to Upload the file with input tag and type=file


// test("Learn to Upload the file with input tag and type=file", async ({ page }) => {


//     await page.goto("https://www.leafground.com/file.xhtml");

//     const uploadFile = page.locator('[id="j_idt97:j_idt98_input"]'); // reference of the locator to upload/ inject the file to the locator

//    await uploadFile.setInputFiles(path.join(__dirname,'../../Data/TestLeafLogo.png'));

//     await page.waitForTimeout(3000);


// })

test('upload',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")
const file=page.waitForEvent("filechooser")
page.locator(`[id="drag-drop-upload"]`).click()
const upload=await file
await upload.setFiles(path.join(__dirname,'../../Data/TestLeafLogo.png'))
await page.waitForTimeout(3000)
  await expect( page.getByText('TestLeafLogo.png')).toBeVisible();
})