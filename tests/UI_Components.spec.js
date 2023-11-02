const {test, expect} = require('@playwright/test'); //Iz modula @playwright/test se izvlaci svostvo test


   test.only('Register page', async ({page})=>{

    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.locator('#user-name').type('standard_user');
    await page.locator("[type='password']").type("secret_sauce");
    await page.locator("#login-button").click();

    const dropdown = page.locator(".product_sort_container");
    await dropdown.click();
    await dropdown.selectOption("za");



   await page.pause();
// 
 
   });
