/* 

Assignment 12: Bootsrap dropdown
Navigate to https://www.redbus.in/ and automate from and to both dropdown

*/


import {Locator, test} from "@playwright/test";

test("Bootstrap Dropdown test case for RedBus WebSite", async({page})=>{
    await page.goto("https://www.redbus.in/", { waitUntil:"load" });
    await page.waitForTimeout(5000);

    const fromSel = await page.locator("#srcinput");
    await fromSel.fill("Bengaluru");

    await page.waitForTimeout(2000);

    let allOptions : Locator[] = await page.locator('div[class *="listItem"] div [role="heading"]').all();

    for(let option of allOptions){
        let optValue = await option.innerText();
        if(await optValue.includes("Marathahalli, Bengaluru")) {
            await option.click();
            break;
        }
    }

    console.log("The Starting selected area is "+await fromSel.getAttribute("value"));
    
    
    const toSel = await page.locator("#destinput");
    await toSel.fill("Hyderabad");

    await page.waitForTimeout(2000);

    let allDestOptions : Locator[] = await page.locator('div[class *="listItem"] div [role="heading"]').all();

    for(let destOption of allDestOptions){
        let destOptValue = await destOption.innerText();
        if(await destOptValue.includes("Ameerpet, Hyderabad")) {
            await destOption.click();
            break;
        }
    }

    console.log("The Destination selected area is "+await toSel.getAttribute("value"));

    await page.waitForTimeout(5000);

})
