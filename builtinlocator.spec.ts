import{test,expect,Locator} from '@playwright/test'

test("builtinlocator",async({page})=>{

//     await page.goto("https://demo.nopcommerce.com");
//     const text:Locator=page.getByAltText("nopCommerce demo store");
//     await expect(text).toBeVisible;

//     await page.getByRole("button",{name:"search"}).click;

//     await page.getByRole("link",{name:'Computers'}).click;

//    await page.waitForTimeout(3000);

// await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
// await page.getByRole('textbox',{name: 'First Name'}).fill('Priyanka')
// await page.getByRole('textbox',{name:'Last Name'}).fill('shanmugasundaram')
// await page.getByRole('radio',{name:'yes'}).click();
// await page.locator("//input[@name='agree']").click();
// await page.getByRole('button',{name:'Continue'}).click();
// await page.waitForTimeout(5000)


//login page and verifying the url
await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill('tomsmith')
await page.locator('#password').fill('SuperSecretPassword!')
await page.locator("//button[@type='submit']").click();
const flashmessage=page.locator('#flash')
await expect(flashmessage).toBeVisible();
await expect(flashmessage).toContainText('You logged into a secure area!')

})