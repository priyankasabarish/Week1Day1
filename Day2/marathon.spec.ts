import{ test,expect } from '@playwright/test';

test('select item',async({page})=>{

await page.goto('https://www.decathlon.in/');
await page.getByRole('link', { name: 'Men' }).click();



})