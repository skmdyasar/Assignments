/*
Assignment 9:
Navigate to https://testautomationpractice.blogspot.com/p/playwrightpractice.html app
and locate all scenarios as per built in locator strategy.
*/

import {test, expect} from "@playwright/test";

test("Locating elements as per Built-in Locators", async({page}) => {
    const highlightValue = "outline: 2px solid red;";
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.waitForTimeout(3000);
    await page.getByRole("button", {name : "Primary Action"}).highlight({style : highlightValue});
    await page.getByRole("textbox", {name : "Username"}).highlight({style : highlightValue});
    const acceptTerms = await page.getByRole("checkbox", {name : "Accept terms"});
    await acceptTerms.check();
    await acceptTerms.highlight({style : highlightValue});
    await page.getByRole("menuitem", {name : "Home"}).highlight({style : highlightValue});

    await page.getByText("List item 1").highlight({style : highlightValue});
    await page.getByText("List item 2 with").highlight({style : highlightValue});
    await page.getByText("Special: Unique text identifier").highlight({style : highlightValue});
    await page.getByText("Submit Form").highlight({style : highlightValue});

    await page.getByLabel("Email Address:").highlight({style : highlightValue});
    await page.getByLabel("Your Age:").highlight({style : highlightValue});
    const shippingMethod = await page.getByLabel("Standard");
    await shippingMethod.check();
    await shippingMethod.highlight({style : highlightValue});
    const express = await page.getByLabel("Express");
    await express.check();
    await express.highlight({style : highlightValue});

    await page.getByPlaceholder("Enter your full name").fill("This is the Full Name Text Box");
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill("9014220599");

    await page.getByAltText("logo image").highlight({style : highlightValue});

    await page.getByText("Home page link").highlight({style : highlightValue});
    await page.getByText("Tooltip text").highlight({style : highlightValue});
    await page.getByText("Click to save your changes").highlight({style : highlightValue});

    await page.getByTestId("edit-profile-btn").highlight({style : highlightValue})

    await page.waitForTimeout(5000);
})