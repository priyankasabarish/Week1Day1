import{ test,expect } from '@playwright/test';
import credentials from '../../Data/login.json';



for(let data of credentials){

test(`Launch Browser ${data.TestCaseId}`,async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill(data.Username)
await page.locator('#password').fill(data.Password)
 const button=await page.getByRole('button',{name:'Login'})
await button.click();
await page.getByText('CRM/SFA').click();
await page.waitForTimeout(5000);
await page.getByRole('link', { name: 'Leads' }).click();
await page.getByRole('link', { name: 'Create Lead' }).click();

 await page.waitForTimeout(3000);
 await page.locator(`//a[contains(text(),'Create Lead')]`).click()
 await page.locator('#createLeadForm_companyName').fill(data.CompanyName)
await page.locator('#createLeadForm_firstName').fill(data.FirstName) 
await page.locator('#createLeadForm_lastName').fill(data.LastName) 
await page.selectOption('#createLeadForm_marketingCampaignId',{label:'Demo Marketing Campaign'})
const dropdown=page.locator(`[id=createLeadForm_marketingCampaignId] option`)
const drpcount=dropdown.count()
console.log(drpcount)
const drpvalues=await dropdown.allInnerTexts()
console.log(drpvalues)
// for(let values of drpvalues)
// {
//     const text=await values.allTextContents;
//     console.log(text)

// }
await page.selectOption(`#createLeadForm_currencyUomId`,{value:'INR'})
await page.selectOption(`#createLeadForm_generalCountryGeoId`,{label:'India'})
//await page.getByRole('').fill('Test')
//await page.getByRole('textbox',{name:'Title'}).fill('welcome')
//await page.getByRole('textbox',{name:'Annual Revenue'}).fill('40000')
await page.selectOption(`#createLeadForm_industryEnumId`,{value:'IND_DISTRIBUTION'})
await page.selectOption('#createLeadForm_ownershipEnumId',{value:'OWN_PARTNERSHIP'})

//await page.getByRole('textbox',{name:'Phone Number'}).fill('123467')
//await page.getByRole('textbox',{name:'City'}).fill('Coimbatore')
 await page.locator('.smallSubmit').click();

await expect(page).toHaveURL(/viewLead/)



}

)
  


}
