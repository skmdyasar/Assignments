/* 

Assignment 10: Select base dropdown
Navigate to https://register.rediff.com/register/register.php?FormName=user_details app and automate for dropdown

*/

import {test, expect, Locator} from "@playwright/test";

test("Select Dropdown test case", async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details", { waitUntil:"load" });

    const countryDropDown = await page.locator("#country");
    await page.waitForTimeout(5000);
    await countryDropDown.selectOption("Bangladesh");
    await page.waitForTimeout(2000);
    await countryDropDown.selectOption({label : "Canada"});
    await page.waitForTimeout(2000);
    await countryDropDown.selectOption({value : "57"}); // Cypruss
    await page.waitForTimeout(2000);
    await countryDropDown.selectOption({index : 80}); // Germany
    await page.waitForTimeout(2000);

    const values = await countryDropDown.locator("option").allInnerTexts();

    console.log(values);
})