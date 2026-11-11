/*
Assignment3:
Write script for Login  and Logout Functionality of Orangehrm using cssSelector
Use URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

*/

import {test, expect} from "@playwright/test";


test("Orange HRM Live Login", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[type="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(/dashboard/);
    // await page.waitForSelector('img.oxd-userdropdown-img');
    await page.locator('img.oxd-userdropdown-img').click();
    await page.getByText("Logout").click();
    await expect(page).toHaveURL(/auth\/login/);
    // await page.waitForSelector('input[name="username"]');
})
