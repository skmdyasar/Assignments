/*
Assignment 8:
Write script for Login  and Logout Functionality of Orangehrm using xpath
Use URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*/

import {test, expect} from "@playwright/test";

test("Orange HRM Live automate login and logout scenario based on xpath", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@type="password"]').fill("admin123");
    await page.locator('//button[normalize-space()="Login"]').click();
    const profileSel = '//li[@class="oxd-userdropdown"]';
    await expect(page).toHaveURL(/dashboard/);
    await page.waitForSelector(profileSel);
    await page.locator(profileSel).click();
    await page.locator('//a[text()="Logout"]').click();
    await expect(page).toHaveURL(/auth\/login/);
})