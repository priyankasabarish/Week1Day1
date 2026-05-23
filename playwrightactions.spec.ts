import {test,expect,Locator} from '@playwright/test'
import { text } from 'node:stream/consumers';

test("actions",async({page})=>{

 await page.goto("https://testautomationpractice.blogspot.com/");
    const textbox:Locator=await page.locator("#name");
      await textbox.fill('suvan sabarish1234');
    const maxlen=await textbox.getAttribute("maxlength");

    expect(maxlen).toBe('15');
  
    const text:String=await textbox.inputValue();

console.log(text);



/*

await page.goto("https://www.saucedemo.com")
await page.fill("#user-name","standard_user")
await page.fill("#password","secret_sauce")
await page.click("#login-button")


*/



})