import{test,expect} from '@playwright/test'

test("loginpage",async({page})=>{

await page.goto("https://www.decathlon.in/c/new-arrivals-161869")
await expect(page).toHaveTitle(/Decathlon/)
await page.locator(`//input[@type='search']`).click();
 const searchbox=page.getByPlaceholder('Search for 60+ sports and 6,000+ products')
//const searchbox=page.getByTestId('search-input-desktop:container')
await expect(searchbox).toBeEnabled();

 //await searchbox.click();
   await searchbox.fill('shoes');
await searchbox.press('Enter')
const title=await page.title()
console.log(title);
await expect(page).toHaveTitle('Search | shoes')
await page.waitForTimeout(2000);
//sorting gender
await page.getByRole('button',{name:'Gender'}).click();
await page.getByRole('checkbox',{name:'Men'}).first().click();
//category
await page.getByRole('button',{name:'Category'}).click();
await page.getByRole('checkbox',{name:'Football boots'}).click();
//size
await page.getByRole('button',{name:'Size'}).click();
await page.waitForTimeout(3000);
await page.getByRole('checkbox',{name:'10.5'}).click();
await page.getByRole('button',{name:'Most relevant'}).click();
await page.locator(`//span[text()='Price (low → high) ']`).click();
await page.locator(`//img[@data-test-id='product-card-product-image:img']`).first().click();
await page.getByRole('button',{name:'Select size 10.5'}).click();
await page.getByRole('button',{name:'Add to cart'}).click();
await page.locator(`//span[@data-test-id="header-desktop:cart-count-badge"]`).click();
await page.waitForTimeout(2000);
const amt=await page.locator(`//p[@classname="font-semibold"]`).nth(1).innerText();
console.log(amt)





}
)
