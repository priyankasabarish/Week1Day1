import {test,expect} from '@playwright/test'

test('login and add item to cart',async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox',{name:'Username'}).fill('standard_user')
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce')
    await page.getByRole('button',{name:'login'}).click()
    const title=await page.title()
    await expect(page).toHaveTitle('Swag Labs')

await page.waitForTimeout(3000);
await page.selectOption('.product_sort_container','hilo')

//add to cart
await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click()
await page.locator('.shopping_cart_link').click()

//checkout page
 const itemName = 'Sauce Labs Fleece Jacket';
 const cartItemName = page.locator('.inventory_item_name');
  await expect(cartItemName).toHaveText(itemName);

 const cartitem= page.locator('.cart_item')
 await expect(cartitem).toBeVisible();
 await expect(cartitem).toHaveCount(1);

})