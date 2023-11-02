const {test, expect} = require('@playwright/test'); //Iz modula @playwright/test se izvlaci svostvo test

test('Browser Context playwright test', async ({browser})=>{
    // playwright code
    //step1
    //await ili asyns
    //step2
    // {} - playwright features
    // new.Context - open new page

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://translate.google.com/?hl=sr&tab=TT");
});

test('Page playwright test', async ({page})=>{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('Page playwright', async ({page})=>{
    await page.goto("https://www.facebook.com/");
    console.log(await page.title());
   
    await page.locator('#email').type('katarina@gmail.com');
    await page.locator("[type='password']").type("5454656");
    await page.locator("[type='submit']").click();
    // console.log(await page.locator("[style*=block]").textContent());
    // await expect(page.locator("[style*='block']")).toContainText('Incorect');
});

test('Page playwright project', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
   
    await page.locator('#user-name').type('standard_user');
    await page.locator("[type='password']").type("secret_sauce1");
    await page.locator("#login-button").click();
    await expect(page.locator(".error-message-container")).toContainText('not match');
});

test('Page playwright type-fill', async ({page})=>{
    // await page.goto("https://www.saucedemo.com/");
    // console.log(await page.title());
    // const userName = page.locator('#user-name');
    // const signIn = page.locator("#login-button").click();
    //  await userName;
    // // await signIn.click();
    // await page.locator("[type='password']").type("secret_sauce");

    // // type - fill
    // // await userName.fill("");
    // await userName.fill("standard_user");
    // await signIn.click();
    // // await page.locator

    const cardTitles = page.locator('.inventory_item_name');

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());


   
    await page.locator('#user-name').type('standard_user');
    await page.locator("[type='password']").type("secret_sauce");
    await page.locator("#login-button").click();

    await expect(page.locator(".app_logo")).toContainText('Swag Labs');
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(0).textContent()); //U konzoli ocitaj prvu vrednost sa sajta

   });

   test('Page playwright show all items', async ({page})=>{

    const cardTitles = page.locator('.inventory_item_name');

    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());


   
    await page.locator('#user-name').type('standard_user');
    await page.locator("[type='password']").type("secret_sauce");
    await page.locator("#login-button").click();

    await expect(page.locator(".app_logo")).toContainText('Swag Labs');

    const allTitles =  await cardTitles.allTextContents();
    console.log(allTitles);
   });

