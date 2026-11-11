/*
Assignment 6:
Navigate to https://tutorialsninja.com/demo/index.php?route=account/login app
and get the all footer links text in console.
*/

import {Locator, test} from "@playwright/test";



test("Printing Footers", async({page}) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login", {waitUntil : 'load'});
    await page.waitForTimeout(5000);
    await page.waitForSelector("footer li a");
    const footerTexts = await page.locator('footer li a');
    
    const count : number = await footerTexts.count();
    console.log('Total footer Links are : ' + count);

    const allFooterTexts : Locator[] = await footerTexts.all();

    for(let footerText of allFooterTexts){
        console.log(await footerText.innerText());
    }
    // for(let i=0; i<allFooterTexts.length;i++){
    //     console.log(`Footer Link Text ${i+1} : ${allFooterTexts[i]}`);
    // }
})
