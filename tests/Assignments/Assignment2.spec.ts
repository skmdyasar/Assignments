/*
Assignment2:Practice navigation methods.
Steps
Open https://www.amazon.in/
open https://www.google.com/
get the title and print same
Navigate back
get the title and print same
Navigate forward
get the title and print same
Reload page
*/

import {test, expect} from "@playwright/test";

test("Assignment2:Practice navigation methods.", async({page}) =>{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    let googleTitle = await page.title();
    console.log("The page title is "+googleTitle);
    await page.goBack();
    await page.waitForTimeout(3000);
    let amazonTitle = await page.title();
    console.log("The page title is "+amazonTitle);
    await page.goForward();
    await page.waitForTimeout(3000);
    let googleTitle2 = await page.title();
    console.log("The page title is "+googleTitle2);
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);
})
