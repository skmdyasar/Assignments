/*

Assignment 14: REdbus calendar
Navigate https://www.redbus.in/ app and autodate given calendar

*/

import {Locator, test, expect} from "@playwright/test";
import {selectMultipleDropDownOptions} from "../../src/utilities/SelectMultipleOptions";

test("Test for Calendar Date Picker Selection for Red Bus", async({page}) => {
    await page.goto("https://www.redbus.in/", {waitUntil:"load"});
    await page.locator('div[class *="dateHighlight"]').click();
    await page.waitForTimeout(2000);

    const date : string = "15";
    const month : string = "July";
    const year : string = "2027";


    while(true){
        let currentMonthAndYear : string[] = (await page.locator('p[class *="monthYear"]').innerText()).split(" ");
        // console.log("currentMonthAndYear is "+currentMonthAndYear, currentMonthAndYear[0], currentMonthAndYear[1]);
        let currentMonth : string = currentMonthAndYear[0];
        let currentYear : string = currentMonthAndYear[1];
        if(currentMonth === month && currentYear === year){
            break;
        } else {
            await page.locator('[aria-label*="Next month"]').click();
        }
    }

    // await page.locator('ul[role="grid"] div[class$="calendarDate"] span').filter({hasText:`${date}`}).click();

    // or

    await page.locator(`//div[contains(@class, "calendarDate")]//span[text()='${date}']`).click();

    await page.waitForTimeout(5000);
})
