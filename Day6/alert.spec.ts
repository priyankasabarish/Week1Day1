import{test,expect} from '@playwright/test'

test('alert',async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");
//     page.on('dialog', async dialog=>{
//     expect(dialog.type()).toContain('prompt')
//     expect(dialog.message()).toContain('Please enter your name');
//     expect(dialog.defaultValue()).toContain('Harry Potter')
//     await dialog.accept('John');
//   })

//    await page.getByRole('button',{ name:'Prompt'}).click();
//    await expect(page.locator("//p[id='demo']")).toHaveText('Hello John! How are you ')

// await page.waitForTimeout(5000);
  

// await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
// await page.on('dialog',async dialog=>{
// expect(dialog.type()).toContain('confirm')
// expect(dialog.message()).toContain('I am a JS Confirm')
// await expect(dialog.accept())

// })

// await page.getByRole('button',{name:'Click for JS Confirm'}).click();
// await expect(page.locator("//p[@id='result']")).toHaveText('You clicked: Ok')

// });
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.on('dialog',async dialog=>{
expect(dialog.type()).toContain('prompt')
expect(dialog.message()).toContain('I am a JS prompt')
await expect(dialog.accept('Hello playwright'))

})

await page.getByRole('button',{name:'Click for JS Prompt'}).click();
await expect(page.locator("//p[@id='result']")).toHaveText('You entered: Hello playwright')

});
