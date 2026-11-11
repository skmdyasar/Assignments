/*
Assignment 5:
Navigate to https://www.amazon.in/ app and search for "macbook pro" and get the search result along with count in console.
*/

import {test, expect} from "@playwright/test";

test("Printing Amazon Search Results", async({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@type="text" and @id="twotabsearchtextbox"]').fill("macbook pro");
    await page.waitForTimeout(2000);
    const suggestions = page.locator('.s-suggestion-container .s-suggestion');

    const count : number = await suggestions.count();
    console.log('Total suggestions: ' + count);

    const suggestionTexts : string[] = await suggestions.allInnerTexts();

    for(let suggestionText of suggestionTexts){
        console.log(suggestionText);
    }
})