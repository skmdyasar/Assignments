/*
    Assignment1: Open website and verify title.
    Steps
    Launch browser miscrosoft edge
    Navigate to website https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    Verify page title
    Verify URL
    Expected Correct title OrangeHRM should display & Correct URL should open
*/

import {test, expect, chromium, Browser, BrowserContext, Page} from "@playwright/test";

test("Assignment 1", async({}) =>{
    let browser : Browser = await chromium.launch({channel:"msedge", headless:false});
    let context : BrowserContext = await browser.newContext();
    let page : Page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    expect(page).toHaveTitle("OrangeHRM");
    expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //                          or

    let pageTitle = await page.title();
    let pageUrl = await page.url();
    console.log("Page Title is "+pageTitle);
    console.log("Page URL is "+pageUrl);
    expect(pageTitle).toBe("OrangeHRM");
    expect(pageUrl).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})
