/*
Assignment 7: xpath
Navigate to https://tutorialsninja.com/demo/index.php?route=account/login app
and automate login and logout scenario based on xpath
*/

import {test, expect} from "@playwright/test";

test("Tutorials Ninja automate login and logout scenario based on xpath", async({page}) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
})