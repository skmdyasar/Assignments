/*
    Assignment 4: Automate from website 3 test cases with css selector
    Navigate to this application 
    https://practicetestautomation.com/practice-test-login/

    TestData:
    Use next credentials to execute Login:
    Username: student
    Password: Password123

    Test case 1: Positive LogIn test
    Open page
    Type username student into Username field
    Type password Password123 into Password field
    Push Submit button
    Verify new page URL contains practicetestautomation.com/logged-in-successfully/
    Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    Verify button Log out is displayed on the new 

    Test case 2: Negative username test
    Open page
    Type username incorrectUser into Username field
    Type password Password123 into Password field
    Push Submit button
    Verify error message is displayed
    Verify error message text is Your username is invalid!

    Test case 3: Negative password test
    Open page
    Type username student into Username field
    Type password incorrectPassword into Password field
    Push Submit button
    Verify error message is displayed
    Verify error message text is Your password is invalid!
*/

import {test, expect, Locator} from "@playwright/test";

test("Test case 1: Positive LogIn test", async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input[name="username"]').fill('student');
    await page.locator('input[type="password"]').fill('Password123');
    await page.locator('button[id="submit"]').click();
    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(page.locator('body')).toContainText("Congratulations student. You successfully logged in!");
    await expect(page.locator('a[href*="test-login"]')).toBeVisible();
})

test("Test case 2: Negative username test", async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input[name="username"]').fill('Students');
    await page.locator('input[type="password"]').fill('Password123');
    await page.locator('button[id="submit"]').click();
    const errorMessage = await page.locator('#error');
    await expect(errorMessage).toHaveText("Your username is invalid!");
    const errorMessageText: string = await errorMessage.innerText();
    console.log("Error Message is "+errorMessageText);
})

test("Test case 2: Negative password test", async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input[name="username"]').fill('student');
    await page.locator('input[type="password"]').fill('Virat@123');
    await page.locator('button[id="submit"]').click();
    const errorMessage = await page.locator('#error');
    await expect(errorMessage).toHaveText("Your password is invalid!");
    const errorMessageText : Promise<string> = errorMessage.innerText();
    console.log("Error Message is "+errorMessageText);
})
