import {test} from '@playwright/test'
import{Loginpage} from '../../pages/Loginpage'



test('test',async({page})=>{

   const login =new Loginpage(page);
   await login.loginpage()
   await login.login('democsr','crmsfa')

})