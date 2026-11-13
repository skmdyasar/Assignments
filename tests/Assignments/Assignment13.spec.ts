/*
Assignment 13: Bootstrap dropdown
Navigate to https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/ and automate 
Multi Selection With Cascade Option Select

*/

import {Locator, test, expect} from "@playwright/test";
import {selectMultipleDropDownOptions} from "../../src/utilities/SelectMultipleOptions";

test("Test for Multi Selection With Cascade Option Select", async({page}) => {
    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");
    await page.locator("input#justAnInputBox1").click();
    await page.waitForTimeout(3000);
    let allOptions : Locator = await page.locator('//input[@id="justAnInputBox1"]//parent::div//following-sibling::div//span[starts-with(@class,"comboTreeItemTitle")]');
    await selectMultipleDropDownOptions(page, allOptions, ["choice 1", "choice 2 2", "choice 2 3", "choice 6 2"]);
    await page.waitForTimeout(10000);
})
