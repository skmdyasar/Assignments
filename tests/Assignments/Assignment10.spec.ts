/* 

Assignment 10: Select base dropdown
Navigate to https://register.rediff.com/register/register.php?FormName=user_details app and automate for dropdown

*/

import {test} from "@playwright/test";

test("Select Dropdown test case", async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details", { waitUntil:"load" });

    const countryDropDown = await page.locator("#country");
    await page.waitForTimeout(5000);

    // select by visible text
    await countryDropDown.selectOption("Bangladesh");
    await page.waitForTimeout(2000);

    // select by label
    await countryDropDown.selectOption({label : "Canada"});
    await page.waitForTimeout(2000);

    // select by value
    await countryDropDown.selectOption({value : "57"}); // Cypruss
    await page.waitForTimeout(2000);

    // select by index
    await countryDropDown.selectOption({index : 80}); // Germany
    await page.waitForTimeout(2000);

    // print all drop-down options
    const values : string[] = await countryDropDown.locator("option").allInnerTexts();
    for(let val of values){
        console.log(val);
    }

    // get selected option
    console.log("The Selected value is "+await countryDropDown.locator("option:checked").innerText());

})