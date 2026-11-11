/* 

Assignment 11: Select base dropdown
Navigate to https://www.amazon.in/ and automate dropdown
[aria-describedby*="search"] option
*/

import {test} from "@playwright/test";

test("Select Dropdown test case for  Amazon WebSite", async({page})=>{
    await page.goto("https://www.amazon.in/", { waitUntil:"load" });

    const categoryDropDown = await page.locator('[aria-describedby*="search"]');
    await page.waitForTimeout(5000);

    // select by visible text
    await categoryDropDown.selectOption("Amazon Fresh"); // Amazon Fresh
    await page.waitForTimeout(2000);

    // select by label
    await categoryDropDown.selectOption({label : "Clothing & Accessories"}); // Clothing & Accessories
    await page.waitForTimeout(2000);

    // select by value
    await categoryDropDown.selectOption({value : "search-alias=audible"}); // Audible Audiobooks
    await page.waitForTimeout(2000);

    // select by index
    await categoryDropDown.selectOption({index : 38}); // Sports, Fitness & Outdoors
    await page.waitForTimeout(2000);

    // print all drop-down options
    const values : string[] = await categoryDropDown.locator("option").allInnerTexts();
    for(let val of values){
        console.log(val);
    }

    // get selected option
    console.log("The Selected value is "+await categoryDropDown.locator("option:checked").innerText());

})
