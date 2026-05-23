
import { test } from "@playwright/test";
import credentials from "../../Data/login.json"

    
for (let data of credentials) {

    test(`Learn to read JSON file ${data.TestCaseId}`, async ({ page }) => {

        await page.goto("https://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill(data.Username) // dynamic json data
        await page.locator("#password").fill(data.Password);
        await page.waitForTimeout(3000) // demo
        await page.locator(".decorativeSubmit").click();



    })

}
